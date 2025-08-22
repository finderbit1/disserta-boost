import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Clock, Shield, Star, ArrowRight, Gift } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Teste Grátis por 7 Dias",
    description: "Acesse todas as funcionalidades sem compromisso"
  },
  {
    icon: Clock,
    title: "Correção em 24 Horas",
    description: "Feedback rápido para você praticar mais"
  },
  {
    icon: Shield,
    title: "Sem Cartão de Crédito",
    description: "Comece agora mesmo, sem burocracia"
  },
  {
    icon: Star,
    title: "Acesso Ilimitado",
    description: "Corrija quantas redações quiser"
  }
];

const LeadCaptureSection = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo da esquerda */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
              <Gift className="w-4 h-4" />
              <span>Oferta Limitada</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Comece a <span className="text-yellow-300">melhorar</span> sua redação 
              <span className="block">hoje mesmo</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Junte-se aos mais de 50.000 alunos que já transformaram suas redações. 
              <strong>7 dias grátis</strong>, sem compromisso, sem cartão de crédito.
            </p>
            
            {/* Benefícios */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{benefit.title}</div>
                    <div className="text-sm text-white/80">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-1">95%</div>
                <div className="text-sm text-white/80">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-1">24h</div>
                <div className="text-sm text-white/80">Correção Rápida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-1">50k+</div>
                <div className="text-sm text-white/80">Alunos Atendidos</div>
              </div>
            </div>
          </div>
          
          {/* Formulário da direita */}
          <div className="relative">
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Header do formulário */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Teste Grátis por 7 Dias
                  </h3>
                  
                  <p className="text-muted-foreground">
                    Comece agora e veja a diferença em sua redação
                  </p>
                </div>
                
                {/* Formulário */}
                <form className="space-y-4">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Seu nome completo" 
                      className="h-12 text-base"
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Seu melhor email" 
                      className="h-12 text-base"
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="WhatsApp (opcional)" 
                      className="h-12 text-base"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-semibold bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-elegant"
                  >
                    <span>Começar Teste Grátis</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
                
                {/* Garantias */}
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4 text-secondary" />
                      <span>100% Seguro</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>7 dias grátis</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">
                    Ao continuar, você concorda com nossos{' '}
                    <a href="#" className="text-primary hover:underline">Termos de Uso</a> e{' '}
                    <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Badge de urgência */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              ⚡ Oferta Limitada
            </div>
          </div>
        </div>
        
        {/* CTA adicional */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Não perca mais tempo com redações ruins
            </h3>
            
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Milhares de alunos já transformaram suas redações e conquistaram suas vagas. 
              <strong>Seu momento é agora!</strong>
            </p>
            
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <span>Quero Começar Agora</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
