export declare const VEL_X = 60;
export declare const VEL_Y = 40;
export declare const SPIN_MS = 2000;
export declare const PAUSE_MS = 500;
export declare const PRECESSION_MS = 12000;
export type Quad = {
    points: string;
    color: string;
    avgZ: number;
};
type GridPoint = {
    x: number;
    y: number;
    z: number;
    t: number;
};
export type GlobeSpinState = {
    quads: Quad[];
    grid: GridPoint[];
};
export declare function easeInOutCubic(t: number): number;
export declare const QUAD_POOL_SIZE: number;
export declare function createGlobeSpinState(): GlobeSpinState;
/**
 * Build one frame of the globe-spin animation into a caller-owned state pool.
 * Returns the count of active (non-culled) quads — those occupy `state.quads[0..count)`
 * after the call, sorted by ascending `avgZ` (back-to-front).
 *
 * @param state        Pool created by `createGlobeSpinState()`. Reused across frames.
 * @param progress     Eased 0..1 within the current spin cycle.
 * @param size         Pixel size of the spinner.
 * @param axisPhase    Monotonic 0..1 that wraps every PRECESSION_MS. Drives a
 *                     gentle precession of the rotation axis so the loop never
 *                     visually repeats.
 */
export declare function buildFrameInto(state: GlobeSpinState, progress: number, size: number, axisPhase: number): number;
export {};
