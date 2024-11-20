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

        cta: "#E0AAFF",
        cta2: "#7B2CBF",

        border: "#7B2CBF",
        card: "#240046",
        card_secondary: "#3C096C",
        
        text_card: "#10002B",
        text: "#FFFFFF"
      },
    },
  },
  plugins: [],
}

