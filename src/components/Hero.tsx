'use client';

import Link from 'next/link';

const stats = [
  { value: '2–6 wks', label: 'to launch a system your team can actually use' },
  { value: '↓ 40%', label: 'less manual work across operations' },
  { value: '24/7', label: 'visibility into what is moving and what is stuck' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black">
      <div className="absolute inset-0 dot-pattern opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(227,109,0,0.17)_0%,transparent_70%)]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

      <div className="container-custom relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="badge mb-10 animate-fade-in-up justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c46b] animate-pulse" />
            <span>Operations, automation and custom software</span>
          </div>

          <h1 className="text-[42px] md:text-[62px] lg:text-[82px] font-medium leading-[1.02] tracking-[-2px] mb-8 animate-fade-in-up delay-100">
            We build systems your team will{' '}
            <span className="gradient-text">actually use</span>
          </h1>

          <p className="text-base md:text-xl text-[#8a8a8a] max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
            Unitvent turns messy workflows and manual operations into clear systems, usable dashboards and internal software built for real execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300 mb-16">
            <Link href="#contact" className="btn-primary-filled px-8 py-4">
              Book a walkthrough
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#process" className="btn-secondary px-8 py-4">
              See how we work
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto animate-fade-in-up delay-400">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-[#1f1f1f] bg-[#0d0d0d]/90 px-6 py-5 text-left backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-medium mb-2">{stat.value}</div>
                <div className="text-sm text-[#8a8a8a]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
