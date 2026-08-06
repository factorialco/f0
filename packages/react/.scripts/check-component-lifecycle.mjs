#!/usr/bin/env node
/**
 * Classify component lifecycle transitions between a git base and HEAD.
 *
 * Both sides are read from git archives, rather than the working tree, so the
 * result depends only on committed source. The JSON report is consumed by the
 * PR label reconciler and the exit code is the lifecycle Definition of Done
 * gate.
 */
import { execFileSync } from "node:child_process"
import {
  mkdirSync,
  mkdtempSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs"
import { tmpdir } from "node:os"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import {
  computeComponentStatusData,
  meetsStableBar,
  normalizeComponentName,
} from "../scripts/component-status-build.mjs"

const PACKAGE_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const DOC_TIER_ORDER = ["none", "stub", "acceptable", "good", "gold"]
const PUBLIC_ZONES = [
  "components",
  "patterns",
  "sds",
  "kits",
  "experimental",
  "layouts",
  "hooks",
]

export const NEW_COMPONENT_LABEL = "lifecycle: new component"
export const STABILIZATION_LABEL = "stability: ready to review"

/** Identity deliberately excludes the source zone so promotions still match. */
export function componentIdentity(component) {
  return normalizeComponentName(component.name)
}

/**
 * Discover public component roots that do not have a story entry. Without
 * these placeholders, a brand-new component with no stories would be invisible
 * to the status scanner and could bypass the new-component gate entirely.
 */
export function discoverUnscannedComponents(srcDir, scannedComponents) {
  const placeholders = []
  const scannedStoryFiles = scannedComponents.map((component) =>
    component.storyFile.replaceAll("\\", "/")
  )

  function walkDirectory(directory, relativeDirectory, insideComponent) {
    let entries
    try {
      entries = readdirSync(directory, { withFileTypes: true })
    } catch {
      return
    }

    const folderName = relativeDirectory.split("/").at(-1) ?? ""
    const isComponentRoot =
      !insideComponent &&
      /^F0[A-Z0-9]/.test(folderName) &&
      entries.some(
        (entry) =>
          entry.isFile() &&
          (entry.name === "index.tsx" || entry.name === `${folderName}.tsx`)
      )

    if (isComponentRoot) {
      const storyPrefix = `${relativeDirectory}/`
      if (
        !scannedStoryFiles.some((storyFile) =>
          storyFile.startsWith(storyPrefix)
        )
      ) {
        const zone = relativeDirectory.split("/")[0]
        if (PUBLIC_ZONES.includes(zone)) {
          placeholders.push({
            name: folderName.replace(/^F0/, ""),
            zone,
            apiStatus: "unknown",
            tags: [],
            hasAutodocs: false,
            hasStories: false,
            storyCount: 0,
            hasUnitTests: false,
            hasPlayFunction: false,
            hasSnapshot: false,
            hasMdxDocs: false,
            docQuality: "none",
            a11yTier: "todo",
            storyFile: `${relativeDirectory}/(missing)`,
            componentRoot: relativeDirectory,
          })
        }
      }
    }

    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name === "node_modules") continue
      walkDirectory(
        resolve(directory, entry.name),
        relativeDirectory ? `${relativeDirectory}/${entry.name}` : entry.name,
        insideComponent || isComponentRoot
      )
    }
  }

  walkDirectory(srcDir, "", false)
  return placeholders
}

export function unmetExperimentalRequirements(component) {
  const missing = []
  if (!["experimental", "sds"].includes(component.zone)) {
    missing.push("experimental or sds zone")
  }
  if (component.apiStatus !== "experimental") {
    missing.push("experimental tag")
  }
  if (!component.hasAutodocs) missing.push("autodocs")
  if (component.storyCount < 3) missing.push("at least 3 exported stories")
  if (!component.hasUnitTests) missing.push("unit tests")
  if (!component.hasPlayFunction) missing.push("play function")
  if (!component.hasMdxDocs) missing.push("MDX docs")
  if (
    DOC_TIER_ORDER.indexOf(component.docQuality) <
    DOC_TIER_ORDER.indexOf("acceptable")
  ) {
    missing.push(`docs "acceptable" tier (is "${component.docQuality}")`)
  }
  if (component.a11yTier !== "enforced") {
    missing.push(`axe enforced (is "${component.a11yTier}")`)
  }
  return missing
}

function unmetStableRequirements(component) {
  const missing = []
  if (!component.hasStories) missing.push("stories")
  if (!component.hasUnitTests) missing.push("unit tests")
  if (!component.hasPlayFunction) missing.push("play function")
  if (!component.hasSnapshot) missing.push("snapshot story")
  if (!component.hasMdxDocs) missing.push("MDX docs")
  if (
    DOC_TIER_ORDER.indexOf(component.docQuality) <
    DOC_TIER_ORDER.indexOf("good")
  ) {
    missing.push(`docs "good" tier (is "${component.docQuality}")`)
  }
  if (component.a11yTier !== "enforced") {
    missing.push(`axe enforced (is "${component.a11yTier}")`)
  }
  return missing
}

function byIdentity(components) {
  return new Map(
    components.map((component) => [componentIdentity(component), component])
  )
}

export function classifyLifecycle(baseComponents, headComponents) {
  const baseByIdentity = byIdentity(baseComponents)
  const baseByRoot = new Map(
    baseComponents
      // The Storybook title is canonical across zone moves. The directory is a
      // safe fallback for title-only edits and for components gaining their
      // first story without becoming a new lifecycle entry.
      .filter((component) => component.componentRoot)
      .map((component) => [component.componentRoot, component])
  )
  const desiredLabels = new Set()
  const newComponents = []
  const stabilizations = []
  const failures = []

  for (const head of headComponents) {
    const base =
      baseByIdentity.get(componentIdentity(head)) ||
      (head.componentRoot ? baseByRoot.get(head.componentRoot) : undefined)

    // Either signal is enough to identify intent. This lets the gate explain a
    // misplaced experimental component or a missing experimental tag.
    const isNewComponentCandidate =
      base === undefined && PUBLIC_ZONES.includes(head.zone)

    if (isNewComponentCandidate) {
      desiredLabels.add(NEW_COMPONENT_LABEL)
      const missing = unmetExperimentalRequirements(head)
      if (missing.length === 0) newComponents.push(head.name)
      else failures.push({ kind: "new-component", name: head.name, missing })
      continue
    }

    if (!base || head.apiStatus !== "stable") continue

    const isPromotionAttempt = base.apiStatus === "experimental"
    const isStableDebtGraduation =
      base.apiStatus === "stable" &&
      !meetsStableBar(base) &&
      meetsStableBar(head)

    if (!isPromotionAttempt && !isStableDebtGraduation) continue

    if (meetsStableBar(head)) {
      desiredLabels.add(STABILIZATION_LABEL)
      stabilizations.push(head.name)
    } else {
      failures.push({
        kind: "stabilization",
        name: head.name,
        missing: unmetStableRequirements(head),
      })
    }
  }

  return {
    desiredLabels: [...desiredLabels].sort(),
    newComponents: newComponents.sort(),
    stabilizations: stabilizations.sort(),
    failures: failures.sort((a, b) =>
      `${a.kind}:${a.name}`.localeCompare(`${b.kind}:${b.name}`)
    ),
  }
}

/** Scan a committed ref by extracting only packages/react/src to a temp dir. */
export function scanGitRef(repoRoot, ref) {
  const archive = execFileSync(
    "git",
    ["archive", "--format=tar", ref, "packages/react/src"],
    { cwd: repoRoot, maxBuffer: 128 * 1024 * 1024 }
  )
  const tempRoot = mkdtempSync(resolve(tmpdir(), "f0-lifecycle-"))
  try {
    execFileSync("tar", ["-xf", "-", "-C", tempRoot], { input: archive })
    const srcDir = resolve(tempRoot, "packages/react/src")
    const scanned = computeComponentStatusData(srcDir).components.map(
      (component) => {
        const storyDirectory = dirname(component.storyFile).replaceAll(
          "\\",
          "/"
        )
        return {
          ...component,
          componentRoot: storyDirectory.endsWith("/__stories__")
            ? dirname(storyDirectory).replaceAll("\\", "/")
            : storyDirectory,
        }
      }
    )
    return [...scanned, ...discoverUnscannedComponents(srcDir, scanned)]
  } finally {
    rmSync(tempRoot, { recursive: true, force: true })
  }
}

export function exitCodeFor(report, reportOnly) {
  return !reportOnly && report.failures.length > 0 ? 1 : 0
}

export function parseCliArgs(args) {
  const options = { base: "origin/main", reportOnly: false }
  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index]
    if (argument === "--") {
      continue
    } else if (argument === "--report-only") {
      options.reportOnly = true
    } else if (argument === "--base" || argument === "--json-output") {
      const value = args[index + 1]
      if (!value || value.startsWith("--")) {
        throw new Error(`${argument} requires a value`)
      }
      if (argument === "--base") options.base = value
      else options.jsonOutput = value
      index += 1
    } else {
      throw new Error(`Unknown argument: ${argument}`)
    }
  }
  return options
}

function main() {
  const options = parseCliArgs(process.argv.slice(2))
  const repoRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], {
    cwd: PACKAGE_DIR,
    encoding: "utf-8",
  }).trim()
  const report = classifyLifecycle(
    scanGitRef(repoRoot, options.base),
    scanGitRef(repoRoot, "HEAD")
  )

  if (options.jsonOutput) {
    const outputPath = resolve(process.cwd(), options.jsonOutput)
    mkdirSync(dirname(outputPath), { recursive: true })
    writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`)
  }

  console.log(JSON.stringify(report, null, 2))
  if (report.failures.length > 0) {
    console.error(`${report.failures.length} lifecycle DoD failure(s).`)
  } else {
    console.log("Component lifecycle gates hold.")
  }
  process.exit(exitCodeFor(report, options.reportOnly))
}

if (
  process.argv[1] &&
  /check-component-lifecycle\.mjs$/.test(process.argv[1])
) {
  main()
}
