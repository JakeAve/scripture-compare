import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      willChange: {
        'top': 'top',
      }
    }
  },
} satisfies Config;
