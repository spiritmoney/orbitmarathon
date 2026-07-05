import { cn } from "@/lib/utils";

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  muted?: boolean;
}

export function Body({
  as: Tag = "p",
  muted = false,
  className,
  children,
  ...props
}: BodyProps) {
  return (
    <Tag
      className={cn(
        "font-body text-base leading-body",
        muted ? "text-ink/70" : "text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
