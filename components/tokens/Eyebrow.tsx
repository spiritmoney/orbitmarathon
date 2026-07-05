import { cn } from "@/lib/utils";

interface EyebrowProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "sun";
}

export function Eyebrow({
  variant = "default",
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-body text-[11px] font-bold uppercase tracking-eyebrow",
        variant === "sun" ? "text-sun" : "text-sapphire",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
