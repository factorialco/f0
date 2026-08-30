/**
 * One prev/next target. Carry a `url` for full-page detail navigation
 * (renders a link) OR an `onClick` for id-based navigation that swaps content
 * in place — a mounted sidepanel/dialog that never changes the URL (renders a
 * button). `onClick` wins when both are present.
 */
export type NavigationTarget = {
    title: string;
    url?: string;
    onClick?: () => void;
};
export type NavigationProps = {
    previous?: NavigationTarget;
    next?: NavigationTarget;
    counter?: {
        current: number;
        total: number;
    };
};
export declare function PageNavigation({ previous, next, counter }: NavigationProps): import("react").JSX.Element;
