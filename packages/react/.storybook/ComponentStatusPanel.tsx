import { DocsContext } from "@storybook/addon-docs/blocks"
import React, { useContext, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { ComponentMaturityTag } from "@/component-status"

/**
 * Creates a portal container inside the docs `<h1>` title so the maturity tag
 * renders inline next to the component name rather than as a separate section.
 */
function usePortalInTitle() {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const titleEl = document.querySelector(
      "#storybook-docs h1:not(.docs-story *)"
    )
    if (!titleEl) return

    if (!containerRef.current) {
      const el = document.createElement("span")
      el.style.marginLeft = "0.5rem"
      el.style.whiteSpace = "nowrap"
      containerRef.current = el
    }
    titleEl.append(containerRef.current)
    setTarget(containerRef.current)

    return () => {
      containerRef.current?.remove()
    }
  }, [])

  return target
}

/**
 * Injects the exported `ComponentMaturityTag` next to every component docs
 * title. The tag shows the maturity status, and on hover reveals the full
 * summary and Definition-of-Done checklist in a tooltip. All content comes from
 * the shared component-status data, so the docs page and any consuming app stay
 * consistent. Renders nothing on non-component pages (the title doesn't resolve
 * to a tracked component).
 */
export function ComponentStatusPanel() {
  const context = useContext(DocsContext)
  const portalTarget = usePortalInTitle()

  let title: string | undefined
  try {
    const stories = context.componentStories()
    if (stories.length === 0) return null
    title = stories[0].title
  } catch {
    // Context not ready on first render.
    return null
  }

  if (!title || !portalTarget) return null
  return createPortal(
    <ComponentMaturityTag componentName={title} />,
    portalTarget
  )
}
