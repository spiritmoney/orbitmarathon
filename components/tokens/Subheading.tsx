import { cn } from "@/lib/utils";

interface SubheadingProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "h3" | "h4";
}

export function Subheading({
  as: Tag = "p",
  className,
  children,
  ...props
}: SubheadingProps) {
  return (
    <Tag
      className={cn(
        "font-body text-lg md:text-xl font-extrabold leading-subheading tracking-subheading",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
