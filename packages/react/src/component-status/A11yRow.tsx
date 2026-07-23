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
  tier,
}: {
  detail: string
  tier: "skipped" | "todo" | "enforced"
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

  const enforced = tier === "enforced"
  const glyph = enforced ? "✓" : "✕"
  const glyphColor = enforced
    ? "text-f1-foreground-positive"
    : "text-f1-foreground-secondary"
  const posture =
    tier === "enforced"
      ? "enforced"
      : tier === "skipped"
        ? "axe skipped"
        : "not enforced yet"

  return (
    <div role="listitem" className="flex items-start gap-2">
      <span aria-hidden className={`mt-0.5 shrink-0 ${glyphColor}`}>
        {glyph}
      </span>
      <div className="min-w-0">
        {/* Label + posture, always visible — matches the other checklist rows. */}
        <div className="text-base text-f1-foreground">
          Accessibility{" "}
          <span className="text-f1-foreground-secondary">— {posture}</span>
        </div>
        <div className="mt-0.5 text-base text-f1-foreground-secondary">
          {detail}
          {/* Only the live per-criterion results are collapsed — expanding
              triggers the axe run so the docs page stays cheap by default. */}
          <details className="mt-1" onToggle={onToggle}>
            <summary className="cursor-pointer list-none text-f1-foreground marker:hidden [&::-webkit-details-marker]:hidden">
              Check the rendered stories
            </summary>
            <div className="mt-2" aria-live="polite">
              {audit.status === "running" && (
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 shrink-0 animate-spin text-f1-foreground-secondary motion-reduce:animate-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeOpacity="0.25"
                      strokeWidth="3"
                    />
                    <path
                      d="M21 12a9 9 0 0 0-9-9"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>Checking the rendered stories…</span>
                </div>
              )}
              {audit.status === "unavailable" && (
                <p className="m-0">
                  Live results are available on the Storybook docs page. See the
                  story’s <strong>Accessibility</strong> tab for per-element
                  detail.
                </p>
              )}
              {audit.status === "done" && audit.criteria.length === 0 && (
                <p className="m-0 text-f1-foreground-positive">
                  No violations in the stories’ default state.
                </p>
              )}
              {audit.status === "done" && audit.criteria.length > 0 && (
                <div role="list" className="space-y-1">
                  {audit.criteria.map((c) => (
                    <div
                      key={c.ruleId}
                      role="listitem"
                      className="flex items-start gap-2 text-base"
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
                    </div>
                  ))}
                </div>
              )}
              {(audit.status === "done" || audit.status === "unavailable") && (
                <p className="mt-2 text-sm text-f1-foreground-secondary">
                  Checked in each story’s default state — violations behind
                  interactions (open menus, dialogs) aren’t shown here. CI
                  enforces the full set, including play-function states.
                </p>
              )}
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}
