import { DocsContext } from "@storybook/addon-docs/blocks"
import React, { useContext, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { Code } from "@/icons/app"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip"

import { extractComponentName, resolveImportPath } from "./resolveImportPath.ts"

/**
 * A single-line import statement with a copy button, styled for the dark
 * tooltip surface. Rendered directly (instead of Storybook's `Source` block)
 * so the padding stays tight and the text is readable regardless of the docs
 * page theme.
 */
function ImportSnippet({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    try {
      void navigator.clipboard?.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard may be unavailable (e.g. insecure context) — ignore.
    }
  }

  return (
    <div className="sb-unstyled flex items-center gap-3 px-3 py-2 text-f1-foreground-inverse">
      <div className="min-w-0 overflow-x-auto">
        <code className="whitespace-pre font-mono text-base">{code}</code>
      </div>
      {/* Colors are inline (not Tailwind) because Storybook's Tailwind build
          doesn't scan `.storybook/` for one-off utilities like `text-white`,
          which would silently fall back to the default (black) text. */}
      <button
        type="button"
        onClick={onCopy}
        className="shrink-0 rounded-md px-2 py-1 text-sm font-medium transition-colors"
        style={{
          color: "#fff",
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  )
}

/**
 * Storybook renders the docs title as a block `<h1>` with a floated permalink
 * anchor in the gutter, and hides `<svg>`s inside it (revealing them on hover).
 * We portal tags into that `<h1>`, so this injects a scoped stylesheet that:
 *   - lays the title out as a centered flex row so the tags sit vertically
 *     centered against the title (with a gap between items),
 *   - takes the floated permalink anchor out of flow so it doesn't offset the
 *     centered row,
 *   - keeps icons inside our own `.sb-unstyled` tag wrappers visible (the
 *     Storybook anchor icon stays hidden-until-hover, untouched).
 */
function ensureTitleTagStyles() {
  const id = "f0-title-tag-styles"
  if (document.getElementById(id)) return
  const style = document.createElement("style")
  style.id = id
  style.textContent = [
    "#storybook-docs h1{display:flex;align-items:center;flex-wrap:wrap;column-gap:.5rem;row-gap:.25rem}",
    "#storybook-docs h1>a{position:absolute}",
    "#storybook-docs h1 .sb-unstyled svg{visibility:visible!important;position:static!important;top:auto!important}",
  ].join("")
  document.head.appendChild(style)
}

/**
 * Creates a portal container inside the docs `<h1>` title so the import tag
 * renders inline next to the component name rather than as a separate section.
 */
function usePortalInTitle() {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // The title is a plain h1 inside #storybook-docs (no .sbdocs-title class)
    const titleEl = document.querySelector(
      "#storybook-docs h1:not(.docs-story *)"
    )
    if (!titleEl) return

    ensureTitleTagStyles()

    if (!containerRef.current) {
      const el = document.createElement("span")
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
 * Renders a "How to import" tag next to the current component's docs title. On
 * hover it reveals the import statement (or, for internal components, a note
 * that the component isn't exported) in a tooltip. Uses a portal to place the
 * tag inline inside the title.
 *
 * Renders nothing on non-component pages.
 */
export function ImportBanner() {
  const context = useContext(DocsContext)
  const portalTarget = usePortalInTitle()

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
  const isInternal = !importPath || !componentName

  if (!portalTarget) {
    // Don't render inline — the portal isn't ready yet on first render
    return null
  }

  const content = (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="sb-unstyled inline-flex cursor-help align-middle">
            <F0TagRaw
              text={isInternal ? "Internal component" : "How to import this?"}
              icon={Code}
            />
          </span>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          align="start"
          className="w-max max-w-[min(90vw,42rem)] overflow-hidden !p-0"
        >
          {isInternal ? (
            <div className="sb-unstyled max-w-xs p-3 text-base text-f1-foreground-inverse">
              This component is not exported from the package and cannot be
              imported directly. It is used internally by other components.
            </div>
          ) : (
            <ImportSnippet
              code={`import { ${componentName} } from "${importPath}"`}
            />
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

  return createPortal(content, portalTarget)
}
