import React from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import { A11yRow } from "./A11yRow"
import {
  getComponentStatus,
  type ApiStatus,
  type ComponentEntry,
  type ComponentStatus,
} from "./component-status"

/** Badge colors per maturity level (presentation only — the label text comes
 * from the status object so it stays consistent everywhere). */
const BADGE_COLORS: Record<
  ApiStatus,
  { bg: string; text: string; dot: string }
> = {
  stable: {
    bg: "bg-f1-background-positive",
    text: "text-f1-foreground-positive",
    dot: "bg-f1-background-positive-bold",
  },
  experimental: {
    bg: "bg-f1-background-warning",
    text: "text-f1-foreground-warning",
    dot: "bg-f1-background-warning-bold",
  },
  deprecated: {
    bg: "bg-f1-background-critical",
    text: "text-f1-foreground-critical",
    dot: "bg-f1-background-critical-bold",
  },
  internal: {
    bg: "bg-f1-background-info",
    text: "text-f1-foreground-info",
    dot: "bg-f1-background-info-bold",
  },
  unknown: {
    bg: "bg-f1-background-secondary",
    text: "text-f1-foreground-secondary",
    dot: "bg-f1-foreground-disabled",
  },
}

export interface ComponentStabilityProps {
  /** Component name to look up (e.g. "Card", "F0Alert", "Components/Card"). */
  componentName: string
  /** Optional dataset override; defaults to the build-time data. */
  components?: ComponentEntry[]
  /** Extra classes for the outer container (e.g. spacing). */
  className?: string
}

function StatusBadge({ status }: { status: ComponentStatus }) {
  const colors = BADGE_COLORS[status.effectiveStatus]
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-base font-medium ${colors.bg} ${colors.text}`}
    >
      <span className={`h-2 w-2 rounded-full ${colors.dot}`} />
      {status.label}
    </span>
  )
}

/**
 * Renders a component's maturity status and Definition-of-Done checklist. All
 * text (badge label, summary, checklist labels and hints) comes from the
 * `component-status` data so Storybook and any consuming app stay identical.
 *
 * Renders nothing when the name doesn't resolve to a tracked component.
 */
export function ComponentStability({
  componentName,
  components,
  className,
}: ComponentStabilityProps) {
  const status = getComponentStatus(componentName, components)
  if (!status) return null

  return (
    <div
      className={`sb-unstyled rounded-lg border border-f1-border bg-f1-background ${className ?? ""}`}
    >
      <h3 className="m-0 mb-3 text-xl font-semibold text-f1-foreground">
        Maturity level
      </h3>
      <div className="mb-2">
        <StatusBadge status={status} />
      </div>
      <p className="m-0 text-lg text-f1-foreground-secondary">
        {status.summary}
      </p>

      {status.showChecklist && (
        // role="list" divs (not <ul>/<li>): Storybook docs injects a global
        // `#storybook-docs ul { margin-bottom: 24px !important }` that .sb-unstyled
        // doesn't neutralize and no utility class can outrank, so semantic-role
        // divs keep the spacing under our control while preserving list semantics.
        <div role="list" className="mt-4 space-y-3">
          {status.requirements.map((req) =>
            req.key === "a11y" ? (
              <A11yRow
                key={req.key}
                detail={req.detail}
                tier={status.a11yTier}
              />
            ) : (
              <div
                key={req.key}
                role="listitem"
                className="flex items-start gap-2"
              >
                <span
                  aria-hidden
                  className={`mt-0.5 shrink-0 ${req.met ? "text-f1-foreground-positive" : "text-f1-foreground-secondary"}`}
                >
                  {req.met ? "✓" : "✕"}
                </span>
                <div>
                  <div className="text-base text-f1-foreground">
                    {req.label}
                  </div>
                  <div className="mt-0.5 text-base text-f1-foreground-secondary">
                    {req.detail}
                    {req.criteria && req.criteria.length > 0 && (
                      <div role="list" className="mt-1 space-y-0.5">
                        {req.criteria.map((criterion) => (
                          <div
                            key={criterion.label}
                            role="listitem"
                            className="flex items-start gap-2 text-base"
                          >
                            <span
                              aria-hidden
                              className={`shrink-0 ${criterion.met ? "text-f1-foreground-positive" : "text-f1-foreground-secondary"}`}
                            >
                              {criterion.met ? "✓" : "✕"}
                            </span>
                            <span>{criterion.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}

/**
 * The maturity summary + Definition-of-Done checklist, rendered statically for
 * the `ComponentMaturityTag` tooltip. It carries the same information as the
 * `ComponentStability` panel, but the accessibility row is shown as a plain
 * status line (no live axe audit) since a tooltip is transient and shouldn't
 * hold interactive controls.
 */
function StatusDetails({ status }: { status: ComponentStatus }) {
  // The tooltip surface is dark with a white (`f1-foreground-inverse`) base, so
  // colors are expressed as opacity over that inherited white rather than the
  // `f1-foreground-secondary` token (which resolves to a too-dim 50% white here).
  return (
    <div className="text-f1-foreground-inverse">
      <p className="m-0 text-base opacity-90">{status.summary}</p>

      {status.showChecklist && (
        <div role="list" className="mt-3 space-y-3">
          {status.requirements.map((req) => (
            <div
              key={req.key}
              role="listitem"
              className="flex items-start gap-2"
            >
              <span
                aria-hidden
                className={`mt-0.5 shrink-0 ${req.met ? "text-f1-foreground-positive" : "opacity-60"}`}
              >
                {req.met ? "✓" : "✕"}
              </span>
              <div>
                <div className="text-base">{req.label}</div>
                <div className="mt-0.5 text-base opacity-75">
                  {req.detail}
                  {req.criteria && req.criteria.length > 0 && (
                    <div role="list" className="mt-1 space-y-0.5">
                      {req.criteria.map((criterion) => (
                        <div
                          key={criterion.label}
                          role="listitem"
                          className="flex items-start gap-2 text-base"
                        >
                          <span
                            aria-hidden
                            className={`shrink-0 ${criterion.met ? "text-f1-foreground-positive" : "opacity-60"}`}
                          >
                            {criterion.met ? "✓" : "✕"}
                          </span>
                          <span>{criterion.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/**
 * The maturity status badge, sized to sit inline next to a component title. On
 * hover/focus it reveals the full maturity summary and Definition-of-Done
 * checklist in a tooltip — the same information the `ComponentStability` panel
 * shows, so collapsing the section loses no context.
 *
 * Renders nothing when the name doesn't resolve to a tracked component.
 */
export function ComponentMaturityTag({
  componentName,
  components,
  className,
}: ComponentStabilityProps) {
  const status = getComponentStatus(componentName, components)
  if (!status) return null

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={`sb-unstyled inline-flex cursor-help align-middle ${className ?? ""}`}
          >
            <StatusBadge status={status} />
          </span>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          align="start"
          className="max-h-[70vh] max-w-sm overflow-y-auto"
        >
          <div className="sb-unstyled p-1">
            <StatusDetails status={status} />
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
