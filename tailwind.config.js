/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2D78E8",
          secondary: "#9361FF",
        },
      },
    },
  },
  plugins: [],
};
