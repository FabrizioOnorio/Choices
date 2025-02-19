import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        'gray-app': '#cbd5e0',
      }
    },
  },
  plugins: [],
};

export default config;