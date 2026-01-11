import { Star } from "lucide-react";

const clients = [
  { name: "TechNova", logo: "TN" },
  { name: "GlobalTech", logo: "GT" },
  { name: "BlueStar", logo: "BS" },
  { name: "GreenPath", logo: "GP" },
  { name: "NextLevel", logo: "NL" },
];

const testimonials = [
  {
    name: "Carlos Silva",
    company: "TechNova Ltda",
    avatar: "CS",
    rating: 5,
    text: "Excelente atendimento! A equipe sempre pronta para ajudar e resolver qualquer dúvida. Recomendo fortemente.",
  },
  {
    name: "Ana Beatriz",
    company: "GlobalTech",
    avatar: "AB",
    rating: 5,
    text: "Profissionais extremamente competentes. Desde que contratamos, nossa gestão financeira melhorou muito.",
  },
  {
    name: "Roberto Mendes",
    company: "BlueStar",
    avatar: "RM",
    rating: 5,
    text: "A contabilidade consultiva deles realmente faz diferença. Nos ajudaram a economizar milhares em impostos.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Clients Carousel */}
        <div className="mb-20">
          <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
            Empresas que confiam em nosso trabalho
          </p>
          <div className="relative">
            <div className="flex gap-16 infinite-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-ice-gray rounded-xl flex items-center justify-center border border-gray-100"
                >
                  <div className="text-center">
                    <span className="text-2xl font-heading font-bold text-petrol-blue/60">
                      {client.logo}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{client.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-green/10 text-emerald-green px-4 py-2 rounded-full text-sm font-medium mb-4">
              Depoimentos
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-petrol-blue">
              O que dizem nossos parceiros
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-ice-gray rounded-2xl p-6 hover:shadow-[var(--shadow-card)] transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-petrol-blue flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-graphite">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews Badge */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 bg-ice-gray rounded-full px-6 py-3">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="Google"
                className="h-5 object-contain"
              />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-graphite">4.9 no Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
