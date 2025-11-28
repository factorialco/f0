import {
  F0GridStack,
  F0GridStackRef,
  GridStackReactOptions,
  GridStackReactWidget,
} from "@/components/Utilities/F0GridStack/F0GridStack"

import { Optional } from "@/lib/typescript-utils/opional"
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react"
import { DashboardWidget } from "./components/DashboardWidget"

export type GridFixedGroupSize = { w: number; h: number }

export type Widget = {
  id: string
  availableSizes?: GridFixedGroupSize[]
  content: React.ReactNode
  title: string
  x: number
  y: number
  locked?: boolean
} & GridFixedGroupSize

export interface DashboardProps {
  widgets: Optional<Widget, "x" | "y">[]
  editMode?: boolean
  /**
   * Callback function that is called whenever the layout changes.
   * Receives an array of widgets with updated positions and properties.
   * This can be used to keep widgets in sync by using the returned data.
   */
  onChange?: (widgets: Widget[]) => void
}

const limitDepth = (obj: unknown, depth = 0): unknown => {
  if (depth >= 3) return "[Max Depth]"
  if (obj === null || typeof obj !== "object") return obj
  if (Array.isArray(obj)) {
    return obj.map((item) => limitDepth(item, depth + 1))
  }
  const result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(obj)) {
    result[key] = limitDepth(value, depth + 1)
  }
  return result
}

const Dashboard = forwardRef<F0GridStackRef, DashboardProps>(
  ({ widgets, editMode = false, onChange = () => {} }: DashboardProps, ref) => {
    const gridOptions: GridStackReactOptions = useMemo(
      () => ({
        acceptWidgets: true,
        margin: 8,
        handle: ".dashboard-widget-handle",
        column: 4,
        columnOpts: {
          breakpointForWindow: true,
          breakpoints: [
            { c: 1, w: 700 },
            { c: 3, w: 850 },
            { c: 6, w: 950 },
            { c: 8, w: 1100 },
          ],
          columnMax: 4,
        },
      }),
      []
    )

    const widgetsToGridWidgets = (
      widgets: Optional<Widget, "x" | "y">[],
      editMode: boolean
    ) => {
      return widgets.map((widget) => ({
        id: widget.id,
        h: widget.h ?? 1,
        w: widget.w ?? 1,
        allowedSizes: widget.availableSizes,
        noMove: !editMode,
        noResize: !editMode,
        locked: widget.locked,
        meta: {
          title: widget.title,
          content: widget.content,
        },
        content: (
          <DashboardWidget title={widget.title} draggable={editMode}>
            {widget.content}
          </DashboardWidget>
        ),
      }))
    }

    const [gridWidgets, setGridWidgets] = useState<GridStackReactWidget[]>(
      widgetsToGridWidgets(widgets, editMode)
    )

    const handleChange = useCallback(
      (gridWidgets: GridStackReactWidget[]) => {
        setGridWidgets(gridWidgets)
        console.log("gridWidgets", limitDepth(gridWidgets))
        onChange(
          gridWidgets.map((widget) => ({
            id: widget.id,
            w: widget.w ?? 1,
            h: widget.h ?? 1,
            allowedSizes: widget.allowedSizes,
            content: widget.meta?.content ?? null,
            title: (widget.meta?.title as string | undefined) ?? "",
            x: widget.x ?? 0,
            y: widget.y ?? 0,
            locked: widget.locked,
          }))
        )
      },
      [onChange]
    )

    useEffect(() => {
      setGridWidgets(widgetsToGridWidgets(widgets, editMode))
    }, [widgets, editMode])

    return (
      <F0GridStack
        options={gridOptions}
        onChange={handleChange}
        widgets={gridWidgets}
      />
    )
  }
)

Dashboard.displayName = "Dashboard"

export { Dashboard }
