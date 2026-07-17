import { DocsContext } from "@storybook/addon-docs/blocks"
import React, { useContext, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { ComponentStability } from "@/component-status"

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

/**
 * Injects the exported `ComponentStability` panel into every component docs
 * page. All content comes from the shared component-status data, so the docs
 * page and any consuming app render identically. Renders nothing on
 * non-component pages (the title doesn't resolve to a tracked component).
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

  if (!title || !portalTarget) return null
  return createPortal(
    <ComponentStability componentName={title} className="my-6" />,
    portalTarget
  )
}
