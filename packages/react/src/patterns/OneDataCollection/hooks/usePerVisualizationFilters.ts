import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react"

import {
  FiltersDefinition,
  FiltersState,
  PresetsDefinition,
} from "@/components/OneFilterPicker/types"

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

const hasAnyVisualizationFilters = <Filters extends FiltersDefinition>(
  visualizations: ReadonlyArray<VisualizationWithFilterOverrides<Filters>>
): boolean => {
  return visualizations.some(
    (viz) => viz.filters !== undefined || viz.presets !== undefined
  )
}

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
 * Manages independent filter state per visualization.
 * Pass-through when no visualization declares overrides. Otherwise each
 * view gets its own currentFilters, and switching saves/restores state.
 */
export const usePerVisualizationFilters = <Filters extends FiltersDefinition>({
  sourceFilters,
  sourcePresets,
  sourceCurrentFilters,
  sourceSetCurrentFilters,
  visualizations,
  currentVisualization,
}: UsePerVisualizationFiltersArgs<Filters>): UsePerVisualizationFiltersResult<Filters> => {
  const hasOverrides = useMemo(
    () => hasAnyVisualizationFilters(visualizations),
    [visualizations]
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

  // Synchronous transition detection
  if (hasOverrides && appliedInitRef.current) {
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
    if (!hasOverrides) return
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
  }, [hasOverrides, currentVisualization, visualizationFiltersMap])

  // Save previous viz's filters, restore new viz's filters on switch.
  // Layout effect ensures filters apply before paint (no stale frame for children).
  useLayoutEffect(() => {
    if (!hasOverrides) return

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
  }, [currentVisualization, hasOverrides])

  const effectiveFilters = useMemo(() => {
    if (!hasOverrides) return sourceFilters

    const viz = visualizations[currentVisualization]
    if (viz?.filters) {
      return viz.filters as Filters
    }

    return sourceFilters
  }, [hasOverrides, sourceFilters, visualizations, currentVisualization])

  // Viz presets replace source presets entirely.
  // If only filters overridden, source presets filtered to matching keys.
  const effectivePresets = useMemo(() => {
    if (!hasOverrides) return sourcePresets

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
    hasOverrides,
    sourcePresets,
    visualizations,
    currentVisualization,
    effectiveFilters,
  ])

  const allVisualizationFilters = useMemo(() => {
    if (!hasOverrides) return {}

    const currentKey = getVisualizationKey(currentVisualization)
    return {
      ...visualizationFiltersMap,
      [currentKey]: sourceCurrentFilters,
    }
  }, [
    hasOverrides,
    visualizationFiltersMap,
    currentVisualization,
    sourceCurrentFilters,
  ])

  // Restore from storage; no-op after first call
  const setAllVisualizationFilters = useCallback(
    (states: Record<string, FiltersState<Filters>>) => {
      if (initializedRef.current) return
      initializedRef.current = true

      setVisualizationFiltersMap(states)
    },
    []
  )

  if (!hasOverrides) {
    return {
      effectiveFilters: sourceFilters,
      effectivePresets: sourcePresets,
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
    setCurrentFilters: sourceSetCurrentFilters,
    allVisualizationFilters,
    setAllVisualizationFilters,
    hasPerVisualizationFilters: true,
  }
}
