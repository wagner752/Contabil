import { MessageCircle, ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import modeloContabilidade from "@/assets/modelo-contabilidade.png";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5584991937731?text=Ol%C3%A1%20gostaria%20de%20atendimento";

  return (
    <section id="inicio" className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob-decoration w-[500px] h-[500px] -right-20 top-20" />
      <div className="blob-decoration w-[300px] h-[300px] right-1/4 bottom-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-emerald-green/90 text-white px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Contabilidade Consultiva
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Sua empresa pronta para{" "}
              <span className="text-gradient">avançar</span>{" "}
              com segurança.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Gestão contábil moderna para empreendedores que não têm medo de crescer.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero-primary" size="xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Falar com um especialista
                </a>
              </Button>
              <Button variant="hero-secondary" size="xl" asChild>
                <a href="#solucoes">
                  Conhecer serviços
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div>
                <p className="text-3xl font-heading font-bold text-white">+100</p>
                <p className="text-white/70 text-sm">Clientes atendidos</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-white">+8</p>
                <p className="text-white/70 text-sm">Anos de experiência</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-white">98%</p>
                <p className="text-white/70 text-sm">Clientes satisfeitos</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-[350px] h-[450px] md:w-[400px] md:h-[520px] rounded-2xl overflow-hidden">
                <img 
                  src={modeloContabilidade} 
                  alt="Profissional de contabilidade" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Card */}
              <div className="floating-card absolute -left-8 top-1/3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-green/20 flex items-center justify-center">
                  <Rocket className="h-5 w-5 text-emerald-green" />
                </div>
                <div>
                  <p className="font-semibold text-graphite text-sm">+100 clientes</p>
                  <p className="text-xs text-muted-foreground">atendidos com sucesso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
