import { baseColors } from "@factorialco/f0-core"
import type { GeoJSONSource, Map as MaplibreMap } from "maplibre-gl"
import { useEffect, useRef } from "react"

import { LINES_BOTTOM_LAYER_ID } from "../F0MapVectorLayer"

// The "you are here" dot, drawn as a GL circle layer - NOT a DOM marker - so it
// sits underneath everything else on the map: routes and arcs (inserted below
// their casing layer) and every DOM marker/cluster (the DOM always paints above
// the canvas). It isn't clickable, has no pin/label/selection, and never
// clusters. A solid malibu.60 centre with a translucent malibu.50 stroke as the
// single halo. Hues come from the core tokens (no per-hue CSS vars exist, and
// MapLibre can't read CSS vars anyway); fixed across themes, like the old dot.
const SOURCE = "f0-current-location"
const LAYER = "f0-current-location"

// Same geometry as the previous DOM dot: 22px halo, ~10.5px solid centre.
const CENTER_R = 5.3
const HALO_W = 11 - CENTER_R

export interface CurrentLocationLayerProps {
  map: MaplibreMap
  /** The user's `[lng, lat]`. */
  coords: [number, number]
}

export const CurrentLocationLayer = ({
  map,
  coords,
}: CurrentLocationLayerProps) => {
  const coordsRef = useRef(coords)
  coordsRef.current = coords

  // Create the source + layer; re-add after a theme swap (`setStyle` wipes
  // custom layers). Mirrors F0MapVectorLayer's re-add pattern.
  useEffect(() => {
    const data = () => ({
      type: "Feature" as const,
      properties: {},
      geometry: { type: "Point" as const, coordinates: coordsRef.current },
    })
    const ensure = () => {
      if (!map.isStyleLoaded() || map.getSource(SOURCE)) return
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
        // Under the route/arc lines when they exist; otherwise on top of the
        // basemap (still under every DOM marker).
        map.getLayer(LINES_BOTTOM_LAYER_ID) ? LINES_BOTTOM_LAYER_ID : undefined
      )
    }
    const sync = () => {
      // A render can hand this effect a map that was just `remove()`d (its
      // replacement arrives on the next render); every style accessor throws
      // on it, so bail - the fresh map re-runs this effect from scratch.
      if (!map.style) return
      ensure()
      const source = map.getSource(SOURCE) as GeoJSONSource | undefined
      source?.setData(data())
    }
    sync()
    // `styledata` alone misses the "style finished loading" moment (see
    // F0MapVectorLayer) - `load` / `style.load` are the ready signals.
    map.on("load", sync)
    map.on("style.load", sync)
    map.on("styledata", sync)
    return () => {
      map.off("load", sync)
      map.off("style.load", sync)
      map.off("styledata", sync)
      // After `map.remove()` the style is gone and even `getLayer` throws
      // (it dereferences `map.style`), so bail before touching anything.
      if (!map.style) return
      if (map.getLayer(LAYER)) map.removeLayer(LAYER)
      if (map.getSource(SOURCE)) map.removeSource(SOURCE)
    }
  }, [map])

  // Follow coordinate updates. Same dead-map guard as `sync`.
  useEffect(() => {
    if (!map.style) return
    const source = map.getSource(SOURCE) as GeoJSONSource | undefined
    source?.setData({
      type: "Feature",
      properties: {},
      geometry: { type: "Point", coordinates: coords },
    })
  }, [map, coords])

  return null
}

CurrentLocationLayer.displayName = "CurrentLocationLayer"
