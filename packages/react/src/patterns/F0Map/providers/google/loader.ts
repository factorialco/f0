const CALLBACK = "__f0GoogleMapsReady"

let loading: Promise<void> | undefined

/**
 * Puts the Maps JavaScript API in the page, once per document.
 *
 * Readiness comes from the API's own `callback` parameter, not the script's
 * `onload`: with `onload` the script has arrived but `google.maps` is not
 * populated yet, so `importLibrary` and the constructors are still missing.
 */
export const loadGoogleMapsApi = (apiKey: string): Promise<void> => {
  if (loading) {
    return loading
  }
  loading = new Promise<void>((resolve, reject) => {
    const globals = window as unknown as Record<string, unknown>
    globals[CALLBACK] = () => {
      delete globals[CALLBACK]
      resolve()
    }
    const script = document.createElement("script")
    script.async = true
    script.src =
      "https://maps.googleapis.com/maps/api/js" +
      `?key=${encodeURIComponent(apiKey)}` +
      "&v=weekly&libraries=maps" +
      `&callback=${CALLBACK}`
    script.onerror = () => {
      loading = undefined
      reject(new Error("F0Map: the Google Maps JavaScript API failed to load."))
    }
    document.head.appendChild(script)
  })
  return loading
}
