import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { Booking, Equipment, Inquiry } from '@/types'
import { displayDate, countDays, escapeHtml } from './utils'

const sesClient = new SESClient({
  region: process.env.AWS_SES_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY!,
  },
})

const FROM = `Fun Pass Entertainment Group <${process.env.AWS_SES_FROM_EMAIL!.trim()}>`
const ADMIN = process.env.AWS_SES_ADMIN_EMAIL!
const APP_URL = process.env.NEXT_PUBLIC_APP_URL!

// Base send function
async function sendEmail(to: string, subject: string, html: string) {
  try {
    await sesClient.send(new SendEmailCommand({
      Source: FROM,
      Destination: { ToAddresses: [to] },
      Message: {
        Subject: { Data: subject, Charset: 'UTF-8' },
        Body: { Html: { Data: html, Charset: 'UTF-8' } },
      },
    }))
    return { success: true }
  } catch (error) {
    console.error('SES error:', error)
    return { success: false }
  }
}

// Shared email wrapper style
function emailWrapper(content: string): string {
  return `
    <div style="font-family:'Helvetica Neue',sans-serif;max-width:580px;margin:0 auto;color:#0f172a;">
      <div style="background:#0f172a;padding:24px 32px;border-radius:16px 16px 0 0;text-align:center;">
        ${APP_URL
          ? `<img src="${APP_URL}/logos/Fun-PassLogo.png" alt="Fun Pass Entertainment Group" style="height:64px;width:auto;display:inline-block;" />`
          : `<h1 style="margin:0;color:#F59E0B;font-size:26px;font-family:'Helvetica Neue',sans-serif;">🎲 Fun Pass Entertainment Group</h1>`
        }
      </div>
      <div style="background:#f8fafc;padding:32px;border-radius:0 0 16px 16px;border:1px solid #e2e8f0;">
        ${content}
      </div>
      <p style="text-align:center;font-size:11px;color:#94a3b8;margin-top:16px;">
        Fun Pass Entertainment Group &middot; Making parties legendary
      </p>
    </div>`
}

// 1. Customer receives after submitting inquiry
export async function sendInquiryReceived(inquiry: Inquiry, bookings: (Booking & { equipment: Equipment })[]) {
  const itemRows = bookings.map(b => {
    const days = countDays(b.start_date, b.end_date)
    return `
      <tr>
        <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;">${b.equipment.emoji} ${b.equipment.name}</td>
        <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;text-align:right;">${displayDate(b.start_date)} → ${displayDate(b.end_date)} (${days}d)</td>
      </tr>`
  }).join('')

  const html = emailWrapper(`
    <h2 style="margin:0 0 8px;">Hi ${inquiry.customer_name},</h2>
    <p style="color:#64748b;margin:0 0 24px;">
      Thanks for your inquiry! We've received your request and will be in touch within 24 hours to discuss availability and pricing.
    </p>
    <div style="background:#fff;border-radius:12px;padding:20px;border:1px solid #e2e8f0;margin-bottom:24px;">
      <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;">Your Reference Code</p>
      <p style="margin:0 0 16px;font-size:28px;font-weight:900;color:#F59E0B;letter-spacing:4px;">${inquiry.reference_code}</p>
      <p style="margin:0 0 12px;font-size:12px;font-weight:700;text-transform:uppercase;color:#94a3b8;">Items Requested</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">${itemRows}</table>
    </div>
    <p style="color:#64748b;font-size:13px;margin:0;">
      Save your reference code — you can use it to follow up with us at <a href="mailto:${ADMIN}">${ADMIN}</a>
    </p>
  `)

  return sendEmail(inquiry.customer_email, `Inquiry Received — Ref: ${inquiry.reference_code}`, html)
}

// 2. Admin notified of new inquiry
export async function sendAdminNewInquiry(inquiry: Inquiry, bookings: (Booking & { equipment: Equipment })[]) {
  const itemRows = bookings.map(b => {
    const days = countDays(b.start_date, b.end_date)
    return `<li style="margin-bottom:6px;">${b.equipment.emoji} <strong>${b.equipment.name}</strong> — ${displayDate(b.start_date)} → ${displayDate(b.end_date)} (${days} days)</li>`
  }).join('')

  const html = emailWrapper(`
    <h2 style="margin:0 0 16px;">🔔 New Inquiry — ${inquiry.reference_code}</h2>
    <p><strong>Name:</strong> ${inquiry.customer_name}</p>
    <p><strong>Email:</strong> ${inquiry.customer_email}</p>
    <p><strong>Phone:</strong> ${inquiry.customer_phone || 'Not provided'}</p>
    ${inquiry.message ? `<p><strong>Message:</strong> "${inquiry.message}"</p>` : ''}
    <ul style="margin:16px 0;">${itemRows}</ul>
    <a href="${APP_URL}/admin/bookings" style="display:inline-block;background:#0f172a;color:#fff;padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:700;margin-top:8px;">
      View in Dashboard →
    </a>
  `)

  return sendEmail(ADMIN, `New Inquiry: ${inquiry.reference_code} — ${inquiry.customer_name}`, html)
}

// 3. Booking confirmed
export async function sendBookingConfirmed(inquiry: Inquiry, booking: Booking & { equipment: Equipment }) {
  const days = countDays(booking.start_date, booking.end_date)
  const html = emailWrapper(`
    <h2 style="color:#10b981;margin:0 0 8px;">✅ Booking Confirmed!</h2>
    <p>Hi <strong>${inquiry.customer_name}</strong>,</p>
    <p style="color:#64748b;">Your booking for <strong>${booking.equipment.name}</strong> has been confirmed.</p>
    <div style="background:#fff;border-radius:12px;padding:20px;border:1px solid #e2e8f0;margin:20px 0;">
      <p><strong>Dates:</strong> ${displayDate(booking.start_date)} → ${displayDate(booking.end_date)} (${days} days)</p>
      <p><strong>Reference:</strong> ${inquiry.reference_code}</p>
      ${booking.admin_note ? `<p><strong>Note from us:</strong> ${booking.admin_note}</p>` : ''}
    </div>
    <p style="color:#64748b;font-size:13px;">We'll be in touch closer to your event date with delivery details.</p>
  `)
  return sendEmail(inquiry.customer_email, `✅ Confirmed — ${booking.equipment.name} | ${inquiry.reference_code}`, html)
}

// 4. Booking cancelled
export async function sendBookingCancelled(inquiry: Inquiry, booking: Booking & { equipment: Equipment }, reason?: string) {
  const html = emailWrapper(`
    <h2 style="margin:0 0 8px;">Booking Update — ${inquiry.reference_code}</h2>
    <p>Hi <strong>${inquiry.customer_name}</strong>,</p>
    <p style="color:#64748b;">Unfortunately we're unable to fulfil your booking for <strong>${booking.equipment.name}</strong> on the requested dates.</p>
    ${reason ? `<p><strong>Reason:</strong> ${reason}</p>` : ''}
    <p style="color:#64748b;">Please visit our site to check alternative dates or equipment, or reply to this email and we'll help you find a solution.</p>
  `)
  return sendEmail(inquiry.customer_email, `Booking Update — ${booking.equipment.name} | ${inquiry.reference_code}`, html)
}

// 5. Admin added an item to their inquiry
export async function sendItemAdded(inquiry: Inquiry, booking: Booking & { equipment: Equipment }) {
  const days = countDays(booking.start_date, booking.end_date)
  const html = emailWrapper(`
    <h2 style="margin:0 0 8px;">Item Added to Your Inquiry</h2>
    <p>Hi <strong>${inquiry.customer_name}</strong>,</p>
    <p style="color:#64748b;">We've added <strong>${booking.equipment.name}</strong> to your inquiry <strong>${inquiry.reference_code}</strong>.</p>
    <div style="background:#fff;border-radius:12px;padding:20px;border:1px solid #e2e8f0;margin:20px 0;">
      <p><strong>Item:</strong> ${booking.equipment.emoji} ${booking.equipment.name}</p>
      <p><strong>Dates:</strong> ${displayDate(booking.start_date)} → ${displayDate(booking.end_date)} (${days} days)</p>
    </div>
    <p style="color:#64748b;font-size:13px;">Reply to this email if you have any questions.</p>
  `)
  return sendEmail(inquiry.customer_email, `Item Added — ${inquiry.reference_code}`, html)
}

// 6. Admin removed an item from inquiry
export async function sendItemRemoved(inquiry: Inquiry, equipmentName: string, reason?: string) {
  const html = emailWrapper(`
    <h2 style="margin:0 0 8px;">Item Removed from Your Inquiry</h2>
    <p>Hi <strong>${inquiry.customer_name}</strong>,</p>
    <p style="color:#64748b;"><strong>${equipmentName}</strong> has been removed from your inquiry <strong>${inquiry.reference_code}</strong>.</p>
    ${reason ? `<p><strong>Reason:</strong> ${reason}</p>` : ''}
    <p style="color:#64748b;font-size:13px;">Reply to this email if you have any questions or would like to request an alternative.</p>
  `)
  return sendEmail(inquiry.customer_email, `Item Removed — ${inquiry.reference_code}`, html)
}

// 7. Inquiry expired (no admin response in 48h)
export async function sendInquiryExpired(inquiry: Inquiry) {
  const html = emailWrapper(`
    <h2 style="margin:0 0 8px;">Inquiry Expired — ${inquiry.reference_code}</h2>
    <p>Hi <strong>${inquiry.customer_name}</strong>,</p>
    <p style="color:#64748b;">Your inquiry has expired as we were unable to process it within our usual 24-hour window. We apologise for any inconvenience.</p>
    <p style="color:#64748b;">Please visit our site to submit a new inquiry, or contact us directly at <a href="mailto:${ADMIN}">${ADMIN}</a>.</p>
  `)
  return sendEmail(inquiry.customer_email, `Inquiry Expired — ${inquiry.reference_code}`, html)
}

// 9. Contact form — customer confirmation
export async function sendContactFormCustomer(data: {
  name: string
  email: string
  phone?: string
  service: string
  event_date: string
  message?: string
  ref: string
}) {
  const name = escapeHtml(data.name)
  const phone = data.phone ? escapeHtml(data.phone) : null
  const message = data.message ? escapeHtml(data.message) : null

  const html = emailWrapper(`
    <h2 style="margin:0 0 8px;">Hi ${name},</h2>
    <p style="color:#64748b;margin:0 0 24px;">
      Thanks for reaching out! We've received your inquiry and will get back to you within 24 hours to discuss availability and pricing.
    </p>
    <div style="background:#fff;border-radius:12px;padding:20px;border:1px solid #e2e8f0;margin-bottom:24px;">
      <!-- Reference code — commented out for now
      <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;">Your Reference Code</p>
      <p style="margin:0 0 16px;font-size:28px;font-weight:900;color:#F59E0B;letter-spacing:4px;">${data.ref}</p>
      -->
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr>
          <td style="padding:6px 0;border-bottom:1px solid #e2e8f0;color:#64748b;">Service</td>
          <td style="padding:6px 0;border-bottom:1px solid #e2e8f0;text-align:right;font-weight:600;">${data.service}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;border-bottom:1px solid #e2e8f0;color:#64748b;">Event Date</td>
          <td style="padding:6px 0;border-bottom:1px solid #e2e8f0;text-align:right;font-weight:600;">${data.event_date}</td>
        </tr>
        ${phone ? `<tr><td style="padding:6px 0;color:#64748b;">Phone</td><td style="padding:6px 0;text-align:right;font-weight:600;">${phone}</td></tr>` : ''}
      </table>
      ${message ? `<p style="margin:16px 0 0;font-size:13px;color:#64748b;border-top:1px solid #e2e8f0;padding-top:12px;"><strong>Your message:</strong> "${message}"</p>` : ''}
    </div>
    <!-- <p style="color:#64748b;font-size:13px;margin:0;">
      Save your reference code — you can use it to follow up with us at <a href="mailto:${ADMIN}">${ADMIN}</a>
    </p> -->
  `)
  return sendEmail(data.email, `Inquiry Received`, html)
}

// 10. Contact form — admin notification
export async function sendContactFormAdmin(data: {
  name: string
  email: string
  phone?: string
  service: string
  event_date: string
  message?: string
  ref: string
}) {
  const name = escapeHtml(data.name)
  const phone = data.phone ? escapeHtml(data.phone) : null
  const message = data.message ? escapeHtml(data.message) : null

  const html = emailWrapper(`
    <h2 style="margin:0 0 16px;">🔔 New Inquiry — ${data.ref}</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Event Date:</strong> ${data.event_date}</p>
    ${message ? `<p><strong>Message:</strong> "${message}"</p>` : ''}
    <a href="mailto:${data.email}" style="display:inline-block;background:#0f172a;color:#fff;padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:700;margin-top:8px;">
      Reply to Customer →
    </a>
  `)
  return sendEmail(ADMIN, `New Inquiry: ${data.ref} — ${name}`, html)
}

// 8. Reminder to admin: inquiry hasn't been actioned in 24h
export async function sendAdminReminder(inquiry: Inquiry) {
  const html = emailWrapper(`
    <h2 style="margin:0 0 8px;">⏰ Reminder: Inquiry Awaiting Action</h2>
    <p>Inquiry <strong>${inquiry.reference_code}</strong> from <strong>${inquiry.customer_name}</strong> has been waiting for over 24 hours.</p>
    <p>It will auto-expire in another 24 hours if not actioned.</p>
    <a href="${APP_URL}/admin/bookings" style="display:inline-block;background:#F59E0B;color:#0f172a;padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:700;">
      Review Now →
    </a>
  `)
  return sendEmail(ADMIN, `⏰ Reminder: Inquiry ${inquiry.reference_code} awaiting action`, html)
}