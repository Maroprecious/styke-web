import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "line": "url('/assets/svg/bg.svg')"
      },
      colors: {
        green: "rgb(61, 85, 83)",
        white: "#FFFFFF",
        blue: '#003E9A',
        black: '#333333',
        red: '#FF3D00',
        lightblue: "#3498DB"
      },
      fontFamily: {
        sans: ['var(--font-poppin)'],
      },
    },
  },
  plugins: [],
};
export default config;
