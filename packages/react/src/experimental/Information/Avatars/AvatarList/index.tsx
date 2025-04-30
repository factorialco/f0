import { sizes } from "@/ui/avatar"
import { OverflowList } from "@/ui/OverflowList"
import { cva } from "cva"
import { Tooltip } from "../../../Overlays/Tooltip"
import { Avatar, AvatarVariant } from "../Avatar"
import { MaxCounter } from "./MaxCounter"

type AvatarType = AvatarVariant["type"]

const avatarListVariants = cva({
  base: "flex items-center",
  variants: {
    size: {
      xsmall: "-space-x-0.5",
      small: "-space-x-[3px]",
      medium: "-space-x-1",
      large: "-space-x-2",
      xlarge: "-space-x-3",
    } satisfies Record<(typeof sizes)[number], string>,
  },
  defaultVariants: {
    size: "medium",
  },
})

const CLIP_MASK: Record<
  "base" | "rounded",
  Record<(typeof sizes)[number], string>
> = {
  base: {
    xlarge:
      "path('M2.17987 10.9202C0 15.1984 0 20.7989 0 32V40C0 51.201 0 56.8016 2.17987 61.0798C4.09734 64.843 7.15695 67.9027 10.9202 69.8201C15.1984 72 20.7989 72 32 72H40C51.201 72 56.8016 72 61.0798 69.8201C62.1088 69.2958 63.0852 68.6861 64 68C61.5691 66.1769 59.573 63.8141 58.1799 61.0798C56 56.8016 56 51.201 56 40V32C56 20.7989 56 15.1984 58.1799 10.9202C59.573 8.18594 61.5691 5.82314 64 3.99998C63.0852 3.31386 62.1088 2.70417 61.0798 2.17987C56.8016 0 51.201 0 40 0H32C20.799 0 15.1984 0 10.9202 2.17987C7.15695 4.09734 4.09734 7.15695 2.17987 10.9202Z')",
    large:
      "path('M1.7439 8.73615C0 12.1587 0 16.6392 0 25.6V30.4C0 39.3608 0 43.8413 1.7439 47.2638C3.27787 50.2744 5.72556 52.7221 8.73615 54.2561C12.1587 56 16.6392 56 25.6 56H30.4C39.3608 56 43.8413 56 47.2638 54.2561C48.2389 53.7593 49.1549 53.1666 50 52.49C48.2359 51.0776 46.781 49.2994 45.7439 47.2638C44 43.8413 44 39.3608 44 30.4V25.6C44 16.6392 44 12.1587 45.7439 8.73615C46.781 6.70063 48.2359 4.92243 50 3.50999C49.1549 2.83339 48.2389 2.24072 47.2638 1.7439C43.8413 0 39.3608 0 30.4 0H25.6C16.6392 0 12.1587 0 8.73615 1.7439C5.72556 3.27787 3.27787 5.72556 1.7439 8.73615Z')",
    medium:
      "path('M1.08993 5.46009C0 7.59921 0 10.3995 0 16C0 21.6005 0 24.4008 1.08993 26.5399C2.04867 28.4215 3.57847 29.9513 5.46009 30.9101C7.59921 32 10.3995 32 16 32C21.6005 32 24.4008 32 26.5399 30.9101C27.4506 30.446 28.279 29.8482 29 29.1414C28.2314 28.388 27.5846 27.5108 27.0899 26.5399C26 24.4008 26 21.6005 26 16C26 10.3995 26 7.59921 27.0899 5.46009C27.5846 4.48921 28.2314 3.612 29 2.85857C28.279 2.15181 27.4506 1.55398 26.5399 1.08993C24.4008 0 21.6005 0 16 0C10.3995 0 7.59921 0 5.46009 1.08993C3.57847 2.04867 2.04867 3.57847 1.08993 5.46009Z')",
    small:
      "path('M0.608964 4.93853C0 6.4087 0 8.27247 0 12C0 15.7275 0 17.5913 0.608964 19.0615C1.42092 21.0217 2.97831 22.5791 4.93853 23.391C6.4087 24 8.27247 24 12 24C15.7275 24 17.5913 24 19.0615 23.391C19.9729 23.0135 20.7972 22.4749 21.5 21.8095C20.6912 21.0438 20.0434 20.1103 19.609 19.0615C19 17.5913 19 15.7275 19 12C19 8.27247 19 6.4087 19.609 4.93853C20.0434 3.88971 20.6912 2.95622 21.5 2.19052C20.7972 1.52515 19.9729 0.986481 19.0615 0.608964C17.5913 0 15.7275 0 12 0C8.27247 0 6.4087 0 4.93853 0.608964C2.97831 1.42092 1.42092 2.97831 0.608964 4.93853Z')",
    xsmall:
      "path('M0.653961 3.27606C0 4.55953 0 6.23969 0 9.6V11.4C0 14.7603 0 16.4405 0.653961 17.7239C1.2292 18.8529 2.14708 19.7708 3.27606 20.346C4.55953 21 6.23969 21 9.6 21H10.4C13.7603 21 15.4405 21 16.7239 20.346C17.188 20.1096 17.6164 19.8152 18 19.4721C17.4504 18.9805 16.9927 18.3889 16.654 17.7239C16 16.4405 16 14.7603 16 11.4V9.6C16 6.23969 16 4.55953 16.654 3.27606C16.9927 2.61115 17.4504 2.01946 18 1.52786C17.6164 1.18476 17.188 0.890414 16.7239 0.653961C15.4405 0 13.7603 0 10.4 0H9.6C6.23969 0 4.55953 0 3.27606 0.653961C2.14708 1.2292 1.2292 2.14708 0.653961 3.27606Z')",
  },
  rounded: {
    xlarge:
      "path('M64 13.3707C58.9968 19.5536 56 27.4268 56 36C56 44.5732 58.9968 52.4464 64 58.6293C57.4002 66.7853 47.3091 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C47.3091 0 57.4002 5.21466 64 13.3707Z')",
    large:
      "path('M50 10.6776C46.2423 15.4435 44 21.4599 44 28C44 34.5401 46.2423 40.5565 50 45.3224C44.8727 51.8253 36.9239 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C36.9239 0 44.8727 4.17468 50 10.6776Z')",
    medium:
      "path('M29 6.67055C27.1119 9.29683 26 12.5186 26 16C26 19.4814 27.1119 22.7032 29 25.3295C26.0958 29.3692 21.3551 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C21.3551 0 26.0958 2.63083 29 6.67055Z')",
    small:
      "path('M21.3746 4.50813C19.1755 1.76008 15.7933 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C15.7933 24 19.1755 22.2399 21.3746 19.4919C19.8788 17.3743 19 14.7898 19 12C19 9.21023 19.8788 6.62571 21.3746 4.50813Z')",
    xsmall:
      "path('M18 4.19899C16.7442 5.95406 16 8.13577 16 10.5C16 12.8642 16.7442 15.0459 18 16.801C16.1755 19.3508 13.2712 21 10 21C4.47716 21 0 16.299 0 10.5C0 4.70102 4.47716 0 10 0C13.2712 0 16.1755 1.64923 18 4.19899Z')",
  },
}

type Props = {
  avatars: AvatarVariant[]
  size?: (typeof sizes)[number]
  type?: AvatarType

  /**
   * Whether to hide tooltips in each avatar.
   * @default false
   */
  noTooltip?: boolean

  /**
   * The maximum number of avatars to display.
   * @default 3
   */
  max?: number

  /**
   * The remaining number to display.
   */
  remainingCount?: number

  /**
   * The layout of the avatar list.
   * - "fill" - Avatars will expand to fill the available width, with overflow items shown in a counter
   * - "compact" - Avatars will be stacked tightly together up to the max limit, with remaining shown in counter
   * @default "compact"
   */
  layout?: "fill" | "compact"
}

export const AvatarList = ({
  avatars,
  size = "medium",
  type,
  noTooltip = false,
  remainingCount: initialRemainingCount,
  max = 3,
  layout = "compact",
}: Props) => {
  if (layout === "fill") {
    return (
      <OverflowList
        items={avatars}
        renderListItem={(avatar) => {
          const displayName =
            avatar.type === "person"
              ? `${avatar.firstName} ${avatar.lastName}`
              : avatar.name

          return (
            <Tooltip label={displayName}>
              <div>
                <Avatar avatar={avatar} size={size} />
              </div>
            </Tooltip>
          )
        }}
        renderDropdownItem={() => null}
        forceShowingOverflowIndicator={initialRemainingCount !== undefined}
        renderOverflowIndicator={(count) => (
          <MaxCounter
            count={(initialRemainingCount ?? 0) + count}
            size={size}
            type={type === "person" ? "rounded" : "base"}
            list={
              initialRemainingCount
                ? undefined
                : avatars.slice(avatars.length - count)
            }
          />
        )}
        overflowIndicatorWithPopover={false}
        className="flex-1"
      />
    )
  }

  const visibleAvatars = avatars.slice(0, max)
  const remainingAvatars = avatars.slice(max)
  const remainingCount = initialRemainingCount ?? avatars.length - max
  const showCounter = remainingCount > 0

  return (
    <div className={avatarListVariants({ size })}>
      {visibleAvatars.map((avatar, index) => {
        const displayName =
          avatar.type === "person"
            ? `${avatar.firstName} ${avatar.lastName}`
            : avatar.name

        const clippedAvatar = (
          <div
            className="flex h-fit w-fit shrink-0 items-center justify-center"
            style={
              index !== avatars.length - 1
                ? {
                    clipPath:
                      CLIP_MASK[type === "person" ? "rounded" : "base"][size],
                  }
                : undefined
            }
          >
            <Avatar avatar={avatar} size={size} />
          </div>
        )

        return (
          <div key={index}>
            {noTooltip ? (
              clippedAvatar
            ) : (
              <Tooltip label={displayName}>{clippedAvatar}</Tooltip>
            )}
          </div>
        )
      })}
      {showCounter && (
        <MaxCounter
          count={remainingCount}
          size={size}
          type={type === "person" ? "rounded" : "base"}
          list={
            noTooltip || initialRemainingCount ? undefined : remainingAvatars
          }
        />
      )}
    </div>
  )
}

AvatarList.displayName = "AvatarList"
