import { expect, it } from "vitest"

import { zeroRender as render, screen } from "../../src/testing/test-utils"
import { SemanticColorGroup } from "./SemanticColorGroup"

it("renders semantic color swatches from their token values", () => {
  render(<SemanticColorGroup category="icon" />)

  const tokenLabel = screen.getByText("f1-icon-inverse")
  const swatch = tokenLabel.parentElement?.previousElementSibling

  expect(swatch).toHaveStyle({ backgroundColor: "hsl(var(--neutral-0))" })
})
