import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Star, Zap, Clock, Shield, Users, Camera } from "lucide-react";

const competitors = [
  {
    name: "Outras Plataformas",
    features: [
      { text: "Digitação manual", has: false },
      { text: "Espera de 3-7 dias", has: false },
      { text: "Feedback genérico", has: false },
      { text: "Sem garantia", has: false },
      { text: "Preços altos", has: false }
    ],
    price: "R$ 150+",
    rating: "3.2",
    color: "gray"
  },
  {
    name: "CorrigeJá",
    features: [
      { text: "Upload por imagem", has: true },
      { text: "Correção em 24h", has: true },
      { text: "Feedback personalizado", has: true },
      { text: "Garantia de 30 dias", has: true },
      { text: "Preços acessíveis", has: true }
    ],
    price: "A partir de R$ 29",
    rating: "4.9",
    color: "primary",
    highlight: true
  }
];

const ComparisonSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Star className="w-4 h-4 fill-primary" />
            <span>Por que escolher a CorrigeJá?</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            A <span className="text-primary">diferença</span> que faz toda diferença
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja como nossa plataforma revoluciona a correção de redações 
            comparada às soluções tradicionais do mercado.
          </p>
        </div>

        {/* Comparação lado a lado */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {competitors.map((competitor, index) => (
            <Card 
              key={index} 
              className={`relative shadow-card hover:shadow-elegant transition-all duration-300 border-2 ${
                competitor.highlight 
                  ? 'border-primary scale-105 shadow-elegant' 
                  : 'border-gray-200'
              }`}
            >
              {/* Badge de destaque */}
              {competitor.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  <Star className="w-4 h-4 inline mr-2" />
                  Recomendado
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className={`text-2xl mb-2 ${
                  competitor.highlight ? 'text-primary' : 'text-foreground'
                }`}>
                  {competitor.name}
                </CardTitle>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(parseFloat(competitor.rating)) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {competitor.rating}/5.0
                  </span>
                </div>
                
                <div className="text-3xl font-bold text-foreground">
                  {competitor.price}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {competitor.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      {feature.has ? (
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        feature.has ? 'text-foreground' : 'text-muted-foreground line-through'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vantagens exclusivas */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-8 text-foreground">
            Vantagens <span className="text-primary">exclusivas</span> da CorrigeJá
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-card border border-gray-100">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Upload por Imagem</h4>
              <p className="text-sm text-muted-foreground">
                Tire uma foto e envie. Sem necessidade de digitar tudo novamente.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-card border border-gray-100">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">IA Especializada</h4>
              <p className="text-sm text-muted-foreground">
                Tecnologia de ponta treinada especificamente para redações do ENEM.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-card border border-gray-100">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">24h Garantido</h4>
              <p className="text-sm text-muted-foreground">
                Correção rápida para você praticar mais e melhorar continuamente.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-card border border-gray-100">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Garantia Total</h4>
              <p className="text-sm text-muted-foreground">
                30 dias ou devolvemos seu dinheiro. Apostamos no seu sucesso.
              </p>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para experimentar a diferença?
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se aos mais de 50.000 alunos que já transformaram suas redações 
              com nossa plataforma revolucionária.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-elegant">
                Começar Teste Grátis
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Ver Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
