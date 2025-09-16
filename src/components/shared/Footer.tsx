import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { useLanguage } from "@/components/contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card text-card-foreground border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <img src="/logo.svg" alt="Clarice Logo" className="h-20 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Conectando leitores e escritores em uma comunidade vibrante e inspiradora.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Recursos</a>
              <a href="#book-clubs" className="text-muted-foreground hover:text-primary transition-colors">Clubes do Livro</a>
              <a href="#developers" className="text-muted-foreground hover:text-primary transition-colors">Para Desenvolvedores</a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-2">Receba as últimas novidades e atualizações.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-grow px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p className="mb-4">
            {t('footer.tagline')}
          </p>
          <p>
            © {new Date().getFullYear()} Clarice Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
