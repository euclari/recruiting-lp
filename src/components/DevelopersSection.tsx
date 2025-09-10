import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Code2, Heart, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";


const DevelopersSection = () => {
  const { t } = useLanguage();

  return (
    <section id="developers" className="py-32 bg-gradient-purple relative overflow-hidden">
      {/* Background Image with Purple Overlay */}
      
      <div className="absolute inset-0 bg-gradient-purple"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8 fade-in-up">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Code2 className="h-10 w-10 text-black" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 fade-in-up delay-200 text-black">
              {t('developers.title')}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 scale-in delay-200"></div>
            
            <p className="text-xl text-black/90 mb-8 max-w-3xl mx-auto fade-in-up delay-400">
              {t('developers.description')}
            </p>
          </div>
          {/* Developers Image */}
          <div className="flex justify-center mb-12">
            <div className="relative max-w-md">
              <div className="modern-image-container">
                <img 
                  src="/undraw_programming_65t2.svg" 
                  alt="Programação e desenvolvimento"
                  className="modern-image bounce-in"
                />
              </div>
              {/* Modern floating elements */}
              <div className="floating-element w-16 h-16 -top-8 -right-8"></div>
              <div className="floating-element w-10 h-10 -bottom-6 -left-6"></div>
              <div className="floating-element w-8 h-8 top-1/4 -left-10"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center scale-in delay-500">
              <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">Comunidade</h3>
              <p className="text-black/80">Junte-se a desenvolvedores apaixonados por literatura</p>
            </div>
            
            <div className="text-center scale-in delay-600">
              <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">Tecnologia</h3>
              <p className="text-black/80">React, TypeScript, Tailwind e muito mais</p>
            </div>
            
            <div className="text-center scale-in delay-700">
              <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-serif mb-2 text-black">Propósito</h3>
              <p className="text-black/80">Impactar positivamente a cultura de leitura no Brasil</p>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl fade-in-up delay-800">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-400 mr-2" />
                  <span className="text-lg font-medium text-white">
                    {t('developers.contact')}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex items-center space-x-2 border-white/30 text-black hover:bg-white/20 hover:text-black backdrop-blur-sm"
                    asChild
                  >
                    <a href="mailto:jobs@euclari.com.br">
                      <Mail className="h-4 w-4" />
                      <span>jobs@euclari.com.br</span>
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="bg-white text-primary border-white shadow-lg font-medium"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    {t('developers.cta')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;