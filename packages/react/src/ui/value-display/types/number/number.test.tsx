import { defaultTranslations } from "@/lib/providers/i18n"
import { screen, zeroRender as render } from "@/testing/test-utils"
import { describe, expect, it } from "vitest"

import { ValueDisplayRendererContext } from "../../renderers"
import { NumberCell } from "./number"

const tableMeta: ValueDisplayRendererContext = {
  visualization: "table",
  i18n: defaultTranslations,
}

describe("NumberCell", () => {
  it("renders right-position units using the shared content renderer", () => {
    render(
      NumberCell(
        {
          number: 12.3,
          decimalPlaces: 1,
          units: "%",
        },
        tableMeta
      )
    )

    const units = screen.getByText("%")
    expect(units.parentElement).toHaveTextContent("12.3%")
  })

  it("renders left-position units using the shared content renderer", () => {
    render(
      NumberCell(
        {
          number: 99.5,
          decimalPlaces: 1,
          units: "$",
          unitsPosition: "left",
        },
        tableMeta
      )
    )

    const units = screen.getByText("$")
    expect(units.parentElement).toHaveTextContent("$99.5")
  })

  it("renders placeholder text from object inputs while preserving units", () => {
    render(
      NumberCell(
        {
          number: undefined,
          placeholder: "N/A",
          units: "%",
        },
        tableMeta
      )
    )

    const units = screen.getByText("%")
    expect(units.parentElement).toHaveTextContent("N/A%")
    expect(units.parentElement).toHaveClass("text-f1-foreground-secondary")
  })

  it("normalizes undefined unit fields from object inputs", () => {
    render(
      NumberCell(
        {
          number: 12,
          units: undefined,
          unitsPosition: undefined,
        },
        tableMeta
      )
    )

    expect(screen.getByText("12")).toBeInTheDocument()
    expect(screen.queryByText("%")).not.toBeInTheDocument()
  })
})
