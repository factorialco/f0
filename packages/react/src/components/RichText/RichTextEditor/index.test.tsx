import { expect, test, vi } from "vitest"

import { F0Drawer } from "@/components/dialog-alike/F0Drawer"
import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"
import { RichTextEditor } from "./index"

test("calls onFullscreenChange callback when fullscreen mode changes", async () => {
  const onFullscreenChange = vi.fn()

  render(
    <RichTextEditor
      title="Title"
      placeholder="Placeholder..."
      onChange={vi.fn()}
      onFullscreenChange={onFullscreenChange}
    />
  )

  await userEvent.click(
    await screen.findByRole("button", { name: "Toggle fullscreen mode" })
  )
  expect(onFullscreenChange).toHaveBeenCalledWith(true)

  await userEvent.click(
    await screen.findByRole("button", { name: "Toggle fullscreen mode" })
  )
  expect(onFullscreenChange).toHaveBeenCalledWith(false)
})

test("keeps side dialog open when toggling fullscreen", async () => {
  const onClose = vi.fn()

  render(
    <F0Drawer
      isOpen
      position="right"
      title="Dialog title"
      description="Dialog description"
      onClose={onClose}
    >
      <RichTextEditor
        dataTestId="rich-text-editor"
        title="Title"
        placeholder="Placeholder..."
        onChange={vi.fn()}
      />
    </F0Drawer>
  )

  await userEvent.click(
    await screen.findByRole("button", { name: "Toggle fullscreen mode" })
  )

  const dialog = screen.getByRole("dialog")
  const richTextEditor = screen.getByTestId("rich-text-editor")
  const fullscreenEditor = richTextEditor.querySelector(
    ".rich-text-editor-container"
  )

  expect(dialog).toContainElement(richTextEditor)
  expect(fullscreenEditor).toBeTruthy()
  expect(fullscreenEditor).toHaveClass("fixed")
  expect(fullscreenEditor).not.toHaveClass("absolute")
  expect(onClose).not.toHaveBeenCalled()
})
