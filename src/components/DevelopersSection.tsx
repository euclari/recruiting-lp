import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Code2, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DevelopersSection = () => {
  const { t } = useLanguage();

  return (
    <section id="developers" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6 fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 fade-in-up delay-200">
              {t('developers.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 fade-in-up delay-300">
              {t('developers.description')}
            </p>
          </div>

          <Card className="shadow-soft bg-gradient-card border-border/50 fade-in-up delay-400">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-500 mr-2" />
                  <span className="text-lg font-medium">
                    {t('developers.contact')}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail className="h-4 w-4" />
                    <span>jobs@euclari.com.br</span>
                  </Button>
                  
                <Button 
                  variant="literary"
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-glow hover:shadow-soft transition-all duration-300 group"
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