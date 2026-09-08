import React from "react"
import { AvatarBadge } from "@/components/avatars/F0Avatar/types"
import { IconType } from "@/components/F0Icon"
import { TagDotProps } from "@/components/tags/F0TagDot"
import { TagRawProps } from "@/components/tags/F0TagRaw"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { withSkeleton } from "@/lib/skeleton"
import { OneListItem, OneListItemSkeleton } from "../OneListItem"

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
>(({ person, ...props }, ref) => (
  <OneListItem
    ref={ref}
    {...props}
    avatar={{
      type: "person",
      firstName: person.firstName,
      lastName: person.lastName,
      src: person.avatarUrl,
      badge: person.avatarBadge,
    }}
    title={`${person.firstName} ${person.lastName}`}
  />
))

BaseOnePersonListItem.displayName = "OnePersonListItem"

/**
 * A person in a list: `OneListItem` with the avatar and title composed from a
 * person's name. Reach for `OneListItem` directly when the row stands for
 * anything else.
 *
 * @experimental This is an experimental component use it at your own risk
 */
export const OnePersonListItem = withDataTestId(
  experimentalComponent(
    "OnePersonListItem",
    withSkeleton(BaseOnePersonListItem, OneListItemSkeleton)
  )
)
