import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import { RichTextEditor } from "./index"
import { I18nProvider, defaultTranslations } from "../../../lib/providers/i18n"
import { UserPlatformProvider } from "../../../lib/providers/user-platafform/UserPlatformProvider"

test("calls onFullscreenChange callback when fullscreen mode changes", async () => {
  const onFullscreenChange = vi.fn()

  render(
    <UserPlatformProvider platform="mac">
      <I18nProvider translations={defaultTranslations}>
        <RichTextEditor
          title="Title"
          placeholder="Placeholder..."
          onChange={vi.fn()}
          onFullscreenChange={onFullscreenChange}
        />
      </I18nProvider>
    </UserPlatformProvider>
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
