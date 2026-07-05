import type { Transition, Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const transition = {
  fast: { duration: 0.25, ease: easeOut } satisfies Transition,
  base: { duration: 0.45, ease: easeOut } satisfies Transition,
  slow: { duration: 0.65, ease: easeOut } satisfies Transition,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transition.base },
};

export const registerSteps = [
  "/register",
  "/register/details",
  "/register/kit",
  "/register/payment",
  "/register/confirmation",
] as const;

export function getRegisterDirection(from: string, to: string): 1 | -1 {
  const a = registerSteps.indexOf(from as (typeof registerSteps)[number]);
  const b = registerSteps.indexOf(to as (typeof registerSteps)[number]);
  if (a === -1 || b === -1) return 1;
  return b >= a ? 1 : -1;
}

export const registerSlide = (direction: 1 | -1): Variants => ({
  initial: { opacity: 0, x: direction * 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: direction * -40 },
});
