import { F0Box, F0Heading, F0Text } from "@factorialco/f0-react"
import type { ReactNode } from "react"

type SizeToken = "60" | "72" | "80" | "96"

type Props = {
  title: string
  description?: string
  /** Height of the chart area (f0 size token). @default "72" */
  chartHeight?: SizeToken
  children: ReactNode
}

/**
 * Card chrome for a single dashboard chart. We roll our own instead of
 * F0Widget because F0Widget isn't exported from the f0-react main build that
 * f0compose consumes. Mirrors the visual rhythm of F0Widget: title header +
 * a fixed-height body that the chart fills.
 */
export function DashboardWidget({
  title,
  description,
  chartHeight = "72",
  children,
}: Props) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="md"
      padding="md"
      border="default"
      borderRadius="md"
      background="primary"
    >
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading content={title} variant="heading" as="h3" />
        {description ? (
          <F0Text content={description} variant="description" />
        ) : null}
      </F0Box>
      <F0Box height={chartHeight} width="full">
        {children}
      </F0Box>
    </F0Box>
  )
}
