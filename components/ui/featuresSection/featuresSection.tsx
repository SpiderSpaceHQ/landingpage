import { FeatureCard } from "./featureCard";
import {
  Gamepad2,
  Smartphone,
  Zap,
  FolderOpen,
  RefreshCw,
  Users
} from "lucide-react";

export function FeaturesSection() {
  return (
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
  );
}
