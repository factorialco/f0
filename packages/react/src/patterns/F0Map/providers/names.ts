/**
 * A leaf module on purpose: `F0Provider` and the registry both need the name,
 * and neither may pull an engine in to get it.
 */
export type F0MapProvider = "maplibre" | "google"

export const DEFAULT_MAP_PROVIDER: F0MapProvider = "maplibre"
