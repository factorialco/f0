import { ReactNode } from 'react';
import { CanvasContent, CanvasEntityDefinition } from '../canvas/types';
export type F0CanvasPanelProps = {
    /** Current canvas content to render. When null, the panel collapses. */
    content: CanvasContent | null;
    /** Called when the user closes the canvas. */
    onClose: () => void;
    /** Canvas entity registry keyed by `CanvasContent["type"]`. */
    entities?: Record<string, CanvasEntityDefinition<any>>;
    /**
     * Edge the adjacent chat panel docks to. The canvas hugs the seam on the
     * opposite side, so the rounded corner / open border face the chat.
     * Defaults to "right" (chat on the right -> canvas seam on its right).
     */
    side?: "left" | "right";
};
/**
 * Entity-agnostic canvas panel that renders content alongside the chat sidebar.
 *
 * Looks up the entity definition from the `entities` prop using
 * `content.type` and delegates rendering of body and header actions to the
 * entity module. The panel shell handles animation, body scroll area, and
 * refreshKey bookkeeping (auto-increments when `content` changes by identity).
 *
 * Headless: no CopilotKit or `useAiChat()` dependency — the host wires
 * `content`, `onClose` and `entities` directly.
 */
export declare function F0CanvasPanel({ content, onClose, entities, side, }: F0CanvasPanelProps): ReactNode;
export declare namespace F0CanvasPanel {
    var displayName: string;
}
