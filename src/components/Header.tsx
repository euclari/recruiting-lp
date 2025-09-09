import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-serif font-bold gradient-text">
              Clarice
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.features')}
            </a>
            <a 
              href="#book-clubs" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('book-clubs')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.bookClubs')}
            </a>
            <a 
              href="#developers" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('developers')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.developers')}
            </a>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center space-x-2 hover:bg-accent"
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