import { BoltMark, Wordmark } from "@/components/layout/BrandMark";

export const metadata = { title: "Athlete dashboard" };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-deep-blue text-white flex flex-col">
      <header className="border-b border-white/10 px-4 md:px-8 py-5">
        <div className="max-w-[1180px] mx-auto flex items-center gap-2.5">
          <BoltMark />
          <Wordmark />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
