import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoCarousel from '@/components/LogoCarousel';
import Services from '@/components/Services';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCarousel />
        <Services />
        <Solutions />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
