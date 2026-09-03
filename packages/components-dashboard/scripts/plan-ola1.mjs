#!/usr/bin/env node
// Reads scanned components.json, computes Ola 1 plan, classifies each fix
// against the actual file contents, and writes:
//   - src/data/ola1-plan.json   (used by the dashboard UI)
//   - patches/ola-1.patch       (downloadable / git-appliable)

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, "../../..")
const DATA_PATH = path.resolve(__dirname, "../src/data/components.json")
const OUT_PLAN = path.resolve(__dirname, "../src/data/ola1-plan.json")
const OUT_PATCH_DIR = path.resolve(__dirname, "../patches")
const OUT_PATCH = path.join(OUT_PATCH_DIR, "ola-1.patch")

const STABLE_FOLDERS = new Set(["components", "patterns", "kits", "layouts", "hooks"])

const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf8"))

// Definition of Done — Phase 5 (must hold to be tagged stable).
// Source: packages/react/docs/definition-of-done.mdx + .skills/f0-component-promotion
// MDX must not only EXIST — it must explain usage. See parseMdx in scan.mjs
// for the content bar (Canvas + heading + 3 prose paragraphs + 40 lines).
function meetsDoD(c) {
  return (
    !!c.mdxPath &&
    !!c.mdx?.meetsContentBar &&
    c.testPaths.length > 0 &&
    c.story.hasSnapshotStory &&
    c.story.usesWithSnapshot &&
    c.story.usesSatisfiesMeta &&
    !c.story.usesAsMeta &&
    !c.hasExperimentalWrapper &&
    c.name.startsWith("F0")
  )
}

const fixes = []
for (const c of data.components) {
  const d = c.declaredMaturity
  const inStable = STABLE_FOLDERS.has(c.folder)
  const inExp = c.folder === "experimental"
  const inDep = c.folder === "deprecated"
  const dod = meetsDoD(c)

  let to = null
  let reason = ""

  if (inDep && d !== "deprecated") {
    to = "deprecated"
    reason = "Lives in deprecated/ but tag mismatched"
  } else if (d === "stable" && inExp) {
    to = "experimental"
    reason = "Tagged stable but lives in experimental/ folder"
  } else if (d === "stable" && inStable && !dod) {
    to = "experimental"
    const why = []
    if (!c.mdxPath) why.push("no MDX")
    else if (!c.mdx?.meetsContentBar) why.push("MDX too thin (no usage docs)")
    if (c.testPaths.length === 0) why.push("no tests")
    if (!c.story.hasSnapshotStory) why.push("no snapshot story")
    if (!c.story.usesWithSnapshot) why.push("no withSnapshot")
    if (!c.story.usesSatisfiesMeta) why.push("not satisfies Meta")
    if (c.story.usesAsMeta) why.push("uses 'as Meta'")
    if (c.hasExperimentalWrapper) why.push("experimental wrapper")
    if (!c.name.startsWith("F0")) why.push("missing F0 prefix")
    reason = `Tagged stable but does NOT meet DoD: ${why.join(", ")}`
  } else if (d === "experimental" && inStable && dod) {
    to = "stable"
    reason = "Tagged experimental in stable folder AND meets DoD — eligible for promotion"
  } else if (d === "unknown" && inStable && dod) {
    to = "stable"
    reason = "Untagged in stable folder AND meets DoD — promote"
  } else if (d === "unknown" && inStable && !dod) {
    to = "experimental"
    reason = "Untagged in stable folder, does NOT meet DoD — declare experimental until promoted"
  } else if (d === "unknown" && inExp) {
    to = "experimental"
    reason = "Untagged in experimental/ folder"
  }
  // Note: experimental in stable folder NOT meeting DoD → no fix; correctly stays experimental
  // Note: stable in stable folder meeting DoD → no fix; already correct

  if (to && to !== d) {
    fixes.push({
      componentName: c.name,
      storyPath: c.storyPath,
      folder: c.folder,
      from: d,
      to,
      reason,
      currentTags: c.storyTags,
      meetsDoD: dod,
    })
  }
}

const MATURITY_LITERALS = new Set([
  '"stable"', '"experimental"', '"deprecated"', '"internal"',
  "'stable'", "'experimental'", "'deprecated'", "'internal'",
])

function classify(fix) {
  const abs = path.join(REPO_ROOT, fix.storyPath)
  if (!fs.existsSync(abs)) return { ...fix, tier: "manual", problem: "File not found" }
  const content = fs.readFileSync(abs, "utf8")
  const lines = content.split("\n")
  const tagsIdx = lines.findIndex((l) => /^\s*tags\s*:\s*\[/.test(l))

  if (tagsIdx === -1) {
    const titleIdx = lines.findIndex((l) => /^\s*title\s*:\s*['"`]/.test(l))
    if (titleIdx === -1) {
      return { ...fix, tier: "manual", problem: "No `tags:` line and no `title:` anchor" }
    }
    const indent = lines[titleIdx].match(/^\s*/)?.[0] ?? "  "
    return {
      ...fix,
      tier: "insert",
      anchorLine: titleIdx + 1,
      anchorText: lines[titleIdx],
      contextAfter: lines[titleIdx + 1] ?? null,
      newLine: `${indent}tags: ["${fix.to}"],`,
    }
  }

  const line = lines[tagsIdx]
  const singleLine = /^\s*tags\s*:\s*\[[^\]]*\]\s*,?\s*$/.test(line)
  if (!singleLine) {
    return { ...fix, tier: "manual", problem: "Multi-line `tags:` array — needs human review" }
  }
  const m = line.match(/^(\s*tags\s*:\s*)\[([^\]]*)\](\s*,?\s*)$/)
  if (!m) return { ...fix, tier: "manual", problem: "Could not parse `tags:` line" }
  const [, prefix, inner, suffix] = m
  const items = inner.split(",").map((s) => s.trim()).filter(Boolean)
  const filtered = items.filter((i) => !MATURITY_LITERALS.has(i))
  filtered.push(`"${fix.to}"`)
  const newLine = `${prefix}[${filtered.join(", ")}]${suffix}`
  if (newLine === line) {
    return { ...fix, tier: "manual", problem: "Already correct" }
  }
  return {
    ...fix,
    tier: "clean",
    lineNumber: tagsIdx + 1,
    oldLine: line,
    newLine,
    contextBefore: lines[tagsIdx - 1] ?? null,
    contextAfter: lines[tagsIdx + 1] ?? null,
  }
}

const classified = fixes.map(classify)

const tiers = {
  clean: classified.filter((f) => f.tier === "clean"),
  insert: classified.filter((f) => f.tier === "insert"),
  manual: classified.filter((f) => f.tier === "manual"),
}

// Build unified diff
const patchLines = []
for (const fix of [...tiers.clean, ...tiers.insert]) {
  const abs = path.join(REPO_ROOT, fix.storyPath)
  const lines = fs.readFileSync(abs, "utf8").split("\n")

  if (fix.tier === "clean") {
    const idx = fix.lineNumber - 1
    const ctxBefore = lines[idx - 1] ?? null
    const ctxAfter = lines[idx + 1] ?? null
    const hunkBody = []
    let oldStart = idx + 1
    let oldCount = 1
    let newCount = 1
    if (ctxBefore !== null) {
      hunkBody.push(" " + ctxBefore)
      oldStart = idx
      oldCount++
      newCount++
    }
    hunkBody.push("-" + fix.oldLine)
    hunkBody.push("+" + fix.newLine)
    if (ctxAfter !== null) {
      hunkBody.push(" " + ctxAfter)
      oldCount++
      newCount++
    }
    patchLines.push(`diff --git a/${fix.storyPath} b/${fix.storyPath}`)
    patchLines.push(`--- a/${fix.storyPath}`)
    patchLines.push(`+++ b/${fix.storyPath}`)
    patchLines.push(`@@ -${oldStart},${oldCount} +${oldStart},${newCount} @@`)
    patchLines.push(...hunkBody)
  } else if (fix.tier === "insert") {
    const idx = fix.anchorLine - 1
    const ctxAfter = lines[idx + 1] ?? null
    const hunkBody = [" " + fix.anchorText, "+" + fix.newLine]
    let oldStart = idx + 1
    let oldCount = 1
    let newCount = 2
    if (ctxAfter !== null) {
      hunkBody.push(" " + ctxAfter)
      oldCount++
      newCount++
    }
    patchLines.push(`diff --git a/${fix.storyPath} b/${fix.storyPath}`)
    patchLines.push(`--- a/${fix.storyPath}`)
    patchLines.push(`+++ b/${fix.storyPath}`)
    patchLines.push(`@@ -${oldStart},${oldCount} +${oldStart},${newCount} @@`)
    patchLines.push(...hunkBody)
  }
}
const patchText = patchLines.join("\n") + "\n"

// Write outputs
fs.mkdirSync(OUT_PATCH_DIR, { recursive: true })
fs.writeFileSync(OUT_PATCH, patchText)

const plan = {
  generatedAt: new Date().toISOString(),
  total: classified.length,
  counts: {
    clean: tiers.clean.length,
    insert: tiers.insert.length,
    manual: tiers.manual.length,
  },
  patchRelPath: "patches/ola-1.patch",
  fixes: classified,
}
fs.writeFileSync(OUT_PLAN, JSON.stringify(plan, null, 2))

console.log("Ola 1 plan written.")
console.log(`  clean:  ${tiers.clean.length}`)
console.log(`  insert: ${tiers.insert.length}`)
console.log(`  manual: ${tiers.manual.length}`)
console.log(`  total:  ${classified.length}`)
console.log(`  patch:  ${path.relative(REPO_ROOT, OUT_PATCH)}`)
console.log(`  json:   ${path.relative(REPO_ROOT, OUT_PLAN)}`)
