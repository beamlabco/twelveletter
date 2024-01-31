/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      visby: ["var(--font-visby)", "sans-serif"],
      manrope: ["var(--font-manrope)", "sans-serif"],
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    colors: {
      "primary-accent": "#FF867A",
      "secondary-accent": "#374852",
      "background-color": "#ffffff",
      "background-color-2": "#F5F5F7",
      "black-shade": {
        100: "#7A7A7A",
        200: "#4D4D4D",
        300: "#2C2C2C",
      },
    },
  },
};
export const plugins = [];
