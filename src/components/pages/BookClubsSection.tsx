import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Users, Vote, BarChart3, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";
import bookClubsImage from "@/assets/book-clubs.jpg";

const BookClubsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="book-clubs" className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-primary/15 via-primary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 fade-in-up">
              {t('bookClubs.title')}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 scale-in delay-200"></div>
            
            <p className="text-2xl text-primary font-medium mb-4 fade-in-up delay-300">
              {t('bookClubs.subtitle')}
            </p>
            
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto fade-in-up delay-400">
              {t('bookClubs.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-primary-light/20 backdrop-blur-sm p-6 rounded-xl shadow-soft border border-primary/10 scale-in delay-500">
              <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4">
                <Vote className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg mb-2">{t('bookClubs.feature1')}</h3>
              <p className="text-muted-foreground text-sm">Todos os membros votam no próximo livro</p>
            </div>
            
            <div className="bg-primary-light/20 backdrop-blur-sm p-6 rounded-xl shadow-soft border border-primary/10 scale-in delay-600">
              <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg mb-2">{t('bookClubs.feature2')}</h3>
              <p className="text-muted-foreground text-sm">Acompanhe o progresso de todo o grupo</p>
            </div>
            
            <div className="bg-primary-light/20 backdrop-blur-sm p-6 rounded-xl shadow-soft border border-primary/10 scale-in delay-700">
              <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg mb-2">{t('bookClubs.feature3')}</h3>
              <p className="text-muted-foreground text-sm">Chats temporários para cada capítulo</p>
            </div>
            
            <div className="bg-primary-light/20 backdrop-blur-sm p-6 rounded-xl shadow-soft border border-primary/10 scale-in delay-800">
              <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg mb-2">{t('bookClubs.feature4')}</h3>
              <p className="text-muted-foreground text-sm">Discussões organizadas por temas</p>
            </div>
          </div>

          <div className="flex justify-center mb-16">
            <div className="relative max-w-md">
              <div className="modern-image-container">
                <img 
                  src="/undraw_group-chat_4xw0.svg" 
                  alt="Chat em grupo e discussões"
                  className="modern-image rotate-in"
                />
              </div>
              <div className="floating-element w-14 h-14 -top-6 -left-6"></div>
              <div className="floating-element w-8 h-8 -bottom-8 -right-8"></div>
              <div className="floating-element w-6 h-6 top-1/3 -right-12"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left delay-900">
              <Card className="shadow-book bg-gradient-card border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <img 
                      src={bookClubsImage} 
                      alt="Dom Casmurro" 
                      className="w-15 h-20 rounded-lg object-cover shadow-sm"
                    />
                    <div>
                      <h3 className="text-2xl font-serif font-normal mb-1">Clube: Dom Casmurro</h3>
                      <p className="text-muted-foreground">12/15 membros • Ativo há 3 semanas</p>
                      <div className="flex items-center mt-2">
                        <div className="flex -space-x-2">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className="w-6 h-6 bg-primary/20 rounded-full border-2 border-background"></div>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-muted-foreground">+7 outros</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-foreground font-medium">Progresso coletivo</span>
                        <span className="text-primary font-semibold text-lg">68%</span>
                      </div>
                      <Progress value={68} className="h-3" />
                      <p className="text-sm text-muted-foreground mt-2">Capítulo 12 de 18 • Meta: terminar em 2 semanas</p>
                    </div>
                    
                    <div className="bg-secondary/30 rounded-xl p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <MessageCircle className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground">Capítulo 12 - Discussão ativa</span>
                        <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">3 online</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex-shrink-0"></div>
                          <div>
                            <p className="text-sm"><strong className="text-foreground">Ana Oliveira:</strong> <span className="text-muted-foreground">"Que reviravolta! Não consegui parar de ler..."</span></p>
                            <span className="text-xs text-muted-foreground">2 min atrás</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex-shrink-0"></div>
                          <div>
                            <p className="text-sm"><strong className="text-foreground">Carlos:</strong> <span className="text-muted-foreground">"Machado de Assis é realmente um gênio 📚"</span></p>
                            <span className="text-xs text-muted-foreground">5 min atrás</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="slide-in-right delay-1000">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-serif font-normal mb-4">Como funciona?</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Participe de clubes com até 15 membros, onde a experiência de leitura se torna coletiva e engajante.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">Escolha Democrática</h4>
                      <p className="text-muted-foreground">Todos os membros votam no próximo livro a ser lido pelo grupo.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">Leitura Sincronizada</h4>
                      <p className="text-muted-foreground">Acompanhe o progresso coletivo e mantenha-se motivado junto ao grupo.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">Discussões Ricas</h4>
                      <p className="text-muted-foreground">Chats temporários por capítulo garantem discussões focadas e sem spoilers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookClubsSection;