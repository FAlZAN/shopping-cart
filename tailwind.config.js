/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "375px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [require("daisyui")],
};
