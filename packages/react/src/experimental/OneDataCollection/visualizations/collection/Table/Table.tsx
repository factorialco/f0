import { F0Checkbox } from "@/components/F0Checkbox"
import { GroupHeader } from "@/experimental/OneDataCollection/components/GroupHeader"
import { PagesPagination } from "@/experimental/OneDataCollection/components/PagesPagination"
import { useDataCollectionSettings } from "@/experimental/OneDataCollection/Settings/SettingsProvider"
import {
  OneTable,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/experimental/OneTable"
import {
  FiltersDefinition,
  getAnimationVariants,
  GroupingDefinition,
  isInfiniteScrollPagination,
  RecordType,
  SortingKey,
  SortingsDefinition,
  SortingsState,
  useGroups,
  useSelectable,
} from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton.tsx"
import { AnimatePresence, motion } from "motion/react"
import { Fragment, useEffect, useMemo, useState } from "react"
import { useDataCollectionData } from "../../../hooks/useDataCollectionData"
import { useInfiniteScrollPagination } from "../../../hooks/useInfiniteScrollPagination"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps } from "../../../types"
import { statusToChecked } from "../utils"
import { Row } from "./components/Row"
import { useColumns } from "./hooks/useColums"
import { TableVisualizationOptions } from "./types"
import { useSticky } from "./useSticky"
export * from "./settings/SettingsRenderer"

export const TableCollection = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>({
  columns: originalColumns,
  source,
  frozenColumns = 0,
  onSelectItems,
  onLoadData,
  onLoadError,
  allowColumnHiding,
  allowColumnReordering,
}: CollectionProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  TableVisualizationOptions<R, Filters, Sortings, Summaries>
>) => {
  const t = useI18n()
  // Created a motion component for the row
  const [MotionRow] = useState(() =>
    motion.create(
      Row<
        R,
        Filters,
        Sortings,
        Summaries,
        ItemActions,
        NavigationFilters,
        Grouping
      >
    )
  )

  const { settings } = useDataCollectionSettings()

  // Sorted and hidden columns
  const { columns } = useColumns(
    originalColumns,
    frozenColumns,
    settings.visualization?.table ?? {
      order: [],
      hidden: [],
    },
    allowColumnReordering,
    allowColumnHiding
  )

  const {
    data,
    paginationInfo,
    setPage,
    isInitialLoading,
    isLoadingMore,
    loadMore,
    summaries: summariesData,
  } = useDataCollectionData<
    R,
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

  const { currentSortings, setCurrentSortings, isLoading } = source

  // Infinite scroll pagination
  const { loadingIndicatorRef } = useInfiniteScrollPagination(
    paginationInfo,
    isLoading,
    isLoadingMore,
    loadMore
  )

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

  const frozenColumnsLeft = useMemo(() => frozenColumns, [frozenColumns])

  /**
   * Item selection
   */
  const {
    selectedItems,
    allSelectedStatus,
    groupAllSelectedStatus,
    handleSelectItemChange,
    handleSelectAll,
    handleSelectGroupChange,
  } = useSelectable(
    data,
    paginationInfo,
    source,
    onSelectItems,
    source.defaultSelectedItems
  )
  const summaryData = useMemo(() => {
    // Early return if no summaries configuration or summaries data is available

    if (!summariesData || !source.summaries) return null

    return {
      data: summariesData as R,
      sticky: true,
      label: source.summaries?.label,
    }
  }, [summariesData, source.summaries])

  /**
   * Determine the sort state of a column
   */
  const getColumnSortState = (
    columnSorting: SortingKey<Sortings> | undefined,
    sourceSortings: SortingsDefinition | undefined,
    currentSortings: SortingsState<Sortings>
  ): "asc" | "desc" | "none" | undefined => {
    if (!columnSorting || !sourceSortings) {
      return undefined
    }

    if (currentSortings === null) {
      return "none"
    }

    return currentSortings.field === columnSorting
      ? currentSortings.order
      : "none"
  }

  /**
   * Handle column sort click
   */
  const handleSortClick = (columnSorting: SortingKey<Sortings>) => {
    setCurrentSortings(() => {
      if (!currentSortings || currentSortings.field !== columnSorting) {
        return {
          field: columnSorting,
          order: "asc",
        }
      } else if (currentSortings.order === "asc") {
        return {
          field: columnSorting,
          order: "desc",
        }
      } else {
        return null
      }
    })
  }

  /*
   * Groups
   */

  const collapsible = source.grouping?.collapsible
  const defaultOpenGroups = source.grouping?.defaultOpenGroups
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : [],
    defaultOpenGroups
  )

  const skeletonColumns =
    columns.length + (source.itemActions ? 1 : 0) + (source.selectable ? 1 : 0)

  const { getStickyPosition, checkColumnWidth } = useSticky(
    frozenColumnsLeft,
    columns,
    !!source.selectable
  )

  /*
   * Initial loading
   */
  if (isInitialLoading) {
    return <OneTable.Skeleton columns={skeletonColumns} />
  }

  // Enforce that sorting is only used when sortings are defined
  if (!source.sortings) {
    columns.forEach((column) => {
      if (column.sorting) {
        console.warn(
          "Sorting is defined on a column but no sortings are provided in the data source"
        )
      }
    })
  }

  return (
    <div className="test flex h-full min-h-0 flex-col gap-4">
      <OneTable loading={isLoading}>
        <TableHeader sticky={true}>
          <TableRow>
            {source.selectable && (
              <TableHead
                width={checkColumnWidth}
                sticky={{ left: 0 }}
                align="right"
              >
                <div className="flex w-full items-center justify-end">
                  <F0Checkbox
                    checked={allSelectedStatus.checked}
                    indeterminate={allSelectedStatus.indeterminate}
                    onCheckedChange={handleSelectAll}
                    title="Select all"
                    hideLabel
                    disabled={data?.records.length === 0}
                  />
                </div>
              </TableHead>
            )}
            {columns.map(({ sorting, label, ...column }, index) => (
              <TableHead
                key={`table-head-${index}`}
                sortState={getColumnSortState(
                  sorting,
                  source.sortings,
                  currentSortings
                )}
                width={column.width}
                align={column.align}
                sticky={getStickyPosition(index)}
                {...column}
                // Needs to force hidden column includes hidden prop, that is the definition not the final state
                hidden={false}
                onSortClick={
                  sorting
                    ? () => {
                        if (!sorting) return
                        handleSortClick(sorting)
                      }
                    : undefined
                }
              >
                {label}
              </TableHead>
            ))}

            {source.itemActions && (
              <>
                <th></th>
                <TableHead
                  key="actions"
                  width={68}
                  hidden
                  sticky={{
                    right: 0,
                  }}
                  className="table-cell md:hidden"
                >
                  {t.collections.actions.actions}
                </TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.type === "grouped" &&
            data.groups.map((group, groupIndex) => {
              const itemCount = group.itemCount
              return (
                <Fragment key={`group-${group.key}`}>
                  <TableRow key={`group-header-${group.key}`} sticky>
                    <TableCell
                      sticky={{ left: 0 }}
                      colSpan={
                        (frozenColumnsLeft || 1) + (source.selectable ? 1 : 0)
                      }
                    >
                      <GroupHeader
                        className="px-3"
                        selectable={!!source.selectable}
                        select={statusToChecked(
                          groupAllSelectedStatus[group.key]
                        )}
                        onSelectChange={(checked) =>
                          handleSelectGroupChange(group, checked)
                        }
                        showOpenChange={collapsible}
                        label={group.label}
                        itemCount={itemCount}
                        open={openGroups[group.key]}
                        onOpenChange={(open) => setGroupOpen(group.key, open)}
                      />
                    </TableCell>
                    <TableCell
                      colSpan={
                        columns.length -
                        (frozenColumnsLeft || 1) +
                        (source.selectable ? 1 : 0)
                      }
                    >
                      &nbsp;
                    </TableCell>
                  </TableRow>

                  <AnimatePresence key={`group-animate-${groupIndex}`}>
                    {MotionRow &&
                      (!collapsible || openGroups[group.key]) &&
                      group.records.map((item, index) => {
                        return (
                          <MotionRow
                            variants={getAnimationVariants()}
                            initial={collapsible ? "hidden" : "visible"}
                            animate="visible"
                            exit="hidden"
                            custom={index}
                            key={`row-${groupIndex}-${index}`}
                            layout
                            source={source}
                            item={item}
                            index={index}
                            groupIndex={groupIndex}
                            onCheckedChange={(checked) =>
                              handleSelectItemChange(item, checked)
                            }
                            selectedItems={selectedItems}
                            columns={columns}
                            frozenColumnsLeft={frozenColumnsLeft}
                            checkColumnWidth={checkColumnWidth}
                          />
                        )
                      })}
                  </AnimatePresence>
                </Fragment>
              )
            })}
          {data?.type === "flat" &&
            data.records.map((item, index) => {
              return (
                <Row
                  key={`row-${index}`}
                  groupIndex={0}
                  source={source}
                  item={item}
                  index={index}
                  onCheckedChange={(checked) =>
                    handleSelectItemChange(item, checked)
                  }
                  selectedItems={selectedItems}
                  columns={columns}
                  frozenColumnsLeft={frozenColumnsLeft}
                  checkColumnWidth={checkColumnWidth}
                />
              )
            })}
          {paginationInfo?.type === "infinite-scroll" &&
            isLoadingMore &&
            Array.from({ length: 5 }).map((_, rowIndex) => (
              <TableRow key={`skeleton-row-${rowIndex}`}>
                {Array.from({ length: skeletonColumns }).map((_, colIndex) => (
                  <TableCell key={`skeleton-cell-${rowIndex}-${colIndex}`}>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          {isInfiniteScrollPagination(paginationInfo) &&
            paginationInfo.hasMore && (
              <tr>
                <td
                  colSpan={columns.length + (source.selectable ? 1 : 0) + 1}
                  ref={loadingIndicatorRef}
                  className="h-10"
                  aria-hidden="true"
                ></td>
              </tr>
            )}
        </TableBody>
        {/* TODO: maybe as new component? */}
        {summaryData && (
          <TableFooter>
            <TableRow
              className={cn(
                summaryData.sticky &&
                  "sticky bottom-0 z-10 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background",
                "font-medium"
              )}
            >
              {source.selectable && (
                <TableCell width={checkColumnWidth} sticky={{ left: 0 }}>
                  {summaryData.label && (
                    <div className="font-medium text-f1-foreground-secondary">
                      {summaryData.label}
                    </div>
                  )}
                </TableCell>
              )}
              {columns.map((column, cellIndex) => (
                <TableCell
                  key={`summary-${String(column.label)}`}
                  firstCell={cellIndex === 0}
                  width={column.width}
                  sticky={getStickyPosition(cellIndex)}
                >
                  {cellIndex === 0 &&
                  !source.selectable &&
                  summaryData.label ? (
                    <div className="font-medium text-f1-foreground-secondary">
                      {summaryData.label}
                    </div>
                  ) : (
                    <div
                      className={cn(
                        column.align === "right" ? "justify-end" : "",
                        "flex"
                      )}
                    >
                      {column.summary &&
                      source.summaries &&
                      source.summaries[column.summary]?.type === "sum" ? (
                        <div className="flex gap-1">
                          <span className="text-f1-foreground-secondary">
                            {t.collections.summaries.types.sum}
                          </span>
                          {`${summaryData.data[column.summary]}`}
                        </div>
                      ) : (
                        "-"
                      )}
                    </div>
                  )}
                </TableCell>
              ))}
              {source.itemActions && (
                <>
                  <th className="hidden md:table-cell"></th>
                  <TableCell
                    key="summary-actions"
                    width={68}
                    sticky={{
                      right: 0,
                    }}
                    className="table-cell md:hidden"
                  >
                    {""}
                  </TableCell>
                </>
              )}
            </TableRow>
          </TableFooter>
        )}
      </OneTable>
      <PagesPagination
        paginationInfo={paginationInfo}
        setPage={setPage}
        className="pb-4"
      />
    </div>
  )
}
