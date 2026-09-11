import type { MapProviderConfig } from "./config"
import type { F0MapProvider } from "./names"
import type { MapAdapterFactory } from "./types"

/**
 * Each engine behind its own dynamic import, so a consumer loads the one it
 * asked for and never both. A static import would put every engine in the
 * bundle of a consumer that renders no map at all.
 */
const LOADERS: Record<
  F0MapProvider,
  (config?: MapProviderConfig) => Promise<MapAdapterFactory>
> = {
  maplibre: () =>
    import("./maplibre").then((module) => module.createMaplibreAdapter),
  // Google needs its script in the page before a map can be constructed, so the
  // loader resolves only once the API is up - which is what keeps the factory
  // itself synchronous for every engine.
  google: (config) =>
    import("./google").then((module) => module.loadGoogleAdapter(config)),
}

const loading = new Map<F0MapProvider, Promise<MapAdapterFactory>>()

/** Memoised: a second map on the same provider reuses the first load. */
export const loadMapAdapterFactory = (
  provider: F0MapProvider,
  config?: MapProviderConfig
): Promise<MapAdapterFactory> => {
  const started = loading.get(provider)
  // Keyed on the provider alone: the config is app-wide, so a second map cannot
  // meaningfully ask for the same engine on different terms.
  if (started) {
    return started
  }
  // Forgotten if it rejects: a memoised failure would make a transient one -
  // a dropped network, a script blocked once - permanent for the session.
  const load = LOADERS[provider](config).catch((error: unknown) => {
    loading.delete(provider)
    throw error
  })
  loading.set(provider, load)
  return load
}
