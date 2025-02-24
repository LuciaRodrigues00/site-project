import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        transparent: "#ffffff00",
        primary: "#ebbe49",
        secondary: "#0E1833",
        tertiary: "#0E1833 ",
        bg: "#F5F5F5",
        hover: "#0E1833",
        textbold: "#0E1833",
        text: "#818181",
        title: "#101B37  ",
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 1.5rem",
          "@screen sm": {
            maxWidth: "720px", // Aumentado ainda mais
          },
          "@screen md": {
            maxWidth: "880px", // Aumentado mais
          },
          "@screen lg": {
            maxWidth: "calc(1300px + 3rem)", // Bem mais largo
          },
        },
      });
    },
  ],
};
export default config;
