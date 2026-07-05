export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "race-day",
    title: "Race day",
    items: [
      {
        question: "What is the age limit?",
        answer: "Strictly 18–50 years. Please present a valid government-issued ID during kit collection for age verification.",
      },
      {
        question: "What is included in the race kit?",
        answer: "Your race kit includes a personalized race bib, timing chip, and a mandatory official Orbit Marathon jersey (₦10,000). Registration is free; the jersey purchase is required to secure your spot.",
      },
      {
        question: "What medical support is provided?",
        answer: "Medical teams will be stationed every 2km along the course and at the finish line.",
      },
      {
        question: "What time does the race start?",
        answer: "Coastal 180 and Duo Orbit start at 06:00 WAT. Marathon 42 starts at 06:30 WAT. Athletes should arrive at least 90 minutes before their wave.",
      },
      {
        question: "Where is the start line?",
        answer: "All waves start from Teslim Balogun Stadium, Surulere, Lagos. Shuttle services run from partner hotels from 04:00.",
      },
      {
        question: "What happens if I miss the cutoff?",
        answer: "Athletes who miss intermediate cutoffs will be picked up by sweep vehicles and receive a DNF status. Partial completion certificates are available on request.",
      },
    ],
  },
  {
    id: "registration",
    title: "Registration",
    items: [
      {
        question: "How much does registration cost?",
        answer: "Registration is free. A mandatory official Orbit Marathon jersey (₦10,000) is required at checkout. Pay via card, bank transfer, or Orbit Gateway for Fast Track bib collection.",
      },
      {
        question: "Can I change my wave after registering?",
        answer: "Wave changes are permitted until September 15, subject to availability. Contact support with your registration ID.",
      },
      {
        question: "Is registration refundable?",
        answer: "Full refunds are available until August 1. After that, 50% credit toward next year's event is offered until September 1.",
      },
      {
        question: "How do I register a Duo Orbit team?",
        answer: "Select Duo Orbit during registration and provide both athlete details. One payment covers the full team entry.",
      },
    ],
  },
  {
    id: "travel",
    title: "Travel",
    items: [
      {
        question: "Do I need a visa to visit Nigeria?",
        answer: "Most international athletes require a visa. We provide invitation letters upon registration confirmation. Check with your local Nigerian embassy.",
      },
      {
        question: "Are there partner hotels?",
        answer: "Yes. Twelve partner hotels offer discounted rates. Book through the Travel page using your confirmation code.",
      },
      {
        question: "Is bike transport available?",
        answer: "Airport bike boxes and stadium bike check are included in the transport package add-on during registration.",
      },
    ],
  },
];
