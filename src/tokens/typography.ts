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

/**
 * Font stacks.
 *
 * `emoji` is for surfaces that render an emoji **on its own** — a picker cell, a
 * reaction pill, a channel icon. It must NOT be applied to prose: `*`, `#`, the
 * digits and `™` are technically emoji in Unicode, so an emoji font over mixed
 * text turns numbers and symbols into pictures. Body copy relies on the
 * browser's own per-character fallback instead, which already picks the system
 * emoji font for emoji codepoints.
 *
 * "Twemoji Mozilla" leads because Firefox ships it and it is the only stack
 * entry that carries flag glyphs on Windows (Segoe UI Emoji has none, so
 * Chromium there falls back to the two regional-indicator letters).
 */
export const fontFamily = {
  sans: ["Inter", "sans-serif"],
  emoji: [
    "Twemoji Mozilla",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
    "EmojiOne Color",
    "Android Emoji",
    "sans-serif",
  ],
} as const

export const fontWeight = {
  normal: "400",
  medium: "500",
  semibold: "600",
} as const
