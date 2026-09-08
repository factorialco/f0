import type { F0MapProvider } from "./names"
import type { MapAdapterFactory } from "./types"

/** Dynamic, so a consumer never bundles an engine it did not ask for. */
const LOADERS: Record<F0MapProvider, () => Promise<MapAdapterFactory>> = {
  maplibre: () =>
    import("./maplibre").then((module) => module.createMaplibreAdapter),
}

const loading = new Map<F0MapProvider, Promise<MapAdapterFactory>>()

/** Memoised: a second map on the same provider reuses the first load. */
export const loadMapAdapterFactory = (
  provider: F0MapProvider
): Promise<MapAdapterFactory> => {
  const started = loading.get(provider)
  if (started) {
    return started
  }
  const load = LOADERS[provider]()
  loading.set(provider, load)
  return load
}
