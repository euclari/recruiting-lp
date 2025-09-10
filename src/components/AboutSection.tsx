import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen } from "lucide-react";
import readingCommunityImage from "@/assets/reading-community.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-gradient-purple relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${readingCommunityImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-purple"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 fade-in-up text-white">
              {t('about.title')}
            </h2>
            
            <div className="w-24 h-1 bg-white/50 mx-auto mb-8 scale-in delay-200"></div>
            
            <p className="text-xl text-white/90 leading-relaxed mb-12 fade-in-up delay-300">
              {t('about.description')}
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Features List */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 fade-in-up delay-400">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-serif text-white mb-2">Visual Moderno</h3>
                <p className="text-white/80 text-sm">Interface intuitiva e contemporânea</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-serif text-white mb-2">Social Inovador</h3>
                <p className="text-white/80 text-sm">Conecte-se de forma significativa</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-serif text-white mb-2">100% Brasileiro</h3>
                <p className="text-white/80 text-sm">Identidade e cultura nacional</p>
              </div>
            </div>
            
            {/* Project Card */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center scale-in delay-600">
              <div className="w-20 h-20 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-serif font-normal mb-4 text-white">Projeto Acadêmico</h3>
              <p className="text-white/90 leading-relaxed text-lg max-w-2xl mx-auto">
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