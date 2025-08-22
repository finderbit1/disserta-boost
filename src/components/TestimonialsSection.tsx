import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp, Award } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Aprovada em Medicina UFMG",
    avatar: "MS",
    rating: 5,
    text: "Comecei tirando 6 na redação. Com 3 meses usando a plataforma, cheguei a 9.2! A correção detalhada me mostrou exatamente onde melhorar. Recomendo para todos!",
    improvement: "6.0 → 9.2",
    time: "3 meses"
  },
  {
    name: "João Santos",
    role: "Aprovado em Direito USP",
    avatar: "JS",
    rating: 5,
    text: "A plataforma é incrível! As dicas personalizadas me ajudaram a identificar meus pontos fracos. Em 2 meses, minha nota subiu de 5.5 para 8.8.",
    improvement: "5.5 → 8.8",
    time: "2 meses"
  },
  {
    name: "Ana Costa",
    role: "Aprovada em Engenharia UFSC",
    avatar: "AC",
    rating: 5,
    text: "Nunca imaginei que conseguiria uma nota tão alta! O feedback é muito claro e as correções são rápidas. Valeu cada centavo investido!",
    improvement: "7.0 → 9.5",
    time: "4 meses"
  },
  {
    name: "Pedro Lima",
    role: "Aprovado em Administração FGV",
    avatar: "PL",
    rating: 5,
    text: "A correção em 24h é fantástica! Pude praticar muito mais e ver minha evolução em tempo real. Resultado: aprovação na primeira tentativa!",
    improvement: "6.5 → 9.0",
    time: "3 meses"
  },
  {
    name: "Carla Ferreira",
    role: "Aprovada em Psicologia UFRJ",
    avatar: "CF",
    rating: 5,
    text: "As dicas personalizadas fizeram toda diferença! Aprendi a estruturar melhor meus argumentos e minha nota saltou de 6.8 para 9.3.",
    improvement: "6.8 → 9.3",
    time: "5 meses"
  },
  {
    name: "Lucas Oliveira",
    role: "Aprovado em Ciência da Computação UFMG",
    avatar: "LO",
    rating: 5,
    text: "Plataforma excelente! A interface é intuitiva e as correções são muito detalhadas. Em 2 meses, minha redação melhorou drasticamente.",
    improvement: "5.2 → 8.7",
    time: "2 meses"
  }
];

const stats = [
  { number: "95%", label: "dos alunos melhoram" },
  { number: "2.3", label: "pontos de melhoria média" },
  { number: "24h", label: "tempo de correção" },
  { number: "50k+", label: "redações corrigidas" }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Award className="w-4 h-4 fill-primary" />
            <span>Histórias de sucesso</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Alunos que <span className="text-primary">transformaram</span> suas redações
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja como nossos alunos evoluíram de notas baixas para notas altas 
            e conquistaram suas vagas nas melhores universidades.
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

        {/* Depoimentos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/20 group"
            >
              <CardContent className="p-6">
                {/* Header do depoimento */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Texto do depoimento */}
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                    {testimonial.text}
                  </p>
                </div>
                
                {/* Melhoria e tempo */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-semibold text-foreground">{testimonial.improvement}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    em {testimonial.time}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Quer ser o próximo caso de sucesso?
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se aos mais de 50.000 alunos que já transformaram suas redações 
              e conquistaram suas vagas nas melhores universidades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-elegant">
                Começar Agora - É Grátis
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Ver Mais Depoimentos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
