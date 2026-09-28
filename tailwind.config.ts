import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f3f7f4",
          100: "#e4efe8",
          200: "#cbdfd3",
          300: "#a5c6b4",
          400: "#79a890",
          500: "#578c71",
          600: "#427059",
          700: "#365948",
          800: "#2d483b",
          900: "#273c32",
          950: "#13211b",
        },
        slate: {
          750: "#243247",
          850: "#151f32",
          950: "#090e17",
        },
        botanical: {
          gold: "#c59f60",
          leaf: "#3b7a57",
          clay: "#b4654a",
          linen: "#fbfaf7",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(45, 72, 59, 0.08)',
        'soft-lg': '0 10px 30px -4px rgba(45, 72, 59, 0.12)',
        'dark-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
