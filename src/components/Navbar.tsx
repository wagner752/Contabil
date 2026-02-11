import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, ChevronDown, Users, Target, HeartPulse, Eye, FileText, Calculator, BarChart3, Building2, Briefcase, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutions = [
    { name: "Contabilidade Empresarial", icon: Building2, description: "Gestão contábil completa" },
    { name: "Abertura de Empresas", icon: Briefcase, description: "Do CNPJ ao funcionamento" },
    { name: "Planejamento Tributário", icon: Calculator, description: "Economia fiscal inteligente" },
    { name: "BPO Financeiro", icon: BarChart3, description: "Terceirização financeira" },
    { name: "Consultoria Fiscal", icon: FileText, description: "Orientação especializada" },
    { name: "Departamento Pessoal", icon: Users, description: "Folha e obrigações" },
    { name: "Legalização", icon: Scale, description: "Regularização empresarial" },
    { name: "Consultoria Tributária Para Autonomos", icon: Eye, description: "Saiba qual melhor regime para você" },
    { name: "Profissionais da Saúde e Bem-Estar", icon: HeartPulse, description: "Estratégia para reduzir sua carga tributária" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[var(--shadow-navbar)]">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo Avvance" className="h-10 w-auto object-contain" />
              <span className="font-heading font-bold text-xl text-secondary">Avvance Contabilidade</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#inicio"
                  className="nav-link px-4 py-2 rounded-md hover:bg-muted"
                >
                  Início
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-link bg-transparent hover:bg-muted">
                  A Empresa
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-4 space-y-2">
                    <a href="#quem-somos" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Quem Somos</p>
                        <p className="text-sm text-muted-foreground">Nossa história</p>
                      </div>
                    </a>
                    <a href="#missao" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <Target className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Missão, Visão e Valores</p>
                        <p className="text-sm text-muted-foreground">Nossos princípios</p>
                      </div>
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-link bg-transparent hover:bg-muted">
                  Soluções
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[500px] p-4 grid grid-cols-2 gap-2">
                    {solutions.map((solution) => {
                      const Icon = solution.icon as any;
                      const iconClass = Icon === Eye || Icon === HeartPulse
                        ? "h-6 w-6 text-primary"
                        : "h-5 w-5 text-primary";

                      return (
                        <a
                          key={solution.name}
                          href="#solucoes"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                        >
                          <Icon className={iconClass} />
                          <div>
                            <p className="font-medium text-foreground text-sm">{solution.name}</p>
                            <p className="text-xs text-muted-foreground">{solution.description}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#contato"
                  className="nav-link px-4 py-2 rounded-md hover:bg-muted"
                >
                  Contato
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="client-area" size="lg" asChild>
              <a href="#area-cliente">Área do Cliente</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-secondary" />
            ) : (
              <Menu className="h-6 w-6 text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Início</a>
              <a href="#quem-somos" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Quem Somos</a>
              <a href="#solucoes" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Soluções</a>
              <a href="#contato" className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Contato</a>
              <Button variant="client-area" size="lg" className="mt-2" asChild>
                <a href="#area-cliente" onClick={() => setMobileMenuOpen(false)}>Área do Cliente</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
