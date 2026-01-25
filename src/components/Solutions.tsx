'use client';

const solutions = [
  {
    title: 'ERP Empresarial',
    description: 'Sistema integral de gestion empresarial que unifica todos tus procesos en una sola plataforma.',
    features: ['Gestion de inventarios', 'Contabilidad automatizada', 'Recursos humanos', 'Reportes en tiempo real'],
  },
  {
    title: 'CRM Inteligente',
    description: 'Gestiona las relaciones con tus clientes de forma eficiente con IA integrada.',
    features: ['Seguimiento de leads', 'Automatizacion de ventas', 'Analisis predictivo', 'Integracion multicanal'],
  },
  {
    title: 'Plataforma E-commerce',
    description: 'Soluciones de comercio electronico escalables y personalizadas para tu negocio.',
    features: ['Carrito de compras', 'Pasarelas de pago', 'Gestion de productos', 'Analytics avanzado'],
  },
  {
    title: 'Apps Moviles',
    description: 'Aplicaciones nativas e hibridas para iOS y Android con la mejor experiencia de usuario.',
    features: ['Diseno UI/UX', 'Notificaciones push', 'Modo offline', 'Sincronizacion cloud'],
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="badge mb-6">
            <span className="badge-dot" />
            <span>Nuestras Soluciones</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-[-1px] mb-6">
            Productos <span className="gradient-text">Listos</span> para Implementar
          </h2>
          <p className="text-[#8a8a8a] text-base md:text-lg leading-relaxed">
            Soluciones pre-construidas que se adaptan a las necesidades de tu industria
            con tiempos de implementacion reducidos.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group p-8 rounded-[22px] bg-[#0f0f0f] border border-[#212121] card-hover"
            >
              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-[#8a8a8a] text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e36d00]/20 to-transparent border border-[#e36d00]/20 flex items-center justify-center shrink-0 group-hover:border-[#e36d00]/50 group-hover:shadow-[0_0_20px_rgba(227,109,0,0.2)] transition-all duration-300">
                    <svg className="w-5 h-5 text-[#e36d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                </div>

                {/* Features list */}
                <ul className="grid grid-cols-2 gap-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#8a8a8a]">
                      <svg className="w-4 h-4 text-[#e36d00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-6 border-t border-[#212121] flex justify-between items-center">
                  <span className="text-xs text-[#6b6b6b] uppercase tracking-wider">Implementacion rapida</span>
                  <button className="flex items-center gap-2 text-[#e36d00] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    Ver detalles
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#6b6b6b] mb-6 text-sm">
            ¿Necesitas una solucion personalizada?
          </p>
          <a href="#contact" className="btn-primary-filled">
            Contactar al Equipo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
