/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: ["group-hover"],
    },
    colors: {
      darkBlue: "#635FC7",
      lightBlue: "#A8A4FF",
      black1: "#000112",
      black2: "#20212C",
      black3: "#2B2C37",
      black3: "#3E3F4E",
      white1: "#828FA3",
      white2: "#E4EBFA",
      white3: "#F4F7FD",
      white4: "#FFFFFF",
      red1: "#EA5555",
      red2: "#FF9898",
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [],
};
