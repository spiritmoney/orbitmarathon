import Link from "next/link";
import { eventInfo } from "@/lib/data/event";

export function UtilityBar() {
  return (
    <div className="bg-ink text-[#9a9aa6] py-2 px-4 md:px-8">
      <div className="max-w-[1180px] mx-auto flex justify-between text-[10px] font-bold uppercase tracking-widest">
        <span>EN · {eventInfo.parentBrand}</span>
        <div className="flex gap-4">
          <Link
            href={eventInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun"
          >
            WhatsApp
          </Link>
          <Link href="/contact" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun">
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}
