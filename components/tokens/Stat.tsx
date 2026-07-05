import { cn } from "@/lib/utils";

interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  variant?: "light" | "dark";
  underline?: boolean;
}

export function Stat({
  value,
  label,
  variant = "dark",
  underline = false,
  className,
  ...props
}: StatProps) {
  return (
    <div
      className={cn(
        "border-l-2 border-volt pl-3.5",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "font-display text-4xl md:text-5xl font-medium leading-stat tabular-nums",
          variant === "dark" ? "text-white" : "text-sapphire",
          underline && "group-hover:text-volt transition-colors",
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "mt-1 text-[10px] font-bold uppercase tracking-widest",
          variant === "dark" ? "text-tint-blue/80" : "text-ink/50",
        )}
      >
        {label}
      </div>
    </div>
  );
}
