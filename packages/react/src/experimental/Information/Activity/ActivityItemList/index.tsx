import sortBy from "lodash/sortBy"
import throttle from "lodash/throttle"
import React from "react"

import { categorizeItemsByDate } from "@/lib/date"
import { experimentalComponent } from "@/lib/experimental"
import { useI18n } from "@/lib/providers/i18n"
import { withSkeleton } from "@/lib/skeleton"

import { ActivityItem } from "../ActivityItem"
import { Section, SectionProps } from "./Section"

const MORE_ITEMS_LOADING_COUNT = 3

const GROUP_SORT_ORDER = ["today", "yesterday", "lastWeek", "lastMonth"]

type GroupEntry = [string, SectionProps["items"]]

const sortGroups = (groups: GroupEntry[]) => {
  return sortBy(groups, ([group]) => {
    const index = GROUP_SORT_ORDER.indexOf(group)
    if (index === -1) {
      return -Number(group)
    }

    return index - 4000
  })
}

export type ActivityItemListProps = Pick<
  SectionProps,
  "items" | "onClickItem"
> & {
  onEndReached?: () => void
  onEndReachedItemsThreshold?: number
  loadingMoreItems?: boolean
}

const Separator = () => (
  <div className="-mx-2 h-px bg-f1-background-secondary" />
)

export const BaseActivityItemList = ({
  items,
  loadingMoreItems = false,
  onClickItem,
  onEndReached,
  onEndReachedItemsThreshold = 5,
}: ActivityItemListProps) => {
  const translations = useI18n()

  const categorizedItems = categorizeItemsByDate(items, "createdAt")

  const lastItemIds = Object.values(categorizedItems)
    .slice()
    .flatMap((items) => items.map((item) => item.id))
    .slice(-onEndReachedItemsThreshold)

  const handleItemVisible = throttle((id: string) => {
    if (lastItemIds.includes(id)) {
      onEndReached?.()
    }
  }, 1000)

  const groups = sortGroups(
    Object.entries(categorizedItems).filter(([_, items]) => !!items.length)
  )

  return (
    <div className="flex flex-col gap-2 p-2">
      {groups.map(([group, items], index) => (
        <React.Fragment key={group}>
          <Section
            title={
              group in translations.date.groups
                ? translations.date.groups[
                    group as keyof typeof translations.date.groups
                  ]
                : group
            }
            items={items}
            onClickItem={onClickItem}
            onItemVisible={handleItemVisible}
          />
          {index !== groups.length - 1 && <Separator />}
        </React.Fragment>
      ))}
      {loadingMoreItems &&
        new Array(MORE_ITEMS_LOADING_COUNT)
          .fill(null)
          .map((_, index) => <ActivityItem.Skeleton key={index} />)}
    </div>
  )
}

export const ActivityItemListSkeleton = () => {
  const translations = useI18n()

  return (
    <div className="flex flex-col gap-2 p-2">
      <Section.Skeleton title={translations.date.groups.today} numItems={1} />
      <Separator />
      <Section.Skeleton
        title={translations.date.groups.yesterday}
        numItems={3}
      />
      <Separator />
      <Section.Skeleton
        title={translations.date.groups.lastMonth}
        numItems={5}
      />
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const ActivityItemList = experimentalComponent(
  "ActivityItemList",
  withSkeleton(BaseActivityItemList, ActivityItemListSkeleton)
)
