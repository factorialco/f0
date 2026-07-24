import "@testing-library/jest-dom/vitest"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { NumberFilter } from "../NumberFilter"

describe("NumberFilter", () => {
  it("starts in range mode (both inputs, no value) when modes is locked to ['range']", () => {
    render(
      <NumberFilter
        schema={{
          label: "Participation rate",
          options: { modes: ["range"], min: 0, max: 100 },
        }}
        value={undefined}
        onChange={vi.fn()}
      />
    )

    // Two inputs (from/to) instead of the single "Value" input.
    expect(screen.getAllByRole("textbox")).toHaveLength(2)
    expect(screen.getByText("Greater or equal to")).toBeInTheDocument()
    expect(screen.getByText("Less or equal to")).toBeInTheDocument()
    expect(screen.queryByText("Value")).not.toBeInTheDocument()
    // A single locked mode hides the range toggle.
    expect(screen.queryByText("Use range")).not.toBeInTheDocument()
  })

  it("defaults to single mode when no modes are provided", () => {
    render(
      <NumberFilter
        schema={{ label: "Participation rate", options: {} }}
        value={undefined}
        onChange={vi.fn()}
      />
    )

    expect(screen.getAllByRole("textbox")).toHaveLength(1)
    expect(screen.getByText("Value")).toBeInTheDocument()
  })
})
