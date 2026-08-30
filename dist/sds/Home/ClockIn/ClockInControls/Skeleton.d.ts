import { ClockInControlsVariant } from './index';
type ClockInControlsSkeletonProps = {
    variant?: ClockInControlsVariant;
    canSeeGraph?: boolean;
    canShowLocation?: boolean;
    /** Whether a project picker is coming — not merely allowed. */
    canShowProject?: boolean;
};
/**
 * The placeholder `ClockInControls` draws while `loading`.
 *
 * It is shaped like the variant it stands in for — same rows, same heights, the
 * ring's 160px box or the rail's 6px line — so the tile fills in with its data
 * instead of changing shape under it. Which controls are coming is honoured for
 * the same reason: a placeholder for a graph or a picker that will never arrive
 * is a placeholder that lies about the height.
 */
export declare function ClockInControlsSkeleton({ variant, canSeeGraph, canShowLocation, canShowProject, }: ClockInControlsSkeletonProps): import("react").JSX.Element;
export {};
