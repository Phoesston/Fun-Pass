import InquiryForm from '@/app/components/InquiryForm'

export const metadata = {
  title: 'Contact Us | Fun Pass Entertainment Group',
  description: 'Get in touch with Fun Pass Entertainment Group. Call us or send an inquiry.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-blue-900 to-brand-navy pt-32 pb-24 text-center overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-brand-yellow/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-brand-sky/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            We respond within 24 hours
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">
            Get in <span className="text-brand-yellow">Touch</span>
          </h1>
          <p className="text-white/70 text-xl">
            We&apos;d love to help make your event legendary.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — contact details */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-4xl text-brand-navy mb-3">
                  Let&apos;s Talk
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Have a question or ready to book? Give us a call or fill out the form and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Phone */}
              <a
                href="tel:+19413963366"
                className="flex items-center gap-5 bg-brand-navy rounded-2xl p-6 shadow-md hover:bg-brand-sky transition-colors group"
              >
                <div className="bg-white/15 rounded-xl p-4 text-2xl flex-shrink-0">📞</div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">Call Us</p>
                  <p className="font-display text-2xl text-white">
                    (941) 396-3366
                  </p>
                </div>
                <div className="ml-auto text-white/40 group-hover:text-white/80 transition-colors text-xl">→</div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="bg-brand-yellow/20 rounded-xl p-4 text-2xl flex-shrink-0">📍</div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Based In</p>
                  <p className="font-semibold text-brand-navy text-lg">Palmetto, FL</p>
                  <p className="text-sm text-gray-500 mt-0.5">Serving Bradenton, Sarasota &amp; the Suncoast</p>
                </div>
              </div>
              
            </div>

            {/* Right — inquiry form */}
            <div>
              <h2 className="font-display text-3xl text-brand-navy mb-6">Send an Inquiry</h2>
              <InquiryForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
