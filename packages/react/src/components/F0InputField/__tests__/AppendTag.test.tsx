import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { AppendTag } from "../AppendTag"

/**
 * The unit tag on money/percentage fields used `text-f1-foreground-tertiary`,
 * which composites to #8d98ae on a white field — 2.9:1, below the 4.5:1 that
 * WCAG 2.0 SC 1.4.3 requires at AA. axe reported it as a `color-contrast`
 * violation on the F0Form `Default` story. `-secondary` composites to #647185
 * → 4.95:1.
 *
 * Asserted on the token class rather than a computed ratio: jsdom does not
 * composite `rgba` against the backdrop, so a real ratio needs a browser. The
 * ratio itself is verified by the axe run in the Storybook a11y lane.
 */
describe("AppendTag", () => {
  it("renders the unit text", () => {
    render(<AppendTag text="EUR" />)

    expect(screen.getByText("EUR")).toBeInTheDocument()
  })

  it("uses a foreground token that clears AA contrast on the field background", () => {
    const { container } = render(<AppendTag text="EUR" />)
    const tag = container.firstElementChild

    expect(tag).toHaveClass("text-f1-foreground-secondary")
    expect(tag).not.toHaveClass("text-f1-foreground-tertiary")
  })
})
