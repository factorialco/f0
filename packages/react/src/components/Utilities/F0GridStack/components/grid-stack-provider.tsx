import type {
  GridItemHTMLElement,
  GridStack,
  GridStackOptions,
  GridStackWidget,
} from "gridstack"
import { type PropsWithChildren, useCallback, useEffect, useState } from "react"
import { GridStackWidgetPosition } from "../F0GridStack"
import { GridStackContext } from "./grid-stack-context"
import "./types"

interface GridStackProviderProps {
  children: React.ReactNode
  options: GridStackOptions
  onResizeStop?: (event: Event, el: GridItemHTMLElement) => void
  onChange?: (layout: GridStackWidgetPosition[]) => void
}

export function GridStackProvider({
  children,
  options,
  onResizeStop,
  onChange,
}: PropsWithChildren<GridStackProviderProps>) {
  const [gridStack, setGridStack] = useState<GridStack | null>(null)
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

  const emitChange = useCallback(() => {
    if (!gridStack) {
      return
    }

    const layout = gridStack.save()

    if (Array.isArray(layout)) {
      onChange?.(
        layout.map((item) => ({
          id: item.id ?? "",
          meta: item.meta,
          w: item.w ?? 1,
          h: item.h ?? 1,
          x: item.x ?? 0,
          y: item.y ?? 0,
        }))
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridStack])

  useEffect(() => {
    if (!gridStack) return

    const handleResizeStop = (event: Event, el: GridItemHTMLElement) => {
      onResizeStop?.(event, el)
    }

    gridStack.on("resizestop", handleResizeStop)
    gridStack.on("change added removed", emitChange)

    return () => {
      gridStack.off("resizestop")
      gridStack.off("change added removed")
    }
  }, [gridStack, onResizeStop, emitChange])

  useEffect(() => {
    if (!gridStack) return
    emitChange()
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
