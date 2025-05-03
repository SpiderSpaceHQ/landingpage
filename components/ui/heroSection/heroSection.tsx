import { SpiderSpaceLogo } from "../logo/spiderSpaceLogo";
import { Download } from "lucide-react";
import { Button } from "../button";

export function HeroSection() {
  return (
    <section className="relative z-10 container mx-auto px-4 pt-20 pb-32 flex flex-col items-center text-center">
      <div className="animate-float">
        <SpiderSpaceLogo
          classStyle="mb-8"
          width={200}
          height={200}
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Weaving Worlds
        </span>{" "}
        of Gaming
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
        The revolutionary all-in-one gaming emulator that connects every
        gamer to every game — across platforms, across generations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white">
          <Download className="mr-2 h-5 w-5" /> Download Now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-purple-600 text-purple-400 hover:bg-purple-950">
          <p className="mr-2 h-5 w-5"> View on GitHub </p>
        </Button>
      </div>
    </section>
  );
}
