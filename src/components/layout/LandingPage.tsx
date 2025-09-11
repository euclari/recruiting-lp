import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/pages/HeroSection";
import AboutSection from "@/components/pages/AboutSection";
import FeaturesSection from "@/components/pages/FeaturesSection";
import BookClubsSection from "@/components/pages/BookClubsSection";
import DevelopersSection from "@/components/pages/DevelopersSection";
import JoinTeamSection from "@/components/pages/JoinTeamSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-20 md:pt-24">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <BookClubsSection />
        <DevelopersSection />
        <JoinTeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;