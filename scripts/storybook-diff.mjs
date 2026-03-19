/**
 * storybook-diff.mjs
 *
 * Compares the current Storybook index.json against a saved snapshot
 * and opens a GitHub Issue summarising what changed.
 *
 * Usage (GitHub Actions):
 *   node scripts/storybook-diff.mjs \
 *     --storybook-url https://ds.factorial.dev \
 *     --snapshot scripts/storybook-snapshot.json \
 *     --github-token $GITHUB_TOKEN \
 *     --github-repo factorialco/f0 \
 *     --commit-sha $GITHUB_SHA
 */

import fs from "fs"
import path from "path"
import https from "https"
import { parseArgs } from "util"

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------

const { values: args } = parseArgs({
  options: {
    "storybook-url": { type: "string", default: "https://ds.factorial.dev" },
    snapshot: { type: "string", default: "scripts/storybook-snapshot.json" },
    "github-token": { type: "string" },
    "github-repo": { type: "string", default: "factorialco/f0" },
    "commit-sha": { type: "string", default: "" },
  },
})

const STORYBOOK_URL = args["storybook-url"]
const SNAPSHOT_PATH = path.resolve(args["snapshot"])
const GITHUB_TOKEN = args["github-token"]
const GITHUB_REPO = args["github-repo"]
const COMMIT_SHA = args["commit-sha"]
const SHORT_SHA = COMMIT_SHA.slice(0, 7)

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------

function fetchJson(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url)
    const reqOptions = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: options.method ?? "GET",
      headers: options.headers ?? {},
    }

    let body = null
    if (options.body) {
      body = JSON.stringify(options.body)
      reqOptions.headers["Content-Type"] = "application/json"
      reqOptions.headers["Content-Length"] = Buffer.byteLength(body)
    }

    const req = https.request(reqOptions, (res) => {
      let data = ""
      res.on("data", (chunk) => (data += chunk))
      res.on("end", () => {
        try {
          resolve(JSON.parse(data))
        } catch (e) {
          resolve(data)
        }
      })
    })
    req.on("error", reject)
    if (body) req.write(body)
    req.end()
  })
}

// ---------------------------------------------------------------------------
// Extract component inventory from Storybook index.json
// ---------------------------------------------------------------------------

function extractComponents(indexJson) {
  const entries = indexJson.entries ?? indexJson.stories ?? {}
  const components = {}

  for (const entry of Object.values(entries)) {
    const title = entry.title ?? ""
    const parts = title.split("/")
    const name = parts[parts.length - 1]
    const category = parts.slice(0, -1).join("/")

    if (!components[name]) {
      // Store the first story id to build a direct Storybook URL later
      components[name] = {
        category,
        tags: entry.tags ?? [],
        storyId: entry.id ?? "",
      }
    }
  }

  return components
}

// ---------------------------------------------------------------------------
// Classify a changed component into one of four buckets
//
//   breaking  — removed component that had the `stable` tag
//               OR a component whose tag changed from `stable` to `deprecated`
//               (i.e. it was `stable` in the snapshot and is now `deprecated`)
//
//   visual    — any change (added or removed) whose category starts with
//               "Foundations" (colors, spacing, typography, borders, shadows,
//               icons) — these are token/style changes critical for designs
//
//   new       — component is brand-new (added, not in snapshot), not Foundations,
//               not experimental/internal
//
//   low       — experimental or internal components (lower priority noise)
// ---------------------------------------------------------------------------

function classify(component, direction, prevComponent) {
  const { category, tags } = component
  const tagSet = new Set(tags ?? [])

  // Foundations first — takes priority for both added and removed
  if (category.startsWith("Foundations")) {
    return "visual"
  }

  if (direction === "removed") {
    const prevTagSet = new Set(prevComponent?.tags ?? [])
    if (prevTagSet.has("stable")) {
      return "breaking"
    }
  }

  if (direction === "added") {
    // stable→deprecated transition is handled in diff() via a separate "changed" list
    if (tagSet.has("experimental") || tagSet.has("internal")) {
      return "low"
    }
    return "new"
  }

  // removed, non-stable, non-Foundations
  if (tagSet.has("experimental") || tagSet.has("internal")) {
    return "low"
  }

  return "low"
}

// ---------------------------------------------------------------------------
// Build a direct Storybook docs URL for a component
// Using /docs/ so the link lands on the documentation page, not a raw story
// ---------------------------------------------------------------------------

function storybookUrl(baseUrl, storyId) {
  if (!storyId) return baseUrl
  // Convert story id to docs id: strip the trailing story variant
  // e.g. "components-f0button--default" → "components-f0button--docs"
  const docsId = storyId.replace(/--[^-]+$/, "--docs")
  return `${baseUrl}/?path=/docs/${docsId}`
}

// ---------------------------------------------------------------------------
// Diff
// ---------------------------------------------------------------------------

function diff(prev, curr, storybookBase) {
  const added = []
  const removed = []
  const degraded = [] // stable → deprecated transitions

  const prevKeys = new Set(Object.keys(prev))
  const currKeys = new Set(Object.keys(curr))

  for (const key of currKeys) {
    if (!prevKeys.has(key)) {
      const c = curr[key]
      added.push({
        name: key,
        category: c.category,
        tags: c.tags,
        url: storybookUrl(storybookBase, c.storyId),
        bucket: classify(c, "added", null),
      })
    } else {
      // Component exists in both — check for stable → deprecated transition
      const prevC = prev[key]
      const currC = curr[key]
      const prevTags = new Set(prevC.tags ?? [])
      const currTags = new Set(currC.tags ?? [])
      if (prevTags.has("stable") && currTags.has("deprecated") && !prevTags.has("deprecated")) {
        degraded.push({
          name: key,
          category: currC.category,
          tags: currC.tags,
          url: storybookUrl(storybookBase, currC.storyId),
          bucket: "breaking",
        })
      }
    }
  }

  for (const key of prevKeys) {
    if (!currKeys.has(key)) {
      const c = prev[key]
      removed.push({
        name: key,
        category: c.category,
        tags: c.tags,
        url: storybookUrl(storybookBase, c.storyId),
        bucket: classify(c, "removed", prev[key]),
      })
    }
  }

  return { added, removed, degraded }
}

// ---------------------------------------------------------------------------
// GitHub Issue builder
// ---------------------------------------------------------------------------

function buildIssueBody(changes, commitSha, repo) {
  const { added, removed, degraded } = changes
  const commitUrl = `https://github.com/${repo}/commit/${commitSha}`
  const lines = []

  // ── Buckets ──────────────────────────────────────────────────────────────
  const breaking = [
    ...degraded,
    ...removed.filter((c) => c.bucket === "breaking"),
  ]
  const visual = [
    ...added.filter((c) => c.bucket === "visual"),
    ...removed.filter((c) => c.bucket === "visual"),
  ]
  const newAtoms = added.filter((c) => c.bucket === "new")
  const lowImpact = [
    ...added.filter((c) => c.bucket === "low"),
    ...removed.filter((c) => c.bucket === "low"),
  ]

  // ── 1. Breaking Changes ─────────────────────────────────────────────────
  if (breaking.length > 0) {
    lines.push("## 🔴 Breaking Changes")
    lines.push(
      "_Componentes `stable` eliminados o marcados como `deprecated`. Revisa tus diseños — pueden estar usando algo que ya no existe._\n"
    )
    for (const c of breaking) {
      const reason = degraded.includes(c) ? "degraded to `deprecated`" : "removed"
      lines.push(`- **[${c.name}](${c.url})** \`${c.category}\` — ${reason}`)
    }
    lines.push("")
  }

  // ── 2. Visual Tweaks (Foundations) ──────────────────────────────────────
  if (visual.length > 0) {
    lines.push("## 🎨 Visual Tweaks — Foundations")
    lines.push(
      "_Cambios en tokens de diseño (colores, espaciado, tipografía, bordes, sombras, iconos). Impacto directo en todos los diseños._\n"
    )
    for (const c of visual) {
      const direction = added.includes(c) ? "added" : "removed"
      lines.push(`- **[${c.name}](${c.url})** \`${c.category}\` — ${direction}`)
    }
    lines.push("")
  }

  // ── 3. New Atoms ─────────────────────────────────────────────────────────
  if (newAtoms.length > 0) {
    lines.push("## ✨ New Atoms")
    lines.push("_Componentes nuevos que no existían en el snapshot anterior._\n")
    for (const c of newAtoms) {
      const tagBadges = c.tags.filter((t) => ["stable", "experimental", "deprecated"].includes(t))
      const badge = tagBadges.length ? ` \`${tagBadges.join("` `")}\`` : ""
      lines.push(`- **[${c.name}](${c.url})** \`${c.category}\`${badge}`)
    }
    lines.push("")
  }

  // ── 4. Low Impact (Experimental / Internal) ──────────────────────────────
  if (lowImpact.length > 0) {
    lines.push("<details>")
    lines.push("<summary>🔇 Bajo impacto — Experimental / Internal</summary>\n")
    lines.push(
      "_Cambios en componentes experimentales o internos. No requieren acción inmediata._\n"
    )
    for (const c of lowImpact) {
      const direction = added.includes(c) ? "added" : "removed"
      lines.push(`- **[${c.name}](${c.url})** \`${c.category}\` — ${direction}`)
    }
    lines.push("</details>")
    lines.push("")
  }

  lines.push("---")
  lines.push(
    `Triggered by [${commitSha.slice(0, 7)}](${commitUrl}) · [View Storybook](https://ds.factorial.dev)`
  )

  return lines.join("\n")
}

async function openGithubIssue(token, repo, title, body) {
  const [owner, repoName] = repo.split("/")
  const result = await fetchJson(`https://api.github.com/repos/${owner}/${repoName}/issues`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "User-Agent": "storybook-diff-bot",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: {
      title,
      body,
      labels: ["storybook", "design-system"],
    },
  })

  return result.html_url
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`Fetching Storybook index from ${STORYBOOK_URL}/index.json ...`)
  const indexJson = await fetchJson(`${STORYBOOK_URL}/index.json`)
  const currentComponents = extractComponents(indexJson)

  let prevComponents = {}
  if (fs.existsSync(SNAPSHOT_PATH)) {
    prevComponents = JSON.parse(fs.readFileSync(SNAPSHOT_PATH, "utf-8"))
    console.log(`Loaded snapshot: ${Object.keys(prevComponents).length} components`)
  } else {
    console.log("No snapshot found — saving baseline, no notification sent.")
    fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(currentComponents, null, 2), "utf-8")
    return
  }

  const changes = diff(prevComponents, currentComponents, STORYBOOK_URL)
  const { added, removed, degraded } = changes
  const total = added.length + removed.length + degraded.length

  console.log(`Diff: +${added.length} added, -${removed.length} removed, ~${degraded.length} degraded`)

  // Always update snapshot
  fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(currentComponents, null, 2), "utf-8")
  console.log(`Snapshot updated → ${SNAPSHOT_PATH}`)

  if (total === 0) {
    console.log("No changes detected — skipping GitHub Issue.")
    return
  }

  if (!GITHUB_TOKEN) {
    console.log("No --github-token provided — printing diff to stdout only.")
    console.log(JSON.stringify(changes, null, 2))
    return
  }

  const breakingCount = degraded.length + removed.filter((c) => c.bucket === "breaking").length
  const titleParts = []
  if (breakingCount > 0) titleParts.push(`🔴 ${breakingCount} breaking`)
  if (added.filter((c) => c.bucket === "new").length > 0)
    titleParts.push(`✨ ${added.filter((c) => c.bucket === "new").length} new`)
  if (added.filter((c) => c.bucket === "visual").length + removed.filter((c) => c.bucket === "visual").length > 0)
    titleParts.push(`🎨 foundations`)
  const title = `[Design System] ${titleParts.join(" · ")} · ${SHORT_SHA}`
  const body = buildIssueBody(changes, COMMIT_SHA, GITHUB_REPO)
  const issueUrl = await openGithubIssue(GITHUB_TOKEN, GITHUB_REPO, title, body)

  console.log(`GitHub Issue opened: ${issueUrl}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
