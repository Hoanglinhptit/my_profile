/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      phonesm: "320px",
      phone: "414px",
      md: "768px",
      lg: "976px",
      laptopsm: "1180px",
      laptopxl: "1440px",
    },
    backgroundImage: {
      themeMoble: "url(./assets/image5.svg)",
    },
  },
  plugins: [],
};
