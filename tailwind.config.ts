import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Noto Serif", "serif"],
      sans: ["Noto Sans", "sans-serif"],
      display: ["Mrs Saint Delafield", "sans-serif"],
    },
    extend: {
      willChange: {
        'top': 'top',
      }
    }
  },
} satisfies Config;
