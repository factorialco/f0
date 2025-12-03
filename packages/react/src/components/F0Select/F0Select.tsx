import { OneModalContext } from "@/experimental/Modals/OneModal/OneModalProvider"
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
import { GroupHeader } from "@/ui/GroupHeader/index"
import { InputField } from "@/ui/InputField"
import {
  SelectContent,
  Select as SelectPrimitive,
  SelectSeparator,
  SelectTrigger,
  VirtualItem,
} from "@/ui/Select"
import { useDeepCompareEffect } from "@reactuses/core"
import { isEqual } from "lodash"
import {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { useDebounceCallback } from "usehooks-ts"
import { Arrow } from "./components/Arrow"
import { SelectAll } from "./components/SelectAll"
import { SelectBottomActions } from "./components/SelectBottomActions"
import { SelectedItems } from "./components/SelectedItems"
import { SelectItem } from "./components/SelectItem"
import { SelectTopActions } from "./components/SelectTopActions"
import type {
  F0SelectItemObject,
  F0SelectItemProps,
  F0SelectProps,
  ResolvedRecordType,
} from "./types"
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
    ...props
  }: F0SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  // If inside a OneModal and no portalContainer is provided, use the modal's container
  // This allows F0Select to work correctly inside modals without extra configuration
  const modalContext = useContext(OneModalContext)
  const effectivePortalContainer =
    portalContainer !== undefined
      ? portalContainer
      : modalContext.portalContainer

  // Extract onSelectItems from props for multiple selection
  const onSelectItems =
    "onSelectItems" in props ? props.onSelectItems : undefined
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
    () => defaultItems.map((item) => item.value),
    [defaultItems]
  )

  const [localValue, setLocalValue] = useState(
    toArray(value) ?? defaultValues ?? []
  )

  useEffect(() => {
    if (
      !isEqual(
        toArray(value) ?? [],
        localValue?.map((item) => String(item)) ?? []
      )
    ) {
      setLocalValue(toArray(value) ?? defaultValues ?? [])
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
      selectable: (item) => {
        if (!item) {
          return undefined
        }
        const mappedOption = optionMapper(item)
        return mappedOption.type !== "separator"
          ? mappedOption.value
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

  /**
   * Map of items from paginated data by their value.
   * Used for dropdown list and selection state.
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
        entries.push([
          mappedOption.value,
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

    for (const val of values) {
      const itemData = itemsByValue[val]
      items.set(val, {
        id: val,
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
  })

  /**
   * Get display items for the selection preview.
   * Uses localValue (the current value prop) to determine what to display.
   * Looks up items from paginated data or defaultItems.
   */
  const getDisplayItemsForSelection = useMemo(() => {
    const result: F0SelectItemObject<T, ResolvedRecordType<R>>[] = []

    for (const valueId of localValue) {
      // Try to get from paginated data first
      const fromData = itemsByValue[valueId]
      if (fromData) {
        result.push(fromData.option)
        continue
      }

      // Try defaultItems (pre-selected values provided by parent)
      const fromDefault = defaultItems.find((item) => item.value === valueId)
      if (fromDefault) {
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
      hasUserInteracted.current = true
      handleSelectItemChange(value, checked)

      // Only call onChangeSelectedOption if we have the item data
      const item = itemsByValue[value]
      if (item) {
        onChangeSelectedOption?.(item.option, checked)
      }
    },
    [onChangeSelectedOption, itemsByValue, handleSelectItemChange]
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

    // Only reset search in single select mode (dropdown closes after selection)
    // In multiple mode, user may want to continue selecting more items
    if (!multiple) {
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
      const values = checkedItems.map((item) => String(item.id) as T)

      // Sync localValue with actual selection state
      // This ensures the preview shows correct items after deselection
      setLocalValue(values)

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

      onChange?.(values, originalItems, options)
    } else {
      const selectedItem = checkedItems[0]
      const value = selectedItem ? (String(selectedItem.id) as T) : undefined

      // Sync localValue with actual selection state
      setLocalValue(value ? [value] : [])

      const record = selectedItem?.item as ActualRecordType | undefined
      const originalItem = extractOriginalItem(record)
      const option = record
        ? (optionMapper(record) as F0SelectItemObject<T, ResolvedRecordType<R>>)
        : undefined

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
              value: mappedOption.value,
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
      } as const)
    : ({
        ...commonProps,
        // Use empty string instead of undefined to maintain controlled component state
        value: selectedItemsValues[0] ?? "",
        multiple: false as const,
      } as const)

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
                offset: 26,
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
                  />
                )}
              </button>
            </InputField>
          )}
        </SelectTrigger>
        {openLocal && (
          <SelectContent
            items={items}
            taller={!!source?.filters}
            className={selectContentClassName}
            emptyMessage={searchEmptyMessage ?? i18n.select.noResults}
            bottom={<SelectBottomActions actions={actions} />}
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
                />
                {multiple && (
                  <SelectAll
                    selectedCount={selectionMeta.selectedItemsCount}
                    indeterminate={
                      selectedState.allSelected === "indeterminate" ||
                      (selectedState.allSelected === false &&
                        selectionMeta.selectedItemsCount > 0)
                    }
                    value={!!selectedState.allSelected}
                    onChange={handleSelectAllWithTracking}
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
        )}
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
