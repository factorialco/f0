import type { ReactNode } from "react"

import { DynamicVisualizationEngine } from "../renderers/orgChart/DynamicVisualizationEngine"

export type Renderer = (props: {
  data: Record<string, unknown>[]
  spec: Record<string, unknown>
}) => ReactNode

const orgRenderer: Renderer = ({ data, spec }) => (
  <DynamicVisualizationEngine
    data={data}
    spec={
      spec as unknown as Parameters<
        typeof DynamicVisualizationEngine
      >[0]["spec"]
    }
  />
)

const rendererRegistry: Record<string, Renderer> = {
  org: orgRenderer,
}

/**
 * Look up a renderer by name. Falls back to a placeholder when unknown.
 */
export function getRenderer(name: string): Renderer {
  const renderer = rendererRegistry[name]
  if (!renderer) {
    return ({ data }) => (
      <div className="flex h-full items-center justify-center p-8 text-f1-foreground-secondary">
        <div className="text-center">
          <p className="font-semibold text-f1-foreground mb-1">
            Unknown renderer: &quot;{name}&quot;
          </p>
          <p className="text-sm">
            {data.length} rows available but no renderer knows how to display
            them.
          </p>
        </div>
      </div>
    )
  }
  return renderer
}

/**
 * Register a new renderer at runtime.
 */
export function registerRenderer(name: string, renderer: Renderer): void {
  rendererRegistry[name] = renderer
}
