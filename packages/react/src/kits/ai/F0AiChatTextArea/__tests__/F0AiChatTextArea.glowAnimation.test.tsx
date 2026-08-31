import { describe, expect, it, vi } from "vitest"

let mockReducedMotion = false
vi.mock("@/lib/a11y", () => ({
  useReducedMotion: () => mockReducedMotion,
}))

import { zeroRender as render } from "@/testing/test-utils"

import { F0AiChatTextArea } from "../F0AiChatTextArea"

const SPIN = "rotate-gradient_6s_linear_infinite"
const PAUSED = `after:[animation:${SPIN}_paused]`
const RUNNING_ON_FOCUS = `has-[textarea:focus]:after:[animation:${SPIN}_running]`

const renderForm = (props = {}) => {
  const { container } = render(
    <F0AiChatTextArea onSubmit={vi.fn()} {...props} />
  )
  const form = container.querySelector("form")
  expect(form).not.toBeNull()
  return form as HTMLFormElement
}

/**
 * The glow's spin is CSS, not JS.
 *
 * It used to be a `repeat: Infinity` motion animation writing `--gradient-angle`
 * to the form as an inline style every frame — 120/s on a 120Hz display, for as
 * long as the composer was mounted — and none of it rendered: the property is
 * registered `inherits: false` and the gradient is painted on the form's
 * `::after`, which a value set on the form never reaches.
 */
describe("F0AiChatTextArea glow animation", () => {
  it("writes no per-frame inline style to the form", () => {
    mockReducedMotion = false

    expect(renderForm().getAttribute("style")).toBeNull()
  })

  it("spins via CSS on the pseudo-element that paints the gradient", () => {
    mockReducedMotion = false
    const form = renderForm()

    expect(form).toHaveClass(RUNNING_ON_FOCUS)
    expect(form).toHaveClass(
      "after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]"
    )
  })

  /**
   * Dropping `animation` on blur snaps `--gradient-angle` back to its registered
   * `initial-value` at once, and the glow fades out over 300ms — so you watch the
   * gradient jump home mid-fade. Pausing holds the angle where it stopped, and a
   * paused animation does not tick, so resting still costs no frames.
   */
  it("pauses rather than drops the spin when the glow goes away", () => {
    mockReducedMotion = false
    const form = renderForm()

    expect(form).toHaveClass(PAUSED)
    expect(form).toHaveClass(RUNNING_ON_FOCUS)
  })

  /**
   * The play state rides INSIDE the `animation` shorthand. As its own
   * declaration it loses: the shorthand resets `animation-play-state` to
   * `running`, and Tailwind gives no ordering guarantee between two arbitrary
   * properties — which left the spin running at rest.
   */
  it("carries the play state inside the animation shorthand", () => {
    mockReducedMotion = false
    const form = renderForm()

    expect(form.className).not.toContain("animation-play-state")
  })

  it("runs unpaused while clarifying, which shows the glow with no focus", () => {
    mockReducedMotion = false
    const form = renderForm({
      clarifyingUI: <div>clarify</div>,
    })

    expect(form).toHaveClass(`after:[animation:${SPIN}_running]`)
    expect(form).not.toHaveClass(PAUSED)
  })

  it("does not spin when the reader prefers reduced motion", () => {
    mockReducedMotion = true
    const form = renderForm()

    expect(form.className).not.toContain("rotate-gradient")
  })
})
