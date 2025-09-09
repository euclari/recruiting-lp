import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Users, Vote, BarChart3, MessageCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BookClubsSection = () => {
  const { t } = useLanguage();

  const clubFeatures = [
    {
      icon: Vote,
      title: t('bookClubs.feature1'),
    },
    {
      icon: BarChart3,
      title: t('bookClubs.feature2'),
    },
    {
      icon: MessageCircle,
      title: t('bookClubs.feature3'),
    },
    {
      icon: Users,
      title: t('bookClubs.feature4'),
    },
  ];

  return (
    <section id="book-clubs" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 fade-in-up">
              {t('bookClubs.title')}
            </h2>
            <p className="text-xl text-primary font-medium mb-6 fade-in-up delay-200">
              {t('bookClubs.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up delay-300">
              {t('bookClubs.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <div className="space-y-6 fade-in-up delay-400">
              {clubFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-medium text-foreground">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Club Preview Card */}
            <Card className="shadow-book bg-gradient-card border-border/50 fade-in-up delay-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Clube dos Clássicos 📚</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    <span>12/15 membros</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Dom Casmurro</span>
                    <span className="text-sm text-muted-foreground">73%</span>
                  </div>
                  <Progress value={73} className="h-2" />
                </div>

                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>📖 Capítulo atual:</span>
                    <span className="font-medium">12 de 16</span>
                  </div>
                  <div className="flex justify-between">
                    <span>💬 Discussão ativa:</span>
                    <span className="font-medium">Cap. 11-12</span>
                  </div>
                </div>

                <Button 
                  size="sm" 
                  variant="hero"
                  className="w-full group"
                >
                  Participar da discussão
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookClubsSection;