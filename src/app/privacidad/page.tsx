import Link from 'next/link';

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl md:text-4xl font-medium mb-4">Privacy Policy</h1>
        <p className="text-[#8a8a8a] mb-10">Last updated: March 21, 2026</p>

        <div className="space-y-10 text-[#b0b0b0] leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-white mb-4">1. Overview</h2>
            <p>
              Unitvent respects your privacy and is committed to protecting the personal information you share with us.
              This page explains what we collect, how we use it, and the choices you have regarding your information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details such as your name, work email, phone number, and company.</li>
              <li>Project information you submit through our forms or email.</li>
              <li>Basic usage and analytics data related to your visit to our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">3. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and evaluate project fit.</li>
              <li>To improve our website, systems, and communication.</li>
              <li>To operate and maintain our services securely.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">4. Sharing</h2>
            <p>
              We do not sell your personal information. We may share limited data with trusted service providers who help us operate our website, infrastructure, or communications, under appropriate safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">5. Data Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your information, but no system can guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">6. Contact</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{' '}
              <a href="mailto:privacy@unitvent.com" className="text-[#e36d00] hover:underline">privacy@unitvent.com</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
