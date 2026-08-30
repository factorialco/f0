/**
 * Make an untrusted message string safe to DISPLAY: normalize to NFC, cap
 * combining-mark stacks (zalgo) and drop bidi overrides. Emojis (ZWJ
 * sequences, variation selectors, skin tones) pass through untouched.
 */
export declare const sanitizeDisplayText: (text: string) => string;
