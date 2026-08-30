import { GridStackWidget } from 'gridstack';
import { GridStackReactWidget } from '../F0GridStack';
/**
 * Converts a GridStackReactWidget to a GridStackWidget suitable for gridstack library.
 * This function converts React content elements to functions to prevent cloneDeep
 * from encountering circular references in React elements.
 *
 * @param widget - The React widget with potential React element content
 * @returns A widget with content converted to a function (returns empty div)
 */
export declare function convertWidgetForGridStack(widget: GridStackReactWidget): GridStackWidget;
/**
 * Recursively converts widgets and their sub-grid children for gridstack.
 * This handles nested grids with React content.
 *
 * @param widget - The widget to convert (may contain subGridOpts with children)
 * @returns A widget with all React content converted to functions
 */
export declare function convertWidgetRecursive(widget: GridStackReactWidget): GridStackWidget;
