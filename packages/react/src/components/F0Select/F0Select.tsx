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

import { F0DialogContext } from "@/components/F0Dialog"
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
import { useI18n } from "@/lib/providers/i18n"
import { toArray } from "@/lib/toArray"
import { cn } from "@/lib/utils"
import { GroupHeader } from "@/ui/GroupHeader/index"
import { InputField } from "@/ui/InputField"
import { InputMessages } from "@/ui/InputField/components/InputMessages"
import { Label } from "@/ui/InputField/components/Label"
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
    selectContentClassName,
    actions,
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
    handleSelectAll,
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
  })

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

  const onSearchChangeLocal = (value: string) => {
    setCurrentSearch(value)
    onSearchChange?.(value)
  }

  // Track whether the user has interacted with the selection
  const hasUserInteracted = useRef(false)
  const isFirstRender = useRef(true)

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
        onChangeSelectedOption?.(item.option, checked)
      }
    },
    [
      onChangeSelectedOption,
      itemsByValue,
      handleSelectItemChange,
      multiple,
      clearable,
      localValue,
    ]
  )

  // Mark user interaction when select all is used
  const handleSelectAllWithTracking = useCallback(
    (checked: boolean) => {
      hasUserInteracted.current = true
      handleSelectAll(checked)
    },
    [handleSelectAll]
  )

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
    if (!multiple && !openLocal) {
      setCurrentSearch(undefined)
    }

    const checkedItems = Array.from(selectedState.items.values() || []).filter(
      (item) => item.checked
    )

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
      const records = checkedItems
        .map((item) => item.item)
        .filter(
          (item): item is WithGroupId<ResolvedRecordType<R>> =>
            item !== undefined
        )
      const originalItems = records
        .map(extractOriginalItem)
        .filter((item): item is ResolvedRecordType<R> => item !== undefined)
      const options = records.map((item) => {
        return optionMapper(item) as F0SelectItemObject<
          T,
          ResolvedRecordType<R>
        >
      })

      // Use original option values to preserve the type (number vs string)
      // Only use stringified id as fallback if option is not available
      const values = checkedItems.map((item) => {
        if (item.item) {
          const option = optionMapper(item.item as ActualRecordType)
          return option.type !== "separator"
            ? (option.value as T)
            : (String(item.id) as T)
        }
        return String(item.id) as T
      })

      // Sync localValue with actual selection state (as strings for internal comparison)
      // This ensures the preview shows correct items after deselection
      // Use Set to ensure unique values and prevent duplicates
      setLocalValue(Array.from(new Set(values.map(String))))

      onChange?.(values, originalItems, options)
    } else {
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

      onChange?.(value as T, originalItem, option)
    }
  }, [selectedState])

  const debouncedHandleChangeOpenLocal = useDebounceCallback(
    (open: boolean) => {
      onOpenChange?.(open)
      setOpenLocal(open)
    },
    100
  )

  const handleChangeOpenLocal = (open: boolean) => {
    debouncedHandleChangeOpenLocal(open)
  }

  // Show apply button when in multiple selection, and not rendered as a list
  const showApplyButton = multiple && !asList

  const handleApply = useCallback(() => {
    handleChangeOpenLocal(false)
  }, [])

  // Track when filters panel is open to hide bottom actions
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const defaultOpenGroups = localSource.grouping?.defaultOpenGroups
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : [],
    defaultOpenGroups
  )

  const getItems = useCallback(
    (
      records: WithGroupId<ActualRecordType>[] | ActualRecordType[]
    ): VirtualItem[] => {
      return records.map((option, index) => {
        const mappedOption = optionMapper(option)
        return mappedOption.type === "separator"
          ? {
              height: 1,
              item: <SelectSeparator key={`separator-${index}`} />,
            }
          : {
              height: mappedOption.description ? 64 : 32,
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
    if (data.type === "grouped") {
      const items: VirtualItem[] = []
      data.groups.map((group) => {
        items.push({
          height: 30,
          item: (
            <GroupHeader
              label={group.label}
              itemCount={group.itemCount}
              onOpenChange={(open) => setGroupOpen(group.key, open)}
              open={openGroups[group.key]}
            />
          ),
        })
        items.push(...getItems(group.records))
      })
      return items
    }
    return getItems(data.records)
  }, [data.records, data.type, data.groups, getItems, openGroups, setGroupOpen])

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

  const selectContent = (
    <SelectContent
      items={items}
      taller={!!source?.filters}
      className={selectContentClassName}
      emptyMessage={searchEmptyMessage ?? i18n.select.noResults}
      bottom={
        !isFiltersOpen ? (
          <SelectBottomActions
            actions={actions}
            showApplyButton={showApplyButton}
            onApply={handleApply}
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
            onFiltersChange={localSource.setCurrentFilters}
            asList={asList}
            onFiltersOpenChange={setIsFiltersOpen}
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
              onDeselect={(value) => onItemCheckChange(value, false)}
              paddingTop={!showSearchBox && !localSource.filters}
            />
          )}
        </>
      }
      forceMinHeight={!!localSource.filters}
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
              status: error ? "error" : status?.type ? status?.type : "default",
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
    )
  }

  return (
    <>
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
            <InputField
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
              size={size}
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
                <Arrow open={openLocal} disabled={disabled} size={size} />
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
                    onDeselect={
                      multiple
                        ? (value) => onItemCheckChange(value, false)
                        : undefined
                    }
                  />
                )}
              </button>
            </InputField>
          )}
        </SelectTrigger>
        {openLocal && selectContent}
      </SelectPrimitive>
    </>
  )
})

export const F0Select = F0SelectComponent as <
  T extends string = string,
  R = unknown,
>(
  props: F0SelectProps<T, R> & { ref?: React.Ref<HTMLButtonElement> }
) => React.ReactElement
