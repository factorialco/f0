import { GridStack, GridStackOptions, GridStackWidget } from "gridstack"
import isEqual from "lodash/isEqual"
import {
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react"
import { useGridStackContext } from "./grid-stack-context"
import { GridStackRenderContext } from "./grid-stack-render-context"

// WeakMap to store widget containers for each grid instance
export const gridWidgetContainersMap = new WeakMap<
  GridStack,
  Map<string, HTMLElement>
>()

export function GridStackRenderProvider({ children }: PropsWithChildren) {
  const {
    _gridStack: { value: gridStack, set: setGridStack },
    options,
  } = useGridStackContext()

  const widgetContainersRef = useRef<Map<string, HTMLElement>>(new Map())
  const containerRef = useRef<HTMLDivElement>(null)
  const optionsRef = useRef<GridStackOptions>(options)

  const renderCBFn = useCallback(
    (element: HTMLElement, widget: GridStackWidget & { grid?: GridStack }) => {
      if (widget.id && widget.grid) {
        // Get or create the widget container map for this grid instance
        let containers = gridWidgetContainersMap.get(widget.grid)
        if (!containers) {
          containers = new Map<string, HTMLElement>()
          gridWidgetContainersMap.set(widget.grid, containers)
        }
        containers.set(widget.id, element)

        // Also update the local ref for backward compatibility
        widgetContainersRef.current.set(widget.id, element)
      }
    },
    []
  )

  const initGridStackInstance = useCallback(() => {
    if (containerRef.current) {
      GridStack.renderCB = renderCBFn
      return GridStack.init(optionsRef.current, containerRef.current)
    }
    return null
  }, [renderCBFn])

  useLayoutEffect(() => {
    if (!isEqual(options, optionsRef.current) && gridStack) {
      try {
        gridStack.removeAll(false)
        gridStack.destroy(false)
        widgetContainersRef.current.clear()
        // Clean up the WeakMap entry for this grid instance
        gridWidgetContainersMap.delete(gridStack)
        optionsRef.current = options
        setGridStack(initGridStackInstance())
      } catch (e) {
        console.error("Error reinitializing gridstack", e)
      }
    }
  }, [options, gridStack, initGridStackInstance, setGridStack])

  useLayoutEffect(() => {
    if (!gridStack) {
      try {
        setGridStack(initGridStackInstance())
      } catch (e) {
        console.error("Error initializing gridstack", e)
      }
    }
  }, [gridStack, initGridStackInstance, setGridStack])

  return (
    <GridStackRenderContext.Provider
      value={useMemo(
        () => ({
          getWidgetContainer: (widgetId: string) => {
            // First try to get from the current grid instance's map
            if (gridStack) {
              const containers = gridWidgetContainersMap.get(gridStack)
              if (containers?.has(widgetId)) {
                return containers.get(widgetId) || null
              }
            }
            // Fallback to local ref for backward compatibility
            return widgetContainersRef.current.get(widgetId) || null
          },
        }),
        // ! gridStack is required to reinitialize the grid when the options change
        [gridStack]
      )}
    >
      <div ref={containerRef}>{gridStack ? children : null}</div>
    </GridStackRenderContext.Provider>
  )
}
