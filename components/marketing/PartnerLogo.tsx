import Image from "next/image";
import { cn } from "@/lib/utils";

interface PartnerLogoProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function PartnerLogo({ src, alt, className, priority }: PartnerLogoProps) {
  return (
    <div
      className={cn(
        "relative h-14 md:h-16 w-[140px] md:w-[180px] shrink-0",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-center"
        sizes="180px"
        priority={priority}
      />
    </div>
  );
}
