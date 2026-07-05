export interface PrizeRow {
  position: string;
  prize: string;
  note?: string;
}

export const prizePool = {
  total: 50_000_000,
  currency: "NGN",
  fullMarathon: [
    { position: "1st Place", prize: "₦20,000,000" },
    { position: "2nd Place", prize: "₦10,000,000" },
    { position: "3rd Place", prize: "₦5,000,000" },
    {
      position: "4th — 10th",
      prize: "₦500,000 each",
      note: "₦3,500,000 total",
    },
  ] as PrizeRow[],
  categories: [
    {
      position: "Category winners (Half / 10k / 5k)",
      prize: "₦11,500,000 pool",
    },
  ] as PrizeRow[],
  participation: "Certificate of participation for all finishers",
};

export const prizeHighlights = [
  { value: "₦50M", label: "Total prize pool" },
  { value: "₦20M", label: "1st place (marathon)" },
  { value: "₦11.5M", label: "Category pool" },
];
