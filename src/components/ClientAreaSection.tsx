import { ExternalLink, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClientAreaSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="blob-decoration w-[400px] h-[400px] -left-40 top-0" />
      <div className="blob-decoration w-[300px] h-[300px] right-0 bottom-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Links Úteis e Gestão
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Acesse rapidamente as ferramentas essenciais para a gestão do seu negócio
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Nibo Button */}
            <Button variant="nibo" size="xl" className="min-w-[280px]">
              <ExternalLink className="h-5 w-5" />
              Acessar Plataforma Nibo
            </Button>

            {/* CND Button */}
            <Button variant="cnd" size="xl" className="min-w-[280px]">
              <FileCheck className="h-5 w-5" />
              Emissão de Certidões Negativas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientAreaSection;
