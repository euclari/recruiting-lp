import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";
const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-40 left-20 animate-float delay-500">
          <Sparkles className="h-10 w-10 text-primary/25" />
        </div>
        <div className="absolute top-60 left-1/2 animate-float delay-200">
          <BookOpen className="h-6 w-6 text-primary/15" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-4 fade-in-up leading-tight">
              <span className="gradient-text-hero">
                {t('hero.title')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground md:text-foreground/90 mb-12 max-w-3xl mx-auto lg:mx-0 fade-in-up delay-300 leading-relaxed bg-white/80 dark:bg-background/80 md:bg-transparent rounded-md md:rounded-none px-3 py-1 md:px-0 md:py-0 inline-block">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center fade-in-up delay-300">
              <Button 
                variant="hero"
                size="lg" 
                className="group"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta.features')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('developers')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta.join')}
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="hero-image-container">
              <div className="modern-image-container">
                <img 
                  src="/undraw_reading-time_gcvc.svg" 
                  alt="Pessoa lendo com elementos flutuantes de livros"
                  className="animated-hero-image"
                />
              </div>
              <div className="floating-element w-12 h-12 -top-6 -right-6"></div>
              <div className="floating-element w-8 h-8 -bottom-8 -left-8"></div>
              <div className="floating-element w-6 h-6 top-1/2 -right-12"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;