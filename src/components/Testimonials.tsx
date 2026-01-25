'use client';

const testimonials = [
  {
    name: 'Carlos Rodriguez',
    role: 'CEO, TechStart MX',
    content: 'Unitvent transformo completamente nuestra operacion. La automatizacion que implementaron nos ahorro cientos de horas de trabajo manual cada mes.',
    avatar: 'CR',
  },
  {
    name: 'Maria Fernandez',
    role: 'Directora de Operaciones, LogiPro',
    content: 'El equipo de Unitvent entendio nuestras necesidades desde el primer dia. El sistema ERP que desarrollaron supero todas nuestras expectativas.',
    avatar: 'MF',
  },
  {
    name: 'Roberto Sanchez',
    role: 'CTO, FinanceHub',
    content: 'La integracion de IA en nuestros procesos nos dio una ventaja competitiva increible. Muy profesionales y siempre disponibles para soporte.',
    avatar: 'RS',
  },
];


const Testimonials = () => {
  return (
    <section id="about" className="section-padding relative bg-black">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="badge mb-6">
            <span className="badge-dot" />
            <span>Testimonios</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-[-1px] mb-6">
            Lo que Dicen <span className="gradient-text">Nuestros Clientes</span>
          </h2>
          <p className="text-[#8a8a8a] text-base md:text-lg leading-relaxed">
            Empresas que han confiado en nosotros para su transformacion digital.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-[22px] bg-[#0f0f0f] border border-[#212121] card-hover"
            >
              {/* Quote icon */}
              <div className="text-[#e36d00]/30 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-[#b0b0b0] text-sm leading-relaxed mb-8">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e36d00] to-[#ffb168] flex items-center justify-center text-white text-sm font-medium">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-white text-sm">{testimonial.name}</div>
                  <div className="text-xs text-[#6b6b6b]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
