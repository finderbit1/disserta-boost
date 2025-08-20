import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import WritingInterface from "@/components/WritingInterface";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WritingInterface />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
