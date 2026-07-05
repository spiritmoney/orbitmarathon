import Link from "next/link";
import { BoltMark, Wordmark } from "./BrandMark";

const footerColumns = [
  {
    title: "The Race",
    links: [
      { href: "/the-race/coastal-180", label: "Coastal 180" },
      { href: "/the-race/marathon-42", label: "Marathon 42" },
      { href: "/the-race/duo-orbit", label: "Duo Orbit" },
      { href: "/the-race/course-map", label: "Course map" },
    ],
  },
  {
    title: "Compete",
    links: [
      { href: "/register", label: "Register" },
      { href: "/results", label: "Results" },
      { href: "/results/live", label: "Leaderboard" },
      { href: "/athletes/dashboard", label: "Dashboard" },
    ],
  },
  {
    title: "Plan",
    links: [
      { href: "/travel", label: "Travel & stay" },
      { href: "/faq", label: "FAQ" },
      { href: "/shop", label: "Shop" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/story", label: "Story" },
      { href: "/partners", label: "Partners" },
      { href: "/news", label: "News" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/contact", label: "Terms" },
      { href: "/contact", label: "Privacy" },
      { href: "/faq", label: "Accessibility" },
      { href: "/contact", label: "Media kit" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-white border-t border-line">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-sapphire mb-2.5">
                {col.title}
              </h4>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-ink/70 hover:text-sapphire focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-ink text-[#8a8a96] py-8">
        <div className="max-w-[1180px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <BoltMark className="w-4 h-5" />
            <span>
              <strong className="text-white font-bold">Orbit Marathon</strong> — Lagos City Cycling Marathon
            </span>
          </div>
          <p>05–12 October 2026 · Deep Blue dominant · Volt cuts sparingly</p>
        </div>
      </div>
    </footer>
  );
}
