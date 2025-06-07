import { SpiderSpaceLogo } from "../logo/spiderSpaceLogo";

export function Footer() {
  return (
    <footer className="relative z-10 bg-black/80 backdrop-blur-sm py-12 border-t border-purple-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <SpiderSpaceLogo
              width={40}
              height={40}
              classStyle="w-8 h-8"
            />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Spider Space
            </span>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Spider Space. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
