import {
  F0GridStack,
  F0GridStackRef,
  GridStackReactOptions,
  GridStackReactWidget,
} from "@/components/Utilities/F0GridStack/F0GridStack"

import { forwardRef, useCallback, useEffect, useMemo, useState } from "react"
import { DashboardWidget } from "./components/DashboardWidget"

export type GridFixedGroupSize = { w: number; h: number }

export interface Widget {
  id: string
  size: GridFixedGroupSize
  availableSizes?: GridFixedGroupSize[]
  content: () => React.ReactNode
  title: string
}

export interface DashboardProps {
  widgets: Widget[]
  editMode?: boolean
  /**
   * Callback function that is called whenever the layout changes.
   * Receives an array of widgets with updated positions and properties.
   * This can be used to keep widgets in sync by using the returned data.
   */
  onChange?: (widgets: GridStackReactWidget[]) => void
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
      (widgets: GridStackReactWidget[]) => {
        console.log("handleChange", widgets)
        setGridWidgets(widgets)
        onChange(widgets)
      },
      [onChange]
    )

    useEffect(() => {
      setGridWidgets(
        widgets.map((widget) => ({
          id: widget.id,
          h: widget.size.h ?? 1,
          w: widget.size.w ?? 1,
          allowedSizes: widget.availableSizes,
          meta: {
            title: widget.title,
            content: widget.content,
          },
          renderFn: (
            <DashboardWidget title={widget.title} draggable={editMode}>
              {widget.content()}
            </DashboardWidget>
          ),
        }))
      )
    }, [widgets, editMode])

    useEffect(() => {
      setGridWidgets((prev) => {
        console.log("editMode", editMode, prev)
        return prev.map((widget) => ({
          ...widget,
          noMove: !editMode,
          noResize: !editMode,
        }))
      })
    }, [editMode])

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
