import Link from "next/link";

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  name: string;
}

export function SocialLink({ href, icon, name }: SocialLink) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-2 p-4 bg-purple-950/20 backdrop-blur-sm border border-purple-900/30 rounded-xl hover:bg-purple-900/30 transition-colors w-[6rem]"
      target="_blank"
      rel="noopener noreferrer">
      {icon}
      <span className="text-sm">{name}</span>
    </Link>
  );
}
