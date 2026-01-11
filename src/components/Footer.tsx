import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const services = [
    "Contabilidade Empresarial",
    "Abertura de Empresas",
    "Planejamento Tributário",
    "BPO Financeiro",
    "Consultoria Fiscal",
    "Departamento Pessoal",
  ];

  return (
    <footer className="bg-deep-blue pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Logo & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
                <span className="text-petrol-blue font-heading font-bold text-xl">C</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">Contábil</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Contabilidade consultiva e moderna para empresas que buscam crescimento sustentável.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-green transition-colors duration-300"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-green transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#solucoes"
                    className="text-white/60 hover:text-emerald-green transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Work with Us */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Trabalhe Conosco</h4>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Quer fazer parte do nosso time? Estamos sempre em busca de talentos que compartilham nossa paixão por contabilidade.
            </p>
            <Button variant="cta" size="default" className="gap-2">
              <Send className="h-4 w-4" />
              Enviar Currículo
            </Button>
          </div>

          {/* Column 4 - Location */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6">Localização</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-green flex-shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm">
                  Av. Paulista, 1000 - Sala 1001<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-green flex-shrink-0" />
                <p className="text-white/60 text-sm">(11) 3000-0000</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-green flex-shrink-0" />
                <p className="text-white/60 text-sm">contato@contabil.com.br</p>
              </div>

              {/* Mini Map Placeholder */}
              <div className="mt-4 rounded-xl overflow-hidden h-32 bg-white/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-white/30 mx-auto mb-2" />
                  <span className="text-white/40 text-xs">Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 Contábil. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
