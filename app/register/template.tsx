"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { getRegisterDirection, registerSlide, transition } from "@/lib/motion";

export default function RegisterTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const prevPath = useRef(pathname);
  const direction = getRegisterDirection(prevPath.current, pathname);

  useEffect(() => {
    prevPath.current = pathname;
  }, [pathname]);

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={pathname}
        custom={direction}
        variants={registerSlide(direction)}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition.base}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
