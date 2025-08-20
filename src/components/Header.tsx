import { Button } from "@/components/ui/button";
import { BookOpen, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CorrigeJá</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              Início
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </a>
            <a href="#precos" className="text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Entrar
            </Button>
            <Button className="shadow-sm hover:shadow-md transition-all duration-300">
              Cadastrar
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;