"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { transition } from "@/lib/motion";

const steps = [
  { num: 1, label: "Pick wave", href: "/register" },
  { num: 2, label: "Details", href: "/register/details" },
  { num: 3, label: "Kit", href: "/register/kit" },
  { num: 4, label: "Payment", href: "/register/payment" },
  { num: 5, label: "Confirm", href: "/register/confirmation" },
];

export function StepProgress({ currentStep }: { currentStep: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <nav aria-label="Registration progress" className="mb-10">
      <ol className="flex flex-wrap gap-2 md:gap-0 md:justify-between">
        {steps.map((step) => {
          const isComplete = step.num < currentStep;
          const isCurrent = step.num === currentStep;
          return (
            <li key={step.num} className="flex items-center gap-2 md:flex-1">
              <Link
                href={step.href}
                className={cn(
                  "flex items-center gap-2 text-xs font-bold uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun transition-colors duration-300",
                  isCurrent && "text-deep-blue",
                  isComplete && "text-forest",
                  !isCurrent && !isComplete && "text-ink/40",
                )}
                aria-current={isCurrent ? "step" : undefined}
              >
                <motion.span
                  layout={!reducedMotion}
                  className={cn(
                    "font-display text-2xl leading-none inline-block",
                    isCurrent && "text-forest",
                  )}
                  animate={
                    reducedMotion
                      ? undefined
                      : isCurrent
                        ? { scale: [1, 1.12, 1] }
                        : { scale: 1 }
                  }
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {String(step.num).padStart(2, "0")}
                </motion.span>
                <span className="hidden sm:inline">{step.label}</span>
              </Link>
              {step.num < steps.length && (
                <span className="hidden md:inline text-sapphire font-black mx-2" aria-hidden="true">
                  →
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <motion.div
        className="mt-3 h-0.5 bg-paper-dim rounded-full overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          className="h-full bg-volt origin-left"
          initial={false}
          animate={{ scaleX: currentStep / steps.length }}
          transition={reducedMotion ? { duration: 0 } : transition.base}
          style={{ width: "100%" }}
        />
      </motion.div>
    </nav>
  );
}
