import { createRef } from "react"
import { expect, test, vi } from "vitest"

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
