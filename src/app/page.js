import LenisProvider from "@/components/ui/lenisProvider";
import HeroSection from "@/components/hero-section";
import { Navbar } from "@/components/ui/Navbar";


export default function Home() {
  return (
   <section> 
    <LenisProvider>
      <Navbar />
      <HeroSection />
    </LenisProvider>
   </section>
  );
}
