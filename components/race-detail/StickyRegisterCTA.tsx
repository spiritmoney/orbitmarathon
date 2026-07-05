"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { transition } from "@/lib/motion";
import type { Race } from "@/lib/data/races";

export function StickyRegisterCTA({ race }: { race: Race }) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-px" aria-hidden="true" />
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-40 bg-deep-blue text-white py-4 px-4 shadow-lg"
        role="region"
        aria-label="Register call to action"
        initial={false}
        animate={{ y: visible ? 0 : "100%" }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 380, damping: 32 }
        }
      >
        <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-display text-xl uppercase">
            Register for {race.name}
          </p>
          <Button asChild variant="primary">
            <Link href={`/register?wave=${race.id}`}>Register now</Link>
          </Button>
        </div>
      </motion.div>
    </>
  );
}
