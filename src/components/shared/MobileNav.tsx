import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { scrollToSection } from "@/components/lib/utils";

interface MobileNavProps {
  t: (key: string) => string;
  language: string;
  toggleLanguage: () => void;
  scrolled: boolean;
}

const MobileNav = ({ t, language, toggleLanguage, scrolled }: MobileNavProps) => {
  return (
    <div className="md:hidden overflow-x-hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
            side="bottom"
            className="flex flex-col items-center justify-center px-4 py-6 shadow-lg w-full max-w-full max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-t-2xl"
        >
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
          <nav className="flex flex-col space-y-6 text-center">
            <SheetClose asChild>
              <a
                href="#"
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                {t('nav.home')}
              </a>
            </SheetClose>
            <SheetClose asChild>
              <a
                href="#features"
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
              >
                {t('nav.features')}
              </a>
            </SheetClose>
            <SheetClose asChild>
              <a
                href="#book-clubs"
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('book-clubs');
                }}
              >
                {t('nav.bookClubs')}
              </a>
            </SheetClose>
            <SheetClose asChild>
              <a
                href="#developers"
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('developers');
                }}
              >
                {t('nav.developers')}
              </a>
            </SheetClose>
            <SheetClose asChild>
              <a
                href="#about"
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                {t('nav.about')}
              </a>
            </SheetClose>
            <SheetClose asChild>
              <a
                href="#join-team"
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('join-team');
                }}
              >
                {t('nav.joinTeam')}
              </a>
            </SheetClose>
          </nav>
          <Button
            variant="ghost"
            size="lg"
            onClick={toggleLanguage}
            className="flex items-center space-x-2 hover:bg-accent mt-8"
          >
            <Globe className="h-5 w-5" />
            <span className="font-medium text-lg">
              {language === 'pt' ? 'EN' : 'PT'}
            </span>
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;