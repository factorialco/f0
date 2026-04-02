import type { Config } from "tailwindcss"

import { borderRadius } from "./src/tokens/borderRadius"
import { baseColors, f1Colors } from "./src/tokens/colors"
import { boxShadow } from "./src/tokens/shadows"
import {
  absoluteSpacing,
  betweenSpacing,
  relativeSpacing,
} from "./src/tokens/spacing"
import { fontSize, fontWeight } from "./src/tokens/typography"

export const baseConfig: Omit<Config, "content"> = {
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: baseColors,
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontWeight,
    fontSize: Object.fromEntries(
      Object.entries(fontSize).map(([key, val]) => [
        key,
        [
          val.size,
          {
            lineHeight: val.lineHeight,
            ...("letterSpacing" in val
              ? { letterSpacing: val.letterSpacing }
              : {}),
          },
        ],
      ])
    ),
    borderRadius,
    boxShadow,
    // use pixel scale by default
    spacing: absoluteSpacing,
    extend: {
      flexBasis: relativeSpacing,
      height: relativeSpacing,
      maxHeight: relativeSpacing,
      maxWidth: relativeSpacing,
      minHeight: relativeSpacing,
      minWidth: relativeSpacing,
      textIndent: relativeSpacing,
      width: relativeSpacing,
      gap: betweenSpacing,
      space: betweenSpacing,
      colors: {
        f1: f1Colors,
      },
      zIndex: {
        "50": "1250",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        autofill: {
          from: {},
          to: {},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        autofill: "autofill 0s both",
      },
      containers: {
        xs: "24rem",
        sm: "40rem",
        "8xl": "96rem",
        "9xl": "120rem",
        "10xl": "152rem",
        "11xl": "192rem",
        "12xl": "240rem",
      },
      screens: {
        xs: "480px",
      },
      strokeWidth: {
        xl: "1.7px",
        lg: "1.4px",
        md: "1.3px",
        sm: "1.2px",
        xs: "1px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
  safelist: [
    {
      pattern: /^bg-f1-/,
      variants: ["hover", "focus", "active"],
    },
    {
      pattern: /^text-f1-/,
      variants: ["hover", "focus", "active"],
    },
    {
      pattern: /^border-f1-/,
      variants: ["hover", "focus", "active"],
    },
  ],
}
