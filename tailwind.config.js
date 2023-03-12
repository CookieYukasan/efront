/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "top-banner": "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
      },
      borderRadius: {
        4: "4px",
      },
      gridTemplateRows: {
        "homepage-hero": "1fr 1fr",
      },
    },
  },
  plugins: [],
};
