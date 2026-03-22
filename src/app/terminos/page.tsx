import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-[#212121]">
        <div className="container-custom py-6">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#e36d00] to-[#ffb168] flex items-center justify-center">
              <span className="text-white font-semibold text-lg">U</span>
            </div>
            <span className="text-lg font-medium text-white">Unitvent</span>
          </Link>
        </div>
      </header>

      <main className="container-custom py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-medium mb-4">Terms of Service</h1>
        <p className="text-[#8a8a8a] mb-10">Last updated: March 21, 2026</p>

        <div className="space-y-10 text-[#b0b0b0] leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-white mb-4">1. Scope</h2>
            <p>
              These Terms govern your use of Unitvent’s website and any services we provide, including consulting, workflow design, software development, automation, and related operational systems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">2. Project Work</h2>
            <p>
              Specific deliverables, pricing, timelines, and responsibilities are defined in individual proposals, scopes of work, or agreements. Those documents control in the event of any conflict with this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">3. Payments</h2>
            <p>
              Payment terms are established per engagement. Late or missing payment may pause delivery, support, or access to project outputs until the account is brought current.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, Unitvent retains ownership of its background know-how, frameworks, reusable systems, and internal tooling. Clients receive the rights defined in their specific agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Unitvent will not be liable for indirect, incidental, special, or consequential damages. Our total liability is limited to the amount paid by the client for the applicable engagement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">6. Contact</h2>
            <p>
              Questions about these Terms can be sent to{' '}
              <a href="mailto:info@unitvent.com" className="text-[#e36d00] hover:underline">info@unitvent.com</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
