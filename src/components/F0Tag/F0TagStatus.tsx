import React from "react"
import { View } from "react-native"

import { enforceTextFormat } from "../../lib/text"
import { cn } from "../../lib/utils"

import {
  type F0TagProps,
  f0TagStatusDotClasses,
  f0TagStatusLevelClasses,
  type F0TagStatusProps,
} from "./F0Tag.types"
import { F0TagRoot } from "./F0TagRoot"

const f0TagStatusTextColorMap: Record<
  F0TagStatusProps["variant"],
  F0TagProps["textColor"]
> = {
  neutral: "secondary",
  info: "info",
  positive: "positive",
  warning: "warning",
  critical: "critical",
}

/**
 * Status semantic tag with dot marker and variant tones.
 */
const F0TagStatus = React.memo(function F0TagStatus({
  text,
  additionalAccessibleText,
  variant,
}: F0TagStatusProps) {
  enforceTextFormat(text, { disallowEmpty: true })

  return (
    <F0TagRoot
      className={cn(f0TagStatusLevelClasses[variant])}
      left={
        <View
          className={cn(
            "m-1 aspect-square w-2 rounded-full",
            f0TagStatusDotClasses[variant]
          )}
          aria-hidden
        />
      }
      text={text}
      textColor={f0TagStatusTextColorMap[variant]}
      additionalAccessibleText={additionalAccessibleText}
    />
  )
})

F0TagStatus.displayName = "F0Tag.Status"

export { F0TagStatus }
