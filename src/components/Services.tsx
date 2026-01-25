'use client';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Desarrollo de Software',
    description: 'Creamos aplicaciones web y moviles personalizadas que se adaptan a las necesidades especificas de tu negocio.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Automatizacion de Procesos',
    description: 'Optimizamos tus flujos de trabajo con soluciones de automatizacion inteligente que reducen costos y errores.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Inteligencia Artificial',
    description: 'Implementamos soluciones de IA y machine learning para potenciar la toma de decisiones en tu empresa.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud & DevOps',
    description: 'Migramos y optimizamos tu infraestructura en la nube con las mejores practicas de DevOps.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Ciberseguridad',
    description: 'Protegemos tus activos digitales con auditorias de seguridad y soluciones de proteccion avanzadas.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Integraciones API',
    description: 'Conectamos tus sistemas y aplicaciones para crear un ecosistema digital unificado y eficiente.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative bg-black">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="badge mb-6">
            <span className="badge-dot" />
            <span>Nuestros Servicios</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-[-1px] mb-6">
            Soluciones <span className="gradient-text">Tecnologicas</span> Completas
          </h2>
          <p className="text-[#8a8a8a] text-base md:text-lg leading-relaxed">
            Ofrecemos un amplio rango de servicios tecnologicos para impulsar
            la transformacion digital de tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-[22px] bg-[#0f0f0f] border border-[#212121] card-hover"
            >
              <div className="icon-container mb-6 group-hover:border-[#e36d00] group-hover:shadow-[0_0_20px_rgba(227,109,0,0.2)] transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-[#8a8a8a] text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#e36d00] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium">Saber mas</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
