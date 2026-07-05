"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, transition } from "@/lib/motion";

type AnimateVariant = "fadeUp" | "fadeIn" | "slideFromRight" | "slideFromLeft" | "scaleIn";

const variants: Record<AnimateVariant, Variants> = {
  fadeUp,
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  slideFromRight: { hidden: { opacity: 0, x: 32 }, visible: { opacity: 1, x: 0 } },
  slideFromLeft: { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
};

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimateVariant;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
  once?: boolean;
  amount?: number;
}

export function AnimateIn({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
  as = "div",
  once = true,
  amount = 0.2,
}: AnimateInProps) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ ...transition.base, delay }}
    >
      {children}
    </Component>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  /** mount = animate immediately (hero); scroll = when in viewport */
  trigger?: "scroll" | "mount";
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
  once = true,
  trigger = "scroll",
}: StaggerProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      {...(trigger === "mount"
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once, amount: 0.15 } })}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: transition.base },
      }}
    >
      {children}
    </motion.div>
  );
}
