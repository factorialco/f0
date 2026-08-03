import { readdirSync, readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"

/**
 * Icons must NOT ship `vector-effect="non-scaling-stroke"`.
 *
 * Chrome regressed the rendering of `non-scaling-stroke` (from ~v149 onward):
 * on high-DPI/Retina displays the stroke paints far too thin, so icons look
 * anemic. F0 icons are inline SVGs whose stroke width is applied via CSS
 * (`stroke-*` tokens), which scales fine without the attribute, so we drop it.
 *
 * The attribute is injected at generation time by the custom `addVectorEffect`
 * plugin in `packages/react/svgo.config.cjs` — which has been removed. This
 * test guards against it being re-added there (or hand-authored back into the
 * motion/animated icons) and slipping past typecheck, lint and build, since the
 * thin-stroke bug only shows up visually in the browser.
 */

const TEST_DIR = path.dirname(fileURLToPath(import.meta.url))
const SRC_DIR = path.resolve(TEST_DIR, "..", "..")

// Directories of SVG-backed components that must stay free of the attribute.
const SCAN_DIRS = [path.join(SRC_DIR, "icons"), path.join(SRC_DIR, "flags")]

const FORBIDDEN = "non-scaling-stroke"

function collectTsx(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "__tests__") continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) collectTsx(full, acc)
    else if (entry.name.endsWith(".tsx")) acc.push(full)
  }
  return acc
}

describe("icons: no non-scaling-stroke", () => {
  const files = SCAN_DIRS.flatMap((dir) => collectTsx(dir))

  it("scans a non-trivial number of icon files", () => {
    // Guards against the glob silently matching nothing and the check passing vacuously.
    expect(files.length).toBeGreaterThan(400)
  })

  it('does not use vector-effect="non-scaling-stroke" in any icon', () => {
    const offenders = files.filter((file) =>
      readFileSync(file, "utf8").includes(FORBIDDEN)
    )

    expect(
      offenders,
      offenders.length === 0
        ? ""
        : `Found "${FORBIDDEN}" in ${offenders.length} icon file(s). ` +
            `Do not ship non-scaling-stroke (it renders too thin on Retina in recent Chrome). ` +
            `If these are generated, check the svgo config in packages/react/svgo.config.cjs.\n` +
            offenders.map((f) => `  - ${path.relative(SRC_DIR, f)}`).join("\n")
    ).toEqual([])
  })
})
