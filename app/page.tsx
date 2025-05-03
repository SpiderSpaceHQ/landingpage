import { HeroSection } from "@/components/ui/heroSection/heroSection";
import { HeaderSection } from "@/components/ui/headerSection/headerSection";
import { FeaturesSection } from "@/components/ui/featuresSection/featuresSection";
import { TechStack } from "@/components/ui/techStackArea/techStack";
import { FooterPage } from "@/components/ui/footerPage/footerPage";
import { WebBackground } from "@/components/ui/webBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Web Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <WebBackground />
      </div>

      {/* Header */}
      <HeaderSection />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Footer Page */}
      <FooterPage />
    </div>
  );
}
