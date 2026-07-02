/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#1B4332',
          dark: '#0f2a22',
          light: '#2D6A4F',
        },
        'gold': {
          DEFAULT: '#D4A574',
          dark: '#C4956A',
        },
        'cream': {
          DEFAULT: '#FAF7F2',
        },
        'accent': {
          DEFAULT: '#C1666B',
        }
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'],
        wenkai: ['"LXGW WenKai"', '"Noto Serif SC"', 'serif'],
      },
    },
  },
  plugins: [],
};