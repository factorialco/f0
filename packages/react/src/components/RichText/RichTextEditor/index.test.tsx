import { expect, test, vi } from "vitest"

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
