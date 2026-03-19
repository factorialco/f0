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
      components[name] = { category, stories: [] }
    }
    components[name].stories.push(entry.name ?? entry.id)
  }

  return components
}

// ---------------------------------------------------------------------------
// Diff
// ---------------------------------------------------------------------------

function diff(prev, curr) {
  const added = []
  const removed = []

  const prevKeys = new Set(Object.keys(prev))
  const currKeys = new Set(Object.keys(curr))

  for (const key of currKeys) {
    if (!prevKeys.has(key)) {
      added.push({ name: key, category: curr[key].category })
    }
  }

  for (const key of prevKeys) {
    if (!currKeys.has(key)) {
      removed.push({ name: key, category: prev[key].category })
    }
  }

  return { added, removed }
}

// ---------------------------------------------------------------------------
// GitHub Issue builder
// ---------------------------------------------------------------------------

function buildIssueBody(changes, commitSha, repo) {
  const { added, removed } = changes
  const commitUrl = `https://github.com/${repo}/commit/${commitSha}`
  const lines = []

  if (added.length > 0) {
    lines.push("## New components\n")
    for (const c of added) {
      lines.push(`- \`${c.name}\` — \`${c.category}\``)
    }
    lines.push("")
  }

  if (removed.length > 0) {
    lines.push("## Removed components\n")
    for (const c of removed) {
      lines.push(`- \`${c.name}\` — \`${c.category}\``)
    }
    lines.push("")
  }

  lines.push("---")
  lines.push(`Triggered by [${commitSha.slice(0, 7)}](${commitUrl}) · [View Storybook](https://ds.factorial.dev)`)

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

  const changes = diff(prevComponents, currentComponents)
  const { added, removed } = changes
  const total = added.length + removed.length

  console.log(`Diff: +${added.length} added, -${removed.length} removed`)

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

  const title = `[Storybook] ${total} change${total !== 1 ? "s" : ""} detected (${SHORT_SHA})`
  const body = buildIssueBody(changes, COMMIT_SHA, GITHUB_REPO)
  const issueUrl = await openGithubIssue(GITHUB_TOKEN, GITHUB_REPO, title, body)

  console.log(`GitHub Issue opened: ${issueUrl}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
