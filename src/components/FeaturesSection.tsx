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
  MessageSquare 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 fade-in-up">
            {t('features.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;