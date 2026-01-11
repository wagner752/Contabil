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

  const handleSendResume = () => {
    window.location.href = "mailto:wagner752@gmail.com?subject=Envio de Currículo - Trabalhe Conosco";
  };

  return (
    <footer id="contato" className="bg-deep-blue pt-20 pb-8">
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
                href="https://instagram.com/w__wagner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-green transition-colors duration-300"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/wagner--cruz"
                target="_blank"
                rel="noopener noreferrer"
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
            <Button variant="cta" size="default" className="gap-2" onClick={handleSendResume}>
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
                  Rua do Berilo, 303<br />
                  Lagoa Nova, Natal - RN
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-green flex-shrink-0" />
                <a href="tel:+5584991937731" className="text-white/60 text-sm hover:text-emerald-green transition-colors">
                  (84) 99193-7731
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-green flex-shrink-0" />
                <a href="mailto:wagner752@gmail.com" className="text-white/60 text-sm hover:text-emerald-green transition-colors">
                  wagner752@gmail.com
                </a>
              </div>

              {/* Real Google Maps */}
              <div className="mt-4 rounded-xl overflow-hidden h-32">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.4419068831715!2d-35.20881282413147!3d-5.821583994223968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff81a1d7d1c1%3A0x1c1c1c1c1c1c1c1c!2sRua%20do%20Berilo%2C%20303%20-%20Lagoa%20Nova%2C%20Natal%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1704067200000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do escritório"
                />
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
