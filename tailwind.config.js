/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      colors: {
        background: "#10002B",

        cta: "#7B2CBF",

        border: "#E0AAFF",
        card: "#240046",
        card_secondary: "#3C096C",
        
        text: "#FFFFFF",
      },
    },
  },
  plugins: [],
}

