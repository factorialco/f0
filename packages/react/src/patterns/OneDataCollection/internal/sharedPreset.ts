/**
 * Self-contained, shareable encoding of a view.
 *
 * "Share view" copies a link carrying the whole view (title, description and
 * the full captured config) base64url-encoded in the `dc_shared_view` query
 * param. Opening that link prefills the create-view dialog so the recipient can
 * save it as their own view.
 *
 * base64url (RFC 4648 §5: `-`/`_`, no padding) keeps the blob URL-safe so it
 * survives `URLSearchParams` untouched. Encoding is UTF-8 aware so non-ASCII
 * titles round-trip.
 */

/** The URL query param carrying a shared view payload. */
export const SHARED_PRESET_PARAM = "dc_shared_view"

/** The portion of a view that is shared (everything except its local id). */
export interface SharedPresetPayload {
  label: string
  description?: string
  filter?: unknown
  sortings?: unknown
  grouping?: unknown
  visualization?: number
  settings?: unknown
}

const toBase64Url = (text: string): string => {
  const bytes = new TextEncoder().encode(text)
  let binary = ""
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

const fromBase64Url = (encoded: string): string => {
  const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/")
  const binary = atob(base64)
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

/** Picks the shareable fields off a view and base64url-encodes them. */
export const encodeSharedPreset = (payload: SharedPresetPayload): string => {
  const slim: SharedPresetPayload = {
    label: payload.label,
    description: payload.description,
    filter: payload.filter,
    sortings: payload.sortings,
    grouping: payload.grouping,
    visualization: payload.visualization,
    settings: payload.settings,
  }
  return toBase64Url(JSON.stringify(slim))
}

/**
 * Decodes a `dc_shared_view` value back into a payload. Returns `null` for
 * malformed input (bad base64, non-JSON, or a payload without a string label).
 */
export const decodeSharedPreset = (
  encoded: string | null | undefined
): SharedPresetPayload | null => {
  if (!encoded) return null
  try {
    const parsed = JSON.parse(fromBase64Url(encoded)) as unknown
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      typeof (parsed as { label?: unknown }).label === "string"
    ) {
      return parsed as SharedPresetPayload
    }
    return null
  } catch {
    return null
  }
}

/**
 * Builds an absolute, shareable URL for a preset: the current origin + path
 * with a single `dc_shared_view` param (any existing query is dropped so the
 * link is clean and self-contained). Returns `null` under SSR.
 */
export const buildSharedPresetUrl = (
  payload: SharedPresetPayload
): string | null => {
  if (typeof window === "undefined") return null
  const { origin, pathname } = window.location
  return `${origin}${pathname}?${SHARED_PRESET_PARAM}=${encodeSharedPreset(payload)}`
}
