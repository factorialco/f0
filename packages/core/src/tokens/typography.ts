export const fontSize = {
  xs: { size: "0.625rem", lineHeight: "0.75rem" },
  sm: { size: "0.75rem", lineHeight: "1rem" },
  base: { size: "0.875rem", lineHeight: "1.25rem", letterSpacing: "-0.005em" },
  lg: { size: "1rem", lineHeight: "1.5rem", letterSpacing: "-0.01em" },
  xl: { size: "1.125rem", lineHeight: "1.75rem", letterSpacing: "-0.01em" },
  "2xl": { size: "1.375rem", lineHeight: "1.75rem", letterSpacing: "-0.01em" },
  "3xl": { size: "1.625rem", lineHeight: "2rem", letterSpacing: "-0.01em" },
  "4xl": { size: "2.25rem", lineHeight: "2.5rem", letterSpacing: "-0.02em" },
} as const

export const fontWeight = {
  normal: "400",
  medium: "500",
  semibold: "600",
} as const
