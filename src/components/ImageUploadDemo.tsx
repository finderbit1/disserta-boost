import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, Camera, FileText, CheckCircle2, Zap, Clock, Star } from "lucide-react";

const ImageUploadDemo = () => {
  return (
    <section id="como-funciona" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
            <Camera className="w-4 h-4" />
            <span>Como Funciona</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Tire uma foto da sua <span className="text-primary">redação</span> e receba 
            <span className="block">correção em 24h</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Simples assim! Faça upload da imagem da sua redação e nossa IA especializada 
            fará uma correção detalhada seguindo os critérios do ENEM.
          </p>
        </div>

        {/* Processo em 3 passos */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Tire a Foto</h3>
            <p className="text-muted-foreground">
              Use seu celular para fotografar a redação. Nossa IA reconhece qualquer tipo de letra.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Faça Upload</h3>
            <p className="text-muted-foreground">
              Envie a imagem pela nossa plataforma. Suporte para JPG, PNG e PDF.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Receba a Correção</h3>
            <p className="text-muted-foreground">
              Em até 24h você recebe feedback detalhado com nota e dicas personalizadas.
            </p>
          </div>
        </div>

        {/* Demonstração interativa */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
          {/* Área de upload */}
          <div>
            <Card className="shadow-elegant border-2 border-dashed border-primary/30 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Upload className="w-10 h-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Teste Agora - É Grátis!</h3>
                <p className="text-muted-foreground mb-6">
                  Faça upload de uma imagem da sua redação e veja como funciona
                </p>
                
                <div className="space-y-4">
                  <Input 
                    type="file" 
                    accept="image/*,.pdf"
                    className="border-2 border-dashed border-primary/30"
                  />
                  
                  <Button className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300">
                    <span>Analisar Redação</span>
                    <Zap className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                <div className="mt-4 text-xs text-muted-foreground">
                  Suporte para JPG, PNG e PDF • Máximo 10MB
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Exemplo de resultado */}
          <div>
            <Card className="shadow-elegant border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Exemplo de Correção
                </CardTitle>
                <CardDescription>
                  Veja como será o resultado da sua redação
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Nota */}
                <div className="bg-gradient-subtle p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Nota Final:</span>
                    <div className="text-2xl font-bold text-primary">8.5/10</div>
                  </div>
                </div>
                
                {/* Critérios */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Competência 1 (Tema)</span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold">160</span>
                      <span className="text-xs text-muted-foreground">/200</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Competência 2 (Estrutura)</span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold">140</span>
                      <span className="text-xs text-muted-foreground">/200</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Competência 3 (Argumentação)</span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold">180</span>
                      <span className="text-xs text-muted-foreground">/200</span>
                    </div>
                  </div>
                </div>
                
                {/* Tempo de correção */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Correção em 24 horas</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefícios do sistema de imagem */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-gradient-subtle rounded-xl">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Qualquer Dispositivo</h4>
            <p className="text-sm text-muted-foreground">
              Funciona no celular, tablet ou computador
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-subtle rounded-xl">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">IA Avançada</h4>
            <p className="text-sm text-muted-foreground">
              Reconhece qualquer tipo de letra e formatação
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-subtle rounded-xl">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">24h Garantido</h4>
            <p className="text-sm text-muted-foreground">
              Correção rápida para você praticar mais
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-subtle rounded-xl">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">Critérios ENEM</h4>
            <p className="text-sm text-muted-foreground">
              Avaliação seguindo exatamente o que o ENEM cobra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUploadDemo;
