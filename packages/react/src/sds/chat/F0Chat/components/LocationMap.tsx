import "maplibre-gl/dist/maplibre-gl.css"

import maplibregl from "maplibre-gl"
import {
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react"

/**
 * OpenFreeMap vector tiles (openfreemap.org): keyless, unlimited and free for
 * commercial use (OSM data). `positron` is the clean, WhatsApp-like style;
 * `fiord` is the dark-mode counterpart — blue-gray rather than pure black.
 */
const LIGHT_STYLE_URL = "https://tiles.openfreemap.org/styles/positron"
const DARK_STYLE_URL = "https://tiles.openfreemap.org/styles/dark"
const ZOOM = 15

/**
 * Dark mode is a `.dark` class on any ancestor (html, body, or a dark-island
 * wrapper), so the map can't rely on `prefers-color-scheme`. Same detection
 * pattern as `useChartTheme` in F0DataChart: `closest(".dark")` plus a
 * MutationObserver on every ancestor's class attribute.
 */
const useIsDarkContext = (
  containerRef: RefObject<HTMLDivElement | null>
): boolean => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const element = containerRef.current
    if (!element) return

    const refresh = () => setIsDark(element.closest(".dark") !== null)
    refresh()

    const observer = new MutationObserver(refresh)
    for (
      let ancestor: Element | null = element;
      ancestor;
      ancestor = ancestor.parentElement
    ) {
      observer.observe(ancestor, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }
    return () => observer.disconnect()
  }, [containerRef])

  return isDark
}

/**
 * Non-interactive vector map centered on a point. Kept in its own module so
 * maplibre-gl (heavy) lands in a lazy chunk, fetched only when a location
 * attachment actually renders — `ChatLocationAttachment` loads it via
 * `React.lazy`. Default export required by `lazy()`.
 */
const LocationMap = ({
  latitude,
  longitude,
}: {
  latitude: number
  longitude: number
}): ReactNode => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const isDark = useIsDarkContext(containerRef)
  const styleUrl = isDark ? DARK_STYLE_URL : LIGHT_STYLE_URL

  // The creation effect must not depend on the theme (it would tear the map
  // down on toggle), so it reads the current style through a ref.
  const styleUrlRef = useRef(styleUrl)
  styleUrlRef.current = styleUrl
  const appliedStyleUrlRef = useRef<string | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    appliedStyleUrlRef.current = styleUrlRef.current
    const map = new maplibregl.Map({
      container,
      style: styleUrlRef.current,
      center: [longitude, latitude],
      zoom: ZOOM,
      interactive: false,
      // The card renders its own "© OpenStreetMap" note (ODbL attribution).
      attributionControl: false,
    })
    mapRef.current = map
    return () => {
      mapRef.current = null
      map.remove()
    }
  }, [latitude, longitude])

  useEffect(() => {
    const map = mapRef.current
    if (!map || appliedStyleUrlRef.current === styleUrl) return
    appliedStyleUrlRef.current = styleUrl
    map.setStyle(styleUrl)
  }, [styleUrl])

  return (
    <div
      ref={containerRef}
      className="h-full w-full"
      data-testid="chat-location-map"
    />
  )
}

export default LocationMap
