import {
  F0GridStack,
  GridStackReactOptions,
  GridStackReactWidget,
} from "@/components/Utilities/F0GridStack/F0GridStack"

import { Optional } from "@/lib/typescript-utils/optional"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { PageLayoutGroupComponent } from "../../types"
import { GroupGridWidget } from "./typings"

export interface GroupGridProps<Widget extends GroupGridWidget> {
  widgets: Optional<Widget, "x" | "y">[]
  editMode?: boolean
  /**
   * Callback function that is called whenever the layout changes.
   * Receives an array of widgets with updated positions and properties.
   * This can be used to keep widgets in sync by using the returned data.
   */
  onChange?: (widgets: Widget[]) => void
  WidgetWrapper?: (
    children: React.ReactNode,
    meta: Widget["meta"] | undefined,
    editMode: boolean
  ) => React.ReactElement
  /**
   * If the group is the main content of the page, it will try to take the full height of the page
   */
  main?: boolean
}

const defaultWidgetWrapper = (
  children: React.ReactNode,
  _meta: Record<string, unknown> | undefined,
  _editMode: boolean
) => <div>{children}</div>

export const GroupGrid = <Widget extends GroupGridWidget>({
  widgets = [],
  editMode = false,
  onChange = () => {},
  WidgetWrapper = defaultWidgetWrapper,
  main = false,
}: GroupGridProps<Widget>) => {
  const AnimatedWidgetWrapper = useCallback(
    (
      children: React.ReactNode,
      meta: Record<string, unknown> | undefined,
      editMode: boolean
    ) => (
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{
          opacity: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
          scale: { type: "spring", stiffness: 100, damping: 6, mass: 0.5 },
          filter: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
        }}
      >
        {WidgetWrapper(children, meta, editMode)}
      </motion.div>
    ),
    [WidgetWrapper]
  )

  const gridOptions: GridStackReactOptions = useMemo(
    () => ({
      acceptWidgets: true,
      margin: 8,
      handle: "[data-gs-handle='true']",
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
    widgets: Optional<GroupGridWidget, "x" | "y">[],
    editMode: boolean
  ) => {
    return widgets.map((widget) => {
      // Use content function if provided, otherwise use static content
      const widgetContent: React.ReactNode =
        typeof widget.content === "function" && widget.deps
          ? widget.content(widget.deps)
          : typeof widget.content === "function"
            ? null // If content is a function but no deps, return null
            : widget.content

      const gridWidget: GridStackReactWidget = {
        id: widget.id,
        h: widget.h ?? 1,
        w: widget.w ?? 1,
        allowedSizes: widget.availableSizes,
        noMove: !editMode,
        noResize: !editMode,
        locked: widget.locked,
        meta: widget.meta,
        _originalContent: widgetContent,
        content: AnimatedWidgetWrapper(widgetContent, widget.meta, editMode),
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
  // Track dependencies for each widget to detect changes
  const prevDepsRef = useRef<Map<string, unknown[]>>(new Map())
  // Store current widgets in a ref to access in callbacks without dependency issues
  const widgetsRef = useRef(widgets)
  widgetsRef.current = widgets

  const handleChange = useCallback(
    (gridWidgets: GridStackReactWidget[]) => {
      setGridWidgets(gridWidgets)
      // Only call onChange if this is not an editMode-only change
      // (editMode-only changes are handled internally to preserve sizes)

      if (!isEditModeOnlyChangeRef.current) {
        onChange(
          gridWidgets.map((widget) => {
            // Find the original widget to preserve deps and content function
            const originalWidget = widgetsRef.current.find(
              (w) => w.id === widget.id
            )
            return {
              id: widget.id,
              w: widget.w ?? 1,
              h: widget.h ?? 1,
              allowedSizes: widget.allowedSizes,
              meta: widget.meta,
              // Preserve the original content (function or static) from the widget prop
              content:
                typeof originalWidget?.content === "function"
                  ? originalWidget.content
                  : widget._originalContent,
              x: widget.x ?? 0,
              y: widget.y ?? 0,
              locked: widget.locked,
              deps: originalWidget?.deps,
            } as unknown as Widget
          })
        )
      }
      isEditModeOnlyChangeRef.current = false
    },
    [onChange]
  )

  // Helper function to check if dependencies have changed
  const depsChanged = (
    prevDeps: unknown[] | undefined,
    currentDeps: unknown[] | undefined
  ): boolean => {
    if (!prevDeps && !currentDeps) return false
    if (!prevDeps || !currentDeps) return true
    if (prevDeps.length !== currentDeps.length) return true
    return prevDeps.some((dep, index) => dep !== currentDeps[index])
  }

  // Helper function to get widget content, handling content function if provided
  const getWidgetContent = (
    widget: Optional<GroupGridWidget, "x" | "y">
  ): React.ReactNode => {
    if (typeof widget.content === "function" && widget.deps) {
      return widget.content(widget.deps)
    }
    if (typeof widget.content === "function") {
      // If content is a function but no deps provided, return null
      return null
    }
    return widget.content
  }

  useEffect(() => {
    const editModeChanged = prevEditModeRef.current !== editMode
    const widgetsReferenceChanged = prevWidgetsRef.current !== widgets

    // Check for dependency changes
    const depsChangedMap = new Map<string, boolean>()
    widgets.forEach((widget) => {
      const prevDeps = prevDepsRef.current.get(widget.id)
      const currentDeps = widget.deps
      depsChangedMap.set(widget.id, depsChanged(prevDeps, currentDeps))
      // Update stored deps
      if (currentDeps) {
        prevDepsRef.current.set(widget.id, currentDeps)
      } else {
        prevDepsRef.current.delete(widget.id)
      }
    })

    // Remove deps for widgets that no longer exist
    const currentWidgetIds = new Set(widgets.map((w) => w.id))
    prevDepsRef.current.forEach((_, widgetId) => {
      if (!currentWidgetIds.has(widgetId)) {
        prevDepsRef.current.delete(widgetId)
      }
    })

    const hasDepsChanges = Array.from(depsChangedMap.values()).some(
      (changed) => changed
    )

    if (editModeChanged && !widgetsReferenceChanged && !hasDepsChanges) {
      // Only editMode changed: update noMove/noResize in place without changing array reference
      // This prevents GridStackProvider from resetting sizes
      isEditModeOnlyChangeRef.current = true
      setGridWidgets((currentGridWidgets) =>
        currentGridWidgets.map((currentWidget) => {
          const widgetFromProp = widgets.find((w) => w.id === currentWidget.id)
          if (!widgetFromProp) {
            return currentWidget
          }
          // Get content using content function if available, otherwise use static content
          const content = getWidgetContent(widgetFromProp)

          return {
            ...currentWidget,
            noMove: !editMode,
            noResize: !editMode,
            locked: widgetFromProp.locked,
            meta: widgetFromProp.meta,
            _originalContent: content,
            content: AnimatedWidgetWrapper(
              content,
              widgetFromProp.meta,
              editMode
            ),
          }
        })
      )
    } else if (widgetsReferenceChanged || hasDepsChanges) {
      // Widgets prop changed or dependencies changed: merge with current state to preserve sizes/positions if widget exists
      setGridWidgets((currentGridWidgets) => {
        const currentWidgetsMap = new Map(
          currentGridWidgets.map((w) => [w.id, w])
        )
        return widgets.map((widget) => {
          const currentWidget = currentWidgetsMap.get(widget.id)
          const widgetDepsChanged = depsChangedMap.get(widget.id) ?? false

          // If dependencies changed or widget is new, use content function or static content
          // Otherwise, preserve existing content to avoid unnecessary re-renders
          let content: React.ReactNode
          if (widgetDepsChanged || !currentWidget) {
            content = getWidgetContent(widget)
          } else {
            // Preserve existing content if deps haven't changed
            content = currentWidget._originalContent ?? getWidgetContent(widget)
          }

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
            meta: widget.meta,
            _originalContent: content,
            content: AnimatedWidgetWrapper(content, widget.meta, editMode),
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
  }, [widgets, editMode, AnimatedWidgetWrapper])

  return (
    <F0GridStack
      className={cn(main && "h-full flex-1 overflow-auto")}
      options={gridOptions}
      onChange={handleChange}
      widgets={gridWidgets}
    />
  )
}

GroupGrid.displayName = "GroupGrid"
// Mark as a valid PageLayoutGroup component
;(GroupGrid as unknown as PageLayoutGroupComponent).__isPageLayoutGroup = true
