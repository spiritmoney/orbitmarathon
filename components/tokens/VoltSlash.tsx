"use client";

import { cn } from "@/lib/utils";
import { CardAccent } from "@/components/tokens/CardAccent";

type VoltSlashVariant = "divider" | "corner" | "mask" | "underline";

interface VoltSlashProps {
  variant?: VoltSlashVariant;
  className?: string;
  /** @deprecated Corner accent no longer animates on hover */
  animated?: boolean;
}

export function VoltSlash({
  variant = "divider",
  className,
}: VoltSlashProps) {

  if (variant === "divider") {
    return (
      <div
        className={cn("relative h-16 overflow-hidden bg-deep-blue", className)}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "repeating-linear-gradient(74deg, var(--color-volt) 0 6px, transparent 6px 46px)",
          }}
        />
        <div
          className="absolute -left-[4%] -right-[4%] inset-y-0 bg-deep-blue"
          style={{ clipPath: "polygon(0 0, 38% 0, 30% 100%, 0 100%)" }}
        />
      </div>
    );
  }

  if (variant === "corner") {
    return <CardAccent variant="frame" className={className} />;
  }

  if (variant === "mask") {
    return (
      <div
        className={cn(
          "absolute top-0 right-[14%] bottom-0 w-[520px] max-w-[55vw] opacity-95",
          "bg-gradient-to-b from-forest to-volt",
          className,
        )}
        style={{ clipPath: "polygon(40% 0, 100% 0, 60% 100%, 0% 100%)" }}
        aria-hidden="true"
      />
    );
  }

  if (variant === "underline") {
    return (
      <span
        className={cn(
          "block h-0.5 w-full bg-volt origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300",
          className,
        )}
        aria-hidden="true"
      />
    );
  }

  return null;
}
