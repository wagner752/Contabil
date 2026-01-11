import { Target, Eye, Handshake, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const values = ["Ética", "Transparência", "Agilidade", "Comprometimento"];

  return (
    <section id="quem-somos" className="py-24 bg-ice-gray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Story */}
          <div className="space-y-6">
            <span className="inline-block bg-petrol-blue/10 text-petrol-blue px-4 py-2 rounded-full text-sm font-medium">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-petrol-blue">
              Uma história de compromisso e excelência
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Há mais de 15 anos, nossa equipe de contadores e consultores trabalha 
              incansavelmente para transformar a gestão contábil de centenas de empresas 
              em todo o Brasil.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acreditamos que a contabilidade vai muito além de números e obrigações. 
              É sobre entender o seu negócio, antecipar oportunidades e construir 
              uma parceria de longo prazo baseada em confiança e resultados.
            </p>

            {/* Team Image Placeholder */}
            <div className="relative mt-8">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-petrol-blue/20 to-petrol-blue/5 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-petrol-blue/20 flex items-center justify-center">
                    <span className="text-3xl">👥</span>
                  </div>
                  <p className="text-petrol-blue font-medium">Nossa Equipe</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(11, 37, 69, 0.1) 0%, transparent 100%)" }} />
            </div>
          </div>

          {/* Right - Mission, Vision, Values */}
          <div className="space-y-6">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-emerald-green/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-7 w-7 text-emerald-green" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-petrol-blue mb-3">
                    Missão
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transformar a gestão contábil dos nossos clientes, oferecendo soluções 
                    inteligentes que impulsionam o crescimento sustentável de seus negócios.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-emerald-green/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="h-7 w-7 text-emerald-green" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-petrol-blue mb-3">
                    Visão
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser referência nacional em inovação contábil até 2030, reconhecida pela 
                    excelência no atendimento e resultados consistentes.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-emerald-green/10 flex items-center justify-center flex-shrink-0">
                  <Handshake className="h-7 w-7 text-emerald-green" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-petrol-blue mb-3">
                    Valores
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {values.map((value) => (
                      <div key={value} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-green" />
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
