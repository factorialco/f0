import { useEffect, useState } from "react"
import type { MapAdapter } from "../providers/types"

/**
 * Whether the map's zoom is at/above `threshold`. Listens to every `zoom`
 * event (they fire per animation frame) but stores only the derived boolean,
 * so consumers re-render once per threshold crossing - not 60 times a second
 * during a camera animation. (Storing the raw zoom float would defeat React's
 * setState bailout on every frame.)
 */
export const useZoomAtLeast = (
  adapter: MapAdapter | null,
  threshold: number
): boolean => {
  const [atLeast, setAtLeast] = useState(() =>
    adapter ? adapter.getZoom() >= threshold : false
  )

  useEffect(() => {
    if (!adapter) {
      setAtLeast(false)
      return
    }
    const update = () => setAtLeast(adapter.getZoom() >= threshold)
    update()
    return adapter.on("zoom", update)
  }, [adapter, threshold])

  return atLeast
}
