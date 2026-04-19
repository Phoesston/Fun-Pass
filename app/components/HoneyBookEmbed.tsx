'use client';

import Script from 'next/script';

interface HoneyBookEmbedProps {
  companyId: string;
  formId: string;
}

export default function HoneyBookEmbed({ companyId, formId }: HoneyBookEmbedProps) {
  if (!companyId || !formId) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center">
        <p className="text-4xl mb-3">📋</p>
        <p className="font-display text-brand-navy text-2xl mb-2">HoneyBook Form</p>
        <p className="text-gray-400 text-sm max-w-sm mx-auto">
          Put Honeybook Form here{' '}
          <code className="bg-gray-100 px-1 rounded">companyId</code> and{' '}
          <code className="bg-gray-100 px-1 rounded">formId</code> props to activate the booking form.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={`hb-p-${companyId}-${formId}`} />
      <Script
        src="https://widget.honeybook.com/assets_users_production/website_tools/lead-form.js"
        strategy="lazyOnload"
      />
    </>
  );
}
