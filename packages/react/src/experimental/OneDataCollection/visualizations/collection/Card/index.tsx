import { AnimatePresence, motion } from "motion/react"
import { useEffect, useMemo } from "react"

import {
  F0Card,
  type CardImageFit,
  type CardImageSize,
} from "@/components/F0Card"
import { CardAvatarVariant } from "@/components/F0Card/components/CardAvatar"
import { cardPropertyRenderers } from "@/components/F0Card/components/CardMetadata"
import { CardMetadata, CardMetadataProperty } from "@/components/F0Card/types"
import { IconType } from "@/components/F0Icon"
import { useDataCollectionData } from "@/experimental/OneDataCollection/hooks/useDataCollectionData"
import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { GroupingDefinition, RecordType } from "@/hooks/datasource"
import { SortingsDefinition } from "@/hooks/datasource/types/sortings.typings"
import { getAnimationVariants, useGroups } from "@/hooks/datasource/useGroups"
import { useSelectable } from "@/hooks/datasource/useSelectable/useSelectable"
import { Placeholder } from "@/icons/app"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/Card"
import { GroupHeader } from "@/ui/GroupHeader/GroupHeader"
import { Skeleton } from "@/ui/skeleton"

import type { FiltersDefinition } from "../../../../../components/OneFilterPicker/types"

import { PagesPagination } from "../../../components/PagesPagination"
import { ItemActionsDefinition } from "../../../item-actions"
import { PropertyDefinition } from "../../../property-render"
import { SummariesDefinition } from "../../../summary"
import { CollectionProps } from "../../../types"

export type CardPropertyDefinition<T> = PropertyDefinition<T> & {
  icon?: IconType
  tooltip?: string
}

export type CardVisualizationOptions<
  T,
  _Filters extends FiltersDefinition,
  _Sortings extends SortingsDefinition,
> = {
  cardProperties: ReadonlyArray<CardPropertyDefinition<T>>
  title: (record: T) => string
  description?: (record: T) => string
  avatar?: (record: T) => CardAvatarVariant
  image?: (record: T) => string
  imageFit?: CardImageFit
  imageSize?: CardImageSize
  blurredBackground?: boolean
  compact?: boolean
}

// Find the next number that is divisible by 2, 3, and 4
const findNextMultiple = (n: number): number => {
  // LCM of 2, 3, and 4 is 12
  const lcm = 12
  return Math.ceil(n / lcm) * lcm
}

const CardGrid = ({
  children,
  tmpFullWidth,
}: {
  children: React.ReactNode
  tmpFullWidth?: boolean
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        tmpFullWidth && "px-0"
      )}
    >
      {children}
    </div>
  )
}

/**
 * Group Cards: Renders
 */

export type CardCollectionProps<
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
  CardVisualizationOptions<Record, Filters, Sortings>
>

/**
 * Group Cards: Renders the cards for a group
 */

type GroupCardsProps<
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
> = {
  source: DataCollectionSource<
    Record,
    Filters,
    Sortings,
    Summaries,
    ItemActions,
    NavigationFilters,
    Grouping
  >
  items: Record[]
  selectedItems: Map<number | string, Record>
  handleSelectItemChange: (item: Record, checked: boolean) => void
  cardProperties: ReadonlyArray<CardPropertyDefinition<Record>>
  title: (record: Record) => string
  description?: (record: Record) => string
  avatar?: (record: Record) => CardAvatarVariant
  image?: (record: Record) => string
  imageFit?: CardImageFit
  imageSize?: CardImageSize
  blurredBackground?: boolean
  compact?: boolean
  tmpFullWidth?: boolean
}

const GroupCards = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  source,
  items,
  selectedItems,
  handleSelectItemChange,
  cardProperties,
  title,
  description,
  avatar,
  image,
  imageFit,
  imageSize,
  blurredBackground,
  compact,
  tmpFullWidth,
}: GroupCardsProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping
>) => {
  function getMetadata(
    item: Record,
    properties: ReadonlyArray<CardPropertyDefinition<Record>>
  ): Array<CardMetadata> {
    return properties
      .map((property) => {
        if (property.hide?.(item)) {
          return null
        }

        const result = property.render(item)
        if (result === undefined) {
          return null
        }

        const cardProperty = convertToCardMetadataProperty(result)
        if (!cardProperty) return null
        if (cardProperty.type === "file")
          return {
            property: cardProperty,
          }

        return {
          icon: property.icon ?? Placeholder,
          tooltip: property.tooltip,
          property: cardProperty,
        }
      })
      .filter((item): item is CardMetadata => item !== null)
  }

  function convertToCardMetadataProperty(
    value: unknown
  ): CardMetadataProperty | null {
    if (typeof value === "string") {
      return { type: "text", value }
    }

    if (typeof value === "number") {
      return { type: "number", value }
    }

    if (isCardMetadataProperty(value)) {
      return value
    }

    return null
  }

  function isCardMetadataProperty(
    value: unknown
  ): value is CardMetadataProperty {
    if (typeof value !== "object" || value === null || !("type" in value)) {
      return false
    }

    const typeValue = (value as { [key: string]: unknown }).type
    return typeof typeValue === "string" && typeValue in cardPropertyRenderers
  }

  return (
    <CardGrid tmpFullWidth={tmpFullWidth}>
      {items.map((item, index) => {
        const id = source.selectable ? source.selectable(item) : undefined
        const itemHref = source.itemUrl ? source.itemUrl(item) : undefined
        const itemOnClick = source.itemOnClick
          ? source.itemOnClick(item)
          : undefined

        const itemActions = (
          source.itemActions ? source.itemActions(item) || [] : []
        ).filter((action) => action.type !== "separator")

        const otherActions = (
          itemActions.filter(
            (action) => action.type === "other" || !action.type
          ) || []
        ).map((action) => ({
          ...action,
          // Reconverts the type to DropdownItemObject
          type: "item" as const,
        }))

        const primaryAction =
          itemActions.find((action) => action.type === "primary") || undefined
        const secondaryActions =
          itemActions.filter((action) => action.type === "secondary") || []

        const selectable = !!source.selectable && id !== undefined

        const metadata = getMetadata(item, cardProperties)

        return (
          <motion.div
            key={index}
            layout
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={index}
            variants={getAnimationVariants({
              delay: 0.02,
              duration: 0.3,
            })}
          >
            <F0Card
              key={index}
              title={title(item)}
              selectable={selectable}
              description={description ? description(item) : undefined}
              avatar={avatar ? avatar(item) : undefined}
              image={image ? image(item) : undefined}
              imageFit={imageFit}
              imageSize={imageSize}
              blurredBackground={blurredBackground}
              selected={selectable && selectedItems.has(id)}
              onSelect={(selected) => handleSelectItemChange(item, selected)}
              secondaryActions={secondaryActions}
              primaryAction={primaryAction}
              otherActions={otherActions}
              onClick={itemOnClick}
              link={itemHref}
              compact={compact ? compact : false}
              metadata={metadata}
              fullHeight={true}
            />
          </motion.div>
        )
      })}
    </CardGrid>
  )
}

export const CardCollection = <
  Record extends RecordType,
  Filters extends FiltersDefinition,
  Sortings extends SortingsDefinition,
  Summaries extends SummariesDefinition,
  ItemActions extends ItemActionsDefinition<Record>,
  NavigationFilters extends NavigationFiltersDefinition,
  Grouping extends GroupingDefinition<Record>,
>({
  cardProperties,
  title,
  description,
  avatar,
  image,
  imageFit,
  imageSize,
  blurredBackground,
  compact,
  source,
  onSelectItems,
  onLoadData,
  onLoadError,
  tmpFullWidth,
}: CollectionProps<
  Record,
  Filters,
  Sortings,
  Summaries,
  ItemActions,
  NavigationFilters,
  Grouping,
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

  const { data, paginationInfo, setPage, isInitialLoading } =
    useDataCollectionData<
      Record,
      Filters,
      Sortings,
      Summaries,
      NavigationFilters,
      Grouping
    >(
      {
        ...source,
        dataAdapter: overridenDataAdapter,
      },
      {
        onError: (error) => {
          onLoadError(error)
        },
      }
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

  /**
   * Groups
   */
  const collapsible = source.grouping?.collapsible
  const defaultOpenGroups = source.grouping?.defaultOpenGroups
  const { openGroups, setGroupOpen } = useGroups(
    data?.type === "grouped" ? data.groups : [],
    defaultOpenGroups
  )

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col gap-4">
      <div className="overflow-auto">
        {isInitialLoading ? (
          <CardGrid tmpFullWidth={tmpFullWidth}>
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle aria-label="Loading card">
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
            ))}
          </CardGrid>
        ) : (
          <>
            {data?.type === "grouped" &&
              data.groups.map((group) => {
                return (
                  <>
                    <GroupHeader
                      label={group.label}
                      itemCount={group.itemCount}
                      onOpenChange={(open) => setGroupOpen(group.key, open)}
                      open={openGroups[group.key]}
                      selectable={!!source.selectable}
                      showOpenChange={collapsible}
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
                      className="px-4 pb-2 pt-4"
                    />
                    <AnimatePresence>
                      {(!collapsible || openGroups[group.key]) && (
                        <GroupCards
                          key={group.key}
                          source={source}
                          items={group.records}
                          selectedItems={selectedItems}
                          handleSelectItemChange={handleSelectItemChange}
                          title={title}
                          cardProperties={cardProperties}
                          description={description}
                          avatar={avatar}
                          image={image}
                          imageFit={imageFit}
                          imageSize={imageSize}
                          blurredBackground={blurredBackground}
                          compact={compact}
                          tmpFullWidth={tmpFullWidth}
                        />
                      )}
                    </AnimatePresence>
                  </>
                )
              })}

            {data?.type === "flat" && (
              <GroupCards
                source={source}
                items={data.records}
                selectedItems={selectedItems}
                handleSelectItemChange={handleSelectItemChange}
                title={title}
                cardProperties={cardProperties}
                description={description}
                avatar={avatar}
                image={image}
                imageFit={imageFit}
                imageSize={imageSize}
                blurredBackground={blurredBackground}
                compact={compact}
                tmpFullWidth={tmpFullWidth}
              />
            )}
          </>
        )}
      </div>
      <PagesPagination paginationInfo={paginationInfo} setPage={setPage} />
    </div>
  )
}
