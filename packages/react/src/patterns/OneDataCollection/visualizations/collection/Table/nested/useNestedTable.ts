import { useState } from "react"

import { RecordType } from "@/hooks/datasource"

import {
  NestedExpansionEngine,
  NestedTableControllerInternal,
} from "./internal-types"
import {
  NestedExpandAllOptions,
  NestedExpandOptions,
  NestedRowTarget,
  NestedTableController,
} from "./types"

const createNestedTableController = <
  R extends RecordType,
>(): NestedTableControllerInternal<R> => {
  let engine: NestedExpansionEngine<R> | null = null
  const pendingOperations: Array<(engine: NestedExpansionEngine<R>) => void> =
    []

  // Mutating operations queue until the table mounts so calls made while the
  // table is still loading (or before it renders) are not lost.
  const run = (operation: (engine: NestedExpansionEngine<R>) => void) => {
    if (engine) {
      operation(engine)
    } else {
      pendingOperations.push(operation)
    }
  }

  return {
    expand: (target: NestedRowTarget<R>, options?: NestedExpandOptions) =>
      run((e) => e.expand(target, options)),
    collapse: (target: NestedRowTarget<R>) => run((e) => e.collapse(target)),
    toggle: (target: NestedRowTarget<R>, options?: NestedExpandOptions) =>
      run((e) => e.toggle(target, options)),
    expandAll: (options?: NestedExpandAllOptions<R>) =>
      run((e) => e.expandAll(options)),
    collapseAll: () => run((e) => e.collapseAll()),
    expandTo: (path: Array<string | number>, options?: NestedExpandOptions) =>
      run((e) => e.expandTo(path, options)),
    isExpanded: (target: NestedRowTarget<R>) =>
      engine?.isExpanded(target) ?? false,
    getExpandedItems: () => engine?.getExpandedItems() ?? [],
    __bindEngine: (nextEngine: NestedExpansionEngine<R>) => {
      engine = nextEngine
      pendingOperations.splice(0).forEach((operation) => operation(nextEngine))
      return () => {
        if (engine === nextEngine) engine = null
      }
    },
  }
}

/**
 * Creates a stable controller to programmatically expand/collapse the nested
 * rows of a table visualization. Pass it through the visualization options:
 *
 * ```tsx
 * const nestedTable = useNestedTable<User>()
 *
 * <OneDataCollection
 *   source={source}
 *   visualizations={[
 *     { type: "table", options: { columns, nested: { control: nestedTable } } },
 *   ]}
 * />
 *
 * nestedTable.expandAll({ depth: 2 })
 * nestedTable.expand("user-1", { children: "all" })
 * nestedTable.collapse((ctx) => ctx.depth > 0)
 * ```
 *
 * Operations invoked before the table mounts are queued and applied on
 * mount. Note that targeted operations (`expand`, `collapse`, `toggle`) only
 * match rows rendered at the time they run — to reach a node hidden under
 * collapsed ancestors use `expandTo` with its id path, or `expandAll` with
 * `depth`/`where` for criteria that must apply to rows not yet loaded.
 */
export const useNestedTable = <
  R extends RecordType,
>(): NestedTableController<R> => {
  const [controller] = useState(() => createNestedTableController<R>())
  return controller
}
