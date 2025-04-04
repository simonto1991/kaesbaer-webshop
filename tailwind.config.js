/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kaesbaer: {
          blue: '#0046AD',    // Käsbär Blau
          yellow: '#FFB800',  // Käsbär Gelb
        }
      }
    },
  },
  plugins: [],
} 