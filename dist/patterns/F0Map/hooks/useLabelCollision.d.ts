import { default as maplibregl } from 'maplibre-gl';
import { BaseMapMarkerLabelPlacement, BaseMapMarkerSize } from '../components/internal/BaseMapMarker';
import { F0MapPoint } from '../types';
/** Screen-space rectangle. Shared with the layer's selection-collapse pass. */
export interface Box {
    x: number;
    y: number;
    w: number;
    h: number;
}
export declare const boxesOverlap: (a: Box, b: Box) => boolean;
export declare const measureLabel: (text: string, fontPx: number) => number;
/**
 * Resolved label placement per point id. `null` means no side fits without
 * overlapping another marker or label - the label degrades (hides) and only
 * the marker shows. Merging markers is NOT this layer's job: that's zoom-based
 * clustering, which reacts to marker heads crowding, not labels.
 */
export type LabelPlacements = Record<string, BaseMapMarkerLabelPlacement | null>;
/**
 * Resolves each labeled point's placement so labels avoid other markers' heads
 * and each other. Recomputes on map move/zoom/resize and when points change.
 * Collision handling lives here (not in the marker) because only the map knows
 * every marker's on-screen position.
 */
export declare const useLabelCollision: (map: maplibregl.Map | null, points: F0MapPoint[], size?: BaseMapMarkerSize) => LabelPlacements;
