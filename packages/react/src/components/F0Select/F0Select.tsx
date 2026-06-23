import { useDeepCompareEffect } from "@reactuses/core"
import { cva } from "cva"
import { isEqual } from "lodash"
import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react"
import { useDebounceCallback } from "usehooks-ts"

import { F0DialogContext } from "@/components/dialog-alike/F0Dialog"
import { F0Button } from "@/components/F0Button"
import { Plus } from "@/icons/app"
import {
  BaseFetchOptions,
  BaseResponse,
  FiltersDefinition,
  getDataSourcePaginationType,
  PaginatedDataAdapter,
  PromiseOrObservable,
  SelectedItemsState,
  useData,
  useDataSource,
  useGroups,
  useSelectable,
  WithGroupId,
} from "@/hooks/datasource"
import { DataTestIdWrapper } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n"
import { toArray } from "@/lib/toArray"
import { cn } from "@/lib/utils"
import { GroupHeader } from "@/ui/GroupHeader/index"
import { F0InputField } from "@/components/F0InputField"
import { InputMessages } from "@/components/F0InputField/components/InputMessages"
import { Label } from "@/components/F0InputField/components/Label"
import {
  SelectContent,
  Select as SelectPrimitive,
  SelectSeparator,
  SelectTrigger,
  VirtualItem,
} from "@/ui/Select"

import type {
  F0SelectItemObject,
  F0SelectItemProps,
  F0SelectProps,
  ResolvedRecordType,
} from "./types"

import { Arrow } from "./components/Arrow"
import { SelectAll } from "./components/SelectAll"
import { SelectBottomActions } from "./components/SelectBottomActions"
import { SelectedItems } from "./components/SelectedItems"
import { SelectionPreview } from "./components/SelectionPreview"
import { SelectItem } from "./components/SelectItem"
import { SelectTopActions } from "./components/SelectTopActions"
export * from "./types"

const defaultSearchFn = (
  option: F0SelectItemProps<string>,
  search?: string
) => {
  return (
    option.type === "separator" ||
    !search ||
    option.label.toLowerCase().includes(search.toLowerCase())
  )
}

/**
 * Returns the discriminator for an option's *typed* tag (dot/person/icon/status),
 * or undefined when the option has no tag or a plain string tag. String tags are
 * intentionally excluded: they coexist with typed tags in existing usages (e.g. a
 * `"Disabled"` string tag alongside `dot`/`person` options), so they must not trip
 * the single-tag-type enforcement below.
 */
const getTagType = <T extends string, R>(
  option: F0SelectItemProps<T, R>
): string | undefined => {
  if (
    option.type === "separator" ||
    option.tag === undefined ||
    typeof option.tag === "string"
  ) {
    return undefined
  }
  return option.tag.type
}

const asListContainerVariants = cva({
  base: "flex flex-col rounded-md border border-solid bg-f1-background max-h-full",
  variants: {
    status: {
      default: "border-f1-border-secondary",
      error: "border-f1-border-critical-bold",
      warning: "border-f1-border-warning-bold",
      info: "border-f1-border-info-bold",
    },
  },
  defaultVariants: {
    status: "default",
  },
})

const F0SelectComponent = forwardRef(function Select<
  T extends string,
  R = unknown,
>(
  {
    placeholder,
    onChange,
    withApplySelection = false,
    onChangeSelectedOption,
    value,
    options = [],
    mapOptions,
    children,
    disabled,
    open,
    hideLabel,
    onOpenChange,
    showSearchBox,
    onSearchChange,
    searchBoxPlaceholder,
    searchEmptyMessage,
    size = "sm",
    actions,
    onCreate,
    onFiltersChange,
    source,
    label,
    icon,
    labelIcon,
    clearable,
    loading,
    name,
    error,
    status,
    hint,
    required,
    multiple,
    portalContainer,
    asList = false,
    showPreview = false,
    preserveSelectionOnDatasetChange = true,
    dataTestId,
    ...props
  }: F0SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const id = useId()

  // If inside a OneDialog and no portalContainer is provided, use the dialog's container
  // only for center/fullscreen dialogs (which have focus trap).
  // For side panels (left/right), render in body to prevent clipping.
  const dialogContext = useContext(F0DialogContext)
  const shouldUseDialogContainer =
    dialogContext.portalContainer &&
    (dialogContext.position === "center" ||
      dialogContext.position === "fullscreen")

  const effectivePortalContainer =
    portalContainer !== undefined
      ? portalContainer
      : shouldUseDialogContainer
        ? dialogContext.portalContainer
        : undefined

  // Extract onSelectItems and disableSelectAll from props for multiple selection
  const onSelectItems =
    "onSelectItems" in props ? props.onSelectItems : undefined
  const disableSelectAll =
    "disableSelectAll" in props ? props.disableSelectAll : false
  type ActualRecordType = ResolvedRecordType<R>

  const [openLocal, setOpenLocal] = useState(open)
  const isApplyingRef = useRef(false)

  const defaultItems = useMemo(
    () =>
      toArray(props.defaultItem).filter(
        (item): item is F0SelectItemObject<T, ResolvedRecordType<R>> =>
          item !== undefined
      ),
    [props.defaultItem]
  )

  const defaultValues = useMemo(
    // Convert to strings for consistent handling
    () => defaultItems.map((item) => String(item.value)),
    [defaultItems]
  )

  // Always store localValue as strings for consistent comparison
  const [localValue, setLocalValue] = useState(() => {
    const initial = toArray(value) ?? defaultValues ?? []
    return initial.map(String)
  })

  useEffect(() => {
    const incomingValues = (toArray(value) ?? []).map(String)
    if (!isEqual(incomingValues, localValue ?? [])) {
      const newValue = toArray(value) ?? defaultValues ?? []
      // Ensure unique values and convert to strings
      setLocalValue(Array.from(new Set(newValue.map(String))))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const dataSource = useMemo(() => {
    if (
      source &&
      !["infinite-scroll", "no-pagination"].includes(
        getDataSourcePaginationType(source.dataAdapter)
      )
    ) {
      throw new Error(
        "Select component only supports `infinite-scroll` or `no-pagination` pagination types"
      )
    }

    return {
      ...source,
      dataAdapter: source
        ? (source.dataAdapter as PaginatedDataAdapter<
            ActualRecordType,
            FiltersDefinition
          >)
        : {
            fetchData: ({
              search,
            }: BaseFetchOptions<FiltersDefinition>): PromiseOrObservable<
              BaseResponse<ActualRecordType>
            > => {
              // Apply the search function to the options
              const searchFn =
                "searchFn" in props && props.searchFn
                  ? props.searchFn
                  : defaultSearchFn

              return {
                records: options.filter(
                  (option) => searchFn(option, search) ?? true
                ) as unknown as ActualRecordType[],
              }
            },
          },
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, source, "searchFn" in props && props.searchFn])

  const localSource = useDataSource(
    {
      ...dataSource,
      // Return string IDs for consistent comparison across the selection system
      // This ensures numeric values like 1 match with string IDs like "1"
      selectable: (item) => {
        if (!item) {
          return undefined
        }
        const mappedOption = optionMapper(item)
        return mappedOption.type !== "separator"
          ? String(mappedOption.value)
          : undefined
      },
      search: showSearchBox
        ? {
            enabled: showSearchBox,
            sync: !source,
          }
        : undefined,
    },
    [options]
  )

  /**
   * Maps an item to a SelectItemProps<T, ActualRecordType>
   */
  const optionMapper = useCallback(
    (item: ActualRecordType): F0SelectItemProps<T, ActualRecordType> => {
      if (source) {
        if (!mapOptions) {
          throw new Error("mapOptions is required when using a source")
        }
        return mapOptions(item)
      }
      // At this point, we are sure that options is an array of SelectItemProps<T, ActualRecordType>
      return item as unknown as F0SelectItemProps<T, ActualRecordType>
    },
    [mapOptions, source]
  )

  const {
    data,
    isInitialLoading,
    loadMore,
    isLoadingMore,
    isLoading,
    paginationInfo,
  } = useData<ActualRecordType>(localSource)

  const { currentSearch, setCurrentSearch } = localSource

  // Cache selected items so we can display them even when they're not in current data
  const selectedItemsCache = useRef<
    Map<string, F0SelectItemObject<T, ResolvedRecordType<R>>>
  >(new Map())

  /**
   * Map of items from paginated data by their value (as string).
   * Used for dropdown list and selection state.
   * Keys are always strings to ensure consistent lookups regardless of
   * whether the original value is a string or number.
   */
  const itemsByValue = useMemo(() => {
    const entries: [
      string,
      {
        item: ActualRecordType
        option: F0SelectItemObject<T, ActualRecordType>
      },
    ][] = []

    // Only add items from paginated data (NOT fetchedItems)
    for (const record of data.records) {
      const mappedOption = optionMapper(record)
      if (mappedOption.type !== "separator") {
        // Always use string keys for consistent lookups
        entries.push([
          String(mappedOption.value),
          { item: record, option: mappedOption },
        ])
      }
    }

    return Object.fromEntries(entries)
  }, [data, optionMapper])

  /**
   * Initialize selection state from the value prop.
   * This allows the component to display pre-selected values when the data loads.
   */
  const initialSelectedState = useMemo(():
    | SelectedItemsState<ActualRecordType>
    | undefined => {
    const values = toArray(value) ?? defaultValues ?? []
    if (values.length === 0) {
      return undefined
    }

    const items = new Map() as SelectedItemsState<ActualRecordType>["items"]

    // Use Set to ensure unique values and prevent duplicates
    const uniqueValues = Array.from(new Set(values))

    for (const val of uniqueValues) {
      // Use string key for consistent lookup
      const itemData = itemsByValue[String(val)]
      items.set(String(val), {
        id: String(val),
        checked: true,
        item: itemData?.item as WithGroupId<ActualRecordType> | undefined,
      })
    }

    return {
      allSelected: false,
      items,
      groups: new Map(),
    }
  }, [value, defaultValues, itemsByValue])

  const {
    handleSelectAllItems,
    handleSelectItemChange,
    selectedState,
    clearSelection,
    selectionMeta,
  } = useSelectable({
    data,
    paginationInfo,
    source: localSource,
    selectionMode: multiple ? "multi" : "single",
    onSelectItems: onSelectItems,
    selectedState: initialSelectedState,
    disableSelectAll: disableSelectAll,
    isSearchActive: !!currentSearch,
    allPagesSelection: true,
    resetOnPageChange: false,
    preserveSelectionOnDatasetChange,
  })

  const cloneSelectedState = useCallback(
    (
      state: SelectedItemsState<ActualRecordType>
    ): SelectedItemsState<ActualRecordType> => {
      return {
        allSelected: state.allSelected,
        items: new Map(state.items),
        groups: new Map(state.groups),
      }
    },
    []
  )

  const getSelectedStateKey = useCallback(
    (state: SelectedItemsState<ActualRecordType>): string => {
      const relevantItems = Array.from(state.items.entries()).filter(
        ([, item]) => (state.allSelected ? true : item.checked)
      )
      const itemsKeys = relevantItems
        .map(([id, item]) => `${id}:${item.checked}`)
        .sort()
        .join(",")
      const relevantGroups = Array.from(state.groups.entries()).filter(
        ([, group]) => (state.allSelected ? true : group.checked)
      )
      const groupsKeys = relevantGroups
        .map(([id, group]) => `${id}:${group.checked}`)
        .sort()
        .join(",")

      return `${state.allSelected}|${itemsKeys}|${groupsKeys}`
    },
    []
  )

  const committedSelectionRef = useRef(
    initialSelectedState
      ? cloneSelectedState(initialSelectedState)
      : {
          allSelected: false,
          items: new Map(),
          groups: new Map(),
        }
  )

  /**
   * Get display items for the selection preview.
   * Uses localValue (the current value prop) to determine what to display.
   * Looks up items from paginated data, cache, or defaultItems.
   */
  const getDisplayItemsForSelection = useMemo(() => {
    const result: F0SelectItemObject<T, ResolvedRecordType<R>>[] = []

    for (const valueId of localValue) {
      const stringValueId = String(valueId)
      // Try to get from paginated data first
      const fromData = itemsByValue[stringValueId]
      if (fromData) {
        // Update cache with latest data
        selectedItemsCache.current.set(stringValueId, fromData.option)
        result.push(fromData.option)
        continue
      }

      // Try from cache (items selected but not in current data)
      const fromCache = selectedItemsCache.current.get(stringValueId)
      if (fromCache) {
        result.push(fromCache)
        continue
      }

      // Try defaultItems (pre-selected values provided by parent)
      // Compare as strings to handle both string and number values
      const fromDefault = defaultItems.find(
        (item) => String(item.value) === stringValueId
      )
      if (fromDefault) {
        // Add to cache for future use
        selectedItemsCache.current.set(stringValueId, fromDefault)
        result.push(fromDefault)
      }
    }

    return result
  }, [localValue, itemsByValue, defaultItems])

  /**
   * Status tags render as pills, which need more vertical room than the "sm"
   * trigger gives them — the selected pill looks cramped. Force the trigger to
   * at least "md" when a status tag is in play, whether it comes from a loaded
   * option or from the currently displayed selection (which resolves through
   * the cache and `defaultItem`). Covering the displayed selection keeps the
   * height correct for a preselected status pill even before its record loads,
   * avoiding a layout shift.
   */
  const hasStatusTag = useMemo(() => {
    const inOptions = data.records.some(
      (record) => getTagType(optionMapper(record)) === "status"
    )
    return (
      inOptions ||
      getDisplayItemsForSelection.some((item) => getTagType(item) === "status")
    )
  }, [data.records, optionMapper, getDisplayItemsForSelection])
  const effectiveSize = hasStatusTag ? "md" : size

  const onSearchChangeLocal = (value: string) => {
    setCurrentSearch(value)
    onSearchChange?.(value)
  }
  // Show apply button when in multiple selection, and not rendered as a list
  const showApplyButton = multiple && !asList
  const hasDeferredApply = !!(withApplySelection && showApplyButton)

  // Track whether the user has interacted with the selection
  const hasUserInteracted = useRef(false)
  const isFirstRender = useRef(true)

  // Track the last value emitted via onChange to avoid spurious re-emits when
  // the effect deps change but the selected value did not. Without this guard,
  // async datasources (records resolving after the click), or downstream
  // clones of `selectedState` items, can re-fire the emit effect with the
  // same logical selection.
  const lastEmittedSingleRef = useRef<{ value: string | undefined } | null>(
    null
  )
  const lastEmittedMultiRef = useRef<string | null>(null)

  const onItemCheckChange = useCallback(
    (value: string, checked: boolean) => {
      // Prevent deselection in single select mode when not clearable
      if (!multiple && !clearable && !checked && localValue[0] === value) {
        return
      }

      hasUserInteracted.current = true
      handleSelectItemChange(value, checked)

      // Only call onChangeSelectedOption if we have the item data
      // Use string key for consistent lookup
      const item = itemsByValue[String(value)]
      if (item) {
        // Cache the item for future display
        if (checked) {
          selectedItemsCache.current.set(String(value), item.option)
        } else {
          selectedItemsCache.current.delete(String(value))
        }
        if (!hasDeferredApply) {
          onChangeSelectedOption?.(item.option, checked)
        }
      }
    },
    [
      hasDeferredApply,
      onChangeSelectedOption,
      itemsByValue,
      handleSelectItemChange,
      multiple,
      clearable,
      localValue,
    ]
  )

  // Mark user interaction when select all is used
  // Tracks whether a "select all" is the current selection. Once the user
  // clicks select-all, the selection is scoped to the query it was made under,
  // so from that moment the component behaves as if
  // `preserveSelectionOnDatasetChange` were false — any filter/search/sort
  // change drops it. Survives the dataset-change clear (unlike reading the live
  // `allSelected`, which may have already flipped by the time the effect runs).
  const selectAllActiveRef = useRef(false)
  const handleSelectAllWithTracking = useCallback(
    (checked: boolean) => {
      hasUserInteracted.current = true
      selectAllActiveRef.current = checked
      handleSelectAllItems(checked)
    },
    [handleSelectAllItems]
  )

  const getMultiSelectionPayload = useCallback(() => {
    const checkedItems = Array.from(selectedState.items.values() || []).filter(
      (item) => item.checked
    )

    const extractOriginalItem = (
      record: ActualRecordType | undefined
    ): ResolvedRecordType<R> | undefined => {
      if (!record) return undefined
      if (source) {
        return record as unknown as ResolvedRecordType<R>
      }

      const option = record as unknown as F0SelectItemObject<
        T,
        ResolvedRecordType<R>
      >
      return option.item
    }

    const records = checkedItems
      .map((item) => item.item)
      .filter(
        (item): item is WithGroupId<ResolvedRecordType<R>> => item !== undefined
      )
    const originalItems = records
      .map(extractOriginalItem)
      .filter((item): item is ResolvedRecordType<R> => item !== undefined)
    const options = records.map((item) => {
      return optionMapper(item) as F0SelectItemObject<T, ResolvedRecordType<R>>
    })
    // Use original option values to preserve the type (number vs string)
    // Only use stringfied id as fallback if option is not available
    const values = checkedItems.map((item) => {
      if (item.item) {
        const option = optionMapper(item.item as ActualRecordType)
        return option.type !== "separator"
          ? (option.value as T)
          : (String(item.id) as T)
      }

      return String(item.id) as T
    })

    return {
      values,
      originalItems,
      options,
    }
  }, [optionMapper, selectedState.items, source])

  /**
   * Emit the value change. The type depends on the multiple prop and selectionMode.
   * Only emit after user interaction to avoid spurious onChange calls on mount.
   */
  useDeepCompareEffect(() => {
    // Skip onChange before user has interacted with the component
    // This prevents emitting undefined values on initial mount/data load
    if (!hasUserInteracted.current) {
      // Mark first render as complete
      if (isFirstRender.current) {
        isFirstRender.current = false
      }
      return
    }

    // Only reset search in single select mode when dropdown is closed
    // Don't clear while user is still typing/searching with dropdown open
    // Don't clear in asList mode since openLocal is never true (no popover)
    // and clearing would trigger useSelectable to reset the selection
    if (!multiple && !openLocal && !asList) {
      setCurrentSearch(undefined)
    }

    // Helper to extract the original item from a record
    // For static options: the record IS the option, and option.item contains the original data
    // For datasource: the record is the original data, optionMapper creates the option
    const extractOriginalItem = (
      record: ActualRecordType | undefined
    ): ResolvedRecordType<R> | undefined => {
      if (!record) return undefined
      if (source) {
        // For datasource, the record itself is the original item
        return record as unknown as ResolvedRecordType<R>
      }
      // For static options, extract the 'item' property from the option
      const option = record as unknown as F0SelectItemObject<
        T,
        ResolvedRecordType<R>
      >
      return option.item
    }

    // TypeScript cannot infer the type of the onChange callback when it has generics,
    // so we need to cast it to the correct type
    if (multiple) {
      const { values, originalItems, options } = getMultiSelectionPayload()

      // Sync localValue with actual selection state (as strings for internal comparison)
      // This ensures the preview shows correct items after deselection
      // Use Set to ensure unique values and prevent duplicates
      setLocalValue(Array.from(new Set(values.map(String))))

      // Guard: only emit when the set of selected values actually changes.
      // Sort + join to compare order-independently with a stable key.
      const valuesKey = values.map(String).sort().join("\u0000")
      if (lastEmittedMultiRef.current === valuesKey) {
        return
      }

      if (!hasDeferredApply) {
        // Only commit to the ref what we actually emit, so a later transition
        // from deferred-apply back to immediate-emit isn't suppressed.
        lastEmittedMultiRef.current = valuesKey
        onChange?.(values, originalItems, options)
      }
    } else {
      const checkedItems = Array.from(
        selectedState.items.values() || []
      ).filter((item) => item.checked)
      const selectedItem = checkedItems[0]
      const record = selectedItem?.item as ActualRecordType | undefined
      const originalItem = extractOriginalItem(record)
      const option = record
        ? (optionMapper(record) as F0SelectItemObject<T, ResolvedRecordType<R>>)
        : undefined

      // Use original option value to preserve the type (number vs string)
      const value = option
        ? (option.value as T)
        : selectedItem
          ? (String(selectedItem.id) as T)
          : undefined

      // Sync localValue with actual selection state (as string for internal comparison)
      setLocalValue(value !== undefined ? [String(value)] : [])

      // Guard: only emit when the selected value identity actually changes.
      // Without this, async datasources (record resolving after a click) or
      // unrelated `source`/`selectedState` content changes can re-fire the
      // effect with the same selection and produce duplicate onChange calls.
      const valueKey = value === undefined ? undefined : String(value)
      if (
        lastEmittedSingleRef.current !== null &&
        lastEmittedSingleRef.current.value === valueKey
      ) {
        return
      }

      if (!hasDeferredApply) {
        // Only commit to the ref what we actually emit, so a later transition
        // from deferred-apply back to immediate-emit isn't suppressed.
        lastEmittedSingleRef.current = { value: valueKey }
        onChange?.(value as T, originalItem, option)
      }
    }
  }, [
    getMultiSelectionPayload,
    hasDeferredApply,
    optionMapper,
    selectedState,
    source,
  ])

  const debouncedHandleChangeOpenLocal = useDebounceCallback(
    (open: boolean) => {
      onOpenChange?.(open)
      setOpenLocal(open)
      if (!open) {
        isApplyingRef.current = false
      }
    },
    100
  )

  // Cancel any pending debounced state update on unmount. usehooks-ts'
  // `useDebounceCallback` has a known bug where its internal unmount cleanup
  // cancels a different lodash.debounce instance than the one invoked by
  // callers, so pending trailing-edge timers can fire after the test's jsdom
  // window is torn down (causing `ReferenceError: window is not defined`
  // inside react-dom). We track the latest wrapper via a ref and only cancel
  // on true unmount so we don't drop in-flight timers between renders.
  const debouncedHandleChangeOpenLocalRef = useRef(
    debouncedHandleChangeOpenLocal
  )
  debouncedHandleChangeOpenLocalRef.current = debouncedHandleChangeOpenLocal
  useEffect(() => {
    return () => {
      debouncedHandleChangeOpenLocalRef.current.cancel()
    }
  }, [])

  const restoreCommittedSelection = useCallback(() => {
    const committedSelection = committedSelectionRef.current

    clearSelection()

    if (committedSelection.allSelected) {
      handleSelectAllWithTracking(true)

      for (const itemState of committedSelection.items.values()) {
        if (!itemState.checked) {
          handleSelectItemChange(itemState.item ?? itemState.id, false)
        }
      }

      return
    }

    const committedItems = Array.from(committedSelection.items.values()).filter(
      (itemState) => itemState.checked
    )

    for (const itemState of committedItems) {
      handleSelectItemChange(itemState.item ?? itemState.id, true)
    }
  }, [clearSelection, handleSelectAllWithTracking, handleSelectItemChange])

  const handleChangeOpenLocal = (open: boolean) => {
    if (!open && hasDeferredApply && !isApplyingRef.current) {
      restoreCommittedSelection()
    }

    debouncedHandleChangeOpenLocal(open)
  }

  const handleCancel = useCallback(() => {
    restoreCommittedSelection()
  }, [restoreCommittedSelection])

  const handleApply = useCallback(() => {
    if (hasDeferredApply) {
      const nextCommittedSelection = cloneSelectedState(selectedState)
      const { values, originalItems, options } = getMultiSelectionPayload()
      if (
        getSelectedStateKey(nextCommittedSelection) !==
        getSelectedStateKey(committedSelectionRef.current)
      ) {
        committedSelectionRef.current = nextCommittedSelection
        ;(
          onChange as
            | ((
                value: T[],
                originalItems: ResolvedRecordType<R>[],
                options: F0SelectItemObject<T, ResolvedRecordType<R>>[]
              ) => void)
            | undefined
        )?.(values, originalItems, options)
      }

      isApplyingRef.current = true
    }
    handleChangeOpenLocal(false)
  }, [
    cloneSelectedState,
    getSelectedStateKey,
    getMultiSelectionPayload,
    handleChangeOpenLocal,
    hasDeferredApply,
    onChange,
    selectedState,
  ])

  // Track when filters panel is open to hide bottom actions
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  // Clear the selection cache and local value when the dataset identity changes
  // (filters/sortings/search). `preserveSelectionOnDatasetChange` keeps MANUAL
  // selections across the change, but a "select all" is scoped to the query it
  // was made under and is always dropped (mirrors useSelectable) — so clear the
  // local value too. Otherwise the stale select-all re-seeds through the
  // `selectedState` prop and the badge balloons to the new query's count (e.g.
  // "All selected (25)"). We read `selectAllActiveRef` rather than the live
  // `allSelected` because useSelectable may have already flipped it by now, and
  // we key off the debounced search to stay in sync with useSelectable's clear.
  const previousDatasetKeyRef = useRef<string | null>(null)
  useEffect(() => {
    const key = JSON.stringify([
      localSource.currentFilters,
      localSource.currentSortings,
      localSource.debouncedCurrentSearch,
    ])
    if (previousDatasetKeyRef.current === null) {
      previousDatasetKeyRef.current = key
      return
    }
    if (previousDatasetKeyRef.current !== key) {
      previousDatasetKeyRef.current = key
      if (
        !disableSelectAll &&
        (!preserveSelectionOnDatasetChange || selectAllActiveRef.current)
      ) {
        selectedItemsCache.current.clear()
        setLocalValue([])
        hasUserInteracted.current = true
        selectAllActiveRef.current = false
      }
    }
  }, [
    localSource.currentFilters,
    localSource.currentSortings,
    localSource.debouncedCurrentSearch,
    disableSelectAll,
    preserveSelectionOnDatasetChange,
  ])

  const collapsible = localSource.grouping?.collapsible ?? false
  const defaultOpenGroups = localSource.grouping?.defaultOpenGroups
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : [],
    defaultOpenGroups
  )

  const getItems = useCallback(
    (
      records: WithGroupId<ActualRecordType>[] | ActualRecordType[],
      seenTagTypes: Set<string>
    ): VirtualItem[] => {
      return records.map((record, index) => {
        const mappedOption = optionMapper(record)
        const tagType = getTagType(mappedOption)
        if (tagType !== undefined) {
          seenTagTypes.add(tagType)
          if (seenTagTypes.size > 1) {
            throw new Error(
              `[F0Select] All options must use the same tag type, but multiple were provided: ${Array.from(
                seenTagTypes
              )
                .map((type) => `"${type}"`)
                .join(", ")}.`
            )
          }
        }
        return mappedOption.type === "separator"
          ? {
              height: 1,
              key: `separator-${index}`,
              type: "separator",
              item: (
                <SelectSeparator
                  key={`separator-${index}`}
                  className="mb-1 mt-2"
                />
              ),
            }
          : {
              height: mappedOption.description ? 64 : 32,
              key: `item-${mappedOption.value}`,
              type: "item",
              item: (
                <SelectItem
                  key={String(mappedOption.value)}
                  item={mappedOption}
                />
              ),
              // Convert to string to ensure consistent comparison with selectedItemsValues
              // which also converts to strings (line 623)
              value: String(mappedOption.value),
            }
      })
    },
    [optionMapper]
  )

  const items: VirtualItem[] = useMemo(() => {
    const seenTagTypes = new Set<string>()

    if (data.type === "grouped") {
      const items: VirtualItem[] = []
      data.groups.map((group) => {
        items.push({
          height: 36,
          key: `group-header-${group.key}`,
          type: "group-header",
          item: (
            <GroupHeader
              label={group.label}
              itemCount={group.itemCount}
              showOpenChange={collapsible}
              onOpenChange={(open) => setGroupOpen(group.key, open)}
              open={openGroups[group.key]}
              chevronPosition="leading"
              closedRotation={-90}
              openRotation={0}
              className="relative cursor-pointer rounded px-3 py-2 outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:z-0 after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:after:opacity-100 [&_*]:z-10"
            />
          ),
        })
        if (!collapsible || openGroups[group.key]) {
          items.push(
            ...getItems(group.records, seenTagTypes).map((vi) => ({
              ...vi,
              key: `${group.key}:${vi.key}`,
              item: collapsible ? (
                <div className="pl-5">{vi.item}</div>
              ) : (
                vi.item
              ),
            }))
          )
        }
      })
      return items
    }
    return getItems(data.records, seenTagTypes)
  }, [
    data.records,
    data.type,
    data.groups,
    getItems,
    openGroups,
    setGroupOpen,
    collapsible,
  ])

  const handleScrollBottom = () => {
    loadMore()
  }
  const i18n = useI18n()

  /**
   * Get the values of the selected items from the state to pass to the select primitive
   */
  const selectedItemsValues = useMemo(() => {
    return Array.from(selectedState.items.values())
      .filter((item) => item.checked)
      .map((item) => String(item.id))
  }, [selectedState.items])

  /**
   * Common props for the select primitive
   */
  const commonProps = {
    ...props,
    onItemCheckChange,
    disabled,
    open: openLocal,
    onOpenChange: handleChangeOpenLocal,
  }

  const selectPrimitiveProps = multiple
    ? ({
        ...commonProps,
        value: selectedItemsValues,
        multiple: true as const,
        as: asList ? ("list" as const) : undefined,
      } as const)
    : ({
        ...commonProps,
        // Use empty string instead of undefined to maintain controlled component state
        value: selectedItemsValues[0] ?? "",
        multiple: false as const,
        as: asList ? ("list" as const) : undefined,
      } as const)

  const handleCreate = onCreate
    ? (value: string) => {
        const result = onCreate(value)
        if (result && typeof result.then === "function") {
          result.then(
            () => {
              setCurrentSearch(undefined)
            },
            (err: unknown) => {
              console.warn("[F0Select] onCreate failed:", err)
            }
          )
        } else {
          setCurrentSearch(undefined)
        }
      }
    : undefined

  const createLabel = currentSearch
    ? i18n.t("select.createWithValue", { value: currentSearch })
    : i18n.select.create

  const emptyAction =
    handleCreate && currentSearch?.trim() ? (
      <div className="flex w-full">
        <F0Button
          type="button"
          variant="outline"
          onClick={() => handleCreate(currentSearch.trim())}
          icon={Plus}
          label={createLabel}
        />
      </div>
    ) : undefined

  const selectContent = (
    <SelectContent
      items={items}
      taller={!!source?.filters}
      emptyMessage={
        searchEmptyMessage ??
        (onCreate && currentSearch?.trim()
          ? (i18n.select.createEmptyMessage ?? i18n.select.noResults)
          : i18n.select.noResults)
      }
      emptyAction={emptyAction}
      bottom={
        !isFiltersOpen ? (
          <SelectBottomActions
            actions={actions}
            showApplyButton={showApplyButton}
            onApply={handleApply}
            onCancel={handleCancel}
            showCancelButton={hasDeferredApply}
          />
        ) : null
      }
      top={
        <>
          <SelectTopActions
            searchValue={currentSearch}
            onSearchChange={onSearchChangeLocal}
            searchBoxPlaceholder={searchBoxPlaceholder}
            showSearchBox={showSearchBox}
            grouping={localSource.grouping}
            currentGrouping={localSource.currentGrouping}
            onGroupingChange={localSource.setCurrentGrouping}
            filters={localSource.filters}
            currentFilters={localSource.currentFilters}
            onFiltersChange={(filters) => {
              localSource.setCurrentFilters(filters)
              onFiltersChange?.(filters)
            }}
            asList={asList}
            onFiltersOpenChange={setIsFiltersOpen}
            showPreview={showPreview}
          />
          {multiple && !currentSearch && !isFiltersOpen && (
            <SelectAll
              selectedCount={selectionMeta.selectedItemsCount}
              indeterminate={
                selectedState.allSelected === "indeterminate" ||
                (selectedState.allSelected === false &&
                  selectionMeta.selectedItemsCount > 0)
              }
              value={!!selectedState.allSelected}
              onChange={handleSelectAllWithTracking}
              hideCheckbox={disableSelectAll}
              items={getDisplayItemsForSelection}
              paddingTop={!showSearchBox && !localSource.filters}
            />
          )}
        </>
      }
      right={
        multiple && !isFiltersOpen && showPreview ? (
          <SelectionPreview
            items={getDisplayItemsForSelection}
            onDeselect={(value) => onItemCheckChange(value, false)}
            allSelected={selectedState.allSelected}
            onLoadMore={loadMore}
            isLoadingMore={isLoadingMore}
          />
        ) : null
      }
      forceMinHeight={!!localSource.filters && showPreview}
      onScrollBottom={handleScrollBottom}
      scrollMargin={10}
      isLoadingMore={isLoadingMore}
      isLoading={isLoading || loading}
      showLoadingIndicator={!!children}
      portalContainer={effectivePortalContainer}
    />
  )

  if (asList) {
    return (
      <DataTestIdWrapper dataTestId={dataTestId}>
        <div
          className={cn(
            "flex w-full max-h-full flex-col gap-2",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          {label && !hideLabel && (
            <Label
              label={label}
              required={required}
              htmlFor={id}
              icon={labelIcon}
              disabled={disabled}
            />
          )}
          {/* Select Container */}
          <div
            className={cn(
              "flex-1 min-h-0",
              asListContainerVariants({
                status: error
                  ? "error"
                  : status?.type
                    ? status?.type
                    : "default",
              })
            )}
          >
            <SelectPrimitive {...selectPrimitiveProps}>
              {selectContent}
            </SelectPrimitive>
          </div>
          {/* Hint or Status Message */}
          <InputMessages status={status} />
        </div>
      </DataTestIdWrapper>
    )
  }

  return (
    <DataTestIdWrapper dataTestId={dataTestId}>
      <SelectPrimitive {...selectPrimitiveProps}>
        <SelectTrigger ref={ref} asChild>
          {children ? (
            <div
              className="flex w-full items-center justify-between"
              aria-label={label || placeholder}
            >
              {children}
            </div>
          ) : (
            <F0InputField
              label={label}
              error={error}
              required={required}
              status={status}
              hint={hint}
              icon={icon}
              labelIcon={labelIcon}
              hideLabel={hideLabel}
              value={
                multiple
                  ? // For multiple: use count of selected items
                    Math.max(
                      localValue.length,
                      selectionMeta.selectedItemsCount
                    ).toString()
                  : // For single: use the selected value directly
                    (localValue[0] ?? undefined)
              }
              isEmpty={(value) =>
                multiple ? !value || +(value ?? 0) === 0 : !value
              }
              onClear={() => {
                hasUserInteracted.current = true
                clearSelection()
                // Clear the cache when clearing selection
                selectedItemsCache.current.clear()
                // Call with undefined to indicate no item is selected
                ;(
                  onChangeSelectedOption as (
                    option: undefined,
                    checked: boolean
                  ) => void
                )?.(undefined, false)
              }}
              placeholder={placeholder || ""}
              disabled={disabled}
              clearable={clearable}
              size={effectiveSize}
              loadingIndicator={{
                asOverlay: true,
                offset: 34,
              }}
              loading={isInitialLoading || loading || isLoading}
              name={name}
              onClickContent={() => {
                handleChangeOpenLocal(!openLocal)
              }}
              append={
                <Arrow
                  open={openLocal}
                  disabled={disabled}
                  size={effectiveSize}
                />
              }
            >
              <button
                className="flex w-full items-center justify-between"
                aria-label={label || placeholder}
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                {(multiple
                  ? localValue.length > 0 ||
                    selectionMeta.selectedItemsCount > 0
                  : !!localValue[0]) && (
                  <SelectedItems
                    multiple={multiple}
                    totalSelectedCount={
                      multiple
                        ? Math.max(
                            localValue.length,
                            selectionMeta.selectedItemsCount
                          )
                        : localValue[0]
                          ? 1
                          : 0
                    }
                    allSelected={selectedState.allSelected}
                    selection={getDisplayItemsForSelection}
                  />
                )}
              </button>
            </F0InputField>
          )}
        </SelectTrigger>
        {openLocal && selectContent}
      </SelectPrimitive>
    </DataTestIdWrapper>
  )
})

export const F0Select = F0SelectComponent as <
  T extends string = string,
  R = unknown,
>(
  props: F0SelectProps<T, R> & {
    ref?: React.Ref<HTMLButtonElement>
  }
) => React.ReactElement
