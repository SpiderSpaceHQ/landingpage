import { TechCard } from "./techCard";

export function TechStack() {
  return (
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
  );
}
