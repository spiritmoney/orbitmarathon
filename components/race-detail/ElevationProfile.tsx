import type { Race } from "@/lib/data/races";
import { getCourseByWave } from "@/lib/data/course";

interface ElevationProfileProps {
  race: Race;
  className?: string;
}

export function ElevationProfile({ race, className }: ElevationProfileProps) {
  const course = getCourseByWave(race.id);
  if (!course) return null;

  const points = course.elevation;
  const width = 640;
  const height = 200;
  const pad = { top: 20, right: 16, bottom: 32, left: 40 };
  const chartW = width - pad.left - pad.right;
  const chartH = height - pad.top - pad.bottom;

  const maxKm = course.maxKm;
  const elevations = points.map((p) => p.elevation);
  const minElev = Math.min(...elevations);
  const maxElev = Math.max(...elevations);
  const elevRange = maxElev - minElev || 1;

  const toX = (km: number) => pad.left + (km / maxKm) * chartW;
  const toY = (elev: number) =>
    pad.top + chartH - ((elev - minElev) / elevRange) * chartH;

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${toX(p.km)} ${toY(p.elevation)}`)
    .join(" ");

  const areaPath = `${linePath} L ${toX(points[points.length - 1].km)} ${pad.top + chartH} L ${toX(points[0].km)} ${pad.top + chartH} Z`;

  const yTicks = [minElev, minElev + elevRange / 2, maxElev].map(Math.round);

  return (
    <div className={className}>
      <div className="flex justify-between items-baseline mb-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-ink/50">
          Elevation profile
        </p>
        <p className="text-xs text-ink/40">
          {course.elevationGain.toLocaleString()}m total gain
        </p>
      </div>
      <div className="bg-paper-dim border border-line p-4">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          role="img"
          aria-label={`Elevation profile for ${race.name}, ${course.elevationGain} meters gain`}
        >
          {yTicks.map((tick) => {
            const y = toY(tick);
            return (
              <g key={tick}>
                <line
                  x1={pad.left}
                  y1={y}
                  x2={width - pad.right}
                  y2={y}
                  stroke="#0A1B9B"
                  strokeOpacity="0.08"
                />
                <text
                  x={pad.left - 6}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="10"
                  fill="#0D0E1A"
                  opacity="0.4"
                >
                  {tick}m
                </text>
              </g>
            );
          })}

          <path d={areaPath} fill="#283CCD" fillOpacity="0.12" />
          <path
            d={linePath}
            fill="none"
            stroke="#0A1B9B"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {race.aidStations.map((station) => {
            const x = toX(Math.min(station.km, maxKm));
            return (
              <g key={station.km}>
                <line
                  x1={x}
                  y1={pad.top}
                  x2={x}
                  y2={pad.top + chartH}
                  stroke="#A4E134"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  opacity="0.7"
                />
                <circle cx={x} cy={pad.top + chartH + 8} r="3" fill="#283CCD" />
                <text
                  x={x}
                  y={height - 6}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#0D0E1A"
                  opacity="0.5"
                >
                  {station.km}km
                </text>
              </g>
            );
          })}

          <text
            x={width / 2}
            y={height - 2}
            textAnchor="middle"
            fontSize="10"
            fill="#0D0E1A"
            opacity="0.4"
          >
            Distance (km)
          </text>
        </svg>
      </div>
    </div>
  );
}

/** @deprecated use ElevationProfile */
export function ElevationChart({ race, className }: ElevationProfileProps) {
  return <ElevationProfile race={race} className={className} />;
}
