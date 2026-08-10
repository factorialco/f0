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

import { execFile } from "node:child_process"
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { homedir } from "node:os"
import { dirname, join, resolve, sep } from "node:path"
import { fileURLToPath } from "node:url"

const scriptsDir = dirname(fileURLToPath(import.meta.url))

/** f0's own source tree — the third usage source (see scanInternalUsage). */
const SRC_DIR = resolve(scriptsDir, "../src")

/** The dev-server route serving the scan result. */
export const PRODUCT_USAGE_ENDPOINT = "/f0-product-usage.json"

/** The dev-server route that clones or fast-forwards a scanned repo. */
export const REPO_ACTION_ENDPOINT = "/f0-usage-repo-action"

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
 * Where people keep their checkouts, relative to `~`. Ordered by how common
 * they are; each is a single `existsSync` so the whole list is free.
 *
 * The point is that nobody should have to configure anything: if the repo is
 * cloned anywhere conventional, it's found. `$F0_*_REPO` stays as the escape
 * hatch for layouts this can't guess (an external drive, a nested workspace).
 */
const COMMON_CHECKOUT_PARENTS = [
  "code",
  "dev",
  "src",
  "repos",
  "projects",
  "work",
  "workspace",
  "Developer",
  "Projects",
  "Code",
  join("Documents", "GitHub"),
  join("Documents", "code"),
]

/**
 * Locates a checkout named `repoName`, in order of preference:
 *   1. `envPath` (explicit opt-in / unguessable layouts)
 *   2. a sibling of this repo (`../<repoName>`)
 *   3. `~/<common parent>/<repoName>` (see COMMON_CHECKOUT_PARENTS)
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

  for (const parent of COMMON_CHECKOUT_PARENTS) {
    candidates.push(join(homedir(), parent, repoName))
  }

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
 *
 * Recognised by `.git` rather than a manifest: unlike factorial it has no
 * root `package.json` (its frontend lives under `frontend/`), and a marker
 * that isn't there means a perfectly good checkout reads as missing — and
 * every "Clone" click then fails on the directory it already cloned.
 */
export function resolveItRepoRoot(env = process.env) {
  return resolveSiblingRepo("factorial-it", ".git", env.F0_IT_REPO)
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
  const configured = [
    {
      id: "factorial",
      env: "F0_PRODUCT_REPO",
      root: repoRoot,
      scope: full ? "." : PRODUCT_SCOPE,
      prefix: "",
    },
    {
      id: "factorial-it",
      env: "F0_IT_REPO",
      root: itRepoRoot,
      scope: ".",
      prefix: "factorial-it/",
    },
  ]

  return {
    sources: configured.filter((source) => source.root),
    // Reported so the docs tag can say the numbers are partial rather than
    // presenting a count that silently excludes a whole product surface.
    missing: configured
      .filter((source) => !source.root)
      .map(({ id, env }) => ({ id, env })),
  }
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
  const { sources, missing } = consumerSources({ repoRoot, itRepoRoot, full })

  if (sources.length === 0) {
    return {
      available: false,
      reason:
        "No factorialco/factorial checkout found. Clone it next to this repo, " +
        "or point $F0_PRODUCT_REPO at it.",
      // Carried even when nothing could be scanned, so the tag can offer to
      // clone the repos rather than just naming them.
      missing,
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
    missing,
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
 * The identifiers a component folder exports, read from its public surface
 * (`index.ts(x)` / `exports.ts(x)`) only.
 *
 * Folder and story names are a poor proxy for import names — `hooks/toast`
 * ships `toasts`, `hooks/datasource` ships `useDataSource` — so without this a
 * component looks unused when the product imports it every day. Deliberately
 * shallow: pulling in every internal helper name would collide with unrelated
 * exports and make dead components look alive.
 */
export function exportedNamesOf(componentPath) {
  if (!componentPath) return []

  const names = new Set()

  const collect = (file, followStars) => {
    let source
    try {
      source = readFileSync(file, "utf8")
    } catch {
      return
    }

    for (const match of source.matchAll(
      /export\s+(?:declare\s+)?(?:const|function|class|type|interface)\s+([A-Za-z0-9_]+)/g
    )) {
      names.add(match[1])
    }
    for (const match of source.matchAll(/export\s*\{([^}]*)\}/g)) {
      for (const raw of match[1].split(",")) {
        const specifier = raw
          .trim()
          .replace(/^type\s+/, "")
          .split(/\s+as\s+/)
        const exported = (specifier[1] ?? specifier[0])?.trim()
        if (exported) names.add(exported)
      }
    }

    if (!followStars) return

    // `export * from "./ToastProvider"` hides the real export names (`toasts`)
    // one file away, so follow the star exactly one hop.
    for (const match of source.matchAll(
      /export\s+\*\s+from\s*["']\.\/([A-Za-z0-9_/]+)["']/g
    )) {
      const target = match[1]
      // The file name is only a plausible export name when it's capitalised
      // (`./F0Toast`); `./types` and `./imperative` are just module names and
      // would sit in the candidate list as noise.
      const fileName = target.split("/").pop()
      if (/^[A-Z]/.test(fileName)) names.add(fileName)
      const dir = dirname(file)
      for (const suffix of [
        `${target}.ts`,
        `${target}.tsx`,
        join(target, "index.ts"),
        join(target, "index.tsx"),
      ]) {
        collect(join(dir, suffix), false)
      }
    }
  }

  for (const barrel of BARREL_FILES) {
    collect(join(componentPath, barrel), true)
  }

  return [...names]
}

const BARREL_FILES = ["index.ts", "index.tsx", "exports.ts", "exports.tsx"]

/**
 * Maps every component folder under `src/` to the names it exports, keyed by
 * its path relative to `src/` (`hooks/toast` → `["toasts", …]`).
 *
 * The docs tag can't read the filesystem, and the export maps it imports at
 * runtime say nothing about which file a name came from — so the association
 * has to be built here and shipped with the payload.
 */
export function scanComponentExports({ srcDir = SRC_DIR } = {}) {
  const byPath = Object.create(null)

  const walk = (dir) => {
    let entries
    try {
      entries = readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }

    if (entries.some((entry) => entry.isFile() && BARREL_FILES.includes(entry.name))) {
      const names = exportedNamesOf(dir)
      if (names.length > 0) {
        byPath[dir.slice(srcDir.length + 1).split(sep).join("/")] = names
      }
    }

    for (const entry of entries) {
      if (entry.isDirectory() && !SKIP_DIRS.has(entry.name)) {
        walk(join(dir, entry.name))
      }
    }
  }

  walk(srcDir)

  return byPath
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
  const exports = scanComponentExports({ srcDir })

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

  return { available: true, scope: "src", components, exports }
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
    // Progress of any clone/pull the tag started, so it can report back.
    actions: { ...actions },
    // Uncommitted work this tool set aside, kept until Storybook restarts.
    stashes: { ...stashes },
  }
}

/**
 * Repos the docs tag can offer to clone, and where each one is scanned from.
 *
 * A fixed map on purpose: the endpoint that runs `git` must never take a URL
 * or a path from the request, or a page open in the browser could make the dev
 * server clone anything anywhere.
 */
export const KNOWN_REPOS = {
  factorial: {
    url: "git@github.com:factorialco/factorial.git",
    resolve: resolveProductRepoRoot,
  },
  "factorial-it": {
    url: "git@github.com:factorialco/factorial-it.git",
    resolve: resolveItRepoRoot,
  },
  "factorial-composer": {
    url: "git@github.com:factorialco/factorial-composer.git",
    resolve: resolveComposerRepoRoot,
  },
}

/**
 * Where a new checkout should land: next to a repo we already found, so it
 * joins whatever convention this machine already uses. Falls back to `~/code`.
 */
function checkoutParent() {
  for (const { resolve: resolveRoot } of Object.values(KNOWN_REPOS)) {
    const root = resolveRoot()
    if (root) return dirname(root)
  }
  return join(homedir(), "code")
}

/**
 * State of the clone/pull the docs tag kicked off, by repo id. Actions run
 * detached — a monorepo clone takes minutes, far longer than a request should
 * hang — and the tag polls this through the usual payload.
 */
const actions = Object.create(null)

/**
 * Exact wording the tag matches on to offer the stash-and-pull escape hatch.
 * Shared so the two sides can't drift apart.
 */
export const DIRTY_MESSAGE = "Working tree is dirty — pull skipped"

/**
 * Work this tool moved aside, by repo id.
 *
 * Kept apart from `actions` because that entry is overwritten by whatever runs
 * next: the note saying where somebody's uncommitted work went must outlive
 * the next click on "Pull latest".
 */
const stashes = Object.create(null)

function runGit(args, options = {}) {
  return new Promise((resolvePromise) => {
    execFile("git", args, { maxBuffer: 1024 * 1024, ...options }, (error, stdout, stderr) => {
      resolvePromise({
        ok: !error,
        output: (stdout || "") + (stderr || ""),
      })
    })
  })
}

/**
 * Clones a known repo next to the others, or fast-forwards it if it's already
 * there. Never merges or rebases, and refuses to touch a dirty working tree —
 * this runs against somebody's real checkout, possibly mid-task.
 */
export async function runRepoAction(id, action, options = {}) {
  const repo = KNOWN_REPOS[id]
  if (!repo) return { ok: false, message: `Unknown repo: ${id}` }
  if (actions[id]?.state === "running") return actions[id]

  actions[id] = { state: "running", action, message: `${action} in progress…` }

  const finish = (state, message) => {
    actions[id] = { state, action, message }
    // The next request should see the new checkout, not the cached answer.
    cache = null
    return actions[id]
  }

  // `root` is a test seam only — the HTTP handler passes an id and an action
  // and nothing else, so a request can never point git at a path.
  const existing = options.root ?? repo.resolve()

  if (action === "clone") {
    if (existing) return finish("done", `Already cloned at ${existing}`)

    const target = join(checkoutParent(), id)

    // A directory can be there without the resolver recognising it: an
    // interrupted clone, or a checkout this scanner doesn't know how to spot.
    // Either way `git clone` would fail with a fatal nobody can act on.
    if (existsSync(target)) {
      return existsSync(join(target, ".git"))
        ? finish("done", `Already cloned at ${target}`)
        : finish(
            "error",
            `${target} already exists and isn't a checkout — remove it, then clone again`
          )
    }
    // Blobless clone: full history for tooling, without paying for every blob
    // ever committed. Still a normal checkout to work in afterwards.
    const result = await runGit([
      "clone",
      "--filter=blob:none",
      repo.url,
      target,
    ])
    return result.ok
      ? finish("done", `Cloned into ${target}`)
      : finish("error", result.output.trim().split("\n").slice(-3).join(" "))
  }

  if (action === "pull" || action === "stash-pull") {
    if (!existing) return finish("error", "Nothing to pull — not cloned yet")

    const status = await runGit(["-C", existing, "status", "--porcelain"])
    const dirty = Boolean(status.output.trim())

    if (dirty && action === "pull") {
      return finish("error", DIRTY_MESSAGE)
    }

    const notes = []

    if (dirty) {
      // Named and timestamped: whatever this moves aside has to be findable
      // afterwards, because it's somebody's unfinished work.
      const label = `f0 usage tag: auto-stash ${new Date().toISOString()}`
      const stash = await runGit([
        "-C",
        existing,
        "stash",
        "push",
        "--include-untracked",
        "-m",
        label,
      ])
      if (!stash.ok) {
        return finish("error", `Could not stash: ${lastLines(stash.output, 2)}`)
      }
      notes.push("stashed your changes")
      stashes[id] = { label, branch: null, at: new Date().toISOString() }
    }

    const branch = (
      await runGit(["-C", existing, "rev-parse", "--abbrev-ref", "HEAD"])
    ).output.trim()
    const target = await defaultBranchOf(existing)

    // Recorded so the note can say which branch to go back to, not just that
    // something was stashed.
    if (stashes[id] && !stashes[id].branch) stashes[id].branch = branch

    if (branch && branch !== target) {
      const checkout = await runGit(["-C", existing, "checkout", target])
      if (!checkout.ok) {
        return finish(
          "error",
          `Stashed, but could not switch to ${target}: ${lastLines(checkout.output, 2)}`
        )
      }
      notes.push(`switched ${branch} → ${target}`)
    }

    const result = await runGit(["-C", existing, "pull", "--ff-only"])
    if (!result.ok) {
      return finish(
        "error",
        [...notes, `pull failed: ${lastLines(result.output, 2)}`].join("; ")
      )
    }

    return finish("done", [...notes, "up to date"].join("; "))
  }

  return finish("error", `Unknown action: ${action}`)
}

/** The last `count` lines of git output, for messages that stay readable. */
function lastLines(output, count) {
  return output.trim().split("\n").slice(-count).join(" ")
}

/** The remote's default branch (`origin/HEAD`), falling back to `main`. */
async function defaultBranchOf(root) {
  const head = await runGit([
    "-C",
    root,
    "symbolic-ref",
    "--short",
    "refs/remotes/origin/HEAD",
  ])
  const name = head.output.trim().replace(/^origin\//, "")
  return head.ok && name ? name : "main"
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

      server.middlewares.use(REPO_ACTION_ENDPOINT, (req, res) => {
        const json = (status, payload) => {
          res.statusCode = status
          res.setHeader("Content-Type", "application/json; charset=utf-8")
          res.setHeader("Cache-Control", "no-store")
          res.end(JSON.stringify(payload))
        }

        // This route runs `git` on the developer's machine, so it has to be
        // unreachable from anything but the Storybook page itself. A POST from
        // another site always carries an Origin header; the docs page's own
        // fetch carries this server's origin (or none at all).
        const origin = req.headers.origin
        if (req.method !== "POST") {
          return json(405, { ok: false, message: "POST only" })
        }
        if (origin && !/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
          return json(403, { ok: false, message: "Cross-origin request refused" })
        }

        const params = new URLSearchParams((req.url ?? "").split("?")[1] ?? "")
        const id = params.get("repo") ?? ""
        const action = params.get("action") ?? ""

        if (
          !(id in KNOWN_REPOS) ||
          !["clone", "pull", "stash-pull"].includes(action)
        ) {
          return json(400, { ok: false, message: "Unknown repo or action" })
        }

        // Detached on purpose: a monorepo clone runs for minutes. The tag polls
        // the usage payload for the outcome.
        void runRepoAction(id, action)
        json(202, { ok: true, state: "running", repo: id, action })
      })
    },
  }
}
