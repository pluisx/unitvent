'use client';

import Link from 'next/link';

const tiers = [
  {
    name: 'Operational Sprint',
    price: 'Starting at $2,500',
    description: 'For teams that need to fix one painful workflow fast.',
    features: [
      '1 core workflow automated',
      '1 operational dashboard',
      'Core integrations',
      'Implementation support',
    ],
    cta: 'Book a diagnostic',
    featured: false,
  },
  {
    name: 'Custom Operating System',
    price: 'Custom engagement',
    description: 'For companies that need a complete operational layer they can actually scale on.',
    features: [
      'Full workflow architecture',
      'Internal software + dashboards',
      'Advanced integrations / API work',
      'Ongoing support and improvements',
    ],
    cta: 'Book a walkthrough',
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge mb-6 justify-center">
            <span className="badge-dot" />
            <span>Engagement model</span>
          </div>
          <h2 className="text-[34px] md:text-[48px] lg:text-[56px] font-medium tracking-[-1.5px] mb-6">
            Clear pricing.{' '}
            <span className="gradient-text">No bloated consulting.</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg leading-relaxed">
            We start with a real bottleneck, solve it quickly, and scale into a deeper system if it makes sense.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-[28px] p-8 border ${tier.featured ? 'border-[#e36d00]/40 bg-[linear-gradient(180deg,#121212,#0b0b0b)]' : 'border-[#212121] bg-[#0f0f0f]'} card-hover`}
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-medium mb-2">{tier.name}</h3>
                  <p className="text-[#8a8a8a] max-w-md">{tier.description}</p>
                </div>
                {tier.featured && (
                  <span className="px-3 py-1 rounded-full text-xs border border-[#e36d00]/30 text-[#ffb168] bg-[#e36d00]/10">
                    Recommended
                  </span>
                )}
              </div>

              <div className="mb-8">
                <div className="text-3xl md:text-4xl font-medium tracking-[-1px] mb-2">{tier.price}</div>
                <p className="text-sm text-[#6f6f6f]">Diagnostic, scope and implementation plan defined before we build.</p>
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[#d0d0d0]">
                    <span className="w-5 h-5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#e36d00] text-[10px]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="#contact" className={tier.featured ? 'btn-primary-filled w-full justify-center py-4' : 'btn-secondary w-full justify-center py-4'}>
                {tier.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
