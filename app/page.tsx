import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Download,
  Github,
  Gamepad2,
  Smartphone,
  Zap,
  FolderOpen,
  RefreshCw,
  Users
} from "lucide-react";
import { SpiderSpaceLogo } from "@/components/ui/spiderSpaceLogo";
import { SocialLink } from "@/components/ui/socialLink";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { RiTelegram2Line } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/ui/heroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Web Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        <WebBackground />
      </div>

      {/* Header */}
      <header className="relative z-10 container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <SpiderSpaceLogo
            classStyle="w-12 h-12"
            height={50}
            width={50}
          />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Spider Space
          </span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="#features"
            className="hover:text-purple-400 transition-colors">
            Features
          </Link>
          <Link
            href="#tech"
            className="hover:text-purple-400 transition-colors">
            Technology
          </Link>
          <Link
            href="#contact"
            className="hover:text-purple-400 transition-colors">
            Contact
          </Link>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </nav>
        <Button
          variant="ghost"
          className="md:hidden">
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section
        id="features"
        className="relative z-10 bg-black/60 backdrop-blur-sm py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Why Choose
            </span>{" "}
            Spider Space?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Gamepad2 className="h-10 w-10 text-purple-500" />}
              title="All-in-One Emulator Bundle"
              description="Play games from all major consoles and arcade systems — all in one place."
            />
            <FeatureCard
              icon={<Smartphone className="h-10 w-10 text-purple-500" />}
              title="Desktop + Mobile"
              description="Experience true cross-platform freedom. Play on your PC or your smartphone."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-purple-500" />}
              title="Cutting-Edge Performance"
              description="Built for low latency, high FPS, and smooth emulation even on mid-range devices."
            />
            <FeatureCard
              icon={<FolderOpen className="h-10 w-10 text-purple-500" />}
              title="Smart Game Management"
              description="Organize, browse, and launch your games easily with an intuitive UI."
            />
            <FeatureCard
              icon={<RefreshCw className="h-10 w-10 text-purple-500" />}
              title="Regular Updates"
              description="New emulators, compatibility fixes, and exciting features constantly being spun into the web."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-purple-500" />}
              title="Community-Driven"
              description="Open-source spirit with room for contributors, plugin developers, and enthusiasts!"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech"
        className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Powered
            </span>{" "}
            by Modern Tech
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TechCard
              title="Frontend"
              items={[
                "Tauri (Rust+Webview)",
                "Electron.js + React.js",
                "Next.js"
              ]}
            />
            <TechCard
              title="Mobile"
              items={[
                "React Native",
                "Cross-platform compatibility",
                "Responsive design"
              ]}
            />
            <TechCard
              title="Backend Core"
              items={[
                "Powered by Rust",
                "NestJS",
                "Maximum performance",
                "Memory safety"
              ]}
            />
            <TechCard
              title="Emulators"
              items={[
                "Curated open-source engines",
                "Multi-platform support",
                "Optimized performance"
              ]}
            />
          </div>
        </div>
      </section>

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

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-purple-950/20 backdrop-blur-sm border border-purple-900/30 rounded-xl p-6 hover:bg-purple-900/30 transition-colors group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function TechCard({ title, items }) {
  return (
    <div className="bg-purple-950/20 backdrop-blur-sm border border-purple-900/30 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4 text-purple-400">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2">
            <span className="text-purple-500">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// function SocialLink({ href, icon, name }) {
//   return (
//     <Link
//       href={href}
//       className="flex flex-col items-center gap-2 p-4 bg-purple-950/20 backdrop-blur-sm border border-purple-900/30 rounded-xl hover:bg-purple-900/30 transition-colors"
//       target="_blank"
//       rel="noopener noreferrer">
//       <Image
//         src={icon || "/placeholder.svg"}
//         alt={name}
//         width={24}
//         height={24}
//         className="w-6 h-6"
//       />
//       <span className="text-sm">{name}</span>
//     </Link>
//   );
// }

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
