import { default as maplibregl } from 'maplibre-gl';
import { F0MapPoint } from '../types';
export interface F0MapMarkersLayerProps {
    map: maplibregl.Map;
    points: F0MapPoint[];
    selectedId: string | null;
    /** Emphasised (not selected) marker: floats above and keeps its label. */
    highlightedId?: string | null;
    onSelect: (id: string) => void;
}
export declare const F0MapMarkersLayer: ({ map, points, selectedId, highlightedId, onSelect, }: F0MapMarkersLayerProps) => import("react").JSX.Element;
