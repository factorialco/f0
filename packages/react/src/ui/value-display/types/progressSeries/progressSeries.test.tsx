import { describe, expect, it } from "vitest"

import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { ValueDisplayRendererContext } from "../../renderers"
import { ProgressSeriesCell, ProgressSeriesCellValue } from "./progressSeries"

const defaultMeta: ValueDisplayRendererContext = {
  visualization: "table",
  i18n: defaultTranslations,
}

/** The cell only wires `F0ProgressSeries` into a data collection — the bar
 * behaviour itself is covered in `F0ProgressSeries`' own tests. */
function renderCell(value: ProgressSeriesCellValue) {
  return render(ProgressSeriesCell(value, defaultMeta))
}

describe("ProgressSeriesCell", () => {
  it("renders a fallback dash when bars is empty", () => {
    renderCell({ bars: [] })

    expect(screen.getByText("–")).toBeInTheDocument()
    expect(screen.getByText("–").closest("[data-cell-type]")).toHaveAttribute(
      "data-cell-type",
      "progressSeries"
    )
  })

  it("renders a fallback dash when bars is undefined", () => {
    renderCell({ bars: undefined as unknown as [] })

    expect(screen.getByText("–")).toBeInTheDocument()
  })

  it("renders the series, tagged as a progressSeries cell", () => {
    renderCell({
      bars: [
        { value: 100, max: 100, label: "Q1" },
        { value: 50, max: 100, label: "Q2" },
      ],
    })

    expect(screen.getAllByRole("img")).toHaveLength(2)
    expect(
      screen.getByLabelText("Q2 · 50 / 100 (50%)").closest("[data-cell-type]")
    ).toHaveAttribute("data-cell-type", "progressSeries")
  })

  it("renders the skeleton with aria-busy while loading, without the dash", () => {
    renderCell({ bars: [], loading: true })

    expect(screen.getByTestId("skeleton")).toBeInTheDocument()
    expect(screen.queryByText("–")).not.toBeInTheDocument()
    expect(
      screen.getByTestId("skeleton").closest("[data-cell-type]")
    ).toHaveAttribute("aria-busy", "true")
  })
})
