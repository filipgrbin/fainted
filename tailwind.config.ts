import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--bg))",
        foreground: "hsl(var(--foreground))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["'Courier New'", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
