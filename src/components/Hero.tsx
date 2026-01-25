'use client';

import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-60" />

      {/* Orange gradient glow from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[700px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(227,109,0,0.15)_0%,transparent_70%)]" />
      </div>

      {/* Fade to black at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - RoboLabs style */}
          <div className="badge mb-10 animate-fade-in-up">
            <span className="badge-dot" />
            <span>Automatizacion Inteligente para tu Negocio</span>
          </div>

          {/* Main Heading - Satoshi 72px style */}
          <h1 className="text-[40px] md:text-[54px] lg:text-[72px] font-medium leading-[1.1] tracking-[-1px] mb-8 animate-fade-in-up delay-100">
            Transformamos Ideas en{' '}
            <span className="gradient-text">Soluciones Digitales</span>
          </h1>

          {/* Subheading - Inter style */}
          <p className="text-base md:text-lg text-[#8a8a8a] max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
            Desarrollamos software personalizado y automatizamos procesos empresariales
            con tecnologia de punta para impulsar tu crecimiento.
          </p>

          {/* CTA Buttons - RoboLabs style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link href="#contact" className="btn-primary-filled px-8 py-4">
              Iniciar Proyecto
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link href="#solutions" className="btn-secondary px-8 py-4">
              Ver Soluciones
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
