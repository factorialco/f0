import React from "react"

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
  const colors = BADGE_COLORS[status.apiStatus]
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
      className={`sb-unstyled rounded-lg border border-f1-border bg-f1-background py-4 ${className ?? ""}`}
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
        <ul className="mt-4 list-none space-y-3 p-0">
          {status.requirements.map((req) => (
            <li key={req.key} className="flex items-center gap-2">
              <span
                aria-hidden
                className={`shrink-0 ${req.met ? "text-f1-foreground-positive" : "text-f1-foreground-secondary"}`}
              >
                {req.met ? "✓" : "✕"}
              </span>
              <div>
                <div className="text-base text-f1-foreground">{req.label}</div>
                {!req.met && (
                  <div className="mt-0.5 text-base text-f1-foreground-secondary">
                    {req.detail}
                    {req.criteria && req.criteria.length > 0 && (
                      <ul className="mt-1 list-disc space-y-0.5 pl-4">
                        {req.criteria.map((criterion) => (
                          <li key={criterion} className="!text-base">
                            {criterion}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
