import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 fade-in-up">
            {t('about.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed fade-in-up delay-200">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;