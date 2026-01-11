import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import ClientAreaSection from "@/components/ClientAreaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <SolutionsSection />
        <AboutSection />
        <ClientAreaSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
