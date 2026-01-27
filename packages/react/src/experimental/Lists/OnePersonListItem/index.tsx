import React from "react"

import { AvatarBadge } from "@/components/avatars/F0Avatar/types"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon"
import { F0TagDot, TagDotProps } from "@/components/tags/F0TagDot"
import { F0TagRaw, TagRawProps } from "@/components/tags/F0TagRaw"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { InfoCircle } from "@/icons/app"
import { experimentalComponent } from "@/lib/experimental"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

export type OnePersonListItemProps = {
  person: {
    firstName: string
    lastName: string
    avatarUrl?: string
    avatarBadge?: AvatarBadge
  }
  description?: string
  bottomTags: Omit<TagRawProps, "noBorder">[]
  rightTag?: TagDotProps
  actions?: {
    primary?: {
      icon?: IconType
      label: string
      onClick: () => void
    }
    secondary?: {
      icon: IconType
      onClick: () => void
    }
  }
  info?: string
  onClick: () => void
  withPointerCursor?: boolean
}

const BaseOnePersonListItem = React.forwardRef<
  HTMLDivElement,
  OnePersonListItemProps
>(({ person, onClick, ...props }, ref) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
        props.withPointerCursor && "cursor-pointer"
      )}
      onClick={handleClick}
    >
      <F0AvatarPerson
        firstName={person.firstName}
        lastName={person.lastName}
        src={person.avatarUrl}
        badge={person.avatarBadge}
      />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-row items-center gap-1">
          <span className="truncate font-medium">{`${person.firstName} ${person.lastName}`}</span>
          {props.info && (
            <Tooltip label={props.info}>
              <F0Icon
                icon={InfoCircle}
                size="sm"
                className="text-f1-icon-secondary"
              />
            </Tooltip>
          )}
        </div>
        {"bottomTags" in props && (
          <div className="-ml-1.5 flex flex-row items-center [&>div]:-mr-1">
            {props.bottomTags.map((tag, i) => (
              <>
                <F0TagRaw key={tag.text} {...tag} />
                {i < props.bottomTags.length - 1 && <span>·</span>}
              </>
            ))}
          </div>
        )}
        {"description" in props && props.description && (
          <p className="truncate text-f1-foreground-secondary">
            {props.description}
          </p>
        )}
      </div>
      <div className="flex flex-row items-center justify-between gap-2">
        {"rightTag" in props && props.rightTag && (
          <F0TagDot {...props.rightTag} />
        )}
        {"actions" in props && (
          <div className="flex flex-1 flex-row items-center justify-end gap-2">
            {props.actions?.primary && (
              <F0Button
                variant="outline"
                onClick={props.actions.primary.onClick}
                label={props.actions.primary.label}
                icon={props.actions.primary.icon}
              />
            )}

            {props.actions?.secondary && (
              <F0Button
                variant="outline"
                onClick={props.actions.secondary.onClick}
                label="Secondary"
                icon={props.actions.secondary.icon}
                hideLabel
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
})

const OnePersonListItemSkeleton = () => {
  return (
    <div className="flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold">
      <Skeleton className="aspect-square w-8 rounded-full" />
      <div className="flex flex-1 flex-col gap-0.5">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
      </div>
    </div>
  )
}

BaseOnePersonListItem.displayName = "OnePersonListItem"

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const OnePersonListItem = experimentalComponent(
  "OnePersonListItem",
  withSkeleton(BaseOnePersonListItem, OnePersonListItemSkeleton)
)
