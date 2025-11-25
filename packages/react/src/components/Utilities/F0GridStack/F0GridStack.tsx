import {
  GridItemHTMLElement,
  GridStackOptions,
  GridStackWidget,
} from "gridstack"
import "gridstack/dist/gridstack.css"
import { forwardRef, useImperativeHandle, useMemo } from "react"
import { useGridStackContext } from "./components/grid-stack-context"
import { GridStackProvider } from "./components/grid-stack-provider"
import { GridStackRender } from "./components/grid-stack-render"
import { GridStackRenderProvider } from "./components/grid-stack-render-provider"

export type GridStackReactOptions = Omit<GridStackOptions, "children">

export type GridStackReactSize = { w: number; h: number }

export interface GridStackReactWidget extends Omit<GridStackWidget, "content"> {
  id: Required<GridStackWidget>["id"]
  allowedSizes?: GridStackReactSize[]
  content?: React.ReactElement
  meta?: Record<string, unknown>
}

export interface F0GridStackProps {
  options: GridStackReactOptions
  widgets: GridStackReactWidget[]
  onChange?: (widgets: GridStackReactWidget[]) => void
}

/**
 * Methods exposed via ref to control the grid programmatically.
 * @example
 * ```tsx
 * const gridRef = useRef<F0GridStackRef>(null)
 *
 * // Add a widget
 * gridRef.current?.addWidget({
 *   id: 'new-widget',
 *   w: 2,
 *   h: 2,
 *   content: <div>Content</div>
 *   meta: {
 *     // Your metadata associated with the widget
 *   }
 * })
 *
 * // Remove a widget
 * gridRef.current?.removeWidget('widget-id')
 *
 * // Remove all widgets
 * gridRef.current?.removeAll()
 *
 * // Save current layout
 * const layout = gridRef.current?.saveOptions()
 * ```
 */
export interface F0GridStackRef {
  addWidget: (widget: GridStackReactWidget) => void
  removeWidget: (id: string) => void
  addSubGrid: (
    subGrid: GridStackReactWidget & {
      id: Required<GridStackWidget>["id"]
      subGridOpts: Required<GridStackWidget>["subGridOpts"] & {
        children: Array<GridStackReactWidget>
      }
    }
  ) => void
  removeAll: () => void
}

const RefHandler = forwardRef<F0GridStackRef, object>((_, ref) => {
  const context = useGridStackContext()

  useImperativeHandle(
    ref,
    () => ({
      addWidget: context.addWidget,
      removeWidget: context.removeWidget,
      addSubGrid: context.addSubGrid,
      removeAll: context.removeAll,
    }),
    [context]
  )

  return null
})

RefHandler.displayName = "RefHandler"

export const F0GridStack = forwardRef<F0GridStackRef, F0GridStackProps>(
  ({ options, widgets, onChange }, ref) => {
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
          content: widget.content,
          allowedSizes: widget.allowedSizes,
        }))
      )
    }, [widgets])

    const gridOptions = useMemo(() => {
      console.log("widgets", widgets)
      return {
        ...options,
        children: widgets as GridStackWidget[],
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
        onResizeStop={onResizeStop}
        onChange={onChange}
      >
        <RefHandler ref={ref} />
        <GridStackRenderProvider>
          <GridStackRender />
        </GridStackRenderProvider>
      </GridStackProvider>
    )
  }
)

F0GridStack.displayName = "F0GridStack"
