import { Subheading, Body } from "@/components/tokens";
import type { Race } from "@/lib/data/races";

export { ElevationProfile, ElevationChart } from "./ElevationProfile";

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
