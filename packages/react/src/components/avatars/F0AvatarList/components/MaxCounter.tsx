import { cva } from "cva"

import { F0Icon } from "@/components/F0Icon"
import { EllipsisHorizontal } from "@/icons/app"
import { cn } from "@/lib/utils"
import { internalAvatarTypes } from "@/ui/Avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"
import { ScrollArea, ScrollBar } from "@/ui/scrollarea"

import { AvatarVariant, AvatarVariants, F0Avatar } from "../../F0Avatar"
import { type AvatarListSize } from "../types"
import { getAvatarDisplayName } from "../utils"

const sizeVariants = cva({
  base: "flex shrink-0 items-center justify-center bg-f1-background-secondary font-medium text-f1-foreground-secondary",
  variants: {
    size: {
      xs: "h-5 w-5 rounded-xs text-sm",
      sm: "h-6 min-w-6 rounded-sm px-1 text-sm",
      md: "h-8 min-w-8 rounded px-1.5",
    } satisfies Record<AvatarListSize, string>,
    type: {
      base: "",
      rounded: "!rounded-full",
    } satisfies Record<(typeof internalAvatarTypes)[number], string>,
  },
  compoundVariants: [
    {
      size: "sm",
      type: "rounded",
      className: "px-1.5",
    },
    {
      size: "md",
      type: "rounded",
      className: "px-2",
    },
  ],
  defaultVariants: {
    size: "md",
    type: "base",
  },
})

type Props = {
  count: number
  size?: AvatarListSize
  type?: (typeof internalAvatarTypes)[number]
  list?: Omit<AvatarVariant, "type">[]
  avatarType?: AvatarVariants
  /**
   * Controls the popover content scroll behavior.
   * - `"vertical"` (default): caps the popover height at ~172px and scrolls
   *   vertically when the list overflows. Matches the historical behavior.
   * - `"none"`: removes the height cap and lets the popover grow with its
   *   content.
   * @default "vertical"
   */
  tooltipScroll?: "vertical" | "none"
  /**
   * Optional CSS color (token or raw value) applied to the popover text
   * (names and `tooltipDescription` lines). When omitted, the popover
   * inherits the surrounding foreground color.
   */
  tooltipDescriptionFontColor?: string
}

export const MaxCounter = ({
  count,
  size = "md",
  type,
  list,
  avatarType = "person",
  tooltipScroll = "vertical",
  tooltipDescriptionFontColor,
}: Props) => {
  const counter = (
    <div
      className={cn(
        "cursor-default font-medium transition hover:bg-f1-background-secondary-hover",
        sizeVariants({ size, type })
      )}
    >
      {size === "xs" ? (
        <F0Icon icon={EllipsisHorizontal} size="xs" />
      ) : (
        `+${count}`
      )}
    </div>
  )

  if (!list?.length) return counter

  const isVertical = tooltipScroll === "vertical"

  const items = list.map((avatar, index) => {
    const description = getTooltipDescription(avatar)
    return (
      <div
        key={index}
        className={cn(
          "flex items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          isVertical && "w-[180px] min-w-0"
        )}
      >
        <div className="h-6 w-6 shrink-0">
          <F0Avatar
            avatar={{ type: avatarType, ...avatar } as AvatarVariant}
            size="sm"
          />
        </div>
        <div className={cn("flex flex-col", isVertical && "min-w-0 flex-1")}>
          <div
            className={cn(
              "font-semibold",
              isVertical ? "truncate" : "whitespace-nowrap"
            )}
          >
            {getAvatarDisplayName(avatarType, avatar)}
          </div>
          {description && (
            <div
              className={cn(
                "text-sm",
                isVertical ? "truncate" : "whitespace-nowrap",
                tooltipDescriptionFontColor
                  ? "text-current opacity-70"
                  : "text-f1-foreground-secondary"
              )}
            >
              {description}
            </div>
          )}
        </div>
      </div>
    )
  })

  const containerStyle = tooltipDescriptionFontColor
    ? { color: tooltipDescriptionFontColor }
    : undefined

  return (
    <HoverCard>
      <HoverCardTrigger asChild>{counter}</HoverCardTrigger>
      <HoverCardContent side="top" className={cn(!isVertical && "w-auto")}>
        {isVertical ? (
          <ScrollArea
            className="[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col"
            style={containerStyle}
          >
            {items}
            <ScrollBar
              orientation="vertical"
              className="[&_div]:bg-f1-background"
            />
          </ScrollArea>
        ) : (
          <div className="flex flex-col py-1" style={containerStyle}>
            {items}
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  )
}

function getTooltipDescription(avatar: unknown): string | undefined {
  const value = (avatar as { tooltipDescription?: unknown })?.tooltipDescription
  return typeof value === "string" && value.length > 0 ? value : undefined
}
