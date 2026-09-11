import { baseColors } from "@factorialco/f0-core"
import type maplibregl from "maplibre-gl"
import type { GeoJSONSource } from "maplibre-gl"
import type { LngLat } from "../types"
import { LINES_BOTTOM_LAYER } from "./lines"

const SOURCE = "f0-current-location"
const LAYER = "f0-current-location"

// Same geometry as the DOM dot it replaced: 22px halo, ~10.5px solid centre.
const CENTER_R = 5.3
const HALO_W = 11 - CENTER_R

export interface CurrentLocationController {
  set(at: LngLat | null): void
  destroy(): void
}

/**
 * The "you are here" dot as a GL circle rather than a DOM marker, so it sits
 * under the lines and under every marker (DOM always paints above the canvas).
 * Not clickable, never clustered, and fixed across themes - the hues come from
 * the core tokens because MapLibre cannot read CSS variables.
 */
export const createCurrentLocation = (
  map: maplibregl.Map
): CurrentLocationController => {
  let at: LngLat | null = null

  const data = () => ({
    type: "Feature" as const,
    properties: {},
    geometry: { type: "Point" as const, coordinates: at ?? [0, 0] },
  })

  const remove = () => {
    if (!map.style) {
      return
    }
    if (map.getLayer(LAYER)) {
      map.removeLayer(LAYER)
    }
    if (map.getSource(SOURCE)) {
      map.removeSource(SOURCE)
    }
  }

  const sync = () => {
    if (!map.style) {
      return
    }
    if (!at) {
      remove()
      return
    }
    if (map.isStyleLoaded() && !map.getSource(SOURCE)) {
      map.addSource(SOURCE, { type: "geojson", data: data() })
      map.addLayer(
        {
          id: LAYER,
          type: "circle",
          source: SOURCE,
          paint: {
            "circle-radius": CENTER_R,
            "circle-color": `hsl(${baseColors.malibu[60]})`,
            "circle-stroke-width": HALO_W,
            "circle-stroke-color": `hsl(${baseColors.malibu[50]})`,
            "circle-stroke-opacity": 0.3,
          },
        },
        // Under the lines when they exist, else straight on the basemap.
        map.getLayer(LINES_BOTTOM_LAYER) ? LINES_BOTTOM_LAYER : undefined
      )
    }
    const source = map.getSource(SOURCE) as GeoJSONSource | undefined
    source?.setData(data())
  }

  map.on("load", sync)
  map.on("style.load", sync)
  map.on("styledata", sync)

  return {
    set: (next) => {
      at = next
      sync()
    },
    destroy: () => {
      map.off("load", sync)
      map.off("style.load", sync)
      map.off("styledata", sync)
      remove()
    },
  }
}
