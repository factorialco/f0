import { forwardRef } from "react"

import type { IconType } from "@/components/F0Icon"
import type { TableVisualizationType } from "@/experimental/OneDataCollection/types"

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
import { NestedVariant } from "@/hooks/datasource/types/nested.typings"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/ui/checkbox"

import type {
  CellRendererProps,
  ReferenceType,
  RowWrapperProps,
  TableColumnDefinition,
} from "../types"

import { ItemActionsRow } from "../../../../components/itemActions/ItemActionsRow/ItemActionsRow"
import { useSticky } from "../useSticky"
import { NestedRow } from "./NestedRow"
import { groupBorderClass, HeaderGroupEntry } from "../hooks/useHeaderGroups"

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
  noBorder?: boolean
  loading?: boolean
  tableWithChildren: boolean
  nestedRowProps?: NestedRowProps
  disableHover?: boolean
  /** Optional predicate to mark a row as reference row with slanted background pattern. */
  referenceRowType?: (item: R) => ReferenceType
  /** Optional custom cell renderer. When provided, wraps each cell's content. */
  cellRenderer?: React.ComponentType<
    CellRendererProps<R, Sortings, Summaries> & { isLastColumn?: boolean }
  >
  /** Row wrapper passed through to NestedRow for wrapping child rows */
  rowWrapper?: React.ComponentType<RowWrapperProps<R>>
  fromVisualization?: TableVisualizationType
  headerGroups: HeaderGroupEntry[] | null
}

export type AddRowAction = {
  label: string
  icon?: IconType
  description?: string
  onClick?: () => void | Promise<void>
  loading?: boolean
  disabled?: boolean
}

export type OnAddRowConfig = {
  actions: AddRowAction[]
  label?: string
}

export type NestedRowProps = {
  connectorHeight?: number
  depth?: number
  expanded?: boolean
  hasLoadedChildren?: boolean
  isLastChild?: boolean
  nestedVariant?: NestedVariant
  parentHasChildren?: boolean
  onExpand?: () => void
  onLoadMoreChildren?: () => void
  onAddRow?: OnAddRowConfig
}

const referenceTypeClasses: Record<ReferenceType, string> = {
  none: "",
  striped:
    "bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)] [background-size:100%_100px]",
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
    noBorder = false,
    loading = false,
    nestedRowProps,
    tableWithChildren,
    disableHover = false,
    referenceRowType: referenceRowTypeFn,
    cellRenderer: CellRenderer,
    rowWrapper,
    fromVisualization,
    headerGroups,
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

  const i18n = useI18n()

  const renderCell = (
    item: R,
    column: TableColumnDefinition<R, Sortings, Summaries>
  ) => {
    return renderProperty(item, column, "table", i18n, {
      tableAlign: column.align ?? "left",
    })
  }

  const key = `table-row-${groupIndex}-${index}`

  const { getStickyPosition } = useSticky(
    frozenColumnsLeft,
    columns,
    !!source.selectable
  )

  const {
    hasItemActions,
    primaryItemActions,
    dropdownItemActions,
    mobileDropdownItemActions,
    handleDropDownOpenChange,
    dropDownOpen,
  } = useItemActions({ source, item })

  const hasChildrenLoaded =
    nestedRowProps?.hasLoadedChildren === undefined ||
    nestedRowProps?.hasLoadedChildren

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
        nestedRowProps={nestedRowProps}
        tableWithChildren={tableWithChildren}
        referenceRowType={referenceRowTypeFn}
        cellRenderer={CellRenderer}
        rowWrapper={rowWrapper}
        headerGroups={headerGroups}
        key={key}
        fromVisualization={fromVisualization}
      />
    )
  }

  const isSelected = id !== undefined && selectedItems.has(id)
  const referenceRowType = referenceRowTypeFn?.(item) ?? "none"

  const cellRenderedClass = CellRenderer
    ? cn(
        "h-[48px] p-0 align-middle last:pr-0",
        !tableWithChildren && "first:pl-0"
      )
    : undefined

  return (
    <TableRow
      ref={ref}
      key={key}
      className={cn(
        "group transition-colors hover:bg-f1-background-hover",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']",
        noBorder && "after:bg-white-100",
        disableHover && "hover:bg-transparent",
        isSelected && "bg-f1-background-selected-secondary",
        referenceTypeClasses[referenceRowType]
      )}
    >
      {source.selectable && (
        <TableCell
          width={checkColumnWidth}
          sticky={{ left: 0 }}
          loading={loading}
          className={cn(
            loading && tableWithChildren ? "first:pl-4" : "",
            headerGroups && "[&>div:first-child]:hidden",
            headerGroups && groupBorderClass,
            cellRenderedClass
          )}
          referenceRowType={referenceRowType}
        >
          {id !== undefined && (
            <div className="pointer-events-auto ml-1.5 flex h-full items-center justify-start">
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

      {columns.map((column, cellIndex) => {
        const headerGroup = headerGroups?.find((group) => {
          return (
            group.type === "group" && group.columnIndices.includes(cellIndex)
          )
        })

        const isLastInGroup =
          !!headerGroups &&
          (!headerGroup ||
            headerGroup.columnIndices[headerGroup.columnIndices.length - 1] ===
              cellIndex)

        const defaultContent = (
          <div
            className={cn(
              column.align === "right" ? "justify-end" : "",
              "flex"
            )}
          >
            {renderCell(item, column)}
          </div>
        )

        return (
          <TableCell
            key={`table-cell-${groupIndex}-${index}-${cellIndex}`}
            firstCell={cellIndex === 0}
            href={itemHref}
            onClick={itemOnClick}
            width={column.width}
            sticky={getStickyPosition(cellIndex)}
            loading={loading}
            nestedRowProps={{
              ...nestedRowProps,
              rowWithChildren,
              tableWithChildren,
              selectableRow: !!source.selectable,
            }}
            fromVisualization={fromVisualization}
            referenceRowType={referenceRowType}
            className={cn(cellRenderedClass, isLastInGroup && groupBorderClass)}
          >
            {CellRenderer ? (
              <CellRenderer
                item={item}
                isLastColumn={
                  !hasItemActions && cellIndex === columns.length - 1
                }
                column={column}
                cellIndex={cellIndex}
              >
                {defaultContent}
              </CellRenderer>
            ) : (
              defaultContent
            )}
          </TableCell>
        )
      })}

      {hasItemActions &&
        !loading &&
        !nestedRowProps?.onLoadMoreChildren &&
        !nestedRowProps?.onAddRow && (
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
  > & {
    ref?: React.ForwardedRef<HTMLTableRowElement>
    fromVisualization?: TableVisualizationType
  }
) => ReturnType<typeof RowComponentInner>

export { Row }
