import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Desarrollo de Software', href: '#services' },
      { name: 'Automatizacion', href: '#services' },
      { name: 'Inteligencia Artificial', href: '#services' },
      { name: 'Cloud & DevOps', href: '#services' },
    ],
    soluciones: [
      { name: 'ERP Empresarial', href: '#solutions' },
      { name: 'CRM Inteligente', href: '#solutions' },
      { name: 'E-commerce', href: '#solutions' },
      { name: 'Apps Moviles', href: '#solutions' },
    ],
    empresa: [
      { name: 'Nosotros', href: '#about' },
      { name: 'Contacto', href: '#contact' },
      { name: 'Blog', href: '#' },
      { name: 'Carreras', href: '#' },
    ],
  };

  return (
    <footer className="bg-black border-t border-[#212121]">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#e36d00] to-[#ffb168] flex items-center justify-center">
                <span className="text-white font-semibold text-lg">U</span>
              </div>
              <span className="text-lg font-medium text-white">Unitvent</span>
            </Link>
            <p className="text-[#6b6b6b] text-sm leading-relaxed mb-8 max-w-sm">
              Transformamos ideas en soluciones digitales. Automatizacion inteligente
              y desarrollo de software para impulsar tu negocio.
            </p>
            <div className="flex gap-3">
              {[
                { name: 'LinkedIn', icon: 'Li' },
                { name: 'Twitter', icon: 'X' },
                { name: 'GitHub', icon: 'Gh' },
                { name: 'Instagram', icon: 'Ig' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-[#0f0f0f] border border-[#212121] flex items-center justify-center text-[#6b6b6b] hover:text-[#e36d00] hover:border-[#e36d00] transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-xs font-medium">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white text-sm font-medium mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#6b6b6b] hover:text-[#e36d00] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className="text-white text-sm font-medium mb-6">Soluciones</h4>
            <ul className="space-y-3">
              {footerLinks.soluciones.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#6b6b6b] hover:text-[#e36d00] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white text-sm font-medium mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#6b6b6b] hover:text-[#e36d00] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#4a4a4a] text-xs">
            {currentYear} Unitvent. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link href="/privacidad" className="text-[#4a4a4a] hover:text-[#e36d00] transition-colors duration-200 text-xs">
              Politica de Privacidad
            </Link>
            <Link href="/terminos" className="text-[#4a4a4a] hover:text-[#e36d00] transition-colors duration-200 text-xs">
              Terminos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
