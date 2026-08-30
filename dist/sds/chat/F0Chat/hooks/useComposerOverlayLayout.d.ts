/**
 * Keeps transcript spacing in sync with the floating composer without routing
 * its changing height through React or re-rendering Virtuoso.
 */
export declare const useComposerOverlayLayout: (enabled: boolean) => {
    shellRef: import('react').RefObject<HTMLDivElement>;
    composerOverlayRef: import('react').RefObject<HTMLDivElement>;
};
