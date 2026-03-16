import React, { useId } from "react"
import { View } from "react-native"

import { AVATAR_ITEM_WIDTHS, AVATAR_LIST_GAPS } from "./F0AvatarList.clips"
import { type F0AvatarListAnyProps } from "./F0AvatarList.types"
import { getSvgAvatarData, renderAvatar } from "./internal/list-avatar"
import { AvatarListCounter } from "./internal/list-counter"
import { ClippedAvatar } from "./internal/list-svg"
import { type AvatarRenderInput } from "./internal/list-types"

export const F0AvatarList = React.memo(function F0AvatarList({
  avatars,
  size = "md",
  type,
  max = 3,
  remainingCount,
}: F0AvatarListAnyProps) {
  const listId = useId()
  const safeMax = Math.max(0, max)
  const visibleCount = Math.min(avatars.length, safeMax)
  const overflowCount = (remainingCount ?? 0) + (avatars.length - visibleCount)
  const showCounter = overflowCount > 0

  const gap = AVATAR_LIST_GAPS[size]
  const shape: "base" | "rounded" = type === "person" ? "rounded" : "base"
  const itemWidth = AVATAR_ITEM_WIDTHS[size]

  const renderVisibleAvatar = (input: AvatarRenderInput, index: number) => {
    const marginLeft = index === 0 ? 0 : gap
    const isLast = index === visibleCount - 1 && !showCounter

    return (
      <View key={index} style={{ marginLeft }}>
        <ClippedAvatar
          clipId={`${listId}-clip-${index}`}
          shape={shape}
          size={size}
          isLast={isLast}
          svgData={getSvgAvatarData(input, size)}
        >
          {isLast ? renderAvatar(input, size) : null}
        </ClippedAvatar>
      </View>
    )
  }

  const renderedAvatars = (() => {
    switch (type) {
      case "person":
        return avatars
          .slice(0, visibleCount)
          .map((avatar, index) =>
            renderVisibleAvatar({ type: "person", avatar }, index)
          )
      case "team":
        return avatars
          .slice(0, visibleCount)
          .map((avatar, index) =>
            renderVisibleAvatar({ type: "team", avatar }, index)
          )
      case "company":
        return avatars
          .slice(0, visibleCount)
          .map((avatar, index) =>
            renderVisibleAvatar({ type: "company", avatar }, index)
          )
      case "flag":
        return avatars
          .slice(0, visibleCount)
          .map((avatar, index) =>
            renderVisibleAvatar({ type: "flag", avatar }, index)
          )
      case "file":
        return avatars
          .slice(0, visibleCount)
          .map((avatar, index) =>
            renderVisibleAvatar({ type: "file", avatar }, index)
          )
    }
  })()

  return (
    <View className="flex-row items-center">
      {renderedAvatars}
      {showCounter && (
        <View
          style={{
            marginLeft: gap,
            minWidth: itemWidth,
            height: itemWidth,
          }}
        >
          <AvatarListCounter
            size={size}
            shape={shape}
            overflowCount={overflowCount}
          />
        </View>
      )}
    </View>
  )
})
