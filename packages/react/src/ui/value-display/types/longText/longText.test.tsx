import { describe, expect, it } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../renderers"
import { LongTextCell } from "./longText"

const TEXT = "Leads the payroll integrations squad."

describe("LongTextCell", () => {
  /**
   * A wrapping value is the one case the table's centering band can't place: once
   * it is taller than the band, centering is a no-op and its first line would sit
   * above the single-line cells beside it. It opts out of centering and takes the
   * offset as padding instead — see `ui/value-display/const.ts`.
   */
  it("takes the multiline offset inside a table", () => {
    render(
      LongTextCell(TEXT, {
        visualization: "table",
      } satisfies ValueDisplayRendererContext)
    )

    expect(screen.getByText(TEXT)).toHaveClass(
      ...tableDisplayClassNames.multiline.split(" ")
    )
  })

  it("takes no table offset in other visualizations", () => {
    // Outside a table there is no band and no row to align against, so the offset
    // would just push the value off-center.
    render(
      LongTextCell(TEXT, {
        visualization: "card",
      } satisfies ValueDisplayRendererContext)
    )

    expect(screen.getByText(TEXT)).not.toHaveClass("self-start")
    expect(screen.getByText(TEXT).className).not.toMatch(/\bp[trblxy]?-/)
  })
})
