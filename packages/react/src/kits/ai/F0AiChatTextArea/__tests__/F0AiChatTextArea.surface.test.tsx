import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { F0AiChatTextArea } from "../F0AiChatTextArea"

/**
 * The composer stands among Home's widgets, so its surface has to BE theirs:
 * `Card` — what every widget is drawn with — lifts the page translucently with
 * `background-inverse-secondary`, `background-tertiary` in dark. Same tokens,
 * so the page's wash runs under the composer exactly as it runs under a widget.
 */
const WIDGET_SURFACE = "before:bg-f1-background-inverse-secondary"
const WIDGET_SURFACE_DARK = "dark:before:bg-f1-background-tertiary"

const renderForm = () => {
  const { container } = render(<F0AiChatTextArea onSubmit={vi.fn()} />)
  const form = container.querySelector("form")
  expect(form).not.toBeNull()
  return form as HTMLFormElement
}

const classesMatching = (form: HTMLFormElement, needle: string) =>
  Array.from(form.classList).filter((c) => c.includes(needle))

describe("F0AiChatTextArea surface", () => {
  it("wears the widgets' surface tokens", () => {
    expect(renderForm()).toHaveClass(WIDGET_SURFACE, WIDGET_SURFACE_DARK)
  })

  it("is translucent — no opaque fill of its own to hide the page", () => {
    expect(classesMatching(renderForm(), "before:bg-")).toEqual([
      WIDGET_SURFACE,
      WIDGET_SURFACE_DARK,
    ])
  })
})

/**
 * What makes that translucency safe. The glow sits BEHIND the surface, so a
 * filled gradient would wash straight through the field. It is masked to the
 * spill beyond the field instead — the only part the old opaque surface ever
 * let show.
 */
describe("F0AiChatTextArea focus glow", () => {
  it("is masked out of the field's own box", () => {
    const form = renderForm()

    expect(form).toHaveClass("after:z-[-2]", "before:z-[-1]")
    // The hole is the PADDING box — the field itself.
    expect(form).toHaveClass(
      "after:[mask:linear-gradient(#000,#000)_padding-box_exclude,linear-gradient(#000,#000)]"
    )
    // The gradient paints in the CONTENT box: the field inset by the padding,
    // which keeps the ring at the old alpha instead of a hard outline.
    expect(form).toHaveClass(
      "after:[background-clip:content-box]",
      "after:p-0.5"
    )
    // Border box = the field plus room for the blur's tail.
    expect(form).toHaveClass("after:-inset-2.5", "after:border-[10px]")
  })

  /**
   * The bug this guards: the glow used to grow in with `scale-90` → `scale-100`.
   * The mask's hole is pinned to the field's box, so scaling the element shrinks
   * the hole along with it and sweeps the ring across the textarea for the whole
   * fade. Only opacity may animate.
   */
  it("animates opacity alone, so the mask can never leave the field", () => {
    const form = renderForm()

    expect(classesMatching(form, "after:scale")).toEqual([])
    expect(form).toHaveClass("after:transition-opacity")
    expect(form).not.toHaveClass("after:transition-all")
    expect(form).toHaveClass(
      "after:opacity-0",
      "has-[textarea:focus]:after:opacity-100"
    )
  })
})
