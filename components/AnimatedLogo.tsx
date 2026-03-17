import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <div className="inline-flex items-center gap-3">
      <Image
        src="/e-nova3-animated-small-v2.svg"
        alt="E-Nova logo"
        width={50}
        height={50}
        priority
        className="h-auto w-[50px] md:w-[50px]"
      />
      <div className="flex h-[50px] items-center">
        <Image
          src="/e-nova3dev-animated-small.svg"
          alt="E-Nova dev wordmark"
          width={120}
          height={120}
          className="h-auto w-[120px] translate-y-[6px] md:w-[120px]"
        />
      </div>
    </div>
  );
}
