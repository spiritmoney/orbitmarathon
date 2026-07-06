import { Heading } from "@/components/tokens";
import { BibCard, ScheduleList, DocumentList } from "@/components/dashboard/BibCard";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Dashboard",
  path: "/athletes/dashboard",
  noIndex: true,
});

export default function DashboardPage() {
  return (
    <>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 pt-8">
        <Heading as="h1" size="lg" className="text-white">
          Your dashboard
        </Heading>
      </div>
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 py-12 grid md:grid-cols-[1fr_2fr] gap-10">
        <BibCard bibNumber="2044" athleteName="Demo Athlete" />
        <div className="space-y-10">
          <ScheduleList />
          <DocumentList />
        </div>
      </div>
    </>
  );
}
