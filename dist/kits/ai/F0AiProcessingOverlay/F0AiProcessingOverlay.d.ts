import { ReactNode } from 'react';
export interface F0AiProcessingOverlayProps {
    /**
     * When `true`, the wrapped content is blurred and locked
     * (`pointer-events-none`) and the floating status pill is shown over it.
     */
    active: boolean;
    /**
     * Pill label. Defaults to the translated "Applying changes"
     * (`ai.applyingChanges`).
     */
    label?: string;
    /** Extra classes for the wrapper element. */
    className?: string;
    /** The panel/canvas content the assistant is editing. */
    children: ReactNode;
}
/**
 * Wraps a panel/canvas that F0AiChat is regenerating. While `active`, the
 * content blurs and stops receiving pointer events, and a centered pill — the
 * One icon plus an "Applying changes" label — floats over it, so the user gets
 * clear feedback that the surface is being updated and shouldn't be edited.
 *
 * Mirrors the survey form-builder "applying changes" affordance, lifted into
 * the F0AiChat family so any surface paired with the chat can reuse it.
 */
export declare const F0AiProcessingOverlay: import('react').MemoExoticComponent<({ active, label, className, children, }: F0AiProcessingOverlayProps) => import("react").JSX.Element>;
