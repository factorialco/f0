import { useControllableState } from "@radix-ui/react-use-controllable-state"
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
  NestedExpansionPolicy,
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
  registerNestedRow: (
    rowId: string,
    item: R,
    depth: number,
    itemKey?: string
  ) => () => void
  expandAnimation: NestedExpandAnimation
}

const NestedDataContext = createContext<
  NestedDataContextValue<RecordType> | undefined
>(undefined)

const resolveExpansion = <R extends RecordType>(
  state: NestedExpansionState,
  policy: NestedExpansionPolicy<R> | null,
  rowId: string,
  context: NestedExpansionContext<R>
): ResolvedRowExpansion => {
  const explicit = state.overrides[rowId]
  const criteriaMatch =
    policy !== null && matchesExpansionCriteria(policy.criteria, context)
  const expanded = explicit ?? criteriaMatch

  // The children load mode is declared by the policy, so its eager fallback
  // applies to any expanded row matching the criteria — including rows
  // re-expanded explicitly after a manual collapse. A user click expresses
  // expand/collapse, never a pagination preference.
  const eager =
    expanded &&
    (state.eager[rowId] ?? (criteriaMatch && policy?.children === "all"))

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
  // Matched against the row's resolved data identity (source.idProvider or
  // item.id, stringified) so a string target — e.g. an id read from a URL
  // param — matches numeric item ids too.
  return entry.itemKey !== undefined && entry.itemKey === String(target)
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

  const [expansionState, setExpansionState] = useState<NestedExpansionState>({
    overrides: {},
    eager: {},
  })

  /**
   * Active auto-expansion policy, controllable per the standard F0 pattern:
   * while `nested.expanded` is defined the derived controlled policy is the
   * single source of truth (imperative `expandAll`/`collapseAll` cannot
   * replace it — `setPolicy` is a no-op while controlled); otherwise the
   * uncontrolled value seeds from `defaultExpanded` and follows engine calls.
   */
  const controlledPolicy = useMemo<NestedExpansionPolicy<R> | undefined>(
    () =>
      nested?.expanded !== undefined
        ? {
            criteria: nested.expanded,
            children: nested.defaultExpandedChildren ?? "paginated",
          }
        : undefined,
    [nested?.expanded, nested?.defaultExpandedChildren]
  )
  const [policy = null, setPolicy] =
    useControllableState<NestedExpansionPolicy<R> | null>({
      prop: controlledPolicy,
      defaultProp:
        nested?.defaultExpanded !== undefined
          ? {
              criteria: nested.defaultExpanded,
              children: nested.defaultExpandedChildren ?? "paginated",
            }
          : null,
    })

  // Latest-value refs so the engine callbacks stay stable while reading fresh
  // state synchronously (controller calls can happen back-to-back in one tick).
  const expansionStateRef = useRef(expansionState)
  const policyRef = useRef(policy)
  policyRef.current = policy
  const controlledPolicyRef = useRef(controlledPolicy)
  controlledPolicyRef.current = controlledPolicy
  const nestedOptionsRef = useRef(nested)
  nestedOptionsRef.current = nested
  const hasActiveFiltersRef = useRef(hasActiveFilters)
  hasActiveFiltersRef.current = hasActiveFilters
  const registryRef = useRef(new Map<string, NestedRowRegistryEntry<R>>())

  /**
   * Item ids requested via `expandTo` whose rows are not rendered yet. They
   * are consumed as rows register, so a deep path expands progressively as
   * lazy loading reveals each level. Keys are normalized with String() so a
   * string path (e.g. ids from a URL) matches numeric item ids.
   */
  const pendingExpandRef = useRef(new Map<string, NestedExpandOptions>())

  const commitExpansionState = useCallback((next: NestedExpansionState) => {
    expansionStateRef.current = next
    setExpansionState(next)
  }, [])

  /**
   * Engine-side policy writes. While controlled (`nested.expanded` defined)
   * the prop is the source of truth: `setPolicy` becomes a no-op and the sync
   * ref must keep reflecting the controlled value, so it is only advanced for
   * the uncontrolled case.
   */
  const commitPolicy = useCallback(
    (next: NestedExpansionPolicy<R> | null) => {
      if (controlledPolicyRef.current === undefined) policyRef.current = next
      setPolicy(next)
    },
    [setPolicy]
  )

  const clearFetchedData = useCallback(() => {
    setFetchedData({})
    // A filters/search change can reshape the dataset entirely, so explicit
    // overrides are dropped and the declarative policy re-applies (documented
    // behavior). Pending expandTo paths are dropped too, as the new data may
    // not contain them.
    pendingExpandRef.current.clear()
    commitExpansionState({ overrides: {}, eager: {} })
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
      const eager = { ...current.eager }
      if (expanded) {
        // Drop a stale collapse marker so the row returns to the load mode
        // declared by the active policy; an explicit eager opt-in persists.
        if (eager[rowId] === false) delete eager[rowId]
      } else {
        eager[rowId] = false
      }
      commitExpansionState({
        overrides: { ...current.overrides, [rowId]: expanded },
        eager,
      })
      emitExpandedChange(rowId, expanded)
    },
    [commitExpansionState, emitExpandedChange]
  )

  /**
   * Consumes a pending `expandTo` entry for the given row, expanding it (and
   * flagging eager loading when requested). No-op when the row's identity
   * has no pending request (or the item has no identity at all).
   */
  const applyPendingExpansion = useCallback(
    (rowId: string, item: R, depth: number, itemKey?: string) => {
      if (itemKey === undefined) return
      const pendingOptions = pendingExpandRef.current.get(itemKey)
      if (pendingOptions === undefined) return
      pendingExpandRef.current.delete(itemKey)

      const current = expansionStateRef.current
      const resolved = resolveExpansion(current, policyRef.current, rowId, {
        item,
        depth,
        hasActiveFilters: hasActiveFiltersRef.current,
      })
      const eager = pendingOptions.children === "all"
      if (resolved.expanded && (!eager || resolved.eager)) return

      // Same as setRowExpanded/applyToTargets: expanding clears a stale
      // collapse marker so the policy's declared load mode applies again.
      const nextEager = { ...current.eager }
      if (eager) {
        nextEager[rowId] = true
      } else if (nextEager[rowId] === false) {
        delete nextEager[rowId]
      }
      commitExpansionState({
        overrides: { ...current.overrides, [rowId]: true },
        eager: nextEager,
      })
      if (!resolved.expanded) emitExpandedChange(rowId, true)
    },
    [commitExpansionState, emitExpandedChange]
  )

  const registerNestedRow = useCallback(
    (rowId: string, item: R, depth: number, itemKey?: string) => {
      registryRef.current.set(rowId, { item, depth, itemKey })
      applyPendingExpansion(rowId, item, depth, itemKey)
      return () => {
        registryRef.current.delete(rowId)
      }
    },
    [applyPendingExpansion]
  )

  const resolveRowExpansion = useCallback(
    (rowId: string, item: R, depth: number) =>
      resolveExpansion(expansionState, policy, rowId, {
        item,
        depth,
        hasActiveFilters,
      }),
    [expansionState, policy, hasActiveFilters]
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
        const resolved = resolveExpansion(
          current,
          policyRef.current,
          match.rowId,
          {
            item: match.item,
            depth: match.depth,
            hasActiveFilters: hasActiveFiltersRef.current,
          }
        )
        const nextExpanded = resolveNext(resolved)
        overrides[match.rowId] = nextExpanded
        if (nextExpanded) {
          if (options?.children === "all") {
            eager[match.rowId] = true
          } else if (eager[match.rowId] === false) {
            // Same as setRowExpanded: expanding clears a stale collapse
            // marker so the policy's declared load mode applies again.
            delete eager[match.rowId]
          }
        } else {
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
        // While `nested.expanded` is controlled the whole operation is a
        // no-op — not just the policy write. Clearing the overrides would
        // silently re-apply the controlled criteria to rows the user
        // explicitly toggled, contradicting the documented contract.
        if (controlledPolicyRef.current !== undefined) return
        pendingExpandRef.current.clear()
        commitPolicy({
          criteria: buildExpandAllCriteria(options),
          children: options?.children ?? "paginated",
        })
        commitExpansionState({ overrides: {}, eager: {} })
      },
      collapseAll: () => {
        // Full no-op while controlled, same as expandAll (see above).
        if (controlledPolicyRef.current !== undefined) return
        pendingExpandRef.current.clear()
        commitPolicy(null)
        commitExpansionState({ overrides: {}, eager: {} })
      },
      expandTo: (path, options) => {
        if (path.length === 0) return
        const normalizedOptions = options ?? {}
        path.forEach((id) =>
          pendingExpandRef.current.set(String(id), normalizedOptions)
        )
        // Apply immediately to the rows already rendered; the rest of the
        // path is consumed as lazy loading registers each revealed level.
        registryRef.current.forEach((entry, rowId) =>
          applyPendingExpansion(rowId, entry.item, entry.depth, entry.itemKey)
        )
      },
      isExpanded: (target) => {
        const [first] = resolveTargets(target)
        if (!first) return false
        return resolveExpansion(
          expansionStateRef.current,
          policyRef.current,
          first.rowId,
          {
            item: first.item,
            depth: first.depth,
            hasActiveFilters: hasActiveFiltersRef.current,
          }
        ).expanded
      },
      getExpandedItems: () => {
        const items: R[] = []
        registryRef.current.forEach((entry, rowId) => {
          const { expanded } = resolveExpansion(
            expansionStateRef.current,
            policyRef.current,
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
  }, [
    applyPendingExpansion,
    commitExpansionState,
    commitPolicy,
    emitExpandedChange,
  ])

  /**
   * Controlled expansion (`nested.expanded`): the policy itself is derived
   * by `useControllableState` above (no state syncing) — this effect only
   * handles the reset side effect: when the controlled criteria changes by
   * reference, explicit overrides left by user clicks or `control` calls are
   * cleared so the new criteria fully describes the expansion. See the
   * precedence note on `NestedTableOptions.expanded`.
   */
  const controlledExpanded = nested?.expanded
  const controlledPredicateChangesRef = useRef(0)
  useEffect(() => {
    if (controlledExpanded === undefined) return
    // Dev-only footgun detector: an inline (non-memoized) predicate gets a
    // new identity on every parent render, and each identity change clears
    // the user's manual toggles below. Warn once after a few changes —
    // legitimate controlled updates rarely replace a predicate repeatedly.
    if (
      process.env.NODE_ENV !== "production" &&
      typeof controlledExpanded === "function" &&
      ++controlledPredicateChangesRef.current === 3
    ) {
      console.warn(
        "OneDataCollection: `nested.expanded` received a new predicate identity on several renders. Every change clears the user's manual expand/collapse overrides — pass a memoized predicate (useCallback/useMemo) or a primitive criteria."
      )
    }
    pendingExpandRef.current.clear()
    commitExpansionState({ overrides: {}, eager: {} })
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

  // Memoized so parent re-renders with unchanged expansion state don't force
  // every consuming row to re-render: all callbacks are stable useCallbacks,
  // so the identity only changes on real state updates.
  const expandAnimation = nested?.expandAnimation ?? "none"
  const contextValue = useMemo(
    () =>
      ({
        fetchedData,
        updateFetchedData,
        clearFetchedData,
        setRowExpanded,
        resolveRowExpansion,
        registerNestedRow,
        expandAnimation,
      }) as NestedDataContextValue<RecordType>,
    [
      fetchedData,
      updateFetchedData,
      clearFetchedData,
      setRowExpanded,
      resolveRowExpansion,
      registerNestedRow,
      expandAnimation,
    ]
  )

  return (
    <NestedDataContext.Provider value={contextValue}>
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
