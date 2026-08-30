import { RefObject } from 'react';
type ContainerSize = {
    width: number;
    height: number;
};
/**
 * Tracks the content dimensions of a container element via `ResizeObserver`.
 *
 * Returns `{ width: 0, height: 0 }` until the element mounts. Updates whenever
 * the element is resized, so downstream computations (like axis label intervals)
 * react to layout changes automatically.
 */
export declare function useContainerSize(ref: RefObject<HTMLElement | null>): ContainerSize;
export {};
