/**
 * Container for the tab strip.
 * Primary: pt-1 pb-3 creates the 12px gap below the pill for the underline (mirrors web pt-1 pb-3).
 * Secondary: py-1 symmetric, no underline.
 */
export declare const f0TabsContainerVariants: import("tailwind-variants").TVReturnType<{
    secondary: {
        true: string;
        false: string;
    };
}, undefined, "relative flex-row items-center gap-1 px-3", {
    secondary: {
        true: string;
        false: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    secondary: {
        true: string;
        false: string;
    };
}, undefined, "relative flex-row items-center gap-1 px-3", unknown, unknown, undefined>>;
/**
 * The PressableFeedback IS the pill — same as web's `<span py-1.5 px-3 rounded-md bg-...>`.
 * Active state applies the background color directly on the pressable.
 */
export declare const f0TabItemVariants: import("tailwind-variants").TVReturnType<{
    active: {
        true: string;
        false: string;
    };
    secondary: {
        true: string;
        false: string;
    };
}, undefined, "items-center justify-center rounded-md px-3 py-1.5", {
    active: {
        true: string;
        false: string;
    };
    secondary: {
        true: string;
        false: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    active: {
        true: string;
        false: string;
    };
    secondary: {
        true: string;
        false: string;
    };
}, undefined, "items-center justify-center rounded-md px-3 py-1.5", unknown, unknown, undefined>>;
/**
 * Underline shown only on primary tabs (secondary=false).
 * Renders as a 1px line pinned to the bottom of the container.
 */
export declare const f0TabUnderlineClass = "absolute bottom-0 h-px rounded-full bg-f0-foreground";
/**
 * Full-width separator at the bottom of the primary container (mirrors web's border div).
 */
export declare const f0TabSeparatorClass = "absolute bottom-0 left-0 right-0 h-px bg-f0-border";
//# sourceMappingURL=F0Tabs.styles.d.ts.map