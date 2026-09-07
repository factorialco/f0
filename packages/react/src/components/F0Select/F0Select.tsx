import { useComposedRefs } from "@radix-ui/react-compose-refs"
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
import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { F0InputField } from "@/components/F0InputField"
import { InputMessages } from "@/components/F0InputField/components/InputMessages"
import { Label } from "@/components/F0InputField/components/Label"
import { TooltipInternal } from "@/experimental/Overlays/Tooltip"
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
import { ChevronDown, Plus } from "@/icons/app"
import { DataTestIdWrapper } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n"
import { toArray } from "@/lib/toArray"
import { cn, focusRing } from "@/lib/utils"
import { F0DialogContext } from "@/patterns/F0Dialog"
import { GroupHeader } from "@/ui/GroupHeader/index"
import {
  getSelectContentControls,
  SelectContent,
  Select as SelectPrimitive,
  SelectSeparator,
  SelectTrigger,
  VirtualItem,
} from "@/ui/Select"
import { textVariants } from "@/ui/Text"
import { ActiveOptionContext } from "./components/ActiveOptionContext"
import { Arrow } from "./components/Arrow"
import { SelectAll } from "./components/SelectAll"
import { SelectBottomActions } from "./components/SelectBottomActions"
import { SelectedItems } from "./components/SelectedItems"
import { SelectionPreview } from "./components/SelectionPreview"
import { SelectItem } from "./components/SelectItem"
import { SelectTopActions } from "./components/SelectTopActions"
import { useTriggerSearch } from "./hooks/useTriggerSearch"
import type {
  F0SelectItemObject,
  F0SelectItemProps,
  F0SelectProps,
  ResolvedRecordType,
} from "./types"
import { displayLabel } from "./utils"
export * from "./types"

/**
 * Typing into the field queries a remote source on this delay, the same the
 * popover's search box has always used. Static options filter at once.
 */
const REMOTE_SEARCH_DEBOUNCE_MS = 400

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

const inlineSelectTriggerClassName = cn(
  "group inline-flex h-8 w-fit max-w-full items-center gap-1 rounded border-0 bg-transparent pl-3 pr-2 shadow-none outline-none transition-colors enabled:cursor-pointer enabled:hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover disabled:cursor-not-allowed disabled:bg-f1-background-tertiary disabled:text-f1-foreground-disabled disabled:data-[state=open]:bg-f1-background-tertiary disabled:[&_*]:text-f1-foreground-disabled",
  textVariants({ variant: "label" })
)

type InlineSelectTriggerProps = {
  label: string
  placeholder?: string
  selection: F0SelectItemObject<string>[]
  hasValue: boolean
}

const InlineSelectTrigger = forwardRef<
  HTMLButtonElement,
  InlineSelectTriggerProps
>(function InlineSelectTrigger(
  { label, placeholder, selection, hasValue },
  ref
) {
  return (
    <SelectTrigger
      ref={ref}
      aria-label={label}
      className={cn(inlineSelectTriggerClassName, focusRing())}
    >
      <span className="flex min-w-0 max-w-full items-center">
        {hasValue ? (
          <SelectedItems selection={selection} totalSelectedCount={1} />
        ) : (
          <span className="truncate text-f1-foreground-secondary">
            {placeholder ?? label}
          </span>
        )}
      </span>
      <span
        className="flex size-4 shrink-0 items-center justify-center text-f1-icon"
        aria-hidden="true"
      >
        <F0Icon icon={ChevronDown} size="sm" />
      </span>
    </SelectTrigger>
  )
})

InlineSelectTrigger.displayName = "InlineSelectTrigger"

const F0SelectComponent = forwardRef(function Select<
  T extends string,
  R = unknown,
>(
  {
    variant = "field",
    placeholder,
    onChange,
    withApplySelection = false,
    applySelectionLabel,
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
    size: sizeProp,
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
    fitContentWidth,
    dataTestId,
    ...props
  }: F0SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const id = useId()
  const size = sizeProp ?? "sm"

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

  /**
   * Focus never leaves the input, so the text keys keep working. The list is
   * driven from here instead: the arrows move an active option named by
   * `aria-activedescendant`, and Enter takes it.
   */
  const [activeValue, setActiveValue] = useState<string | undefined>(undefined)
  const optionIdFor = useCallback(
    // Values are arbitrary strings and an IDREF cannot hold whitespace, so a
    // space is spelled out as its char code.
    (value: string) =>
      `${id}-option-${value.replace(
        /\s/g,
        (char) => `_${char.charCodeAt(0).toString(16)}`
      )}`,
    [id]
  )
  const inlineTriggerRef = useRef<HTMLElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)
  const composedTriggerRef = useComposedRefs(ref, inlineTriggerRef)
  const previousOpenRef = useRef(openLocal)
  const isApplyingRef = useRef(false)

  useEffect(() => {
    if (variant === "inline" && previousOpenRef.current && !openLocal) {
      inlineTriggerRef.current?.focus({ preventScroll: true })
    }
    previousOpenRef.current = openLocal
  }, [openLocal, variant])

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
  const controlledInlineValue =
    variant === "inline" && typeof value === "string"
      ? String(value)
      : undefined

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

  /** Only the field trigger can host the search. */
  const isFieldTrigger = variant === "field" && !asList && !children

  const showSearchBoxEffective = !!showSearchBox

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
      search: showSearchBoxEffective
        ? {
            enabled: showSearchBoxEffective,
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

  /**
   * Where the search field goes. With no filters the field itself is the
   * search box; with filters it stays in the dropdown's row, beside the
   * filter picker and the applied-filter chips.
   */
  const inlineSearch =
    showSearchBoxEffective && isFieldTrigger && !localSource.filters
  const popoverSearchBox = showSearchBoxEffective && !inlineSearch

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
  const effectiveFitContentWidth = fitContentWidth ?? variant === "inline"

  const onSearchChangeLocal = (value: string) => {
    setCurrentSearch(value)
    onSearchChange?.(value)
  }

  const searchEmitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cancelPendingSearchEmit = useCallback(() => {
    if (searchEmitTimerRef.current !== null) {
      clearTimeout(searchEmitTimerRef.current)
      searchEmitTimerRef.current = null
    }
  }, [])
  useEffect(() => cancelPendingSearchEmit, [cancelPendingSearchEmit])

  /** The field's query: immediate for static options, debounced for a source. */
  const emitSearchFromField = (value: string) => {
    cancelPendingSearchEmit()
    if (!source) {
      onSearchChangeLocal(value)
      return
    }
    searchEmitTimerRef.current = setTimeout(() => {
      searchEmitTimerRef.current = null
      onSearchChangeLocal(value)
    }, REMOTE_SEARCH_DEBOUNCE_MS)
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
      if (!record) {
        return undefined
      }
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
      if (!record) {
        return undefined
      }
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

        // A controlled inline select must keep the prop as its source of truth.
        // The selection hook updates optimistically so `onChange` can be emitted;
        // if the parent leaves `value` unchanged, restore both the selection
        // state and the primitive value after that emission. Resetting the
        // emission guard also allows the user to retry the same rejected value.
        if (
          controlledInlineValue !== undefined &&
          valueKey !== controlledInlineValue
        ) {
          hasUserInteracted.current = false
          lastEmittedSingleRef.current = null
          clearSelection()
          handleSelectItemChange(controlledInlineValue, true)
          setLocalValue([controlledInlineValue])
        }
      }
    }
  }, [
    controlledInlineValue,
    getMultiSelectionPayload,
    hasDeferredApply,
    optionMapper,
    selectedState,
    source,
  ])

  // Debounced open/close via plain setTimeout instead of usehooks-ts'
  // `useDebounceCallback` (lodash.debounce). lodash decides the trailing edge
  // by reading `Date.now()`, so under a frozen clock (MockDate in Storybook
  // stories, mocked dates in tests) the 100ms window never elapses and the
  // dropdown can never open. setTimeout keeps ticking regardless of the
  // clock. Semantics match lodash's trailing debounce: rapid calls coalesce
  // and only the last value is applied.
  const applyOpenChangeRef = useRef<(open: boolean) => void>(() => {})
  applyOpenChangeRef.current = (open: boolean) => {
    onOpenChange?.(open)
    setOpenLocal(open)
    if (!open) {
      isApplyingRef.current = false
    }
  }
  const openChangeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const debouncedHandleChangeOpenLocal = useMemo(() => {
    const debounced = (open: boolean) => {
      if (openChangeTimerRef.current !== null) {
        clearTimeout(openChangeTimerRef.current)
      }
      openChangeTimerRef.current = setTimeout(() => {
        openChangeTimerRef.current = null
        applyOpenChangeRef.current(open)
      }, 100)
    }
    debounced.cancel = () => {
      if (openChangeTimerRef.current !== null) {
        clearTimeout(openChangeTimerRef.current)
        openChangeTimerRef.current = null
      }
    }
    return debounced
  }, [])

  // Cancel any pending open/close update on unmount so the trailing timer
  // can't fire against an unmounted component (or a torn-down jsdom window).
  useEffect(() => {
    return () => {
      debouncedHandleChangeOpenLocal.cancel()
    }
  }, [debouncedHandleChangeOpenLocal])

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

  /**
   * Skips the debounce above, which is there to resolve a close and an open
   * arriving together. Typing has nothing to race, so the wait would just be
   * 100ms of nothing happening after the first character.
   */
  const openNow = useCallback(() => {
    debouncedHandleChangeOpenLocal.cancel()
    applyOpenChangeRef.current(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedHandleChangeOpenLocal])

  const handleCancel = useCallback(() => {
    handleChangeOpenLocal(false)
  }, [handleChangeOpenLocal])

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
                  optionId={
                    inlineSearch
                      ? optionIdFor(String(mappedOption.value))
                      : undefined
                  }
                />
              ),
              disabled: mappedOption.disabled,
              // Convert to string to ensure consistent comparison with selectedItemsValues
              // which also converts to strings (line 623)
              value: String(mappedOption.value),
            }
      })
    },
    [optionMapper, inlineSearch, optionIdFor]
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

  /** The values the arrows walk, in the order they are drawn. */
  const navigableValues = useMemo(
    () =>
      inlineSearch
        ? items
            .filter(
              (item) =>
                item.type === "item" &&
                item.value !== undefined &&
                !item.disabled
            )
            .map((item) => item.value as string)
        : [],
    [inlineSearch, items]
  )

  // An option is always active, so Enter always has a visible target.
  useEffect(() => {
    if (!inlineSearch) {
      return
    }
    if (!openLocal) {
      setActiveValue(undefined)
      return
    }
    setActiveValue((current) => {
      if (current && navigableValues.includes(current)) {
        return current
      }
      // Opening lands on the selection; first option otherwise.
      const selected = localValue.find((value) =>
        navigableValues.includes(value)
      )
      return selected ?? navigableValues[0]
    })
    // localValue is read for the starting row only; the list's identity is
    // what re-runs this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inlineSearch, openLocal, navigableValues])

  const moveActive = useCallback(
    (direction: "next" | "previous") => {
      setActiveValue((current) => {
        if (navigableValues.length === 0) {
          return undefined
        }
        const at = current ? navigableValues.indexOf(current) : -1
        const next =
          direction === "next"
            ? Math.min(at + 1, navigableValues.length - 1)
            : Math.max(at - 1, 0)
        return navigableValues[at === -1 ? 0 : next]
      })
    },
    [navigableValues]
  )

  /** What Enter does. */
  const selectActive = useCallback(() => {
    if (!activeValue) {
      return false
    }
    const isSelected = localValue.includes(activeValue)
    hasUserInteracted.current = true
    onItemCheckChange(activeValue, multiple ? !isSelected : true)
    if (!multiple) {
      handleChangeOpenLocal(false)
    }
    return true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeValue, localValue, multiple, onItemCheckChange])

  /**
   * Backspace on an empty field, which only a multiple selection has: the last
   * selected item goes, the way a tag field drops its last token.
   */
  const removeLastSelected = useCallback(() => {
    const last = localValue[localValue.length - 1]
    if (!multiple || !last) {
      return false
    }
    hasUserInteracted.current = true
    onItemCheckChange(last, false)
    return true
  }, [localValue, multiple, onItemCheckChange])

  /**
   * For a single selection the field's text IS the selected label, so
   * selecting, copying and editing it are the browser's own. Editing makes it
   * a query; the selection only changes when the user picks or clears.
   */
  const selectedLabelText =
    !multiple && getDisplayItemsForSelection[0]
      ? String(displayLabel(getDisplayItemsForSelection[0]))
      : ""

  const {
    draft: searchDraft,
    inputRef: searchInputRef,
    focusInput: focusSearchInput,
    resetText: resetSearchText,
    handleChange: handleSearchDraftChange,
    handleBlur: handleSearchBlur,
    handleKeyDown: handleSearchKeyDown,
  } = useTriggerSearch({
    enabled: inlineSearch,
    open: !!openLocal,
    restingText: inlineSearch ? selectedLabelText : "",
    onOpen: openNow,
    onClose: () => handleChangeOpenLocal(false),
    onActiveMove: moveActive,
    onSelectActive: selectActive,
    onBackspaceOnEmpty: removeLastSelected,
    onSearchChange: emitSearchFromField,
    // No query, not an empty one: an empty string is a new dataset identity
    // and would drop an active select-all on an open-and-close.
    onSearchReset: () => {
      cancelPendingSearchEmit()
      setCurrentSearch(undefined)
      onSearchChange?.("")
    },
    triggerRef: inlineTriggerRef,
  })

  // A virtualized list only renders what is in view.
  useEffect(() => {
    if (!inlineSearch || !activeValue) {
      return
    }
    document
      .getElementById(optionIdFor(activeValue))
      ?.scrollIntoView({ block: "nearest" })
  }, [activeValue, inlineSearch, optionIdFor])

  const handleCreate = onCreate
    ? (value: string) => {
        // The query is spent once it has become an item.
        const resetSearch = () => {
          setCurrentSearch(undefined)
          if (inlineSearch) {
            resetSearchText()
          }
        }
        const result = onCreate(value)
        if (result && typeof result.then === "function") {
          result.then(resetSearch, (err: unknown) => {
            console.warn("[F0Select] onCreate failed:", err)
          })
        } else {
          resetSearch()
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
      onKeyDown={
        inlineSearch
          ? (event) => {
              if (event.key !== "Tab" || !event.shiftKey) {
                return
              }
              const [first] = getSelectContentControls(event.currentTarget)
              if (first && first === event.target) {
                event.preventDefault()
                focusSearchInput()
              }
            }
          : undefined
      }
      // The field must survive the aria-hidden sweep the open content applies
      // to the rest of the page.
      keepTriggerAccessible={inlineSearch}
      aria-label={label}
      // Clicking your own text to fix a typo is not "outside".
      onPointerDownOutside={
        inlineSearch
          ? (event) => {
              const target = event.detail.originalEvent.target
              if (
                target instanceof Node &&
                inlineTriggerRef.current?.contains(target)
              ) {
                event.preventDefault()
              }
            }
          : undefined
      }
      fitContentWidth={effectiveFitContentWidth}
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
            applyLabel={applySelectionLabel}
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
            showSearchBox={popoverSearchBox}
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
              paddingTop={!popoverSearchBox && !localSource.filters}
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

  const selectionDescriptionId = `${id}-selection`

  const selectedCount = multiple
    ? Math.max(localValue.length, selectionMeta.selectedItemsCount)
    : localValue[0]
      ? 1
      : 0
  const hasSelection = selectedCount > 0

  /** What the trigger shows when it is not being typed into. */
  const selectedItemsNode = (
    <SelectedItems
      multiple={multiple}
      totalSelectedCount={selectedCount}
      allSelected={selectedState.allSelected}
      selection={getDisplayItemsForSelection}
      // The field's own icon already occupies the glyph slot; two icons would
      // sit 4px apart. Rows keep their icons either way.
      hideItemIcon={!!icon}
    />
  )

  /**
   * The trigger's hover tooltip: WHAT IS SELECTED, spelled out.
   *
   * The field is a single line that truncates, and with `hideLabel` it doesn't
   * even say which field it is — so on hover it says both: the selection as its
   * own line, and the field's label above it ONLY when that label isn't already
   * rendered beside the field (repeating what is on screen is noise). Multiple
   * selection lists what is chosen, which is what the trigger's "N selected"
   * cannot.
   *
   * Nothing selected, nothing to explain: empty, and nothing opens on hover.
   */
  const selectedTooltipText = getDisplayItemsForSelection
    .map(displayLabel)
    .filter(Boolean)
    .join(", ")

  const withTriggerTooltip = (trigger: React.ReactNode) => {
    /**
     * The tooltip needs ONE DOM element to hang its handlers on, and the real
     * trigger is Radix's own `asChild` target inside — wrapping that would strip
     * its props. So the box is always here, tooltip or not: when it came and went
     * with the selection, the field's width came and went with it too — clearing
     * a select dropped the box and the field contracted to its content.
     *
     * NOT a flex box either: as a flex container it made the field a flex item
     * with the default `min-width: auto`, and the field then neither shrank (it
     * overflowed a narrow column) nor stretched (it left a gap inside it). A plain
     * full-width block passes the width straight through, which is all this
     * wrapper is for.
     *
     * Custom triggers also get `h-full`: they center their content against the
     * consumer's fixed-height container (e.g. F0PhoneInput's country trigger),
     * and this box must pass that height through like it passes the width.
     */
    const box = (
      <div
        className={cn(
          "w-full min-w-0",
          !!children && "h-full",
          // Over the open dropdown's click blocker, or the caret could never
          // be moved once the list is open.
          inlineSearch && openLocal && "relative z-50"
        )}
      >
        {trigger}
      </div>
    )

    /**
     * Always mounted, empty description and all: wrapping the trigger only once
     * there was something to say remounted it on the first selection, dropping
     * its focus mid-interaction. An empty tooltip opens nothing.
     */
    return (
      <TooltipInternal
        label={hideLabel ? label : undefined}
        // It would cover the list the user is typing to see.
        description={inlineSearch && openLocal ? "" : selectedTooltipText}
      >
        {box}
      </TooltipInternal>
    )
  }

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

  const triggerWithContent = (
    <SelectPrimitive {...selectPrimitiveProps}>
      {variant === "inline" ? (
        <InlineSelectTrigger
          ref={composedTriggerRef}
          label={label}
          placeholder={placeholder}
          selection={getDisplayItemsForSelection}
          hasValue={!!localValue[0]}
        />
      ) : (
        <SelectTrigger
          ref={composedTriggerRef}
          asChild
          // Set here: the primitive's own `none` is what reaches the input
          // otherwise.
          aria-autocomplete={inlineSearch ? "list" : undefined}
        >
          {children ? (
            <div
              className="flex h-full w-full items-center justify-between"
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
                inlineSearch
                  ? searchDraft
                  : multiple
                    ? selectedCount.toString()
                    : (localValue[0] ?? undefined)
              }
              isEmpty={(value) =>
                inlineSearch
                  ? // The placeholder follows the text; `canClear` below
                    // answers what can be cleared.
                    !value
                  : multiple
                    ? !value || +(value ?? 0) === 0
                    : !value
              }
              canClear={inlineSearch ? hasSelection : undefined}
              onChange={inlineSearch ? handleSearchDraftChange : undefined}
              onBlur={inlineSearch ? handleSearchBlur : undefined}
              // The button clears the selection and `onClear` below puts the
              // field back; the chrome must not also empty the text through
              // the change handler, or the clear would count as an edit.
              clearKeepsText={inlineSearch}
              aria-activedescendant={
                // The only way to announce the active option while the caret
                // stays in the field.
                inlineSearch && openLocal && activeValue
                  ? optionIdFor(activeValue)
                  : undefined
              }
              aria-describedby={
                // Only while the node it points at is rendered.
                inlineSearch && multiple && hasSelection && !searchDraft
                  ? selectionDescriptionId
                  : undefined
              }
              inputRef={inlineSearch ? searchInputRef : undefined}
              valueSlot={
                inlineSearch && multiple && hasSelection ? (
                  <span
                    id={selectionDescriptionId}
                    // accname reads a described-by node even hidden; visible
                    // it would say the same thing twice.
                    aria-hidden="true"
                    className="contents"
                  >
                    {selectedItemsNode}
                  </span>
                ) : undefined
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
              placeholder={
                // The field's own placeholder wins; the search one stands in.
                (inlineSearch
                  ? placeholder || searchBoxPlaceholder || i18n.toc.search
                  : placeholder) || ""
              }
              disabled={disabled}
              clearable={clearable}
              size={effectiveSize}
              loadingIndicator={{
                asOverlay: true,
                offset: 34,
              }}
              loading={isInitialLoading || loading || isLoading}
              // Never on the search field: a native submit would post the
              // query.
              name={inlineSearch ? undefined : name}
              onClickContent={(event) => {
                if (inlineSearch) {
                  /**
                   * Only a click on the arrow toggles: clicking into the field
                   * moves the caret. The arrow stays a glyph because a second
                   * target inside a 32px field violates target-size.
                   */
                  const onArrow =
                    event.target instanceof Node &&
                    !!arrowRef.current?.contains(event.target)
                  if (onArrow) {
                    handleChangeOpenLocal(!openLocal)
                    focusSearchInput()
                    return
                  }
                  if (!openLocal) {
                    handleChangeOpenLocal(true)
                  }
                  focusSearchInput()
                  return
                }
                handleChangeOpenLocal(!openLocal)
              }}
              append={
                <Arrow
                  ref={arrowRef}
                  open={openLocal}
                  disabled={disabled}
                  size={effectiveSize}
                />
              }
            >
              {inlineSearch ? (
                <input
                  type="text"
                  autoComplete="off"
                  // On the element: the field chrome does not clone handlers.
                  onKeyDown={handleSearchKeyDown}
                  className="w-full shrink cursor-text bg-transparent placeholder:-z-10 disabled:cursor-not-allowed"
                />
              ) : (
                <button
                  className="flex w-full items-center justify-between"
                  aria-label={label || placeholder}
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  {hasSelection && selectedItemsNode}
                </button>
              )}
            </F0InputField>
          )}
        </SelectTrigger>
      )}
      {openLocal && (
        <ActiveOptionContext.Provider
          value={
            inlineSearch
              ? { value: activeValue, setActive: setActiveValue }
              : null
          }
        >
          {selectContent}
        </ActiveOptionContext.Provider>
      )}
    </SelectPrimitive>
  )

  return (
    <DataTestIdWrapper dataTestId={dataTestId}>
      {variant === "inline"
        ? triggerWithContent
        : withTriggerTooltip(triggerWithContent)}
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
