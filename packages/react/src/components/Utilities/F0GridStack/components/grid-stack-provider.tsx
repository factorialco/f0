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
  originalWidgets?: GridStackReactWidget[]
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
  originalWidgets,
}: PropsWithChildren<GridStackProviderProps>) {
  const [gridStack, setGridStack] = useState<GridStack | null>(null)
  const gridStackRef = useRef<GridStack | null>(null)

  // Convert widgets for gridstack (convert React content to functions)
  const convertedOptions = useMemo(() => {
    if (!originalWidgets || originalWidgets.length === 0) {
      return options
    }
    return {
      ...options,
      children: originalWidgets.map(convertWidgetRecursive),
    }
  }, [options, originalWidgets])

  const previousWidgetsRef = useRef<GridStackWidget[] | undefined>(
    convertedOptions.children
  )
  const [rawWidgetMetaMap, setRawWidgetMetaMap] = useState(() => {
    const map = new Map<string, GridStackWidget>()
    const widgetsToProcess = originalWidgets || options.children || []
    const deepFindNodeWithContent = (
      obj: GridStackWidget | GridStackReactWidget
    ) => {
      const reactWidget = obj as GridStackReactWidget
      if (obj.id && reactWidget.content) {
        map.set(obj.id, obj as GridStackWidget)
      }

      if (obj.subGridOpts?.children) {
        obj.subGridOpts.children.forEach((child: GridStackWidget) => {
          deepFindNodeWithContent(child)
        })
      }
    }
    widgetsToProcess.forEach((child) => {
      deepFindNodeWithContent(child)
    })
    return map
  })

  // Sync widgets when convertedOptions.children changes (without recreating gridStack)
  useEffect(() => {
    const previousWidgetIds = new Set(
      previousWidgetsRef.current?.map((w) => w.id).filter(Boolean) || []
    )
    const newWidgetIds = new Set(
      convertedOptions.children?.map((w) => w.id).filter(Boolean) || []
    )
    const previousWidgetsMap = new Map<string, GridStackWidget>()
    previousWidgetsRef.current?.forEach((w) => {
      if (w.id) {
        previousWidgetsMap.set(w.id, w)
      }
    })

    // Update rawWidgetMetaMap to match originalWidgets or options.children
    // Merge with existing map to preserve widgets added via addWidget
    setRawWidgetMetaMap((prev) => {
      const newMap = new Map<string, GridStackWidget>()
      const widgetsToProcess = originalWidgets || options.children || []

      const deepFindNodeWithContent = (
        obj: GridStackWidget | GridStackReactWidget
      ) => {
        const reactWidget = obj as GridStackReactWidget
        if (obj.id && reactWidget.content) {
          newMap.set(obj.id, obj as GridStackWidget)
        }

        if (obj.subGridOpts?.children) {
          obj.subGridOpts.children.forEach((child: GridStackWidget) => {
            deepFindNodeWithContent(child)
          })
        }
      }
      widgetsToProcess.forEach((child) => {
        deepFindNodeWithContent(child)
      })

      // Preserve widgets from previous map that aren't in the new widgets list
      // These are widgets added via addWidget that aren't in originalWidgets/options.children
      prev.forEach((widget, id) => {
        if (!newMap.has(id)) {
          // Check if widget still exists in gridstack before preserving it
          const element = gridStack?.el?.querySelector<GridItemHTMLElement>(
            `[gs-id="${id}"]`
          )
          if (element) {
            newMap.set(id, widget)
          }
        }
      })

      return newMap
    })

    // Sync widgets with gridStack instance
    if (gridStack && gridStack.el && gridStack.el.parentElement) {
      convertedOptions.children?.forEach((widget) => {
        if (!widget.id) return

        const previousWidget = previousWidgetsMap.get(widget.id)
        const element = gridStack.el.querySelector<GridItemHTMLElement>(
          `[gs-id="${widget.id}"]`
        )

        if (!previousWidgetIds.has(widget.id)) {
          // Add new widgets
          // Note: widget is already converted (from convertedOptions.children)
          try {
            gridStack.addWidget(widget)
            // After adding widget, wait for React to render the handle via portal
            // then re-initialize drag handlers to ensure handle is applied
            const handleSelector = convertedOptions.handle
            if (handleSelector) {
              setTimeout(() => {
                if (!gridStack || !gridStack.el) return
                const addedElement =
                  gridStack.el.querySelector<GridItemHTMLElement>(
                    `[gs-id="${widget.id}"]`
                  )
                if (addedElement) {
                  // Verify handle exists in the DOM
                  const handleExists =
                    addedElement.querySelector(handleSelector)
                  if (handleExists) {
                    // Re-initialize drag handlers with handle option
                    gridStack.prepareDragDrop(addedElement, true)
                  }
                }
              }, 0)
            }
          } catch (error) {
            console.warn("Error adding widget:", error)
          }
        } else if (element && previousWidget) {
          // Update existing widgets if properties changed
          // Check if editable properties have changed
          const propertiesChanged = propsToObserve.filter(
            (prop) =>
              previousWidget[prop as keyof GridStackWidget] !==
              widget[prop as keyof GridStackWidget]
          )

          if (propertiesChanged.length > 0) {
            try {
              // Update widget properties (noMove, noResize, locked, position, size)
              const updateOptions: Partial<GridStackWidget> = {}
              propertiesChanged.forEach((prop) => {
                const value = widget[prop]
                if (value !== undefined) {
                  ;(updateOptions as Record<string, unknown>)[prop] = value
                }
              })

              gridStack.update(element, updateOptions)
              // Re-initialize drag handlers after update to ensure handle is applied
              const handleSelector = convertedOptions.handle
              if (handleSelector) {
                setTimeout(() => {
                  if (!gridStack || !gridStack.el) return
                  const handleExists = element.querySelector(handleSelector)
                  if (handleExists) {
                    gridStack.prepareDragDrop(element, true)
                  }
                }, 0)
              }
            } catch (error) {
              console.warn("Error updating widget:", error)
            }
          } else if (element && convertedOptions.handle) {
            // Even if properties didn't change, ensure handle is applied
            // This handles cases where handle option changed
            const handleSelector = convertedOptions.handle
            setTimeout(() => {
              if (!gridStack || !gridStack.el) return
              const handleExists = element.querySelector(handleSelector)
              if (handleExists) {
                try {
                  gridStack.prepareDragDrop(element, true)
                } catch {
                  // Ignore errors
                }
              }
            }, 0)
          }
        }
      })

      // Remove widgets that are no longer in options
      // But preserve widgets that were added via addWidget (they exist in rawWidgetMetaMap but not in convertedOptions.children)
      previousWidgetIds.forEach((id) => {
        if (!newWidgetIds.has(id)) {
          // Check if widget exists in rawWidgetMetaMap but not in originalWidgets/options.children
          // These are widgets added via addWidget and should be preserved
          const widgetInMetaMap = rawWidgetMetaMap.get(id)
          const widgetsToProcess = originalWidgets || options.children || []
          const isInOriginalWidgets = widgetsToProcess.some((w) => w.id === id)

          // Only remove if widget is not in rawWidgetMetaMap (was removed) or is in originalWidgets but removed
          // Preserve widgets added via addWidget
          if (!widgetInMetaMap || isInOriginalWidgets) {
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
        }
      })
    }

    // Update ref for next comparison
    previousWidgetsRef.current = convertedOptions.children
  }, [
    convertedOptions.children,
    convertedOptions.handle,
    gridStack,
    originalWidgets,
  ])

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
      // Merge layout data (positions) with widget metadata from rawWidgetMetaMap
      const updatedWidgets: GridStackReactWidget[] = layout
        .map((item) => {
          const widgetId = item.id
          if (!widgetId) return null

          // Get the widget metadata from rawWidgetMetaMap
          const widgetMeta = rawWidgetMetaMap.get(widgetId)

          if (!widgetMeta) return null

          // Merge layout data (w, h, x, y, meta) with widget metadata
          // This ensures we return the full widget data including content, allowedSizes, etc.
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
            // Ensure content matches GridStackReactWidget type
            content: (widgetMeta as GridStackReactWidget).content ?? undefined,
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
      }}
    >
      {children}
    </GridStackContext.Provider>
  )
}
