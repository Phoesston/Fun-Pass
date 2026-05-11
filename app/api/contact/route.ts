import { sendContactFormCustomer, sendContactFormAdmin } from '@/lib/ses'
import { rateLimit } from '@/lib/rate-limit'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name:       z.string().min(2),
  email:      z.string().email(),
  phone:      z.string().optional(),
  service:    z.enum(['Party Rentals', 'Foam Rentals', 'Both']),
  event_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
  message:    z.string().optional(),
})

function generateRef(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let ref = 'FP-'
  for (let i = 0; i < 6; i++) ref += chars[Math.floor(Math.random() * chars.length)]
  return ref
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please wait a few minutes and try again.' }, { status: 429 })
  }

  const body = await req.json()

  if (body.hp_check) {
    return NextResponse.json({ ref: generateRef() }, { status: 200 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { name, email, phone, service, event_date, message } = parsed.data
  const ref = generateRef()

  const payload = { name, email, phone, service, event_date, message, ref }

  await Promise.allSettled([
    sendContactFormCustomer(payload),
    sendContactFormAdmin(payload),
  ])

  return NextResponse.json({ ref }, { status: 200 })
}
