import { withSkeleton } from "@/lib/skeleton"
import React from "react"
import { ActivityItem, ActivityItemProps } from "../../ActivityItem"

export type SectionProps = {
  title: string
  items: Omit<ActivityItemProps, "onClick">[]
  onClickItem: (id: string) => void
  onItemVisible?: (id: string) => void
}

const SectionWrapper = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <div className="pb-2 pl-2 pt-1">
      <p className="text-sm font-medium text-f1-foreground-secondary">{title}</p>
    </div>
    <div className="flex flex-col gap-1">{children}</div>
  </div>
)

const BaseSection = ({ title, items, onClickItem, onItemVisible }: SectionProps) => (
  <SectionWrapper title={title}>
    {items.map((item) => (
      <ActivityItem
        key={item.id}
        {...item}
        onClick={() => onClickItem(item.id)}
        onVisible={onItemVisible}
      />
    ))}
  </SectionWrapper>
)

const SectionSkeleton = ({ title, numItems }: { title: string; numItems: number }) => (
  <SectionWrapper title={title}>
    {Array.from({ length: numItems }).map((_, index) => (
      <ActivityItem.Skeleton key={index} />
    ))}
  </SectionWrapper>
)

export const Section = withSkeleton(BaseSection, SectionSkeleton)
