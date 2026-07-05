export interface TravelHotel {
  name: string;
  perk: string;
  area: string;
}

export interface TravelStep {
  id: string;
  label: string;
  title: string;
  detail: string;
}

export const travelHighlights = {
  airport: "Murtala Muhammed International (LOS)",
  airportTime: "45 min to start line",
  shuttle: "Partner shuttles from airport and hotels from 04:00 on race day",
  guide: "Victoria Island & Lekki — bike shops, recovery spots, and restaurants",
  discount: "Use your registration code for partner rates",
};

export const travelSteps: TravelStep[] = [
  {
    id: "arrive",
    label: "01",
    title: "Fly in",
    detail: "Murtala Muhammed International (LOS) · 45 min to the start line",
  },
  {
    id: "stay",
    label: "02",
    title: "Book your stay",
    detail: "Partner hotels across Victoria Island and Lekki with athlete discounts",
  },
  {
    id: "race",
    label: "03",
    title: "Race day",
    detail: "Shuttles from partner hotels from 04:00 · Stadium opens 04:30",
  },
];

export const travelHotels: TravelHotel[] = [
  { name: "Eko Hotels", perk: "15% off · Shuttle included", area: "Victoria Island" },
  { name: "Radisson Blu Lagos", perk: "15% off · Shuttle included", area: "Victoria Island" },
  { name: "Federal Palace Hotel", perk: "12% off · Bike storage", area: "Victoria Island" },
  { name: "Lekki Pearl Suites", perk: "15% off · Near start village", area: "Lekki" },
];

export const storyHighlights = {
  history:
    "Founded in Lagos in 2023, Orbit Marathon grew from 2,000 athletes to 12,000 in three years — riders and runners from six continents on one coastal circuit.",
  sustainability:
    "Cup-free aid stations, local waste recycling partners, and offset travel emissions. Race kit uses recycled materials where feasible.",
};
