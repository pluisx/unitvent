'use client';

const phases = [
  {
    step: '01',
    title: 'We audit the bottleneck',
    description:
      'We map where operations break down: manual tasks, slow handoffs, disconnected systems and poor visibility.',
    bullets: ['Process discovery', 'System map', 'Priorities and quick wins'],
    metric: '1 week',
  },
  {
    step: '02',
    title: 'We design the workflow and dashboard',
    description:
      'We define the ideal flow, business rules and a visual layer so your team can see what is happening in real time.',
    bullets: ['Automated flows', 'Stages and approvals', 'Operational dashboard'],
    metric: '2–3 weeks',
  },
  {
    step: '03',
    title: 'We implement and measure',
    description:
      'We connect APIs, automations and reporting so your team can run with less friction and more control.',
    bullets: ['Real integrations', 'Visible KPIs', 'Launch support'],
    metric: 'Go live',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-[#050505] border-y border-[#161616] overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <div className="badge mb-6">
            <span className="badge-dot" />
            <span>How we work</span>
          </div>
          <h2 className="text-[34px] md:text-[48px] lg:text-[56px] font-medium tracking-[-1.5px] mb-6">
            Less generic agency.{' '}
            <span className="gradient-text">More operating system.</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-2xl leading-relaxed">
            Unitvent designs workflows, automations and internal software for teams that are tired of running everything through WhatsApp, Excel and manual follow-up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <div
              key={phase.step}
              className={`gradient-border p-6 md:p-7 card-hover animate-fade-in-up delay-${(index + 1) * 100} process-card process-card-tilt`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[#e36d00] text-sm font-medium tracking-[0.18em]">{phase.step}</span>
                <span className="px-3 py-1 rounded-full border border-[#2a2a2a] text-xs text-[#8a8a8a] transition-all duration-300 group-hover:border-[#3a3a3a]">
                  {phase.metric}
                </span>
              </div>

              <h3 className="text-2xl font-medium mb-4">{phase.title}</h3>
              <p className="text-[#8a8a8a] mb-6 leading-relaxed">{phase.description}</p>

              <div className="rounded-[20px] border border-[#232323] bg-[#0b0b0b] p-4 mb-6 process-mockup transition-all duration-500 relative overflow-hidden">
                <div className="process-shimmer" />
                <div className="flex gap-2 mb-4 relative z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] animate-pulse" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] animate-pulse [animation-delay:150ms]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] animate-pulse [animation-delay:300ms]" />
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="h-3 rounded-full bg-[#161616] w-3/4 process-line process-line-1" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-2xl border border-[#202020] bg-[linear-gradient(180deg,#131313,#0d0d0d)] process-tile" />
                    <div className="h-20 rounded-2xl border border-[#202020] bg-[linear-gradient(180deg,#151515,#101010)] process-tile [animation-delay:120ms]" />
                    <div className="h-20 rounded-2xl border border-[#202020] bg-[linear-gradient(180deg,#1a120d,#100d0b)] ring-1 ring-[#e36d00]/15 process-tile process-tile-accent [animation-delay:240ms]" />
                  </div>
                  <div className="h-24 rounded-2xl border border-[#202020] bg-[radial-gradient(circle_at_top,rgba(227,109,0,0.14),transparent_40%),#101010] process-panel" />
                </div>
              </div>

              <ul className="space-y-3">
                {phase.bullets.map((bullet, bulletIndex) => (
                  <li key={bullet} className="flex items-center gap-3 text-sm text-[#b8b8b8] animate-fade-in-up" style={{ animationDelay: `${0.45 + index * 0.12 + bulletIndex * 0.08}s` }}>
                    <span className="w-5 h-5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#e36d00] text-[10px] process-check">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
