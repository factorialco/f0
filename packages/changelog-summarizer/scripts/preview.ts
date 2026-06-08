/**
 * Visual preview tool — generates an example summary file + Block Kit payload
 * without calling the LLM, so you can paste it into
 * https://app.slack.com/block-kit-builder to see exactly how the message
 * renders in Slack.
 *
 * Run from `packages/changelog-summarizer/`:
 *   pnpm tsx scripts/preview.ts
 *
 * Outputs:
 *   /tmp/zerito-preview.md          ← summary file (what the workflow parses)
 *   /tmp/zerito-preview-thread.txt  ← threaded technical reply
 *   /tmp/zerito-preview-blocks.json ← Block Kit payload, paste this in the Builder
 */

import { writeFileSync } from "fs"
import { collectStoryUrls } from "../src/collectors/stories.js"
import {
  jsonToSlackText,
  parseSummaryJson,
} from "../src/formatters/json-formatter.js"

// A realistic-looking JSON, matching what the product-v2 prompt would emit
// for a typical F0 week. Mix of: components with Storybook pages, internal
// product components (no link), enhancements, fixes summary, infrastructure.
const sampleJson = {
  sections: {
    new: [
      {
        component: "VacancyEntityRef",
        summary:
          "New component for displaying vacancy information — no more custom solutions needed",
        storybook: false,
      },
      {
        component: "RequisitionEntityRef",
        summary:
          "New component for displaying requisition information — speeds up development",
        storybook: false,
      },
      {
        component: "EditableTable",
        summary:
          "New table component with inline editing support straight out of the box",
        storybook: true,
      },
    ],
    enhancements: [
      {
        component: "CandidateEntityRef",
        summary:
          "Now shows source and applied date, making candidate tracking easier",
        storybook: false,
      },
      {
        component: "F0AiChat",
        summary:
          "UX improved with clarifying questions, persistence between sessions, smoother animations, and reply support",
        storybook: true,
      },
      {
        component: "FileUpload",
        summary:
          "Document upload experience improved — drag, preview, and submit in one flow",
        storybook: true,
      },
      {
        component: "F0Form",
        summary: "Field shortcuts added — speeds up form completion",
        storybook: true,
      },
      {
        component: "PageHeader",
        summary:
          "Now supports custom actions on click — more flexible page interactions",
        storybook: true,
      },
      {
        component: "F0Button",
        summary: "New icons and visual changes — updated look and feel",
        storybook: true,
      },
    ],
    fixes: {
      summary:
        "Fixed issues with form submission in edit mode, rich text field updates, and various visual glitches",
    },
    infrastructure: {
      summary:
        "Build pipeline optimized, Storybook updated, and new tests added — improves development efficiency",
    },
  },
  thread_details:
    "Technical notes for consumers: VacancyEntityRef and RequisitionEntityRef live in the product app, not in @factorialco/f0-react. EditableTable is new in packages/react under Patterns/Data Collection. F0AiChat gained `onClarify`, `persistSession`, and `onReply` options — no breaking changes. PageHeader actions now accept a custom `onClick` handler in addition to `href`. Storybook upgraded to v10.2.10, drop your local cache before re-running stories.",
}

async function main(): Promise<void> {
  console.error("[preview] Fetching Storybook index for real URLs…")
  const storyUrls = await collectStoryUrls()

  // Round-trip through the parser so we exercise the same path as production.
  const json = parseSummaryJson(JSON.stringify(sampleJson))
  const slackText = jsonToSlackText(json, storyUrls)
  if (!slackText) {
    throw new Error("Formatter returned null — sample JSON was empty?")
  }

  const fromStr = "2026-04-17"
  const toStr = "2026-04-23"
  const summaryFile = `:f0-dev: F0 Weekly Summary (${fromStr} – ${toStr})\n---\n${slackText}`
  const threadFile = json.thread_details ?? ""

  writeFileSync("/tmp/zerito-preview.md", summaryFile)
  writeFileSync("/tmp/zerito-preview-thread.txt", threadFile)

  // Build the exact Block Kit payload the workflow produces, so you can paste
  // it into https://app.slack.com/block-kit-builder
  const blocks = buildBlocks(summaryFile)
  const payload = { blocks }
  writeFileSync(
    "/tmp/zerito-preview-blocks.json",
    JSON.stringify(payload, null, 2),
  )

  console.error("")
  console.error("✅ Preview ready:")
  console.error("   /tmp/zerito-preview.md          (raw summary file)")
  console.error("   /tmp/zerito-preview-thread.txt  (threaded reply)")
  console.error("   /tmp/zerito-preview-blocks.json (paste in Block Kit Builder)")
  console.error("")
  console.error("Resolved Storybook links:")
  for (const entry of [
    ...(json.sections.new ?? []),
    ...(json.sections.enhancements ?? []),
  ]) {
    if (!entry.storybook) continue
    const url = storyUrls.get(entry.component.toLowerCase()) ??
      storyUrls.get(`f0${entry.component.toLowerCase()}`) ??
      storyUrls.get(entry.component.toLowerCase().replace(/^f0/, "")) ?? null
    const status = url ? `→ ${url}` : "→ (no docs page — bullet shown without link)"
    console.error(`   ${entry.component.padEnd(22)} ${status}`)
  }
}

interface BlockKitBlock {
  type: string
  text?: { type: string; text: string; emoji?: boolean }
}

function buildBlocks(content: string): BlockKitBlock[] {
  const lines = content.split("\n")
  const title = lines[0]
  const blocks: BlockKitBlock[] = [
    { type: "header", text: { type: "plain_text", text: title, emoji: true } },
  ]

  // Mirror the bash logic in changelog-summary.yaml
  let firstSeen = false
  let segment: string[] = []

  const flush = () => {
    if (segment.length === 0) return
    const segTitle = segment[0]
    const segBody = segment.slice(1).join("\n")
    blocks.push({ type: "divider" })
    blocks.push({
      type: "header",
      text: { type: "plain_text", text: segTitle, emoji: true },
    })
    blocks.push({
      type: "section",
      text: { type: "mrkdwn", text: segBody },
    })
    segment = []
  }

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    if (line === "---") {
      if (!firstSeen) {
        firstSeen = true
        segment = []
        continue
      }
      flush()
      continue
    }
    segment.push(line)
  }
  if (firstSeen) flush()

  return blocks
}

main().catch((err) => {
  console.error("Error:", err instanceof Error ? err.stack : String(err))
  process.exit(1)
})
