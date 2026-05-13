import { getRenderer } from "./lib/rendererRegistry"
import { useVisualizationCompute } from "./lib/useVisualizationCompute"
import type { DynamicCanvasContent } from "./types"

export function DynamicCanvasContent({
  content,
}: {
  content: DynamicCanvasContent
}) {
  const state = useVisualizationCompute(content)
  const renderer = getRenderer(content.renderer)

  if (state.status === "loading") {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-600" />
      </div>
    )
  }

  if (state.status === "error") {
    return (
      <div className="flex h-full w-full items-center justify-center p-4">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {state.message}
        </div>
      </div>
    )
  }

  if (state.status === "success") {
    return (
      <div className="h-full w-full overflow-hidden">
        {renderer({ data: state.rows, spec: content.spec })}
      </div>
    )
  }

  // idle
  return null
}
