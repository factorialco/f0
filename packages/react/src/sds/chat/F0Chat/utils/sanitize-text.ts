/**
 * Cap runs of Unicode combining marks. Legit text survives NFC with 0–2 marks
 * per glyph (accents precompose; scripts like Thai or Hebrew stack at most a
 * few), while "zalgo" trolling stacks dozens and breaks the layout. Keeping
 * the first 3 marks preserves every real language and kills the noise.
 */
const EXCESS_COMBINING_MARKS = /(\p{M}{3})\p{M}+/gu

/** Bidi control characters (RLO & friends) visually reverse/scramble text. */
const BIDI_CONTROLS = /[\u202A-\u202E\u2066-\u2069]/g

/**
 * Make an untrusted message string safe to DISPLAY: normalize to NFC, cap
 * combining-mark stacks (zalgo) and drop bidi overrides. Emojis (ZWJ
 * sequences, variation selectors, skin tones) pass through untouched.
 */
export const sanitizeDisplayText = (text: string): string =>
  text
    .normalize("NFC")
    .replace(EXCESS_COMBINING_MARKS, "$1")
    .replace(BIDI_CONTROLS, "")
