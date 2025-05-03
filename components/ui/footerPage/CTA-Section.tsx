import { Button } from "../button";
import { Download } from "lucide-react";

export function CTA_Section() {
  return (
    <section className="relative z-10 py-24 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join the Web?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Download Spider Space today and experience gaming without limits.
        </p>
        <Button
          size="lg"
          className="bg-purple-600 hover:bg-purple-700 text-white">
          <Download className="mr-2 h-5 w-5" /> Download Now
        </Button>
      </div>
    </section>
  );
}
