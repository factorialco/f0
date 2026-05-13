import type { LayoutAlgorithm, LayoutResult } from "./types"
import { matrixLayout } from "./matrix"
import { treeLayout } from "./tree"

const layouts: Record<string, LayoutAlgorithm> = {
  tree: treeLayout,
  matrix: matrixLayout,
}

export function runLayout(
  algorithm: string,
  data: Record<string, unknown>[],
  config: Record<string, unknown>
): LayoutResult {
  const layout = layouts[algorithm]
  if (!layout) {
    console.warn(
      `[DynamicVisualizationEngine] Unknown layout algorithm: "${algorithm}". Falling back to "tree".`
    )
    return treeLayout(data, config)
  }
  return layout(data, config)
}

export type { LayoutResult, PositionedElement } from "./types"
