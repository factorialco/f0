import { expect, it } from "vitest"

import { SemanticColorGroup } from "../../docs/components/SemanticColorGroup"
import { zeroRender as render, screen } from "../../src/testing/test-utils"

it("renders semantic color swatches from their token values", () => {
  render(<SemanticColorGroup category="icon" />)

  const tokenLabel = screen.getByText("f1-icon-inverse")
  const swatch = tokenLabel.parentElement?.previousElementSibling

  expect(swatch).toHaveStyle({ backgroundColor: "hsl(var(--neutral-0))" })
})
