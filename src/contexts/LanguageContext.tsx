import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.features': 'Funcionalidades',
    'nav.bookClubs': 'Clubes de Leitura',
    'nav.developers': 'Desenvolvedores',
    
    // Hero Section
    'hero.title': 'Clarice — onde a leitura vira encontro',
    'hero.subtitle': 'Uma rede social acadêmica em construção, feita para leitores apaixonados.',
    'hero.cta.features': 'Ver funcionalidades',
    'hero.cta.join': 'Participe como Dev',
    
    // About Section
    'about.title': 'Sobre o Clarice',
    'about.description': 'O Clarice é um projeto acadêmico inspirado no Skoob, mas com visual moderno, funcionalidades sociais ricas e identidade brasileira. Uma plataforma onde leitores se conectam, compartilham descobertas e criam comunidades em torno dos livros que amam.',
    
    // Features
    'features.title': 'Funcionalidades',
    'features.profile.title': 'Perfil Personalizado',
    'features.profile.desc': 'Customize seu perfil literário',
    'features.friends.title': 'Seguir Amigos',
    'features.friends.desc': 'Acompanhe o progresso dos seus amigos',
    'features.pulses.title': 'Pulses de Leitura',
    'features.pulses.desc': 'Registre momentos da sua jornada',
    'features.feed.title': 'Feed Global',
    'features.feed.desc': 'Descubra resenhas e conquistas',
    'features.goals.title': 'Metas e Conquistas',
    'features.goals.desc': 'Defina objetivos e celebre vitórias',
    'features.shelves.title': 'Estantes Virtuais',
    'features.shelves.desc': 'Organize seus livros por categoria',
    'features.ai.title': 'Recomendações IA',
    'features.ai.desc': 'Sugestões personalizadas inteligentes',
    'features.notes.title': 'Post-its Literários',
    'features.notes.desc': 'Anote pensamentos temporários',
    'features.messages.title': 'Mensagens Diretas',
    'features.messages.desc': 'Converse com outros leitores',
    
    // Book Clubs
    'bookClubs.title': 'Clubes de Leitura',
    'bookClubs.subtitle': 'Transforme a leitura em uma experiência compartilhada.',
    'bookClubs.description': 'Crie ou participe de clubes com limite de membros, onde vocês votam nos próximos livros, acompanham o progresso coletivo e discutem cada capítulo em chats temporários.',
    'bookClubs.feature1': 'Votação democrática de livros',
    'bookClubs.feature2': 'Progresso coletivo visualizado',
    'bookClubs.feature3': 'Chats por capítulo',
    'bookClubs.feature4': 'Discussões temáticas',
    
    // Developers
    'developers.title': 'Convite para Desenvolvedores',
    'developers.description': 'Clarice ainda é um projeto acadêmico. Quer participar da construção? Junte-se a nós!',
    'developers.contact': 'Entre em contato:',
    'developers.cta': 'Contribuir no GitHub',
  },
  en: {
    // Header
    'nav.features': 'Features',
    'nav.bookClubs': 'Book Clubs',
    'nav.developers': 'Developers',
    
    // Hero Section
    'hero.title': 'Clarice — where reading becomes connection',
    'hero.subtitle': 'An academic project in progress, made for passionate readers.',
    'hero.cta.features': 'View features',
    'hero.cta.join': 'Join as Dev',
    
    // About Section
    'about.title': 'About Clarice',
    'about.description': 'Clarice is an academic project inspired by Skoob, but with modern design, rich social features and Brazilian identity. A platform where readers connect, share discoveries and create communities around the books they love.',
    
    // Features
    'features.title': 'Features',
    'features.profile.title': 'Custom Profile',
    'features.profile.desc': 'Customize your literary profile',
    'features.friends.title': 'Follow Friends',
    'features.friends.desc': 'Track your friends\' reading progress',
    'features.pulses.title': 'Reading Pulses',
    'features.pulses.desc': 'Log moments from your journey',
    'features.feed.title': 'Global Feed',
    'features.feed.desc': 'Discover reviews and achievements',
    'features.goals.title': 'Goals & Achievements',
    'features.goals.desc': 'Set objectives and celebrate wins',
    'features.shelves.title': 'Virtual Shelves',
    'features.shelves.desc': 'Organize books by category',
    'features.ai.title': 'AI Recommendations',
    'features.ai.desc': 'Smart personalized suggestions',
    'features.notes.title': 'Literary Post-its',
    'features.notes.desc': 'Jot down temporary thoughts',
    'features.messages.title': 'Direct Messages',
    'features.messages.desc': 'Chat with other readers',
    
    // Book Clubs
    'bookClubs.title': 'Book Clubs',
    'bookClubs.subtitle': 'Turn reading into a shared experience.',
    'bookClubs.description': 'Create or join clubs with member limits, where you vote on next books, track collective progress and discuss each chapter in temporary chats.',
    'bookClubs.feature1': 'Democratic book voting',
    'bookClubs.feature2': 'Visualized collective progress',
    'bookClubs.feature3': 'Chapter-based chats',
    'bookClubs.feature4': 'Thematic discussions',
    
    // Developers
    'developers.title': 'Invitation for Developers',
    'developers.description': 'Clarice is still an academic project. Want to join the building? Be part of it!',
    'developers.contact': 'Get in touch:',
    'developers.cta': 'Contribute on GitHub',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};