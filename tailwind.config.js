/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1e1a3c',
          deep: '#2a1a63',
          purple: '#5b3fa8',
          purpleHover: '#4b3291',
          purpleLight: '#ece7fa',
          purpleMuted: '#d9d3f5',
          sky: '#7cc6f0',
          skyDark: '#17608c',
          skyLight: '#e1f2fc',
          bg: '#f6f5fc',
          border: '#e3e0f0',
          textMuted: '#69668a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
