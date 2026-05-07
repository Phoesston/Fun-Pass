import { createClient } from '@/lib/supabase-server'
import { sendInquiryReceived, sendAdminNewInquiry } from '@/lib/ses'
import { NextResponse } from 'next/server'
import { z } from 'zod'
import { format, addDays } from 'date-fns'

const schema = z.object({
  customer_name:  z.string().min(2),
  customer_email: z.string().email(),
  customer_phone: z.string().optional(),
  message:        z.string().optional(),
  items: z.array(z.object({
    equipment_id: z.string().uuid(),
    start_date:   z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    end_date:     z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  })).min(1),
})

export async function POST(req: Request) {
  const supabase = createClient()
  const body = await req.json()

  // ── Validate input ──────────────────────────────────────────
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }
  const { customer_name, customer_email, customer_phone, message, items } = parsed.data

  // ── Deduplication check ─────────────────────────────────────
  // Prevent double-submission within 5 minutes
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString()
  const { data: recentInquiry } = await supabase
    .from('inquiries')
    .select('id, reference_code')
    .eq('customer_email', customer_email)
    .eq('status', 'pending')
    .gte('submitted_at', fiveMinutesAgo)
    .limit(1)
    .single()

  if (recentInquiry) {
    return NextResponse.json(
      { deduplicated: true, reference_code: recentInquiry.reference_code },
      { status: 200 }
    )
  }

  // ── Per-item validation ─────────────────────────────────────
  for (const item of items) {
    // Fetch equipment to check notice days and availability
    const { data: equipment } = await supabase
      .from('equipment')
      .select('id, name, minimum_notice_days, quantity, is_available')
      .eq('id', item.equipment_id)
      .single()

    if (!equipment || !equipment.is_available) {
      return NextResponse.json(
        { error: `Equipment is no longer available.` },
        { status: 400 }
      )
    }

    // Check minimum notice days
    const minDate = format(addDays(new Date(), equipment.minimum_notice_days), 'yyyy-MM-dd')
    if (item.start_date < minDate) {
      return NextResponse.json(
        { error: `${equipment.name} requires at least ${equipment.minimum_notice_days} days notice. Earliest available: ${minDate}` },
        { status: 400 }
      )
    }

    // Check end >= start
    if (item.end_date < item.start_date) {
      return NextResponse.json(
        { error: 'End date must be on or after start date.' },
        { status: 400 }
      )
    }

    // Check blackout dates
    const { data: blackouts } = await supabase
      .from('blackout_dates')
      .select('date')
      .gte('date', item.start_date)
      .lte('date', item.end_date)

    if (blackouts && blackouts.length > 0) {
      return NextResponse.json(
        { error: `Some selected dates are unavailable due to a scheduled closure.` },
        { status: 400 }
      )
    }

    // Check quantity-aware conflict
    // Count how many confirmed bookings overlap for this equipment
    const { count } = await supabase
      .from('bookings')
      .select('id', { count: 'exact', head: true })
      .eq('equipment_id', item.equipment_id)
      .eq('status', 'confirmed')
      .lte('start_date', item.end_date)
      .gte('end_date', item.start_date)

    if ((count ?? 0) >= equipment.quantity) {
      return NextResponse.json(
        { error: `${equipment.name} is fully booked for the selected dates.` },
        { status: 409 }
      )
    }
  }

  // ── Create inquiry ──────────────────────────────────────────
  const { data: inquiry, error: inquiryError } = await supabase
    .from('inquiries')
    .insert({ customer_name, customer_email, customer_phone, message })
    .select()
    .single()

  if (inquiryError || !inquiry) {
    return NextResponse.json({ error: 'Failed to create inquiry.' }, { status: 500 })
  }

  // ── Create bookings ─────────────────────────────────────────
  const bookingInserts = items.map(item => ({
    inquiry_id:   inquiry.id,
    equipment_id: item.equipment_id,
    start_date:   item.start_date,
    end_date:     item.end_date,
    status:       'pending',
    // No price_snapshot — pricing is discussed with admin
  }))

  const { data: bookings, error: bookingsError } = await supabase
    .from('bookings')
    .insert(bookingInserts)
    .select('*, equipment:equipment_id(*)')

  if (bookingsError) {
    // Clean up the inquiry if bookings failed
    await supabase.from('inquiries').delete().eq('id', inquiry.id)
    if (bookingsError.code === '23P01') {
      return NextResponse.json({ error: 'Booking conflict detected. Please choose different dates.' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Failed to create bookings.' }, { status: 500 })
  }

  // ── Send emails ─────────────────────────────────────────────
  await Promise.allSettled([
    sendInquiryReceived(inquiry, bookings as any),
    sendAdminNewInquiry(inquiry, bookings as any),
  ])

  return NextResponse.json({
    reference_code: inquiry.reference_code,
    inquiry_id: inquiry.id,
  }, { status: 201 })
}

// GET all inquiries (admin only)
export async function GET(req: Request) {
  const key = req.headers.get('x-admin-key')
  if (!key || key !== process.env.ADMIN_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createClient()
  const { data, error } = await supabase
    .from('inquiries')
    .select('*, bookings(*, equipment:equipment_id(*))')
    .order('submitted_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ data })
}