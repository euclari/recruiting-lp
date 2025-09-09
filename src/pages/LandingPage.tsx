import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import BookClubsSection from "@/components/BookClubsSection";
import DevelopersSection from "@/components/DevelopersSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <BookClubsSection />
        <DevelopersSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Clarice - Projeto acadêmico em construção com ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;