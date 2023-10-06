/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
        lightblue1: "hsl(211, 68%, 94%)",
        lightblue2: "hsl(205, 33%, 90%)",
        grayblue: "hsl(219, 14%, 63%)",
        darkgrayblue: "hsl(219, 12%, 42%)",
        darkblue: "hsl(224, 21%, 14%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
