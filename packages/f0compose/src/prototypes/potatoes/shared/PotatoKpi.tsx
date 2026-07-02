import { F0Box, F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import type { IconType } from "@factorialco/f0-react"

/**
 * Compact KPI tile used in the Potatoes prototype. No trend comparison
 * (we don't have historical potato data) — just label, big value, and an
 * optional caption that holds the "interesting fact" payload.
 */

type Props = {
  icon: IconType
  label: string
  value: string
  caption?: string
}

export function PotatoKpi({ icon, label, value, caption }: Props) {
  return (
    <F0Box
      padding="md"
      border="default"
      borderRadius="md"
      background="primary"
      display="flex"
      flexDirection="column"
      gap="md"
    >
      <F0Box display="flex" alignItems="center" gap="sm">
        <F0Icon icon={icon} size="sm" />
        <F0Heading content={label} variant="heading" as="h3" />
      </F0Box>
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading content={value} variant="heading-large" as="h2" />
        {caption ? <F0Text content={caption} variant="description" /> : null}
      </F0Box>
    </F0Box>
  )
}
