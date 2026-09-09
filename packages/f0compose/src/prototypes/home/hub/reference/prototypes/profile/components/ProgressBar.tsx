import { F0Box } from "@factorialco/f0-react"

/**
 * A thin rounded progress track + fill, matching the teal bars on the Profile
 * overview (Goals, Timesheet). F0Box only takes token widths, so the percentage
 * is snapped to the nearest fraction token — close enough for a prototype.
 */
const FRACTIONS: { upTo: number; token: string }[] = [
  { upTo: 8, token: "0" },
  { upTo: 18, token: "1/6" },
  { upTo: 22, token: "1/5" },
  { upTo: 29, token: "1/4" },
  { upTo: 37, token: "1/3" },
  { upTo: 45, token: "2/5" },
  { upTo: 55, token: "1/2" },
  { upTo: 63, token: "3/5" },
  { upTo: 70, token: "2/3" },
  { upTo: 78, token: "3/4" },
  { upTo: 82, token: "4/5" },
  { upTo: 92, token: "5/6" },
  { upTo: 100, token: "full" },
]

function fillToken(percent: number): string {
  return (
    FRACTIONS.find((f) => percent <= f.upTo) ?? FRACTIONS[FRACTIONS.length - 1]
  ).token
}

export function ProgressBar({ percent }: { percent: number }) {
  return (
    <F0Box width="full" height="1.5" background="secondary" borderRadius="full">
      <F0Box
        width={fillToken(percent) as never}
        height="full"
        background="positive-bold"
        borderRadius="full"
      />
    </F0Box>
  )
}
