import { Map as MaplibreMap } from 'maplibre-gl';
export interface CurrentLocationLayerProps {
    map: MaplibreMap;
    /** The user's `[lng, lat]`. */
    coords: [number, number];
}
export declare const CurrentLocationLayer: {
    ({ map, coords, }: CurrentLocationLayerProps): null;
    displayName: string;
};
