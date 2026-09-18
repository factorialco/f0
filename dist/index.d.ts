import { ThemeConfig } from 'tailwindcss/types/config';

/**
 * Border radius scale.
 *
 * ## Usage convention for interactive components
 *
 * Interactive elements (buttons, toggle items, segments) follow a size-based mapping
 * derived from `buttonSizeVariants` in `packages/react/src/ui/Action/variants.ts`:
 *
 *   sm  → rounded-sm  (0.5rem)
 *   md  → rounded     (0.625rem, DEFAULT)
 *   lg  → rounded-md  (0.75rem)
 *
 * When a component has a container that wraps interactive elements (e.g. a segmented
 * control track, a button group background), the container uses one step up from the
 * inner element so the pill fits visually with the internal padding:
 *
 *   inner sm  → container rounded     (DEFAULT)
 *   inner md  → container rounded-md
 *   inner lg  → container rounded-lg
 */
declare const borderRadius: {
    none: string;
    "2xs": string;
    xs: string;
    sm: string;
    DEFAULT: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    full: string;
};

declare const breakpoints: {
    md: number;
    lg: number;
    xl: number;
};

declare const baseColors: {
    readonly white: {
        readonly 3: "0 0% 100% / 0.03";
        readonly 5: "0 0% 100% / 0.05";
        readonly 10: "0 0% 100% / 0.1";
        readonly 20: "0 0% 100% / 0.2";
        readonly 30: "0 0% 100% / 0.3";
        readonly 40: "0 0% 100% / 0.4";
        readonly 50: "0 0% 100% / 0.5";
        readonly 60: "0 0% 100% / 0.6";
        readonly 70: "0 0% 100% / 0.7";
        readonly 80: "0 0% 100% / 0.8";
        readonly 90: "0 0% 100% / 0.9";
        readonly 100: "0 0% 100%";
    };
    readonly current: "currentColor";
    readonly transparent: "transparent";
    readonly grey: {
        readonly 0: "210 91% 22% / 0.02";
        readonly 2: "219 88% 17% / 0.02";
        readonly 5: "220 88% 17% / 0.04";
        readonly 10: "216 89% 18% / 0.06";
        readonly 20: "214 70% 20% / 0.1";
        readonly 30: "213 87% 15% / 0.20";
        readonly 40: "219 97% 15% / 0.45";
        readonly 50: "217 96% 11% / 0.61";
        readonly 60: "220 88% 10% / 0.82";
        readonly 70: "219 91% 8% / 0.88";
        readonly 80: "219 94% 7% / 0.9";
        readonly 90: "219 88% 6% / 0.92";
        readonly 100: "218 48% 10%";
        readonly solid: {
            readonly 40: "219 18% 69%";
            readonly 50: "218 14% 45%";
        };
    };
    readonly lilac: {
        readonly 50: "340 49% 60%";
        readonly 60: "341 34% 50%";
        readonly 70: "340 33% 41%";
    };
    readonly barbie: {
        readonly 50: "331 84% 63%";
        readonly 60: "331 55% 53%";
        readonly 70: "330 49% 43%";
    };
    readonly smoke: {
        readonly 50: "192 26% 54%";
        readonly 60: "192 22% 45%";
        readonly 70: "192 22% 37%";
    };
    readonly army: {
        readonly 50: "162 44% 33%";
        readonly 60: "163 45% 28%";
        readonly 70: "162 44% 23%";
    };
    readonly flubber: {
        readonly 50: "84 55% 53%";
        readonly 60: "84 48% 45%";
        readonly 70: "83 48% 33%";
    };
    readonly indigo: {
        readonly 50: "239 91% 64%";
        readonly 60: "239 59% 54%";
        readonly 70: "239 51% 44%";
    };
    readonly camel: {
        readonly 50: "25 46% 53%";
        readonly 60: "25 42% 44%";
        readonly 70: "25 42% 36%";
    };
    readonly radical: {
        readonly 50: "348 80% 50%";
        readonly 60: "348 80% 42%";
        readonly 70: "347 80% 34%";
    };
    readonly viridian: {
        readonly 50: "184 92% 35%";
        readonly 60: "184 92% 28%";
        readonly 70: "184 92% 24%";
    };
    readonly orange: {
        readonly 50: "25 95% 53%";
        readonly 60: "24 69% 49%";
        readonly 70: "24 69% 40%";
    };
    readonly red: {
        readonly 50: "5 100% 65%";
        readonly 60: "4 61% 49%";
        readonly 70: "3 71% 41%";
    };
    readonly grass: {
        readonly 50: "160 84% 39%";
        readonly 60: "160 85% 33%";
        readonly 70: "161 84% 27%";
    };
    readonly malibu: {
        readonly 50: "216 90% 65%";
        readonly 60: "216 59% 55%";
        readonly 70: "216 48% 44%";
    };
    readonly yellow: {
        readonly 50: "38 92% 54%";
        readonly 60: "38 79% 45%";
        readonly 70: "38 80% 36%";
    };
    readonly purple: {
        readonly 50: "258 88% 67%";
        readonly 60: "258 56% 56%";
        readonly 70: "258 43% 46%";
    };
};
type BaseColor = keyof typeof baseColors;
declare const f1Colors: {
    readonly foreground: {
        readonly DEFAULT: "hsl(var(--neutral-100))";
        readonly secondary: "hsl(var(--neutral-50))";
        readonly tertiary: "hsl(var(--neutral-40))";
        readonly inverse: {
            readonly DEFAULT: "hsl(var(--white-100))";
            readonly secondary: "hsl(var(--white-80))";
        };
        readonly disabled: "hsl(var(--neutral-30))";
        readonly accent: "hsl(var(--accent-70))";
        readonly critical: "hsl(var(--critical-70))";
        readonly info: "hsl(var(--info-70))";
        readonly warning: "hsl(var(--warning-70))";
        readonly positive: "hsl(var(--positive-70))";
        readonly selected: "hsl(var(--selected-70))";
    };
    readonly background: {
        readonly DEFAULT: "hsl(var(--neutral-0))";
        readonly hover: "hsl(var(--neutral-5))";
        readonly disabled: "hsl(var(--neutral-3))";
        readonly secondary: {
            readonly DEFAULT: "hsl(var(--neutral-10))";
            readonly hover: "hsl(var(--neutral-20))";
        };
        readonly tertiary: "hsl(var(--neutral-5))";
        readonly inverse: {
            readonly DEFAULT: "hsl(var(--neutral-90))";
            readonly secondary: "hsl(var(--white-60))";
        };
        readonly bold: "hsl(var(--neutral-90))";
        readonly accent: {
            readonly DEFAULT: "hsl(var(--accent-50) / 0.05)";
            readonly bold: {
                readonly DEFAULT: "hsl(var(--accent-50))";
                readonly hover: "hsl(var(--accent-60))";
            };
        };
        readonly promote: {
            readonly DEFAULT: "hsl(var(--promote-50) / 0.3)";
            readonly hover: "hsl(var(--promote-50) / 0.4)";
            readonly bold: "hsl(var(--promote-50))";
        };
        readonly critical: {
            readonly DEFAULT: "hsl(var(--critical-50) / 0.1)";
            readonly bold: "hsl(var(--critical-60))";
        };
        readonly info: {
            readonly DEFAULT: "hsl(var(--info-50) / 0.1)";
            readonly bold: "hsl(var(--info-50))";
        };
        readonly warning: {
            readonly DEFAULT: "hsl(var(--warning-50) / 0.1)";
            readonly bold: "hsl(var(--warning-50))";
        };
        readonly positive: {
            readonly DEFAULT: "hsl(var(--positive-50) / 0.1)";
            readonly bold: "hsl(var(--positive-50))";
        };
        readonly selected: {
            readonly DEFAULT: "hsl(var(--selected-50) / 0.1)";
            readonly secondary: "hsl(var(--selected-50) / 0.05)";
            readonly hover: "hsl(var(--selected-50) / 0.2)";
            readonly bold: {
                readonly DEFAULT: "hsl(var(--selected-60))";
                readonly hover: "hsl(var(--selected-70))";
            };
        };
        readonly overlay: {
            readonly DEFAULT: "hsl(var(--neutral-40))";
        };
    };
    readonly border: {
        readonly DEFAULT: "hsl(var(--neutral-30))";
        readonly hover: "hsl(var(--neutral-40))";
        readonly secondary: "hsl(var(--neutral-20))";
        readonly inverse: "hsl(var(--neutral-0) / 0.2)";
        readonly bold: "hsl(var(--neutral-100))";
        readonly promote: {
            readonly DEFAULT: "hsl(var(--promote-50) / 0.4)";
        };
        readonly selected: {
            readonly DEFAULT: "hsl(var(--selected-50) / 0.4)";
            readonly bold: "hsl(var(--selected-50))";
        };
        readonly critical: {
            readonly DEFAULT: "hsl(var(--critical-50) / 0.1)";
            readonly bold: "hsl(var(--critical-50))";
        };
        readonly warning: {
            readonly DEFAULT: "hsl(var(--warning-50) / 0.1)";
            readonly bold: "hsl(var(--warning-50))";
        };
        readonly info: {
            readonly DEFAULT: "hsl(var(--info-50) / 0.1)";
            readonly bold: "hsl(var(--info-50))";
        };
        readonly positive: {
            readonly DEFAULT: "hsl(var(--positive-50) / 0.1)";
            readonly bold: "hsl(var(--positive-50))";
        };
    };
    readonly icon: {
        readonly DEFAULT: "hsl(var(--neutral-solid-50))";
        readonly secondary: "hsl(var(--neutral-solid-40))";
        readonly inverse: "hsl(var(--neutral-0))";
        readonly bold: "hsl(var(--neutral-100))";
        readonly critical: {
            readonly DEFAULT: "hsl(var(--critical-50))";
            readonly bold: "hsl(var(--critical-70))";
        };
        readonly accent: "hsl(var(--accent-50))";
        readonly info: "hsl(var(--info-50))";
        readonly warning: "hsl(var(--warning-50))";
        readonly positive: "hsl(var(--positive-50))";
        readonly promote: "hsl(var(--promote-50))";
        readonly selected: {
            readonly DEFAULT: "hsl(var(--selected-60))";
            readonly hover: "hsl(var(--selected-70))";
        };
        readonly mood: {
            readonly "super-negative": "hsl(var(--mood-super-negative))";
            readonly negative: "hsl(var(--mood-negative))";
            readonly neutral: "hsl(var(--mood-neutral))";
            readonly positive: "hsl(var(--mood-positive))";
            readonly "super-positive": "hsl(var(--mood-super-positive))";
        };
    };
    readonly special: {
        readonly ring: "hsl(var(--ring))";
        readonly page: "hsl(var(--page))";
        readonly highlight: "hsl(var(--accent-50))";
    };
};
type F1Color = keyof typeof f1Colors;

/**
 * The motion vocabulary — durations and easings shared by everything that
 * moves as part of the application shell.
 *
 * One token because a single gesture is almost never drawn by a single
 * animation: opening the side panel moves the main content's padding, the
 * panel's own width and the canvas inset, and collapsing the sidebar moves
 * its slot and the nav itself. When those carry their own durations and curves
 * they cannot stay in step, and the seam between them is exactly where the
 * mismatch shows.
 *
 * Calibrated the same way as the chat's own vocabulary: short ease-out tweens
 * with NO overshoot — underdamped springs read as bounce.
 */
declare const motionTokens: {
    duration: {
        /** Micro-presences: chips, dots, hover affordances. */
        micro: number;
        /** Row entries and crossfades. */
        fast: number;
        /** The shell's default — anything moving the panel/content seam. */
        base: number;
        /** A surface changing what it is: entering or leaving fullscreen. */
        reveal: number;
    };
    ease: {
        /** Fast start, soft landing, no overshoot (Material "emphasized decelerate"). */
        outSwift: [number, number, number, number];
        /** Pure disappearances, where nothing has to be tracked on the way out. */
        in: [number, number, number, number];
    };
    /**
     * How long a continuous gesture (a window drag) must hold still before it
     * counts as settled rather than mid-flight.
     */
    settleMs: number;
};

/**
 * Widths for the application frame's side panel — the slot the AI chat, hosted
 * conversations and the meeting panel all take turns occupying.
 *
 * These lived as private constants in three places (the chat kit, its
 * localStorage validator, and the meeting window) that were manually kept in
 * step. They are one token now because changing one copy silently invalidated
 * values persisted against another.
 */
declare const panelWidths: {
    min: number;
    max: number;
    default: number;
    /**
     * How much room the main content keeps before the panel takes any — the
     * split the frame arrives at on its own.
     *
     * The panel is the guest here. Product surfaces are dense — filters, table
     * headers, bulk actions — and they degrade far worse in a narrow column than
     * a chat does, so the content is served first and the panel gets what is
     * left, down to its own `min`.
     *
     * This is what the layout CHOOSES, not a hard limit: an explicit drag may
     * cross it, down to `mainHardMin`. See `mainHardMin` and `splitMinFrame`.
     */
    mainMin: number;
    /**
     * The floor a deliberate drag may not cross.
     *
     * `mainMin` decides the default; this decides how far the user is allowed to
     * overrule it. Someone who drags the panel wider on a narrow window has said
     * what they want and should get it — but not to the point where the content
     * behind stops being a usable page.
     */
    mainHardMin: number;
    /**
     * Below this the panel covers the frame instead of splitting it.
     *
     * Independent of `mainMin` on purpose. Deriving it as `mainMin + min` tied
     * two unrelated questions together — "how much room does the content want"
     * and "when is splitting no longer worth it" — so making the content more
     * comfortable on a laptop also stopped a half-screen window from splitting
     * at all. They move separately now.
     *
     * 700 leaves at least 350 a side, which is the narrowest split that still
     * reads as two columns rather than two slivers.
     */
    splitMinFrame: number;
};

declare const boxShadow: {
    readonly DEFAULT: "0 2px 20px 0 hsl(var(--shadow) / 0.04)";
    readonly md: "0 4px 20px 0 hsl(var(--shadow) / 0.08)";
    readonly lg: "0 8px 30px 0 hsl(var(--shadow) / 0.12)";
    readonly xl: "0 12px 56px 0 hsl(var(--shadow) / 0.16)";
    readonly none: "none";
};

/**
 * Spacing for the tailwind config
 * Provides scale in relative(rem) and absolute(px) units
 *
 * The pixel scale is used by default.
 * All properties that do not explicitly set to use relative scale, use pixels.
 *
 * Relative scale is used for size definitions, like heights and widths.
 */
declare const absoluteSpacing: ThemeConfig["spacing"];
declare const relativeSpacing: ThemeConfig["spacing"];
declare const betweenSpacing: ThemeConfig["spacing"];
declare const pageSpacing: ThemeConfig["spacing"];
/**
 * Standard height scale for interactive components (buttons, inputs, segmented controls, etc.)
 *
 * | Size | Height | Tailwind |
 * |------|--------|---------|
 * | sm   | 24px   | h-6     |
 * | md   | 32px   | h-8     |
 * | lg   | 40px   | h-10    |
 *
 * Derived from `buttonSizeVariants` in `packages/react/src/ui/Action/variants.ts`.
 * Use this as the reference when building any new interactive component.
 */
declare const interactiveHeights: {
    readonly sm: string;
    readonly md: string;
    readonly lg: string;
};

declare const fontSize: {
    readonly xs: {
        readonly size: "0.625rem";
        readonly lineHeight: "0.75rem";
    };
    readonly sm: {
        readonly size: "0.75rem";
        readonly lineHeight: "1rem";
    };
    readonly base: {
        readonly size: "0.875rem";
        readonly lineHeight: "1.25rem";
        readonly letterSpacing: "-0.005em";
    };
    readonly lg: {
        readonly size: "1rem";
        readonly lineHeight: "1.5rem";
        readonly letterSpacing: "-0.01em";
    };
    readonly xl: {
        readonly size: "1.125rem";
        readonly lineHeight: "1.75rem";
        readonly letterSpacing: "-0.01em";
    };
    readonly "2xl": {
        readonly size: "1.375rem";
        readonly lineHeight: "1.75rem";
        readonly letterSpacing: "-0.01em";
    };
    readonly "3xl": {
        readonly size: "1.625rem";
        readonly lineHeight: "2rem";
        readonly letterSpacing: "-0.01em";
    };
    readonly "4xl": {
        readonly size: "2.25rem";
        readonly lineHeight: "2.5rem";
        readonly letterSpacing: "-0.02em";
    };
};
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
declare const fontFamily: {
    readonly sans: readonly ["Inter", "sans-serif"];
    readonly emoji: readonly ["Twemoji Mozilla", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "sans-serif"];
};
declare const fontWeight: {
    readonly normal: "400";
    readonly medium: "500";
    readonly semibold: "600";
};

export { type BaseColor, type F1Color, absoluteSpacing, baseColors, betweenSpacing, borderRadius, boxShadow, breakpoints, f1Colors, fontFamily, fontSize, fontWeight, interactiveHeights, motionTokens, pageSpacing, panelWidths, relativeSpacing };
