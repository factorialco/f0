import { ZoomLevel, ZoomPreset, ZoomThresholds } from '../types';
interface UseGraphZoomLevelOptions {
    preset?: ZoomPreset;
    thresholds?: ZoomThresholds;
    hysteresis?: number;
}
export declare function useGraphZoomLevel(zoomFactor: number, options?: UseGraphZoomLevelOptions): ZoomLevel;
export {};
