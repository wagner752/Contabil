import { useState } from "react";
import { Menu, X, ChevronDown, Users, Target, Eye, FileText, Calculator, BarChart3, Building2, Briefcase, Scale } from "lucide-react";
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
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[var(--shadow-navbar)]">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-petrol-blue flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">C</span>
              </div>
              <span className="font-heading font-bold text-xl text-petrol-blue">Contábil</span>
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
                      <Users className="h-5 w-5 text-emerald-green" />
                      <div>
                        <p className="font-medium text-graphite">Quem Somos</p>
                        <p className="text-sm text-muted-foreground">Nossa história</p>
                      </div>
                    </a>
                    <a href="#missao" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <Target className="h-5 w-5 text-emerald-green" />
                      <div>
                        <p className="font-medium text-graphite">Missão, Visão e Valores</p>
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
                    {solutions.map((solution) => (
                      <a
                        key={solution.name}
                        href="#solucoes"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <solution.icon className="h-5 w-5 text-emerald-green" />
                        <div>
                          <p className="font-medium text-graphite text-sm">{solution.name}</p>
                          <p className="text-xs text-muted-foreground">{solution.description}</p>
                        </div>
                      </a>
                    ))}
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
            <Button variant="client-area" size="lg">
              Área do Cliente
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-petrol-blue" />
            ) : (
              <Menu className="h-6 w-6 text-petrol-blue" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="nav-link py-2">Início</a>
              <a href="#quem-somos" className="nav-link py-2">Quem Somos</a>
              <a href="#solucoes" className="nav-link py-2">Soluções</a>
              <a href="#contato" className="nav-link py-2">Contato</a>
              <Button variant="client-area" size="lg" className="mt-2">
                Área do Cliente
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
