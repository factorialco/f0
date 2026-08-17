import type maplibregl from "maplibre-gl"
import { useEffect, useState } from "react"

/**
 * Whether the map's zoom is at/above `threshold`. Listens to every `zoom`
 * event (they fire per animation frame) but stores only the derived boolean,
 * so consumers re-render once per threshold crossing - not 60 times a second
 * during a camera animation. (Storing the raw zoom float would defeat React's
 * setState bailout on every frame.)
 */
export const useZoomAtLeast = (
  map: maplibregl.Map | null,
  threshold: number
): boolean => {
  const [atLeast, setAtLeast] = useState(() =>
    map ? map.getZoom() >= threshold : false
  )

  useEffect(() => {
    if (!map) {
      setAtLeast(false)
      return
    }
    const update = () => setAtLeast(map.getZoom() >= threshold)
    update()
    map.on("zoom", update)
    return () => {
      map.off("zoom", update)
    }
  }, [map, threshold])

  return atLeast
}
