'use client';

const phases = [
  {
    step: '01',
    title: 'We audit the bottleneck',
    description:
      'We map where operations break down: manual tasks, slow handoffs, disconnected systems and poor visibility.',
    bullets: ['Process discovery', 'System map', 'Priorities and quick wins'],
    metric: '1 week',
    mock: {
      title: 'Ops Audit',
      status: '4 blockers found',
      rows: ['Manual approvals', 'Scattered updates', 'No stage owner'],
      type: 'audit',
    },
  },
  {
    step: '02',
    title: 'We design the workflow and dashboard',
    description:
      'We define the ideal flow, business rules and a visual layer so your team can see what is happening in real time.',
    bullets: ['Automated flows', 'Stages and approvals', 'Operational dashboard'],
    metric: '2–3 weeks',
    mock: {
      title: 'Workflow View',
      status: '3 stages automated',
      rows: ['Intake → Review', 'Review → Approval', 'Approval → Delivery'],
      type: 'workflow',
    },
  },
  {
    step: '03',
    title: 'We implement and measure',
    description:
      'We connect APIs, automations and reporting so your team can run with less friction and more control.',
    bullets: ['Real integrations', 'Visible KPIs', 'Launch support'],
    metric: 'Go live',
    mock: {
      title: 'Live Dashboard',
      status: 'Ops running live',
      rows: ['17 tasks completed', '3 waiting review', '1 urgent issue'],
      type: 'dashboard',
    },
  },
];

function MockAudit({ phase }: { phase: (typeof phases)[0] }) {
  return (
    <div className="relative z-10 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] uppercase tracking-[0.16em] text-[#6e6e6e] mb-1">{phase.mock.title}</div>
          <div className="text-sm text-white font-medium">{phase.mock.status}</div>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-[#151515] border border-[#262626] text-[10px] text-[#ffb168]">Live</div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-[#202020] bg-[linear-gradient(180deg,#131313,#0d0d0d)] p-3 process-tile">
          <div className="text-[10px] text-[#6b6b6b] mb-2">Tasks</div>
          <div className="text-lg font-medium">24</div>
          <div className="h-1.5 rounded-full bg-[#181818] mt-3 overflow-hidden"><div className="h-full w-[72%] bg-[#2b2b2b]" /></div>
        </div>
        <div className="rounded-2xl border border-[#202020] bg-[linear-gradient(180deg,#151515,#101010)] p-3 process-tile [animation-delay:120ms]">
          <div className="text-[10px] text-[#6b6b6b] mb-2">Waiting</div>
          <div className="text-lg font-medium">7</div>
          <div className="h-1.5 rounded-full bg-[#181818] mt-3 overflow-hidden"><div className="h-full w-[34%] bg-[#3a3a3a]" /></div>
        </div>
        <div className="rounded-2xl border border-[#202020] bg-[linear-gradient(180deg,#1a120d,#100d0b)] ring-1 ring-[#e36d00]/15 p-3 process-tile process-tile-accent [animation-delay:240ms]">
          <div className="text-[10px] text-[#b7814d] mb-2">Speed</div>
          <div className="text-lg font-medium">+38%</div>
          <div className="h-1.5 rounded-full bg-[#22170f] mt-3 overflow-hidden"><div className="h-full w-[82%] bg-[#e36d00]/70" /></div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#202020] bg-[radial-gradient(circle_at_top,rgba(227,109,0,0.14),transparent_40%),#101010] p-4 process-panel">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[11px] uppercase tracking-[0.16em] text-[#6e6e6e]">Activity</div>
          <div className="text-[10px] text-[#6e6e6e]">Updated 2m ago</div>
        </div>
        <div className="space-y-2.5">
          {phase.mock.rows.map((row, rowIndex) => (
            <div key={row} className="flex items-center justify-between gap-3 rounded-xl border border-[#1f1f1f] bg-[#0d0d0d]/80 px-3 py-2.5 process-line" style={{ animationDelay: `${rowIndex * 120}ms` }}>
              <div className="flex items-center gap-2.5 min-w-0"><span className="w-2 h-2 rounded-full bg-[#e36d00] shrink-0" /><span className="text-sm text-[#d6d6d6] truncate">{row}</span></div>
              <span className="px-2 py-1 rounded-full bg-[#141414] border border-[#252525] text-[10px] text-[#8a8a8a] shrink-0">Active</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockWorkflow({ phase }: { phase: (typeof phases)[1] }) {
  return (
    <div className="relative z-10 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] uppercase tracking-[0.16em] text-[#6e6e6e] mb-1">{phase.mock.title}</div>
          <div className="text-sm text-white font-medium">{phase.mock.status}</div>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-[#151515] border border-[#262626] text-[10px] text-[#ffb168]">Flow</div>
      </div>

      <div className="rounded-2xl border border-[#202020] bg-[#0d0d0d] p-4 process-panel">
        <div className="grid grid-cols-3 gap-3 items-center">
          {phase.mock.rows.map((row, index) => {
            const [left, right] = row.split(' → ');
            return (
              <div key={row} className="relative process-tile">
                <div className="rounded-2xl border border-[#232323] bg-[linear-gradient(180deg,#151515,#0d0d0d)] p-3 min-h-[94px] flex flex-col justify-between">
                  <div className="text-[10px] uppercase tracking-[0.16em] text-[#6b6b6b]">Stage {index + 1}</div>
                  <div>
                    <div className="text-sm text-white mb-1">{left}</div>
                    <div className="text-xs text-[#8a8a8a]">{right || 'Done'}</div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="w-2 h-2 rounded-full bg-[#27c46b]" />
                    <span className="text-[10px] text-[#9f9f9f]">Automated</span>
                  </div>
                </div>
                {index < 2 && <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[1px] bg-[#303030]" />}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-[#202020] bg-[#101010] p-3 process-tile">
          <div className="text-[10px] text-[#6b6b6b] mb-2">Automation Rate</div>
          <div className="text-lg font-medium">82%</div>
          <div className="mt-3 h-1.5 rounded-full bg-[#181818] overflow-hidden"><div className="h-full w-[82%] bg-[#e36d00]/70" /></div>
        </div>
        <div className="rounded-2xl border border-[#202020] bg-[#101010] p-3 process-tile [animation-delay:120ms]">
          <div className="text-[10px] text-[#6b6b6b] mb-2">Avg. Handoff</div>
          <div className="text-lg font-medium">12m</div>
          <div className="mt-3 text-[10px] text-[#8a8a8a]">Down from 47m</div>
        </div>
      </div>
    </div>
  );
}

function MockDashboard({ phase }: { phase: (typeof phases)[2] }) {
  return (
    <div className="relative z-10 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-[11px] uppercase tracking-[0.16em] text-[#6e6e6e] mb-1">{phase.mock.title}</div>
          <div className="text-sm text-white font-medium">{phase.mock.status}</div>
        </div>
        <div className="px-2.5 py-1 rounded-full bg-[#151515] border border-[#262626] text-[10px] text-[#27c46b]">Live</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border border-[#202020] bg-[#111111] p-3 process-tile">
          <div className="text-[10px] text-[#6b6b6b] mb-2">Completion</div>
          <div className="text-2xl font-medium">91%</div>
          <div className="mt-3 h-1.5 rounded-full bg-[#181818] overflow-hidden"><div className="h-full w-[91%] bg-[#27c46b]" /></div>
        </div>
        <div className="rounded-2xl border border-[#202020] bg-[linear-gradient(180deg,#1a120d,#100d0b)] ring-1 ring-[#e36d00]/15 p-3 process-tile process-tile-accent [animation-delay:120ms]">
          <div className="text-[10px] text-[#b7814d] mb-2">Urgency</div>
          <div className="text-2xl font-medium">1</div>
          <div className="mt-3 text-[10px] text-[#d5a06f]">Needs action now</div>
        </div>
      </div>

      <div className="rounded-2xl border border-[#202020] bg-[#101010] p-4 process-panel">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[11px] uppercase tracking-[0.16em] text-[#6e6e6e]">Live Queue</div>
          <div className="text-[10px] text-[#6e6e6e]">Synced</div>
        </div>
        <div className="space-y-2.5">
          {phase.mock.rows.map((row, rowIndex) => (
            <div key={row} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-[#1f1f1f] bg-[#0d0d0d]/80 px-3 py-2.5 process-line" style={{ animationDelay: `${rowIndex * 120}ms` }}>
              <span className="text-sm text-[#d6d6d6]">{row}</span>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${rowIndex === 2 ? 'bg-[#ff5f57]' : rowIndex === 1 ? 'bg-[#febc2e]' : 'bg-[#27c46b]'}`} />
                <span className="text-[10px] text-[#8a8a8a]">Live</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
            Less generic agency. <span className="gradient-text">More operating system.</span>
          </h2>
          <p className="text-[#8a8a8a] text-lg max-w-2xl leading-relaxed">
            Unitvent designs workflows, automations and internal software for teams that are tired of running everything through WhatsApp, Excel and manual follow-up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <div key={phase.step} className={`gradient-border p-6 md:p-7 card-hover animate-fade-in-up delay-${(index + 1) * 100} process-card process-card-tilt`}>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[#e36d00] text-sm font-medium tracking-[0.18em]">{phase.step}</span>
                <span className="px-3 py-1 rounded-full border border-[#2a2a2a] text-xs text-[#8a8a8a] transition-all duration-300 group-hover:border-[#3a3a3a]">{phase.metric}</span>
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

                {phase.mock.type === 'audit' && <MockAudit phase={phase} />}
                {phase.mock.type === 'workflow' && <MockWorkflow phase={phase} />}
                {phase.mock.type === 'dashboard' && <MockDashboard phase={phase} />}
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
