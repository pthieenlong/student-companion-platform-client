/** @types {import('tailwindcss').Config} */
exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        white: "var(--color-white)",
        black: "var(--color-black)",
        blue: "var(--color-blue)",
        grey: "var(--color-grey)",
        lightblack: "var(--color-lightblack)",
        lightgrey: "var(--color-lightgrey)",
      },
      fontFamily: {
        monserrat: ["var(--font-monserrat)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
}
