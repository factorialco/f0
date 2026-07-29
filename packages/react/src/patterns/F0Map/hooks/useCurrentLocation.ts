import { useCallback, useEffect, useState } from "react"

export interface CurrentLocation {
  /** The user's `[lng, lat]`, or `null` until located. */
  coords: [number, number] | null
  /**
   * Ask the browser for the location (prompting for permission if needed).
   * `onLocated` fires once with the coordinates on success.
   */
  request: (onLocated?: (coords: [number, number]) => void) => void
}

/**
 * The user's current location via the Geolocation API.
 *
 * Gated entirely by `enabled` (the map's `showCurrentLocation` prop): when it
 * is `false` the hook never touches geolocation - no permission query, no
 * fetch, no dot. When enabled, the dot appears on mount only if the browser
 * permission is *already* `granted` (a silent auto-show); the feature never
 * triggers a permission prompt on load. The "locate me" control is the only
 * thing that prompts, via an explicit `request()`.
 */
export const useCurrentLocation = (enabled: boolean): CurrentLocation => {
  const [coords, setCoords] = useState<[number, number] | null>(null)

  const request = useCallback(
    (onLocated?: (coords: [number, number]) => void) => {
      if (!enabled) return
      if (typeof navigator === "undefined" || !navigator.geolocation) return
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const next: [number, number] = [
            pos.coords.longitude,
            pos.coords.latitude,
          ]
          setCoords(next)
          onLocated?.(next)
        },
        () => {
          // Denied / unavailable: leave coords null, no dot.
        },
        { enableHighAccuracy: true, timeout: 10_000, maximumAge: 60_000 }
      )
    },
    [enabled]
  )

  useEffect(() => {
    if (!enabled || coords || typeof navigator === "undefined") return
    // Auto-show only when permission is already granted, so enabling the
    // feature never prompts on load - the locate control is the only thing
    // that asks. Without the Permissions API (older Safari) we stay silent
    // rather than risk an unprompted fetch.
    navigator.permissions
      ?.query({ name: "geolocation" as PermissionName })
      .then((status) => {
        if (status.state === "granted") request()
      })
      .catch(() => {
        // No Permissions API: wait for the locate control.
      })
  }, [enabled, coords, request])

  return { coords, request }
}
