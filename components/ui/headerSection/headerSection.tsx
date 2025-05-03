import { SpiderSpaceLogo } from "../logo/spiderSpaceLogo";
import Link from "next/link";
import { Button } from "../button";
import { Download } from "lucide-react";

export function HeaderSection() {
  return (
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
  );
}
