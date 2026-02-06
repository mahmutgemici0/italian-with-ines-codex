import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        primary: "hsl(var(--primary))",
        accent: "hsl(var(--accent))",
        border: "hsl(var(--border))",
      },
      fontFamily: {
        sans: ["'Manrope'", "system-ui", "sans-serif"],
        serif: ["'Cormorant Garamond'", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
