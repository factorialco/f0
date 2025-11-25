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

    const [gridWidgets, setGridWidgets] = useState<GridStackReactWidget[]>([])

    const handleChange = useCallback(
      (gridWidgets: GridStackReactWidget[]) => {
        setGridWidgets(gridWidgets)
        onChange(
          gridWidgets.map((widget) => ({
            id: widget.id,
            w: (widget as GridStackReactWidget & { w?: number }).w ?? 1,
            h: (widget as GridStackReactWidget & { h?: number }).h ?? 1,
            availableSizes: widget.allowedSizes,
            content: widget.meta.content ?? null,
            title: (widget.meta?.title as string | undefined) ?? "",
            x: (widget as GridStackReactWidget & { x?: number }).x ?? 0,
            y: (widget as GridStackReactWidget & { y?: number }).y ?? 0,
            locked: (widget as GridStackReactWidget & { locked?: boolean })
              .locked,
          }))
        )
      },
      [onChange]
    )

    useEffect(() => {
      setGridWidgets(
        widgets.map((widget) => ({
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
      )
    }, [widgets, editMode])

    return (
      <F0GridStack
        ref={ref}
        options={gridOptions}
        onChange={handleChange}
        widgets={gridWidgets}
      />
    )
  }
)

Dashboard.displayName = "Dashboard"

export { Dashboard }
