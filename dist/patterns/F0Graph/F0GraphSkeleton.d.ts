export interface F0GraphSkeletonProps {
    /** Number of child placeholders rendered below the root. */
    childrenCount?: number;
    /** Render the metadata pill under each card (mirrors `reserveTagRow`). */
    showTags?: boolean;
    className?: string;
}
/**
 * Loading placeholder that mirrors the org tree about to appear: a root node
 * with its metadata pill, the connecting bus, and a row of child nodes (each
 * with a pill and an expander), so the skeleton matches the real shape.
 */
export declare const F0GraphSkeleton: ({ childrenCount, showTags, className, }: F0GraphSkeletonProps) => import("react").JSX.Element;
