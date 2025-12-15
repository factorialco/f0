import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"

import { useGroups } from "@/hooks/datasource/useGroups"
import { GroupHeader } from "@/ui/GroupHeader/GroupHeader"

import { useDataCollectionData } from "@/experimental/OneDataCollection/hooks/useDataCollectionData"
import { useInfiniteScrollPagination } from "@/experimental/OneDataCollection/hooks/useInfiniteScrollPagination"
import {
  isInfiniteScrollPagination,
  RecordType,
  SortingsDefinition,
  useSelectable,
} from "@/hooks/datasource"
import { useDebounceBoolean } from "@/lib/useDebounceBoolean"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import { useEffect } from "react"
import type { FiltersDefinition } from "../../../../../components/OneFilterPicker/types"
import { PagesPagination } from "../../../components/PagesPagination"
import { ItemActionsDefinition } from "../../../item-actions"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps, GroupingDefinition } from "../../../types"
import { ListGroup } from "./components/ListGroup"
import { ListSkeleton } from "./components/ListSkeleton"
import { ListVisualizationOptions } from "./types"

/**
 * Group List: Renders the list for a group
 */
export type ListCollectionProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = CollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  ListVisualizationOptions<Record, Filters, Sortings>
>

export const ListCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  fields,
  itemDefinition,
  source,
  onSelectItems,
  onLoadData,
  onLoadError,
  tmpFullWidth,
}: ListCollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  const {
    data,
    paginationInfo,
    setPage,
    isInitialLoading,
    isLoadingMore,
    loadMore,
  } = useDataCollectionData<
    Record,
    Filters,
    Sortings,
    Summaries,
    NavigationFilters,
    Grouping
  >(source, {
    onError: (error) => {
      onLoadError(error)
    },
  })

  useEffect(() => {
    onLoadData({
      totalItems: paginationInfo?.total || data.records.length,
      filters: source.currentFilters,
      search: source.currentSearch,
      isInitialLoading,
      data: data.records,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps --  we don't want to re-run this effect when the filters change, just when the data changes
  }, [paginationInfo?.total, data.records])

  const { isLoading } = source

  // Infinite scroll pagination
  const { loadingIndicatorRef } = useInfiniteScrollPagination(
    paginationInfo,
    isLoading,
    isLoadingMore,
    loadMore
  )

  /**
   * Item selection
   */
  const {
    selectedItems,
    groupAllSelectedStatus,
    handleSelectItemChange,
    handleSelectGroupChange,
  } = useSelectable({
    data,
    paginationInfo,
    source,
    onSelectItems,
    selectionMode: "multi",
    selectedState: source.defaultSelectedItems,
  })

  /*
   * Groups
   */
  const collapsible = source.grouping?.collapsible
  const defaultOpenGroups = source.grouping?.defaultOpenGroups
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : [],
    defaultOpenGroups
  )

  const showInitialLoading = useDebounceBoolean({
    value: isInitialLoading,
    delay: 100,
  })

  if (showInitialLoading) {
    return (
      <ListSkeleton
        source={source}
        fields={fields}
        count={30}
        isInitialLoading
      />
    )
  }

  // Enforce that sorting is only used when sortings are defined
  if (!source.sortings) {
    fields.forEach((field) => {
      if (field.sorting) {
        console.warn(
          "Sorting is defined on a property but no sortings are provided in the data source"
        )
      }
    })
  }

  const showFullscreenLoading =
    isInitialLoading ||
    (isLoading && source.dataAdapter.paginationType === "pages")

  return (
    <div
      className={cn(
        "flex max-h-full min-h-0 flex-1 flex-col gap-4 py-2",
        tmpFullWidth && "px-0"
      )}
    >
      <div
        className={cn(
          "flex min-h-0 flex-1 flex-col gap-2",
          showFullscreenLoading && "select-none opacity-50 transition-opacity"
        )}
        aria-live={showFullscreenLoading ? "polite" : undefined}
        aria-busy={showFullscreenLoading ? "true" : undefined}
      >
        <div className="min-h-0 flex-1 overflow-auto pb-3">
          {data.type === "grouped" &&
            data.groups.map((group, index) => {
              const itemCount = group.itemCount
              return (
                <div
                  className="flex flex-col gap-0 pt-2 first:pt-0"
                  key={`group-header-${group.key}`}
                >
                  <GroupHeader
                    key={`group-header-${group.key}`}
                    className="cursor-pointer select-none rounded-md px-3.5 py-3 transition-colors hover:bg-f1-background-hover"
                    selectable={!!source.selectable}
                    select={
                      groupAllSelectedStatus[group.key]?.checked
                        ? true
                        : groupAllSelectedStatus[group.key]?.indeterminate
                          ? "indeterminate"
                          : false
                    }
                    onSelectChange={(checked) =>
                      handleSelectGroupChange(group, checked)
                    }
                    showOpenChange={collapsible}
                    label={group.label}
                    itemCount={itemCount}
                    open={openGroups[group.key]}
                    onOpenChange={(open) => setGroupOpen(group.key, open)}
                  />
                  <AnimatePresence>
                    {(!collapsible || openGroups[group.key]) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                        className="mt-0.5"
                      >
                        <ListGroup
                          key={`list-group-${group.key}`}
                          source={source}
                          items={group.records}
                          selectedItems={selectedItems}
                          handleSelectItemChange={handleSelectItemChange}
                          fields={fields}
                          itemDefinition={itemDefinition}
                          isLoadingMore={
                            isLoadingMore && index === data.groups.length - 1
                          }
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          {data?.type === "flat" && (
            <ListGroup
              source={source}
              items={data.records}
              selectedItems={selectedItems}
              handleSelectItemChange={handleSelectItemChange}
              fields={fields}
              itemDefinition={itemDefinition}
              isLoadingMore={isLoadingMore}
            />
          )}
          {/* Show skeleton items when loading more data */}
          {isInfiniteScrollPagination(paginationInfo) && isLoadingMore && (
            <ListSkeleton source={source} fields={fields} count={5} />
          )}
          {isInfiniteScrollPagination(paginationInfo) &&
            paginationInfo.hasMore && (
              <div
                ref={loadingIndicatorRef}
                className="w-full"
                aria-hidden="true"
              />
            )}
        </div>
      </div>
      <PagesPagination paginationInfo={paginationInfo} setPage={setPage} />
    </div>
  )
}
