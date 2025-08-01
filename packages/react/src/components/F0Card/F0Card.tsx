import { withSkeleton } from "@/lib/skeleton"
import { forwardRef } from "react"
import { CardInternal, CardInternalProps, CardSkeleton } from "./CardInternal"

const privateProps = ["forceVerticalMetadata"] as const

export type F0CardProps = Omit<CardInternalProps, (typeof privateProps)[number]>

const F0CardBase = forwardRef<HTMLDivElement, F0CardProps>((props) => {
  const publicProps = privateProps.reduce((acc, key) => {
    const { [key]: _, ...rest } = acc
    return rest
  }, props as CardInternalProps)

  return <CardInternal {...publicProps} />
})

const F0CardSkeleton = ({ compact = false }: { compact?: boolean }) => {
  return <CardSkeleton compact={compact} />
}

F0CardBase.displayName = "F0Card"

export const F0Card = withSkeleton(F0CardBase, F0CardSkeleton)
