import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        earth: {
          50: '#faf8f3',
          100: '#f5f1e8',
          200: '#e8dfc8',
          300: '#d4c5a0',
          400: '#b8a376',
          500: '#9d8456',
          600: '#7d6a47',
          700: '#5f5239',
          800: '#4a4130',
          900: '#3d3729',
        }
      },
    },
  },
  plugins: [],
};

export default config;
