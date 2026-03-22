'use client';

const faqs = [
  {
    q: 'Do you work like a traditional agency?',
    a: 'No. We come in around a specific operational problem, design the workflow, and build the system your team will actually use.',
  },
  {
    q: 'Can you integrate the tools we already use?',
    a: 'Yes. We usually build on top of your current stack: CRM, spreadsheets, ERPs, WhatsApp, APIs, dashboards and automations.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'An operational sprint can launch in 1–3 weeks. A deeper system depends on scope, but we always break it into clear phases.',
  },
  {
    q: 'Do you only do automation, or also internal software?',
    a: 'Both. If automation solves the bottleneck, we automate it. If it needs a dashboard, backend or internal app, we build that too.',
  },
];

export default function FAQ() {
  return (
    <section className="section-padding bg-[#050505] border-t border-[#151515]">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-14">
          <div className="badge mb-6 justify-center">
            <span className="badge-dot" />
            <span>FAQ</span>
          </div>
          <h2 className="text-[32px] md:text-[44px] font-medium tracking-[-1px] mb-4">Frequently asked questions</h2>
          <p className="text-[#8a8a8a] text-lg">The basics before we jump on a call.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-[22px] border border-[#212121] bg-[#0f0f0f] p-6 md:p-7">
              <h3 className="text-xl font-medium mb-3">{item.q}</h3>
              <p className="text-[#8a8a8a] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
