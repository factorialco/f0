import React, { useMemo } from "react"
import { View } from "react-native"
import { tv } from "tailwind-variants"

import { EllipsisHorizontal } from "../../icons/app"
import { F0Icon } from "../primitives/F0Icon"
import { F0Text, type TypographyVariant } from "../primitives/F0Text"

import { F0AvatarCompany } from "./F0AvatarCompany"
import { F0AvatarFile } from "./F0AvatarFile"
import { F0AvatarFlag } from "./F0AvatarFlag"
import {
  AVATAR_ITEM_WIDTHS,
  AVATAR_LIST_GAPS,
  RING_BORDER_RADIUS,
  RING_WIDTHS,
} from "./F0AvatarList.clips"
import {
  type AvatarListSize,
  type F0AvatarListProps,
} from "./F0AvatarList.types"
import { F0AvatarPerson } from "./F0AvatarPerson"
import { F0AvatarTeam } from "./F0AvatarTeam"

const counterVariants = tv({
  base: "flex shrink-0 items-center justify-center bg-f0-background-secondary",
  variants: {
    size: {
      xs: "h-5 w-5 rounded-xs",
      sm: "h-6 min-w-6 rounded-sm px-1",
      md: "h-8 min-w-8 rounded px-1.5",
    } satisfies Record<AvatarListSize, string>,
    shape: {
      base: "",
      rounded: "rounded-full",
    },
  },
  compoundVariants: [
    { size: "sm", shape: "rounded", className: "px-1.5" },
    { size: "md", shape: "rounded", className: "px-2" },
  ],
  defaultVariants: {
    size: "md",
    shape: "base",
  },
})

const counterTextVariant: Record<AvatarListSize, TypographyVariant> = {
  xs: "body-xs-medium",
  sm: "body-xs-medium",
  md: "body-sm-medium",
}

function renderAvatar(
  type: F0AvatarListProps["type"],
  avatar: Record<string, unknown>,
  size: AvatarListSize
) {
  switch (type) {
    case "person":
      return (
        <F0AvatarPerson
          firstName={avatar.firstName as string}
          lastName={avatar.lastName as string}
          src={avatar.src as string | undefined}
          size={size}
        />
      )
    case "team":
      return (
        <F0AvatarTeam
          name={avatar.name as string}
          src={avatar.src as string | undefined}
          size={size}
        />
      )
    case "company":
      return (
        <F0AvatarCompany
          name={avatar.name as string}
          src={avatar.src as string | undefined}
          size={size}
        />
      )
    case "flag":
      return <F0AvatarFlag flag={avatar.flag as string} size={size} />
    case "file":
      return (
        <F0AvatarFile
          file={avatar.file as { name: string; type?: string }}
          size={size}
        />
      )
  }
}

/**
 * Wraps a non-last avatar in a background-colored ring that creates
 * visual separation when avatars overlap via negative margins.
 * This approach works cross-platform (unlike SVG ForeignObject which
 * is unreliable on Android).
 */
function RingWrapper({
  children,
  shape,
  size,
  isLast,
}: {
  children: React.ReactNode
  shape: "base" | "rounded"
  size: AvatarListSize
  isLast: boolean
}) {
  const itemWidth = AVATAR_ITEM_WIDTHS[size]

  if (isLast) {
    return (
      <View style={{ width: itemWidth, height: itemWidth }}>{children}</View>
    )
  }

  const ring = RING_WIDTHS[size]
  const outerSize = itemWidth + ring * 2
  const borderRadius =
    shape === "rounded" ? outerSize / 2 : RING_BORDER_RADIUS[size]

  return (
    <View
      className="items-center justify-center bg-f0-background"
      style={{
        width: outerSize,
        height: outerSize,
        borderRadius,
      }}
    >
      {children}
    </View>
  )
}

export const F0AvatarList = React.memo(function F0AvatarList({
  avatars,
  size = "md",
  type,
  max = 3,
  remainingCount,
}: F0AvatarListProps) {
  const visibleCount = Math.min(avatars.length, max)
  const overflowCount = (remainingCount ?? 0) + (avatars.length - visibleCount)
  const showCounter = overflowCount > 0

  const gap = AVATAR_LIST_GAPS[size]
  const shape = type === "person" ? "rounded" : "base"
  const itemWidth = AVATAR_ITEM_WIDTHS[size]

  const visibleAvatars = useMemo(
    () => avatars.slice(0, visibleCount),
    [avatars, visibleCount]
  )

  return (
    <View className="flex-row items-center">
      {visibleAvatars.map((avatar, index) => {
        const marginLeft = index === 0 ? 0 : gap
        const isLast = index === visibleCount - 1 && !showCounter

        return (
          <View key={index} style={{ marginLeft }}>
            <RingWrapper shape={shape} size={size} isLast={isLast}>
              {renderAvatar(type, avatar as Record<string, unknown>, size)}
            </RingWrapper>
          </View>
        )
      })}
      {showCounter && (
        <View
          style={{
            marginLeft: gap,
            minWidth: itemWidth,
            height: itemWidth,
          }}
        >
          <View className={counterVariants({ size, shape })}>
            {size === "xs" ? (
              <F0Icon icon={EllipsisHorizontal} size="xs" />
            ) : (
              <F0Text variant={counterTextVariant[size]} color="secondary">
                +{overflowCount}
              </F0Text>
            )}
          </View>
        </View>
      )}
    </View>
  )
})
