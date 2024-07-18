/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "1280px", max: "1439px" },
        md: { min: "1440px", max: "1679px" },
        xl: { min: "1680px", max: "1919px" },
        xxl: { min: "1920px", max: "2560px" },
      },
      backgroundImage: {
        chatPage: "url('./assets/chatPage/background.svg')",
        smStartPage: "url('./assets/background/background_1280.png')",
        mdStartPage: "url('./assets/background/background_1440.png')",
        xlStartPage: "url('./assets/background/background_1680.png')",
        xxlStartPage: "url('./assets/background/background_1920.png')",
      },
      backgroundColor: {
        modalBack: "rgba(0, 0, 0, 0.8)",
        emotionBack: "linear-gradient(180deg, #FFD756 0%, #FFC300 100%)",
      },
      boxShadow: {
        emotionShadow: "0px 2px 6px rgba(82, 82, 82, 0.25)",
      },
      colors: {
        brown: {
          100: "#EAE0D6",
          200: "#D4C0AD",
          300: "#BFA185",
          400: "#A9815C",
          500: "#946233",
          600: "#764E29",
          700: "#593B1F",
          800: "#3B2714",
          900: "#1E140A",
        },
        black: {
          black: "#000000",
          100: "#E8E8EB",
          200: "#D0D2D6",
          300: "#B9BBC2",
          400: "#A1A5AD",
          500: "#8A8E99",
          600: "#6E727A",
          700: "#53555C",
          800: "#37393D",
          900: "#1C1C1F",
        },
      },
    },
  },
  plugins: [],
};
