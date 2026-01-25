'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(227,109,0,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <div className="badge mb-6">
              <span className="badge-dot" />
              <span>Contacto</span>
            </div>
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-[-1px] mb-6">
              Listo para <span className="gradient-text">Transformar</span> tu Negocio?
            </h2>
            <p className="text-[#8a8a8a] text-base leading-relaxed mb-12">
              Cuentanos sobre tu proyecto y te ayudaremos a encontrar la mejor
              solucion tecnologica para tu empresa.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="icon-container group-hover:border-[#e36d00] group-hover:shadow-[0_0_20px_rgba(227,109,0,0.2)] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#6b6b6b] mb-1">Email</div>
                  <div className="text-white text-sm">info@unitvent.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="icon-container group-hover:border-[#e36d00] group-hover:shadow-[0_0_20px_rgba(227,109,0,0.2)] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#6b6b6b] mb-1">Telefono</div>
                  <div className="text-white text-sm">+1 470 223 2740</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="icon-container group-hover:border-[#e36d00] group-hover:shadow-[0_0_20px_rgba(227,109,0,0.2)] transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#6b6b6b] mb-1">Ubicacion</div>
                  <div className="text-white text-sm">Atlanta, Georgia</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <div className="text-xs text-[#6b6b6b] uppercase tracking-[0.2em] mb-4">Siguenos</div>
              <div className="flex gap-3">
                {['Li', 'X', 'Gh'].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-[#0f0f0f] border border-[#212121] flex items-center justify-center text-[#6b6b6b] hover:text-[#e36d00] hover:border-[#e36d00] transition-all duration-300"
                  >
                    <span className="text-xs font-medium">{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="p-8 rounded-[22px] bg-[#0f0f0f] border border-[#212121]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs text-[#6b6b6b] uppercase tracking-[0.15em] mb-3">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-black border border-[#212121] rounded-xl text-white text-sm placeholder-[#4a4a4a] focus:outline-none focus:border-[#e36d00] transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-[#6b6b6b] uppercase tracking-[0.15em] mb-3">
                  Correo Electronico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-black border border-[#212121] rounded-xl text-white text-sm placeholder-[#4a4a4a] focus:outline-none focus:border-[#e36d00] transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-xs text-[#6b6b6b] uppercase tracking-[0.15em] mb-3">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-black border border-[#212121] rounded-xl text-white text-sm placeholder-[#4a4a4a] focus:outline-none focus:border-[#e36d00] transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-[#6b6b6b] uppercase tracking-[0.15em] mb-3">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3.5 bg-black border border-[#212121] rounded-xl text-white text-sm placeholder-[#4a4a4a] focus:outline-none focus:border-[#e36d00] transition-colors resize-none"
                  placeholder="Cuentanos sobre tu proyecto..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary-filled py-4"
              >
                Enviar Mensaje
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
