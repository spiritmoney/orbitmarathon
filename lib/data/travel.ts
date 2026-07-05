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
    "The Orbit Marathon is the ultimate expression of the Orbit lifestyle. Just as Orbit Ride & Gateway redefines urban mobility through smart, eco-friendly transit, this marathon challenges you to push your personal boundaries. Whether you are a seasoned elite athlete or a weekend warrior, this is your platform to showcase endurance, community spirit, and the Nigerian drive for excellence.",
  sustainability:
    "Aligned with Orbit Ride & Gateway, we champion health and local innovation — cup-free aid stations, local waste recycling partners, and offset travel emissions. Race kit uses recycled materials where feasible.",
};
