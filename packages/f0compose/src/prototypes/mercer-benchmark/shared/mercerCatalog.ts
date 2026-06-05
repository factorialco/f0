/**
 * Mercer role catalog — loaded from a single file so swapping in the real
 * data is a one-line change (replace the import path).
 *
 * The raw JSON has { code, title, description, insufficientData }.
 * We parse code into family + level for display and search.
 */
import type { MercerRole } from "./types"

// ── Swap this import when real data arrives ──────────────────────────
import rawPositions from "./mercer-positions.json"

function parseLevelFromCode(code: string): string {
  const parts = code.split(".")
  const raw = parts[parts.length - 1]
  return raw ?? code
}

function parseFamilyFromTitle(title: string): string {
  const dash = title.indexOf(" - ")
  return dash > 0 ? title.slice(0, dash) : title
}

export const mercerCatalog: MercerRole[] = (
  rawPositions as Array<{
    code: string
    title: string
    description: string
    insufficientData: boolean
  }>
).map((r) => ({
  code: r.code,
  title: r.title,
  family: parseFamilyFromTitle(r.title),
  level: parseLevelFromCode(r.code),
  description: r.description,
}))

export function searchMercerCatalog(
  term: string,
  limit = 20
): MercerRole[] {
  const t = term.toLowerCase().trim()
  const all = t === ""
    ? mercerCatalog
    : mercerCatalog.filter(
        (r) =>
          r.title.toLowerCase().includes(t) ||
          r.code.toLowerCase().includes(t) ||
          r.family.toLowerCase().includes(t)
      )
  return limit > 0 ? all.slice(0, limit) : all
}

export function findMercerRole(code: string): MercerRole | undefined {
  return mercerCatalog.find((r) => r.code === code)
}
