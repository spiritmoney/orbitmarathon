import { cn } from "@/lib/utils";

interface CardAccentProps {
  /** `card` — content cards; `frame` — image / media frames */
  variant?: "card" | "frame";
  className?: string;
}

export function CardAccent({ variant = "card", className }: CardAccentProps) {
  if (variant === "frame") {
    return (
      <>
        <span
          className={cn(
            "pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-volt via-volt/70 to-transparent",
            className,
          )}
          aria-hidden="true"
        />
        <span
          className={cn(
            "pointer-events-none absolute top-3 right-3 h-9 w-9 border-t-2 border-r-2 border-volt/90",
            className,
          )}
          aria-hidden="true"
        />
      </>
    );
  }

  return (
    <>
      <span
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-forest via-volt to-volt/60",
          className,
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "pointer-events-none absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-volt/90 via-volt/50 to-transparent",
          "origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100",
          className,
        )}
        aria-hidden="true"
      />
    </>
  );
}
