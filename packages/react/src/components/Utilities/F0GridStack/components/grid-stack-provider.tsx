import { useDeepCompareEffect } from "@reactuses/core"
import type {
  GridItemHTMLElement,
  GridStack,
  GridStackOptions,
  GridStackWidget,
} from "gridstack"
import {
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { GridStackReactWidget } from "../F0GridStack"
import { GridStackContext } from "./grid-stack-context"
import "./types"
import { convertWidgetRecursive } from "./widget-utils"

interface GridStackProviderProps {
  children: React.ReactNode
  options: GridStackOptions
  onResizeStop?: (event: Event, el: GridItemHTMLElement) => void
  onChange?: (widgets: GridStackReactWidget[]) => void
  widgets?: GridStackReactWidget[]
}

const propsToObserve = [
  "noMove",
  "noResize",
  "locked",
  "w",
  "h",
  "x",
  "y",
] as const

export function GridStackProvider({
  children,
  options,
  onResizeStop,
  onChange,
  widgets,
}: PropsWithChildren<GridStackProviderProps>) {
  const [gridStack, setGridStack] = useState<GridStack | null>(null)
  const gridStackRef = useRef<GridStack | null>(null)

  // Convert widgets for gridstack (convert React content to functions)
  const convertedOptions = useMemo(() => {
    return {
      ...options,
      children: (widgets || []).map((widget) => convertWidgetRecursive(widget)),
    }
  }, [options, widgets])

  // Store original React content separately to prevent GridStack's deepClone from causing stack overflow
  const [reactContentMap, setReactContentMap] = useState(() => {
    const map = new Map<string, React.ReactElement>()
    const widgetsToProcess = widgets || []
    const deepFindNodeWithContent = (obj: GridStackReactWidget) => {
      if (obj.id && obj.content) {
        map.set(obj.id, obj.content)
      }

      if (obj.subGridOpts?.children) {
        obj.subGridOpts.children.forEach((child) => {
          deepFindNodeWithContent(child as GridStackReactWidget)
        })
      }
    }
    widgetsToProcess.forEach((child) => {
      deepFindNodeWithContent(child)
    })
    return map
  })

  // Store only converted widgets (with function content) for GridStack operations
  const [rawWidgetMetaMap, setRawWidgetMetaMap] = useState(() => {
    const map = new Map<string, GridStackWidget>()
    const widgetsToProcess = widgets || []
    const deepFindNodeWithContent = (obj: GridStackReactWidget) => {
      if (obj.id) {
        const convertedWidget = convertWidgetRecursive(obj)
        map.set(obj.id, convertedWidget)
      }

      if (obj.subGridOpts?.children) {
        obj.subGridOpts.children.forEach((child) => {
          deepFindNodeWithContent(child as GridStackReactWidget)
        })
      }
    }
    widgetsToProcess.forEach((child) => {
      deepFindNodeWithContent(child)
    })
    return map
  })

  /**
   * Sync widgets to gridstack
   */
  useDeepCompareEffect(() => {
    if (!gridStack) return

    // Get the previous state
    const widgetsInGridstack = gridStack.save()
    if (!Array.isArray(widgetsInGridstack)) {
      return
    }
    const widgetsInGridstackIds = widgetsInGridstack.map((widget) => widget.id)
    const newWidgets = widgets || []
    const newWidgetsIds = newWidgets.map((widget) => widget.id)

    /**
     * Add new widgets to gridstack
     */
    const widgetsToAdd = newWidgets.filter(
      (widget) => !widgetsInGridstackIds.includes(widget.id!)
    )
    if (widgetsToAdd.length > 0) {
      widgetsToAdd.forEach((widget) => {
        const convertedWidget = convertWidgetRecursive(widget)
        gridStack.addWidget(convertedWidget)
      })
      // Update maps using functional updates
      setRawWidgetMetaMap((prev) => {
        const next = new Map(prev)
        widgetsToAdd.forEach((widget) => {
          const convertedWidget = convertWidgetRecursive(widget)
          next.set(widget.id!, convertedWidget)
        })
        return next
      })
      setReactContentMap((prev) => {
        const next = new Map(prev)
        widgetsToAdd.forEach((widget) => {
          if (widget.content) {
            next.set(widget.id!, widget.content)
          }
        })
        return next
      })
    }

    /**
     * Remove widgets from gridstack that are not in the widgets array
     */
    const widgetsToRemove = widgetsInGridstack.filter(
      (widget) => !newWidgetsIds.includes(widget.id!)
    )
    if (widgetsToRemove.length > 0) {
      widgetsToRemove.forEach((widget) => {
        const element = gridStack.el.querySelector<GridItemHTMLElement>(
          `[gs-id="${widget.id}"]`
        )
        if (element) {
          gridStack.removeWidget(element, true)
        }
      })
      // Update maps using functional updates
      const idsToRemove = widgetsToRemove.map((w) => w.id!).filter(Boolean)
      setRawWidgetMetaMap((prev) => {
        const next = new Map(prev)
        idsToRemove.forEach((id) => next.delete(id))
        return next
      })
      setReactContentMap((prev) => {
        const next = new Map(prev)
        idsToRemove.forEach((id) => next.delete(id))
        return next
      })
    }

    /**
     * Update widgets DOM elements in gridstack that are in the widgets array
     */
    const widgetsToUpdate = newWidgets.filter((widget) =>
      widgetsInGridstackIds.includes(widget.id!)
    )
    if (widgetsToUpdate.length > 0) {
      const widgetsNeedingGridUpdate: Array<{
        id: string
        element: GridItemHTMLElement
        updateOptions: Partial<GridStackWidget>
      }> = []

      widgetsToUpdate.forEach((widget) => {
        const widgetInGridstack = widgetsInGridstack.find(
          (w) => w.id === widget.id
        )
        if (!widgetInGridstack) {
          return
        }

        const propertiesChanged = propsToObserve.filter(
          (prop) => widgetInGridstack[prop] !== widget[prop]
        )

        if (propertiesChanged.length > 0) {
          const updateOptions: Partial<GridStackWidget> = {}
          propertiesChanged.forEach((prop) => {
            const value = widget[prop]
            if (value !== undefined) {
              ;(updateOptions as Record<string, unknown>)[prop] = value
            }
          })
          const element = gridStack.el.querySelector<GridItemHTMLElement>(
            `[gs-id="${widget.id}"]`
          )
          if (element) {
            widgetsNeedingGridUpdate.push({
              id: widget.id!,
              element,
              updateOptions,
            })
          }
        }
      })

      // Update GridStack DOM elements
      widgetsNeedingGridUpdate.forEach(({ element, updateOptions }) => {
        try {
          gridStack.update(element, updateOptions)
        } catch (error) {
          console.warn("Error updating widget:", error)
        }
      })

      // Update maps using functional updates (always update for content changes)
      setRawWidgetMetaMap((prev) => {
        const next = new Map(prev)
        widgetsToUpdate.forEach((widget) => {
          const convertedWidget = convertWidgetRecursive(widget)
          next.set(widget.id!, convertedWidget)
        })
        return next
      })
      setReactContentMap((prev) => {
        const next = new Map(prev)
        widgetsToUpdate.forEach((widget) => {
          if (widget.content) {
            next.set(widget.id!, widget.content)
          }
        })
        return next
      })
    }
  }, [widgets])

  // Ensure handle option is applied after widgets are synced and rendered
  useEffect(() => {
    if (!gridStack || !convertedOptions.handle) return

    // Update the handle option on the grid instance
    if (gridStack.opts) {
      gridStack.opts.handle = convertedOptions.handle
    }

    // Use a small delay to ensure DOM is updated after React renders
    // This allows GridStack to find the handle elements
    const timeoutId = setTimeout(() => {
      if (gridStack && gridStack.el && convertedOptions.handle) {
        // Verify handle elements exist
        const handleElements = gridStack.el.querySelectorAll(
          convertedOptions.handle
        )
        if (handleElements.length > 0) {
          // Handle elements are present, GridStack should pick them up
          // Force GridStack to re-initialize drag handlers if needed
          try {
            // Temporarily disable and re-enable to force re-initialization
            const wasEnabled = !gridStack.opts?.disableResize
            if (wasEnabled) {
              gridStack.disable(false)
              gridStack.enable(false)
            }
          } catch {
            // Ignore errors
          }
        }
      }
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [gridStack, convertedOptions.handle, convertedOptions.children])

  const emitChange = useCallback(() => {
    if (!gridStack) {
      return
    }

    const layout = gridStack.save()

    if (Array.isArray(layout)) {
      // Merge layout data (positions) with React content from reactContentMap
      const updatedWidgets: GridStackReactWidget[] = layout
        .map((item) => {
          const widgetId = item.id
          if (!widgetId) return null

          // Retrieve React content from reactContentMap (always up-to-date)
          const content = reactContentMap.get(widgetId)

          // GridStack preserves custom properties like meta, but TypeScript doesn't know about them
          const itemWithMeta = item as GridStackWidget & {
            meta?: Record<string, unknown>
          }

          const updatedWidget: GridStackReactWidget = {
            ...item,
            id: widgetId,
            w: item.w ?? 1,
            h: item.h ?? 1,
            x: item.x ?? 0,
            y: item.y ?? 0,
            // Preserve meta if it exists (GridStack preserves custom properties)
            meta: itemWithMeta.meta,
            // Use React content from reactContentMap
            content: content ?? <div>No content</div>,
          }

          return updatedWidget
        })
        .filter((widget): widget is GridStackReactWidget => widget !== null)

      onChange?.(updatedWidgets)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridStack, reactContentMap])

  useEffect(() => {
    if (!gridStack) return

    // Check if the gridStack instance is valid and has a DOM element
    // This prevents errors when the instance is destroyed or not fully initialized
    if (!gridStack.el || !gridStack.el.parentElement) {
      return
    }

    const handleResizeStop = (event: Event, el: GridItemHTMLElement) => {
      onResizeStop?.(event, el)
    }

    try {
      gridStack.on("resizestop", handleResizeStop)
      gridStack.on("change added removed", emitChange)
    } catch (error) {
      console.error("Error attaching GridStack event listeners:", error)
      return
    }

    return () => {
      // Use ref to ensure we're cleaning up the correct instance
      const currentGridStack = gridStackRef.current
      if (currentGridStack && currentGridStack.el) {
        try {
          currentGridStack.off("resizestop")
          currentGridStack.off("change added removed")
        } catch (error) {
          // Ignore errors during cleanup as the instance might already be destroyed
          console.warn("Error cleaning up GridStack event listeners:", error)
        }
      }
    }
  }, [gridStack, onResizeStop, emitChange])

  // Update ref when gridStack changes
  useEffect(() => {
    gridStackRef.current = gridStack
  }, [gridStack])

  useEffect(() => {
    if (!gridStack) return
    // Only emit change if the gridStack instance is valid
    if (gridStack.el && gridStack.el.parentElement) {
      emitChange()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridStack])
  return (
    <GridStackContext.Provider
      value={{
        options: convertedOptions,
        gridStack,

        _gridStack: {
          value: gridStack,
          set: setGridStack,
        },
        _rawWidgetMetaMap: {
          value: rawWidgetMetaMap,
          set: setRawWidgetMetaMap,
        },
        _reactContentMap: {
          value: reactContentMap,
          set: setReactContentMap,
        },
      }}
    >
      {children}
    </GridStackContext.Provider>
  )
}
