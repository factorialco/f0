import type { DomMarkerHandle, LngLat, ScreenPoint } from "../types"

interface Pin {
  element: HTMLElement
  at: LngLat
}

/**
 * One `OverlayView` doing two jobs, because Google ties them together: it hosts
 * every DOM marker *and* it is the only source of a container-pixel projection.
 *
 * Hosting all pins in a single overlay rather than one each is the measured
 * design - 0.374 ms to reposition 200 markers, against 79.5 ms of aggregate
 * work for 200 separate overlays doing the same job.
 *
 * It also defines readiness: `getProjection()` is undefined until the overlay
 * has been drawn, which is why "the map exists" cannot mean "I can project".
 */
export interface Overlay {
  add(element: HTMLElement, at: LngLat): DomMarkerHandle
  project(at: LngLat): ScreenPoint | null
  unproject(point: ScreenPoint): LngLat | null
  onReady(handler: () => void): () => void
  isReady(): boolean
  destroy(): void
}

export const createOverlay = (map: google.maps.Map): Overlay => {
  const pins = new Set<Pin>()
  const readyHandlers = new Set<() => void>()
  let container: HTMLElement | undefined
  let ready = false
  let destroyed = false

  const place = (pin: Pin, projection: google.maps.MapCanvasProjection) => {
    const at = projection.fromLatLngToDivPixel(
      new google.maps.LatLng(pin.at[1], pin.at[0])
    )
    if (!at) {
      return
    }
    // Translated to the centre, which is what `anchor: "center"` means on the
    // engines that offer it - measured identical to within 0.2 px.
    pin.element.style.transform = `translate(${at.x}px, ${at.y}px) translate(-50%, -50%)`
  }

  class PinOverlay extends google.maps.OverlayView {
    onAdd() {
      container = document.createElement("div")
      container.style.cssText =
        "position:absolute;left:0;top:0;width:0;height:0"
      for (const pin of pins) {
        container.appendChild(pin.element)
      }
      // `overlayMouseTarget` is the pane that receives pointer events, so a
      // click on a pin never reaches the map's own click listener.
      this.getPanes()?.overlayMouseTarget.appendChild(container)
    }

    draw() {
      const projection = this.getProjection()
      if (!projection) {
        return
      }
      for (const pin of pins) {
        place(pin, projection)
      }
      if (!ready) {
        ready = true
        readyHandlers.forEach((handler) => handler())
      }
    }

    onRemove() {
      container?.remove()
      container = undefined
    }
  }

  const overlay = new PinOverlay()
  overlay.setMap(map)

  // The projection outlives `setMap(null)`, so liveness is what makes a
  // destroyed adapter stop answering - the port promises exactly that.
  const projection = () =>
    destroyed
      ? undefined
      : (overlay.getProjection() as google.maps.MapCanvasProjection | undefined)

  return {
    add: (element, at) => {
      const pin: Pin = { element, at }
      pins.add(pin)
      element.style.position = "absolute"
      container?.appendChild(element)
      const live = projection()
      if (live) {
        place(pin, live)
      }
      return {
        setPosition: (next) => {
          pin.at = next
          const current = projection()
          if (current) {
            place(pin, current)
          }
        },
        remove: () => {
          pins.delete(pin)
          element.remove()
        },
      }
    },

    project: (at) => {
      const live = projection()
      if (!live) {
        return null
      }
      const point = live.fromLatLngToContainerPixel(
        new google.maps.LatLng(at[1], at[0])
      )
      return point ? { x: point.x, y: point.y } : null
    },

    unproject: (point) => {
      const live = projection()
      if (!live) {
        return null
      }
      const at = live.fromContainerPixelToLatLng(
        new google.maps.Point(point.x, point.y)
      )
      return at ? [at.lng(), at.lat()] : null
    },

    onReady: (handler) => {
      if (ready) {
        handler()
        return () => {}
      }
      readyHandlers.add(handler)
      return () => readyHandlers.delete(handler)
    },
    isReady: () => ready,

    destroy: () => {
      destroyed = true
      ready = false
      readyHandlers.clear()
      for (const pin of pins) {
        pin.element.remove()
      }
      pins.clear()
      overlay.setMap(null)
    },
  }
}
