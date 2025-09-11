import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  Users, 
  Heart, 
  Globe, 
  Target, 
  BookOpen, 
  Brain, 
  StickyNote, 
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";


const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    // ... keep existing code (features array)
    {
      icon: User,
      title: t('features.profile.title'),
      description: t('features.profile.desc'),
    },
    {
      icon: Users,
      title: t('features.friends.title'),
      description: t('features.friends.desc'),
    },
    {
      icon: Heart,
      title: t('features.pulses.title'),
      description: t('features.pulses.desc'),
    },
    {
      icon: Globe,
      title: t('features.feed.title'),
      description: t('features.feed.desc'),
    },
    {
      icon: Target,
      title: t('features.goals.title'),
      description: t('features.goals.desc'),
    },
    {
      icon: BookOpen,
      title: t('features.shelves.title'),
      description: t('features.shelves.desc'),
    },
    {
      icon: Brain,
      title: t('features.ai.title'),
      description: t('features.ai.desc'),
    },
    {
      icon: StickyNote,
      title: t('features.notes.title'),
      description: t('features.notes.desc'),
    },
    {
      icon: MessageSquare,
      title: t('features.messages.title'),
      description: t('features.messages.desc'),
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 lg:py-32 bg-gradient-section relative overflow-hidden">
      {/* Background Image with Purple Overlay */}
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 to-primary/25"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 fade-in-up">
            {t('features.title')}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 scale-in delay-200"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up delay-300">
            Descubra as funcionalidades que tornam o Clarice único no mundo da leitura social
          </p>
        </div>

        {/* Feature Images Row */}
        <div className="image-grid image-grid-3 mb-16">
          <div className="text-center slide-in-from-left delay-500">
            <div className="relative inline-block mb-6 max-w-[200px]">
              <div className="modern-image-container">
                <img 
                  src="/undraw_social-media_vxq0.svg" 
                  alt="Rede social e conexões"
                  className="modern-image float-image"
                />
              </div>
              <div className="floating-element w-8 h-8 -top-4 -right-4"></div>
            </div>
            <h3 className="text-xl font-serif text-primary mb-2">Conexões Sociais</h3>
            <p className="text-muted-foreground text-sm">Conecte-se com outros leitores</p>
          </div>
          
          <div className="text-center bounce-in delay-700">
            <div className="relative inline-block mb-6 max-w-[200px]">
              <div className="modern-image-container">
                <img 
                  src="/undraw_friends-online_gvwz.svg" 
                  alt="Amigos online"
                  className="modern-image float-image"
                />
              </div>
              <div className="floating-element w-10 h-10 -bottom-4 -left-4"></div>
            </div>
            <h3 className="text-xl font-serif text-primary mb-2">Amigos Online</h3>
            <p className="text-muted-foreground text-sm">Faça novos amigos leitores</p>
          </div>
          
          <div className="text-center slide-in-from-right delay-900">
            <div className="relative inline-block mb-6 max-w-[200px]">
              <div className="modern-image-container">
                <img 
                  src="/undraw_solution-mindset_pit7.svg" 
                  alt="Solução e mindset"
                  className="modern-image float-image"
                />
              </div>
              <div className="floating-element w-6 h-6 top-1/2 -right-6"></div>
            </div>
            <h3 className="text-xl font-serif text-primary mb-2">Mindset Inovador</h3>
            <p className="text-muted-foreground text-sm">Pensamento criativo e inovador</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group scale-in delay-${(index + 1) * 100 + 1000}`}
            >
              <Card className="h-full shadow-soft hover:shadow-glow transition-all duration-500 border-border/50 bg-primary-light/20 backdrop-blur-sm hover:scale-105 transform hover:bg-primary/5">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/15 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-normal mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-primary/10">
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Em breve</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;