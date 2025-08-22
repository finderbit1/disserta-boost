import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, BookOpen, Users, Target, Award, TrendingUp, Shield, Clock, Star } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Correção em 24 Horas",
    description: "Receba feedback detalhado em menos de 24 horas. Sem esperas, sem atrasos. Sua redação corrigida quando você precisar.",
    highlight: "24h",
    color: "secondary"
  },
  {
    icon: Target,
    title: "Foco Total no ENEM",
    description: "Nossa IA foi treinada especificamente nos critérios do ENEM. Cada correção segue exatamente o que os corretores procuram.",
    highlight: "ENEM",
    color: "primary"
  },
  {
    icon: BookOpen,
    title: "Dicas Personalizadas",
    description: "Receba sugestões específicas baseadas nos seus erros mais frequentes. Aprenda com cada redação e melhore continuamente.",
    highlight: "Personalizado",
    color: "secondary"
  },
  {
    icon: Shield,
    title: "Garantia de 30 Dias",
    description: "Se você não melhorar em 30 dias, devolvemos seu dinheiro. Apostamos no seu sucesso com garantia total.",
    highlight: "Garantia",
    color: "primary"
  },
  {
    icon: TrendingUp,
    title: "95% de Melhoria Garantida",
    description: "Nossos alunos melhoram em média 2 pontos na redação. Resultados comprovados e verificáveis.",
    highlight: "95%",
    color: "secondary"
  },
  {
    icon: Clock,
    title: "Acesso Ilimitado",
    description: "Corrija quantas redações quiser. Sem limites mensais, sem restrições. Pratique o quanto precisar.",
    highlight: "Ilimitado",
    color: "primary"
  }
];

const stats = [
  { number: "50.000+", label: "Alunos Atendidos" },
  { number: "95%", label: "Taxa de Sucesso" },
  { number: "9.2", label: "Nota Média" },
  { number: "24h", label: "Tempo de Correção" }
];

const FeaturesSection = () => {
  return (
    <section id="recursos" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Star className="w-4 h-4 fill-primary" />
            <span>Por que somos a escolha #1?</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Transforme suas <span className="text-primary">redações</span> em 
            <span className="block">notas altas</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos a ferramenta mais avançada do mercado, com IA especializada 
            e metodologia comprovada para garantir seu sucesso.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/20 group relative overflow-hidden"
            >
              {/* Highlight badge */}
              <div className={`absolute top-4 right-4 bg-${feature.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                {feature.highlight}
              </div>
              
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-primary rounded-full border-2 border-white"></div>
                ))}
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">+50.000 alunos já transformaram suas redações</div>
                <div className="text-sm text-muted-foreground">Junte-se a eles hoje mesmo</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Resultados comprovados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Suporte especializado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;