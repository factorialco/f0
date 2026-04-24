import type { Config } from "tailwindcss"

import { baseConfig } from "@factorialco/f0-core/tailwind"

export default {
  ...baseConfig,
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./docs/**/*.{mdx,ts,tsx}",
    "./storybook/**/*.{mdx,ts,tsx}",
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      keyframes: {
        ...baseConfig.theme?.extend?.keyframes,
        "rotate-gradient": {
          from: { "--gradient-angle": "0deg" },
          to: { "--gradient-angle": "360deg" },
        },
        "flash-glow": {
          "0%": { opacity: "0" },
          "15%": { opacity: "0.6" },
          "65%": { opacity: "0.6" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        ...baseConfig.theme?.extend?.animation,
        "rotate-gradient": "rotate-gradient 3s linear infinite",
        "flash-glow": "flash-glow 1.5s ease-out forwards",
      },
    },
  },
} satisfies Config
