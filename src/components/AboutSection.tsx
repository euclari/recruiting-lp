import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 fade-in-up">
              {t('about.title')}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 scale-in delay-200"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up delay-300">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {t('about.description')}
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg text-foreground">Visual moderno e intuitivo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg text-foreground">Funcionalidades sociais inovadoras</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg text-foreground">Identidade 100% brasileira</span>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right delay-400">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border/50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-normal mb-4">Projeto Acadêmico</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Desenvolvido com paixão por estudantes brasileiros para revolucionar a forma como nos conectamos através da literatura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;