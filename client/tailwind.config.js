/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'dark-purple': '#31155f',
      'offWhite': '#F5F5F5',
      },
      borderColor: {
        'gradient-purple': 'transparent linear-gradient(90deg, #6B46C1 0%, #6D28D9 100%) 0% 0% no-repeat padding-box',
      },
    },
  },
  plugins: [],
}