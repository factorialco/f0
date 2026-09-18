/**
 * Provider-specific settings, supplied once by the app through `MapProvider`.
 *
 * A leaf module for the same reason as `names`: the registry and `F0Provider`
 * both need the shape and neither may pull an engine in to get it.
 */
export interface MapProviderConfig {
  /**
   * Maps JavaScript API key. Required by `google` and ignored by `maplibre`,
   * whose tiles are keyless - which is why `maplibre` is the default: a library
   * default cannot depend on someone having registered a billing account.
   */
  apiKey?: string
}
