"use client";

import { useMemo, useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { LeaderboardEntry } from "@/lib/data/leaderboard";
import { cn } from "@/lib/utils";

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
  live?: boolean;
}

export function FilterChips({
  waves,
  selected,
  onChange,
}: {
  waves: string[];
  selected: string;
  onChange: (wave: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter by wave">
      <button
        type="button"
        onClick={() => onChange("all")}
        className={cn(
          "px-3 py-1.5 text-xs font-bold uppercase tracking-wide border rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun",
          selected === "all"
            ? "bg-deep-blue text-white border-deep-blue"
            : "bg-white text-ink border-line hover:border-sapphire",
        )}
      >
        All waves
      </button>
      {waves.map((wave) => (
        <button
          key={wave}
          type="button"
          onClick={() => onChange(wave)}
          className={cn(
            "px-3 py-1.5 text-xs font-bold uppercase tracking-wide border rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sun",
            selected === wave
              ? "bg-deep-blue text-white border-deep-blue"
              : "bg-white text-ink border-line hover:border-sapphire",
          )}
        >
          {wave}
        </button>
      ))}
    </div>
  );
}

export function LeaderboardTable({ entries, live = false }: LeaderboardTableProps) {
  const [filter, setFilter] = useState("all");
  const [highlighted, setHighlighted] = useState<Set<string>>(new Set());
  const [data, setData] = useState(entries);

  const waves = useMemo(
    () => [...new Set(entries.map((e) => e.wave))],
    [entries],
  );

  const filtered = useMemo(
    () => (filter === "all" ? data : data.filter((e) => e.wave === filter)),
    [data, filter],
  );

  useEffect(() => {
    if (!live) return;
    const interval = setInterval(() => {
      setData((prev) => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * next.length);
        const old = next[idx];
        if (!old) return prev;
        const updated = {
          ...old,
          time: old.time.replace(/(\d)$/, (_, d) => String((Number(d) + 1) % 10)),
        };
        next[idx] = updated;
        setHighlighted((h) => new Set(h).add(updated.id));
        setTimeout(() => {
          setHighlighted((h) => {
            const n = new Set(h);
            n.delete(updated.id);
            return n;
          });
        }, 2000);
        return next;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, [live]);

  return (
    <>
      <FilterChips waves={waves} selected={filter} onChange={setFilter} />
      <div className="bg-white border border-line">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Athlete</TableHead>
              <TableHead>Wave</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((entry, i) => (
              <TableRow
                key={entry.id}
                className={cn(
                  i === 0 && "bg-paper-dim",
                  highlighted.has(entry.id) && "bg-tint-green transition-colors duration-1000",
                )}
              >
                <TableCell className="font-display text-2xl text-sapphire w-14">
                  {String(entry.rank).padStart(2, "0")}
                </TableCell>
                <TableCell className="font-semibold">{entry.name}</TableCell>
                <TableCell className="text-sm text-ink/60">{entry.wave}</TableCell>
                <TableCell className="text-sm">{entry.country}</TableCell>
                <TableCell className="font-mono font-bold">{entry.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
