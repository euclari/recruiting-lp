import { useLanguage } from "@/components/contexts/LanguageContext";
import { BookOpen } from "lucide-react";


const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 fade-in-up text-foreground">
              {t('about.title')}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 scale-in delay-200"></div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 fade-in-up delay-300">
              {t('about.description')}
            </p>
          </div>

          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-soft text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-lg font-serif text-foreground mb-2">Visual Moderno</h3>
              <p className="text-muted-foreground text-sm">Interface intuitiva e contemporânea</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-soft text-center transform transition-transform duration-300 hover:-translate-y-2 md:mt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-lg font-serif text-foreground mb-2">Social Inovador</h3>
              <p className="text-muted-foreground text-sm">Conecte-se de forma significativa</p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-soft text-center transform transition-transform duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-lg font-serif text-foreground mb-2">100% Brasileiro</h3>
              <p className="text-muted-foreground text-sm">Identidade e cultura nacional</p>
            </div>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border/50 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl font-serif font-normal mb-4 text-foreground">Projeto Acadêmico</h3>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
              Desenvolvido com paixão por estudantes brasileiros para revolucionar a forma como nos conectamos através da literatura. Uma iniciativa que combina tecnologia e amor pelos livros.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;