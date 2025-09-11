import { useLanguage } from "@/components/contexts/LanguageContext";
import { BookOpen } from "lucide-react";


const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-gradient-purple relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-purple"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 fade-in-up text-black">
              {t('about.title')}
            </h2>
            
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 scale-in delay-200"></div>
            
            <p className="text-xl text-black/90 leading-relaxed mb-12 fade-in-up delay-300">
              {t('about.description')}
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="relative max-w-md">
              <div className="modern-image-container">
                <img 
                  src="/undraw_creative-team_wfty.svg" 
                  alt="Equipe criativa trabalhando junta"
                  className="modern-image bounce-in"
                />
              </div>
              <div className="floating-element w-16 h-16 -top-8 -left-8"></div>
              <div className="floating-element w-10 h-10 -bottom-6 -right-6"></div>
              <div className="floating-element w-8 h-8 top-1/4 -right-10"></div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6 mb-12 fade-in-up delay-400">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light/30 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-serif text-black mb-2">Visual Moderno</h3>
                <p className="text-black/80 text-sm">Interface intuitiva e contemporânea</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light/30 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-serif text-black mb-2">Social Inovador</h3>
                <p className="text-black/80 text-sm">Conecte-se de forma significativa</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-light/30 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-serif text-black mb-2">100% Brasileiro</h3>
                <p className="text-black/80 text-sm">Identidade e cultura nacional</p>
              </div>
            </div>
            
            <div className="bg-primary-light/15 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center scale-in delay-600">
              <div className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-3xl font-serif font-normal mb-4 text-black">Projeto Acadêmico</h3>
              <p className="text-black/90 leading-relaxed text-lg max-w-2xl mx-auto">
                Desenvolvido com paixão por estudantes brasileiros para revolucionar a forma como nos conectamos através da literatura. Uma iniciativa que combina tecnologia e amor pelos livros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;