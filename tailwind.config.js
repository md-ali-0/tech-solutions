/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "DMSerif": ['DM Serif Display', 'sans-serif'],
        "Montserrat": ['Montserrat', 'sans-serif'],
      },
      colors: {
        "primary": "#3280CF",
        "secondary": "#091725"
      }
    },
  },
  plugins: [],
};
