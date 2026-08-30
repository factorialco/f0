import { default as maplibregl } from 'maplibre-gl';
/**
 * Whether the map's zoom is at/above `threshold`. Listens to every `zoom`
 * event (they fire per animation frame) but stores only the derived boolean,
 * so consumers re-render once per threshold crossing - not 60 times a second
 * during a camera animation. (Storing the raw zoom float would defeat React's
 * setState bailout on every frame.)
 */
export declare const useZoomAtLeast: (map: maplibregl.Map | null, threshold: number) => boolean;
