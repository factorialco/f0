/**
 * product-usage-scan.mjs
 *
 * Answers "where is this component used?" by scanning local checkouts of
 * `factorialco/factorial` (the product) and `factorialco/factorial-composer`
 * (prototypes) for imports of `@factorialco/f0-react`.
 *
 * Storybook runs in a browser and can't read the filesystem, so the scan runs
 * in the Storybook dev server (Node) and is exposed over a small JSON endpoint
 * (`/f0-product-usage.json`) that the docs page fetches at runtime. The result
 * is cached in-process with a short TTL, so a long Storybook session picks up
 * changes without rescanning on every page view.
 *
 * There is deliberately NO committed snapshot: the numbers are only shown to
 * people who have those repos checked out locally, and are computed from
 * whatever is on their disk right now. On the public (static) Storybook build
 * the endpoint doesn't exist and the docs tag hides itself.
 *
 * Two independent sources, each reporting its own availability:
 *
 * - product  — `factorialco/factorial`, scanning `frontend/src/modules` (the
 *              130-odd feature modules). Reports the number of files that
 *              IMPORT the component and how many modules they span. Counting
 *              imports rather than JSX occurrences means hooks, types and
 *              other non-JSX exports are counted too.
 * - composer — `factorialco/factorial-composer`, scanning `src/projects`.
 *              Reports only WHICH prototypes use the component: prototypes are
 *              throwaway explorations, so their files must never inflate the
 *              product usage numbers.
 *
 * Test, story and mock files are excluded from both.
 *
 * Consumed by:
 * - .storybook/main.ts        → productUsageVitePlugin()
 * - .storybook/ProductUsageTag.tsx → fetch(PRODUCT_USAGE_ENDPOINT)
 */

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { homedir } from "node:os"
import { dirname, join, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"

const scriptsDir = dirname(fileURLToPath(import.meta.url))

/** f0's own source tree — the third usage source (see scanInternalUsage). */
const SRC_DIR = resolve(scriptsDir, "../src")

/** The dev-server route serving the scan result. */
export const PRODUCT_USAGE_ENDPOINT = "/f0-product-usage.json"

/** Path, relative to the product repo root, that we scan. */
export const PRODUCT_SCOPE = join("frontend", "src", "modules")

/** Path, relative to the Composer repo root, holding the prototypes. */
export const COMPOSER_SCOPE = join("src", "projects")

/** How long a scan result is reused before the next request recomputes it. */
const CACHE_TTL_MS = 5 * 60 * 1000

/**
 * Directories never worth walking into. `.claude` matters for the whole-repo
 * scan in particular: it holds git worktrees, i.e. entire second copies of the
 * repo that would double every count.
 */
const SKIP_DIRS = new Set([
  ".cache",
  ".claude",
  ".git",
  ".next",
  ".pnpm-store",
  ".turbo",
  "__mocks__",
  "__snapshots__",
  "__stories__",
  "__tests__",
  "build",
  "coverage",
  "dist",
  "node_modules",
  "storybook-static",
  "tmp",
  "vendor",
])

/** Files that aren't product code (their imports don't count as usage). */
const NON_PRODUCT_FILE = /\.(test|spec|stories|mock|mocks)\.[jt]sx?$/

const SOURCE_FILE = /\.[jt]sx?$/

/**
 * Matches an `import`/`export … from "@factorialco/f0-react[/dist/<entry>]"`
 * statement and captures the clause.
 *
 * The clause pattern excludes quotes and semicolons on purpose: an import
 * clause never contains either, so the lazy match can't run backwards past a
 * preceding statement and swallow it (which `[\s\S]*?` would happily do). It
 * does allow newlines, so multi-line `{ … }` blocks are matched.
 *
 * Every `dist/` entry counts (experimental, ai, sds…), but the asset entries
 * (`/icons/app`, `/flags`) don't — they export SVGs, not documented components.
 */
const F0_IMPORT_RE =
  /\b(?:import|export)\s+([^;'"`]*?)\s*from\s*['"]@factorialco\/f0-react(?:\/dist\/[a-z-]+)?['"]/g

/**
 * Extracts the exported names a source file pulls in from `@factorialco/f0-react`.
 *
 * Handles multi-line clauses, `type` modifiers and `as` aliases (the exported
 * name is kept, not the local alias). Default and namespace imports are
 * ignored — the package has no default export.
 */
export function parseF0Imports(source) {
  const names = new Set()

  for (const match of source.matchAll(F0_IMPORT_RE)) {
    const clause = match[1]
    const braced = clause.match(/\{([^}]*)\}/)
    if (!braced) continue

    for (const raw of braced[1].split(",")) {
      const specifier = raw
        .trim()
        .replace(/^type\s+/, "")
        .split(/\s+as\s+/)[0]
        .trim()
      if (specifier) names.add(specifier)
    }
  }

  return [...names]
}

/**
 * Locates a sibling checkout named `repoName`, in order of preference:
 *   1. `envPath` (explicit opt-in / non-standard layouts)
 *   2. a sibling of this repo (`../<repoName>`)
 *   3. `~/code/<repoName>`
 *
 * A candidate only counts when it contains `marker`, so an unrelated directory
 * of the same name can't be mistaken for the repo. Note that this package may
 * live in a git worktree (`.claude/worktrees/…`), so the sibling candidate is
 * derived from a few levels up rather than assumed.
 */
function resolveSiblingRepo(repoName, marker, envPath) {
  const candidates = []

  if (envPath) candidates.push(resolve(envPath))

  let dir = scriptsDir
  for (let i = 0; i < 8; i++) {
    candidates.push(join(dirname(dir), repoName))
    const parent = dirname(dir)
    if (parent === dir) break
    dir = parent
  }

  candidates.push(join(homedir(), "code", repoName))

  for (const candidate of candidates) {
    if (existsSync(join(candidate, marker))) return candidate
  }

  return null
}

/** Locates a checkout of `factorialco/factorial`, or `null`. */
export function resolveProductRepoRoot(env = process.env) {
  return resolveSiblingRepo("factorial", PRODUCT_SCOPE, env.F0_PRODUCT_REPO)
}

/**
 * Locates a checkout of `factorialco/factorial-it`, or `null`. It ships its
 * own frontend against f0, so its imports count as product usage too.
 */
export function resolveItRepoRoot(env = process.env) {
  return resolveSiblingRepo("factorial-it", "package.json", env.F0_IT_REPO)
}

/** Locates a checkout of `factorialco/factorial-composer`, or `null`. */
export function resolveComposerRepoRoot(env = process.env) {
  return resolveSiblingRepo(
    "factorial-composer",
    COMPOSER_SCOPE,
    env.F0_COMPOSER_REPO
  )
}

/** The `@factorialco/f0-react` version the product is currently on, if readable. */
function readProductF0Version(repoRoot) {
  try {
    const pkg = JSON.parse(
      readFileSync(join(repoRoot, "frontend", "package.json"), "utf8")
    )
    return (
      pkg.dependencies?.["@factorialco/f0-react"] ??
      pkg.devDependencies?.["@factorialco/f0-react"] ??
      null
    )
  } catch {
    return null
  }
}

/** Immediate subdirectory names of `dir`, skipping the noise ones. */
function subdirectories(dir) {
  try {
    return readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && !SKIP_DIRS.has(entry.name))
      .map((entry) => entry.name)
  } catch {
    return []
  }
}

/**
 * Calls `onFile(absolutePath)` for every product source file under `root`,
 * skipping tests, stories, mocks and vendored directories.
 */
function walkSourceFiles(root, onFile) {
  const stack = [root]
  while (stack.length > 0) {
    const dir = stack.pop()
    let entries
    try {
      entries = readdirSync(dir, { withFileTypes: true })
    } catch {
      continue
    }
    for (const entry of entries) {
      const path = join(dir, entry.name)
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) stack.push(path)
        continue
      }
      if (!SOURCE_FILE.test(entry.name)) continue
      if (NON_PRODUCT_FILE.test(entry.name)) continue
      onFile(path)
    }
  }
}

/** The names a source file imports from f0, or `null` when it imports none. */
function f0ImportsOf(path) {
  let source
  try {
    source = readFileSync(path, "utf8")
  } catch {
    return null
  }
  // Cheap pre-filter: the regex is only worth running on files that mention
  // the package at all (roughly 1 in 5).
  if (!source.includes("@factorialco/f0-react")) return null

  const names = parseF0Imports(source)
  return names.length > 0 ? names : null
}

/**
 * The product code to scan: `factorialco/factorial` plus the standalone
 * `factorialco/factorial-it` frontend, whichever are checked out.
 *
 * Only the feature modules are scanned by default — that's where product UI
 * lives, and it gives the module names the docs tag reports. `full` widens the
 * factorial monorepo to everything (backstage, webpage, mobile…), grouped by
 * top-level directory instead.
 *
 * Groups from secondary repos are prefixed with the repo name so a module
 * called `frontend` can't be confused with a factorial feature module.
 */
function consumerSources({ repoRoot, itRepoRoot, full }) {
  const sources = []

  if (repoRoot) {
    sources.push({
      id: "factorial",
      root: repoRoot,
      scope: full ? "." : PRODUCT_SCOPE,
      prefix: "",
    })
  }

  if (itRepoRoot) {
    sources.push({
      id: "factorial-it",
      root: itRepoRoot,
      scope: ".",
      prefix: "factorial-it/",
    })
  }

  return sources
}

/**
 * Scans the product repos and returns, per exported name, how many product
 * files import it and which modules those files belong to.
 *
 * Returns `{ available: false, reason }` when no checkout was found, so the
 * caller can tell "no data" apart from "used nowhere".
 */
export function scanProductUsage({
  repoRoot = resolveProductRepoRoot(),
  itRepoRoot = resolveItRepoRoot(),
  full = false,
} = {}) {
  const sources = consumerSources({ repoRoot, itRepoRoot, full })

  if (sources.length === 0) {
    return {
      available: false,
      reason:
        "No factorialco/factorial checkout found. Clone it next to this repo, " +
        "or point $F0_PRODUCT_REPO at it, then restart Storybook.",
    }
  }

  const components = Object.create(null)
  const repos = []
  let scannedFiles = 0
  let importingFiles = 0
  let moduleCount = 0

  for (const source of sources) {
    const scopeDir = join(source.root, source.scope)
    const groups = subdirectories(scopeDir)
    moduleCount += groups.length

    const before = importingFiles
    for (const group of groups) {
      const moduleName = `${source.prefix}${group}`
      walkSourceFiles(join(scopeDir, group), (path) => {
        scannedFiles++
        const names = f0ImportsOf(path)
        if (!names) return
        importingFiles++

        for (const name of names) {
          const entry = (components[name] ??= { files: 0, modules: {} })
          entry.files++
          entry.modules[moduleName] = (entry.modules[moduleName] ?? 0) + 1
        }
      })
    }

    repos.push({
      id: source.id,
      root: source.root,
      scope: source.scope,
      modules: groups.length,
      importingFiles: importingFiles - before,
    })
  }

  return {
    available: true,
    generatedAt: new Date().toISOString(),
    repo: {
      root: repoRoot,
      f0Version: repoRoot ? readProductF0Version(repoRoot) : null,
      lastModified: repoRoot ? safeMtime(join(repoRoot, PRODUCT_SCOPE)) : null,
    },
    scope: sources.map((source) => join(source.id, source.scope)).join(", "),
    repos,
    totals: {
      modules: moduleCount,
      scannedFiles,
      importingFiles,
      components: Object.keys(components).length,
    },
    components,
  }
}

function safeMtime(path) {
  try {
    return statSync(path).mtime.toISOString()
  } catch {
    return null
  }
}

/**
 * Reads a prototype's `meta` (see the Composer's `PrototypeMeta`) from its
 * `index.ts`. Regex rather than a parse: the file is generated from a fixed
 * template, and the scanner can't import TypeScript. Falls back to the folder
 * name when the file is missing or shaped unexpectedly.
 */
function readPrototypeMeta(prototypeDir, folderName) {
  let source = ""
  try {
    source = readFileSync(join(prototypeDir, "index.ts"), "utf8")
  } catch {
    // Older or in-progress prototypes may not have one yet.
  }

  const title = source.match(/\btitle:\s*["'](.+?)["']/)?.[1]
  const slug = source.match(/\bslug:\s*["']([\w-]+)["']/)?.[1]
  const status = source.match(/\bstatus:\s*["']([\w-]+)["']/)?.[1]

  return {
    slug: slug ?? folderName,
    title: title ?? folderName,
    status: status ?? null,
  }
}

/**
 * Matches an `import`/`export … from "<local module>"` statement — the `@/`,
 * `~/` and relative specifiers f0 components use to pull in one another.
 * Package imports (react, motion…) don't match. Clause rules as above.
 */
const LOCAL_IMPORT_RE =
  /\b(?:import|export)\s+([^;'"`]*?)\s*from\s*['"](?:@\/|~\/|\.\.?\/)[^'"]*['"]/g

/** The names a source file imports from other f0 modules. */
function parseLocalImports(source) {
  const names = new Set()

  for (const match of source.matchAll(LOCAL_IMPORT_RE)) {
    const braced = match[1].match(/\{([^}]*)\}/)
    if (!braced) continue

    for (const raw of braced[1].split(",")) {
      const specifier = raw
        .trim()
        .replace(/^type\s+/, "")
        .split(/\s+as\s+/)[0]
        .trim()
      if (specifier) names.add(specifier)
    }
  }

  return [...names]
}

/**
 * The component a source file belongs to: the deepest capitalised directory
 * on its path (`src/experimental/Forms/F0PhoneInput/components/Foo.tsx` →
 * `F0PhoneInput`). Returns `null` for files that sit outside any component
 * folder, like the `exports.ts` barrels.
 */
function owningComponent(relativePath) {
  const segments = relativePath.split(sep).slice(0, -1)
  for (let i = segments.length - 1; i >= 0; i--) {
    if (/^[A-Z]/.test(segments[i])) return segments[i]
  }
  return null
}

/**
 * Scans f0's own `src/` for components that import each other.
 *
 * Unlike the other two sources this needs no external checkout — it reads the
 * package this Storybook documents — so it answers "is this used anywhere at
 * all?" even for someone with neither factorial nor Composer cloned.
 */
export function scanInternalUsage({ srcDir = SRC_DIR } = {}) {
  /** imported name → Set of component folders importing it. */
  const byComponent = Object.create(null)

  walkSourceFiles(srcDir, (path) => {
    const owner = owningComponent(path.slice(srcDir.length + 1))
    if (!owner) return

    let source
    try {
      source = readFileSync(path, "utf8")
    } catch {
      return
    }

    for (const name of parseLocalImports(source)) {
      // A component's own internals importing it isn't "used by".
      if (name === owner) continue
      ;(byComponent[name] ??= new Set()).add(owner)
    }
  })

  const components = Object.create(null)
  for (const [name, owners] of Object.entries(byComponent)) {
    components[name] = [...owners].sort((a, b) => a.localeCompare(b))
  }

  return { available: true, scope: "src", components }
}

/**
 * Scans a `factorialco/factorial-composer` checkout for the prototypes that
 * use each component.
 *
 * Prototypes are throwaway explorations, not product code, so this deliberately
 * reports only WHICH prototypes touch a component — never a file count that
 * could inflate the product usage numbers.
 *
 * Layout (enforced by the Composer's own `pnpm validate`):
 *   src/projects/<project>/<prototype>/v<N>/…
 */
export function scanComposerUsage({
  repoRoot = resolveComposerRepoRoot(),
} = {}) {
  if (!repoRoot) {
    return {
      available: false,
      reason:
        "No factorialco/factorial-composer checkout found. Clone it next to " +
        "this repo, or point $F0_COMPOSER_REPO at it, then restart Storybook.",
    }
  }

  const projectsDir = join(repoRoot, COMPOSER_SCOPE)
  /** component name → Map of "<project>/<prototype>" → prototype descriptor. */
  const byComponent = Object.create(null)
  let prototypeCount = 0

  for (const project of subdirectories(projectsDir)) {
    for (const folder of subdirectories(join(projectsDir, project))) {
      const prototypeDir = join(projectsDir, project, folder)
      const meta = readPrototypeMeta(prototypeDir, folder)
      const prototype = { project, ...meta }
      prototypeCount++

      const used = new Set()
      walkSourceFiles(prototypeDir, (path) => {
        const names = f0ImportsOf(path)
        if (names) for (const name of names) used.add(name)
      })

      for (const name of used) {
        ;(byComponent[name] ??= []).push(prototype)
      }
    }
  }

  for (const prototypes of Object.values(byComponent)) {
    prototypes.sort((a, b) => a.title.localeCompare(b.title))
  }

  return {
    available: true,
    repo: { root: repoRoot },
    scope: COMPOSER_SCOPE,
    totals: { prototypes: prototypeCount },
    /** component name → the prototypes that import it. */
    prototypes: byComponent,
  }
}

/**
 * Both scans, as served by the endpoint. The two repos are independent: having
 * one checked out and not the other is normal, so each side reports its own
 * availability.
 */
export function scanUsage() {
  return {
    generatedAt: new Date().toISOString(),
    product: scanProductUsage(),
    internal: scanInternalUsage(),
    composer: scanComposerUsage(),
  }
}

/** In-process cache so page views don't each trigger a filesystem walk. */
let cache = null

function getUsage({ refresh = false } = {}) {
  const now = Date.now()
  if (!refresh && cache && now - cache.at < CACHE_TTL_MS) return cache.data

  const data = scanUsage()
  cache = { at: now, data }
  return data
}

/**
 * Vite plugin serving {@link PRODUCT_USAGE_ENDPOINT} from the dev server.
 *
 * Dev-only by design: a static Storybook build has no server to scan with, and
 * the numbers are meaningless without a local product checkout anyway.
 */
export function productUsageVitePlugin() {
  return {
    name: "f0-product-usage",
    configureServer(server) {
      server.middlewares.use(PRODUCT_USAGE_ENDPOINT, (req, res) => {
        const refresh = (req.url ?? "").includes("refresh=1")
        const failed = (reason) => ({ available: false, reason })
        let body
        try {
          body = JSON.stringify(getUsage({ refresh }))
        } catch (error) {
          const reason = `Usage scan failed: ${String(error)}`
          body = JSON.stringify({
            product: failed(reason),
            internal: failed(reason),
            composer: failed(reason),
          })
        }
        res.setHeader("Content-Type", "application/json; charset=utf-8")
        res.setHeader("Cache-Control", "no-store")
        res.end(body)
      })
    },
  }
}
