import type {
  GridItemHTMLElement,
  GridStack,
  GridStackOptions,
  GridStackWidget,
} from "gridstack"

import { useDeepCompareEffect } from "@reactuses/core"
import { motion } from "motion/react"
import React, {
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

const REMOVE_ANIMATION_DURATION = 200

/**
 * Clones an element and preserves canvas content by converting to data URLs
 * @param element - The element to clone
 * @returns The innerHTML string with canvas content preserved as images
 */
function cloneElementWithCanvas(element: HTMLElement): string {
  // Clone the element deeply
  const clonedElement = element.cloneNode(true) as HTMLElement

  // Find all canvas elements in the original element
  const originalCanvases = element.querySelectorAll("canvas")

  // Replace each canvas with an img element containing the canvas data as a data URL
  originalCanvases.forEach((originalCanvas) => {
    if (originalCanvas.width > 0 && originalCanvas.height > 0) {
      try {
        // Convert canvas to data URL (base64 image)
        const dataURL = originalCanvas.toDataURL("image/png")

        // Find the corresponding canvas in the cloned element
        // We need to find it by position/index since we can't use the original reference
        const allClonedCanvases = clonedElement.querySelectorAll("canvas")
        const canvasIndex = Array.from(
          element.querySelectorAll("canvas")
        ).indexOf(originalCanvas)
        const clonedCanvas = allClonedCanvases[canvasIndex]

        if (clonedCanvas && clonedCanvas.parentElement) {
          // Create an img element with the canvas data
          const img = document.createElement("img")
          img.src = dataURL
          img.style.width = `${originalCanvas.width}px`
          img.style.height = `${originalCanvas.height}px`
          img.style.display = "block"

          // Copy any relevant attributes from the canvas
          if (originalCanvas.className) {
            img.className = originalCanvas.className
          }
          if (originalCanvas.id) {
            img.id = originalCanvas.id
          }

          // Replace the canvas with the img element
          clonedCanvas.parentElement.replaceChild(img, clonedCanvas)
        }
      } catch (error) {
        // If canvas is tainted (CORS issue) or conversion fails, keep the canvas as-is
        console.warn("Failed to convert canvas to image:", error)
      }
    }
  })

  return clonedElement.innerHTML
}

export function GridStackProvider({
  children,
  options,
  onResizeStop,
  onChange,
  widgets,
}: PropsWithChildren<GridStackProviderProps>) {
  const [gridStack, setGridStack] = useState<GridStack | null>(null)
  const gridStackRef = useRef<GridStack | null>(null)
  // Track if widgets have been synced at least once to prevent initial emitChange from overwriting widgets
  const isInitializedRef = useRef<boolean>(false)

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

  // Ref to track reactContentMap synchronously for emitChange callback
  // This ensures emitChange always has access to the latest content when GridStack fires events
  const reactContentMapRef =
    useRef<Map<string, React.ReactElement>>(reactContentMap)

  // Keep ref in sync with state updates
  useEffect(() => {
    reactContentMapRef.current = reactContentMap
  }, [reactContentMap])

  // Store original content separately to prevent GridStack's deepClone from causing stack overflow
  const [originalContentMap, setOriginalContentMap] = useState(() => {
    const map = new Map<string, React.ReactNode>()
    const widgetsToProcess = widgets || []
    const deepFindNodeWithOriginalContent = (obj: GridStackReactWidget) => {
      if (obj.id && obj._originalContent !== undefined) {
        map.set(obj.id, obj._originalContent)
      }

      if (obj.subGridOpts?.children) {
        obj.subGridOpts.children.forEach((child) => {
          deepFindNodeWithOriginalContent(child as GridStackReactWidget)
        })
      }
    }
    widgetsToProcess.forEach((child) => {
      deepFindNodeWithOriginalContent(child)
    })
    return map
  })

  // Ref to track originalContentMap synchronously for emitChange callback
  // This ensures emitChange always has access to the latest _originalContent when GridStack fires events
  const originalContentMapRef =
    useRef<Map<string, React.ReactNode>>(originalContentMap)

  // Keep ref in sync with state updates
  useEffect(() => {
    originalContentMapRef.current = originalContentMap
  }, [originalContentMap])

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
      // Update ref synchronously BEFORE adding widgets to GridStack
      // This ensures emitChange has access to content when "added" event fires
      widgetsToAdd.forEach((widget) => {
        if (widget.content) {
          reactContentMapRef.current.set(widget.id!, widget.content)
        }
        if (widget._originalContent !== undefined) {
          originalContentMapRef.current.set(widget.id!, widget._originalContent)
        }
      })

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
      setOriginalContentMap((prev) => {
        const next = new Map(prev)
        widgetsToAdd.forEach((widget) => {
          if (widget._originalContent !== undefined) {
            next.set(widget.id!, widget._originalContent)
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
      const idsToRemove = widgetsToRemove.map((w) => w.id!).filter(Boolean)

      // Update ref synchronously BEFORE removing widgets from GridStack
      idsToRemove.forEach((id) => {
        setTimeout(() => {
          reactContentMapRef.current.delete(id)
          originalContentMapRef.current.delete(id)
        }, REMOVE_ANIMATION_DURATION)
      })

      widgetsToRemove.forEach((widget) => {
        const element = gridStack.el.querySelector<GridItemHTMLElement>(
          `[gs-id="${widget.id}"]`
        )
        if (element) {
          setTimeout(() => {
            gridStack.removeWidget(element, true)
          }, REMOVE_ANIMATION_DURATION)
        }
      })
      // Update maps using functional updates
      setRawWidgetMetaMap((prev) => {
        const next = new Map(prev)
        idsToRemove.forEach((id) => {
          setTimeout(() => {
            next.delete(id)
          }, REMOVE_ANIMATION_DURATION)
        })
        return next
      })

      setReactContentMap((prev) => {
        const next = new Map(prev)
        idsToRemove.forEach((id) => {
          const content = next.get(id)
          if (content) {
            // Find the widget container element to capture its HTML and dimensions
            const widgetElement =
              gridStack.el.querySelector<GridItemHTMLElement>(
                `[gs-id="${id}"] .grid-stack-item-content`
              )

            // Capture the static HTML and dimensions from the DOM before wrapping
            let staticHTML = ""
            if (widgetElement) {
              // Clone the element with canvas content preserved
              staticHTML = cloneElementWithCanvas(widgetElement)
            }

            next.set(
              id,
              <motion.div
                className="h-full w-full"
                initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                animate={{ opacity: 0, scale: 0.85, filter: "blur(14px)" }}
                exit={{ opacity: 0, scale: 0.85, filter: "blur(14px)" }}
                transition={{
                  opacity: {
                    duration: REMOVE_ANIMATION_DURATION / 1000,
                    ease: [0.32, 0, 0.67, 0],
                  },
                  scale: {
                    duration: REMOVE_ANIMATION_DURATION / 1000,
                    ease: [0.65, 0, 0.35, 1],
                  },
                  filter: {
                    duration: REMOVE_ANIMATION_DURATION / 1000,
                    ease: "linear",
                  },
                }}
                dangerouslySetInnerHTML={{ __html: staticHTML }}
              />
            )
          }
          setTimeout(() => {
            next.delete(id)
          }, REMOVE_ANIMATION_DURATION)
        })
        return next
      })
      setOriginalContentMap((prev) => {
        const next = new Map(prev)
        idsToRemove.forEach((id) => {
          setTimeout(() => {
            next.delete(id)
          }, REMOVE_ANIMATION_DURATION)
        })
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
          const sizeProps = ["w", "h", "x", "y"] as const
          const interactionProps = ["noMove", "noResize", "locked"] as const

          // Check if only interaction properties changed (not size/position)
          const changedSizeProps = propertiesChanged.filter((prop) =>
            sizeProps.includes(prop as (typeof sizeProps)[number])
          )
          const changedInteractionProps = propertiesChanged.filter((prop) =>
            interactionProps.includes(prop as (typeof interactionProps)[number])
          )

          // If sizes differ between GridStack and props, but only interaction props changed in the update,
          // preserve GridStack's current sizes (don't reset them to prop values)
          // This prevents resizing when only editMode changes
          if (
            changedSizeProps.length > 0 &&
            changedInteractionProps.length > 0 &&
            changedSizeProps.length + changedInteractionProps.length ===
              propertiesChanged.length
          ) {
            // Only update interaction properties, preserve sizes from GridStack
            changedInteractionProps.forEach((prop) => {
              const value = widget[prop]
              if (value !== undefined) {
                ;(updateOptions as Record<string, unknown>)[prop] = value
              }
            })
          } else {
            // Normal update: include all changed properties
            propertiesChanged.forEach((prop) => {
              const value = widget[prop]
              if (value !== undefined) {
                ;(updateOptions as Record<string, unknown>)[prop] = value
              }
            })
          }

          // Only push update if there are options to update
          if (Object.keys(updateOptions).length > 0) {
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
        }
      })

      // Update ref synchronously BEFORE updating widgets in GridStack
      // This ensures emitChange has access to latest content when "change" event fires
      widgetsToUpdate.forEach((widget) => {
        if (widget.content) {
          reactContentMapRef.current.set(widget.id!, widget.content)
        }
        if (widget._originalContent !== undefined) {
          originalContentMapRef.current.set(widget.id!, widget._originalContent)
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
      setOriginalContentMap((prev) => {
        const next = new Map(prev)
        widgetsToUpdate.forEach((widget) => {
          if (widget._originalContent !== undefined) {
            next.set(widget.id!, widget._originalContent)
          }
        })
        return next
      })
    }

    // Mark as initialized after first sync completes
    // This prevents the initial emitChange() from overwriting widgets added via useEffect
    // We mark it here after all sync operations (add/remove/update) have completed
    if (!isInitializedRef.current) {
      isInitializedRef.current = true
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
      // Merge layout data (positions) with React content from reactContentMapRef
      // Use ref instead of state to ensure we always have the latest content synchronously
      // This fixes the race condition where GridStack fires events before state updates complete
      const updatedWidgets: GridStackReactWidget[] = layout
        .map((item) => {
          const widgetId = item.id
          if (!widgetId) return null

          // Retrieve React content from reactContentMapRef (always up-to-date synchronously)
          const content = reactContentMapRef.current.get(widgetId)
          // Retrieve _originalContent from originalContentMapRef (always up-to-date synchronously)
          const originalContent = originalContentMapRef.current.get(widgetId)

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
            // Use _originalContent from originalContentMapRef
            _originalContent: originalContent,
            // Use React content from reactContentMapRef
            content: content ?? <div>No content</div>,
          }

          return updatedWidget
        })
        .filter((widget): widget is GridStackReactWidget => widget !== null)

      onChange?.(updatedWidgets)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridStack])

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
    // Only emit change if the gridStack instance is valid and widgets have been initialized
    // Skip the initial emitChange() to prevent overwriting widgets added via useEffect on mount
    if (
      gridStack.el &&
      gridStack.el.parentElement &&
      isInitializedRef.current
    ) {
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
