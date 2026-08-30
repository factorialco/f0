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
export declare const SHARED_PRESET_PARAM = "dc_shared_view";
/** The portion of a view that is shared (everything except its local id). */
export interface SharedPresetPayload {
    label: string;
    description?: string;
    filter?: unknown;
    sortings?: unknown;
    grouping?: unknown;
    visualization?: number;
    settings?: unknown;
}
/** Picks the shareable fields off a view and base64url-encodes them. */
export declare const encodeSharedPreset: (payload: SharedPresetPayload) => string;
/**
 * Decodes a `dc_shared_view` value back into a payload. Returns `null` for
 * malformed input (bad base64, non-JSON, or a payload without a string label).
 */
export declare const decodeSharedPreset: (encoded: string | null | undefined) => SharedPresetPayload | null;
/**
 * Builds an absolute, shareable URL for a preset: the current origin + path
 * with a single `dc_shared_view` param (any existing query is dropped so the
 * link is clean and self-contained). Returns `null` under SSR.
 */
export declare const buildSharedPresetUrl: (payload: SharedPresetPayload) => string | null;
