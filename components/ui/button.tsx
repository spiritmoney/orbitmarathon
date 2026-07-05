import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-body font-bold text-[13px] uppercase tracking-wide px-6 py-3.5 rounded-sm border-2 border-transparent transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-sun text-ink hover:bg-sun/90",
        outline: "bg-transparent text-white border-white hover:bg-white/10",
        dark: "bg-deep-blue text-white hover:bg-sapphire",
        sapphire: "bg-sapphire text-white hover:bg-deep-blue",
        ghost: "bg-transparent text-deep-blue border-none underline underline-offset-4 px-0",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
