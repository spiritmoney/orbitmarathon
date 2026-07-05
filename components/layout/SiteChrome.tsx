"use client";

import { usePathname } from "next/navigation";
import { UtilityBar } from "./UtilityBar";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/athletes/dashboard");

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-ink/70 backdrop-blur-md border-b border-white/10">
        <UtilityBar />
        <NavBar />
      </header>
      <main className="flex-1 pt-[6.75rem]">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
