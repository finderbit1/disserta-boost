import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
              Melhore sua <span className="bg-gradient-primary bg-clip-text text-transparent">redação</span> agora
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Cansado de tirar nota baixa na redação e não entender o porquê? 
              Nossa plataforma oferece correções detalhadas e dicas personalizadas 
              para você dominar a arte da escrita.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-4 shadow-elegant hover:shadow-xl transition-all duration-300">
                Fazer Teste Grátis
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 hover:bg-accent transition-all duration-300">
                Ver Como Funciona
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Taxa de Melhoria</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Correção Rápida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                <div className="text-sm text-muted-foreground">Alunos Aprovados</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Plataforma de correção de redação"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-card border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-sm font-medium">Correção Automática</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">Feedback Detalhado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;