import { BaseTag } from "@/components/tags/BaseTag"
import { useTextFormatEnforcer } from "@/lib/text"
import { baseColors } from "@factorialco/f0-core"
import { forwardRef } from "react"
import type { NewColor, Props } from "./types"

export const tagDotColors = Object.keys(baseColors) as NewColor[]

export const F0TagDot = forwardRef<HTMLDivElement, Props>(
  ({ text, ...props }, ref) => {
    useTextFormatEnforcer(text, { disallowEmpty: true })

    const backgroundColor =
      "color" in props && props.color
        ? `hsl(${baseColors[props.color][50]})`
        : "customColor" in props && props.customColor

    if (!backgroundColor) return null

    return (
      <BaseTag
        ref={ref}
        className="border-[1px] border-solid border-f1-border-secondary"
        left={
          <div
            className="m-1 aspect-square h-2 w-2 rounded-full"
            style={{
              backgroundColor,
            }}
            aria-hidden
          />
        }
        text={text}
      />
    )
  }
)

F0TagDot.displayName = "F0TagDot"
