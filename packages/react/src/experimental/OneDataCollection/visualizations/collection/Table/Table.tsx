import { AnimatePresence, motion } from "motion/react"
import { Fragment, useEffect, useMemo, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
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
import { Add } from "@/icons/app"
import { cn } from "@/lib/utils"
import { GroupHeader } from "@/ui/GroupHeader/index"
import { Skeleton } from "@/ui/skeleton.tsx"

import type {
  TableCustomizationProps,
  TableVisualizationOptions,
} from "./types"

import { useDataCollectionData } from "../../../hooks/useDataCollectionData"
import { useInfiniteScrollPagination } from "../../../hooks/useInfiniteScrollPagination"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps } from "../../../types"
import { useAddRow } from "../EditableTable/context/AddRowContext"
import { statusToChecked } from "../utils"
import { Row } from "./components/Row"
import { useColumns } from "./hooks/useColums"
import { NestedDataProvider } from "./providers/NestedProvider"
import { useSticky } from "./useSticky"
export * from "./settings/SettingsRenderer"

const HighlightedCount = ({ text, count }: { text: string; count: number }) => {
  const countStr = String(count)
  const idx = text.indexOf(countStr)
  if (idx === -1) {
    return (
      <span className="font-me text-base font-medium text-f1-foreground-secondary">
        {text}
      </span>
    )
  }
  const before = text.slice(0, idx)
  const after = text.slice(idx + countStr.length)
  return (
    <span className="text-base font-medium text-f1-foreground-secondary">
      {before}
      <span className="font-semibold text-f1-foreground">{countStr}</span>
      {after}
    </span>
  )
}

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
  referenceRowType,
  rowWrapper: RowWrapper,
  cellRenderer,
  showItemActions: showItemActionsProp,
  visualizationSettings,
  fromVisualization = "table",
}: CollectionProps<
  R,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
  TableVisualizationOptions<R, Filters, Sortings, Summaries>
> &
  TableCustomizationProps<R, Sortings, Summaries>) => {
  const { t, ...i18n } = useI18n()
  const addRow = useAddRow()
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
    visualizationSettings ?? settings.visualization?.table,
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

  const showItemActions = showItemActionsProp !== false && !!source.itemActions

  const effectiveSource = useMemo(
    () =>
      showItemActionsProp === false
        ? ({
            ...source,
            itemActions: undefined,
          } as typeof source)
        : source,
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only recompute when source identity or showItemActions changes
    [source, showItemActionsProp]
  )

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
  const getRowKey = (item: R, index: number) => {
    if ("id" in item && item.id !== undefined && item.id !== null) {
      return `id:${String(item.id)}`
    }
    return `index:${String(index)}`
  }

  /**
   * Item selection
   */
  const {
    selectedItems,
    allSelectedStatus,
    groupAllSelectedStatus,
    handleSelectItemChange,
    handleSelectAll,
    handleSelectAllItems,
    handleSelectGroupChange,
  } = useSelectable({
    data,
    paginationInfo,
    source,
    onSelectItems,
    selectionMode: "multi",
    selectedState: source.defaultSelectedItems,
  })
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
    columns.length + (showItemActions ? 1 : 0) + (source.selectable ? 1 : 0)

  const { getStickyPosition, checkColumnWidth } = useSticky(
    frozenColumnsLeft,
    columns,
    !!source.selectable
  )

  const tableWithChildren = data?.records.some((item) =>
    source.itemsWithChildren?.(item)
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

  const hasSelection =
    allSelectedStatus.selectedCount > 0 || allSelectedStatus.checked

  const allOnPageSelected =
    !allSelectedStatus.checked &&
    allSelectedStatus.unselectedCount === 0 &&
    allSelectedStatus.selectedCount > 0

  const showSelectAllOption =
    !!source.allPagesSelection &&
    !allSelectedStatus.checked &&
    paginationInfo?.total !== undefined &&
    paginationInfo.total > allSelectedStatus.selectedCount

  const selectionHeaderColSpan = columns.length + (showItemActions ? 2 : 0)

  const selectedText =
    allSelectedStatus.selectedCount === 1
      ? i18n.status.selected.singular
      : i18n.status.selected.plural

  const TableWrapper = tableWithChildren ? NestedDataProvider : Fragment

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      <TableWrapper>
        <OneTable loading={isLoading}>
          <TableHeader sticky={true}>
            {hasSelection && source.selectable ? (
              <TableRow>
                <TableHead
                  width={checkColumnWidth}
                  sticky={{ left: 0 }}
                  align="left"
                >
                  <div className="ml-1.5 flex w-full items-center justify-start">
                    <F0Checkbox
                      checked={true}
                      indeterminate={
                        allSelectedStatus.indeterminate ||
                        (allSelectedStatus.selectedCount > 0 &&
                          !allSelectedStatus.checked)
                      }
                      onCheckedChange={handleSelectAll}
                      title={i18n.actions.selectAll}
                      hideLabel
                    />
                  </div>
                </TableHead>
                <th
                  colSpan={selectionHeaderColSpan}
                  className="h-11 border-0 border-t border-solid border-f1-border-secondary bg-f1-background px-3"
                >
                  <div className="flex items-center gap-3">
                    <HighlightedCount
                      text={
                        allSelectedStatus.checked
                          ? t("status.selected.allItemsSelected", {
                              total:
                                paginationInfo?.total ??
                                allSelectedStatus.selectedCount,
                            })
                          : allOnPageSelected
                            ? t("status.selected.allOnPage", {
                                count: allSelectedStatus.selectedCount,
                              })
                            : `${allSelectedStatus.selectedCount} ${selectedText}`
                      }
                      count={
                        allSelectedStatus.checked
                          ? (paginationInfo?.total ??
                            allSelectedStatus.selectedCount)
                          : allSelectedStatus.selectedCount
                      }
                    />
                    {showSelectAllOption && (
                      <F0Button
                        variant="outline"
                        label={t("status.selected.selectAllItems", {
                          total: paginationInfo?.total ?? 0,
                        })}
                        onClick={() => handleSelectAllItems(true)}
                        size="sm"
                      />
                    )}
                  </div>
                </th>
              </TableRow>
            ) : (
              <TableRow>
                {source.selectable && (
                  <TableHead
                    width={checkColumnWidth}
                    sticky={{ left: 0 }}
                    align="left"
                  >
                    <div className="ml-1.5 flex w-full items-center justify-start">
                      <F0Checkbox
                        checked={false}
                        onCheckedChange={handleSelectAll}
                        title={i18n.actions.selectAll}
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
                    className={
                      fromVisualization === "editableTable" &&
                      index !== columns.length - 1
                        ? "border-0 border-r-[1px] border-solid border-f1-border-secondary"
                        : undefined
                    }
                    {...column}
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
                {showItemActions && (
                  <>
                    <th className="hidden md:table-cell"></th>
                    <TableHead
                      key="actions"
                      width={68}
                      hidden
                      sticky={{
                        right: 0,
                      }}
                      className="table-cell md:hidden"
                    >
                      {i18n.collections.actions.actions}
                    </TableHead>
                  </>
                )}
              </TableRow>
            )}
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
                          const rowKey = `row-${groupIndex}-${getRowKey(item, index)}`
                          const motionRow = (
                            <MotionRow
                              variants={getAnimationVariants()}
                              initial={collapsible ? "hidden" : "visible"}
                              animate="visible"
                              exit="hidden"
                              custom={index}
                              key={rowKey}
                              layout
                              source={effectiveSource}
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
                              referenceRowType={referenceRowType}
                              rowWrapper={RowWrapper}
                              cellRenderer={cellRenderer}
                            />
                          )
                          if (RowWrapper) {
                            return (
                              <RowWrapper
                                key={rowKey}
                                item={item}
                                index={index}
                              >
                                {motionRow}
                              </RowWrapper>
                            )
                          }

                          return motionRow
                        })}
                    </AnimatePresence>
                  </Fragment>
                )
              })}
            {data?.type === "flat" &&
              data.records.map((item, index) => {
                const rowKey = `row-${getRowKey(item, index)}`
                const row = (
                  <Row
                    key={rowKey}
                    groupIndex={0}
                    source={effectiveSource}
                    item={item}
                    index={index}
                    onCheckedChange={(checked) =>
                      handleSelectItemChange(item, checked)
                    }
                    selectedItems={selectedItems}
                    columns={columns}
                    frozenColumnsLeft={frozenColumnsLeft}
                    checkColumnWidth={checkColumnWidth}
                    tableWithChildren={tableWithChildren}
                    referenceRowType={referenceRowType}
                    rowWrapper={RowWrapper}
                    cellRenderer={cellRenderer}
                    fromVisualization={fromVisualization}
                  />
                )
                if (RowWrapper) {
                  return (
                    <RowWrapper key={rowKey} item={item} index={index}>
                      {row}
                    </RowWrapper>
                  )
                }

                return row
              })}
            {paginationInfo?.type === "infinite-scroll" &&
              isLoadingMore &&
              Array.from({ length: 5 }).map((_, rowIndex) => (
                <TableRow key={`skeleton-row-${rowIndex}`}>
                  {Array.from({ length: skeletonColumns }).map(
                    (_, colIndex) => (
                      <TableCell key={`skeleton-cell-${rowIndex}-${colIndex}`}>
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                    )
                  )}
                </TableRow>
              ))}
            {isInfiniteScrollPagination(paginationInfo) &&
              paginationInfo.hasMore && (
                <tr>
                  <td
                    colSpan={
                      columns.length +
                      (source.selectable ? 1 : 0) +
                      (showItemActions ? 1 : 0)
                    }
                    ref={loadingIndicatorRef}
                    className="h-10"
                    aria-hidden="true"
                  ></td>
                </tr>
              )}
          </TableBody>
          {(summaryData || addRow?.onAddRow) && (
            <TableFooter>
              {summaryData && (
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
                                {i18n.collections.summaries.types.sum}
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
                  {showItemActions && (
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
              )}
              {addRow?.onAddRow && (
                <TableRow>
                  <TableCell
                    colSpan={
                      columns.length +
                      (source.selectable ? 1 : 0) +
                      (showItemActions ? 2 : 0)
                    }
                  >
                    <div className="pointer-events-auto">
                      <F0Button
                        variant="ghost"
                        icon={Add}
                        label={
                          addRow.addRowButtonLabel ??
                          t("collections.editableTable.addRow")
                        }
                        onClick={() => addRow.onAddRow?.()}
                        size="sm"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableFooter>
          )}
        </OneTable>
        <PagesPagination
          paginationInfo={paginationInfo}
          setPage={setPage}
          className="pb-4"
        />
      </TableWrapper>
    </div>
  )
}
