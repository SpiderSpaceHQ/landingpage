import { HeroSection } from "@/components/ui/heroSection";
import { HeaderSection } from "@/components/ui/headerSection";
import { FeaturesSection } from "@/components/ui/featuresSection";
import { TechStack } from "@/components/ui/techStack";
import { FooterPage } from "@/components/ui/footerPage/footerPage";

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

function WebBackground() {
  return (
    <div className="relative w-full h-full">
      {/* Web lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-600/20"
            style={{
              height: "1px",
              width: "100%",
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 180}deg)`,
              left: 0
            }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i + 8}
            className="absolute bg-purple-600/20"
            style={{
              height: "100%",
              width: "1px",
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 180}deg)`,
              top: 0
            }}
          />
        ))}
      </div>

      {/* Spider web nodes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i + 16}
          className="absolute rounded-full bg-purple-600/30"
          style={{
            height: `${Math.random() * 6 + 2}px`,
            width: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
}
