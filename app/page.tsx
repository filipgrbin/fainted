import Navigation from "@/components/navigation";
import ScrollObserver from "@/components/scroll-observer";
import Hero from "@/components/hero";
import Work from "@/components/work";
import Process from "@/components/process";
import FAQ from "@/components/faq";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ScrollObserver />
      <Hero />
      <Testimonials />
      <Work />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
