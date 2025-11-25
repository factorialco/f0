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
  useRef,
  useState,
} from "react"
import { GridStackReactWidget } from "../F0GridStack"
import { GridStackContext } from "./grid-stack-context"
import "./types"

interface GridStackProviderProps {
  children: React.ReactNode
  options: GridStackOptions
  onResizeStop?: (event: Event, el: GridItemHTMLElement) => void
  onChange?: (widgets: GridStackReactWidget[]) => void
}

export function GridStackProvider({
  children,
  options,
  onResizeStop,
  onChange,
}: PropsWithChildren<GridStackProviderProps>) {
  const [gridStack, setGridStack] = useState<GridStack | null>(null)
  const gridStackRef = useRef<GridStack | null>(null)
  const previousWidgetsRef = useRef<GridStackWidget[] | undefined>(
    options.children
  )
  const [rawWidgetMetaMap, setRawWidgetMetaMap] = useState(() => {
    const map = new Map<string, GridStackWidget>()
    const deepFindNodeWithContent = (obj: GridStackWidget) => {
      if (obj.id && obj.renderFn?.()) {
        map.set(obj.id, obj)
      }

      if (obj.subGridOpts?.children) {
        obj.subGridOpts.children.forEach((child: GridStackWidget) => {
          deepFindNodeWithContent(child)
        })
      }
    }
    options.children?.forEach((child: GridStackWidget) => {
      deepFindNodeWithContent(child)
    })
    return map
  })

  // Sync widgets when options.children changes (without recreating gridStack)
  useEffect(() => {
    const previousWidgetIds = new Set(
      previousWidgetsRef.current?.map((w) => w.id).filter(Boolean) || []
    )
    const newWidgetIds = new Set(
      options.children?.map((w) => w.id).filter(Boolean) || []
    )
    const previousWidgetsMap = new Map<string, GridStackWidget>()
    previousWidgetsRef.current?.forEach((w) => {
      if (w.id) {
        previousWidgetsMap.set(w.id, w)
      }
    })

    // Update rawWidgetMetaMap to match options.children
    setRawWidgetMetaMap(() => {
      const newMap = new Map<string, GridStackWidget>()
      const deepFindNodeWithContent = (obj: GridStackWidget) => {
        if (obj.id && obj.renderFn?.()) {
          newMap.set(obj.id, obj)
        }

        if (obj.subGridOpts?.children) {
          obj.subGridOpts.children.forEach((child: GridStackWidget) => {
            deepFindNodeWithContent(child)
          })
        }
      }
      options.children?.forEach((child: GridStackWidget) => {
        deepFindNodeWithContent(child)
      })
      return newMap
    })

    // Sync widgets with gridStack instance
    if (gridStack && gridStack.el && gridStack.el.parentElement) {
      options.children?.forEach((widget) => {
        if (!widget.id) return

        const previousWidget = previousWidgetsMap.get(widget.id)
        const element = gridStack.el.querySelector<GridItemHTMLElement>(
          `[gs-id="${widget.id}"]`
        )

        if (!previousWidgetIds.has(widget.id)) {
          // Add new widgets
          try {
            gridStack.addWidget(widget)
          } catch (error) {
            console.warn("Error adding widget:", error)
          }
        } else if (element && previousWidget) {
          // Update existing widgets if properties changed
          // Check if editable properties have changed
          const propertiesChanged =
            (previousWidget.noMove ?? false) !== (widget.noMove ?? false) ||
            (previousWidget.noResize ?? false) !== (widget.noResize ?? false) ||
            (previousWidget.locked ?? false) !== (widget.locked ?? false) ||
            previousWidget.w !== widget.w ||
            previousWidget.h !== widget.h ||
            previousWidget.x !== widget.x ||
            previousWidget.y !== widget.y

          if (propertiesChanged) {
            try {
              // Update widget properties (noMove, noResize, locked, position, size)
              const updateOptions: Partial<GridStackWidget> = {}
              if (widget.noMove !== undefined)
                updateOptions.noMove = widget.noMove
              if (widget.noResize !== undefined)
                updateOptions.noResize = widget.noResize
              if (widget.locked !== undefined)
                updateOptions.locked = widget.locked
              if (widget.w !== undefined) updateOptions.w = widget.w
              if (widget.h !== undefined) updateOptions.h = widget.h
              if (widget.x !== undefined) updateOptions.x = widget.x
              if (widget.y !== undefined) updateOptions.y = widget.y

              gridStack.update(element, updateOptions)
            } catch (error) {
              console.warn("Error updating widget:", error)
            }
          }
        }
      })

      // Remove widgets that are no longer in options
      previousWidgetIds.forEach((id) => {
        if (!newWidgetIds.has(id)) {
          try {
            const element = gridStack.el.querySelector<GridItemHTMLElement>(
              `[gs-id="${id}"]`
            )
            if (element) {
              gridStack.removeWidget(element, false)
            }
          } catch (error) {
            console.warn("Error removing widget:", error)
          }
        }
      })
    }

    // Update ref for next comparison
    previousWidgetsRef.current = options.children
  }, [options.children, gridStack])

  const emitChange = useCallback(() => {
    if (!gridStack) {
      return
    }

    const layout = gridStack.save()

    if (Array.isArray(layout)) {
      // Merge layout data (positions) with widget metadata from rawWidgetMetaMap
      const updatedWidgets: GridStackReactWidget[] = layout
        .map((item) => {
          const widgetId = item.id
          if (!widgetId) return null

          // Get the widget metadata from rawWidgetMetaMap
          const widgetMeta = rawWidgetMetaMap.get(widgetId)

          if (!widgetMeta) return null

          // Merge layout data (w, h, x, y, meta) with widget metadata
          // This ensures we return the full widget data including renderFn, allowedSizes, etc.
          const updatedWidget: GridStackReactWidget = {
            ...widgetMeta,
            id: widgetId,
            w: item.w ?? widgetMeta.w ?? 1,
            h: item.h ?? widgetMeta.h ?? 1,
            x: item.x ?? widgetMeta.x ?? 0,
            y: item.y ?? widgetMeta.y ?? 0,
            // Merge meta if both exist
            meta: item.meta
              ? { ...widgetMeta.meta, ...item.meta }
              : widgetMeta.meta,
            // Ensure renderFn matches GridStackReactWidget type (can't return null)
            renderFn: widgetMeta.renderFn
              ? () => widgetMeta.renderFn?.() ?? <></>
              : undefined,
          }

          return updatedWidget
        })
        .filter((widget): widget is GridStackReactWidget => widget !== null)

      onChange?.(updatedWidgets)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridStack, rawWidgetMetaMap])

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

  const addWidget = useCallback(
    (
      widget: GridStackWidget & {
        id: Required<GridStackWidget>["id"]
      }
    ) => {
      gridStack?.addWidget(widget)
      setRawWidgetMetaMap((prev) => {
        const newMap = new Map<string, GridStackWidget>(prev)
        newMap.set(widget.id, widget)
        return newMap
      })
    },
    [gridStack]
  )

  const addSubGrid = useCallback(
    (
      subGrid: GridStackWidget & {
        id: Required<GridStackWidget>["id"]
        subGridOpts: Required<GridStackWidget>["subGridOpts"] & {
          children: Array<
            GridStackWidget & { id: Required<GridStackWidget>["id"] }
          >
        }
      }
    ) => {
      gridStack?.addWidget(subGrid)

      setRawWidgetMetaMap((prev) => {
        const newMap = new Map<string, GridStackWidget>(prev)
        subGrid.subGridOpts?.children?.forEach(
          (
            meta: GridStackWidget & {
              id: Required<GridStackWidget>["id"]
            }
          ) => {
            newMap.set(meta.id, meta)
          }
        )
        return newMap
      })
    },
    [gridStack]
  )

  const removeWidget = useCallback(
    (id: string) => {
      const element = document.body.querySelector<GridItemHTMLElement>(
        `[gs-id="${id}"]`
      )
      if (element) gridStack?.removeWidget(element)

      setRawWidgetMetaMap((prev) => {
        const newMap = new Map<string, GridStackWidget>(prev)
        newMap.delete(id)
        return newMap
      })
    },
    [gridStack]
  )

  const removeAll = useCallback(() => {
    gridStack?.removeAll()
    setRawWidgetMetaMap(new Map<string, GridStackWidget>())
  }, [gridStack])

  return (
    <GridStackContext.Provider
      value={{
        options,
        gridStack,

        addWidget,
        removeWidget,
        addSubGrid,
        removeAll,

        _gridStack: {
          value: gridStack,
          set: setGridStack,
        },
        _rawWidgetMetaMap: {
          value: rawWidgetMetaMap,
          set: setRawWidgetMetaMap,
        },
      }}
    >
      {children}
    </GridStackContext.Provider>
  )
}
