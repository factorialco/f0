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

export interface GridStackReactWidget extends GridStackWidget {
  id: Required<GridStackWidget>["id"]
  allowedSizes?: GridStackReactSize[]
  renderFn?: () => React.ReactElement
}

/**
 * Represents a node in the grid layout.
 */
export interface GridStackWidgetPosition {
  id: string
  w: number
  h: number
  x: number
  y: number
  meta?: Record<string, unknown>
}

export interface F0GridStackProps {
  options: GridStackReactOptions
  widgets: GridStackReactWidget[]
  onChange?: (layout: GridStackWidgetPosition[]) => void
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
 *   renderFn: () => <div>Content</div>
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
        children: Array<
          GridStackWidget & { id: Required<GridStackWidget>["id"] }
        >
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
    const gridOptions = useMemo(
      () => ({
        ...options,
        children: widgets,
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [widgets]
    )

    console.log(gridOptions)

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
        initialOptions={gridOptions}
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
