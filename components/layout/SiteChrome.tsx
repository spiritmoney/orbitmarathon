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
      <UtilityBar />
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
