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
    'developers.description': 'Clarice ainda é um projeto acadêmico. Estamos à procura de pessoas que possam agregar na equipe, como UI/UX Designers, Product Managers e outros talentos. Junte-se a nós!',
    'developers.contact': 'Entre em contato:',
    'developers.cta': 'Contribuir no GitHub',
    
    // Join Team Section
    'joinTeam.title': 'Junte-se à Nossa Equipe',
    'joinTeam.subtitle': 'Estamos em busca de pessoas talentosas que possam agregar valor ao nosso projeto. Se você tem paixão por literatura e tecnologia, venha fazer parte dessa jornada!',
    'joinTeam.lookingFor': 'Procuramos por:',
    'joinTeam.uiux.title': 'UI/UX Designer',
    'joinTeam.uiux.desc': 'Alguém que entenda de experiência do usuário e possa criar interfaces intuitivas e belas para nossa plataforma de leitura social.',
    'joinTeam.product.title': 'Product Manager',
    'joinTeam.product.desc': 'Profissional com visão estratégica para ajudar a definir o roadmap do produto e garantir que estamos criando valor real para nossos usuários.',
    'joinTeam.developer.title': 'Desenvolvedores',
    'joinTeam.developer.desc': 'Desenvolvedores frontend e backend que queiram contribuir para uma plataforma que conecta pessoas através da literatura.',
    'joinTeam.other.title': 'Outras Áreas',
    'joinTeam.other.desc': 'Se você tem outras habilidades que podem agregar ao projeto, não hesite em entrar em contato! Estamos abertos a novas ideias.',
    'joinTeam.interested': 'Interessado em fazer parte?',
    'joinTeam.form.name': 'Nome',
    'joinTeam.form.email': 'Email',
    'joinTeam.form.role': 'Área de Interesse',
    'joinTeam.form.message': 'Mensagem',
    'joinTeam.form.namePlaceholder': 'Seu nome completo',
    'joinTeam.form.emailPlaceholder': 'seu@email.com',
    'joinTeam.form.rolePlaceholder': 'UI/UX, Product, Desenvolvimento, etc.',
    'joinTeam.form.messagePlaceholder': 'Conte-nos um pouco sobre você, sua experiência e por que gostaria de fazer parte do projeto...',
    'joinTeam.form.submit': 'Enviar Candidatura',
    'joinTeam.form.sending': 'Enviando...',
    'joinTeam.form.success': 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    'joinTeam.form.error': 'Erro ao enviar mensagem. Tente novamente mais tarde.',
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
    'developers.description': 'Clarice is still an academic project. We are looking for people who can add to the team, such as UI/UX Designers, Product Managers, and other talents. Join us!',
    'developers.contact': 'Get in touch:',
    'developers.cta': 'Contribute on GitHub',
    
    // Join Team Section
    'joinTeam.title': 'Join Our Team',
    'joinTeam.subtitle': 'We are looking for talented people who can add value to our project. If you have a passion for literature and technology, come be part of this journey!',
    'joinTeam.lookingFor': 'We are looking for:',
    'joinTeam.uiux.title': 'UI/UX Designer',
    'joinTeam.uiux.desc': 'Someone who understands user experience and can create intuitive and beautiful interfaces for our social reading platform.',
    'joinTeam.product.title': 'Product Manager',
    'joinTeam.product.desc': 'Professional with strategic vision to help define the product roadmap and ensure we are creating real value for our users.',
    'joinTeam.developer.title': 'Developers',
    'joinTeam.developer.desc': 'Frontend and backend developers who want to contribute to a platform that connects people through literature.',
    'joinTeam.other.title': 'Other Areas',
    'joinTeam.other.desc': 'If you have other skills that can add to the project, don\'t hesitate to get in touch! We are open to new ideas.',
    'joinTeam.interested': 'Interested in joining?',
    'joinTeam.form.name': 'Name',
    'joinTeam.form.email': 'Email',
    'joinTeam.form.role': 'Area of Interest',
    'joinTeam.form.message': 'Message',
    'joinTeam.form.namePlaceholder': 'Your full name',
    'joinTeam.form.emailPlaceholder': 'your@email.com',
    'joinTeam.form.rolePlaceholder': 'UI/UX, Product, Development, etc.',
    'joinTeam.form.messagePlaceholder': 'Tell us a bit about yourself, your experience and why you would like to be part of the project...',
    'joinTeam.form.submit': 'Submit Application',
    'joinTeam.form.sending': 'Sending...',
    'joinTeam.form.success': 'Message sent successfully! We will get in touch soon.',
    'joinTeam.form.error': 'Error sending message. Please try again later.',
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