export declare const buttonToggleSizes: readonly ["sm", "md", "lg"];
export type ButtonToggleSize = (typeof buttonToggleSizes)[number];
export declare const buttonToggleVariants: readonly ["compact", "expanded"];
export type ButtonToggleVariant = (typeof buttonToggleVariants)[number];
/**
 * The colours a toggle can wear when selected, beyond F0's own selected teal.
 * Each one is an F0 semantic colour — the six statuses, then the five points of
 * the mood scale — so a coloured toggle carries the same meaning here as the
 * same colour does anywhere else in the product.
 */
export declare const buttonToggleColors: readonly ["accent", "critical", "warning", "promote", "info", "positive", "mood-super-negative", "mood-negative", "mood-neutral", "mood-positive", "mood-super-positive"];
export type ButtonToggleColor = (typeof buttonToggleColors)[number];
