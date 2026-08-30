/**
 * Narrow read of the AiChat context for components that only need to
 * toggle the chat open/closed (e.g. F0OneSwitch). Reduces the surface
 * those components have on the full provider so future decoupling
 * stays simpler.
 *
 * The switch controls *exclusively* the AI chat: when another view occupies
 * the side panel (`panelContent`), the chat counts as off even though the
 * panel is open — so the toggle reads unchecked. Turning it back on swaps that
 * content out for the chat, opening the panel if it was closed.
 */
export declare function useAiChatToggle(): {
    enabled: boolean;
    open: boolean;
    setOpen: (open: boolean) => void;
};
