import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Users, Vote, BarChart3, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { useInView } from "@/components/hooks/use-in-view";
import bookClubsImage from "@/assets/book-clubs.jpg";

const BookClubsSection = () => {
  const { t } = useLanguage();

  const [titleRef, titleInView] = useInView({ threshold: 0.1 });
  const [separatorRef, separatorInView] = useInView({ threshold: 0.1 });
  const [descriptionRef, descriptionInView] = useInView({ threshold: 0.1 });
  const [howItWorksRef, howItWorksInView] = useInView({ threshold: 0.1 });
  const [mockupRef, mockupInView] = useInView({ threshold: 0.1 });

  return (
    <section id="book-clubs" className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 
              ref={titleRef}
              className={`text-4xl md:text-5xl font-serif font-normal mb-6 text-foreground ${titleInView ? 'fade-in-up' : 'opacity-0'}`}
            >
              {t('bookClubs.title')}
            </h2>
            <div 
              ref={separatorRef}
              className={`w-24 h-1 bg-gradient-primary mx-auto mb-8 ${separatorInView ? 'scale-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            ></div>
            <p 
              ref={descriptionRef}
              className={`text-xl text-muted-foreground ${descriptionInView ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              {t('bookClubs.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div 
              ref={howItWorksRef}
              className={`space-y-8 ${howItWorksInView ? 'slide-in-left' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <h3 className="text-3xl font-serif font-normal mb-4 text-foreground">Como funciona?</h3>
              
              <Card className="bg-card border-none shadow-none">
                <CardContent className="flex items-start space-x-6 p-6">
                  <span className="text-4xl font-serif text-primary/50">01</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-foreground">Escolha Democrática</h4>
                    <p className="text-muted-foreground">Todos os membros votam no próximo livro a ser lido pelo grupo.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-none">
                <CardContent className="flex items-start space-x-6 p-6">
                  <span className="text-4xl font-serif text-primary/50">02</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-foreground">Leitura Sincronizada</h4>
                    <p className="text-muted-foreground">Acompanhe o progresso coletivo e mantenha-se motivado junto ao grupo.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-none">
                <CardContent className="flex items-start space-x-6 p-6">
                  <span className="text-4xl font-serif text-primary/50">03</span>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-foreground">Discussões Ricas</h4>
                    <p className="text-muted-foreground">Chats temporários por capítulo garantem discussões focadas e sem spoilers.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div 
              ref={mockupRef}
              className={`${mockupInView ? 'slide-in-right' : 'opacity-0'}`}
              style={{ animationDelay: '0.5s' }}
            >
              <Card className="shadow-xl border border-border/20 rounded-2xl bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <img 
                      src={bookClubsImage} 
                      alt="Dom Casmurro" 
                      className="w-20 h-28 rounded-lg object-cover shadow-md"
                      loading="lazy"
                      decoding="async"
                      width={133}
                      height={178}
                    />
                    <div>
                      <h3 className="text-2xl font-serif font-normal mb-1 text-foreground">Clube: Dom Casmurro</h3>
                      <p className="text-muted-foreground">12/15 membros • Ativo há 3 semanas</p>
                      <div className="flex items-center mt-2">
                        <div className="flex -space-x-2">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className="w-6 h-6 bg-muted rounded-full border-2 border-card"></div>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-muted-foreground">+7 outros</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">Progresso coletivo</span>
                        <span className="text-primary font-semibold text-lg">68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                      <p className="text-sm text-muted-foreground mt-2">Capítulo 12 de 18 • Meta: terminar em 2 semanas</p>
                    </div>
                    
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <MessageCircle className="h-5 w-5 text-primary" />
                        <span className="font-medium text-foreground">Discussão ativa</span>
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-semibold">3 online</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <p><strong className="text-foreground">Ana:</strong> <span className="text-muted-foreground">Que reviravolta! Não consegui parar...</span></p>
                        <p><strong className="text-foreground">Carlos:</strong> <span className="text-muted-foreground">Machado de Assis é um gênio 📚</span></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookClubsSection;