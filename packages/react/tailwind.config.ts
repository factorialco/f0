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
      maxWidth: {
        ...baseConfig.theme?.extend?.maxWidth,
        content: "712px",
      },
      keyframes: {
        ...baseConfig.theme?.extend?.keyframes,
        "rotate-gradient": {
          from: { "--gradient-angle": "0deg" },
          to: { "--gradient-angle": "360deg" },
        },
        // Green "flash on add" highlight for newly-inserted data collection rows.
        "row-flash": {
          from: { backgroundColor: "hsl(var(--positive-50) / 0.2)" },
          to: { backgroundColor: "hsl(var(--positive-50) / 0)" },
        },
      },
      animation: {
        ...baseConfig.theme?.extend?.animation,
        "rotate-gradient": "rotate-gradient 2s linear infinite",
        "row-flash": "row-flash 1.5s ease-out",
      },
    },
  },
} satisfies Config
