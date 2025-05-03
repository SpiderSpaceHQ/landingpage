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
      src="./Spiderspace-01.png"
      alt="Spider Space Logo"
      width={width}
      height={height}
      className={classStyle}
    />
  );
}
