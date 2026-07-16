import { DocsContext } from "@storybook/addon-docs/blocks"
import React, { useContext, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import {
  getComponentStatus,
  type ApiStatus,
  type ComponentStatus,
} from "@/component-status"

import { describeStatus, showsChecklist } from "./componentStatusMessage.ts"

const STATUS_BADGE: Record<
  ApiStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  stable: {
    label: "Stable",
    bg: "bg-f1-background-positive",
    text: "text-f1-foreground-positive",
    dot: "bg-f1-background-positive-bold",
  },
  experimental: {
    label: "Experimental",
    bg: "bg-f1-background-warning",
    text: "text-f1-foreground-warning",
    dot: "bg-f1-background-warning-bold",
  },
  deprecated: {
    label: "Deprecated",
    bg: "bg-f1-background-critical",
    text: "text-f1-foreground-critical",
    dot: "bg-f1-background-critical-bold",
  },
  internal: {
    label: "Internal",
    bg: "bg-f1-background-info",
    text: "text-f1-foreground-info",
    dot: "bg-f1-background-info-bold",
  },
  unknown: {
    label: "No tag",
    bg: "bg-f1-background-secondary",
    text: "text-f1-foreground-secondary",
    dot: "bg-f1-foreground-disabled",
  },
}

/**
 * Creates a portal container immediately after the docs title/description block,
 * so the panel renders under the heading rather than at the very top of the page.
 * Mirrors the placement logic used by the import banner.
 */
function usePortalAfterTitle() {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const titleEl = document.querySelector(
      "#storybook-docs h1:not(.docs-story *)"
    )
    if (!titleEl) return

    const sibling = titleEl.nextElementSibling
    const afterEl =
      sibling?.tagName === "P"
        ? sibling
        : sibling?.tagName === "DIV" && sibling.querySelector("p")
          ? sibling
          : titleEl

    if (!containerRef.current) {
      containerRef.current = document.createElement("div")
    }
    afterEl.after(containerRef.current)
    setTarget(containerRef.current)

    return () => {
      containerRef.current?.remove()
    }
  }, [])

  return target
}

function StatusBadge({ status }: { status: ApiStatus }) {
  const badge = STATUS_BADGE[status]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${badge.bg} ${badge.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${badge.dot}`} />
      {badge.label}
    </span>
  )
}

function Panel({ status }: { status: ComponentStatus }) {
  return (
    <div className="sb-unstyled my-6 rounded-lg border border-f1-border bg-f1-background p-4">
      <div className="mb-2 text-sm font-medium text-f1-foreground-secondary">
        Status
      </div>
      <div className="mb-2">
        <StatusBadge status={status.apiStatus} />
      </div>
      <p className="m-0 text-sm text-f1-foreground-secondary">
        {describeStatus(status)}
      </p>

      {showsChecklist(status) && (
        <ul className="mt-4 list-none space-y-3 p-0">
          {status.requirements.map((req) => (
            <li key={req.key} className="flex gap-2">
              <span
                aria-hidden
                className={`mt-0.5 shrink-0 ${req.met ? "text-f1-foreground-positive" : "text-f1-foreground-secondary"}`}
              >
                {req.met ? "✓" : "✕"}
              </span>
              <div>
                <div className="text-sm text-f1-foreground">{req.label}</div>
                {!req.met && (
                  <div className="mt-0.5 text-xs text-f1-foreground-secondary">
                    {req.detail}
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

/**
 * Injects the component's maturity status + Definition-of-Done checklist into
 * every component docs page. Renders nothing on non-component pages (the title
 * doesn't resolve to a tracked component).
 */
export function ComponentStatusPanel() {
  const context = useContext(DocsContext)
  const portalTarget = usePortalAfterTitle()

  let title: string | undefined
  try {
    const stories = context.componentStories()
    if (stories.length === 0) return null
    title = stories[0].title
  } catch {
    // Context not ready on first render.
    return null
  }

  const status = title ? getComponentStatus(title) : null
  if (!status) return null

  if (!portalTarget) return null
  return createPortal(<Panel status={status} />, portalTarget)
}
