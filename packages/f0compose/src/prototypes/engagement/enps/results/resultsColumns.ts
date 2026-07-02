import type { EnpsResponse } from "../enpsFixtures"
import { typeLabel } from "../enpsFixtures"
import type { NewColor } from "@factorialco/f0-react"

function typeColor(type: string): NewColor {
  switch (type) {
    case "promoter":
      return "flubber"
    case "passive":
      return "yellow"
    case "detractor":
      return "barbie"
    default:
      return "smoke"
  }
}

export const resultsColumns = [
  {
    id: "feedback",
    label: "Feedback",
    sorting: "feedback",
    render: (item: EnpsResponse) => item.feedback || "—",
  },
  {
    id: "score",
    label: "Score",
    sorting: "score",
    render: (item: EnpsResponse) => {
      if (item.score === null) return "—"
      return item.score
    },
  },
  {
    id: "type",
    label: "Type",
    render: (item: EnpsResponse) => ({
      type: "dotTag" as const,
      value: {
        label: typeLabel(item.type),
        color: typeColor(item.type),
      },
    }),
  },
]
