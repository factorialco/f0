import {
  BaseFetchOptions,
  BaseResponse,
  FiltersDefinition,
  getDataSourcePaginationType,
  PaginatedDataAdapter,
  PromiseOrObservable,
  useData,
  useDataSource,
  useGroups,
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
import { isEqual } from "lodash"
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react"
import { useDebounceCallback } from "usehooks-ts"
import { Arrow } from "./components/Arrow"
import { SelectedItems } from "./components/SelectedItems"
import { SelectItem } from "./components/SelectItem"
import { SelectBottomActions } from "./SelectBottomActions"
import { SelectTopActions } from "./SelectTopActions"
import type {
  ResolvedRecordType,
  SelectItemObject,
  SelectItemProps,
  SelectProps,
} from "./types"
export * from "./types"

const defaultSearchFn = (option: SelectItemProps<string>, search?: string) => {
  return (
    option.type === "separator" ||
    !search ||
    option.label.toLowerCase().includes(search.toLowerCase())
  )
}

const SelectComponent = forwardRef(function Select<
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
  }: SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  type ActualRecordType = ResolvedRecordType<R>

  const [openLocal, setOpenLocal] = useState(open)

  const defaultItems = toArray(props.defaultItem).filter(
    (item): item is SelectItemObject<T, ResolvedRecordType<R>> =>
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
    (item: ActualRecordType): SelectItemProps<T, ActualRecordType> => {
      if (source) {
        if (!mapOptions) {
          throw new Error("mapOptions is required when using a source")
        }
        return mapOptions(item)
      }
      // At this point, we are sure that options is an array of SelectItemProps<T, ActualRecordType>
      return item as unknown as SelectItemProps<T, ActualRecordType>
    },
    [mapOptions, source]
  )

  const { data, isInitialLoading, loadMore, isLoadingMore, isLoading } =
    useData<ActualRecordType>(localSource)

  const { currentSearch, setCurrentSearch } = localSource

  /**
   * Finds an option in the data records by value and returns the mapped option
   * @param value - The value to find
   * @returns The option if found, undefined otherwise
   */
  const findOptionsByValue = useCallback(
    (
      values: (string | T)[] | undefined
    ): SelectItemObject<T, ActualRecordType>[] => {
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

  const selectedItems = useMemo(() => {
    return findOptionsByValue(localValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want to re-run this effect when the localValue changes
  }, [localValue, data.records])

  const onSearchChangeLocal = useCallback(
    (value: string) => {
      setCurrentSearch(value)
      onSearchChange?.(value)
    },
    [setCurrentSearch, onSearchChange]
  )

  const onItemCheckChange = useCallback(
    (value: string, checked: boolean) => {
      const foundOption = findOptionsByValue([value])[0]
      if (foundOption) {
        onChangeSelectedOption?.(foundOption, checked)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we only want to re-run this effect when the onChangeSelectedOption changes
    [onChangeSelectedOption]
  )

  const handleLocalValueChange = (
    changedValue: string | string[] | undefined
  ) => {
    // Resets the search value when the option is selected
    setCurrentSearch(undefined)
    setLocalValue((toArray(changedValue) ?? []) as T[])

    const foundOptions = findOptionsByValue(toArray(changedValue) ?? [])

    // Typescript can not infer the type of the onChange callback when it has generics, so we need to cast it to the correct type
    if (multiple) {
      const values = foundOptions.map((option) => option.value)
      const items = foundOptions
        .map((option) => option.item)
        .filter((item): item is ResolvedRecordType<R> => item !== undefined)

      onChange?.(values, items, foundOptions)
    } else {
      const value = foundOptions[0]?.value
      const item = foundOptions[0]?.item
      const option = foundOptions[0]

      onChange?.(value, item, option)
    }
  }

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

  const commonProps = {
    ...props,
    onItemCheckChange,
    disabled,
    open: openLocal,
    onOpenChange: handleChangeOpenLocal,
    onValueChange: handleLocalValueChange,
  }

  const selectPrimitiveProps = multiple
    ? ({
        ...commonProps,
        value: localValue as string[],
        multiple: true as const,
      } as const)
    : ({
        ...commonProps,
        value: localValue[0] as string | undefined,
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
              value={localValue.join(",")}
              isEmpty={(value) => value?.length === 0}
              onClear={() => handleLocalValueChange([])}
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
                {selectedItems && (
                  <SelectedItems
                    multiple={multiple}
                    selection={selectedItems}
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

export const Select = SelectComponent as <
  T extends string = string,
  R = unknown,
>(
  props: SelectProps<T, R> & { ref?: React.Ref<HTMLButtonElement> }
) => React.ReactElement
