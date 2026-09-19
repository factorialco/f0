import { createRef } from "react"
import { expect, test, vi } from "vitest"

// TipTap's BubbleMenu relies on tippy, which doesn't work under jsdom: its
// plugin view throws on the first enhance transaction.
vi.mock("@/components/RichText/internal/BubbleMenu", () => ({
  EditorBubbleMenu: () => null,
}))

import { F0Dialog } from "@/components/dialog-alike/F0Dialog"
import {
  F0RichTextEditor,
  type F0RichTextEditorHandle,
} from "@/components/RichText/F0RichTextEditor"
import {
  act,
  screen,
  userEvent,
  waitFor,
  zeroRender,
} from "@/testing/test-utils"

const users = [
  { id: 1, label: "Alice", image_url: "/alice.png", href: "/alice" },
  { id: 2, label: "Bob", image_url: "/bob.png", href: "/bob" },
]

const renderInSidePanel = (onClose: () => void) => {
  const ref = createRef<F0RichTextEditorHandle>()

  zeroRender(
    <F0Dialog isOpen onClose={onClose} position="right" title="Application">
      <F0RichTextEditor
        ref={ref}
        title="Notes"
        placeholder="Write a note..."
        onChange={vi.fn()}
        mentionsConfig={{ users }}
      />
    </F0Dialog>
  )

  return ref
}

/**
 * Regression test for the mention popover dismissing the side panel it is
 * typed into.
 *
 * Picking a mention with the mouse focuses the popover's `Popover.Content`
 * (a `tabindex="-1"` focus scope). While the popover was rendered by its own
 * `createRoot`, that focus never reached the `onFocusCapture` of the dialog's
 * Radix `DismissableLayer`, which then read it as `focusOutside` and — on a
 * non-modal dialog — dismissed the panel. Rendering the popover through the
 * editor's React tree keeps the focus visible to the layer.
 *
 * jsdom does not move focus on mousedown the way a browser does, so this test
 * focuses the popover content explicitly; everything else is the real
 * components.
 */
test("focusing the mention popover does not close the side panel it lives in", async () => {
  const onClose = vi.fn()
  const ref = renderInSidePanel(onClose)

  await screen.findByRole("textbox", { name: "Notes" })

  act(() => {
    ref.current?.insertContent("@")
  })

  const item = await screen.findByText("Alice", {}, { timeout: 5000 })

  const popoverContent = item.closest(
    "[data-radix-popper-content-wrapper] [role='dialog']"
  ) as HTMLElement | null
  expect(popoverContent).not.toBeNull()

  act(() => {
    popoverContent?.focus()
  })

  await waitFor(() => expect(onClose).not.toHaveBeenCalled())
})

test("picking a mention inserts it and leaves the side panel open", async () => {
  const onClose = vi.fn()
  const user = userEvent.setup()
  const ref = renderInSidePanel(onClose)

  const editor = await screen.findByRole("textbox", { name: "Notes" })

  act(() => {
    ref.current?.insertContent("@")
  })

  const item = await screen.findByText("Alice", {}, { timeout: 5000 })
  await user.click(item)

  await waitFor(() =>
    expect(editor.querySelector('[data-type="mention"]')).not.toBeNull()
  )
  expect(onClose).not.toHaveBeenCalled()
})
