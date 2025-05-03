import Image from "next/image";

interface SpiderSpaceLogo {
  height: number;
  width: number;
  classStyle: string;
}

export function SpiderSpaceLogo({
  height,
  width,
  classStyle
}: SpiderSpaceLogo) {
  return (
    <Image
      src="https://i.ibb.co/hR9zXdLb/Spider-Space-HQ-removebg-preview.png"
      alt="Spider Space Logo"
      width={width}
      height={height}
      className={classStyle}
    />
  );
}
