import "gridstack/dist/gridstack.css"

import {
  GridStackProvider,
  GridStackRender,
  GridStackRenderProvider,
} from "@/lib/GridStackReact"
import { GridItemHTMLElement } from "gridstack"
import { useMemo } from "react"

export type GridFixedGroupSize = { w: number; h: number }

interface BlockItem {
  id: string
  size: GridFixedGroupSize
  availableSizes: GridFixedGroupSize[]
  render: React.ReactNode
}

export interface GridFixedGroupProps {
  blocks: BlockItem[]
  sortable?: boolean
  onSort?: (items: React.ReactNode[]) => void
}

export const GridFixedGroup = ({
  blocks,
  sortable: _sortable = false,
  onSort: _onSort = () => {},
}: GridFixedGroupProps) => {
  const breakpoints = [
    { c: 1, w: 700 },
    { c: 3, w: 850 },
    { c: 6, w: 950 },
    { c: 8, w: 1100 },
  ]

  const gridOptions = useMemo(
    () => ({
      acceptWidgets: true,
      margin: 8,
      column: 4,
      columnOpts: {
        breakpointForWindow: true,
        breakpoints,
        columnMax: 4,
      },
      children: blocks.map((block) => {
        return {
          id: block.id,
          h: block.size.h ?? 1,
          w: block.size.w ?? 1,
          allowResize: true,
          allowMove: true,

          allowedSizes: block.availableSizes,
          render: block.render,
        }
      }),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [blocks]
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
    <>
      <GridStackProvider
        initialOptions={gridOptions}
        onResizeStop={onResizeStop}
      >
        <GridStackRenderProvider>
          <GridStackRender />
        </GridStackRenderProvider>
      </GridStackProvider>
    </>
  )
}
