import { Checkbox } from "@/experimental/Forms/Fields/Checkbox"
import { useSelectable } from "@/experimental/OneDataCollection/useSelectable"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui/card"
import { Skeleton } from "@/ui/skeleton"
import { useMemo } from "react"
import { OnePagination } from "../../../../OnePagination"
import type { FiltersDefinition } from "../../../Filters/types"
import { ActionsDropdown } from "../../../ItemActions/Dropdown"
import { ItemActionsDefinition } from "../../../item-actions"
import { PropertyDefinition, renderProperty } from "../../../property-render"
import { SortingsDefinition } from "../../../sortings"
import { CollectionProps, RecordType } from "../../../types"
import { useData } from "../../../useData"

export type CardPropertyDefinition<T> = PropertyDefinition<T>

export type CardVisualizationOptions<
  T,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  cardProperties: ReadonlyArray<CardPropertyDefinition<T>>
  title: (record: T) => string
}

// Find the next number that is divisible by 2, 3, and 4
const findNextMultiple = (n: number): number => {
  // LCM of 2, 3, and 4 is 12
  const lcm = 12
  return Math.ceil(n / lcm) * lcm
}

export const CardCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
>({
  cardProperties,
  title,
  source,
  onSelectItems,
}: CollectionProps<
  Record,
  Filters,
  Sortings,
  ItemActions,
  CardVisualizationOptions<Record, Filters, Sortings>
>) => {
  // We override the perPage to ensure it's always a multiple of 2, 3, and 4
  // This ensures the cards are always aligned in a grid regardless of the
  // screen size (2 columns on sm, 3 on lg, 4 on xl)
  const overridenDataAdapter = useMemo(() => {
    if (source.dataAdapter.paginationType === "pages") {
      const perPage = source.dataAdapter.perPage
      const overridenPerPage = findNextMultiple(perPage ?? 24)
      return {
        ...source.dataAdapter,
        perPage: overridenPerPage,
      }
    }
    return source.dataAdapter
  }, [source.dataAdapter])

  const { data, paginationInfo, setPage, isInitialLoading } = useData<
    Record,
    Filters,
    Sortings
  >({
    ...source,
    dataAdapter: overridenDataAdapter,
  })

  /**
   * Item selection
   */

  const {
    selectedItems,
    handleSelectItemChange,
    // TODO Add all selection logic
    // isAllSelected,
    // isPartiallySelected,
    // handleSelectAll,
  } = useSelectable(data, paginationInfo, source, onSelectItems)

  const renderValue = (
    item: Record,
    property: CardPropertyDefinition<Record>
  ) => {
    return renderProperty(item, property, "card")
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isInitialLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>
                    <Skeleton className="h-4 w-3/4" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {cardProperties.map((property) => (
                    <div key={String(property.label)} className="space-y-1">
                      <Skeleton className="h-3 w-1/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))
          : data.map((item, index) => {
              const id = source.selectable ? source.selectable(item) : undefined
              return (
                <Card key={index}>
                  <CardHeader>
                    {source.selectable && id !== undefined && (
                      <Checkbox
                        checked={selectedItems.has(id)}
                        onCheckedChange={(checked) =>
                          handleSelectItemChange(item, checked)
                        }
                        title={`Select ${source.selectable(item)}`}
                        hideLabel
                      />
                    )}
                    <CardTitle>{title(item)}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {cardProperties.map((property) => (
                      <div key={String(property.label)} className="space-y-1">
                        <div className="text-muted-foreground text-sm font-medium">
                          {property.label}
                        </div>
                        <div className="text-sm">
                          {renderValue(item, property)}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                  {source.itemActions && (
                    <CardFooter className="justify-end">
                      <ActionsDropdown
                        item={item}
                        actions={source.itemActions}
                      />
                    </CardFooter>
                  )}
                </Card>
              )
            })}
      </div>
      {paginationInfo && (
        <OnePagination
          totalPages={paginationInfo.pagesCount}
          currentPage={paginationInfo.currentPage}
          onPageChange={setPage}
          disabled={paginationInfo.pagesCount <= 1}
        />
      )}
    </>
  )
}
