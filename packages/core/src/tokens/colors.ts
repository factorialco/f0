/**
 * Base colors for Factorial One Design System
 * These are the raw color values used to generate the semantic tokens
 */
export const baseColors = {
  white: {
    3: "0 0% 100% / 0.03",
    5: "0 0% 100% / 0.05",
    10: "0 0% 100% / 0.1",
    20: "0 0% 100% / 0.2",
    30: "0 0% 100% / 0.3",
    40: "0 0% 100% / 0.4",
    50: "0 0% 100% / 0.5",
    60: "0 0% 100% / 0.6",
    70: "0 0% 100% / 0.7",
    80: "0 0% 100% / 0.8",
    90: "0 0% 100% / 0.9",
    100: "0 0% 100%",
  },
  current: "currentColor",
  transparent: "transparent",
  grey: {
    0: "210 91% 22% / 0.02",
    5: "220 88% 17% / 0.04",
    10: "216 89% 18% / 0.06",
    20: "214 70% 20% / 0.1",
    30: "213 87% 15% / 0.14",
    40: "219 97% 15% / 0.37",
    50: "217 96% 11% / 0.61",
    60: "220 88% 10% / 0.82",
    70: "219 91% 8% / 0.88",
    80: "219 94% 7% / 0.9",
    90: "219 88% 6% / 0.92",
    100: "218 48% 10%",
    solid: {
      40: "219 18% 69%",
      50: "218 14% 45%",
    },
  },
  lilac: {
    50: "340 49% 60%",
    60: "341 34% 50%",
    70: "340 33% 41%",
  },
  barbie: {
    50: "331 84% 63%",
    60: "331 55% 53%",
    70: "330 49% 43%",
  },
  smoke: {
    50: "192 26% 54%",
    60: "192 22% 45%",
    70: "192 22% 37%",
  },
  army: {
    50: "162 44% 33%",
    60: "163 45% 28%",
    70: "162 44% 23%",
  },
  flubber: {
    50: "84 55% 53%",
    60: "84 48% 45%",
    70: "83 48% 33%",
  },
  indigo: {
    50: "239 91% 64%",
    60: "239 59% 54%",
    70: "239 51% 44%",
  },
  camel: {
    50: "25 46% 53%",
    60: "25 42% 44%",
    70: "25 42% 36%",
  },
  radical: {
    50: "348 80% 50%",
    60: "348 80% 42%",
    70: "347 80% 34%",
  },
  viridian: {
    50: "184 92% 35%",
    60: "184 92% 30%",
    70: "184 92% 24%",
  },
  orange: {
    50: "25 95% 53%",
    60: "24 69% 49%",
    70: "24 69% 40%",
  },
  red: {
    50: "5 69% 56%",
    60: "4 61% 49%",
    70: "3 71% 41%",
  },
  grass: {
    50: "160 84% 39%",
    60: "160 85% 33%",
    70: "161 84% 27%",
  },
  malibu: {
    50: "216 90% 65%",
    60: "216 59% 55%",
    70: "216 48% 44%",
  },
  yellow: {
    50: "38 92% 54%",
    60: "38 79% 45%",
    70: "38 80% 36%",
  },
  purple: {
    50: "258 88% 67%",
    60: "258 56% 56%",
    70: "258 43% 46%",
  },
  special: {
    highlight: "348 80% 50%",
  },
}

/**
 * Semantic color tokens for Factorial One Design System
 * These are platform-agnostic and can be used in both web and native
 */
export const semanticColors = {
  foreground: {
    default: {
      light: "hsl(218 48% 10%)",
      dark: "hsl(0 0% 100%)",
    },
    secondary: {
      light: "hsl(217 96% 11% / 0.61)",
      dark: "hsl(0 0% 100% / 0.8)",
    },
    tertiary: {
      light: "hsl(219 97% 15% / 0.37)",
      dark: "hsl(0 0% 100% / 0.6)",
    },
    disabled: {
      light: "hsl(213 87% 15% / 0.14)",
      dark: "hsl(0 0% 100% / 0.3)",
    },
    accent: {
      light: "hsl(239 51% 44%)",
      dark: "hsl(239 51% 44%)",
    },
    critical: {
      light: "hsl(3 71% 41%)",
      dark: "hsl(3 71% 41%)",
    },
    info: {
      light: "hsl(216 48% 44%)",
      dark: "hsl(216 48% 44%)",
    },
    warning: {
      light: "hsl(38 80% 36%)",
      dark: "hsl(38 80% 36%)",
    },
    positive: {
      light: "hsl(161 84% 27%)",
      dark: "hsl(161 84% 27%)",
    },
  },
  background: {
    default: {
      light: "hsl(210 91% 22% / 0.02)",
      dark: "hsl(219 88% 6% / 0.92)",
    },
    secondary: {
      light: "hsl(216 89% 18% / 0.06)",
      dark: "hsl(219 94% 7% / 0.9)",
    },
    tertiary: {
      light: "hsl(220 88% 17% / 0.04)",
      dark: "hsl(219 91% 8% / 0.88)",
    },
    accent: {
      light: "hsl(239 91% 64% / 0.1)",
      dark: "hsl(239 91% 64% / 0.1)",
    },
    critical: {
      light: "hsl(5 69% 56% / 0.1)",
      dark: "hsl(5 69% 56% / 0.1)",
    },
    info: {
      light: "hsl(216 90% 65% / 0.1)",
      dark: "hsl(216 90% 65% / 0.1)",
    },
    warning: {
      light: "hsl(38 92% 54% / 0.1)",
      dark: "hsl(38 92% 54% / 0.1)",
    },
    positive: {
      light: "hsl(160 84% 39% / 0.1)",
      dark: "hsl(160 84% 39% / 0.1)",
    },
  },
  border: {
    default: {
      light: "hsl(213 87% 15% / 0.14)",
      dark: "hsl(0 0% 100% / 0.2)",
    },
    secondary: {
      light: "hsl(216 89% 18% / 0.06)",
      dark: "hsl(219 94% 7% / 0.9)",
    },
    accent: {
      light: "hsl(239 91% 64% / 0.2)",
      dark: "hsl(239 91% 64% / 0.2)",
    },
    critical: {
      light: "hsl(5 69% 56% / 0.1)",
      dark: "hsl(5 69% 56% / 0.1)",
    },
    warning: {
      light: "hsl(38 92% 54% / 0.1)",
      dark: "hsl(38 92% 54% / 0.1)",
    },
    info: {
      light: "hsl(216 90% 65% / 0.1)",
      dark: "hsl(216 90% 65% / 0.1)",
    },
    positive: {
      light: "hsl(160 84% 39% / 0.1)",
      dark: "hsl(160 84% 39% / 0.1)",
    },
  },
}
