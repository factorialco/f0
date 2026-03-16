import { forwardRef } from "react"

import { withDataTestId } from "@/lib/data-testid"
import { withSkeleton } from "@/lib/skeleton"

import {
  CardInternal,
  CardInternalProps,
  CardSkeleton,
  cardImageAspectRatios,
  cardImageFits,
  cardImageSizes,
  type CardImageAspectRatio,
  type CardImageFit,
  type CardImageSize,
} from "./CardInternal"

const privateProps = ["forceVerticalMetadata", "disableOverlayLink"] as const

export type F0CardProps = Omit<CardInternalProps, (typeof privateProps)[number]>

export { cardImageAspectRatios, cardImageFits, cardImageSizes }
export type { CardImageAspectRatio, CardImageFit, CardImageSize }

const F0CardBase = forwardRef<HTMLDivElement, F0CardProps>((props, ref) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as CardInternalProps)

  return <CardInternal ref={ref} {...publicProps} />
})

const F0CardSkeleton = ({ compact = false }: { compact?: boolean }) => {
  return <CardSkeleton compact={compact} />
}

F0CardBase.displayName = "F0Card"

export const F0Card = withDataTestId(withSkeleton(F0CardBase, F0CardSkeleton))
