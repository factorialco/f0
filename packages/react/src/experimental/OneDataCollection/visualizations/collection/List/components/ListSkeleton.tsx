import { FiltersDefinition } from "@/components/OneFilterPicker/types"
import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import {
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import { ItemActionsDefinition } from "../../../../item-actions"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { SummariesDefinition } from "../../../../summary"
import { ListPropertyDefinition } from "../types"

type ListSkeletonProps<
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
  fields: ReadonlyArray<ListPropertyDefinition<R, Sortings>>
  count?: number
  isInitialLoading?: boolean
  className?: string
}

/**
 * List Skeleton: Renders skeleton items for loading states
 */
export const ListSkeleton = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  source,
  fields,
  count = 5,
  isInitialLoading,
  className,
}: ListSkeletonProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-b-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary",
        isInitialLoading ? "mx-4 mt-2 rounded-t-xl" : "border-t-0",
        className
      )}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={`skeleton-item-${index}`}
          data-testid="skeleton-item"
          className="relative flex w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:pl-3 md:pr-4"
        >
          <div className="flex flex-1 flex-row items-center gap-2">
            {source.selectable && (
              <div className="z-10 hidden items-center justify-end md:flex">
                <Skeleton className="h-4 w-4" />
              </div>
            )}
            <article className="flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="flex flex-1 flex-col gap-1">
                <header>
                  <Skeleton className="h-5 w-32" />
                </header>
                <aside>
                  <div className="flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </aside>
              </div>
            </article>
          </div>
          <div className="flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end">
            {fields.map((_, fieldIndex) => (
              <div key={`skeleton-field-${fieldIndex}`}>
                <div className="flex items-center justify-center px-0 py-1 md:p-3">
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            ))}
          </div>
          {source.itemActions && (
            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden">
              <Skeleton className="h-6 w-6" />
            </div>
          )}
          {source.selectable && (
            <div
              className={cn(
                "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
                source.itemActions && "right-12"
              )}
            >
              <Skeleton className="h-4 w-4" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
