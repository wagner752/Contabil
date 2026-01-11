import { Building2, Briefcase, Calculator, BarChart3, FileText, Users, Scale } from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Contabilidade Empresarial",
    description: "Gestão contábil completa e estratégica para seu negócio crescer com segurança.",
  },
  {
    icon: Briefcase,
    title: "Abertura de Empresas",
    description: "Do CNPJ ao funcionamento: cuidamos de toda a burocracia para você.",
  },
  {
    icon: Calculator,
    title: "Planejamento Tributário",
    description: "Estratégias legais para reduzir sua carga tributária de forma inteligente.",
  },
  {
    icon: BarChart3,
    title: "BPO Financeiro",
    description: "Terceirização do seu departamento financeiro com profissionais especializados.",
  },
  {
    icon: FileText,
    title: "Consultoria Fiscal",
    description: "Orientação especializada para manter sua empresa em conformidade.",
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    description: "Folha de pagamento e obrigações trabalhistas sem complicações.",
  },
  {
    icon: Scale,
    title: "Legalização",
    description: "Regularização empresarial e adequação a todas as normas vigentes.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="min-h-screen flex items-center py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-emerald-green/10 text-emerald-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-petrol-blue mb-4">
            Soluções completas para sua empresa
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos um portfólio completo de serviços contábeis e consultivos para atender todas as necessidades do seu negócio.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {solutions.slice(0, 3).map((solution, index) => (
            <div
              key={solution.title}
              className="card-service group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-petrol-blue/10 flex items-center justify-center mb-5 group-hover:bg-petrol-blue transition-colors duration-300">
                <solution.icon className="h-7 w-7 text-petrol-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold text-petrol-blue mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.slice(3).map((solution, index) => (
            <div
              key={solution.title}
              className="card-service group cursor-pointer"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-petrol-blue/10 flex items-center justify-center mb-4 group-hover:bg-petrol-blue transition-colors duration-300">
                <solution.icon className="h-6 w-6 text-petrol-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-heading font-bold text-petrol-blue mb-2">
                {solution.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
