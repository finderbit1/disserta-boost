import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, BookOpen, Target } from "lucide-react";

const WritingInterface = () => {
  const [text, setText] = useState("");
  const [showCorrection, setShowCorrection] = useState(false);

  const handleAnalyze = () => {
    if (text.trim()) {
      setShowCorrection(true);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Teste sua redação <span className="text-primary">gratuitamente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cole ou digite seu texto abaixo e receba uma análise completa em segundos
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Text Input */}
            <Card className="shadow-card border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Sua Redação
                </CardTitle>
                <CardDescription>
                  Cole seu texto aqui para receber correções e sugestões
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Cole ou digite sua redação aqui..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[300px] text-base leading-relaxed resize-none border-muted"
                />
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-muted-foreground">
                    {text.length} caracteres
                  </span>
                  <Button 
                    onClick={handleAnalyze}
                    disabled={!text.trim()}
                    className="shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Analisar Texto
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-card border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  Análise e Correções
                </CardTitle>
                <CardDescription>
                  Feedback detalhado sobre sua redação
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!showCorrection ? (
                  <div className="min-h-[300px] flex items-center justify-center text-center">
                    <div>
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full opacity-20"></div>
                      <p className="text-muted-foreground">
                        Cole seu texto e clique em "Analisar" para ver as correções
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Score */}
                    <div className="text-center p-6 bg-gradient-subtle rounded-lg">
                      <div className="text-4xl font-bold text-primary mb-2">8.5</div>
                      <div className="text-sm text-muted-foreground">Nota Geral</div>
                    </div>

                    {/* Feedback Categories */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                        <span className="font-medium">Gramática</span>
                        <Badge variant="secondary">Excelente</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                        <span className="font-medium">Coesão</span>
                        <Badge variant="outline">Boa</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                        <span className="font-medium">Argumentação</span>
                        <Badge variant="secondary">Muito Boa</Badge>
                      </div>
                    </div>

                    {/* Sample Corrections */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Sugestões de Melhoria:</h4>
                      
                      <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
                          <div>
                            <p className="text-sm text-red-700 font-medium">Concordância</p>
                            <p className="text-sm text-red-600">
                              "Os dados mostra" → "Os dados mostram"
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" />
                          <div>
                            <p className="text-sm text-blue-700 font-medium">Sugestão</p>
                            <p className="text-sm text-blue-600">
                              Use conectivos para melhor fluidez entre parágrafos
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingInterface;