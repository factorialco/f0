import { F0Box, F0Heading, F0Text } from "@factorialco/f0-react"

export type SummaryItem = { label: string; value: string }

// Read-only summary section. NO box: a section heading + a calm label/value
// grid on the bare canvas, separated by whitespace (Stripe "Details" / invoice
// disposition). Sections are stacked with the parent's gap — no nested cards.
export function SummarySection({
  title,
  items,
  columns = "3",
}: {
  title?: string
  items: SummaryItem[]
  columns?: "2" | "3"
}) {
  const grid = (
    <F0Box display="grid" columns={columns} gap="xl">
      {items.map((it) => (
        <F0Box key={it.label} display="flex" flexDirection="column" gap="xs">
          <F0Text variant="label" content={it.label} />
          <F0Text variant="body" content={it.value} />
        </F0Box>
      ))}
    </F0Box>
  )

  if (!title) return grid

  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Heading as="h2" variant="heading" content={title} />
      {grid}
    </F0Box>
  )
}
