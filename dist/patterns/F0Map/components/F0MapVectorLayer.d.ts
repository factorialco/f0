import { Map as MaplibreMap } from 'maplibre-gl';
import { F0MapArc, F0MapRoute } from '../types';
/**
 * Bottom-most line layer id, exported so lower decorations (the
 * current-location dot) can insert themselves beneath the lines.
 */
export declare const LINES_BOTTOM_LAYER_ID = "f0-map-lines-solid";
export interface F0MapVectorLayerProps {
    map: MaplibreMap;
    routes: F0MapRoute[];
    arcs: F0MapArc[];
    isDark: boolean;
    /** Fired when a route line is clicked. Presence enables hover + click. */
    onRouteClick?: (id: string) => void;
    /** Fired when an arc line is clicked. Presence enables hover + click. */
    onArcClick?: (id: string) => void;
}
/**
 * Draws routes and arcs as GL line layers on the map canvas (unlike the DOM
 * markers). One GeoJSON source feeds two layers - solid and dashed, split by
 * the `dashed` flag because `line-dasharray` can't be data-driven per feature.
 * A theme swap (`map.setStyle`) wipes every custom source and layer, so this
 * re-adds them once the swapped style loads, from the latest data held in a
 * ref - the one thing this layer must never get wrong.
 */
export declare const F0MapVectorLayer: ({ map, routes, arcs, isDark, onRouteClick, onArcClick, }: F0MapVectorLayerProps) => null;
