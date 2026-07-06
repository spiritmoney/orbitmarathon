import { Heading } from "@/components/tokens";
import { eventInfo } from "@/lib/data/event";

interface BibCardProps {
  bibNumber: string;
  athleteName: string;
}

export function BibCard({ bibNumber, athleteName }: BibCardProps) {
  return (
    <div className="bg-white border-2 border-ink p-6 text-center max-w-xs mx-auto relative">
      <p className="font-display text-7xl leading-stat text-deep-blue">{bibNumber}</p>
      <p className="text-[11px] font-extrabold uppercase tracking-widest text-sapphire mt-2">
        Orbit Marathon
      </p>
      <p className="font-body font-bold text-sm mt-3">{athleteName}</p>
    </div>
  );
}

export function ScheduleList() {
  const items = [
    { date: "04 Sep", event: "Packet pickup opens", location: eventInfo.startLocation },
    { date: "05 Sep", event: "Coastal 180 start", location: "06:00 WAT · Oniru Stadium" },
    { date: "05 Sep", event: "Marathon 42 start", location: "06:30 WAT · Oniru Stadium" },
    { date: "07 Sep", event: "Award ceremony", location: eventInfo.finishLocation },
  ];

  return (
    <div>
      <Heading as="h2" size="md" className="mb-4 text-white">
        Your schedule
      </Heading>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.event} className="flex gap-4 py-3 border-b border-white/10">
            <span className="font-display text-xl text-volt w-16 shrink-0">{item.date}</span>
            <div>
              <p className="font-body font-bold text-sm text-white">{item.event}</p>
              <p className="text-xs text-tint-blue/70">{item.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DocumentList() {
  const docs = [
    { name: "Race waiver (signed)", status: "Complete" },
    { name: "Medical certificate", status: "Pending" },
    { name: "Photo ID upload", status: "Complete" },
  ];

  return (
    <div>
      <Heading as="h2" size="md" className="mb-4 text-white">
        Documents
      </Heading>
      <ul className="space-y-2">
        {docs.map((doc) => (
          <li
            key={doc.name}
            className="flex justify-between items-center py-2 px-3 bg-white/5 text-sm"
          >
            <span className="text-white">{doc.name}</span>
            <span className={doc.status === "Complete" ? "text-volt" : "text-sun"}>
              {doc.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
