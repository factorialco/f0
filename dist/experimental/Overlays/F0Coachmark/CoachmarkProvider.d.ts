type CoachmarkProviderProps = {
    children: React.ReactNode;
    /**
     * Selector for the element the panel is portalled into. Defaults to the
     * top-level overlay root, which keeps the coachmark above app content (the
     * ApplicationFrame's `isolate`, the fullscreen AI chat) while staying inside
     * `#f0-layout` so design tokens and the theme class still apply. Falls back to
     * `document.body` when the element is absent.
     */
    portalTarget?: string;
};
/**
 * Renders the coachmark at the head of the queue. Mounted by `F0Provider`, so
 * `coachmarks.open` works from anywhere without a hook or a wrapper component.
 */
export declare const CoachmarkProvider: ({ children, portalTarget, }: CoachmarkProviderProps) => import("react").JSX.Element;
export {};
