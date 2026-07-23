import type { AxeResults, Result, TagValue } from "axe-core"
import React, { useCallback, useRef, useState } from "react"

/**
 * The Accessibility row inside the Maturity-level checklist.
 *
 * Collapsed, it shows the build-time posture (enforced / not-enforced / axe
 * skipped) — cheap, works anywhere the panel ships. On first expand, and only
 * inside Storybook, it lazily loads axe-core and runs it against the story
 * canvases already rendered on the docs page, then lists the failing WCAG
 * criteria. CI (`test: "error"`, with play functions) remains the source of
 * truth — this is a fresh, default-state indicator.
 */

const WCAG_TAGS: TagValue[] = [
  "wcag2a",
  "wcag2aa",
  "wcag21a",
  "wcag21aa",
  "wcag22a",
  "wcag22aa",
]

interface Criterion {
  ruleId: string
  description: string
  sc: string | null
  level: string
  version: string
  nodes: number
}

/** Derive WCAG success criterion, level and version from an axe rule's tags. */
function wcagFromTags(
  tags: string[]
): Omit<Criterion, "ruleId" | "description" | "nodes"> {
  let sc: string | null = null
  for (const t of tags) {
    const m = /^wcag(\d)(\d)(\d{1,2})$/.exec(t)
    if (m) {
      sc = `${m[1]}.${m[2]}.${m[3]}`
      break
    }
  }
  const level = tags.some((t) => /^wcag2\d?aa$/.test(t)) ? "AA" : "A"
  const version =
    tags.includes("wcag22a") || tags.includes("wcag22aa")
      ? "2.2"
      : tags.includes("wcag21a") || tags.includes("wcag21aa")
        ? "2.1"
        : "2.0"
  return { sc, level, version }
}

type AuditState =
  | { status: "idle" }
  | { status: "running" }
  | { status: "unavailable" }
  | { status: "done"; criteria: Criterion[] }

function isInStorybookDocs(): boolean {
  return (
    typeof document !== "undefined" &&
    document.querySelector("#storybook-docs") !== null
  )
}

async function runAudit(): Promise<Criterion[]> {
  const { default: axe } = await import("axe-core")
  const canvases = Array.from(
    document.querySelectorAll<HTMLElement>("#storybook-docs .docs-story")
  )
  const targets = canvases.length > 0 ? canvases : []

  const byRule = new Map<string, Criterion>()
  // Serialize: axe throws "Axe is already running" on concurrent runs.
  for (const node of targets) {
    let results: AxeResults
    try {
      results = await axe.run(node, {
        runOnly: { type: "tag", values: WCAG_TAGS },
      })
    } catch {
      continue
    }
    for (const v of results.violations as Result[]) {
      const existing = byRule.get(v.id)
      const nodeCount = v.nodes.length
      if (existing) {
        existing.nodes += nodeCount
      } else {
        byRule.set(v.id, {
          ruleId: v.id,
          description: v.description,
          nodes: nodeCount,
          ...wcagFromTags(v.tags),
        })
      }
    }
  }
  return Array.from(byRule.values()).sort((a, b) => b.nodes - a.nodes)
}

export function A11yRow({
  detail,
  enforced,
  skipped,
}: {
  detail: string
  enforced: boolean
  skipped: boolean
}) {
  const [audit, setAudit] = useState<AuditState>({ status: "idle" })
  const started = useRef(false)

  const onToggle = useCallback(
    (e: React.SyntheticEvent<HTMLDetailsElement>) => {
      if (!e.currentTarget.open || started.current) return
      started.current = true
      if (!isInStorybookDocs()) {
        setAudit({ status: "unavailable" })
        return
      }
      setAudit({ status: "running" })
      runAudit().then(
        (criteria) => setAudit({ status: "done", criteria }),
        () => setAudit({ status: "unavailable" })
      )
    },
    []
  )

  const met = enforced
  const glyph = met ? "✓" : skipped ? "–" : "✕"
  const glyphColor = met
    ? "text-f1-foreground-positive"
    : skipped
      ? "text-f1-foreground-secondary"
      : "text-f1-foreground-warning"
  const posture = met
    ? "enforced"
    : skipped
      ? "axe skipped — not measured"
      : "not enforced — running axe on this component’s stories"

  return (
    <li className="flex items-start gap-2">
      <span aria-hidden className={`mt-0.5 shrink-0 ${glyphColor}`}>
        {glyph}
      </span>
      <details className="min-w-0 flex-1" onToggle={onToggle}>
        <summary className="cursor-pointer list-none text-base text-f1-foreground marker:hidden [&::-webkit-details-marker]:hidden">
          Accessibility{" "}
          <span className="text-f1-foreground-secondary">— {posture}</span>
        </summary>
        <div className="mt-1 text-base text-f1-foreground-secondary">
          {detail}
          {audit.status === "running" && (
            <p className="mt-2 italic">Running axe on the rendered stories…</p>
          )}
          {audit.status === "unavailable" && (
            <p className="mt-2">
              Live results are available on the Storybook docs page. See the
              story’s <strong>Accessibility</strong> tab for per-element detail.
            </p>
          )}
          {audit.status === "done" && audit.criteria.length === 0 && (
            <p className="mt-2 text-f1-foreground-positive">
              No violations in the stories’ default state.
            </p>
          )}
          {audit.status === "done" && audit.criteria.length > 0 && (
            <ul className="mt-2 list-none space-y-1 p-0">
              {audit.criteria.map((c) => (
                <li
                  key={c.ruleId}
                  className="flex items-start gap-2 !text-base"
                >
                  <span
                    aria-hidden
                    className="shrink-0 text-f1-foreground-warning"
                  >
                    ⚠
                  </span>
                  <span>
                    <code className="text-f1-foreground">{c.ruleId}</code>
                    {c.sc && (
                      <span className="text-f1-foreground-secondary">
                        {" "}
                        · WCAG {c.sc} {c.level} ({c.version})
                      </span>
                    )}
                    <span className="text-f1-foreground-secondary">
                      {" "}
                      · {c.description} · {c.nodes}{" "}
                      {c.nodes === 1 ? "element" : "elements"}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          )}
          {(audit.status === "done" || audit.status === "unavailable") && (
            <p className="mt-2 text-sm text-f1-foreground-secondary">
              Checked in each story’s default state — violations behind
              interactions (open menus, dialogs) aren’t shown here. CI enforces
              the full set, including play-function states.
            </p>
          )}
        </div>
      </details>
    </li>
  )
}
