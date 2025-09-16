import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/pages/HeroSection";
import AboutSection from "@/components/pages/AboutSection";
import FeaturesSection from "@/components/pages/FeaturesSection";
import BookClubsSection from "@/components/pages/BookClubsSection";
import JoinTeamSection from "@/components/pages/JoinTeamSection";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-14 md:pt-16">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <BookClubsSection />
        <JoinTeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;