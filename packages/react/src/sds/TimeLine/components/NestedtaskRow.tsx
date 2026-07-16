import { useId } from "react"

import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon/F0AvatarIcon"
import { F0Text } from "@/components/F0Text"
import { Metadata } from "@/experimental/Information/Headers/Metadata"
import Marker from "@/icons/app/Marker"
import { cn } from "@/lib/utils"

import type {
  F0TimelineRowNestedtaskProps,
  F0TimelineRowTaskProps,
} from "../types"

import { Actions } from "./Actions"
import { NestedtaskHeader } from "./NestedtaskHeader"
import { TimelineCollapse } from "./TimelineCollapse"
import { TimelineRowLayout } from "./TimelineRowLayout"

const NestedItem = ({ props }: { props: F0TimelineRowTaskProps }) => {
  const { status, icon = Marker, title, description } = props

  return (
    <div className="flex min-h-8 items-center gap-3">
      <F0AvatarIcon icon={icon} size="sm" />
      <h4
        className={cn(
          "text-base font-semibold text-f1-foreground",
          status === "completed" && "line-through"
        )}
      >
        {title}
      </h4>
      {description && <F0Text content={description} variant="description" />}
    </div>
  )
}

export const NestedtaskRow = ({
  props,
}: {
  props: F0TimelineRowNestedtaskProps
}) => {
  const {
    status,
    isLast = false,
    hideStatus = false,
    expanded,
    collapsible = true,
    items,
    content,
    metadata,
    primaryAction,
    secondaryActions,
    otherActions,
  } = props

  const contentId = useId()
  const isExpanded = collapsible ? (expanded ?? false) : true
  const hasMetadata = metadata?.some(Boolean)
  const hasActions =
    primaryAction ||
    (secondaryActions && secondaryActions.length > 0) ||
    (otherActions && otherActions.length > 0)

  return (
    <TimelineRowLayout status={status} isLast={isLast} hideStatus={hideStatus}>
      <div className="flex min-h-8 items-center gap-3">
        <NestedtaskHeader props={props} contentId={contentId} />
      </div>
      {metadata && hasMetadata && (
        <div className="pl-9">
          <Metadata items={metadata} />
        </div>
      )}
      <TimelineCollapse open={isExpanded}>
        <div id={contentId} role="region" className="flex flex-col gap-0 pl-4">
          {content !== undefined
            ? content
            : items?.map((item: F0TimelineRowTaskProps, index: number) => (
                <NestedItem key={`${item.title}-${index}`} props={item} />
              ))}
        </div>
      </TimelineCollapse>
      {hasActions && (
        <div className="pl-9">
          <Actions
            primaryAction={primaryAction}
            secondaryActions={secondaryActions}
            otherActions={otherActions}
          />
        </div>
      )}
    </TimelineRowLayout>
  )
}
