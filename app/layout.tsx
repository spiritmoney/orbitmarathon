import type { Metadata } from "next";
import { Teko, Montserrat } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import "./globals.css";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Orbit Marathon — Lagos City Cycling Marathon",
    template: "%s | Orbit Marathon",
  },
  description:
    "Orbit Marathon by Orbit Ride & Gateway — free registration, mandatory official jersey, ₦50M prize pool. Coastal 180, Marathon 42, and Duo Orbit in Lagos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${teko.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-paper text-ink">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
