/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette
        mana: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#38bdf8', // Sky Blue cerah
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
        gold: {
          100: '#fef9c3',
          300: '#fde047',
          400: '#facc15', // Emas murni
          500: '#eab308',
          glow: 'rgba(234, 179, 8, 0.5)',
        },
        paper: {
          DEFAULT: '#ffffff',
          glass: 'rgba(255, 255, 255, 0.8)',
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'magical': '0 0 15px rgba(56, 189, 248, 0.3), 0 0 5px rgba(234, 179, 8, 0.1)',
        'legendary': '0 0 20px rgba(234, 179, 8, 0.4)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #f0f9ff, #ffffff)',
      }
    },
  },
  plugins: [],
}