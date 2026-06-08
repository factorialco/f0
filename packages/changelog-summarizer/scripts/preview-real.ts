/**
 * Real-data preview — builds a Block Kit payload from actual commits between
 * 2026-04-27 and today, classified by hand (since the LLM is unavailable).
 *
 * Run from `packages/changelog-summarizer/`:
 *   pnpm tsx scripts/preview-real.ts
 */

import { writeFileSync } from "fs"
import { collectStoryUrls, resolveStoryUrl } from "../src/collectors/stories.js"
import {
  jsonToSlackText,
  parseSummaryJson,
} from "../src/formatters/json-formatter.js"

// Classification based on the actual git log between 2026-04-27 and 2026-05-26.
// Followed the same rules as the product-v2 prompt:
// - "new" = brand-new component (didn't exist before)
// - "enhancements" = additions/improvements to existing components
// - "fixes" = single sentence grouping all fixes
// - "infrastructure" = build, tests, tooling, docs infra
const realJson = {
  sections: {
    new: [
      {
        component: "F0Graph",
        summary:
          "New chart pattern for building runtime graph visualizations",
        detail: "Lives under Patterns/Graph in Storybook",
        storybook: true,
        author: "Ángel Saavedra",
      },
      {
        component: "F0SegmentedControl",
        summary:
          "New experimental segmented control for switching between a few related options",
        storybook: true,
        author: "Desirée Navarro",
      },
      {
        component: "UpsellingAlert",
        summary:
          "New alert component for the upselling kit to prompt plan upgrades inline",
        storybook: true,
        author: "daviz-fct",
      },
    ],
    // NOTE: illustrative — these two were actually promoted to stable in early
    // April (#3849/#3850), just before this preview's window, but there were no
    // stabilizations in 2026-04-27 → 2026-05-26. Kept here to show the section.
    stabilized: [
      {
        component: "F0DatePicker",
        summary: "Promoted out of experimental — now stable and safe to use",
        storybook: true,
        author: "Eliseo Juan Quintanilla",
      },
      {
        component: "OneEmptyState",
        summary: "Promoted out of experimental — now stable and safe to use",
        storybook: true,
        author: "Eliseo Juan Quintanilla",
      },
    ],
    enhancements: [
      {
        component: "F0AiChat",
        summary:
          "Big push this week — added the ability to ask clarifying questions mid-conversation, employee credits popover, before-send hook, file attachment limits, dashboard header redesign and a pluggable canvas",
        detail:
          "Per-column tooltips, requisition entity ref enrichment and chat-wide drop zone also shipped",
        storybook: true,
        author: "Raúl Sigüenza & contributors",
      },
      {
        component: "PageHeader",
        summary: "Page title area now supports AI-kind actions",
        storybook: true,
        author: "Igor Safonov",
      },
      {
        component: "F0Card",
        summary:
          "Added a controlled alert option and an optional action button on the alert area",
        storybook: true,
        author: "Idowu Arifayan",
      },
      {
        component: "F0Form",
        summary:
          "New autosubmit submit type that keeps focus on the active field while saving",
        storybook: true,
        author: "Rubén Moya",
      },
      {
        component: "F0Link",
        summary:
          "Added a mention variant with a shared mention recipe so the same look works across surfaces",
        storybook: true,
        author: "Desirée Navarro",
      },
      {
        component: "F0DataChart",
        summary: "Data charts now show a proper empty state",
        storybook: true,
        author: "Raúl Sigüenza Sánchez",
      },
      {
        component: "F0Box",
        summary: "New inset options for finer control over internal spacing",
        storybook: true,
        author: "David Matos",
      },
      {
        component: "F0Tabs",
        summary:
          "Tab id type is now generic so consumers can use their own union types",
        storybook: true,
        author: "oscarbyte",
      },
      {
        component: "EditableTable",
        summary:
          "Several improvements: per-row dynamic units, min/max constraints on date cells, formulas and hints on cells, null handling on number cells, and fixes to focus loss and action column width",
        storybook: true,
        author: "Vinicius Meneses & contributors",
      },
      {
        component: "ResourceHeader",
        summary: "Added a secondary dropdown option for additional actions",
        storybook: true,
        author: "Pau Hernando",
      },
      {
        component: "RadarChart",
        summary:
          "Interactive legend with the ability to hide individual series",
        storybook: true,
        author: "Vinicius Meneses",
      },
      {
        component: "Selectable and bulk actions",
        summary:
          "Data collection bulk actions now report loading, success and error status as they run",
        storybook: true,
        author: "Jan Chruszcz",
      },
      {
        component: "SurveyFormBuilder",
        summary:
          "Hide individual question actions in surveys; also new option creation for select-from-dataset questions",
        storybook: true,
        author: "Santi Guillén & Maria",
      },
      {
        component: "Filters",
        summary:
          "Filters can now be cancelled and the apply action runs independently; tags also expose onApply and support icons",
        storybook: true,
        author: "David Matos",
      },
    ],
  },
  thread_details:
    "Technical notes for consumers: F0AiChat received a breaking change (#4106) — built-in actions were dropped and the canvas is now pluggable; please review your composition before upgrading. A new ExpenseEntityRef hover card was added alongside the existing Candidate/Requisition/Vacancy ones — registered automatically via entityRefRegistry. F0Graph is a new pattern, see Patterns/Graph in Storybook. F0SegmentedControl is experimental — API may still change. UpsellingAlert lives in the upselling-kit (SDS). F0DatePicker and OneEmptyState were promoted from experimental to stable. EditableTable gained per-row dynamic units (`unitsByRow`), formulas/hints (`hint`, `formula`), and number cells now accept null. F0Card now exposes a controlled `alert` prop on top of the new `CardAlert.action`. F0Form's `autosubmit` submit type preserves focus on the active input. F0Box gained `insetX`/`insetY` props. F0Tabs id type is now generic — `<F0Tabs<\"foo\" | \"bar\">>`. PageHeader actions can now be tagged as AI-kind. Fixes this week: F0Select double-emit on async datasources and external value resets, RichTextEditor fullscreen inside dialogs, F0Button docs sidebar visibility, ApplicationFrame stories, MultitaskHeader icon consistency, SurveyAnsweringForm centering, and MDX formatting in CrudPatterns. Infra: Storybook MDX sidebar visibility improved, CRUD patterns docs landed, the release workflow can now be triggered manually, and the F0Button/F0ButtonDropdown docs pages are now discoverable.",
}

async function main(): Promise<void> {
  console.error("[preview-real] Fetching Storybook index for real URLs…")
  const storyUrls = await collectStoryUrls()

  const json = parseSummaryJson(JSON.stringify(realJson))
  const slackText = jsonToSlackText(json, storyUrls)
  if (!slackText) throw new Error("Formatter returned null")

  const fromStr = "2026-04-27"
  const toStr = "2026-05-26"
  const summaryFile = `:f0-dev: F0 Weekly Summary (${fromStr} – ${toStr})\n---\n${slackText}`
  const threadFile = json.thread_details ?? ""

  writeFileSync("/tmp/zerito-real.md", summaryFile)
  writeFileSync("/tmp/zerito-real-thread.txt", threadFile)

  const blocks = buildBlocks(summaryFile)
  writeFileSync(
    "/tmp/zerito-real-blocks.json",
    JSON.stringify({ blocks }, null, 2),
  )

  console.error("")
  console.error("✅ Real-data preview ready:")
  console.error("   /tmp/zerito-real.md          (raw summary file)")
  console.error("   /tmp/zerito-real-thread.txt  (threaded reply)")
  console.error("   /tmp/zerito-real-blocks.json (paste in Block Kit Builder)")
  console.error("")
  console.error("Resolved Storybook links:")
  for (const entry of [
    ...(json.sections.new ?? []),
    ...(json.sections.enhancements ?? []),
  ]) {
    if (!entry.storybook) continue
    const url = resolveStoryUrl(entry.component, storyUrls)
    const status = url
      ? `→ ${url}`
      : "→ (no docs page — bullet shown without link)"
    console.error(`   ${entry.component.padEnd(24)} ${status}`)
  }
}

interface BlockKitBlock {
  type: string
  text?: { type: string; text: string; emoji?: boolean }
}

/**
 * Split a section body into chunks that each stay under Slack's 3000-char
 * mrkdwn limit, breaking only at bullet boundaries (blank lines) so no single
 * bullet is ever cut in half.
 */
function chunkMrkdwn(body: string, limit = 2900): string[] {
  if (body.length <= limit) return [body]
  const bullets = body.split("\n\n")
  const chunks: string[] = []
  let current = ""
  for (const bullet of bullets) {
    const candidate = current ? `${current}\n\n${bullet}` : bullet
    if (candidate.length > limit && current) {
      chunks.push(current)
      current = bullet
    } else {
      current = candidate
    }
  }
  if (current) chunks.push(current)
  return chunks
}

function buildBlocks(content: string): BlockKitBlock[] {
  const lines = content.split("\n")
  const title = lines[0]
  const blocks: BlockKitBlock[] = [
    { type: "header", text: { type: "plain_text", text: title, emoji: true } },
  ]
  let firstSeen = false
  let segment: string[] = []
  const flush = () => {
    if (segment.length === 0) return
    blocks.push({ type: "divider" })
    blocks.push({
      type: "header",
      text: { type: "plain_text", text: segment[0], emoji: true },
    })
    // Slack caps a section's mrkdwn text at 3000 chars. A category with many
    // bullets can blow past that, so split the body into multiple section
    // blocks at bullet boundaries (blank lines) instead of one oversized block.
    for (const chunk of chunkMrkdwn(segment.slice(1).join("\n"))) {
      blocks.push({ type: "section", text: { type: "mrkdwn", text: chunk } })
    }
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
