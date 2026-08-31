import { afterEach, describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render } from "@/testing/test-utils"

import { DatePickerPopup } from "../DatePickerPopup"

/**
 * The dismissal rules are only worth anything if the calendar's popover actually
 * receives them, so capture what `PopoverContent` is rendered with. Radix's own
 * outside-interaction plumbing is not exercised here — the rules are covered in
 * `dismissal.test.ts`, and the focus transition that triggers them needs a real
 * browser.
 */
const captured = vi.hoisted(() => ({
  props: null as Record<string, unknown> | null,
}))

vi.mock("@/ui/popover", async (importOriginal) => {
  const [actual, react] = await Promise.all([
    importOriginal<typeof import("@/ui/popover")>(),
    import("react"),
  ])

  return {
    ...actual,
    PopoverContent: react.forwardRef<
      HTMLDivElement,
      { children?: React.ReactNode }
    >((props, ref) => {
      captured.props = props as Record<string, unknown>
      return react.createElement(
        "div",
        { ref, "data-testid": "calendar-popover" },
        props.children
      )
    }),
  }
})

afterEach(() => {
  captured.props = null
})

describe("DatePickerPopup dismissal wiring", () => {
  it("hands the calendar popover both outside-interaction rules", () => {
    render(
      <DatePickerPopup open onSelect={vi.fn()} asChild>
        <button>Trigger</button>
      </DatePickerPopup>
    )

    expect(typeof captured.props?.onPointerDownOutside).toBe("function")
    expect(typeof captured.props?.onFocusOutside).toBe("function")
  })

  it("resolves ownership against the popover element it was given", () => {
    render(
      <DatePickerPopup open onSelect={vi.fn()} asChild>
        <button>Trigger</button>
      </DatePickerPopup>
    )

    const onFocusOutside = captured.props?.onFocusOutside as (event: {
      target: EventTarget | null
      preventDefault: () => void
    }) => void

    // Stand in for a header select: the trigger lives inside the popover while the
    // listbox it opens is portaled out of it. Resolving this pair proves the handler
    // is bound to the popover element, not just present.
    const popover = screen.getByTestId("calendar-popover")
    const trigger = document.createElement("button")
    trigger.setAttribute("aria-controls", "header-listbox")
    popover.appendChild(trigger)

    const listbox = document.createElement("div")
    listbox.setAttribute("role", "listbox")
    listbox.id = "header-listbox"
    document.body.appendChild(listbox)

    const event = { target: listbox, preventDefault: vi.fn() }
    onFocusOutside(event)

    expect(event.preventDefault).toHaveBeenCalled()
  })
})
