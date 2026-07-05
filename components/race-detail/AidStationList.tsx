import { Subheading, Body } from "@/components/tokens";
import type { Race } from "@/lib/data/races";

export function AidStationList({ race }: { race: Race }) {
  return (
    <div>
      <Subheading as="h3" className="mb-4">
        Aid stations
      </Subheading>
      <ul className="space-y-3">
        {race.aidStations.map((station) => (
          <li
            key={station.km}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-line"
          >
            <span className="font-display text-2xl text-sapphire w-16 shrink-0">
              {station.km}km
            </span>
            <div>
              <p className="font-body font-bold text-sm">{station.name}</p>
              <Body muted className="text-xs">
                {station.services.join(" · ")}
              </Body>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ElevationChart({ race }: { race: Race }) {
  return (
    <div className="bg-paper-dim border border-line p-6 h-48 flex items-end gap-1">
      {Array.from({ length: 20 }).map((_, i) => {
        const height = 30 + Math.sin(i * 0.5) * 25 + ((i * 7) % 20);
        return (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-deep-blue to-sapphire rounded-t-sm"
            style={{ height: `${height}%` }}
            aria-hidden="true"
          />
        );
      })}
      <span className="sr-only">Elevation profile for {race.name}</span>
    </div>
  );
}
