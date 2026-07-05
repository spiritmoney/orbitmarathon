import Link from "next/link";
import { cn } from "@/lib/utils";

export function BoltMark({ className }: { className?: string }) {
  return (
    <div
      className={cn("w-[22px] h-[30px] bg-volt shrink-0", className)}
      style={{
        clipPath:
          "polygon(58% 0, 0 58%, 38% 58%, 22% 100%, 100% 38%, 60% 38%)",
      }}
      aria-hidden="true"
    />
  );
}

export function Wordmark({ className, light = true }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-display text-2xl md:text-[28px] font-semibold tracking-wide",
        light ? "text-white" : "text-ink",
        className,
      )}
    >
      ORBIT <span className="text-volt">MARATHON</span>
    </Link>
  );
}
