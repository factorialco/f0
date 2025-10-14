import type { Config } from "tailwindcss"
import { borderRadius } from "./src/tokens/borderRadius"
import { baseColors, f1Colors } from "./src/tokens/colors"
import {
  absoluteSpacing,
  betweenSpacing,
  relativeSpacing,
} from "./src/tokens/spacing"

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
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
    },
    fontSize: {
      xs: [
        ".625rem",
        {
          lineHeight: "0.75rem",
        },
      ],
      sm: [
        ".75rem",
        {
          lineHeight: "1rem",
        },
      ],
      base: [
        ".875rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "-0.005em",
        },
      ],
      lg: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "-0.01em",
        },
      ],
      xl: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "-0.01em",
        },
      ],
      "2xl": [
        "1.375rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "-0.01em",
        },
      ],
      "3xl": [
        "1.625rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
        },
      ],
      "4xl": [
        "2.25rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.02em",
        },
      ],
    },
    borderRadius,
    boxShadow: {
      DEFAULT: "0 2px 20px 0 hsl(var(--shadow) / 0.04)",
      md: "0 4px 20px 0 hsl(var(--shadow) / 0.08)",
      lg: "0 8px 30px 0 hsl(var(--shadow) / 0.12)",
      xl: "0 12px 56px 0 hsl(var(--shadow) / 0.16)",
      none: "none",
    },
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
