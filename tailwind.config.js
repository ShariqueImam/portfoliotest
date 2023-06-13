/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "550px",
      md: "1024px",
      lg: "1400px",
      xl: "1800px",
    },
    extend: {
      colors: {
        green: "#09CF83",
        pink: "#EA4C89",
        cyan: "#00D8FF",
        orange: "#FF9900",
        yellow: "#FFD600",
        parrot: "#ADFF00",
        purple: "#A259FF",
        bgLight: "#232031",
        bgDark: "#181622",
        bgProject: "#393A59",
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
