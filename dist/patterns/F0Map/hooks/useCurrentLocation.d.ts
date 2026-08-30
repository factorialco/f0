export interface CurrentLocation {
    /** The user's `[lng, lat]`, or `null` until located. */
    coords: [number, number] | null;
    /**
     * Ask the browser for the location (prompting for permission if needed).
     * `onLocated` fires once with the coordinates on success.
     */
    request: (onLocated?: (coords: [number, number]) => void) => void;
}
/**
 * The user's current location via the Geolocation API.
 *
 * Gated entirely by `enabled` (the map's `showCurrentLocation` prop): when it
 * is `false` the hook never touches geolocation - no permission query, no
 * fetch, no dot. When enabled, the dot appears on mount only if the browser
 * permission is *already* `granted` (a silent auto-show); the feature never
 * triggers a permission prompt on load. The "locate me" control is the only
 * thing that prompts, via an explicit `request()`.
 */
export declare const useCurrentLocation: (enabled: boolean) => CurrentLocation;
