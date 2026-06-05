/**
 * Derives a stable, human-readable id for a custom preset from its title.
 *
 * The id doubles as the `dc_preset` URL value, so we keep it as the plain title
 * (whitespace trimmed and collapsed to single spaces). Spaces render as `+` in
 * the URL via standard query encoding (e.g. `My View` → `dc_preset=My+View`)
 * and round-trip back to spaces on read — so the cached id and the URL stay in
 * sync without any literal `+` (which would percent-encode to `%2B`).
 *
 * Collisions with existing preset ids (developer or custom) are resolved by
 * appending an incrementing ` 2`, ` 3`, … suffix.
 */
export function derivePresetId(
  title: string,
  existingIds: Iterable<string>
): string {
  const base = title.trim().replace(/\s+/g, " ") || "preset"
  const taken = new Set(existingIds)
  if (!taken.has(base)) return base

  let n = 2
  while (taken.has(`${base} ${n}`)) n++
  return `${base} ${n}`
}
