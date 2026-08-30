import type { Config } from "tailwindcss";
/**
 * Spacing for the tailwind config
 * Provides scale in relative(rem) and absolute(px) units
 *
 * The pixel scale is used by default.
 * All properties that do not explicitly set to use relative scale, use pixels.
 *
 * Relative scale is used for size definitions, like heights and widths.
 */
type ThemeSpacing = NonNullable<Config["theme"]>["spacing"];
export declare const absoluteSpacing: ThemeSpacing;
export declare const relativeSpacing: ThemeSpacing;
export declare const betweenSpacing: ThemeSpacing;
export {};
//# sourceMappingURL=spacing.d.ts.map