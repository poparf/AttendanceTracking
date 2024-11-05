/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sferaregular: ['sferaregular', 'sans-serif'],
      everettlight: ['everettlight', 'sans-serif'],
      
    },
    extend: {
      colors: {
        customColors: {
          "alien-green": '#03FFA1',
          "dark-green-shadow": "#687f69",
          "dark-green": "#042A05",
          "medium-green": "258073",
          "light-green": "#15AA5C",
          "light-yellow": "#D2FF06",
        },
      },
    },
  },
  plugins: [],
};
