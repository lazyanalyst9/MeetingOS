import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f7ff",
          500: "#5c7cfa",
          700: "#3b5bdb"
        },
        slate: {
          950: "#0f172a"
        }
      }
    }
  },
  plugins: []
};

export default config;
