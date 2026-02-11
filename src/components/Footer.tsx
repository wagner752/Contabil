import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import logo from "@/assets/logo.png";
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
    window.location.href = "mailto:contato@avvancecontabilidade.com?subject=Envio de Currículo - Trabalhe Conosco";
  };

  return (
    <footer id="contato" className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Logo & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo Avvance" className="h-10 w-auto object-contain" />
              <span className="font-heading font-bold text-xl text-secondary-foreground">Avvance Contabilidade</span>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Contabilidade consultiva e moderna para empresas que buscam crescimento sustentável.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/avvancecontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="h-5 w-5 text-secondary-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/maria-daiane-bezerra-bento-854588242/?originalSubdomain=br"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5 text-secondary-foreground" />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="font-heading font-bold text-secondary-foreground mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#solucoes"
                    className="text-secondary-foreground/60 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Work with Us */}
          <div>
            <h4 className="font-heading font-bold text-secondary-foreground mb-6">Trabalhe Conosco</h4>
            <p className="text-secondary-foreground/60 text-sm mb-6 leading-relaxed">
              Quer fazer parte do nosso time? Estamos sempre em busca de talentos que compartilham nossa paixão por contabilidade.
            </p>
            <Button variant="cta" size="default" className="gap-2" onClick={handleSendResume}>
              <Send className="h-4 w-4" />
              Enviar Currículo
            </Button>
          </div>

          {/* Column 4 - Location */}
          <div>
            <h4 className="font-heading font-bold text-secondary-foreground mb-6">Localização</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-secondary-foreground/60 text-sm">
                  Rua João Celso Filho, 1950 - Sala 606, Edifício Plenarium
                  <br />
                  Lagoa Nova, Natal - Rio Grande do Norte
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+5584988966860" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors">
                  (84) 98896-6860
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:contato@avvancecontabilidade.com" className="text-secondary-foreground/60 text-sm hover:text-primary transition-colors">
                  contato@avvancecontabilidade.com
                </a>
              </div>

              {/* Real Google Maps */}
              <div className="mt-4 rounded-xl overflow-hidden h-32">
                <iframe
                  src="https://www.google.com/maps?q=-5.8285631,-35.2231797&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do escritório"
                />
                <div className="mt-2 px-3 pb-2">
                  <a
                    href="https://www.google.com/maps/place/R.+Jo%C3%A3o+C%C3%A9lso+Filho,+1950+-+Lagoa+Nova,+Natal+-+RN,+59064-320,+Brasil/@-5.8286378,-35.2229195,194m/data=!3m1!1e3!4m6!3m5!1s0x7b2556501b61259:0x87b52eda271ab9a1!8m2!3d-5.8285631!4d-35.2231797!16s%2Fg%2F11xw7sqr99?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground/60 hover:text-primary text-sm"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/40 text-sm">
              © 2026 Avvance Contabilidade. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-secondary-foreground/40 hover:text-secondary-foreground text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-secondary-foreground/40 hover:text-secondary-foreground text-sm transition-colors">
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
