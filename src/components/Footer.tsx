import { BookOpen, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CorrigeJá</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              A plataforma mais completa para melhorar sua redação e conquistar 
              a nota dos seus sonhos no ENEM e vestibulares.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Plataforma</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>contato@corrigeja.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>(11) 9 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 CorrigeJá. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;