import { ReactNode } from 'react';
/**
 * Transcript-safe text clamp: pure CSS with a native `title` for overflowed
 * text. Mirrors OneEllipsis's visual classes, but skips its mount-time
 * measurement (getComputedStyle + scrollWidth force a layout) and its
 * re-parenting into a tooltip on overflow (a DOM remount) — per instance,
 * multiplied by every quote/link card mounting during a scroll pass.
 */
export declare const ClampText: ({ children, className, lines, }: {
    /** Only strings — the full text doubles as the hover title. */
    children: string;
    className?: string;
    lines?: number;
}) => ReactNode;
