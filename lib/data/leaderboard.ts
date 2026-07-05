export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  wave: string;
  time: string;
  country: string;
  status?: "finished" | "on-course" | "dnf";
}

export const leaderboardData: LeaderboardEntry[] = [
  { id: "1", rank: 1, name: "A. Kovač", wave: "Coastal 180", time: "05:12:44", country: "HR", status: "finished" },
  { id: "2", rank: 2, name: "M. Adeyemi", wave: "Coastal 180", time: "05:14:09", country: "NG", status: "finished" },
  { id: "3", rank: 3, name: "R. Torres", wave: "Coastal 180", time: "05:15:52", country: "ES", status: "finished" },
  { id: "4", rank: 4, name: "S. Chen", wave: "Marathon 42", time: "02:38:11", country: "CN", status: "finished" },
  { id: "5", rank: 5, name: "K. Okafor", wave: "Marathon 42", time: "02:41:03", country: "NG", status: "finished" },
  { id: "6", rank: 6, name: "Team Lagos", wave: "Duo Orbit", time: "07:22:18", country: "NG", status: "finished" },
  { id: "7", rank: 7, name: "J. Müller", wave: "Coastal 180", time: "05:28:44", country: "DE", status: "on-course" },
  { id: "8", rank: 8, name: "F. Okonkwo", wave: "Marathon 42", time: "02:55:30", country: "NG", status: "on-course" },
];

export const archiveYears = [2025, 2024, 2023];

export function getArchiveResults(year: number): LeaderboardEntry[] {
  return leaderboardData.map((entry, i) => ({
    ...entry,
    id: `${year}-${entry.id}`,
    time: entry.time.replace(/^\d/, String((i + 1) % 9 + 1)),
  }));
}
