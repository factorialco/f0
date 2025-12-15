import type { GridStackWidget } from "gridstack"
import type { GridStackReactWidget } from "../F0GridStack"

/**
 * Converts a GridStackReactWidget to a GridStackWidget suitable for gridstack library.
 * This function converts React content elements to functions to prevent cloneDeep
 * from encountering circular references in React elements.
 *
 * @param widget - The React widget with potential React element content
 * @returns A widget with content converted to a function (returns empty div)
 */
export function convertWidgetForGridStack(widget: GridStackReactWidget): GridStackWidget {
  const { content, ...rest } = widget

  // If content is a React element, convert it to a function
  // Gridstack will call this function, but we render the actual content via portals
  // So we return an empty div as a placeholder
  if (content !== undefined) {
    return {
      ...rest,
      //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
      _originalContent: null,
      content: () => {
        const div = document.createElement("div")
        return div
      },
    } as unknown as GridStackWidget
  }

  return rest as GridStackWidget
}

/**
 * Recursively converts widgets and their sub-grid children for gridstack.
 * This handles nested grids with React content.
 *
 * @param widget - The widget to convert (may contain subGridOpts with children)
 * @returns A widget with all React content converted to functions
 */
export function convertWidgetRecursive(widget: GridStackReactWidget): GridStackWidget {
  const converted = convertWidgetForGridStack(widget)

  // Handle sub-grids recursively
  if (widget.subGridOpts?.children) {
    converted.subGridOpts = {
      ...widget.subGridOpts,
      children: widget.subGridOpts.children.map((child) =>
        convertWidgetRecursive(child as GridStackReactWidget)
      ),
    }
  }

  return converted
}
