import { useEffect } from "react"
import type { MapAdapter } from "../../providers/types"

export interface CurrentLocationLayerProps {
  adapter: MapAdapter
  /** The user's `[lng, lat]`. */
  coords: [number, number]
}

/** Hands the adapter the "you are here" position; it owns the dot. */
export const CurrentLocationLayer = ({
  adapter,
  coords,
}: CurrentLocationLayerProps) => {
  useEffect(() => {
    adapter.setCurrentLocation(coords)
  }, [adapter, coords])

  useEffect(() => () => adapter.setCurrentLocation(null), [adapter])

  return null
}

CurrentLocationLayer.displayName = "CurrentLocationLayer"
