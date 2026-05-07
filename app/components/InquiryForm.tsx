'use client'

import { useState } from 'react'

type ServiceOption = 'Party Rentals' | 'Foam Rentals' | 'Both'

interface Props {
  defaultService?: ServiceOption
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function InquiryForm({ defaultService = 'Party Rentals' }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [ref, setRef] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const [form, setForm] = useState({
    first_name: '',
    last_name:  '',
    email:      '',
    phone:      '',
    service:    defaultService as ServiceOption,
    event_date: '',
    message:    '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:       `${form.first_name} ${form.last_name}`.trim(),
          email:      form.email,
          phone:      form.phone || undefined,
          service:    form.service,
          event_date: form.event_date,
          message:    form.message || undefined,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error?.formErrors?.[0] ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setRef(data.ref)
      setStatus('success')
    } catch {
      setErrorMsg('Network error — please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl shadow-md ring-1 ring-gray-100 p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="font-display text-2xl text-brand-navy mb-2">We got your inquiry!</h3>
        <p className="text-gray-500 mb-6">
          We&apos;ll be in touch within 24 hours. Here&apos;s your reference code:
        </p>
        <div className="inline-block bg-brand-navy rounded-2xl px-8 py-4 mb-6">
          <p className="text-brand-yellow font-black text-3xl tracking-[6px]">{ref}</p>
        </div>
        <p className="text-gray-400 text-sm">
          Save this code — you can use it when following up with us.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition'

  const labelClass = 'block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1'

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-md ring-1 ring-gray-100 p-8 space-y-5">

      {/* First Name + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="first_name" className={labelClass}>First Name <span className="text-red-400">*</span></label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            minLength={2}
            placeholder="Jane"
            value={form.first_name ?? ''}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="last_name" className={labelClass}>Last Name <span className="text-red-400">*</span></label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            required
            minLength={2}
            placeholder="Smith"
            value={form.last_name ?? ''}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>Email <span className="text-red-400">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            value={form.email ?? ''}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            value={form.phone ?? ''}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Service + Event Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className={labelClass}>Service <span className="text-red-400">*</span></label>
          <select
            id="service"
            name="service"
            required
            value={form.service ?? ''}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="Party Rentals">Party Rentals</option>
            <option value="Foam Rentals">Foam Rentals</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <div>
          <label htmlFor="event_date" className={labelClass}>Event Date <span className="text-red-400">*</span></label>
          <input
            id="event_date"
            name="event_date"
            type="date"
            required
            value={form.event_date ?? ''}
            onChange={handleChange}
            min={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
            className={inputClass}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Tell us about your event</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Number of guests, location, any special requests..."
          value={form.message ?? ''}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {errorMsg && (
        <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-navy text-white font-bold py-4 rounded-full text-sm uppercase tracking-wide hover:bg-brand-sky disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'loading' ? 'Sending…' : 'Send Inquiry'}
      </button>

      <p className="text-center text-gray-400 text-xs">
        We&apos;ll respond within 24 hours. No spam, ever.
      </p>
    </form>
  )
}
