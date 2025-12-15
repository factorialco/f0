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

export interface GroupGridProps<
  Widget extends GroupGridWidget,
  Deps extends Record<string, unknown> = Record<string, unknown>,
> {
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
  /**
   * Current values for dependencies. When this changes, widgets with `deps` arrays
   * will have their content updated automatically. Widgets reference dependencies
   * by key names (e.g., `deps: ['globalCounter']` maps to `deps: { globalCounter: 0 }`).
   */
  deps?: Deps
}

const defaultWidgetWrapper = (
  children: React.ReactNode,
  _meta: Record<string, unknown> | undefined,
  _editMode: boolean
) => <div>{children}</div>

export const GroupGrid = <
  Widget extends GroupGridWidget,
  Deps extends Record<string, unknown> = Record<string, unknown>,
>({
  widgets = [],
  editMode = false,
  onChange = () => {},
  WidgetWrapper = defaultWidgetWrapper,
  main = false,
  deps: dependencyValues,
}: GroupGridProps<Widget, Deps>) => {
  const AnimatedWidgetWrapper = useCallback(
    (children: React.ReactNode, meta: Record<string, unknown> | undefined, editMode: boolean) => (
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

  // Helper function to get widget content, handling content function if provided
  const getWidgetContent = (
    widget: Optional<GroupGridWidget, "x" | "y">,
    dependencyValues?: Deps
  ): React.ReactNode => {
    if (typeof widget.content === "function" && widget.deps && dependencyValues) {
      // Create an object from widget's deps keys and dependencyValues
      const depsObject: Record<string, Deps[keyof Deps]> = {}
      widget.deps.forEach((depKey) => {
        if (typeof depKey === "string" && dependencyValues[depKey] !== undefined) {
          depsObject[depKey] = dependencyValues[depKey] as Deps[keyof Deps]
        }
      })
      return widget.content(depsObject as Partial<Deps>)
    }
    if (typeof widget.content === "function") {
      // If content is a function but no deps or dependencyValues, return null
      return null
    }
    return widget.content
  }

  const widgetsToGridWidgets = (
    widgets: Optional<GroupGridWidget, "x" | "y">[],
    editMode: boolean,
    dependencyValues?: Deps
  ) => {
    return widgets.map((widget) => {
      // Use content function if provided, otherwise use static content
      const widgetContent = getWidgetContent(widget, dependencyValues)

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
  const prevDepsRef = useRef<Map<string, (keyof Deps)[]>>(new Map())
  // Store current widgets in a ref to access in callbacks without dependency issues
  const widgetsRef = useRef(widgets)
  widgetsRef.current = widgets
  // Track previous dependencyValues to detect changes
  const prevDependencyValuesRef = useRef<Deps | undefined>(dependencyValues)

  // Track resolved dependency values for each widget to detect changes
  // We don't modify widget.deps (which contains keys), but track the resolved values separately
  const resolvedDepsMap = useMemo(() => {
    const map = new Map<string, (keyof Deps)[]>()
    if (!dependencyValues || Object.keys(dependencyValues).length === 0) {
      return map
    }
    widgets.forEach((widget) => {
      if (widget.deps && widget.deps.length > 0) {
        // Resolve keys from dependencyValues object
        const resolvedDeps = widget.deps
          .map((depKey) => {
            if (typeof depKey === "string" && dependencyValues[depKey] !== undefined) {
              return dependencyValues[depKey]
            }
            return depKey
          })
          .filter((dep): dep is keyof Deps => dep !== null)
        map.set(widget.id, resolvedDeps)
      }
    })
    return map
  }, [widgets, dependencyValues])

  const handleChange = useCallback(
    (gridWidgets: GridStackReactWidget[]) => {
      setGridWidgets(gridWidgets)
      // Only call onChange if this is not an editMode-only change
      // (editMode-only changes are handled internally to preserve sizes)

      if (!isEditModeOnlyChangeRef.current) {
        onChange(
          gridWidgets.map((widget) => {
            // Find the original widget to preserve deps and content function
            const originalWidget = widgetsRef.current.find((w) => w.id === widget.id)
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
    prevDeps: (keyof Deps)[] | undefined,
    currentDeps: (keyof Deps)[] | undefined
  ): boolean => {
    if (!prevDeps && !currentDeps) return false
    if (!prevDeps || !currentDeps) return true
    if (prevDeps.length !== currentDeps.length) return true
    return prevDeps.some((dep, index) => dep !== currentDeps[index])
  }

  useEffect(() => {
    const editModeChanged = prevEditModeRef.current !== editMode
    const widgetsReferenceChanged = prevWidgetsRef.current !== widgets
    const dependencyValuesChanged =
      prevDependencyValuesRef.current !== dependencyValues &&
      (prevDependencyValuesRef.current === undefined ||
        dependencyValues === undefined ||
        Object.keys(prevDependencyValuesRef.current).length !==
          Object.keys(dependencyValues).length ||
        Object.keys(dependencyValues).some(
          (key) => prevDependencyValuesRef.current?.[key] !== dependencyValues[key]
        ))

    // Check for dependency changes using resolved dependency values
    const depsChangedMap = new Map<string, boolean>()
    widgets.forEach((widget) => {
      if (widget.deps && widget.deps.length > 0) {
        // Compare resolved dependency values, not the keys
        const prevResolvedDeps = prevDepsRef.current.get(widget.id)
        const currentResolvedDeps = resolvedDepsMap.get(widget.id)
        depsChangedMap.set(widget.id, depsChanged(prevResolvedDeps, currentResolvedDeps))
        // Update stored resolved deps
        if (currentResolvedDeps) {
          prevDepsRef.current.set(widget.id, currentResolvedDeps)
        } else {
          prevDepsRef.current.delete(widget.id)
        }
      }
    })

    // Remove deps for widgets that no longer exist
    const currentWidgetIds = new Set(widgets.map((w) => w.id))
    prevDepsRef.current.forEach((_, widgetId) => {
      if (!currentWidgetIds.has(widgetId)) {
        prevDepsRef.current.delete(widgetId)
      }
    })

    const hasDepsChanges =
      Array.from(depsChangedMap.values()).some((changed) => changed) || dependencyValuesChanged

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
          const content = getWidgetContent(widgetFromProp, dependencyValues)

          return {
            ...currentWidget,
            noMove: !editMode,
            noResize: !editMode,
            locked: widgetFromProp.locked,
            meta: widgetFromProp.meta,
            _originalContent: content,
            content: AnimatedWidgetWrapper(content, widgetFromProp.meta, editMode),
          }
        })
      )
    } else if (widgetsReferenceChanged || hasDepsChanges) {
      // Widgets prop changed or dependencies changed: merge with current state to preserve sizes/positions if widget exists
      setGridWidgets((currentGridWidgets) => {
        const currentWidgetsMap = new Map(currentGridWidgets.map((w) => [w.id, w]))
        return widgets.map((widget) => {
          const currentWidget = currentWidgetsMap.get(widget.id)
          const widgetDepsChanged = depsChangedMap.get(widget.id) ?? false

          // If dependencies changed or widget is new, use content function or static content
          // Otherwise, preserve existing content to avoid unnecessary re-renders
          let content: React.ReactNode
          if (widgetDepsChanged || !currentWidget) {
            content = getWidgetContent(widget, dependencyValues)
          } else {
            // Preserve existing content if deps haven't changed
            content = currentWidget._originalContent ?? getWidgetContent(widget, dependencyValues)
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
    prevDependencyValuesRef.current = dependencyValues
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widgets, editMode, AnimatedWidgetWrapper, resolvedDepsMap, dependencyValues])

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
