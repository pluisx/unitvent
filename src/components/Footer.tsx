import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Custom Software', href: '#services' },
      { name: 'Workflow Automation', href: '#services' },
      { name: 'AI Systems', href: '#services' },
      { name: 'Cloud & Infrastructure', href: '#services' },
    ],
    company: [
      { name: 'Process', href: '#process' },
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-black border-t border-[#212121]">
      <div className="container-custom">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#e36d00] to-[#ffb168] flex items-center justify-center">
                <span className="text-white font-semibold text-lg">U</span>
              </div>
              <span className="text-lg font-medium text-white">Unitvent</span>
            </Link>
            <p className="text-[#6b6b6b] text-sm leading-relaxed mb-8 max-w-sm">
              We build software, workflows and automation systems for companies that need clarity, control and operational speed.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#6b6b6b] hover:text-[#e36d00] transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#6b6b6b] hover:text-[#e36d00] transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider" />

        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#4a4a4a] text-xs">{currentYear} Unitvent. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacidad" className="text-[#4a4a4a] hover:text-[#e36d00] transition-colors duration-200 text-xs">
              Privacy Policy
            </Link>
            <Link href="/terminos" className="text-[#4a4a4a] hover:text-[#e36d00] transition-colors duration-200 text-xs">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
