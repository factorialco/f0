#!/usr/bin/env node
/**
 * Scans packages/react/src for stories + index + impl files and produces a
 * JSON dataset describing every component's lifecycle state and code-review
 * compliance.
 *
 * Source-of-truth references (each criterion in src/criteria.ts cites one):
 *   - packages/react/docs/definition-of-done.mdx
 *   - packages/react/docs/components-maturity.mdx
 *   - packages/react/.skills/f0-component-promotion/SKILL.md
 *   - packages/react/.skills/f0-component-contribution/SKILL.md
 *   - packages/react/.skills/f0-code-review/SKILL.md
 *   - packages/react/.skills/f0-storybook-stories/SKILL.md
 *   - packages/react/.skills/f0-storybook-testing/SKILL.md
 *   - packages/react/.skills/f0-quality-gate/SKILL.md
 *
 * Output: packages/components-dashboard/src/data/components.json
 */
import { readFileSync, writeFileSync } from "node:fs"
import { readdir } from "node:fs/promises"
import { join, relative, dirname, basename } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, "..", "..", "..")
const SRC = join(REPO_ROOT, "packages", "react", "src")
const OUT = join(__dirname, "..", "src", "data", "components.json")

// IMPORTANT: do NOT skip __tests__ or __stories__ — we need to index them.
const SKIP_DIRS = new Set(["node_modules", ".turbo", "dist", "__snapshots__"])

async function walk(dir, files = []) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return files
  }
  for (const e of entries) {
    if (SKIP_DIRS.has(e.name)) continue
    const full = join(dir, e.name)
    if (e.isDirectory()) await walk(full, files)
    else files.push(full)
  }
  return files
}

function read(p) {
  try {
    return readFileSync(p, "utf8")
  } catch {
    return ""
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Story file analysis
// f0-storybook-stories: tags, satisfies Meta, Snapshot story
// ─────────────────────────────────────────────────────────────────────────────
function parseStory(src) {
  const titleMatch = src.match(/title:\s*["'`]([^"'`]+)["'`]/)
  const tagsMatch = src.match(/tags:\s*\[([^\]]*)\]/)
  const tagsRaw = tagsMatch
    ? tagsMatch[1]
        .split(",")
        .map((s) => s.trim().replace(/^["'`]|["'`]$/g, ""))
        .filter(Boolean)
    : []
  // Strip leading "!" — "!autodocs" still indicates the meta references autodocs
  const tags = tagsRaw.map((t) => t.replace(/^!/, ""))
  return {
    title: titleMatch ? titleMatch[1] : null,
    rawTags: tagsRaw,
    tags,
    optedOutOfAutodocs: tagsRaw.includes("!autodocs"),
    usesSatisfiesMeta: /satisfies\s+Meta\s*</.test(src),
    usesAsMeta: /\bas\s+Meta\b/.test(src),
    hasSnapshotStory: /export\s+const\s+Snapshot\s*:/i.test(src),
    usesWithSnapshot: /withSnapshot\s*\(/.test(src),
    hasPlayFn: /play\s*[:=]\s*async/.test(src),
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Index file analysis
// f0-component-patterns + f0-code-review:
// experimentalComponent wrapper, Component() meta, deprecation JSDoc
// ─────────────────────────────────────────────────────────────────────────────
function parseIndex(src) {
  const deprecated = /@deprecated\b([^\n*]*)/.exec(src)
  const removeIn = /@removeIn\b([^\n*]*)/.exec(src)
  const migration = /@migration\b([^\n*]*)/.exec(src)
  return {
    hasExperimentalWrapper: /experimentalComponent\s*\(/.test(src),
    hasComponentMeta: /\bComponent\s*\(\s*\{/.test(src),
    hasDefaultExport: /^\s*export\s+default\b/m.test(src),
    jsdoc: {
      deprecated: deprecated ? deprecated[1].trim() : null,
      removeIn: removeIn ? removeIn[1].trim() : null,
      migration: migration ? migration[1].trim() : null,
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Implementation file analysis (the F0Name.tsx file)
// f0-code-review BLOCKING items that are statically detectable
// ─────────────────────────────────────────────────────────────────────────────
function parseImpl(src) {
  return {
    usesAny: /:\s*any\b|<\s*any\s*>|\bas\s+any\b/.test(src),
    usesStarReact: /import\s+\*\s+as\s+React\s+from\s+["']react["']/.test(src),
    hasDefaultExport: /^\s*export\s+default\b/m.test(src),
    usesForwardRef: /\bforwardRef\s*</.test(src),
    setsDisplayName: /\.displayName\s*=/.test(src),
    importsRadixDirectly:
      /from\s+["']@radix-ui\/[^"']+["']/.test(src) &&
      // src/ui/ is the legitimate place to import Radix
      true,
    usesDangerouslySetInnerHTML: /dangerouslySetInnerHTML/.test(src),
    usesUseI18n: /\buseI18n\s*\(/.test(src),
    importsFromUi: /from\s+["']@\/ui\//.test(src),
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Input kind detection — structural, semantic, not name-based.
//
// A component is classified as a "text-field" when it presents a writable
// box. Detection is layered, each rule semantically meaningful:
//
//   1. Forwards a ref to HTMLInputElement / HTMLTextAreaElement: the
//      component IS the native input.
//   2. Imports one of the primitives from `@/ui/input`, `@/ui/textarea`
//      or `@/ui/InputField`: it's a thin wrapper around an input box.
//   3. Renders `<input>` or `<textarea>` in its own files (not nested
//      sub-folders) — covers components that build their own input
//      element from scratch, like F0DurationInput.
//
//   - toggle: declares `checked?: boolean` (Switch, Checkbox, …).
//   - choice: uses Radix RadioGroup.Root or ToggleGroup.Root.
//   - null: not classifiable as an input.
//
// Containers that merely contain an input internally (e.g. F0AiChat) are
// excluded because we only read direct children of the component dir, not
// nested sub-trees.
// ─────────────────────────────────────────────────────────────────────────────
function detectInputKind(combinedSrc) {
  if (!combinedSrc) return null

  // Toggle detection: requires BOTH
  //   - a `checked?: boolean` (or `defaultChecked`) prop declaration
  //   - an `onCheckedChange` handler OR a Radix Switch/Checkbox primitive
  // This avoids false positives like F0Select, which declares
  // `checked: boolean` inside a callback tuple but is not a toggle.
  const hasCheckedProp =
    /^\s*(readonly\s+)?(defaultChecked|checked)\??:\s*boolean\b/m.test(
      combinedSrc
    )
  const hasToggleHandler =
    /\bonCheckedChange\b/.test(combinedSrc) ||
    /from\s+["']@radix-ui\/react-(switch|checkbox)["']/.test(combinedSrc) ||
    /from\s+["']@\/ui\/(switch|checkbox)["']/.test(combinedSrc)
  const isToggle = hasCheckedProp && hasToggleHandler
  const isRadixChoice =
    /\b(RadioGroup|ToggleGroup)\.Root\b/.test(combinedSrc) ||
    /from\s+["']@radix-ui\/react-(radio-group|toggle-group)["']/.test(
      combinedSrc
    )
  // Toggle and choice take precedence over text-field — a Switch's prop is
  // `checked`, not a writable value.
  if (isToggle) return "toggle"
  if (isRadixChoice) return "choice"

  const forwardsToInput =
    /\bforwardRef\s*<\s*HTMLInputElement\b/.test(combinedSrc) ||
    /\bforwardRef\s*<\s*HTMLTextAreaElement\b/.test(combinedSrc)
  const importsInputPrimitive =
    /from\s+["']@\/ui\/(input|textarea|InputField)["']/.test(combinedSrc)
  const rendersNativeInput = /<\s*(input|textarea)\b/.test(combinedSrc)

  // Exclusion: a component that ALSO drives a popover, calendar, command
  // palette or select primitive is a higher-level widget (date picker,
  // combobox, calendar with text entry, …) — its primary surface is not
  // "a writable text box", even if it contains one internally.
  const usesComplexWidget =
    /from\s+["']@\/ui\/(popover|select|combobox|calendar|command|date-picker|menu)["']/i.test(
      combinedSrc
    ) ||
    /from\s+["']@radix-ui\/react-(popover|select|combobox|menu)["']/i.test(
      combinedSrc
    )

  if (
    (forwardsToInput || importsInputPrimitive || rendersNativeInput) &&
    !usesComplexWidget
  )
    return "text-field"
  return null
}

/**
 * Whether a component is in scope for input classification at all.
 * Inputs published as part of the F0 public surface live in:
 *   - src/components/F0*    (stable form components)
 *   - src/experimental/...  (experimental form fields)
 * Excluded:
 *   - sds/      (composed product surfaces — they contain inputs but are not one)
 *   - patterns/ (higher-level patterns — likewise)
 *   - ui/       (Radix/Shadcn primitives — internal building blocks)
 *   - lib/      (utilities)
 *   - deprecated/
 *   - kits/, layouts/, hooks/
 */
function isInputCandidate(folder) {
  return folder === "components" || folder === "experimental"
}

// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// MDX content analysis
// f0-component-promotion DoD: MDX must explain usage, not just list controls.
// Minimum bar (derived from real-world reference MDX in stable F0 components,
// the smallest valid one being F0Link.mdx — 88 lines, 4 headings, Canvas + prose):
//   - has at least one <Canvas> or <Story> embed
//   - has at least one Markdown ## heading
//   - has at least 3 prose paragraphs (>80 chars, not import/JSX)
//   - has at least 40 lines of content
// ─────────────────────────────────────────────────────────────────────────────
function parseMdx(src) {
  if (!src) {
    return {
      present: false,
      lines: 0,
      bytes: 0,
      hasCanvas: false,
      hasStory: false,
      headingCount: 0,
      proseParagraphCount: 0,
      meetsContentBar: false,
    }
  }
  const lines = src.split("\n").length
  const hasCanvas = /<Canvas\b/.test(src)
  const hasStory = /<Story\b/.test(src)
  const headingCount = (src.match(/^##\s/gm) || []).length
  const proseParagraphCount = src.split(/\n\n+/).filter((p) => {
    const t = p.trim()
    return (
      t.length > 80 &&
      !t.startsWith("<") &&
      !t.startsWith("import") &&
      !t.startsWith("```")
    )
  }).length
  const meetsContentBar =
    (hasCanvas || hasStory) &&
    headingCount >= 1 &&
    proseParagraphCount >= 3 &&
    lines >= 40
  return {
    present: true,
    lines,
    bytes: src.length,
    hasCanvas,
    hasStory,
    headingCount,
    proseParagraphCount,
    meetsContentBar,
  }
}

function topFolder(rel) {
  return rel.split("/")[0] || ""
}

function componentNameFromStoryPath(rel) {
  // Derive the component name from the directory holding the story:
  //   experimental/F0Foo/__stories__/F0Foo.stories.tsx -> F0Foo
  //   experimental/Forms/Fields/F1SearchBox/index.stories.tsx -> F1SearchBox
  //   components/F0Bar/F0Bar.stories.tsx -> F0Bar
  // Falls back to the story filename (without .stories.tsx) when it is not
  // a generic "index" file (this keeps multi-story components disambiguated).
  const parts = rel.split("/")
  const file = parts[parts.length - 1]
  const fileName = basename(file, ".stories.tsx")
  if (fileName && fileName.toLowerCase() !== "index") return fileName

  // Walk up from the story file, skipping the __stories__ wrapper, to find
  // the first "real" component directory.
  let i = parts.length - 2
  while (i >= 0 && parts[i] === "__stories__") i--
  if (i >= 0) return parts[i]
  return fileName
}

function inferMaturityFromFolder(folder) {
  if (folder === "experimental") return "experimental"
  if (folder === "deprecated") return "deprecated"
  if (folder === "ui") return "internal"
  if (folder === "sds") return "sds"
  if (
    folder === "components" ||
    folder === "patterns" ||
    folder === "kits" ||
    folder === "layouts" ||
    folder === "hooks"
  )
    return "stable"
  return "unknown"
}

function declaredFromTags(tags) {
  if (tags.includes("deprecated")) return "deprecated"
  if (tags.includes("stable")) return "stable"
  if (tags.includes("experimental")) return "experimental"
  if (tags.includes("internal")) return "internal"
  return "unknown"
}

async function main() {
  const files = await walk(SRC)
  const stories = files.filter((f) => f.endsWith(".stories.tsx"))
  const indices = new Map(
    files
      .filter((f) => /\/index\.(tsx?|ts)$/.test(f))
      .map((f) => [dirname(f), f])
  )
  const tests = files.filter((f) => /\.test\.tsx?$/.test(f))

  const components = []
  for (const storyPath of stories) {
    const rel = relative(SRC, storyPath)
    const folder = topFolder(rel)
    const name = componentNameFromStoryPath(rel)
    const story = parseStory(read(storyPath))

    // Component dir = parent of __stories__ if present
    let componentDir = dirname(storyPath)
    if (basename(componentDir) === "__stories__") {
      componentDir = dirname(componentDir)
    }

    // Find the index file
    let indexPath = indices.get(componentDir) ?? null
    if (!indexPath) {
      let dir = dirname(storyPath)
      let depth = 0
      while (depth < 4 && dir.startsWith(SRC)) {
        if (indices.has(dir)) {
          indexPath = indices.get(dir)
          componentDir = dir
          break
        }
        dir = dirname(dir)
        depth++
      }
    }

    const idx = parseIndex(indexPath ? read(indexPath) : "")

    // Implementation file: prefer F0Name.tsx in componentDir, else any non-index .tsx
    const candidateImpls = files.filter(
      (f) =>
        f.startsWith(componentDir + "/") &&
        f.endsWith(".tsx") &&
        !f.endsWith(".stories.tsx") &&
        !f.endsWith(".test.tsx") &&
        !f.includes("/__stories__/") &&
        !f.includes("/__tests__/") &&
        !/\/index\.tsx?$/.test(f)
    )
    const implPath =
      candidateImpls.find((f) => basename(f).startsWith(name)) ||
      candidateImpls[0] ||
      null
    const impl = parseImpl(implPath ? read(implPath) : "")
    // For input-kind detection, also consider the index file and any sibling
    // implementation files in the same dir (e.g. internal.tsx, F0Input.tsx
    // alongside index.tsx). These are where the forwardRef<HTMLInputElement>
    // signal often lives when the public file is a re-export.
    const siblingImpls = files.filter(
      (f) =>
        f.startsWith(componentDir + "/") &&
        f.endsWith(".tsx") &&
        !f.endsWith(".stories.tsx") &&
        !f.endsWith(".test.tsx") &&
        !f.includes("/__stories__/") &&
        !f.includes("/__tests__/") &&
        // Only direct children of componentDir, not deeper subfolders, to keep
        // semantics tight: a container's nested input file should not bubble up.
        relative(componentDir, f).split("/").length === 1
    )
    const inputKindSrc = siblingImpls.map(read).join("\n")
    const inputKind = isInputCandidate(folder)
      ? detectInputKind(inputKindSrc)
      : null

    // MDX: any .mdx anywhere under componentDir
    const mdxPath =
      files.find(
        (f) => f.endsWith(".mdx") && f.startsWith(componentDir + "/")
      ) || null
    const mdx = parseMdx(mdxPath ? read(mdxPath) : "")
    // Tests: any .test.tsx under componentDir
    const testPaths = tests
      .filter((t) => t.startsWith(componentDir + "/"))
      .map((t) => relative(REPO_ROOT, t))

    const declaredMaturity = declaredFromTags(story.tags)
    const inferredMaturity = inferMaturityFromFolder(folder)

    const c = {
      id: relative(REPO_ROOT, storyPath),
      name,
      folder,
      storyTitle: story.title,
      storyTags: story.rawTags,
      storyPath: relative(REPO_ROOT, storyPath),
      indexPath: indexPath ? relative(REPO_ROOT, indexPath) : null,
      implPath: implPath ? relative(REPO_ROOT, implPath) : null,
      mdxPath: mdxPath ? relative(REPO_ROOT, mdxPath) : null,
      mdx,
      testPaths,
      // Story signals
      story: {
        usesSatisfiesMeta: story.usesSatisfiesMeta,
        usesAsMeta: story.usesAsMeta,
        hasSnapshotStory: story.hasSnapshotStory,
        usesWithSnapshot: story.usesWithSnapshot,
        optedOutOfAutodocs: story.optedOutOfAutodocs,
        hasPlayFn: story.hasPlayFn,
      },
      // Index signals
      hasExperimentalWrapper: idx.hasExperimentalWrapper,
      hasComponentMeta: idx.hasComponentMeta,
      indexHasDefaultExport: idx.hasDefaultExport,
      jsdoc: idx.jsdoc,
      // Impl signals
      impl: {
        present: Boolean(implPath),
        usesAny: impl.usesAny,
        usesStarReact: impl.usesStarReact,
        hasDefaultExport: impl.hasDefaultExport,
        usesForwardRef: impl.usesForwardRef,
        setsDisplayName: impl.setsDisplayName,
        importsRadixDirectly: impl.importsRadixDirectly,
        usesDangerouslySetInnerHTML: impl.usesDangerouslySetInnerHTML,
        importsFromUi: impl.importsFromUi,
      },
      declaredMaturity,
      inferredMaturity,
      inputKind,
    }
    components.push(c)
  }

  // De-dupe by indexPath when multiple stories share one component
  const grouped = new Map()
  for (const c of components) {
    const key = c.indexPath || c.id
    if (!grouped.has(key)) grouped.set(key, { ...c, stories: [c.storyPath] })
    else {
      const g = grouped.get(key)
      g.stories.push(c.storyPath)
      g.storyTags = Array.from(new Set([...g.storyTags, ...c.storyTags]))
      // Merge story signals as OR — any story with the signal counts
      g.story = {
        usesSatisfiesMeta: g.story.usesSatisfiesMeta || c.story.usesSatisfiesMeta,
        usesAsMeta: g.story.usesAsMeta || c.story.usesAsMeta,
        hasSnapshotStory: g.story.hasSnapshotStory || c.story.hasSnapshotStory,
        usesWithSnapshot: g.story.usesWithSnapshot || c.story.usesWithSnapshot,
        optedOutOfAutodocs:
          g.story.optedOutOfAutodocs || c.story.optedOutOfAutodocs,
        hasPlayFn: g.story.hasPlayFn || c.story.hasPlayFn,
      }
    }
  }

  const out = {
    generatedAt: new Date().toISOString(),
    rootRel: relative(REPO_ROOT, SRC),
    total: grouped.size,
    components: Array.from(grouped.values()).sort((a, b) => {
      if (a.folder !== b.folder) return a.folder.localeCompare(b.folder)
      return a.name.localeCompare(b.name)
    }),
  }

  const counts = {}
  for (const c of out.components) counts[c.folder] = (counts[c.folder] || 0) + 1
  out.countsByFolder = counts

  writeFileSync(OUT, JSON.stringify(out, null, 2))
  console.log(`Wrote ${OUT}`)
  console.log(`Components: ${out.total}`)
  console.log("By folder:", counts)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
