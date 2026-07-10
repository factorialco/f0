import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { RecordType } from "@/hooks/datasource"
import { ChildrenResponse } from "@/hooks/datasource/types/nested.typings"

import {
  NestedExpansionEngine,
  NestedExpansionState,
  NestedRowRegistryEntry,
  NestedTableControllerInternal,
} from "../nested/internal-types"
import {
  matchesExpansionCriteria,
  NestedExpandAllOptions,
  NestedExpandAnimation,
  NestedExpandOptions,
  NestedExpansionContext,
  NestedExpansionCriteria,
  NestedRowTarget,
  NestedTableOptions,
} from "../nested/types"

/** Result of resolving a row's expansion against overrides + active policy. */
type ResolvedRowExpansion = {
  expanded: boolean
  /** Whether the row's children must be loaded eagerly (no "show more"). */
  eager: boolean
}

interface NestedDataContextValue<R extends RecordType> {
  fetchedData: Record<string, ChildrenResponse<R>>
  updateFetchedData: (rowId: string, data: ChildrenResponse<R>) => void
  clearFetchedData: () => void
  /** Records an explicit expansion override for a row (user click or controller call). */
  setRowExpanded: (rowId: string, expanded: boolean) => void
  /** Resolves a row's expansion: explicit override → active policy → closed. */
  resolveRowExpansion: (
    rowId: string,
    item: R,
    depth: number
  ) => ResolvedRowExpansion
  /** Registers a rendered expandable row so imperative operations can target it. Returns an unregister cleanup. */
  registerNestedRow: (rowId: string, item: R, depth: number) => () => void
  expandAnimation: NestedExpandAnimation
}

const NestedDataContext = createContext<
  NestedDataContextValue<RecordType> | undefined
>(undefined)

const resolveExpansion = <R extends RecordType>(
  state: NestedExpansionState<R>,
  rowId: string,
  context: NestedExpansionContext<R>
): ResolvedRowExpansion => {
  const explicit = state.overrides[rowId]
  const policyMatch =
    explicit === undefined && state.policy !== null
      ? matchesExpansionCriteria(state.policy.criteria, context)
      : false
  const expanded = explicit ?? policyMatch

  const eager =
    expanded &&
    (state.eager[rowId] ?? (policyMatch && state.policy?.children === "all"))

  return { expanded, eager }
}

const matchesTarget = <R extends RecordType>(
  target: NestedRowTarget<R>,
  entry: NestedRowRegistryEntry<R>,
  hasActiveFilters: boolean
): boolean => {
  if (typeof target === "function") {
    return target({ item: entry.item, depth: entry.depth, hasActiveFilters })
  }
  return "id" in entry.item && entry.item.id === target
}

const buildExpandAllCriteria = <R extends RecordType>(
  options?: NestedExpandAllOptions<R>
): NestedExpansionCriteria<R> => {
  const { depth, where } = options ?? {}
  if (depth === undefined && !where) return true
  return (context) =>
    (depth === undefined || context.depth < depth) && (where?.(context) ?? true)
}

export const NestedDataProvider = <R extends RecordType>({
  children,
  nested,
  hasActiveFilters = false,
}: {
  children: ReactNode
  nested?: NestedTableOptions<R>
  /** Whether the collection has an active search term or any applied filter. */
  hasActiveFilters?: boolean
}) => {
  const [fetchedData, setFetchedData] = useState<
    Record<string, ChildrenResponse<R>>
  >({})

  const updateFetchedData = useCallback(
    (rowId: string, data: ChildrenResponse<R>) => {
      setFetchedData((prev) => ({
        ...prev,
        [rowId]: data,
      }))
    },
    []
  )

  const [expansionState, setExpansionState] = useState<NestedExpansionState<R>>(
    () => ({
      overrides: {},
      eager: {},
      policy:
        nested?.defaultExpanded !== undefined
          ? {
              criteria: nested.defaultExpanded,
              children: nested.defaultExpandedChildren ?? "paginated",
            }
          : null,
    })
  )

  // Latest-value refs so the engine callbacks stay stable while reading fresh
  // state synchronously (controller calls can happen back-to-back in one tick).
  const expansionStateRef = useRef(expansionState)
  const nestedOptionsRef = useRef(nested)
  nestedOptionsRef.current = nested
  const hasActiveFiltersRef = useRef(hasActiveFilters)
  hasActiveFiltersRef.current = hasActiveFilters
  const registryRef = useRef(new Map<string, NestedRowRegistryEntry<R>>())

  /**
   * Item ids requested via `expandTo` whose rows are not rendered yet. They
   * are consumed as rows register, so a deep path expands progressively as
   * lazy loading reveals each level.
   */
  const pendingExpandRef = useRef(
    new Map<string | number, NestedExpandOptions>()
  )

  const commitExpansionState = useCallback((next: NestedExpansionState<R>) => {
    expansionStateRef.current = next
    setExpansionState(next)
  }, [])

  const clearFetchedData = useCallback(() => {
    setFetchedData({})
    // Explicit overrides are positional (depth-id-index) so they cannot be
    // trusted after a refetch; the declarative policy still applies. Pending
    // expandTo paths are dropped too, as the new data may not contain them.
    pendingExpandRef.current.clear()
    commitExpansionState({
      ...expansionStateRef.current,
      overrides: {},
      eager: {},
    })
  }, [commitExpansionState])

  const emitExpandedChange = useCallback((rowId: string, expanded: boolean) => {
    const entry = registryRef.current.get(rowId)
    if (!entry) return
    nestedOptionsRef.current?.onExpandedChange?.({
      item: entry.item,
      depth: entry.depth,
      hasActiveFilters: hasActiveFiltersRef.current,
      expanded,
    })
  }, [])

  const setRowExpanded = useCallback(
    (rowId: string, expanded: boolean) => {
      const current = expansionStateRef.current
      if (current.overrides[rowId] === expanded) return
      commitExpansionState({
        ...current,
        overrides: { ...current.overrides, [rowId]: expanded },
        eager: expanded ? current.eager : { ...current.eager, [rowId]: false },
      })
      emitExpandedChange(rowId, expanded)
    },
    [commitExpansionState, emitExpandedChange]
  )

  /**
   * Consumes a pending `expandTo` entry for the given row, expanding it (and
   * flagging eager loading when requested). No-op when the row's item id has
   * no pending request.
   */
  const applyPendingExpansion = useCallback(
    (rowId: string, item: R, depth: number) => {
      if (!("id" in item)) return
      const itemId = item.id as string | number
      const pendingOptions = pendingExpandRef.current.get(itemId)
      if (pendingOptions === undefined) return
      pendingExpandRef.current.delete(itemId)

      const current = expansionStateRef.current
      const resolved = resolveExpansion(current, rowId, {
        item,
        depth,
        hasActiveFilters: hasActiveFiltersRef.current,
      })
      const eager = pendingOptions.children === "all"
      if (resolved.expanded && (!eager || resolved.eager)) return

      commitExpansionState({
        ...current,
        overrides: { ...current.overrides, [rowId]: true },
        eager: eager ? { ...current.eager, [rowId]: true } : current.eager,
      })
      if (!resolved.expanded) emitExpandedChange(rowId, true)
    },
    [commitExpansionState, emitExpandedChange]
  )

  const registerNestedRow = useCallback(
    (rowId: string, item: R, depth: number) => {
      registryRef.current.set(rowId, { item, depth })
      applyPendingExpansion(rowId, item, depth)
      return () => {
        registryRef.current.delete(rowId)
      }
    },
    [applyPendingExpansion]
  )

  const resolveRowExpansion = useCallback(
    (rowId: string, item: R, depth: number) =>
      resolveExpansion(expansionState, rowId, {
        item,
        depth,
        hasActiveFilters,
      }),
    [expansionState, hasActiveFilters]
  )

  const engine = useMemo<NestedExpansionEngine<R>>(() => {
    const resolveTargets = (target: NestedRowTarget<R>) => {
      const matches: Array<{ rowId: string } & NestedRowRegistryEntry<R>> = []
      registryRef.current.forEach((entry, rowId) => {
        if (matchesTarget(target, entry, hasActiveFiltersRef.current)) {
          matches.push({ rowId, ...entry })
        }
      })
      return matches
    }

    const applyToTargets = (
      target: NestedRowTarget<R>,
      resolveNext: (current: ResolvedRowExpansion) => boolean,
      options?: NestedExpandOptions
    ) => {
      const matches = resolveTargets(target)
      if (matches.length === 0) return

      const current = expansionStateRef.current
      const overrides = { ...current.overrides }
      const eager = { ...current.eager }
      const changes: Array<{ rowId: string; expanded: boolean }> = []

      for (const match of matches) {
        const resolved = resolveExpansion(current, match.rowId, {
          item: match.item,
          depth: match.depth,
          hasActiveFilters: hasActiveFiltersRef.current,
        })
        const nextExpanded = resolveNext(resolved)
        overrides[match.rowId] = nextExpanded
        if (nextExpanded && options?.children === "all") {
          eager[match.rowId] = true
        } else if (!nextExpanded) {
          eager[match.rowId] = false
        }
        if (resolved.expanded !== nextExpanded) {
          changes.push({ rowId: match.rowId, expanded: nextExpanded })
        }
      }

      commitExpansionState({ ...current, overrides, eager })
      changes.forEach(({ rowId, expanded }) =>
        emitExpandedChange(rowId, expanded)
      )
    }

    return {
      expand: (target, options) => applyToTargets(target, () => true, options),
      collapse: (target) => applyToTargets(target, () => false),
      toggle: (target, options) =>
        applyToTargets(target, (current) => !current.expanded, options),
      expandAll: (options) => {
        pendingExpandRef.current.clear()
        commitExpansionState({
          overrides: {},
          eager: {},
          policy: {
            criteria: buildExpandAllCriteria(options),
            children: options?.children ?? "paginated",
          },
        })
      },
      collapseAll: () => {
        pendingExpandRef.current.clear()
        commitExpansionState({ overrides: {}, eager: {}, policy: null })
      },
      expandTo: (path, options) => {
        if (path.length === 0) return
        const normalizedOptions = options ?? {}
        path.forEach((id) =>
          pendingExpandRef.current.set(id, normalizedOptions)
        )
        // Apply immediately to the rows already rendered; the rest of the
        // path is consumed as lazy loading registers each revealed level.
        registryRef.current.forEach((entry, rowId) =>
          applyPendingExpansion(rowId, entry.item, entry.depth)
        )
      },
      isExpanded: (target) => {
        const [first] = resolveTargets(target)
        if (!first) return false
        return resolveExpansion(expansionStateRef.current, first.rowId, {
          item: first.item,
          depth: first.depth,
          hasActiveFilters: hasActiveFiltersRef.current,
        }).expanded
      },
      getExpandedItems: () => {
        const items: R[] = []
        registryRef.current.forEach((entry, rowId) => {
          const { expanded } = resolveExpansion(
            expansionStateRef.current,
            rowId,
            {
              item: entry.item,
              depth: entry.depth,
              hasActiveFilters: hasActiveFiltersRef.current,
            }
          )
          if (expanded) items.push(entry.item)
        })
        return items
      },
    }
  }, [applyPendingExpansion, commitExpansionState, emitExpandedChange])

  /**
   * Controlled expansion (`nested.expanded`): reactively re-applies the
   * criteria every time its reference changes, taking over from whatever
   * explicit overrides a user click or a `control` call may have set in the
   * meantime — see the precedence note on `NestedTableOptions.expanded`.
   * Unlike `defaultExpanded` (read once, at mount, via the initial state
   * above), this runs on every `expanded` reference change, including the
   * first one, so it also covers the initial render when `expanded` is
   * defined from the start.
   */
  const controlledExpanded = nested?.expanded
  useEffect(() => {
    if (controlledExpanded === undefined) return
    pendingExpandRef.current.clear()
    commitExpansionState({
      overrides: {},
      eager: {},
      policy: {
        criteria: controlledExpanded,
        children:
          nestedOptionsRef.current?.defaultExpandedChildren ?? "paginated",
      },
    })
    // Controlled re-application is not an explicit expansion change (same as
    // defaultExpanded/expandAll), so onExpandedChange is intentionally not
    // fired here.
  }, [controlledExpanded, commitExpansionState])

  const control = nested?.control
  useEffect(() => {
    const internalControl = control as
      | NestedTableControllerInternal<R>
      | undefined
    if (!internalControl?.__bindEngine) return
    return internalControl.__bindEngine(engine)
  }, [control, engine])

  return (
    <NestedDataContext.Provider
      value={
        {
          fetchedData,
          updateFetchedData,
          clearFetchedData,
          setRowExpanded,
          resolveRowExpansion,
          registerNestedRow,
          expandAnimation: nested?.expandAnimation ?? "none",
        } as NestedDataContextValue<RecordType>
      }
    >
      {children}
    </NestedDataContext.Provider>
  )
}

export const useNestedDataContext = <R extends RecordType>() => {
  const context = useContext(NestedDataContext)
  if (!context) {
    throw new Error(
      "useNestedDataContext must be used within NestedDataProvider"
    )
  }
  return context as NestedDataContextValue<R>
}
