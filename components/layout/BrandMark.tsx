import Image from "next/image";
import Link from "next/link";
import { brandAlt, brandLogos } from "@/lib/data/brand";
import { cn } from "@/lib/utils";

interface BoltMarkProps {
  className?: string;
}

export function BoltMark({ className }: BoltMarkProps) {
  return (
    <Image
      src={brandLogos.bolt}
      alt=""
      width={22}
      height={30}
      className={cn("w-[22px] h-[30px] shrink-0 object-contain", className)}
      aria-hidden="true"
    />
  );
}

interface WordmarkProps {
  className?: string;
  /** Use white lockup on dark headers; dark lockup on light backgrounds */
  light?: boolean;
}

export function Wordmark({ className, light = true }: WordmarkProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0", className)}
      aria-label={brandAlt.full}
    >
      <Image
        src={light ? brandLogos.white : brandLogos.black}
        alt={brandAlt.full}
        width={168}
        height={80}
        className="h-8 md:h-9 w-auto object-contain object-left"
        priority
      />
    </Link>
  );
}

interface BrandLogoProps {
  variant?: keyof typeof brandLogos;
  className?: string;
  priority?: boolean;
  alt?: string;
}

export function BrandLogo({
  variant = "full",
  className,
  priority = false,
  alt = brandAlt.full,
}: BrandLogoProps) {
  return (
    <Image
      src={brandLogos[variant]}
      alt={alt}
      width={320}
      height={152}
      className={cn("h-auto w-full max-w-[280px] object-contain", className)}
      priority={priority}
    />
  );
}
