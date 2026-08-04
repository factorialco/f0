import { AnimatePresence, motion } from "motion/react"
import { Fragment, useEffect, useMemo, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import { F0Checkbox } from "@/components/F0Checkbox"
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
  SelectionId,
  SortingKey,
  SortingsDefinition,
  SortingsState,
  useGroups,
  useSelectable,
} from "@/hooks/datasource"
import { Add } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { PagesPagination } from "@/patterns/OneDataCollection/components/PagesPagination"
import { useDataCollectionSettings } from "@/patterns/OneDataCollection/Settings/SettingsProvider"
import { GroupHeader } from "@/ui/GroupHeader/index"
import { Skeleton } from "@/ui/skeleton.tsx"

import type {
  TableCustomizationProps,
  TableVisualizationOptions,
} from "./types"

import { PrimaryActionItemDefinition } from "../../../actions"
import { useDataCollectionData } from "../../../hooks/useDataCollectionData"
import { useInfiniteScrollPagination } from "../../../hooks/useInfiniteScrollPagination"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps } from "../../../types"
import { useAddRow } from "../EditableTable/context/AddRowContext"
import { statusToChecked } from "../utils"
import { Row } from "./components/Row"
import { useAddedRowKeys } from "./hooks/useAddedRowKeys"
import { useColumns } from "./hooks/useColums"
import { groupBorderClass, useHeaderGroups } from "./hooks/useHeaderGroups"
import { NestedDataProvider } from "./providers/NestedProvider"
import { useCreateSelectionRegistry } from "./providers/SelectionRegistryProvider"
import { useSticky } from "./useSticky"
export * from "./settings/SettingsRenderer"

const normalizeAddRowActions = (
  result:
    | PrimaryActionItemDefinition
    | PrimaryActionItemDefinition[]
    | undefined
): PrimaryActionItemDefinition[] => {
  if (!result) return []
  return (Array.isArray(result) ? result : [result]).filter(
    (item): item is PrimaryActionItemDefinition => item !== undefined
  )
}

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
  headerGroupLabels,
  bordered,
  rowWrapper: RowWrapper,
  cellRenderer,
  showItemActions: showItemActionsProp,
  visualizationSettings,
  fromVisualization = "table",
  summaryPlaceholder = "-",
  scroll = "self",
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

  // Editable tables render actions as a single dedicated column,
  // while the regular table uses two columns (desktop overlay + mobile dropdown).
  const isEditableTable = fromVisualization === "editableTable"
  const actionColCount = isEditableTable ? 1 : 2

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

  // Flash newly-added rows: track which flat row keys appeared since the last
  // render so a freshly-inserted row can play the green "flash on add" effect.
  const flatRowKeys =
    data?.type === "flat"
      ? data.records.map((item, index) => `row-${getRowKey(item, index)}`)
      : []
  // Identity of the current pagination position. When it changes the row set is
  // swapped by navigation (paging / loading more), not by an insert, so the
  // flash must be suppressed for that render.
  const paginationResetKey =
    paginationInfo?.type === "pages"
      ? paginationInfo.currentPage
      : paginationInfo?.type === "infinite-scroll"
        ? paginationInfo.cursor
        : undefined
  const addedRowKeys = useAddedRowKeys(flatRowKeys, paginationResetKey)

  const selectionRegistry = useCreateSelectionRegistry<R>()
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
    getRenderedSelectableEntries: selectionRegistry.getEntries,
    renderedSelectableCount: selectionRegistry.ids.length,
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

  const isEmptySummaryValue = (value: unknown) =>
    value === null || value === undefined || value === ""

  const getSummaryPlaceholder = (columnPlaceholder?: string) =>
    columnPlaceholder ?? summaryPlaceholder

  /**
   * Summary value for a column, or undefined when the column defines no
   * summary or the value came back empty.
   */
  const getColumnSummaryValue = (column: (typeof columns)[number]) => {
    if (
      !column.summary ||
      !source.summaries ||
      source.summaries[column.summary]?.type !== "sum"
    ) {
      return undefined
    }

    const value = summaryData?.data[column.summary]
    return isEmptySummaryValue(value) ? undefined : `${value}`
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

  const headerGroups = useHeaderGroups(columns, headerGroupLabels)

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

  // True when every selectable row on the current page is in the selectedItems
  // map. Checks membership per-ID so it is correct under both page-only and
  // allPagesSelection modes — unlike comparing the cross-page selectedCount to
  // data.records.length, which can produce false positives when selections from
  // another page happen to equal the current page size.
  const currentPageSelectableIds =
    selectionRegistry.ids.length > 0
      ? selectionRegistry.ids
      : (data?.records ?? [])
          .map((record) => source.selectable?.(record))
          .filter((id): id is SelectionId => id !== undefined)

  const allPageRowsSelected =
    currentPageSelectableIds.length > 0 &&
    currentPageSelectableIds.every((id) => selectedItems.has(id))

  // nested/tree tables: paginationInfo.total counts top-level rows, not selectable children
  const selectableTotal = Math.max(
    paginationInfo?.total ?? 0,
    currentPageSelectableIds.length
  )

  // True when the header checkbox should render as fully-checked: either the
  // Gmail-style "select across all pages" CTA is active, or every selectable
  // row on the current page is selected.
  const isAllSelected =
    (allSelectedStatus.checked && !allSelectedStatus.indeterminate) ||
    allPageRowsSelected

  const showSelectAllOption =
    !!source.allPagesSelection &&
    (!allSelectedStatus.checked || allSelectedStatus.indeterminate) &&
    paginationInfo?.total !== undefined &&
    selectableTotal > allSelectedStatus.selectedCount

  const selectionHeaderColSpan =
    columns.length + (showItemActions ? actionColCount : 0)

  const selectedText =
    allSelectedStatus.selectedCount === 1
      ? i18n.status.selected.singular
      : i18n.status.selected.plural

  const TableWrapper = tableWithChildren ? NestedDataProvider : Fragment

  return (
    <div className="flex h-full min-h-0 flex-col gap-4">
      <TableWrapper>
        <div
          className={cn(
            "min-h-0",
            bordered &&
              "overflow-hidden rounded-lg border border-solid border-f1-border-secondary [&_thead::before]:!bg-transparent [&_thead_th>div:first-child]:!bg-transparent [&_tbody>tr:last-child::after]:!bg-transparent"
          )}
        >
          <OneTable loading={isLoading} scroll={scroll}>
            <TableHeader sticky={true}>
              {headerGroups ? (
                <TableRow>
                  {source.selectable && (
                    <TableHead
                      align="left"
                      sticky={{ left: 0 }}
                      width={checkColumnWidth}
                      className={cn(
                        groupBorderClass,
                        "hover:after:bg-transparent"
                      )}
                    >
                      <div className="ml-3.5 flex w-full items-center justify-start" />
                    </TableHead>
                  )}
                  {headerGroups.map((entry, entryIndex) => {
                    const borderClass = cn(
                      groupBorderClass,
                      "hover:after:bg-transparent"
                    )
                    return entry.type === "group" ? (
                      <TableHead
                        align="right"
                        colSpan={entry.colSpan}
                        className={borderClass}
                        key={`header-group-${entry.id}-${entryIndex}`}
                      >
                        {entry.label}
                      </TableHead>
                    ) : (
                      <TableHead
                        align="right"
                        className={borderClass}
                        width={columns[entry.columnIndices[0]].width}
                        minWidth={columns[entry.columnIndices[0]].minWidth}
                        key={`header-ungrouped-${entry.columnIndices[0]}`}
                        sticky={getStickyPosition(entry.columnIndices[0])}
                      >
                        <span />
                      </TableHead>
                    )
                  })}
                  {showItemActions &&
                    (isEditableTable ? (
                      <TableHead
                        key="actions"
                        width="fit"
                        sticky={{ right: 0 }}
                      >
                        <span className="sr-only">
                          {i18n.collections.actions.actions}
                        </span>
                      </TableHead>
                    ) : (
                      <>
                        <th className="hidden md:table-cell" />
                        <TableHead
                          hidden
                          width={68}
                          key="actions"
                          sticky={{ right: 0 }}
                          className="table-cell md:hidden"
                        >
                          <span />
                        </TableHead>
                      </>
                    ))}
                </TableRow>
              ) : null}
              <TableRow>
                {source.selectable && (
                  <TableHead
                    width={checkColumnWidth}
                    sticky={{ left: 0 }}
                    align="left"
                    className={
                      headerGroups
                        ? cn("[&>div:first-child]:hidden", groupBorderClass)
                        : undefined
                    }
                  >
                    <div className="ml-3.5 flex w-full items-center justify-start">
                      <F0Checkbox
                        checked={isAllSelected}
                        indeterminate={hasSelection && !isAllSelected}
                        onCheckedChange={handleSelectAll}
                        title={i18n.actions.selectAll}
                        hideLabel
                        disabled={data?.records.length === 0}
                      />
                    </div>
                  </TableHead>
                )}
                {columns.map(({ sorting, label, ...column }, index) => {
                  const headerGroup = headerGroups?.find(
                    (group) =>
                      group.type === "group" &&
                      group.columnIndices.includes(index)
                  )
                  const isLastInGroup =
                    !!headerGroups &&
                    (!headerGroup ||
                      headerGroup.columnIndices[
                        headerGroup.columnIndices.length - 1
                      ] === index)

                  return (
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
                      hidden={false}
                      className={
                        cn(
                          headerGroups && "[&>div:first-child]:hidden",
                          isLastInGroup && groupBorderClass,
                          fromVisualization === "editableTable" &&
                            (index !== columns.length - 1 || showItemActions) &&
                            "border-0 border-r-[1px] border-solid border-f1-border-secondary"
                        ) || undefined
                      }
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
                  )
                })}
                {showItemActions &&
                  (isEditableTable ? (
                    <TableHead key="actions" width="fit" sticky={{ right: 0 }}>
                      <span className="sr-only">
                        {i18n.collections.actions.actions}
                      </span>
                    </TableHead>
                  ) : (
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
                  ))}
              </TableRow>
              {hasSelection &&
                source.selectable &&
                !!source.allPagesSelection && (
                  <TableRow>
                    <th
                      colSpan={1 + selectionHeaderColSpan}
                      className="relative h-11 border-0 border-t border-solid border-f1-border-secondary bg-f1-background px-5"
                    >
                      {/* This row sits in the sticky header, so rows scroll
                          behind it and it needs an opaque base. The secondary
                          tint is only 6% opaque, so it is layered over that
                          base rather than applied to the cell directly. */}
                      <div className="pointer-events-none absolute inset-0 bg-f1-background-secondary" />
                      <div className="relative flex items-center gap-3">
                        <HighlightedCount
                          text={
                            allSelectedStatus.checked &&
                            !allSelectedStatus.indeterminate
                              ? t("status.selected.allItemsSelected", {
                                  total: selectableTotal,
                                })
                              : allPageRowsSelected
                                ? t("status.selected.allOnPage", {
                                    count: allSelectedStatus.selectedCount,
                                  })
                                : `${allSelectedStatus.selectedCount} ${selectedText}`
                          }
                          count={
                            allSelectedStatus.checked &&
                            !allSelectedStatus.indeterminate
                              ? selectableTotal
                              : allSelectedStatus.selectedCount
                          }
                        />
                        {showSelectAllOption && (
                          <F0Button
                            variant="outline"
                            label={t("status.selected.selectAllItems", {
                              total: selectableTotal,
                            })}
                            onClick={() => handleSelectAllItems(true)}
                            size="sm"
                          />
                        )}
                      </div>
                    </th>
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
                        {source.selectable && (
                          <TableCell
                            width={checkColumnWidth}
                            sticky={{ left: 0 }}
                          >
                            <div className="pointer-events-auto ml-1.5 flex items-center justify-start">
                              <F0Checkbox
                                checked={
                                  !!statusToChecked(
                                    groupAllSelectedStatus[group.key]
                                  )
                                }
                                indeterminate={
                                  statusToChecked(
                                    groupAllSelectedStatus[group.key]
                                  ) === "indeterminate"
                                }
                                title={i18n.actions.selectAll}
                                hideLabel
                                onCheckedChange={(checked) =>
                                  handleSelectGroupChange(group, checked)
                                }
                              />
                            </div>
                          </TableCell>
                        )}
                        <TableCell
                          sticky={{
                            left: source.selectable ? checkColumnWidth : 0,
                          }}
                          colSpan={frozenColumnsLeft || 1}
                        >
                          <GroupHeader
                            selectable={false}
                            showOpenChange={collapsible}
                            label={group.label}
                            itemCount={itemCount}
                            open={openGroups[group.key]}
                            onOpenChange={(open) =>
                              setGroupOpen(group.key, open)
                            }
                          />
                        </TableCell>
                        {columns.length - (frozenColumnsLeft || 1) > 0 && (
                          <TableCell
                            colSpan={columns.length - (frozenColumnsLeft || 1)}
                          >
                            &nbsp;
                          </TableCell>
                        )}
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
                                onItemCheckedChange={handleSelectItemChange}
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
                                headerGroups={headerGroups}
                                fromVisualization={fromVisualization}
                                registerSelectable={selectionRegistry.register}
                                unregisterSelectable={
                                  selectionRegistry.unregister
                                }
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
                // Deliberately not wrapped in `AnimatePresence`: a row that
                // leaves the dataset (deleted, filtered out, re-sorted away)
                // must unmount on the same render. An exit transition keeps it
                // mounted — still in the DOM, still in the selection registry —
                // for as long as it runs, so a removed row goes on answering
                // queries and shifting row/checkbox positions. Enter and flash
                // don't need presence tracking; `initial`/`animate` cover them.
                data.records.map((item, index) => {
                  const rowKey = `row-${getRowKey(item, index)}`
                  const isNew = addedRowKeys.has(rowKey)
                  const motionRow = (
                    <MotionRow
                      variants={getAnimationVariants()}
                      // Only a genuinely-inserted row plays the enter
                      // animation; rows arriving via pagination or the initial
                      // load appear in place, without movement.
                      initial={isNew ? "hidden" : false}
                      animate="visible"
                      custom={index}
                      key={rowKey}
                      layout
                      isNew={isNew}
                      groupIndex={0}
                      source={effectiveSource}
                      item={item}
                      index={index}
                      onItemCheckedChange={handleSelectItemChange}
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
                      headerGroups={headerGroups}
                      registerSelectable={selectionRegistry.register}
                      unregisterSelectable={selectionRegistry.unregister}
                    />
                  )
                  if (RowWrapper) {
                    return (
                      <RowWrapper key={rowKey} item={item} index={index}>
                        {motionRow}
                      </RowWrapper>
                    )
                  }

                  return motionRow
                })}
              {paginationInfo?.type === "infinite-scroll" &&
                isLoadingMore &&
                Array.from({ length: 5 }).map((_, rowIndex) => (
                  <TableRow key={`skeleton-row-${rowIndex}`}>
                    {Array.from({ length: skeletonColumns }).map(
                      (_, colIndex) => (
                        <TableCell
                          key={`skeleton-cell-${rowIndex}-${colIndex}`}
                        >
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
            {(() => {
              const actions = normalizeAddRowActions(addRow?.addRowActions?.())

              if (!summaryData && actions.length === 0) {
                return null
              }

              return (
                <TableFooter>
                  {summaryData && (
                    <TableRow
                      className={cn(
                        summaryData.sticky &&
                          "sticky bottom-0 z-30 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background",
                        "font-medium"
                      )}
                    >
                      {source.selectable && (
                        <TableCell
                          width={checkColumnWidth}
                          sticky={{ left: 0 }}
                        >
                          {""}
                        </TableCell>
                      )}
                      {columns.map((column, cellIndex) => {
                        const summaryValue = getColumnSummaryValue(column)

                        // The leading column labels the row so the values can
                        // stand on their own, instead of repeating the summary
                        // type next to every one of them. A leading column that
                        // carries its own summary keeps showing the value.
                        const showLabel =
                          cellIndex === 0 && summaryValue === undefined

                        return (
                          <TableCell
                            key={`summary-${String(column.label)}`}
                            firstCell={cellIndex === 0}
                            width={column.width}
                            sticky={getStickyPosition(cellIndex)}
                            className={cn(
                              isEditableTable &&
                                (cellIndex !== columns.length - 1 ||
                                  showItemActions) &&
                                "border-0 border-r-[1px] border-solid border-f1-border-secondary"
                            )}
                          >
                            {showLabel ? (
                              <div className="font-medium text-f1-foreground-secondary">
                                {summaryData.label ??
                                  i18n.collections.summaries.total}
                              </div>
                            ) : (
                              <div
                                className={cn(
                                  column.align === "right" ? "justify-end" : "",
                                  "flex"
                                )}
                              >
                                {summaryValue ?? (
                                  <span className="text-f1-foreground-secondary">
                                    {getSummaryPlaceholder(
                                      column.summaryPlaceholder
                                    )}
                                  </span>
                                )}
                              </div>
                            )}
                          </TableCell>
                        )
                      })}
                      {showItemActions &&
                        (isEditableTable ? (
                          <TableCell
                            key="summary-actions"
                            sticky={{ right: 0 }}
                          >
                            {""}
                          </TableCell>
                        ) : (
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
                        ))}
                    </TableRow>
                  )}
                  {actions.length > 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={
                          columns.length +
                          (source.selectable ? 1 : 0) +
                          (showItemActions ? actionColCount : 0)
                        }
                        className="h-[48px] align-middle"
                      >
                        <div
                          className="pointer-events-auto flex h-full items-center"
                          onClick={(e) => e.stopPropagation()}
                          onMouseDownCapture={(e) => e.stopPropagation()}
                        >
                          {actions.length === 1 ? (
                            <F0Button
                              variant="outline"
                              icon={actions[0].icon ?? Add}
                              label={actions[0].label}
                              onClick={actions[0].onClick}
                              loading={actions[0].loading}
                              disabled={actions[0].disabled}
                              size="sm"
                            />
                          ) : actions.some(
                              (a) => a.description !== undefined
                            ) ? (
                            <F0ButtonDropdown
                              mode="dropdown"
                              variant="outline"
                              size="sm"
                              trigger={addRow?.addRowActionsLabel}
                              disabled={actions.every((a) => a.disabled)}
                              loading={actions.some((a) => a.loading)}
                              items={actions.map((action, index) => ({
                                value: index.toString(),
                                label: action.label,
                                icon: action.icon,
                                description: action.description,
                              }))}
                              onClick={(value) => {
                                actions[Number(value)]?.onClick?.()
                              }}
                            />
                          ) : (
                            <F0ButtonDropdown
                              variant="outline"
                              size="sm"
                              disabled={actions.every((a) => a.disabled)}
                              loading={actions.some((a) => a.loading)}
                              items={actions.map((action, index) => ({
                                value: index.toString(),
                                label: action.label,
                                icon: action.icon,
                              }))}
                              onClick={(value) => {
                                actions[Number(value)]?.onClick?.()
                              }}
                            />
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableFooter>
              )
            })()}
          </OneTable>
        </div>
        <PagesPagination
          paginationInfo={paginationInfo}
          setPage={setPage}
          className="pb-4"
        />
      </TableWrapper>
    </div>
  )
}
