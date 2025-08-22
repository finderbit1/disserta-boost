import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star, Zap, Crown, ArrowRight, Shield } from "lucide-react";

const plans = [
  {
    name: "Plano Básico",
    price: "R$ 29",
    period: "/mês",
    description: "Perfeito para começar sua jornada",
    features: [
      "5 correções por mês",
      "Feedback básico",
      "Dicas gerais",
      "Suporte por email",
      "Acesso por 30 dias"
    ],
    popular: false,
    cta: "Começar Grátis",
    highlight: false
  },
  {
    name: "Plano Premium",
    price: "R$ 79",
    period: "/mês",
    description: "O mais escolhido pelos alunos",
    features: [
      "Correções ilimitadas",
      "Feedback detalhado",
      "Dicas personalizadas",
      "Suporte prioritário",
      "Acesso por 30 dias",
      "Garantia de melhoria",
      "Relatórios semanais"
    ],
    popular: true,
    cta: "Começar Agora",
    highlight: true
  },
  {
    name: "Plano Anual",
    price: "R$ 597",
    period: "/ano",
    description: "Economia de 37% + bônus exclusivos",
    features: [
      "Tudo do Premium",
      "2 meses grátis",
      "Curso de redação",
      "Simulados exclusivos",
      "Mentoria em grupo",
      "Certificado de conclusão"
    ],
    popular: false,
    cta: "Economizar R$ 351",
    highlight: false
  }
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Star className="w-4 h-4 fill-primary" />
            <span>Escolha seu plano</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Comece a <span className="text-primary">melhorar</span> hoje mesmo
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Escolha o plano ideal para suas necessidades. Todos incluem nossa garantia de 30 dias 
            e suporte especializado para garantir seu sucesso.
          </p>
        </div>

        {/* Planos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative shadow-card hover:shadow-elegant transition-all duration-300 border-2 ${
                plan.highlight 
                  ? 'border-primary scale-105 shadow-elegant' 
                  : 'border-gray-200 hover:border-primary/20'
              }`}
            >
              {/* Badge de popular */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <Crown className="w-4 h-4 inline mr-2" />
                  Mais Popular
                </div>
              )}
              
              {/* Badge de economia */}
              {plan.name === "Plano Anual" && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <Zap className="w-4 h-4 inline mr-2" />
                  Melhor Custo-Benefício
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                
                <div className="mt-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                  
                  {plan.name === "Plano Anual" && (
                    <div className="mt-2">
                      <span className="text-sm text-muted-foreground line-through">R$ 948/ano</span>
                      <span className="text-sm text-secondary font-semibold ml-2">Economia de R$ 351</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-8 py-3 ${
                    plan.highlight 
                      ? 'bg-gradient-primary hover:scale-105' 
                      : 'bg-primary hover:bg-primary/90'
                  } transition-all duration-300 group`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Garantia e CTA */}
        <div className="text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Garantia de 30 Dias</h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Se você não melhorar significativamente em 30 dias, devolvemos 100% do seu dinheiro. 
              Sem perguntas, sem complicações. Apostamos no seu sucesso.
            </p>
            
            <Button size="lg" className="bg-gradient-primary hover:scale-105 transition-all duration-300 px-8 py-4 text-lg">
              <span>Começar Agora - É Grátis</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Não é necessário cartão de crédito • Cancele a qualquer momento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
