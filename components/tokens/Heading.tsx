import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: "xl" | "lg" | "md";
}

const sizeClasses = {
  xl: "text-5xl md:text-7xl lg:text-8xl",
  lg: "text-4xl md:text-5xl",
  md: "text-3xl md:text-4xl",
};

export function Heading({
  as: Tag = "h2",
  size = "lg",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-semibold uppercase leading-heading tracking-heading text-inherit",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
