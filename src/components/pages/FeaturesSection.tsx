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
import { useInView } from "@/components/hooks/use-in-view";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
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

  const [titleRef, titleInView] = useInView({ threshold: 0.1 });
  const [separatorRef, separatorInView] = useInView({ threshold: 0.1 });
  const [descriptionRef, descriptionInView] = useInView({ threshold: 0.1 });

  return (
    <section id="features" className="py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2
            //@ts-expect-error
            ref={titleRef}
            className={`text-4xl md:text-5xl font-serif font-normal mb-6 text-foreground ${titleInView ? 'fade-in-up' : 'opacity-0'}`}
          >
            {t('features.title')}
          </h2>
          <div
            //@ts-expect-error
            ref={separatorRef}
            className={`w-24 h-1 bg-gradient-primary mx-auto mb-8 ${separatorInView ? 'scale-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          ></div>
          <p
            //@ts-expect-error
            ref={descriptionRef}
            className={`text-xl text-muted-foreground ${descriptionInView ? 'fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            Descubra as funcionalidades que tornam o Clarice único no mundo da leitura social.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const [cardRef, cardInView] = useInView({ threshold: 0.1 });
            return (
              <div
                key={index}
                //@ts-expect-error
                ref={cardRef}
                className={`group relative ${(index % 2 !== 0) ? 'md:mt-8' : ''} ${cardInView ? 'scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-75 transition duration-500"></div>
                <Card className="h-full bg-card border border-border/20 rounded-2xl shadow-sm relative transform transition-transform duration-300 group-hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <feature.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <h3 className="text-2xl font-serif font-normal mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base mb-6">
                      {feature.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border/10">
                      <div className="flex items-center text-primary/70 text-sm font-medium">
                        <span>Em breve</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
