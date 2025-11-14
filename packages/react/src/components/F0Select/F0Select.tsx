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
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react"
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
    ...props
  }: F0SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  type ActualRecordType = ResolvedRecordType<R>

  const [openLocal, setOpenLocal] = useState(open)

  const defaultItems = toArray(props.defaultItem).filter(
    (item): item is F0SelectItemObject<T, ResolvedRecordType<R>> =>
      item !== undefined
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

  const itemsByValue = useMemo(() => {
    return Object.fromEntries(
      data.records
        .map((record) => {
          const mappedOption = optionMapper(record)
          return mappedOption.type === "separator"
            ? [undefined]
            : [mappedOption.value, { item: record, option: mappedOption }]
        })
        .filter(([value]) => value !== undefined)
    )
  }, [data, optionMapper])

  /**
   * Finds an option in the data records by value and returns the mapped option
   * @param value - The value to find
   * @returns The option if found, undefined otherwise
   */
  const findOptionsByValue = useCallback(
    (
      values: (string | T)[] | undefined
    ): F0SelectItemObject<T, ActualRecordType>[] => {
      if (values === undefined) {
        return []
      }

      if (isEqual(values, defaultValues)) {
        return defaultItems
      }

      const res = []
      for (const option of data.records) {
        const mappedOption = optionMapper(option)

        if (
          mappedOption.type !== "separator" &&
          values?.includes(String(mappedOption.value))
        ) {
          res.push(mappedOption)
        }
      }
      return res
    },
    [data.records, optionMapper, defaultItems, defaultValues]
  )

  const onSelectItems = useCallback(
    (items: SelectedItemsState<ActualRecordType>) => {
      console.log("onSelectItems", items)
    },
    []
  )

  // const selectedState = useMemo(() => {
  //   console.log("selectedState", localValue)
  //   return {
  //     allSelected: false,
  //     items: localValue.map((value) => ({ id: value, checked: true })),
  //   }
  // }, [localValue])

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
    onSelectItems,
  })

  const onSearchChangeLocal = useCallback(
    (value: string) => {
      setCurrentSearch(value)
      onSearchChange?.(value)
    },
    [setCurrentSearch, onSearchChange]
  )

  const onItemCheckChange = useCallback(
    (value: string, checked: boolean) => {
      const item = itemsByValue[value]
      if (!item) {
        return
      }
      handleSelectItemChange(value, checked)
      onChangeSelectedOption?.(item.option, checked)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want to re-run this effect when the onChangeSelectedOption changes
    [onChangeSelectedOption, itemsByValue]
  )

  /**
   * Emit the value change. The type depends on the multiple prop and async.
   */
  useDeepCompareEffect(() => {
    const checkedItems = selectionMeta.checkedItems.filter(
      (item) => item !== undefined
    )
    console.log("selectionMeta", selectionMeta)
    console.log("checkedItems", checkedItems)

    const checkedItemsValues = checkedItems.map(
      (item) => String(item.value) as T
    )
    const checkedItemsOriginalItems = checkedItems.map((item) => item)
    const checkedItemsOptions = checkedItems.map((item) => {
      return optionMapper(item) as F0SelectItemObject<T, ResolvedRecordType<R>>
    })
    if (multiple) {
      // Non paginated
      onChange?.(
        checkedItemsValues,
        checkedItemsOriginalItems,
        checkedItemsOptions
      )
    } else {
      onChange?.(
        checkedItemsValues[0],
        checkedItemsOriginalItems[0],
        checkedItemsOptions[0]
      )
    }
  }, [selectionMeta.checkedItems])

  // Handle change

  useDeepCompareEffect(() => {
    // Resets the search value when the option is selected
    setCurrentSearch(undefined)

    console.log("selectedState", selectedState)
    const checkedItems = Array.from(selectedState.items.values() || []).filter(
      (item) => item.checked
    )
    // Typescript can not infer the type of the onChange callback when it has generics, so we need to cast it to the correct type
    if (multiple) {
      const values = checkedItems.map((item) => String(item.id) as T)
      const items = checkedItems
        .map((item) => item.item)
        .filter(
          (item): item is WithGroupId<ResolvedRecordType<R>> =>
            item !== undefined
        )
      const options = items.map((item) => {
        return optionMapper(item) as F0SelectItemObject<
          T,
          ResolvedRecordType<R>
        >
      })

      onChange?.(values, items, options)
    } else {
      const selectedItem = checkedItems[0]
      const value = String(selectedItem?.id) as T
      const item = selectedItem?.item as ResolvedRecordType<R> | undefined
      const option =
        selectedItem?.item &&
        (optionMapper(selectedItem.item) as F0SelectItemObject<
          T,
          ResolvedRecordType<R>
        >)
      console.log("selectedItem", selectedItem)
      onChange?.(value, item, option)
    }
  }, [selectedState])

  // const handleLocalValueChange = (
  //   changedValue: string | string[] | undefined
  // ) => {
  //   // Resets the search value when the option is selected
  //   setCurrentSearch(undefined)
  //   setLocalValue((toArray(changedValue) ?? []) as T[])

  //   console.log("changedValue", changedValue)
  //   const foundOptions = findOptionsByValue(toArray(changedValue) ?? [])

  //   // Typescript can not infer the type of the onChange callback when it has generics, so we need to cast it to the correct type
  //   if (multiple) {
  //     const values = foundOptions.map((option) => option.value)
  //     const items = foundOptions
  //       .map((option) => option.item)
  //       .filter((item): item is ResolvedRecordType<R> => item !== undefined)

  //     onChange?.(values, items, foundOptions)
  //   } else {
  //     console.log("foundOptions", foundOptions)
  //     const value = foundOptions[0]?.value
  //     const item = foundOptions[0]?.item
  //     const option = foundOptions[0]

  //     onChange?.(value, item, option)
  //   }
  // }

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

  // const collapsible = localSource.grouping?.collapsible
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
              // showOpenChange={collapsible}
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

  const selectedItemsValues = useMemo(() => {
    return Array.from(selectedState.items.values())
      .filter((item) => item.checked)
      .map((item) => String(item.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want to re-run this effect when the selectedState.items changes
  }, [selectedState.items])

  const commonProps = {
    ...props,
    onItemCheckChange,
    disabled,
    open: openLocal,
    onOpenChange: handleChangeOpenLocal,
    // onValueChange: handleLocalValueChange,
  }

  const selectPrimitiveProps = multiple
    ? ({
        ...commonProps,
        value: selectedItemsValues,
        //value: localValue as string[],
        multiple: true as const,
      } as const)
    : ({
        ...commonProps,
        //value: localValue[0] as string | undefined,
        value: selectedItemsValues[0],
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
              value={selectionMeta.selectedItemsCount.toString()}
              isEmpty={(value) => +(value ?? 0) === 0}
              onClear={() => clearSelection()}
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
                {selectionMeta.checkedItems && (
                  <SelectedItems
                    multiple={multiple}
                    selection={selectionMeta.checkedItems.map((item) => {
                      console.log("item ---------------->", item)
                      if (item?.item) {
                        return optionMapper(item) as F0SelectItemObject<
                          T,
                          ResolvedRecordType<R>
                        >
                      }
                      return {
                        value: "test" as T,
                        label: "test",
                        description: "test",
                      }
                    })}
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
                      selectedState.allSelected === "indeterminate"
                    }
                    value={!!selectedState.allSelected}
                    onChange={handleSelectAll}
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
