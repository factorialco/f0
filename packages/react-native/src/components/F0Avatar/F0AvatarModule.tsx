import React from "react"
import { View } from "react-native"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"
import { tv } from "tailwind-variants"

import { applyIconInterop } from "../primitives/F0Icon"

import { modules } from "./F0Avatar.modules"
import {
  type F0AvatarModuleProps,
  type F0AvatarModuleSize,
} from "./F0Avatar.types"

const moduleAvatarVariants = tv({
  base: "relative flex shrink-0 items-center justify-center",
  variants: {
    size: {
      xxs: "h-2.5 w-2.5",
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

const iconContainerVariants = tv({
  base: "absolute inset-0 items-center justify-center z-10",
  variants: {
    size: {
      xxs: "h-2.5 w-2.5",
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

const iconSizeVariants = tv({
  base: "relative text-f0-foreground-inverse drop-shadow",
  variants: {
    size: {
      xxs: "h-[6px] w-[6px]",
      xs: "h-2 w-2",
      sm: "h-[14px] w-[14px]",
      md: "h-[14px] w-[14px]",
      lg: "h-[18px] w-[18px]",
      xl: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

const squirclePath =
  "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0"

export const F0AvatarModule = React.memo(function F0AvatarModule({
  module,
  size = "lg",
}: F0AvatarModuleProps) {
  const IconComponent = applyIconInterop(modules[module])
  const code = Math.random().toString(36).substring(2, 15)
  const gradientId = `gradient-${code}`

  return (
    <View className={moduleAvatarVariants({ size })} accessibilityRole="image">
      <Svg
        viewBox="0 0 100 100"
        className="absolute h-full w-full"
        preserveAspectRatio="none"
      >
        <Defs>
          <LinearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#FF355E" />
            <Stop offset="44%" stopColor="#FF355E" />
            <Stop offset="100%" stopColor="#D62D4F" />
          </LinearGradient>
        </Defs>
        <Path
          d={squirclePath}
          fill={`url(#${gradientId})`}
          stroke="white"
          strokeWidth={10}
          transform="scale(0.95) translate(2.5 2.5)"
        />
      </Svg>
      <View className={iconContainerVariants({ size })}>
        <IconComponent className={iconSizeVariants({ size })} />
      </View>
    </View>
  )
})
