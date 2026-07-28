import type { AxeResults, Result, TagValue } from "axe-core"
import React, { useCallback, useEffect, useRef, useState } from "react"

import { A11Y_WCAG_TAGS } from "../lib/storybook-utils/a11yAxeConfig"
import type { A11yTier } from "./component-status"

/**
 * The Accessibility row inside the Maturity-level checklist.
 *
 * It shows the build-time posture (enforced / not-enforced / axe skipped) —
 * cheap, works anywhere the panel ships — and a live axe run against the story
 * canvases already rendered on the docs page, listing the failing WCAG
 * criteria. Two surfaces consume it:
 *
 * - `A11yRow` (the docs panel): the audit is behind a "Check the rendered
 *   stories" disclosure, so the page stays cheap until the reader asks.
 * - `A11yTooltipRow` (the maturity tag tooltip): a tooltip is transient and
 *   can't hold a disclosure, so the audit fires automatically on open.
 *
 * CI (`test: "error"`, with play functions) remains the source of truth — this
 * is a fresh, default-state indicator.
 */

// Shared with the addon (preview.tsx) and CI (test-runner.ts) so this row's
// verdict is judged by the same rules the gate enforces.
const WCAG_TAGS: TagValue[] = [...A11Y_WCAG_TAGS]

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

export type A11yAuditState =
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

/**
 * Runs the live axe audit and exposes its state plus an idempotent `start()`.
 * Call `start()` from a user action (the panel's disclosure) or on mount (the
 * tooltip); repeat calls are no-ops, so the expensive axe run happens at most
 * once per mount. Outside Storybook docs the state resolves to `unavailable`.
 */
export function useA11yAudit(): {
  state: A11yAuditState
  start: () => void
} {
  const [state, setState] = useState<A11yAuditState>({ status: "idle" })
  const started = useRef(false)

  const start = useCallback(() => {
    if (started.current) return
    started.current = true
    if (!isInStorybookDocs()) {
      setState({ status: "unavailable" })
      return
    }
    setState({ status: "running" })
    runAudit().then(
      (criteria) => setState({ status: "done", criteria }),
      () => setState({ status: "unavailable" })
    )
  }, [])

  return { state, start }
}

/** Color treatment per surface: the light docs panel vs. the dark tooltip. */
const TONE = {
  panel: {
    strong: "text-f1-foreground",
    muted: "text-f1-foreground-secondary",
  },
  tooltip: {
    // The tooltip surface is dark with an inherited white base, so muted text
    // is expressed as opacity over that white rather than the secondary token
    // (which resolves to a too-dim 50% white here). Strong text inherits.
    strong: "",
    muted: "opacity-75",
  },
} as const

/**
 * The result of a live axe run: a spinner while it works, the failing WCAG
 * criteria when done, or a fallback line when it can't run outside the docs
 * page. Presentational — the audit itself lives in `useA11yAudit`.
 */
export function A11yAuditResults({
  state,
  tone = "panel",
}: {
  state: A11yAuditState
  tone?: keyof typeof TONE
}) {
  const c = TONE[tone]
  return (
    <div className="mt-2" aria-live="polite">
      {state.status === "running" && (
        <div className="flex items-center gap-2">
          <svg
            className={`h-4 w-4 shrink-0 animate-spin motion-reduce:animate-none ${c.muted}`}
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
      {state.status === "unavailable" && (
        <p className="m-0">
          Live results are available on the Storybook docs page. See the story’s{" "}
          <strong>Accessibility</strong> tab for per-element detail.
        </p>
      )}
      {state.status === "done" && state.criteria.length === 0 && (
        <p className="m-0 text-f1-foreground-positive">
          No violations in the stories’ default state.
        </p>
      )}
      {state.status === "done" && state.criteria.length > 0 && (
        <div role="list" className="space-y-1">
          {state.criteria.map((crit) => (
            <div
              key={crit.ruleId}
              role="listitem"
              className="flex items-start gap-2 text-base"
            >
              <span aria-hidden className="shrink-0 text-f1-foreground-warning">
                ⚠
              </span>
              <span>
                <code className={c.strong}>{crit.ruleId}</code>
                {crit.sc && (
                  <span className={c.muted}>
                    {" "}
                    · WCAG {crit.sc} {crit.level} ({crit.version})
                  </span>
                )}
                <span className={c.muted}>
                  {" "}
                  · {crit.description} · {crit.nodes}{" "}
                  {crit.nodes === 1 ? "element" : "elements"}
                </span>
              </span>
            </div>
          ))}
        </div>
      )}
      {(state.status === "done" || state.status === "unavailable") && (
        <p className={`mt-2 text-sm ${c.muted}`}>
          Checked in each story’s default state — violations behind interactions
          (open menus, dialogs) aren’t shown here. CI enforces the full set,
          including play-function states.
        </p>
      )}
    </div>
  )
}

/** Static posture line ("enforced" / "not enforced yet" / "axe skipped") shared
 * by both a11y rows, plus the glyph that leads the checklist item. */
function posture(tier: A11yTier): {
  glyph: string
  enforced: boolean
  text: string
} {
  const enforced = tier === "enforced"
  return {
    enforced,
    glyph: enforced ? "✓" : "✕",
    text:
      tier === "enforced"
        ? "enforced"
        : tier === "skipped"
          ? "axe skipped"
          : "not enforced yet",
  }
}

/**
 * The Accessibility checklist row for the docs panel. The live axe run is
 * behind a "Check the rendered stories" disclosure so the docs page stays
 * cheap until the reader expands it.
 */
export function A11yRow({ detail, tier }: { detail: string; tier: A11yTier }) {
  const { state, start } = useA11yAudit()

  const onToggle = useCallback(
    (e: React.SyntheticEvent<HTMLDetailsElement>) => {
      if (!e.currentTarget.open) return
      start()
    },
    [start]
  )

  const { glyph, enforced, text } = posture(tier)
  const glyphColor = enforced
    ? "text-f1-foreground-positive"
    : "text-f1-foreground-secondary"

  return (
    <div role="listitem" className="flex items-start gap-2">
      <span aria-hidden className={`mt-0.5 shrink-0 ${glyphColor}`}>
        {glyph}
      </span>
      <div className="min-w-0">
        {/* Label + posture, always visible — matches the other checklist rows. */}
        <div className="text-base text-f1-foreground">
          Accessibility{" "}
          <span className="text-f1-foreground-secondary">— {text}</span>
        </div>
        <div className="mt-0.5 text-base text-f1-foreground-secondary">
          {detail}
          {/* Only the live per-criterion results are collapsed — expanding
              triggers the axe run so the docs page stays cheap by default. */}
          <details className="mt-1" onToggle={onToggle}>
            <summary className="cursor-pointer list-none text-f1-foreground marker:hidden [&::-webkit-details-marker]:hidden">
              Check the rendered stories
            </summary>
            <A11yAuditResults state={state} tone="panel" />
          </details>
        </div>
      </div>
    </div>
  )
}

/**
 * The Accessibility checklist row for the maturity-tag tooltip. A tooltip is
 * transient and can't hold a disclosure, so the live axe run fires
 * automatically on open (mount) and its results render inline.
 */
export function A11yTooltipRow({
  detail,
  tier,
}: {
  detail: string
  tier: A11yTier
}) {
  const { state, start } = useA11yAudit()

  // The tooltip content only mounts while open, so mounting == opening: run the
  // audit as soon as the reader reveals the tooltip. `start` is idempotent.
  useEffect(() => {
    start()
  }, [start])

  const { glyph, enforced, text } = posture(tier)

  return (
    <div role="listitem" className="flex items-start gap-2">
      <span
        aria-hidden
        className={`mt-0.5 shrink-0 ${enforced ? "text-f1-foreground-positive" : "opacity-60"}`}
      >
        {glyph}
      </span>
      <div className="min-w-0">
        <div className="text-base">
          Accessibility <span className="opacity-75">— {text}</span>
        </div>
        <div className="mt-0.5 text-base opacity-75">{detail}</div>
        <A11yAuditResults state={state} tone="tooltip" />
      </div>
    </div>
  )
}
