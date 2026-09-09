import type { ReactNode } from "react"

import { F0Box, F0Text } from "@factorialco/f0-react"

/**
 * The bordered white card used for every block on the Profile overview. A
 * header row (title + optional caption, with an optional "open" chevron on the
 * right) sits above the card body. Pure layout shell — callers fill `children`.
 */
export function InfoCard({
  title,
  caption,
  expandable = false,
  children,
}: {
  title: string
  caption?: string
  expandable?: boolean
  children: ReactNode
}) {
  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="md"
      padding="md"
      border="default"
      borderColor="secondary"
      borderRadius="xl"
    >
      <F0Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        gap="sm"
      >
        <F0Box display="flex" alignItems="baseline" gap="xs">
          <F0Text content={title} variant="label" />
          {caption ? <F0Text content={`· ${caption}`} variant="small" /> : null}
        </F0Box>
        {expandable ? <F0Text content="›" variant="body" /> : null}
      </F0Box>
      {children}
    </F0Box>
  )
}
