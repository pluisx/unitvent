'use client';

import Image from 'next/image';

const logos = [
  { src: '/logos/openai.png', alt: 'OpenAI' },
  { src: '/logos/make.png', alt: 'Make' },
  { src: '/logos/n8n.png', alt: 'n8n' },
  { src: '/logos/elevenlabs.png', alt: 'ElevenLabs' },
  { src: '/logos/claude.png', alt: 'Claude' },
];

const LogoCarousel = () => {
  return (
    <section className="py-10 md:py-14 bg-black overflow-hidden">
      <div className="container-custom mb-8 md:mb-10">
        <p className="text-center text-[#6b6b6b] text-sm md:text-base">Our core technologies</p>
      </div>

      <div className="relative max-w-[1120px] mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll">
          <div className="flex shrink-0 items-center gap-12 md:gap-24 px-8 md:px-12">
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="shrink-0 opacity-75 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={56}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-12 md:gap-24 px-8 md:px-12">
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="shrink-0 opacity-75 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={56}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
