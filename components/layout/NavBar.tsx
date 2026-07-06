"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./BrandMark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { transition } from "@/lib/motion";

const navLinks = [
  { href: "/the-race", label: "The Race" },
  { href: "/awards", label: "Awards" },
  { href: "/partners", label: "Partners" },
  // { href: "/results", label: "Results" },
  { href: "/athletes/training-hub", label: "Training" },
  { href: "/faq", label: "FAQ" },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const isDashboard = pathname.startsWith("/athletes/dashboard");
  if (isDashboard) return null;

  return (
    <div className="text-white">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between">
        <Wordmark />

        <nav className="hidden md:flex items-center gap-7" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] font-semibold uppercase tracking-wide hover:text-volt transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun",
                pathname.startsWith(link.href) && "text-volt",
              )}
            >
              {link.label}
            </Link>
          ))}
          {/* <Link
            href="/sign-in"
            className="text-[13px] font-semibold uppercase tracking-wide hover:text-volt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
          >
            Sign in
          </Link> */}
          <Button asChild variant="primary" size="sm">
            <Link href="/register">Register</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={transition.fast}
            className="md:hidden border-t border-white/10 overflow-hidden bg-ink/90 backdrop-blur-md"
            aria-label="Mobile"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...transition.fast, delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-sm font-semibold uppercase tracking-wide"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/sign-in"
                className="py-2 text-sm font-semibold uppercase"
                onClick={() => setOpen(false)}
              >
                Sign in
              </Link>
              <Button asChild variant="primary" className="w-full">
                <Link href="/register" onClick={() => setOpen(false)}>Register</Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
