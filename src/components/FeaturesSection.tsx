import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, BookOpen, Users, Target, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Correção Instantânea",
    description: "Análise completa do seu texto em segundos, com feedback detalhado sobre gramática, ortografia e estilo."
  },
  {
    icon: Target,
    title: "Foco no ENEM",
    description: "Correções especializadas seguindo os critérios de avaliação do ENEM e principais vestibulares."
  },
  {
    icon: BookOpen,
    title: "Dicas Personalizadas",
    description: "Sugestões específicas baseadas nos seus erros mais frequentes para melhorar continuamente."
  },
  {
    icon: Users,
    title: "Professores Especialistas",
    description: "Equipe de professores experientes validando e aprimorando nosso sistema de correção."
  },
  {
    icon: Award,
    title: "Resultados Comprovados",
    description: "Mais de 95% dos nossos alunos melhoram significativamente suas notas em redação."
  },
  {
    icon: CheckCircle2,
    title: "Interface Intuitiva",
    description: "Plataforma fácil de usar, com interface limpa e foco na experiência do estudante."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Por que escolher nossa <span className="text-primary">plataforma?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos a ferramenta mais completa para ajudar você a dominar a redação 
            e conquistar a nota que sempre sonhou.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/20 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-card border">
            <CheckCircle2 className="w-5 h-5 text-secondary" />
            <span className="font-medium text-foreground">
              Mais de 50.000 alunos já melhoraram suas redações
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;