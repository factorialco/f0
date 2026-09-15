import type { LngLat, MapLine } from "../types"

interface Drawn {
  line: MapLine
  polyline: google.maps.Polyline
  listeners: google.maps.MapsEventListener[]
}

const path = (coordinates: LngLat[]) =>
  coordinates.map(([lng, lat]) => ({ lat, lng }))

const options = (line: MapLine, hovered: boolean) => ({
  strokeColor: (hovered && line.hover?.color) || line.color,
  strokeWeight: (hovered && line.hover?.width) || line.width,
  strokeOpacity: line.dashed
    ? 0
    : ((hovered ? line.hover?.opacity : undefined) ?? line.opacity),
  // Google has no dash array on a stroke: a dashed line is an invisible stroke
  // carrying repeated dot symbols, spaced to match MapLibre's [1.5, 2.8].
  icons: line.dashed
    ? [
        {
          icon: {
            path: "M 0,-1 0,1",
            strokeOpacity:
              (hovered ? line.hover?.opacity : undefined) ?? line.opacity,
            strokeWeight: (hovered && line.hover?.width) || line.width,
            scale: 1,
          },
          offset: "0",
          repeat: `${((hovered && line.hover?.width) || line.width) * 2.9}px`,
        },
      ]
    : undefined,
})

export interface LinesController {
  set(lines: MapLine[], onClick?: (id: string) => void): void
  destroy(): void
}

/**
 * Routes and arcs as one `Polyline` each. Google has no data-driven paint, so
 * hover is a restyle of the object rather than a feature-state expression.
 */
export const createLines = (map: google.maps.Map): LinesController => {
  let drawn: Drawn[] = []

  const clear = () => {
    for (const item of drawn) {
      item.listeners.forEach((listener) => listener.remove())
      item.polyline.setMap(null)
    }
    drawn = []
  }

  return {
    set: (lines, onClick) => {
      clear()
      drawn = lines.map((line) => {
        const polyline = new google.maps.Polyline({
          map,
          path: path(line.coordinates),
          clickable: Boolean(onClick),
          ...options(line, false),
        })
        const listeners: google.maps.MapsEventListener[] = []
        if (onClick) {
          listeners.push(
            polyline.addListener("mouseover", () => {
              polyline.setOptions(options(line, true))
              map.setOptions({ draggableCursor: "pointer" })
            }),
            polyline.addListener("mouseout", () => {
              polyline.setOptions(options(line, false))
              map.setOptions({ draggableCursor: null })
            }),
            polyline.addListener("click", () => onClick(line.id))
          )
        }
        return { line, polyline, listeners }
      })
    },
    destroy: clear,
  }
}
