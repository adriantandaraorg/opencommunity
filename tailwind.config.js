/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#151719",
        primary: "#5D5DFF",
        primaryLight: "#8686fc",
        gray: "#33363A",
        secondary: "#707D86",
        greenlight: "#C6F6D5",
        greendark: "#48BB78",
      },
    },
  },
  plugins: [],
};
