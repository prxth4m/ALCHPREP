import LenisProvider from "@/components/ui/lenisProvider";
import HeroSection from "@/components/hero-section";
 


export default function Home() {
  return (
   <section> 
    <LenisProvider>
      
      <HeroSection />
    </LenisProvider>
   </section>
  );
}
