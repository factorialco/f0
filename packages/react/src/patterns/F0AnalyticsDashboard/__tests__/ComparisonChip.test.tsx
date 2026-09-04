import { describe, expect, it } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import {
  ComparisonChip,
  comparisonSummary,
} from "../components/ComparisonChip/ComparisonChip"

describe("comparisonSummary", () => {
  it("groups categories by outcome, counting each once and never a flat one", () => {
    expect(
      comparisonSummary({
        byCategory: {
          Sales: { direction: "up", label: "+4" },
          Operations: { direction: "down", label: "−3" },
          People: { direction: "flat", label: "0" },
          Legal: { direction: "up", label: "+4" },
          Support: { direction: "down", label: "−5" },
        },
        added: ["Legal"],
        removed: ["Support"],
      })
    ).toEqual({
      up: ["Sales"],
      down: ["Operations"],
      added: ["Legal"],
      removed: ["Support"],
    })
  })

  it("is nothing when there is nothing to count", () => {
    expect(comparisonSummary(undefined)).toBeUndefined()
    expect(
      comparisonSummary({
        byCategory: { People: { direction: "flat", label: "0" } },
      })
    ).toBeUndefined()
  })
})

describe("ComparisonChip", () => {
  it("writes the counts that are there and leaves out the ones that are zero", () => {
    render(
      <ComparisonChip
        summary={{
          up: ["Sales", "Legal"],
          down: [],
          added: ["Ops"],
          removed: [],
        }}
      />
    )

    expect(screen.getByText("2 up · 1 new")).toBeInTheDocument()
    expect(screen.queryByText(/down|gone/)).toBeNull()
  })

  it("renders nothing without a summary", () => {
    const { container } = render(<ComparisonChip />)

    expect(container).toBeEmptyDOMElement()
  })
})
