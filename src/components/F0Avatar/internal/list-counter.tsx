import React from "react"
import { View } from "react-native"
import { tv } from "tailwind-variants"

import { EllipsisHorizontal } from "../../../icons/app"
import { F0Icon } from "../../primitives/F0Icon"
import { F0Text, type TypographyVariant } from "../../primitives/F0Text"
import type { AvatarListSize } from "../F0AvatarList.types"

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

export function AvatarListCounter({
  size,
  shape,
  overflowCount,
}: {
  size: AvatarListSize
  shape: "base" | "rounded"
  overflowCount: number
}) {
  return (
    <View className={counterVariants({ size, shape })}>
      {size === "xs" ? (
        <F0Icon icon={EllipsisHorizontal} size="xs" />
      ) : (
        <F0Text variant={counterTextVariant[size]} color="secondary">
          +{overflowCount}
        </F0Text>
      )}
    </View>
  )
}
