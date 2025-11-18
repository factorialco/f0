import { forwardRef } from "react"

import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { ItemActionsMobile } from "@/experimental/OneDataCollection/components/itemActions/ItemActionsMobile/ItemActionsMobile"
import { ItemActionsRowContainer } from "@/experimental/OneDataCollection/components/itemActions/ItemActionsRowContainer"
import { useItemActions } from "@/experimental/OneDataCollection/components/itemActions/useItemActions"
import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "@/experimental/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { renderProperty } from "@/experimental/OneDataCollection/property-render"
import { SummariesDefinition } from "@/experimental/OneDataCollection/summary"
import { TableCell, TableRow } from "@/experimental/OneTable"
import {
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/ui/checkbox"
import { ItemActionsRow } from "../../../../components/itemActions/ItemActionsRow/ItemActionsRow"
import { TableColumnDefinition } from "../types"
import { useSticky } from "../useSticky"
import { NestedRow } from "./NestedRow"

export type RowProps<
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
> = {
  source: DataCollectionSource<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  item: R
  index: number
  groupIndex: number
  onCheckedChange: (checked: boolean) => void
  selectedItems: Map<string | number, R>
  columns: ReadonlyArray<TableColumnDefinition<R, Sortings, Summaries>>
  frozenColumnsLeft: number
  checkColumnWidth: number
  tableWithChildren: boolean
  depth?: number
  hasLoadedChildren?: boolean
  noBorder?: boolean
  expandedLevels?: number
  onExpand?: () => void
  loading?: boolean
}

const RowComponentInner = <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  {
    source,
    item,
    onCheckedChange,
    selectedItems,
    columns,
    frozenColumnsLeft,
    checkColumnWidth,
    index,
    groupIndex,
    tableWithChildren,
    hasLoadedChildren,
    depth = 0,
    noBorder = false,
    expandedLevels = 0,
    onExpand,
    loading = false,
  }: RowProps<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >,
  ref: React.ForwardedRef<HTMLTableRowElement>
) => {
  const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
  const itemOnClick = source.itemOnClick ? source.itemOnClick(item) : undefined
  const id = source.selectable ? source.selectable(item) : undefined
  const rowWithChildren = !!source.itemsWithChildren?.(item)

  const renderCell = (
    item: R,
    column: TableColumnDefinition<R, Sortings, Summaries>
  ) => {
    return renderProperty(item, column, "table")
  }

  const key = `table-row-${groupIndex}-${index}`

  const { getStickyPosition } = useSticky(
    frozenColumnsLeft,
    columns,
    !!source.selectable
  )

  const {
    primaryItemActions,
    dropdownItemActions,
    mobileDropdownItemActions,
    handleDropDownOpenChange,
    dropDownOpen,
  } = useItemActions({ source, item })

  const hasChildrenLoaded = hasLoadedChildren === undefined || hasLoadedChildren

  if (rowWithChildren && hasChildrenLoaded) {
    return (
      <NestedRow
        source={source}
        item={item}
        onCheckedChange={onCheckedChange}
        selectedItems={selectedItems}
        columns={columns}
        frozenColumnsLeft={frozenColumnsLeft}
        checkColumnWidth={checkColumnWidth}
        index={index}
        groupIndex={groupIndex}
        tableWithChildren={tableWithChildren}
        key={key}
        ref={ref}
      />
    )
  }

  return (
    <TableRow
      ref={ref}
      key={key}
      className={cn(
        "group transition-colors hover:bg-f1-background-hover",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']",
        noBorder && "after:bg-white-100"
      )}
    >
      {source.selectable && (
        <TableCell
          width={checkColumnWidth}
          sticky={{ left: 0 }}
          loading={loading}
        >
          {id !== undefined && (
            <div className="pointer-events-auto flex items-center justify-end">
              <Checkbox
                checked={selectedItems.has(id)}
                onCheckedChange={onCheckedChange}
                title={`Select ${source.selectable(item)}`}
                hideLabel
              />
            </div>
          )}
        </TableCell>
      )}

      {columns.map((column, cellIndex) => (
        <TableCell
          key={`table-cell-${groupIndex}-${index}-${cellIndex}`}
          firstCell={cellIndex === 0}
          href={itemHref}
          onClick={itemOnClick}
          width={column.width}
          sticky={getStickyPosition(cellIndex)}
          hasChildren={rowWithChildren}
          tableWithChildren={tableWithChildren}
          depth={depth}
          expandedLevels={expandedLevels}
          onExpand={onExpand}
          loading={loading}
        >
          <div
            className={cn(
              column.align === "right" ? "justify-end" : "",
              "flex"
            )}
          >
            {renderCell(item, column)}
          </div>
        </TableCell>
      ))}

      {source.itemActions && !loading && (
        <>
          {/** Desktop item actions adds a sticky column to the table to not overflow when the table is scrolled horizontally*/}
          <td className="sticky right-0 top-0 z-10 hidden md:table-cell">
            <ItemActionsRowContainer dropDownOpen={dropDownOpen}>
              <ItemActionsRow
                primaryItemActions={primaryItemActions}
                dropdownItemActions={dropdownItemActions}
                handleDropDownOpenChange={handleDropDownOpenChange}
              />
            </ItemActionsRowContainer>
          </td>
          {/** Mobile item actions */}
          <TableCell
            key={`table-cell-${groupIndex}-${index}-actions`}
            width={68}
            sticky={{
              right: 0,
            }}
            href={itemHref}
            className="table-cell md:hidden"
            loading={loading}
          >
            <ItemActionsMobile
              items={mobileDropdownItemActions}
              onOpenChange={handleDropDownOpenChange}
            />
          </TableCell>
        </>
      )}
    </TableRow>
  )
}

const Row = forwardRef(RowComponentInner) as <
  R extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<R>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<R>,
>(
  props: RowProps<
    R,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  > & { ref?: React.ForwardedRef<HTMLTableRowElement> }
) => ReturnType<typeof RowComponentInner>

export { Row }
