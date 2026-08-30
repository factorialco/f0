import { ReactNode } from 'react';
/**
 * Renders the app shell with the AI chat locked open in fullscreen, then drops
 * `children` (the dialog under test) into the main content area. Pair with
 * {@link expectDialogPaintsAboveChat} in a `play` function to assert the dialog
 * stays on top of the chat.
 */
export declare const FullscreenChatFrame: ({ children }: {
    children: ReactNode;
}) => import("react").JSX.Element;
/**
 * Verifies (in a real browser, via the Storybook test runner) that a center /
 * fullscreen dialog paints above the fullscreen AI chat.
 *
 * The dialog escapes the ApplicationFrame isolate by portaling to the
 * top-level `#f0-overlay-root`. We assert that structurally (the dialog lives
 * in the overlay root) and visually: hit-testing the centre of the dialog card
 * returns an element inside the overlay root, so nothing from the chat is
 * painted over it.
 */
export declare function expectDialogPaintsAboveChat({ title, }: {
    title: string;
}): Promise<void>;
