/**
 * f0 dark mode is a `.dark` class on any ancestor (html, body, or a dark-island
 * wrapper), so the map can't rely on `prefers-color-scheme`. Same detection
 * pattern as `useChartTheme` in F0DataChart and `LocationMap`: `closest(".dark")`
 * plus a MutationObserver on every ancestor's `class` attribute.
 *
 * Returns a callback ref (attach it to the container) plus the flag. A plain
 * `RefObject` effect would run before the element exists when the map mounts
 * behind the `loading` skeleton and never re-run, leaving the theme stuck.
 */
export declare const useIsDarkContext: () => {
    containerRef: (element: HTMLDivElement | null) => void;
    isDark: boolean;
};
