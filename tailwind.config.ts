import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#0A1B9B",
        sapphire: "#283CCD",
        forest: "#38AD02",
        volt: "#A4E134",
        sun: "#FFDF24",
        ink: "#0D0E1A",
        paper: "#FBFAF4",
        "paper-dim": "#F1EFE4",
        "tint-blue": "#DCE1FF",
        "tint-green": "#EEFADD",
        "tint-yellow": "#FFFBE8",
        line: "rgb(13 14 26 / 0.12)",
      },
      fontFamily: {
        display: ["var(--font-teko)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
      lineHeight: {
        heading: "0.8",
        subheading: "1",
        body: "1.2",
        stat: "0.85",
      },
      letterSpacing: {
        heading: "-0.02em",
        subheading: "-0.01em",
        eyebrow: "0.16em",
      },
    },
  },
  plugins: [],
};

export default config;
