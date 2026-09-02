import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { ChatSpinner } from "../components/ChatSpinner"

const paintedPolygons = (container: HTMLElement) =>
  Array.from(container.querySelectorAll("polygon")).filter(
    (p) => !p.hasAttribute("display") && p.getAttribute("points")
  )

describe("ChatSpinner", () => {
  it("paints the initial frame on mount", () => {
    const { container } = render(<ChatSpinner />)
    expect(paintedPolygons(container).length).toBeGreaterThan(0)
  })

  it("paints the rest frame when not playing", () => {
    const { container } = render(<ChatSpinner playing={false} />)
    expect(paintedPolygons(container).length).toBeGreaterThan(0)
  })

  it("supports toggling playing without remounting", () => {
    const { container, rerender } = render(<ChatSpinner playing={false} />)
    rerender(<ChatSpinner playing />)
    rerender(<ChatSpinner playing={false} />)
    expect(paintedPolygons(container).length).toBeGreaterThan(0)
  })

  // The breathe animation takes its period from this variable, so it has to
  // match the variant's real cycle: "default" spins then pauses, "continuous"
  // only spins. Mismatched, the two rhythms beat against each other.
  it("hands the stylesheet the cycle of the variant it is actually running", () => {
    const cycle = (ui: React.ReactElement) => {
      const { container } = render(ui)
      const el = container.querySelector<HTMLElement>('[role="progressbar"]')!
      return el.style.getPropertyValue("--globe-spin-cycle")
    }
    expect(cycle(<ChatSpinner />)).toBe("2300ms")
    expect(cycle(<ChatSpinner variant="continuous" />)).toBe("2000ms")
  })
})
