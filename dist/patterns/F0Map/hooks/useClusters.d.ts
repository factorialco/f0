import { default as maplibregl } from 'maplibre-gl';
import { F0MapPoint } from '../types';
export interface F0MapClusterData {
    id: string;
    /** Centroid `[lng, lat]` of the clustered points. */
    coordinates: [number, number];
    count: number;
    pointIds: string[];
    /** Bounding box of the leaves, for zoom-to-expand on click. */
    bounds: [[number, number], [number, number]];
}
export interface F0MapClusterResult {
    clusters: F0MapClusterData[];
    singles: F0MapPoint[];
}
/**
 * Dependency-free screen-space clustering: points whose projected positions
 * fall within `radius` px of each other at the current zoom are grouped. It
 * recomputes on move/zoom/resize, so clusters split apart as you zoom in. A
 * greedy single pass — good for workplace-scale datasets; swap for supercluster
 * if point counts grow into the thousands.
 *
 * Two-tier sensitivity: a lone marker only pairs off with another when they are
 * nearly touching (`radius`), but once a cluster has formed it keeps absorbing
 * points within the looser `clusterRadius`. This keeps individual markers
 * distinct while still gathering the rest of a dense pocket into one pile.
 */
export declare const useClusters: (map: maplibregl.Map | null, points: F0MapPoint[], enabled: boolean, radius?: number, clusterRadius?: number) => F0MapClusterResult;
