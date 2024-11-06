import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '15xl':'1363px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
       gridTemplateColumns: {
        // Simple 4 column grid
        Temp: "repeat(4, 1fr)",
        // Alternative grid configuration
        Temps: "repeat(4, minmax(160px, auto))",
        midTemp: "repeat(3, 1fr)",
         midTemps: "repeat(3, minmax(160px, auto))",
         mid2Temps: "repeat(2, minmax(160px, auto))",
        smallTemp: "repeat(2, 1fr)",
        xsmallTemps: "repeat(0, minmax(160px, auto))",
      },
      gridAutoRows: {
        // Complex site-specific row configuration
        layout: "minmax(160px, auto)",
        midLayout: "minmax(250px, auto)",
        smallLayout: "minmax(160px, auto)",
      },

    },
  },
  plugins: [],
};
export default config;
