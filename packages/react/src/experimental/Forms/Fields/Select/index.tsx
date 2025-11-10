import {
  BaseFetchOptions,
  BaseResponse,
  DataSourceDefinition,
  FiltersDefinition,
  getDataSourcePaginationType,
  GroupingDefinition,
  PaginatedDataAdapter,
  PromiseOrObservable,
  RecordType,
  SortingsDefinition,
  useData,
  useDataSource,
  useGroups,
  WithGroupId,
} from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { toArray } from "@/lib/toArray"
import { GroupHeader } from "@/ui/GroupHeader/index"
import { InputField, InputFieldProps } from "@/ui/InputField"
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
import { SelectValue } from "./components/SelectedValue"
import { SelectItem } from "./components/SelectItem"
import { Action, SelectBottomActions } from "./SelectBottomActions"
import { SelectTopActions } from "./SelectTopActions"
import type { SelectItemObject, SelectItemProps } from "./types"
export * from "./types"

// Helper type to resolve the actual record type
export type ResolvedRecordType<R> = R extends RecordType ? R : RecordType

/**
 * Select component for choosing from a list of options.
 *
 * @template T - The type of the emitted  value
 * @template R - The type of the record/item data (used with data source)
 *
 */
export type SelectProps<T extends string, R = unknown> = {
  onChangeSelectedOption?: (
    option: SelectItemObject<T, ResolvedRecordType<R>> | undefined
  ) => void
  children?: React.ReactNode
  open?: boolean
  showSearchBox?: boolean
  searchBoxPlaceholder?: string
  onSearchChange?: (value: string) => void
  searchValue?: string
  onOpenChange?: (open: boolean) => void
  searchEmptyMessage?: string
  className?: string
  selectContentClassName?: string
  actions?: Action[]
} & (
  | {
      multiple?: false
      value?: T
      defaultItem?: SelectItemObject<T, ResolvedRecordType<R>>
      onChange: (
        value: T,
        originalItem?: ResolvedRecordType<R>,
        option?: SelectItemObject<T, ResolvedRecordType<R>>
      ) => void
    }
  | {
      multiple: true
      value?: T[]
      defaultItem?: SelectItemObject<T, ResolvedRecordType<R>>[]
      onChange: (
        value: T[],
        originalItems?: ResolvedRecordType<R>[],
        options?: SelectItemObject<T, ResolvedRecordType<R>>[]
      ) => void
    }
) &
  (
    | {
        source: DataSourceDefinition<
          ResolvedRecordType<R>,
          FiltersDefinition,
          SortingsDefinition,
          GroupingDefinition<ResolvedRecordType<R>>
        >
        mapOptions: (
          item: ResolvedRecordType<R>
        ) => SelectItemProps<T, ResolvedRecordType<R>>
        options?: never
      }
    | {
        source?: never
        mapOptions?: never
        searchFn?: (
          option: SelectItemProps<T, unknown>,
          search?: string
        ) => boolean | undefined
        options: SelectItemProps<T, unknown>[]
      }
  ) &
  Pick<
    InputFieldProps<T>,
    | "required"
    | "loading"
    | "hideLabel"
    | "clearable"
    | "labelIcon"
    | "size"
    | "label"
    | "icon"
    | "placeholder"
    | "disabled"
    | "name"
    | "error"
    | "status"
    | "hint"
  >

const defaultSearchFn = (option: SelectItemProps<string>, search?: string) => {
  return (
    option.type === "separator" ||
    !search ||
    option.label.toLowerCase().includes(search.toLowerCase())
  )
}

/**
 * Converts an array of values to a single value or an array of values depending on the multiple prop
 * @param items - The array of values to convert
 * @param multiple - Whether the select is multiple
 * @returns The single value or the array of values
 */
const toArrayOrSingle = <T, M extends boolean | undefined>(
  items: T[],
  multiple: M
): M extends true ? T[] : T | undefined => {
  return (multiple ? items : (items[0] ?? undefined)) as M extends true
    ? T[]
    : T | undefined
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
  type Value = T extends string ? string : string[]

  const [openLocal, setOpenLocal] = useState(open)

  const defaultItems = toArray(props.defaultItem).filter(
    (item): item is SelectItemObject<T, ResolvedRecordType<R>> =>
      item !== undefined
  )

  const defaultValues = useMemo(
    () => defaultItems.map((item) => item.value),
    [defaultItems]
  )

  const [localValue, setLocalValue] = useState(toArray(value) || defaultValues)

  useEffect(() => {
    if (!isEqual(toArray(value), localValue)) {
      setLocalValue(toArray(value) || defaultValues)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, defaultItems])

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

  const [selectedOptions, setSelectedOptions] = useState<
    SelectItemObject<T, ActualRecordType>[]
  >([])

  /**
   * Finds an option in the data records by value and returns the mapped option
   * @param value - The value to find
   * @returns The option if found, undefined otherwise
   */
  const findOptionsByValue = useCallback(
    (
      values: (string | T)[] | undefined
    ): SelectItemObject<T, ActualRecordType>[] => {
      if (value === undefined) {
        return []
      }

      if (values === defaultValues) {
        return defaultItems
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

  useDeepCompareEffect(() => {
    const foundOptions = findOptionsByValue(localValue)

    // onChangeSelectedOption?.(toArrayOrSingle(foundOptions, multiple))
    setSelectedOptions(foundOptions)
  }, [localValue, multiple])

  const onSearchChangeLocal = useCallback(
    (value: string) => {
      setCurrentSearch(value)
      onSearchChange?.(value)
    },
    [setCurrentSearch, onSearchChange]
  )

  const handleLocalValueChange = (changedValue: string[] | undefined) => {
    // Resets the search value when the option is selected
    setCurrentSearch(undefined)
    setLocalValue(changedValue as T[])

    const foundOptions = findOptionsByValue(changedValue)

    onChange?.(
      toArrayOrSingle(
        foundOptions.map((option) => option.value),
        multiple
      ),
      toArrayOrSingle(
        foundOptions.map((option) => option.item),
        multiple
      ),
      toArrayOrSingle(foundOptions, multiple)
    )
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

  return (
    <>
      <SelectPrimitive
        onValueChange={handleLocalValueChange}
        // value={
        //   localValue !== undefined && localValue !== null
        //     ? toArrayOrSingle(localValue, multiple)
        //     : undefined
        // }
        disabled={disabled}
        open={openLocal}
        multiple={multiple}
        onOpenChange={handleChangeOpenLocal}
        {...props}
      >
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
              // value={localValue as string}
              // onChange={(value) => handleLocalValueChange(value)}
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
                {selectedOptions && (
                  <SelectValue
                    multiple={multiple}
                    selection={selectedOptions}
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
