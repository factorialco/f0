/**
 * Storybook-only Connected chat header. Wires `F0AiChatHeader` to the
 * mock runtime (clear, history load) and to the f0 UI provider (open /
 * visualization mode toggles).
 *
 * When `historyEnabled` is true on the provider, mounts the
 * `F0AiChatHistory` dialog backed by the mock runtime's in-memory
 * threads. Selecting a thread swaps the message list to that thread's
 * canned snapshot (`mock.loadThread(id, title)`).
 */
export declare const MockConnectedChatHeader: ({ compact, }?: {
    /** Minimal header (expand + close only) — used when a sidebar owns chat nav. */
    compact?: boolean;
}) => import("react").JSX.Element;
