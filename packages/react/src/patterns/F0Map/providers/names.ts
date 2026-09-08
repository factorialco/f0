/**
 * Which rendering engine a style or a map is written for. A leaf module on
 * purpose: `F0Provider` and the registry both need the name, and neither may
 * pull an engine (or F0Map itself) in to get it.
 *
 * The tag exists so a style built for one engine can never be handed to
 * another: the shapes are not interchangeable, and without it the mismatch
 * would only surface at runtime.
 */
export type F0MapProvider = "maplibre"

export const DEFAULT_MAP_PROVIDER: F0MapProvider = "maplibre"
