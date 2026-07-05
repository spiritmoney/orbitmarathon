import Link from "next/link";

export function UtilityBar() {
  return (
    <div className="bg-ink text-[#9a9aa6] py-2 px-4 md:px-8">
      <div className="max-w-[1180px] mx-auto flex justify-between text-[10px] font-bold uppercase tracking-widest">
        <span>EN · Lagos City Cycling Marathon</span>
        <div className="flex gap-4">
          <Link href="/contact" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun">
            Support
          </Link>
          <Link href="/news" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun">
            Media
          </Link>
        </div>
      </div>
    </div>
  );
}
