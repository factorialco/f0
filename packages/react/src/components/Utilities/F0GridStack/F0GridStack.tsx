import {
  GridItemHTMLElement,
  GridStackOptions,
  GridStackWidget,
} from "gridstack"
import "gridstack/dist/gridstack.css"
import { useMemo } from "react"
import { GridStackProvider } from "./components/grid-stack-provider"
import { GridStackRender } from "./components/grid-stack-render"
import { GridStackRenderProvider } from "./components/grid-stack-render-provider"
import "./F0GridStack.css"
export type GridStackReactOptions = Omit<GridStackOptions, "children">

export type GridStackReactSize = { w: number; h: number }

export interface GridStackReactWidget
  extends Omit<GridStackWidget, "content" | "id"> {
  id: Required<GridStackWidget>["id"]
  allowedSizes?: GridStackReactSize[]
  content?: React.ReactElement
  meta?: Record<string, unknown>

  _originalContent?: React.ReactNode
}

export interface F0GridStackProps {
  options: GridStackReactOptions
  widgets: GridStackReactWidget[]
  onChange?: (widgets: GridStackReactWidget[]) => void
}

export const F0GridStack = ({
  options,
  widgets,
  onChange,
}: F0GridStackProps) => {
  const widgetsSignature = useMemo(() => {
    return JSON.stringify(
      widgets.map((widget) => ({
        id: widget.id,
        w: widget.w,
        h: widget.h,
        x: widget.x,
        y: widget.y,
        noMove: widget.noMove,
        noResize: widget.noResize,
        locked: widget.locked,
        content: widget.content?.toString() ?? "",
        _originalContent: widget._originalContent?.toString() ?? "",
        allowedSizes: widget.allowedSizes,
      }))
    )
  }, [widgets])

  const gridOptions = useMemo(() => {
    return {
      ...options,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, widgetsSignature])

  /**
   * Finds the closest allowed size to the given width and height.
   * @param w - The width of the widget
   * @param h - The height of the widget
   * @param allowed - The allowed sizes of the widget
   * @returns The closest allowed size
   */
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
      options={gridOptions}
      widgets={widgets}
      onResizeStop={onResizeStop}
      onChange={onChange}
    >
      <GridStackRenderProvider>
        <GridStackRender />
      </GridStackRenderProvider>
    </GridStackProvider>
  )
}

F0GridStack.displayName = "F0GridStack"
