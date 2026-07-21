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
        // Chat typing indicator: a soft rise-and-dim wave with a rest phase
        // (WhatsApp-style), instead of `bounce`'s hard ball-drop curve.
        "typing-dot": {
          "0%": { transform: "translateY(0)", opacity: "0.35" },
          "22%": { transform: "translateY(-3px)", opacity: "1" },
          "44%, 100%": { transform: "translateY(0)", opacity: "0.35" },
        },
      },
      animation: {
        ...baseConfig.theme?.extend?.animation,
        "rotate-gradient": "rotate-gradient 2s linear infinite",
        "typing-dot": "typing-dot 1.3s ease-in-out infinite",
      },
    },
  },
} satisfies Config
