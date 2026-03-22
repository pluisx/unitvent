'use client';

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    role: 'CEO, TechStart MX',
    content: 'Unitvent completely reshaped how our team operates. The automation layer they built saves us dozens of hours every week.',
    avatar: 'CR',
  },
  {
    name: 'María Fernández',
    role: 'Director of Operations, LogiPro',
    content: 'They understood the problem fast, translated it into a system, and gave our team something we actually use every day.',
    avatar: 'MF',
  },
  {
    name: 'Roberto Sánchez',
    role: 'CTO, FinanceHub',
    content: 'The value was not just the software. It was the operational clarity, the workflow design, and the visibility we were missing.',
    avatar: 'RS',
  },
];

const Testimonials = () => {
  return (
    <section id="about" className="section-padding relative bg-black">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="badge mb-6 justify-center">
            <span className="badge-dot" />
            <span>Social proof</span>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-[-1px] mb-6">
            What teams say after the{' '}
            <span className="gradient-text">workflow finally clicks</span>
          </h2>
          <p className="text-[#8a8a8a] text-base md:text-lg leading-relaxed">
            Companies trust us when operations feel messy, fragmented or too manual to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group p-8 rounded-[22px] bg-[#0f0f0f] border border-[#212121] card-hover">
              <div className="text-[#e36d00]/30 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-[#b0b0b0] text-sm leading-relaxed mb-8">&ldquo;{testimonial.content}&rdquo;</p>
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
