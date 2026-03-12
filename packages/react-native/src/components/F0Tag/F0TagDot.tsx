import React from "react"
import { View } from "react-native"

import { enforceTextFormat } from "../../lib/text"
import { baseColors } from "../../styles"

import type { F0TagDotProps } from "./F0Tag.types"
import { F0TagRoot } from "./F0TagRoot"

/**
 * Dot-style semantic tag with color marker.
 */
const F0TagDot = React.memo(function F0TagDot({
  text,
  additionalAccessibleText,
  info,
  ...props
}: F0TagDotProps) {
  enforceTextFormat(text, { disallowEmpty: true })

  const backgroundColor =
    "color" in props && props.color
      ? `hsl(${baseColors[props.color][50]})`
      : "customColor" in props && props.customColor

  if (!backgroundColor) return null

  return (
    <F0TagRoot
      className="border border-solid border-f0-border-secondary"
      left={
        <View
          className="m-1 aspect-square w-2 rounded-full"
          style={{ backgroundColor }}
          aria-hidden
        />
      }
      text={text}
      additionalAccessibleText={additionalAccessibleText}
      info={info}
    />
  )
})

F0TagDot.displayName = "F0Tag.Dot"

export { F0TagDot }
