import { OverflowList } from "@/ui/OverflowList"
import { AvatarVariant, F0Avatar } from "../F0Avatar"
import { MaxCounter } from "./components/MaxCounter"

import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { useMemo } from "react"
import { AvatarListSize, avatarListSizes, F0AvatarListProps } from "./types"
import { getAvatarDisplayName } from "./utils"

const CLIP_MASK: Record<"base" | "rounded", Record<AvatarListSize, string>> = {
  base: {
    md: "path('M1.08993 5.46009C0 7.59921 0 10.3995 0 16C0 21.6005 0 24.4008 1.08993 26.5399C2.04867 28.4215 3.57847 29.9513 5.46009 30.9101C7.59921 32 10.3995 32 16 32C21.6005 32 24.4008 32 26.5399 30.9101C27.4506 30.446 28.279 29.8482 29 29.1414C28.2314 28.388 27.5846 27.5108 27.0899 26.5399C26 24.4008 26 21.6005 26 16C26 10.3995 26 7.59921 27.0899 5.46009C27.5846 4.48921 28.2314 3.612 29 2.85857C28.279 2.15181 27.4506 1.55398 26.5399 1.08993C24.4008 0 21.6005 0 16 0C10.3995 0 7.59921 0 5.46009 1.08993C3.57847 2.04867 2.04867 3.57847 1.08993 5.46009Z')",
    sm: "path('M0.608964 4.93853C0 6.4087 0 8.27247 0 12C0 15.7275 0 17.5913 0.608964 19.0615C1.42092 21.0217 2.97831 22.5791 4.93853 23.391C6.4087 24 8.27247 24 12 24C15.7275 24 17.5913 24 19.0615 23.391C19.9729 23.0135 20.7972 22.4749 21.5 21.8095C20.6912 21.0438 20.0434 20.1103 19.609 19.0615C19 17.5913 19 15.7275 19 12C19 8.27247 19 6.4087 19.609 4.93853C20.0434 3.88971 20.6912 2.95622 21.5 2.19052C20.7972 1.52515 19.9729 0.986481 19.0615 0.608964C17.5913 0 15.7275 0 12 0C8.27247 0 6.4087 0 4.93853 0.608964C2.97831 1.42092 1.42092 2.97831 0.608964 4.93853Z')",
    xs: "path('M0.653961 3.27606C0 4.55953 0 6.23969 0 9.6V11.4C0 14.7603 0 16.4405 0.653961 17.7239C1.2292 18.8529 2.14708 19.7708 3.27606 20.346C4.55953 21 6.23969 21 9.6 21H10.4C13.7603 21 15.4405 21 16.7239 20.346C17.188 20.1096 17.6164 19.8152 18 19.4721C17.4504 18.9805 16.9927 18.3889 16.654 17.7239C16 16.4405 16 14.7603 16 11.4V9.6C16 6.23969 16 4.55953 16.654 3.27606C16.9927 2.61115 17.4504 2.01946 18 1.52786C17.6164 1.18476 17.188 0.890414 16.7239 0.653961C15.4405 0 13.7603 0 10.4 0H9.6C6.23969 0 4.55953 0 3.27606 0.653961C2.14708 1.2292 1.2292 2.14708 0.653961 3.27606Z')",
  },
  rounded: {
    md: "path('M29 6.67055C27.1119 9.29683 26 12.5186 26 16C26 19.4814 27.1119 22.7032 29 25.3295C26.0958 29.3692 21.3551 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C21.3551 0 26.0958 2.63083 29 6.67055Z')",
    sm: "path('M21.3746 4.50813C19.1755 1.76008 15.7933 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C15.7933 24 19.1755 22.2399 21.3746 19.4919C19.8788 17.3743 19 14.7898 19 12C19 9.21023 19.8788 6.62571 21.3746 4.50813Z')",
    xs: "path('M18 4.19899C16.7442 5.95406 16 8.13577 16 10.5C16 12.8642 16.7442 15.0459 18 16.801C16.1755 19.3508 13.2712 21 10 21C4.47716 21 0 16.299 0 10.5C0 4.70102 4.47716 0 10 0C13.2712 0 16.1755 1.64923 18 4.19899Z')",
  },
}

export const F0AvatarList = ({
  avatars,
  size = "md",
  type,
  noTooltip = false,
  remainingCount: initialRemainingCount,
  max,
}: F0AvatarListProps) => {
  // Check legacy size
  if (size && !avatarListSizes.includes(size)) {
    const sizesMappingList: Record<string, AvatarListSize> = {
      small: "sm",
      medium: "md",
      xsmall: "xs",
    }
    console.warn(
      `The avatar list size: ${size} is deprecated. Use ${sizesMappingList[size]} instead.`
    )
    size = sizesMappingList[size] ?? "md"
  }

  const gaps = {
    xs: -2,
    sm: -3,
    md: -4,
  } satisfies Record<AvatarListSize, number>
  const gap = gaps[size] ?? 0

  const itemWidth = useMemo(() => {
    const sizeWidth = {
      xs: 20,
      sm: 24,
      md: 32,
    } satisfies Record<AvatarListSize, number>
    return sizeWidth[size]
  }, [size])

  return (
    <OverflowList
      max={max}
      items={avatars.map((avatar) => ({ type, ...avatar }) as AvatarVariant)}
      gap={gap}
      itemsWidth={itemWidth}
      className="flex items-center"
      renderListItem={(avatar, index) => {
        const displayName = getAvatarDisplayName(type, avatar)

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
            <F0Avatar
              avatar={{ ...avatar, type } as AvatarVariant}
              size={size}
            />
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
      }}
      renderDropdownItem={() => null}
      forceShowingOverflowIndicator={initialRemainingCount !== undefined}
      renderOverflowIndicator={(count) => (
        <div
          className="flex h-fit w-fit items-center"
          style={{ marginLeft: gap }}
        >
          <MaxCounter
            count={(initialRemainingCount ?? 0) + count}
            size={size}
            type={type === "person" ? "rounded" : "base"}
            avatarType={type}
            list={
              initialRemainingCount
                ? undefined
                : avatars.slice(avatars.length - count)
            }
          />
        </div>
      )}
      overflowIndicatorWithPopover={false}
    />
  )
}

F0AvatarList.displayName = "AvatarList"
