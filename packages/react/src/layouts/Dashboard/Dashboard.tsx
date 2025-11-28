import {
  F0GridStack,
  GridStackReactOptions,
  GridStackReactWidget,
} from "@/components/Utilities/F0GridStack/F0GridStack"

import { Optional } from "@/lib/typescript-utils/opional"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
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

const Dashboard = ({
  widgets,
  editMode = false,
  onChange = () => {},
}: DashboardProps) => {
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
    return widgets.map((widget) => {
      const gridWidget: GridStackReactWidget = {
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
      }
      // Only include x and y if they're defined, so GridStack can auto-position when undefined
      if (widget.x !== undefined) {
        gridWidget.x = widget.x
      }
      if (widget.y !== undefined) {
        gridWidget.y = widget.y
      }
      return gridWidget
    })
  }

  const [gridWidgets, setGridWidgets] = useState<GridStackReactWidget[]>(
    widgetsToGridWidgets(widgets, editMode)
  )

  const prevEditModeRef = useRef(editMode)
  const prevWidgetsRef = useRef(widgets)
  const isEditModeOnlyChangeRef = useRef(false)

  const handleChange = useCallback(
    (gridWidgets: GridStackReactWidget[]) => {
      setGridWidgets(gridWidgets)
      // Only call onChange if this is not an editMode-only change
      // (editMode-only changes are handled internally to preserve sizes)
      if (!isEditModeOnlyChangeRef.current) {
        onChange(
          gridWidgets.map((widget) => ({
            id: widget.id,
            w: widget.w ?? 1,
            h: widget.h ?? 1,
            allowedSizes: widget.allowedSizes,
            content:
              (widget.meta?.content as React.ReactNode | undefined) ?? null,
            title: (widget.meta?.title as string | undefined) ?? "",
            x: widget.x ?? 0,
            y: widget.y ?? 0,
            locked: widget.locked,
          }))
        )
      }
      isEditModeOnlyChangeRef.current = false
    },
    [onChange]
  )

  useEffect(() => {
    const editModeChanged = prevEditModeRef.current !== editMode
    const widgetsReferenceChanged = prevWidgetsRef.current !== widgets

    if (editModeChanged && !widgetsReferenceChanged) {
      // Only editMode changed: update noMove/noResize in place without changing array reference
      // This prevents GridStackProvider from resetting sizes
      isEditModeOnlyChangeRef.current = true
      setGridWidgets((currentGridWidgets) =>
        currentGridWidgets.map((currentWidget) => {
          const widgetFromProp = widgets.find((w) => w.id === currentWidget.id)
          if (!widgetFromProp) {
            return currentWidget
          }
          // Only update noMove/noResize and content, preserve everything else
          return {
            ...currentWidget,
            noMove: !editMode,
            noResize: !editMode,
            locked: widgetFromProp.locked,
            meta: {
              title: widgetFromProp.title,
              content: widgetFromProp.content,
            },
            content: (
              <DashboardWidget
                title={widgetFromProp.title}
                draggable={editMode}
              >
                {widgetFromProp.content}
              </DashboardWidget>
            ),
          }
        })
      )
    } else if (widgetsReferenceChanged) {
      // Widgets prop changed: merge with current state to preserve sizes/positions if widget exists
      setGridWidgets((currentGridWidgets) => {
        const currentWidgetsMap = new Map(
          currentGridWidgets.map((w) => [w.id, w])
        )
        return widgets.map((widget) => {
          const currentWidget = currentWidgetsMap.get(widget.id)
          // Preserve size/position from current state if widget exists, otherwise use prop
          // Only include x and y if they're defined, so GridStack can auto-position when undefined
          const gridWidget: GridStackReactWidget = {
            id: widget.id,
            h: currentWidget?.h ?? widget.h ?? 1,
            w: currentWidget?.w ?? widget.w ?? 1,
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
          }
          // Preserve x/y from current widget if it exists, otherwise use from prop if defined
          const x = currentWidget?.x ?? widget.x
          const y = currentWidget?.y ?? widget.y
          if (x !== undefined) {
            gridWidget.x = x
          }
          if (y !== undefined) {
            gridWidget.y = y
          }
          return gridWidget
        })
      })
    }

    prevEditModeRef.current = editMode
    prevWidgetsRef.current = widgets
  }, [widgets, editMode])

  return (
    <F0GridStack
      options={gridOptions}
      onChange={handleChange}
      widgets={gridWidgets}
    />
  )
}

Dashboard.displayName = "Dashboard"

export { Dashboard }
