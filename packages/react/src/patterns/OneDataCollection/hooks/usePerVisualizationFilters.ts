import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"

import {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/patterns/OneFilterPicker/types"

interface VisualizationWithFilterOverrides<Filters extends FiltersDefinition> {
  filters?: Partial<Filters>
  presets?: PresetsDefinition<Filters>
  [key: string]: unknown
}

type UsePerVisualizationFiltersArgs<Filters extends FiltersDefinition> = {
  sourceFilters: Filters | undefined
  sourcePresets: PresetsDefinition<Filters> | undefined
  sourceCurrentFilters: FiltersState<Filters>
  sourceSetCurrentFilters: React.Dispatch<
    React.SetStateAction<FiltersState<Filters>>
  >
  visualizations: ReadonlyArray<VisualizationWithFilterOverrides<Filters>>
  currentVisualization: number
  /**
   * Identity of the underlying storage scope (typically the collection `id`).
   * Used to reset hydration locks so a re-mount-free collection swap reapplies
   * the new scope's persisted filters instead of being stuck on the first one.
   */
  storageKey?: string
}

type UsePerVisualizationFiltersResult<Filters extends FiltersDefinition> = {
  effectiveFilters: Filters | undefined
  effectivePresets: PresetsDefinition<Filters> | undefined
  currentFilters: FiltersState<Filters>
  setCurrentFilters: React.Dispatch<React.SetStateAction<FiltersState<Filters>>>
  allVisualizationFilters: Record<string, FiltersState<Filters>>
  setAllVisualizationFilters: (
    states: Record<string, FiltersState<Filters>>
  ) => void
  hasPerVisualizationFilters: boolean
}

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v)

// Index-based key (visualization type can repeat)
const getVisualizationKey = (index: number): string => String(index)

// Default filters for a never-visited viz: own preset > source preset > {}
const getDefaultFiltersForVisualization = <Filters extends FiltersDefinition>(
  vizIndex: number,
  visualizations: ReadonlyArray<VisualizationWithFilterOverrides<Filters>>,
  sourcePresets: PresetsDefinition<Filters> | undefined
): FiltersState<Filters> => {
  const viz = visualizations[vizIndex]

  // Viz presets (even empty) replace source presets — don't fall back
  if (viz?.presets !== undefined) {
    const vizPreset = viz.presets[0]
    return vizPreset
      ? (vizPreset.filter as FiltersState<Filters>)
      : ({} as FiltersState<Filters>)
  }

  const sourcePreset = sourcePresets?.[0]
  if (sourcePreset) {
    return sourcePreset.filter as FiltersState<Filters>
  }

  return {} as FiltersState<Filters>
}

/**
 * Filter keys a viz may own; falls back to the source schema. Returns null
 * when no schema is known (caller should preserve the entry as-is).
 */
const getOwnedFilterKeys = <Filters extends FiltersDefinition>(
  vizIndex: number,
  visualizations: ReadonlyArray<VisualizationWithFilterOverrides<Filters>>,
  sourceFilters: Filters | undefined
): Set<string> | null => {
  const viz = visualizations[vizIndex]
  if (viz?.filters) return new Set(Object.keys(viz.filters))
  if (sourceFilters) return new Set(Object.keys(sourceFilters))
  return null
}

/** Drop keys a viz does not own from a stored entry. */
const sanitizeStoredEntryForViz = <Filters extends FiltersDefinition>(
  vizIndex: number,
  entry: FiltersState<Filters>,
  visualizations: ReadonlyArray<VisualizationWithFilterOverrides<Filters>>,
  sourceFilters: Filters | undefined
): FiltersState<Filters> => {
  if (!isPlainObject(entry)) return {} as FiltersState<Filters>
  const allowed = getOwnedFilterKeys(vizIndex, visualizations, sourceFilters)
  if (!allowed) return entry
  const sanitized: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(entry as Record<string, unknown>)) {
    if (allowed.has(key)) sanitized[key] = value
  }
  return sanitized as FiltersState<Filters>
}

/**
 * Manages independent filter state per visualization. Per-viz scoping is on
 * whenever `visualizations.length > 1`: each viz gets its own currentFilters
 * slot in storage, and switching viz saves the previous viz's filters and
 * restores the new viz's.
 */
export const usePerVisualizationFilters = <Filters extends FiltersDefinition>({
  sourceFilters,
  sourcePresets,
  sourceCurrentFilters,
  sourceSetCurrentFilters,
  visualizations,
  currentVisualization,
  storageKey,
}: UsePerVisualizationFiltersArgs<Filters>): UsePerVisualizationFiltersResult<Filters> => {
  const hasPerVisualization = visualizations.length > 1

  const hasAnyOverrides = visualizations.some(
    (viz) => viz.filters !== undefined || viz.presets !== undefined
  )

  const [visualizationFiltersMap, setVisualizationFiltersMap] = useState<
    Record<string, FiltersState<Filters>>
  >({})

  const prevVisualizationRef = useRef<number>(currentVisualization)

  // True once storage has populated the filter map
  const initializedRef = useRef(false)

  // True once stored filters applied to source (separate cycle from map population)
  const appliedInitRef = useRef(false)

  // Synchronously-computed filters for current viz, avoids stale frame during transitions
  const pendingFiltersRef = useRef<FiltersState<Filters> | null>(null)

  const prevSourceFiltersRef =
    useRef<FiltersState<Filters>>(sourceCurrentFilters)

  // Always-current refs for use inside callbacks with stable identity
  // (e.g. setAllVisualizationFilters runs after storage hydration on every
  // scope reset and must see the latest schema, not the captured one).
  const visualizationsRef = useRef(visualizations)
  visualizationsRef.current = visualizations

  const sourceFiltersRef = useRef(sourceFilters)
  sourceFiltersRef.current = sourceFilters

  // Storage scope reset: when the underlying storage key (e.g. collection id)
  // changes, useDataCollectionStorage will rehydrate with a different blob.
  // Reset hydration locks and clear the persisted map so setAllVisualizationFilters
  // accepts the next payload instead of being stuck on the previous scope.
  useLayoutEffect(() => {
    initializedRef.current = false
    appliedInitRef.current = false
    pendingFiltersRef.current = null
    prevVisualizationRef.current = currentVisualization
    prevSourceFiltersRef.current = sourceCurrentFilters
    setVisualizationFiltersMap((prev) =>
      Object.keys(prev).length > 0 ? {} : prev
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional: only react to storage scope changes
  }, [storageKey])

  // Synchronous transition detection
  if (hasPerVisualization && appliedInitRef.current) {
    const prevKey = getVisualizationKey(prevVisualizationRef.current)
    const nextKey = getVisualizationKey(currentVisualization)

    if (prevKey !== nextKey) {
      // Viz switching — compute target filters synchronously
      const nextState = visualizationFiltersMap[nextKey]
      pendingFiltersRef.current =
        nextState ??
        getDefaultFiltersForVisualization(
          currentVisualization,
          visualizations,
          sourcePresets
        )
    } else if (sourceCurrentFilters !== prevSourceFiltersRef.current) {
      // Source filters updated — clear pending override
      pendingFiltersRef.current = null
    }
    // Same viz, same source — keep pending (internal rerender before parent update)
  } else {
    pendingFiltersRef.current = null
  }

  prevSourceFiltersRef.current = sourceCurrentFilters

  // One-shot: apply stored filters for the active viz after storage restoration.
  // Uses layout effect to avoid stale closure over currentVisualization.
  useLayoutEffect(() => {
    if (!hasPerVisualization) return
    if (!initializedRef.current) return
    if (appliedInitRef.current) return

    const currentKey = getVisualizationKey(currentVisualization)
    const currentState = visualizationFiltersMap[currentKey]
    sourceSetCurrentFilters(
      currentState ??
        getDefaultFiltersForVisualization(
          currentVisualization,
          visualizations,
          sourcePresets
        )
    )
    appliedInitRef.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps -- One-shot initialization after storage restore
  }, [hasPerVisualization, currentVisualization, visualizationFiltersMap])

  // Save previous viz's filters, restore new viz's filters on switch.
  // Layout effect ensures filters apply before paint (no stale frame for children).
  useLayoutEffect(() => {
    if (!hasPerVisualization) return

    if (initializedRef.current && !appliedInitRef.current) {
      // Skip storage-driven viz changes (init effect hasn't run yet)
      prevVisualizationRef.current = currentVisualization
      return
    }

    const prevKey = getVisualizationKey(prevVisualizationRef.current)
    const nextKey = getVisualizationKey(currentVisualization)

    if (prevKey !== nextKey) {
      setVisualizationFiltersMap((prev) => ({
        ...prev,
        [prevKey]: sourceCurrentFilters,
      }))

      // Restore or default-init the new viz's filters
      const nextState = visualizationFiltersMap[nextKey]
      sourceSetCurrentFilters(
        nextState ??
          getDefaultFiltersForVisualization(
            currentVisualization,
            visualizations,
            sourcePresets
          )
      )
    }

    prevVisualizationRef.current = currentVisualization
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Only react to visualization changes
  }, [currentVisualization, hasPerVisualization])

  const effectiveFilters = useMemo(() => {
    if (!hasAnyOverrides) return sourceFilters

    const viz = visualizations[currentVisualization]
    if (viz?.filters) {
      return viz.filters as Filters
    }

    return sourceFilters
  }, [hasAnyOverrides, sourceFilters, visualizations, currentVisualization])

  // Viz presets replace source presets entirely.
  // If only filters overridden, source presets filtered to matching keys.
  const effectivePresets = useMemo(() => {
    if (!hasAnyOverrides) return sourcePresets

    const viz = visualizations[currentVisualization]
    const vizPresets = viz?.presets

    if (vizPresets) {
      return vizPresets
    }

    const effectiveFilterKeys = effectiveFilters
      ? new Set(Object.keys(effectiveFilters))
      : undefined

    if (effectiveFilterKeys && sourcePresets) {
      const filtered = sourcePresets.filter((preset) => {
        const presetFilterKeys = Object.keys(preset.filter)
        return presetFilterKeys.every((key) => effectiveFilterKeys.has(key))
      })
      return filtered.length > 0 ? filtered : undefined
    }

    return sourcePresets
  }, [
    hasPerVisualization,
    sourcePresets,
    visualizations,
    currentVisualization,
    effectiveFilters,
    hasAnyOverrides,
  ])

  const allVisualizationFilters = useMemo(() => {
    if (!hasPerVisualization) return {}

    const currentKey = getVisualizationKey(currentVisualization)
    if (currentKey in visualizationFiltersMap) return visualizationFiltersMap

    // Don't auto-seed mid-transition: sourceCurrentFilters is still the previous viz's value.
    if (prevVisualizationRef.current !== currentVisualization) {
      return visualizationFiltersMap
    }

    return { ...visualizationFiltersMap, [currentKey]: sourceCurrentFilters }
  }, [
    hasPerVisualization,
    visualizationFiltersMap,
    currentVisualization,
    sourceCurrentFilters,
  ])

  // Mirror "bypass" source-filter changes into the persisted map for the
  // active viz. Without this, updates that arrive through paths other than
  // the wrapped `setCurrentFilters` (e.g. controlled `currentFilters` prop
  // sync inside useDataSource, direct external `dataSource.setCurrentFilters`
  // calls) would never reach `visualizationFiltersMap` once the slot was
  // populated, leaving storage and `onStateChange.visualizationFilters`
  // stale for the active viz.
  //
  // Detection uses a deep-compare baseline tracked per-visualization. On a
  // viz switch we re-establish the baseline without mirroring (the
  // transition layout effect is responsible for that frame). On subsequent
  // renders within the same viz, a deep change in `sourceCurrentFilters`
  // signals an external bypass write and is reflected into the map.
  const sourceTrackerRef = useRef<{ viz: number; json: string }>({
    viz: currentVisualization,
    json: JSON.stringify(sourceCurrentFilters),
  })

  useLayoutEffect(() => {
    if (!hasPerVisualization) return
    if (!appliedInitRef.current) return

    const tracker = sourceTrackerRef.current

    // Viz changed: re-baseline and let the transition effect own this frame.
    if (tracker.viz !== currentVisualization) {
      sourceTrackerRef.current = {
        viz: currentVisualization,
        json: JSON.stringify(sourceCurrentFilters),
      }
      return
    }

    const json = JSON.stringify(sourceCurrentFilters)
    if (json === tracker.json) return
    tracker.json = json

    const currentKey = getVisualizationKey(currentVisualization)
    setVisualizationFiltersMap((prev) => {
      const existing = prev[currentKey]
      if (existing === sourceCurrentFilters) return prev
      if (existing !== undefined && JSON.stringify(existing) === json) {
        return prev
      }
      return { ...prev, [currentKey]: sourceCurrentFilters }
    })
  }, [hasPerVisualization, currentVisualization, sourceCurrentFilters])

  // Mirror stable filter changes into the persisted map for the active viz.
  const setCurrentFilters: React.Dispatch<
    React.SetStateAction<FiltersState<Filters>>
  > = useCallback(
    (updater) => {
      if (!hasPerVisualization) {
        sourceSetCurrentFilters(updater)
        return
      }

      const currentKey = getVisualizationKey(currentVisualization)

      if (typeof updater === "function") {
        const fnUpdater = updater as (
          prev: FiltersState<Filters>
        ) => FiltersState<Filters>
        sourceSetCurrentFilters((prev) => {
          const next = fnUpdater(prev)
          setVisualizationFiltersMap((mapPrev) => {
            if (mapPrev[currentKey] === next) return mapPrev
            return { ...mapPrev, [currentKey]: next }
          })
          return next
        })
      } else {
        sourceSetCurrentFilters(updater)
        setVisualizationFiltersMap((mapPrev) => {
          if (mapPrev[currentKey] === updater) return mapPrev
          return { ...mapPrev, [currentKey]: updater }
        })
      }
    },
    [hasPerVisualization, sourceSetCurrentFilters, currentVisualization]
  )

  // Restore from storage. Runs every time storage hydrates (the storageKey
  // reset effect clears `initializedRef` when the scope changes), but ignores
  // repeated calls within the same scope.
  //
  // `visualizations` and `sourceFilters` are read through refs because the
  // callback identity is stable but it can fire mid-session after a scope
  // reset, when the captured-at-mount values would be stale.
  const setAllVisualizationFilters = useCallback(
    (states: Record<string, FiltersState<Filters>>) => {
      if (initializedRef.current) return
      initializedRef.current = true

      const currentVisualizations = visualizationsRef.current
      const currentSourceFilters = sourceFiltersRef.current

      const safeStates = isPlainObject(states as unknown)
        ? (states as unknown as Record<string, unknown>)
        : {}
      const sanitized: Record<string, FiltersState<Filters>> = {}
      for (const [key, entry] of Object.entries(safeStates)) {
        const safeEntry = isPlainObject(entry)
          ? (entry as FiltersState<Filters>)
          : ({} as FiltersState<Filters>)
        const idx = Number(key)
        if (
          Number.isInteger(idx) &&
          idx >= 0 &&
          idx < currentVisualizations.length
        ) {
          sanitized[key] = sanitizeStoredEntryForViz(
            idx,
            safeEntry,
            currentVisualizations,
            currentSourceFilters
          )
        } else {
          sanitized[key] = safeEntry
        }
      }

      setVisualizationFiltersMap(sanitized)
    },
    []
  )

  if (!hasPerVisualization) {
    return {
      effectiveFilters,
      effectivePresets,
      currentFilters: sourceCurrentFilters,
      setCurrentFilters: sourceSetCurrentFilters,
      allVisualizationFilters: {},
      setAllVisualizationFilters: () => {},
      hasPerVisualizationFilters: false,
    }
  }

  const activeCurrentFilters = pendingFiltersRef.current ?? sourceCurrentFilters

  return {
    effectiveFilters,
    effectivePresets,
    currentFilters: activeCurrentFilters,
    setCurrentFilters,
    allVisualizationFilters,
    setAllVisualizationFilters,
    hasPerVisualizationFilters: true,
  }
}
