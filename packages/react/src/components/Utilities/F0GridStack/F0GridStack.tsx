import {
  GridItemHTMLElement,
  GridStackNode,
  GridStackOptions,
  GridStackWidget,
} from "gridstack"
import "gridstack/dist/gridstack.css"
import { useMemo } from "react"
import { GridStackProvider } from "./components/grid-stack-provider"
import { GridStackRender } from "./components/grid-stack-render"
import { GridStackRenderProvider } from "./components/grid-stack-render-provider"

export type GridStackReactOptions = Omit<GridStackOptions, "children">

export type GridStackReactSize = { w: number; h: number }

export interface GridStackReactNode extends GridStackNode {
  allowedSizes?: GridStackReactSize[]
  render?: React.ReactNode
}

export interface F0GridStackProps {
  options: GridStackReactOptions
  nodes: GridStackReactNode[]
  onChange?: (layout: GridStackWidget[] | GridStackOptions) => void
}

export const F0GridStack = ({ options, nodes, onChange }: F0GridStackProps) => {
  const gridOptions = useMemo(
    () => ({
      ...options,
      children: nodes,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nodes]
  )

  const closestAllowed = (
    w: number,
    h: number,
    allowed: { w: number; h: number }[]
  ) => {
    let best = allowed[0],
      bestDist = Infinity
    for (const a of allowed) {
      const dx = a.w - w,
        dy = a.h - h
      const dist = dx * dx + dy * dy
      if (dist < bestDist) {
        bestDist = dist
        best = a
      }
    }
    return best
  }

  const onResizeStop = (_: Event, el: GridItemHTMLElement) => {
    // el is the DOM element of the grid item
    const node = el.gridstackNode // node contains w,h,x,y
    if (!node) return

    const allowed = el.gridstackNode?.allowedSizes ?? []
    if (allowed.length === 0) {
      return
    }

    const target = closestAllowed(node.w ?? 1, node.h ?? 1, allowed ?? [])

    if (node.w !== target.w || node.h !== target.h) {
      // update will reposition if necessary
      node.grid?.update(el, { w: target.w, h: target.h })
    }
  }

  return (
    <GridStackProvider
      initialOptions={gridOptions}
      onResizeStop={onResizeStop}
      onChange={onChange}
    >
      <GridStackRenderProvider>
        <GridStackRender />
      </GridStackRenderProvider>
    </GridStackProvider>
  )
}
