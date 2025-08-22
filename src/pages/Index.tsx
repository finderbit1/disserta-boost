import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import WritingInterface from "@/components/WritingInterface";
import FeaturesSection from "@/components/FeaturesSection";
import ImageUploadDemo from "@/components/ImageUploadDemo";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WritingInterface />
        <FeaturesSection />
        <ImageUploadDemo />
        <ComparisonSection />
        <PricingSection />
        <TestimonialsSection />
        <LeadCaptureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
