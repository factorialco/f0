import { useCallback, useEffect, useState } from "react"

// App-wide opt-in flag: once the user grants location for any f0 map, we
// remember it so every map auto-shows their location without re-prompting.
const OPT_IN_KEY = "f0:map:current-location-opt-in"

const readOptIn = (): boolean => {
  try {
    return localStorage.getItem(OPT_IN_KEY) === "1"
  } catch {
    return false
  }
}
const writeOptIn = () => {
  try {
    localStorage.setItem(OPT_IN_KEY, "1")
  } catch {
    // ignore (private mode / storage disabled)
  }
}

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
 * The user's current location via the Geolocation API, with a persisted opt-in
 * so it stays granted across sessions and maps.
 *
 * The location always appears **silently** on mount when it can be fetched
 * without a prompt - i.e. the user has already opted in here, or the browser
 * permission is `granted`. A prompt is only shown on an explicit `request()`
 * (the "locate me" control), or on mount when `promptOnMount` is true.
 */
export const useCurrentLocation = (promptOnMount: boolean): CurrentLocation => {
  const [coords, setCoords] = useState<[number, number] | null>(null)

  const request = useCallback(
    (onLocated?: (coords: [number, number]) => void) => {
      if (typeof navigator === "undefined" || !navigator.geolocation) return
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const next: [number, number] = [
            pos.coords.longitude,
            pos.coords.latitude,
          ]
          setCoords(next)
          writeOptIn()
          onLocated?.(next)
        },
        () => {
          // Denied / unavailable: leave coords null, no dot.
        },
        { enableHighAccuracy: true, timeout: 10_000, maximumAge: 60_000 }
      )
    },
    []
  )

  useEffect(() => {
    if (coords || typeof navigator === "undefined") return
    // The opt-in flag alone isn't enough to fetch: the browser permission may
    // have been revoked since (state back to "prompt"), and calling
    // getCurrentPosition would then show a prompt - breaking the "appears
    // silently" contract. So always confirm with the Permissions API first.
    const query = navigator.permissions?.query({
      name: "geolocation" as PermissionName,
    })
    if (query) {
      query
        .then((status) => {
          // Granted (here or elsewhere) → show silently. Otherwise a prompt is
          // only acceptable when explicitly asked for (`promptOnMount`).
          if (status.state === "granted" || promptOnMount) request()
        })
        .catch(() => {
          if (readOptIn() || promptOnMount) request()
        })
      return
    }
    // No Permissions API (older Safari): the opt-in flag is the best signal we
    // have that permission was granted before.
    if (readOptIn() || promptOnMount) request()
  }, [coords, promptOnMount, request])

  return { coords, request }
}
