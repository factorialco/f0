import { expect, test, vi } from "vitest"

import { F0Dialog } from "@/patterns/F0Dialog"
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

test("keeps fullscreen editor inside side dialog", async () => {
  const onClose = vi.fn()

  render(
    <F0Dialog
      isOpen
      position="right"
      title="Dialog title"
      description="Dialog description"
      onClose={onClose}
    >
      <RichTextEditor
        title="Title"
        placeholder="Placeholder..."
        onChange={vi.fn()}
      />
    </F0Dialog>
  )

  await userEvent.click(
    await screen.findByRole("button", { name: "Toggle fullscreen mode" })
  )

  const dialogPanel = screen.getByRole("dialog").firstElementChild
  const fullscreenEditor = dialogPanel?.querySelector(
    ".rich-text-editor-container"
  )

  expect(fullscreenEditor).toBeTruthy()
  expect(fullscreenEditor).toHaveClass("absolute")
  expect(fullscreenEditor).not.toHaveClass("fixed")
  expect(onClose).not.toHaveBeenCalled()
})
