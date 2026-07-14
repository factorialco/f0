#!/usr/bin/env node

/**
 * Regenerates the React Native icon components from the package's own SVG source.
 *
 * Source of truth: packages/react-native/assets/icons/{app,modules}
 * Output:          packages/react-native/src/icons/{app,modules}
 *
 * The icon source lives INSIDE this package — React Native is independent from
 * @factorialco/f0-core and no longer pulls icons from it.
 *
 * Usage:
 *   pnpm generate-icons          Regenerate src/icons/{app,modules} from the SVG source.
 *   pnpm generate-icons --check  Verify the committed output is in sync (used in CI). Exits 1 on drift.
 *
 * The SVG -> component transform is delegated to @svgr/cli with the exact same
 * flags and .svgrrc.cjs config as before, so the generated components keep the
 * current format byte-for-byte. This script adds the pieces svgr alone does not
 * give us reliably and that used to live as a brittle `sed` chain in package.json:
 *   - removes the RN-incompatible bits svgr leaves behind (SVGSVGElement, xmlns, strokeWidth)
 *   - maps the neutral UI palette to currentColor (via the shared .svgrrc.cjs)
 *   - generates a deterministic, sorted barrel (index.ts)
 *   - detects filename collisions (two SVGs collapsing into one PascalCase component)
 *   - provides a --check mode so the output can never silently go stale
 */

import { execFileSync } from "node:child_process"
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url))
const PKG_DIR = resolve(SCRIPT_DIR, "..")
const REPO_ROOT = resolve(PKG_DIR, "..", "..")
const SVG_SOURCE = resolve(PKG_DIR, "assets/icons")
const OUT_ROOT = resolve(PKG_DIR, "src/icons")
const GROUPS = ["app", "modules"]

const CHECK = process.argv.includes("--check")
const PRUNE = process.argv.includes("--prune")

/**
 * svgr derives the component name from the filename and PascalCases it, which
 * lowercases embedded acronyms (FaceID.svg -> FaceId, TouchID.svg -> TouchId).
 * We keep the original acronym casing for the public component/export name, so
 * map the svgr-produced name back to the intended one.
 */
const NAME_OVERRIDES = { FaceId: "FaceID", TouchId: "TouchID" }

const SVGR_BIN = resolve(PKG_DIR, "node_modules/.bin/svgr")
const OXFMT_BIN = [
  resolve(PKG_DIR, "node_modules/.bin/oxfmt"),
  resolve(REPO_ROOT, "node_modules/.bin/oxfmt"),
].find(existsSync)

/** Files we own inside an icon group directory. */
const isGeneratedFile = (f) => f.endsWith(".tsx") || f === "index.ts"

const listByExt = (dir, ext) =>
  readdirSync(dir)
    .filter((f) => f.endsWith(ext))
    .sort()

/**
 * Post-process a single svgr-generated component so it is valid for
 * react-native-svg and matches the format we ship. This replaces the old
 * `sed` chain. Runs on raw svgr output, before formatting (same order as before).
 */
function fixComponent(code) {
  let out = code
    // svgr --native types the forwarded ref as SVGSVGElement; RN uses the Svg class.
    .replaceAll("SVGSVGElement", "Svg")
    // xmlns is a no-op / invalid on the react-native-svg <Svg> element.
    .replace(/ xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g, "")
    // Stroke width is provided by the consumer, never baked into the icon.
    .replace(/ strokeWidth=\{[^}]*\}/g, "")
    .replace(/ strokeWidth="[^"]*"/g, "")
    // react-native-svg does not support SVG <filter>. svgr drops the element but
    // leaves a dangling `filter="url(#…)"` attribute, an empty <Defs>, an unused
    // Defs import and a notice comment. Strip all of that (was a manual step).
    .replace(/\/\* SVGR has dropped some elements not supported by react-native-svg:[^*]*\*\/\n?/g, "")
    .replace(/ filter="url\([^)]*\)"/g, "")
    .replace(/\s*<Defs>\s*<\/Defs>/g, "")
    .replace(/\s*<Defs\s*\/>/g, "")

  // Drop named react-native-svg imports that are no longer referenced after the
  // cleanup above (e.g. Defs). Non-empty <Defs> with gradients/masks is kept, so
  // its import stays too. The `import type { SvgProps }` line is left untouched.
  out = reconcileSvgImports(out)

  // NOTE: color -> currentColor is intentionally handled by replaceAttrValues in
  // .svgrrc.cjs (the neutral UI palette only). We do NOT blanket-convert every
  // hex, because some icons (Upsell, DropdownDefault/Open, …) are intentionally
  // multi-color with brand colors that must be preserved.
  return out
}

/** Rewrite `import Svg, { A, B } from "react-native-svg"` to only the used names. */
function reconcileSvgImports(code) {
  const importRe = /import Svg, \{([^}]*)\} from "react-native-svg"/
  const match = code.match(importRe)
  if (!match) return code

  const named = match[1]
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
  const used = named.filter((name) => new RegExp(`<${name}[\\s/>]`).test(code))
  if (used.length === named.length) return code

  const replacement = used.length
    ? `import Svg, { ${used.join(", ")} } from "react-native-svg"`
    : `import Svg from "react-native-svg"`
  return code.replace(importRe, replacement)
}

/** Build a stable, alphabetically sorted barrel for a set of component names. */
function buildBarrel(names) {
  return (
    names
      .slice()
      .sort()
      .map((name) => `export { default as ${name} } from "./${name}"`)
      .join("\n") + "\n"
  )
}

/**
 * Generate one group (app | modules) into a fresh temp dir and return it.
 * Caller is responsible for consuming and removing the temp dir.
 */
function generateGroup(group) {
  const srcDir = join(SVG_SOURCE, group)
  if (!existsSync(srcDir)) throw new Error(`Missing SVG source: ${srcDir}`)

  const tmp = mkdtempSync(join(tmpdir(), `f0-icons-${group}-`))
  try {
    const sourceCount = listByExt(srcDir, ".svg").length

    // 1. svgr — identical flags + .svgrrc.cjs to the previous command.
    execFileSync(
      SVGR_BIN,
      [
        "--out-dir",
        tmp,
        "--native",
        "--svg-props",
        "className={props.className}",
        srcDir,
      ],
      { cwd: PKG_DIR, stdio: ["ignore", "ignore", "inherit"] },
    )

    // 1b. Restore intended acronym casing svgr lowercased (FaceId -> FaceID).
    // Done via a non-aliasing temp name so it is correct on case-insensitive
    // filesystems, where `FaceId.tsx` and `FaceID.tsx` are the same file.
    for (const [from, to] of Object.entries(NAME_OVERRIDES)) {
      const fromFile = join(tmp, `${from}.tsx`)
      if (!existsSync(fromFile)) continue
      const fixed = readFileSync(fromFile, "utf8").replaceAll(`Svg${from}`, `Svg${to}`)
      const stash = join(tmp, `__override__${to}`)
      writeFileSync(stash, fixed)
      rmSync(fromFile)
      renameSync(stash, join(tmp, `${to}.tsx`))
    }

    // 2. Post-process every generated component.
    const components = listByExt(tmp, ".tsx").map((f) => f.replace(/\.tsx$/, ""))
    for (const name of components) {
      const file = join(tmp, `${name}.tsx`)
      writeFileSync(file, fixComponent(readFileSync(file, "utf8")))
    }

    // 3. Collision detection — svgr PascalCases filenames, so e.g. link.svg and
    //    Link.svg collapse into one Link.tsx and an icon is silently lost.
    if (components.length < sourceCount) {
      console.warn(
        `⚠️  ${group}: ${sourceCount} source SVGs but ${components.length} components. ` +
          `Some filenames collide after PascalCase — rename the source files in assets/icons/${group}.`,
      )
    }

    return { tmp, components }
  } catch (err) {
    rmSync(tmp, { recursive: true, force: true })
    throw err
  }
}

function readGenerated(dir) {
  const map = new Map()
  if (!existsSync(dir)) return map
  for (const f of readdirSync(dir).filter(isGeneratedFile)) {
    map.set(f, readFileSync(join(dir, f), "utf8"))
  }
  return map
}

/**
 * Finalize a generated group: handle "orphan" components (committed components
 * with no SVG in assets/icons, e.g. FaceID/TouchID), then write the barrel
 * and format. Orphans are preserved by default so regeneration is never a
 * silent breaking change; pass --prune to remove them. Returns the orphan list.
 */
function finalize(tmp, components, outDir) {
  const have = existsSync(outDir)
    ? listByExt(outDir, ".tsx").map((f) => f.replace(/\.tsx$/, ""))
    : []
  const orphans = have.filter((name) => !components.includes(name))

  if (!PRUNE) {
    for (const name of orphans) {
      copyFileSync(join(outDir, `${name}.tsx`), join(tmp, `${name}.tsx`))
    }
  }

  const barrelNames = PRUNE ? components : [...components, ...orphans]
  writeFileSync(join(tmp, "index.ts"), buildBarrel(barrelNames))

  // Format with the repo formatter so output matches the committed style exactly.
  if (OXFMT_BIN) execFileSync(OXFMT_BIN, [tmp], { cwd: PKG_DIR, stdio: "pipe" })

  return orphans
}

function syncInto(outDir, tmp) {
  mkdirSync(outDir, { recursive: true })
  for (const f of readdirSync(outDir).filter(isGeneratedFile)) {
    rmSync(join(outDir, f))
  }
  for (const f of readdirSync(tmp).filter(isGeneratedFile)) {
    copyFileSync(join(tmp, f), join(outDir, f))
  }
}

function diff(outDir, tmp) {
  const want = readGenerated(tmp)
  const have = readGenerated(outDir)
  const files = new Set([...want.keys(), ...have.keys()])
  const changes = []
  for (const f of [...files].sort()) {
    if (!have.has(f)) changes.push({ f, status: "missing (not generated yet)" })
    else if (!want.has(f)) changes.push({ f, status: "stale (no longer in source)" })
    else if (want.get(f) !== have.get(f)) changes.push({ f, status: "changed" })
  }
  return changes
}

let drift = false
for (const group of GROUPS) {
  const outDir = join(OUT_ROOT, group)
  const { tmp, components } = generateGroup(group)
  try {
    const orphans = finalize(tmp, components, outDir)
    if (orphans.length) {
      console.warn(
        `ℹ️  ${group}: ${orphans.length} component(s) with no SVG in assets/icons ` +
          `${PRUNE ? "REMOVED" : "kept (use --prune to remove)"}: ${orphans.join(", ")}`,
      )
    }

    if (CHECK) {
      const changes = diff(outDir, tmp)
      if (changes.length === 0) {
        console.log(`✓ ${group}: in sync (${components.length} icons)`)
      } else {
        drift = true
        console.error(`✗ ${group}: ${changes.length} file(s) out of sync:`)
        for (const { f, status } of changes.slice(0, 25)) {
          console.error(`    ${status.padEnd(28)} ${f}`)
        }
        if (changes.length > 25) console.error(`    …and ${changes.length - 25} more`)
      }
    } else {
      syncInto(outDir, tmp)
      console.log(`✓ ${group}: ${components.length} icons`)
    }
  } finally {
    rmSync(tmp, { recursive: true, force: true })
  }
}

if (CHECK && drift) {
  console.error(
    "\nIcons are out of sync with the SVG source.\n" +
      "Run: pnpm --filter @factorialco/f0-react-native generate-icons",
  )
  process.exit(1)
}
