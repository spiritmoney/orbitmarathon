"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { races } from "@/lib/data/races";
import {
  courses,
  defaultCourseWave,
  osmEmbedUrl,
  osmExternalUrl,
  type MapLandmark,
} from "@/lib/data/course";
import type { WaveId } from "@/lib/registration-store";
import { Body } from "@/components/tokens";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const markerColors = {
  start: "#FFDF24",
  finish: "#38AD02",
  aid: "#283CCD",
  handoff: "#A4E134",
} as const;

export function CourseMapViewer() {
  const [activeWave, setActiveWave] = useState<WaveId>(defaultCourseWave);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const course = courses.find((c) => c.waveId === activeWave)!;
  const race = races.find((r) => r.id === activeWave)!;
  const selected: MapLandmark | undefined = course.landmarks.find((l) => l.id === selectedId);

  return (
    <div className="space-y-6">
      <div
        className="flex flex-wrap gap-2 p-1 rounded-full bg-paper-dim w-fit"
        role="tablist"
        aria-label="Course by wave"
      >
        {races.map((r) => (
          <button
            key={r.id}
            type="button"
            role="tab"
            aria-selected={activeWave === r.id}
            onClick={() => {
              setActiveWave(r.id);
              setSelectedId(null);
            }}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun",
              activeWave === r.id
                ? "bg-deep-blue text-white shadow-sm"
                : "text-ink/50 hover:text-ink",
            )}
          >
            {r.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_280px] gap-6">
        <div className="bg-white rounded-sm overflow-hidden border border-line shadow-sm">
          <div className="relative aspect-[16/10] w-full bg-paper">
            <svg
              viewBox="0 0 800 450"
              className="absolute inset-0 h-full w-full"
              role="img"
              aria-label={`Course map for ${race.name}`}
            >
              <rect width="800" height="450" fill="#FBFAF4" />
              <rect width="800" height="450" fill={`url(#mapGrid-${activeWave})`} />

              <defs>
                <pattern
                  id={`mapGrid-${activeWave}`}
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#0D0E1A"
                    strokeOpacity="0.04"
                    strokeWidth="1"
                  />
                </pattern>
                <filter id={`markerShadow-${activeWave}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.15" />
                </filter>
              </defs>

              <text
                x="32"
                y="40"
                fill="#0A1B9B"
                fontSize="13"
                fontWeight="700"
                fontFamily="sans-serif"
                letterSpacing="0.04em"
              >
                LAGOS COASTAL CIRCUIT
              </text>
              <text x="32" y="58" fill="#283CCD" fontSize="11" fontFamily="sans-serif" opacity="0.7">
                {race.name} · {race.distance}
              </text>

              <path
                d={course.routePath}
                fill="none"
                stroke="#0A1B9B"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.12"
              />
              <path
                d={course.routePath}
                fill="none"
                stroke="#0A1B9B"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={course.routePath}
                fill="none"
                stroke="#A4E134"
                strokeWidth="2"
                strokeDasharray="8 6"
                strokeLinecap="round"
              />

              {course.landmarks.map((landmark) => {
                const cx = (landmark.x / 100) * 800;
                const cy = (landmark.y / 100) * 450;
                const isSelected = selectedId === landmark.id;
                const color = markerColors[landmark.type];
                const r = landmark.type === "start" || landmark.type === "finish" ? 11 : 8;

                return (
                  <g
                    key={landmark.id}
                    role="button"
                    tabIndex={0}
                    className="cursor-pointer outline-none"
                    filter={`url(#markerShadow-${activeWave})`}
                    onClick={() => setSelectedId(landmark.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedId(landmark.id);
                      }
                    }}
                    aria-label={`${landmark.name}, ${landmark.km} kilometres`}
                  >
                    {isSelected && (
                      <circle cx={cx} cy={cy} r="20" fill={color} opacity="0.18" />
                    )}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill={color}
                      stroke="#FBFAF4"
                      strokeWidth="2.5"
                    />
                    {(isSelected || landmark.type === "start" || landmark.type === "finish") && (
                      <text
                        x={cx}
                        y={cy - 20}
                        textAnchor="middle"
                        fill="#0D0E1A"
                        fontSize="10"
                        fontWeight="700"
                        fontFamily="sans-serif"
                        pointerEvents="none"
                      >
                        {landmark.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-paper-dim border-t border-line">
            <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-wide text-ink/50">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sun" /> Start
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sapphire" /> Aid
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-volt" /> Hand-off
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-forest" /> Finish
              </span>
            </div>
            <p className="text-xs text-ink/40">Click a marker for details</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white border border-line p-5 min-h-[140px]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-sapphire mb-2">
              {selected ? "Checkpoint" : "Select a marker"}
            </p>
            {selected ? (
              <>
                <p className="font-display text-2xl text-deep-blue">{selected.km}km</p>
                <p className="font-body font-bold text-sm mt-1">{selected.name}</p>
                <Body muted className="text-xs mt-2 capitalize">
                  {selected.type === "handoff" ? "Hand-off zone" : selected.type}
                </Body>
              </>
            ) : (
              <Body muted className="text-sm">
                Tap any point on the map to view distance and checkpoint name.
              </Body>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Button asChild variant="primary" size="sm">
              <a href={course.gpxUrl} download>
                <Download className="h-4 w-4 mr-2" aria-hidden="true" />
                Download GPX
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <a href={osmExternalUrl()} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                Open in OpenStreetMap
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-sapphire">
          Satellite view · Lagos course area
        </p>
        <div className="rounded-sm overflow-hidden border border-line aspect-[21/9] min-h-[220px] bg-paper-dim">
          <iframe
            title={`OpenStreetMap — ${race.name} course area`}
            src={osmEmbedUrl(course.osmBbox)}
            className="w-full h-full min-h-[220px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
