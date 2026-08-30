import { default as maplibregl } from 'maplibre-gl';
import { WithDataTestIdProps } from '../../lib/data-testid';
import { F0MapStylePair } from './styles';
import { F0MapArc, F0MapPoint, F0MapRoute, F0MapViewport } from './types';
import { F0MapControlLabels } from './components/F0MapControls';
/**
 * Map projection. `"globe"` renders the world as a 3D sphere (adaptive: it
 * eases into a flat mercator view as you zoom in).
 */
export type F0MapProjection = "mercator" | "globe";
/** Imperative handle exposed via `ref`. */
export interface F0MapHandle {
    /** The raw MapLibre instance (escape hatch). `null` until the map has mounted. */
    getMap: () => maplibregl.Map | null;
    /** Center on a marker (and select it). Always animates unless reduced-motion. */
    focusMarker: (id: string) => void;
    /** Frame all markers in view. */
    fitToMarkers: () => void;
    /** Clear the current selection. */
    clearSelection: () => void;
}
export interface F0MapProps extends WithDataTestIdProps {
    /**
     * Points to render as markers. Pass a referentially stable array (memoize
     * it): a new identity per render re-binds the clustering and label-collision
     * listeners. Markers are DOM elements - keep counts at workplace scale
     * (~200); beyond that pan/zoom degrades and a warning is logged.
     */
    markers?: F0MapPoint[];
    /**
     * Polylines drawn through their given coordinates, exactly as provided (no
     * routing is computed - pass server-side / routing-engine output). Rendered
     * as GL lines beneath the markers.
     */
    routes?: F0MapRoute[];
    /**
     * Curved connections between two coordinates (the flight-path look). `F0Map`
     * computes the curve from each arc's `from` / `to`.
     */
    arcs?: F0MapArc[];
    /** Fired when a route line is clicked. Providing it enables hover + click. */
    onRouteClick?: (id: string) => void;
    /** Fired when an arc line is clicked. Providing it enables hover + click. */
    onArcClick?: (id: string) => void;
    /** Controlled selected marker id. */
    selectedMarkerId?: string | null;
    /** Uncontrolled initial selection. */
    defaultSelectedMarkerId?: string | null;
    /** Fired when the selection changes (marker click or background click). */
    onMarkerSelect?: (id: string | null) => void;
    /**
     * Emphasise a marker without selecting it - a separate channel for an
     * external search/reveal. The highlighted marker floats above the rest, keeps
     * its label, and the map flies to it when the id changes. Selection (the
     * grown pin) stays driven by `selectedMarkerId`.
     */
    highlightedId?: string | null;
    /**
     * Frame all markers on load. Defaults to `true` when no `initialViewport` is
     * given, `false` otherwise (an explicit viewport wins).
     */
    fitToMarkers?: boolean;
    /** Initial camera. Defaults to a city-level view. Read once on mount. */
    initialViewport?: F0MapViewport;
    /** Light/dark style pair. Defaults to the f0-themed OpenFreeMap styles. */
    mapStyle?: F0MapStylePair;
    /**
     * Allow pan/zoom. Defaults to `true`. Read on mount: changing it recreates
     * the map (and resets the camera), so treat it as static.
     */
    interactive?: boolean;
    /**
     * Scroll/touch behaviour. `"cooperative"` (default) lets a plain wheel scroll
     * the page and requires Ctrl/⌘ + wheel (or two fingers) to zoom, so an
     * embedded map never traps the page scroll. `"greedy"` zooms on any wheel.
     * Read on mount, like `interactive`.
     */
    gestureHandling?: "cooperative" | "greedy";
    /**
     * Farthest the user can zoom out. Fitted to the viewport when omitted.
     * Read on mount, like `interactive`.
     */
    minZoom?: number;
    /** Closest the user can zoom in. Defaults to `18`. Read on mount. */
    maxZoom?: number;
    /**
     * Show the navigation controls (locate, fit, zoom). Defaults to `true`; only
     * rendered when the map is `interactive`.
     */
    showControls?: boolean;
    /** Override the controls' labels (tooltips / accessible names). */
    controlLabels?: F0MapControlLabels;
    /**
     * Enable the current-location feature. Defaults to `false`, in which case the
     * map never touches geolocation. When `true`, the dot auto-shows only if the
     * browser permission is *already* granted (never prompting on load); the
     * "locate me" control is the only thing that requests permission on demand.
     */
    showCurrentLocation?: boolean;
    /**
     * Edge-to-edge presentation. `false` (default) frames the map as a card -
     * large rounded corners, a secondary border, and controls inset 16px. `true`
     * drops the frame so the map bleeds to its container's edges, with controls
     * inset 24px.
     */
    fullScreen?: boolean;
    /**
     * Map projection. `"mercator"` (default) is the flat web map; `"globe"`
     * renders the world as a 3D sphere at low zoom and eases into mercator as you
     * zoom in - best for a world-scale view. Changing it re-projects live.
     */
    projection?: F0MapProjection;
    /** Show the skeleton instead of the map. */
    loading?: boolean;
    /** Accessible label for the map region. */
    ariaLabel?: string;
    /** @private */
    className?: string;
}
export declare const F0Map: import('react').ForwardRefExoticComponent<F0MapProps & import('react').RefAttributes<F0MapHandle>>;
