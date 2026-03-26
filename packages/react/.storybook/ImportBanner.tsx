import { DocsContext, Source } from "@storybook/addon-docs/blocks"
import React, { useContext } from "react"

import { F0Alert } from "@/components/F0Alert"

import { extractComponentName, resolveImportPath } from "./resolveImportPath.ts"

interface ImportBannerProps {
  isDark: boolean
}

/**
 * Renders a code block showing how to import the current component.
 * Placed inside the DocsContainer, it reads the primary story's fileName
 * and title from the DocsContext to resolve the correct npm import path.
 *
 * If the component is internal (no public export), nothing is rendered.
 */
export function ImportBanner({ isDark }: ImportBannerProps) {
  const context = useContext(DocsContext)

  let fileName: string | undefined
  let title: string | undefined

  try {
    const stories = context.componentStories()
    if (stories.length > 0) {
      const primary = stories[0]
      const storyContext = context.getStoryContext(primary)
      fileName = storyContext.parameters?.fileName as string | undefined
      title = primary.title
    }
  } catch {
    // Context may not be ready yet on initial render
    return null
  }

  const importPath = resolveImportPath(fileName)
  const componentName = extractComponentName(fileName, title)

  if (!importPath || !componentName) {
    return (
      <div className="sb-unstyled" style={{ marginBottom: 24 }}>
        <F0Alert
          variant="warning"
          title="Internal component"
          description="This component is not exported from the package and cannot be imported directly. It is used internally by other components."
        />
      </div>
    )
  }

  const code = `import { ${componentName} } from "${importPath}"`

  return (
    <div className="sb-unstyled" style={{ marginBottom: 24 }}>
      <h3 className="mb-2 text-xl font-medium text-f1-foreground">
        Importing this component
      </h3>
      <Source code={code} language="tsx" dark={isDark} />
    </div>
  )
}
