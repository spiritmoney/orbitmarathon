import Link from "next/link";
import { socialLinks } from "@/lib/data/event";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  linkClassName?: string;
  showLabels?: boolean;
}

export function SocialLinks({
  className,
  linkClassName,
  showLabels = true,
}: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap gap-x-4 gap-y-2", className)}>
      {socialLinks.map((social) => (
        <li key={social.platform}>
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-xs hover:text-volt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun",
              linkClassName,
            )}
          >
            {showLabels ? (
              <>
                <span className="font-bold">{social.platform}:</span>{" "}
                <span>{social.label}</span>
              </>
            ) : (
              social.platform
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
