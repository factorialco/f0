import { F0MapControlsProps } from './types';
/**
 * The map's navigation toolbar - locate, fit, zoom in/out - as a vertical stack
 * of outline icon buttons. Presentational and engine-free: F0Map wires the
 * callbacks to the MapLibre instance and positions this overlay. Mirrors
 * F0GraphControls so the two spatial patterns share one control language.
 */
export declare const F0MapControls: import('react').ForwardRefExoticComponent<F0MapControlsProps & import('react').RefAttributes<HTMLDivElement>>;
