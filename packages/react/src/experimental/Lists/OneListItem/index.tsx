import React from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { AvatarVariant } from "@/components/avatars/F0Avatar/types"
import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon"
import { CardMetadata } from "@/components/F0Card/components/CardMetadata"
import type { CardMetadata as CardMetadataType } from "@/components/F0Card/types"
import { F0Text } from "@/components/F0Text"
import { F0TagDot, TagDotProps } from "@/components/tags/F0TagDot"
import { F0TagRaw, TagRawProps } from "@/components/tags/F0TagRaw"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { InfoCircle } from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { withSkeleton } from "@/lib/skeleton"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

export type OneListItemProps = {
  /**
   * Any avatar variant - person, team, company, file, flag, icon or emoji - so
   * the item can stand for whatever the list is of. Omit it for a list with no
   * leading graphic.
   */
  avatar?: AvatarVariant
  /** The item's name. The one thing every list item has. */
  title: string
  description?: string
  /** Facts under the title, rendered inline and separated by a middot. */
  bottomTags?: Omit<TagRawProps, "noBorder">[]
  /**
   * Fields under the subtitle - team, workplace, manager and the like. Same
   * shape and same renderers as `F0Card`'s metadata: a leading icon carrying
   * the field's label as its tooltip, then the value drawn by the shared
   * value-display renderer for its type.
   */
  metadata?: CardMetadataType[]
  rightTag?: TagDotProps
  actions?: {
    primary?: {
      icon?: IconType
      label: string
      onClick: () => void
    }
    secondary?: {
      icon: IconType
      /** Accessible name - the button shows only its icon. */
      label?: string
      onClick: () => void
    }
  }
  /** Tooltip beside the title, for a caveat that doesn't fit in the row. */
  info?: string
  onClick: () => void
  withPointerCursor?: boolean
  /**
   * Marks the row as the one currently being acted on - the record open in a
   * detail view, say. Tinted surface and a matching border, so it reads as
   * chosen rather than merely hovered, and `aria-current` says so to assistive
   * tech rather than leaving it to colour alone.
   */
  selected?: boolean
}

/** Shared by the item and its skeleton, so the two occupy the same box. */
export const oneListItemRowClassName =
  "flex w-full flex-row flex-wrap items-start gap-2 rounded-md border p-2 focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold"

const BaseOneListItem = React.forwardRef<HTMLDivElement, OneListItemProps>(
  (
    {
      avatar,
      title,
      description,
      bottomTags,
      metadata,
      rightTag,
      actions,
      info,
      onClick,
      withPointerCursor,
      selected = false,
    },
    ref
  ) => (
    <div
      ref={ref}
      aria-current={selected || undefined}
      className={cn(
        oneListItemRowClassName,
        withPointerCursor && "cursor-pointer",
        // Selection outranks hover: without this the tint would drop back to
        // the hover grey the moment the pointer landed on the chosen row.
        selected
          ? "border-f1-border-selected bg-f1-background-selected"
          : "hover:bg-f1-background-hover"
      )}
      onClick={onClick}
    >
      {avatar && <F0Avatar avatar={avatar} size="sm" />}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex min-w-0 flex-1 flex-row items-center gap-1">
          <F0Text variant="label" content={title} ellipsis />
          {info && (
            <Tooltip label={info}>
              <F0Icon
                icon={InfoCircle}
                size="sm"
                className="text-f1-icon-secondary"
              />
            </Tooltip>
          )}
        </div>
        {bottomTags && bottomTags.length > 0 && (
          <div className="-ml-1.5 flex flex-row items-center [&>div]:-mr-1">
            {bottomTags.map((tag, i) => (
              <React.Fragment key={tag.text}>
                <F0TagRaw {...tag} />
                {i < bottomTags.length - 1 && <span>·</span>}
              </React.Fragment>
            ))}
          </div>
        )}
        {description && (
          <F0Text variant="description" content={description} ellipsis />
        )}
        {metadata && metadata.length > 0 && (
          <div className="flex flex-col gap-0.5">
            {metadata.map((item, i) => (
              <CardMetadata key={i} metadata={item} />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-row items-center justify-between gap-2">
        {rightTag && <F0TagDot {...rightTag} />}
        {actions && (
          <div className="flex flex-1 flex-row items-center justify-end gap-2">
            {actions.primary && (
              <F0Button
                variant="outline"
                onClick={actions.primary.onClick}
                label={actions.primary.label}
                icon={actions.primary.icon}
              />
            )}
            {actions.secondary && (
              <F0Button
                variant="outline"
                onClick={actions.secondary.onClick}
                label={actions.secondary.label ?? "Secondary"}
                icon={actions.secondary.icon}
                hideLabel
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
)

export const OneListItemSkeleton = () => (
  <div className={oneListItemRowClassName}>
    <Skeleton className="aspect-square w-6 rounded-full" />
    <div className="flex flex-1 flex-col gap-0.5">
      <Skeleton className="h-4" />
      <Skeleton className="h-4" />
    </div>
  </div>
)

BaseOneListItem.displayName = "OneListItem"

/**
 * A row in a list of things. `OnePersonListItem`'s anatomy - leading avatar,
 * title, inline facts, a status dot and up to two actions - with the person
 * assumption removed: pass any `AvatarVariant` and your own title, so the same
 * row serves workplaces, teams, companies, files or documents.
 *
 * `OnePersonListItem` is this component with a person's name pre-composed.
 *
 * @experimental This is an experimental component use it at your own risk
 */
export const OneListItem = withDataTestId(
  experimentalComponent(
    "OneListItem",
    withSkeleton(BaseOneListItem, OneListItemSkeleton)
  )
)
