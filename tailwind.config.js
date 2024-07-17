/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"blue",
        primaryDark:"#8B2C51",
        secondary:"#21B4B9",
        dark:"#303030",
      },
    },
    fontFamily:{
      inter:["inter", "san-serf"],
      cursive:["Ephesis", "cursive"]
    },
    container:{
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
      },
    }
  },
  plugins: [],
}