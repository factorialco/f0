import { DocsContext, Source } from "@storybook/addon-docs/blocks"
import React, { useContext, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { F0Alert } from "@/components/F0Alert"

import { extractComponentName, resolveImportPath } from "./resolveImportPath.ts"

interface ImportBannerProps {
  isDark: boolean
}

/**
 * Finds the insertion point after the title + subtitle + description block
 * in the Storybook docs page, and creates a container element for the portal.
 */
function usePortalTarget() {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // The title is a plain h1 inside #storybook-docs (no .sbdocs-title class)
    const titleEl = document.querySelector(
      "#storybook-docs h1:not(.docs-story *)"
    )
    if (!titleEl) return

    // Insert after h1 + p or h1 + div > p (the subtitle/description)
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
 * Renders a code block showing how to import the current component.
 * Uses a portal to position itself after the title/subtitle/description
 * in the Storybook docs page.
 *
 * If the component is internal (no public export), shows a warning instead.
 */
export function ImportBanner({ isDark }: ImportBannerProps) {
  const context = useContext(DocsContext)
  const portalTarget = usePortalTarget()

  let fileName: string | undefined
  let title: string | undefined

  try {
    const stories = context.componentStories()
    if (stories.length === 0) {
      // Not a component page (e.g. Foundations, Introduction)
      return null
    }
    const primary = stories[0]
    const storyContext = context.getStoryContext(primary)
    if (!storyContext.component) {
      // Story page without a component (e.g. hooks examples, utilities)
      return null
    }
    fileName = storyContext.parameters?.fileName as string | undefined
    title = primary.title
  } catch {
    // Context may not be ready yet on initial render
    return null
  }

  const importPath = resolveImportPath(fileName)
  const componentName = extractComponentName(fileName, title)

  const content =
    !importPath || !componentName ? (
      <div className="sb-unstyled my-4">
        <F0Alert
          variant="warning"
          title="Internal component"
          description="This component is not exported from the package and cannot be imported directly. It is used internally by other components."
        />
      </div>
    ) : (
      <div className="sb-unstyled">
        <h3 className="mb-2 text-xl font-medium text-f1-foreground">
          Importing this component
        </h3>
        <Source
          code={`import { ${componentName} } from "${importPath}"`}
          language="tsx"
          dark={isDark}
        />
      </div>
    )

  if (portalTarget) {
    return createPortal(content, portalTarget)
  }

  // Don't render inline — the portal isn't ready yet on first render
  return null
}
