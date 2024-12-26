import type { Config } from "tailwindcss";

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0F172A', // Darker gray for the background
          800: '#1E293B', // Slightly lighter gray for sections
          700: '#334155', // For hover effects
        },
        green: {
          400: '#22C55E', // Bright green for accents
          500: '#16A34A', // Primary green
          600: '#15803D', // Slightly darker green
        },
        yellow: {
          400: '#FACC15', // Accent for hover or highlight
        },
        white: '#F8FAFC', // Softer white for text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
