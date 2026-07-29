import { afterEach, describe, expect, it, vi } from "vitest"
import "@testing-library/jest-dom/vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

// Toggle reduced motion per test so both branches of the transition duration
// (`shouldReduceMotion ? 0 : duration`) are exercised.
const motionState = vi.hoisted(() => ({ reduced: false }))
vi.mock("@/lib/a11y", () => ({
  useReducedMotion: () => motionState.reduced,
}))

import { Collapse } from "../Collapse"

afterEach(() => {
  motionState.reduced = false
})

describe("Collapse", () => {
  it("renders its content when open", () => {
    render(
      <Collapse open>
        <div>Body content</div>
      </Collapse>
    )
    expect(screen.getByText("Body content")).toBeInTheDocument()
  })

  it("does not render its content when closed", () => {
    render(
      <Collapse open={false}>
        <div>Body content</div>
      </Collapse>
    )
    expect(screen.queryByText("Body content")).not.toBeInTheDocument()
  })

  it("shows the content immediately when it mounts already open (initial={false})", () => {
    // Content that mounts in the open state must not animate in and must not be
    // left clipped/inert; it is present and reachable from the first paint.
    render(
      <Collapse open>
        <div data-testid="body">Body content</div>
      </Collapse>
    )
    const wrapper = screen.getByTestId("body").parentElement
    expect(wrapper).not.toHaveAttribute("inert")
    expect(wrapper).not.toHaveAttribute("aria-hidden")
  })

  it("removes its content after collapsing (exit path)", async () => {
    const { rerender } = render(
      <Collapse open>
        <div>Body content</div>
      </Collapse>
    )
    expect(screen.getByText("Body content")).toBeInTheDocument()

    rerender(
      <Collapse open={false}>
        <div>Body content</div>
      </Collapse>
    )
    await waitFor(() =>
      expect(screen.queryByText("Body content")).not.toBeInTheDocument()
    )
  })

  it("renders its content when reduced motion is preferred", () => {
    motionState.reduced = true
    render(
      <Collapse open>
        <div>Body content</div>
      </Collapse>
    )
    expect(screen.getByText("Body content")).toBeInTheDocument()
  })
})
