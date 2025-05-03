import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { SocialLink } from "@/components/ui/socialLink";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/ui/heroSection";
import { HeaderSection } from "@/components/ui/headerSection";
import { FeaturesSection } from "@/components/ui/featuresSection";
import { TechStack } from "@/components/ui/techStack";

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

      {/* CTA Section */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Web?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Download Spider Space today and experience gaming without
            limits.
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white">
            <Download className="mr-2 h-5 w-5" /> Download Now
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Connect
            </span>{" "}
            With Us
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            <SocialLink
              href="https://twitter.com/SpiderSpaceHQ"
              icon={<FaXTwitter />}
              name="Twitter"
            />
            <SocialLink
              href="https://instagram.com/SpiderSpaceHQ"
              icon={<FaInstagram />}
              name="Instagram"
            />
            <SocialLink
              href="https://facebook.com/SpiderSpaceHQ"
              icon={<CiFacebook />}
              name="Facebook"
            />
            <SocialLink
              href="https://threads.net/SpiderSpaceHQ"
              icon={<FaThreads />}
              name="Threads"
            />
            <SocialLink
              href="https://wa.me/919831284491"
              icon={<FaWhatsapp />}
              name="WhatsApp"
            />
            <SocialLink
              href="https://t.me/+919831284491"
              icon={<RiTelegram2Line />}
              name="Telegram"
            />
            <SocialLink
              href="mailto:hitus@spider.space"
              icon={<MdOutlineEmail />}
              name="Email"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
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
