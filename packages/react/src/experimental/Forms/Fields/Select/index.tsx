import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { OneEllipsis } from "@/components/OneEllipsis"
import { F0TagRaw } from "@/components/tags/F0TagRaw"

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
import { cn } from "@/lib/utils"
import { GroupHeader } from "@/ui/GroupHeader/index"
import { InputField, InputFieldProps } from "@/ui/InputField"
import {
  SelectContent,
  SelectItem as SelectItemPrimitive,
  Select as SelectPrimitive,
  SelectSeparator,
  SelectTrigger,
  VirtualItem,
} from "@/ui/Select"
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { useDebounceCallback } from "usehooks-ts"
import { Arrow } from "./components/Arrow"
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
  onChange: (
    value: T,
    originalItem?: ResolvedRecordType<R>,
    option?: SelectItemObject<T, ResolvedRecordType<R>>
  ) => void
  onChangeSelectedOption?: (
    option: SelectItemObject<T, ResolvedRecordType<R>> | undefined
  ) => void
  value?: T
  defaultItem?: SelectItemObject<T, ResolvedRecordType<R>>
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
const SelectItem = <T extends string, R>({
  item,
}: {
  item: SelectItemObject<T, R>
}) => {
  return (
    <SelectItemPrimitive value={item.value}>
      <div className="flex w-full items-start gap-1.5">
        {item.avatar && <F0Avatar avatar={item.avatar} size="xs" />}
        {item.icon && (
          <div className="text-f1-icon">
            <F0Icon icon={item.icon} />
          </div>
        )}
        <div className="flex flex-1 flex-col">
          <span className="line-clamp-2 font-medium">{item.label}</span>
          {item.description && (
            <div className="line-clamp-2 text-f1-foreground-secondary">
              {item.description}
            </div>
          )}
        </div>
        {item.tag && (
          <div className="self-center">
            <F0TagRaw text={item.tag} />
          </div>
        )}
      </div>
    </SelectItemPrimitive>
  )
}

const SelectValue = forwardRef<
  HTMLDivElement,
  { item: SelectItemObject<string> }
>(function SelectValue({ item }, ref) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-1.5" ref={ref}>
      {item.icon && (
        <div className="h-5 shrink-0 text-f1-icon">
          <F0Icon icon={item.icon} />
        </div>
      )}
      <OneEllipsis tag="span">{item.label}</OneEllipsis>
    </div>
  )
})

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
    ...props
  }: SelectProps<T, R>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  type ActualRecordType = ResolvedRecordType<R>
  const searchInputRef = useRef<HTMLInputElement>(null)

  const [openLocal, setOpenLocal] = useState(open)

  const [localValue, setLocalValue] = useState(
    value || props.defaultItem?.value
  )

  useEffect(() => {
    if (value !== localValue) {
      setLocalValue(value || props.defaultItem?.value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, props.defaultItem])

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

  const [selectedOption, setSelectedOption] = useState<
    SelectItemObject<T, ActualRecordType> | undefined
  >(undefined)

  /**
   * Finds an option in the data records by value and returns the mapped option
   * @param value - The value to find
   * @returns The option if found, undefined otherwise
   */
  const findOption = useCallback(
    (
      value: string | T | undefined
    ): SelectItemObject<T, ActualRecordType> | undefined => {
      if (value === undefined) {
        return undefined
      }

      if (value === props.defaultItem?.value) {
        return props.defaultItem
      }

      for (const option of data.records) {
        const mappedOption = optionMapper(option)
        if (
          mappedOption.type !== "separator" &&
          String(mappedOption.value) === value
        ) {
          return mappedOption
        }
      }
      return undefined
    },
    [data.records, optionMapper, props.defaultItem]
  )

  useEffect(() => {
    const foundOption = findOption(localValue)

    onChangeSelectedOption?.(foundOption)
    setSelectedOption(foundOption)
  }, [
    data.records,
    localValue,
    optionMapper,
    findOption,
    onChangeSelectedOption,
  ])

  useEffect(() => {
    if (open) {
      searchInputRef.current?.focus()
    }
  }, [open])

  const onSearchChangeLocal = useCallback(
    (value: string) => {
      setCurrentSearch(value)
      onSearchChange?.(value)
    },
    [setCurrentSearch, onSearchChange]
  )

  const handleLocalValueChange = (changedValue: string | undefined) => {
    // Resets the search value when the option is selected
    setCurrentSearch(undefined)
    setLocalValue(changedValue as T)

    const foundOption = findOption(changedValue)

    onChange?.(changedValue as T, foundOption?.item, foundOption)
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

  const isLoadingOrLoadingMore = loading || isLoading || isLoadingMore

  const loadingFocusInterval = useRef<NodeJS.Timeout | null>(null)
  const clearLoadingFocusInterval = useCallback(() => {
    if (loadingFocusInterval.current) {
      clearInterval(loadingFocusInterval.current)
      loadingFocusInterval.current = null
    }
  }, [loadingFocusInterval])

  // Focus the search input when the data is loaded or loading

  useEffect(() => {
    if (!openLocal) {
      clearLoadingFocusInterval()
      return
    }

    requestAnimationFrame(() => {
      searchInputRef.current?.focus()
    })

    // When is loading we need to focus the search repeatedly until the data is loaded
    if (isLoadingOrLoadingMore && !loadingFocusInterval.current) {
      loadingFocusInterval.current = setInterval(() => {
        searchInputRef.current?.focus()
      }, 100)
    } else if (!isLoadingOrLoadingMore && loadingFocusInterval.current) {
      clearLoadingFocusInterval()
    }
  }, [data, isLoadingOrLoadingMore, openLocal, clearLoadingFocusInterval])

  useEffect(() => {
    setInterval(() => {
      searchInputRef.current?.focus()
    }, 100)
  }, [openLocal])

  const i18n = useI18n()

  return (
    <>
      <SelectPrimitive
        onValueChange={handleLocalValueChange}
        value={
          localValue !== undefined && localValue !== null
            ? String(localValue)
            : undefined
        }
        disabled={disabled}
        open={openLocal}
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
              value={localValue as string}
              onChange={(value) => handleLocalValueChange(value)}
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
                <Arrow
                  open={openLocal}
                  disabled={disabled}
                  size={size}
                  className={cn(size === "sm" ? "" : "-translate-y-px")}
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
                {selectedOption && <SelectValue item={selectedOption} />}
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
                searchInputRef={searchInputRef}
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
