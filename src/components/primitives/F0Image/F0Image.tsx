import { Image as ExpoImage } from "expo-image"
import React from "react"
import { withUniwind } from "uniwind"

import { cn } from "../../../lib/utils"

import type { F0ImageProps } from "./F0Image.types"

const UniwindExpoImage = withUniwind(ExpoImage)

/**
 * F0Image - Image primitive for React Native in F0.
 *
 * Wraps `expo-image` to provide className support and sane defaults.
 */
const F0Image = React.memo(
  React.forwardRef<React.ElementRef<typeof ExpoImage>, F0ImageProps>(
    (
      {
        source,
        className,
        style,
        contentFit = "cover",
        transition = 150,
        cachePolicy = "memory-disk",
        ...rest
      },
      ref
    ) => {
      return (
        <UniwindExpoImage
          ref={ref}
          source={source}
          className={cn("h-full w-full", className)}
          style={style}
          contentFit={contentFit}
          transition={transition}
          cachePolicy={cachePolicy}
          {...rest}
        />
      )
    }
  )
)

F0Image.displayName = "F0Image"

export { F0Image }
