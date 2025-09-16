import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Abstract background */}
      <div className="absolute inset-0 z-0 opacity-80" style={{backgroundImage: `
        radial-gradient(circle at 15% 25%, hsl(var(--primary) / 0.15), transparent 35%),
        radial-gradient(circle at 85% 75%, hsl(var(--primary) / 0.15), transparent 35%)
      `}} />
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full filter blur-3xl animate-float" style={{animationDelay: '4s', opacity: 0.5}}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold mb-4 fade-in-up leading-tight text-foreground">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.3s'}}>
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up" style={{animationDelay: '0.3s'}}>
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
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
