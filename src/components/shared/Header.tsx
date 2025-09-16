import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/components/lib/utils";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";
import MobileNav from "./MobileNav";
            

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a 
              href="#" 
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              <img src="/logo.svg" alt="Clarice Logo" className="h-8 w-auto" />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
                        <a 
              href="#" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              {t('nav.home')}
            </a>
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
            >
              {t('nav.features')}
            </a>
            <a 
              href="#book-clubs" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('book-clubs');
              }}
            >
              {t('nav.bookClubs')}
            </a>
            <a 
              href="#developers" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('developers');
              }}
            >
              {t('nav.developers')}
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              {t('nav.about')}
            </a>
          </nav>

          <div className="flex items-center md:hidden">
            <MobileNav 
              t={t} 
              language={language} 
              toggleLanguage={toggleLanguage} 
              scrolled={true} 
            />
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hidden md:flex items-center space-x-2 hover:bg-accent"
          >
            <Globe className="h-4 w-4" />
            <span className="font-medium">
              {language === 'pt' ? 'EN' : 'PT'}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;