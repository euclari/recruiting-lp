import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Palette, 
  Users, 
  Lightbulb, 
  Mail, 
  Send,
  Heart,
  Code2,
  Target,
  Linkedin
} from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { sendContactEmail, ContactFormData } from "@/components/services/emailService";
import { useState } from "react";

const JoinTeamSection = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      role: formData.get('role') as string,
      message: formData.get('message') as string
    };
    
    try {
      const result = await sendContactEmail(data, language);
      setSubmitMessage({
        type: result.success ? 'success' : 'error',
        text: result.message
      });
      
      if (result.success) {
        e.currentTarget.reset();
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: t('joinTeam.form.error')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="developers" className="py-32 bg-gradient-to-b from-primary/20 via-primary/25 to-primary/30 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-primary/15 rounded-full blur-lg"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/8 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-primary/12 rounded-full blur-lg"></div>
      
      <div className="absolute top-1/2 left-0 w-16 h-16 bg-primary/8 rotate-45 blur-sm"></div>
      <div className="absolute top-1/3 right-0 w-20 h-20 bg-primary/6 rotate-12 blur-md"></div>
      <div className="absolute bottom-1/3 left-1/2 w-12 h-12 bg-primary/10 rotate-45 blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8 fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-glow border border-primary/20">
                <Users className="h-10 w-10 text-primary" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-normal mb-6 fade-in-up delay-200">
              {t('developers.title')}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 scale-in delay-200"></div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto fade-in-up delay-400">
              {t('developers.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-serif font-normal mb-6">{t('joinTeam.lookingFor')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/25 to-primary/15 rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft border border-primary/20">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">{t('joinTeam.uiux.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('joinTeam.uiux.desc')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/25 to-primary/15 rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft border border-primary/20">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">{t('joinTeam.product.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('joinTeam.product.desc')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/25 to-primary/15 rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft border border-primary/20">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">{t('joinTeam.developer.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('joinTeam.developer.desc')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/25 to-primary/15 rounded-lg flex items-center justify-center flex-shrink-0 shadow-soft border border-primary/20">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif mb-2">{t('joinTeam.other.title')}</h4>
                      <p className="text-muted-foreground">
                        {t('joinTeam.other.desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-in-right delay-600">
              <Card className="shadow-book bg-gradient-to-br from-primary/5 via-primary/8 to-primary/10 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center">
                      <Heart className="h-6 w-6 text-red-400 mr-2" />
                      <span className="text-lg font-medium text-foreground">
                        {t('joinTeam.interested')}
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">{t('joinTeam.form.name')}</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            type="text" 
                            required 
                            className="mt-1"
                            placeholder={t('joinTeam.form.namePlaceholder')}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">{t('joinTeam.form.email')}</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            required 
                            className="mt-1"
                            placeholder={t('joinTeam.form.emailPlaceholder')}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="role">{t('joinTeam.form.role')}</Label>
                        <Input 
                          id="role" 
                          name="role" 
                          type="text" 
                          required 
                          className="mt-1"
                          placeholder={t('joinTeam.form.rolePlaceholder')}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">{t('joinTeam.form.message')}</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          required 
                          className="mt-1 min-h-[120px]"
                          placeholder={t('joinTeam.form.messagePlaceholder')}
                        />
                      </div>
                      
                      {submitMessage && (
                        <div className={`p-4 rounded-lg ${
                          submitMessage.type === 'success' 
                            ? 'bg-green-100 text-green-800 border border-green-200' 
                            : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                          {submitMessage.text}
                        </div>
                      )}
                      
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            {t('joinTeam.form.sending')}
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                            {t('joinTeam.form.submit')}
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="text-center mt-8">
                      <p className="text-muted-foreground mb-4">{t('developers.contact')}</p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="bg-primary text-white border-primary shadow-lg font-medium transition-colors hover:bg-primary/90 w-full sm:w-auto"
                          asChild
                        >
                          <a href="mailto:jobs@euclari.com.br">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>jobs@euclari.com.br</span>
                          </a>
                        </Button>
                        
                        <Button 
                          variant="outline"
                          size="lg"
                          className="bg-white text-primary border-white shadow-lg font-medium w-full sm:w-auto"
                          asChild
                        >
                          <a href="https://www.linkedin.com/company/euclari" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2" />
                            {t('developers.linkedin')}
                          </a>
                        </Button>
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

export default JoinTeamSection;
