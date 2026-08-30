/**
 * Storybook-only Connected chat input. Bridges `F0AiChatTextArea` to the
 * mock runtime — extracts plain text from the submit payload and forwards
 * to `mock.sendMessage()`. Mirrors factorial's production wrapper.
 */
export declare const MockConnectedChatInput: () => import("react").JSX.Element | null;
