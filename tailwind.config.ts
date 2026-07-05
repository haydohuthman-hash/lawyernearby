import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0a",
        panel: "#141414",
        cream: "#f4f3f1",
      },
    },
  },
  plugins: [],
};
export default config;
