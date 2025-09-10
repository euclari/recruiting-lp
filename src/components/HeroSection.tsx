import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-books.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floating Literary Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float delay-100">
          <BookOpen className="h-8 w-8 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float delay-300">
          <Users className="h-6 w-6 text-primary/20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float delay-500">
          <Sparkles className="h-10 w-10 text-primary/25" />
        </div>
        <div className="absolute top-60 left-1/2 animate-float delay-200">
          <BookOpen className="h-6 w-6 text-primary/15" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-4 fade-in-up leading-tight">
            <span className="gradient-text">
              {t('hero.title')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground/80 mb-12 max-w-3xl mx-auto fade-in-up delay-300 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up delay-300">
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

      {/* Decorative gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;