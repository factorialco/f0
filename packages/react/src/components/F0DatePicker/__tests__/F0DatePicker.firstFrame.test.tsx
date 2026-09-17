import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"
import {
  screen,
  TestProviders,
  zeroRender as render,
} from "@/testing/test-utils"
import { F0DatePicker } from "../F0DatePicker"

const value = {
  value: { from: new Date(2026, 3, 10) },
  granularity: "day" as const,
}

/**
 * A picker mounted with a value used to paint F0InputField's placeholder over
 * it until an effect ran. The markup of the very first render is what axe
 * samples, so assert on that and not on the settled DOM.
 */
describe("F0DatePicker first frame", () => {
  it("renders the formatted value in the initial markup", () => {
    const markup = renderToStaticMarkup(
      <TestProviders>
        <F0DatePicker label="Start date" value={value} />
      </TestProviders>
    )

    expect(markup).toContain('value="10 Apr 2026"')
  })

  it("shows the formatted value without waiting for an effect", () => {
    render(<F0DatePicker label="Start date" value={value} />)

    expect(screen.getByDisplayValue("10 Apr 2026")).toBeInTheDocument()
  })
})
