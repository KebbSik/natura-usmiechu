import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
    },

    fontSize: {
      xs: ["12px", "1.5"],
      sm: ["14px", "1.6"],
      base: ["16px", "1.75"],
      lg: ["18px", "1.75"],
      xl: ["20px", "1.6"],
      "2xl": ["24px", "1.4"],
      "3xl": ["30px", "1.25"],
      "4xl": ["36px", "1.2"],
      "5xl": ["48px", "1.1"],
    },
    spacing: {
      section: "6rem", // odstępy między sekcjami
    },

    borderRadius: {
      sm: "0.375rem",
      md: "0.75rem",
      lg: "1.25rem",
      xl: "1.75rem",
      pill: "9999px",
    },
    boxShadow: {
      soft: "0 10px 30px rgba(0,0,0,0.06)",
      card: "0 4px 16px rgba(0,0,0,0.08)",
    },
    transitionTimingFunction: {
      smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    transitionDuration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
    },
  },
};

export default config;
