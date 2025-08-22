import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle2, Zap } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            {/* Badge de destaque */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
              <Star className="w-4 h-4 fill-primary" />
              <span>#1 Plataforma de Correção de Redação do Brasil</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
              Tire uma foto da sua <span className="bg-gradient-primary bg-clip-text text-transparent">redação</span> e 
              <span className="block text-primary">receba correção em 24h</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              <strong>Simples assim!</strong> Fotografe sua redação e nossa IA especializada fará 
              uma correção detalhada seguindo os critérios do ENEM. <strong>95% de melhoria garantida</strong>.
            </p>
            
            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 shadow-elegant hover:shadow-xl transition-all duration-300 bg-gradient-primary hover:scale-105 group"
              >
                <span>Começar Agora - É Grátis</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 hover:bg-accent transition-all duration-300"
              >
                Ver Demonstração
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-white"></div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">+50.000</span> alunos já melhoraram
              </div>
            </div>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                  95%
                </div>
                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2 flex items-center justify-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  24h
                </div>
                <div className="text-sm text-muted-foreground">Correção Rápida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">9.2</div>
                <div className="text-sm text-muted-foreground">Nota Média</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Imagem principal com overlay */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Plataforma de correção de redação"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
              
              {/* Overlay com texto */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <div className="text-sm opacity-80 mb-2">Exemplo de correção</div>
                  <div className="text-lg font-semibold">Nota: 9.2/10</div>
                </div>
              </div>
            </div>
            
            {/* Cards flutuantes */}
            <div className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-semibold text-foreground">IA Avançada</div>
                  <div className="text-xs text-muted-foreground">Análise em tempo real</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Feedback Detalhado</div>
                  <div className="text-xs text-muted-foreground">Dicas personalizadas</div>
                </div>
              </div>
            </div>
            
            {/* Badge de garantia */}
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Garantia de 30 dias
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;