import { ReactNode } from 'react';
/**
 * Dashed, blurred drop target overlaid on the composer — same feel as the AI
 * chat. Purely visual (`pointer-events-none`): the composer itself owns the
 * drag/drop handlers so a drop anywhere on it is captured reliably.
 */
export declare const ChatDropOverlay: ({ visible, }: {
    visible: boolean;
}) => ReactNode;
