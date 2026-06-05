/**
 * Derives a stable storage key from a URL pathname for OneDataCollections that
 * don't supply an explicit `id`.
 *
 * The "auto/" prefix makes the source obvious when inspecting localStorage and
 * keeps these keys from colliding with intentional, consumer-chosen ids. The
 * trailing `v1` segment satisfies the `name/version` storage-key contract
 * enforced by `validateStorageKey`.
 *
 * **Pathname only** — query and hash are excluded so the key stays stable
 * across filter/sorting/preset changes (which encode themselves into `dc_*`
 * params and would otherwise change the key on every interaction).
 *
 * **Collision caveat:** two unidentified OneDataCollections mounted on the
 * same path will share this key and clobber each other's persisted state.
 * Give at least one of them an explicit `id` when running side-by-side.
 */
const FALLBACK_KEY_VERSION = "v1"

export function deriveFallbackStorageKey(pathname: string): string {
  // Strip the leading "/" then percent-encode (so non-ASCII or unusual chars
  // don't break the key). The full pathname becomes one URL-safe slug — the
  // last segment stays the "name/version" required version marker.
  const trimmed = pathname.replace(/^\/+/, "")
  const slug = encodeURIComponent(trimmed) || "root"
  return `auto/${slug}/${FALLBACK_KEY_VERSION}`
}
