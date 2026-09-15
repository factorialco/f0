import { createContext, useContext, useMemo } from "react"
import type { F0MapProvider } from "@/patterns/F0Map/providers/names"
import { DEFAULT_MAP_PROVIDER } from "@/patterns/F0Map/providers/names"

export interface MapContextValue {
  /**
   * Engine every `F0Map` in the app uses unless it names its own. Defaults to
   * `maplibre`: it is keyless, so a library default cannot depend on someone
   * having registered a billing account.
   */
  provider?: F0MapProvider
}

const MapContext = createContext<MapContextValue | null>(null)

export const MapProvider: React.FC<
  { children: React.ReactNode } & MapContextValue
> = ({ children, provider }) => {
  const value = useMemo(() => ({ provider }), [provider])

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

/** The app-level engine, or the library default when nothing is configured. */
export const useMapProvider = (override?: F0MapProvider): F0MapProvider => {
  const context = useContext(MapContext)

  return override ?? context?.provider ?? DEFAULT_MAP_PROVIDER
}
