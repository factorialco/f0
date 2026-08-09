import { act, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createRef } from "react"
import { expect, test, vi } from "vitest"

// TipTap's BubbleMenu relies on tippy, which doesn't work under jsdom: its
// plugin view throws on the first enhance transaction. Mock it out, same as
// the F0Form validation tests do.
vi.mock("@/components/RichText/internal/BubbleMenu", () => ({
  EditorBubbleMenu: () => null,
}))

import { F0RichTextEditor, type F0RichTextEditorHandle } from ".."
import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"
import { UserPlatformProvider } from "@/lib/providers/user-platafform/UserPlatformProvider"

test("exposes the title as the accessible name of the editor textbox", async () => {
  render(
    <UserPlatformProvider platform="mac">
      <I18nProvider translations={defaultTranslations}>
        <F0RichTextEditor
          title="What was your main goal?"
          placeholder="Placeholder..."
          onChange={vi.fn()}
        />
      </I18nProvider>
    </UserPlatformProvider>
  )

  expect(
    await screen.findByRole("textbox", { name: "What was your main goal?" })
  ).toBeInTheDocument()
})

test("insertContent falls back to the end of the document when the editor was never focused", async () => {
  const onChange = vi.fn()
  const ref = createRef<F0RichTextEditorHandle>()

  render(
    <UserPlatformProvider platform="mac">
      <I18nProvider translations={defaultTranslations}>
        <F0RichTextEditor
          ref={ref}
          title="Title"
          placeholder="Placeholder..."
          onChange={onChange}
          initialEditorState={{ content: "<p>Hello</p>" }}
        />
      </I18nProvider>
    </UserPlatformProvider>
  )
  await screen.findByRole("textbox", { name: "Title" })

  act(() => ref.current?.insertContent("{{variable}}"))

  await waitFor(() =>
    expect(onChange).toHaveBeenLastCalledWith({
      value: "<p>Hello{{variable}}</p>",
    })
  )
})

test("insertContent inserts at the cursor position once the editor has been focused", async () => {
  const onChange = vi.fn()
  const ref = createRef<F0RichTextEditorHandle>()

  render(
    <UserPlatformProvider platform="mac">
      <I18nProvider translations={defaultTranslations}>
        <F0RichTextEditor
          ref={ref}
          title="Title"
          placeholder="Placeholder..."
          onChange={onChange}
          initialEditorState={{ content: "<p>Hello</p>" }}
        />
      </I18nProvider>
    </UserPlatformProvider>
  )
  await screen.findByRole("textbox", { name: "Title" })

  // Focusing places the caret at the selection TipTap tracks (document start
  // for a fresh editor). The insert must land there, not at the end.
  act(() => ref.current?.focus())
  act(() => ref.current?.insertContent("{{variable}}"))

  await waitFor(() =>
    expect(onChange).toHaveBeenLastCalledWith({
      value: "<p>{{variable}}Hello</p>",
    })
  )
})

test("calls onFullscreenChange callback when fullscreen mode changes", async () => {
  const onFullscreenChange = vi.fn()

  render(
    <UserPlatformProvider platform="mac">
      <I18nProvider translations={defaultTranslations}>
        <F0RichTextEditor
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

test("replaces the fullscreen toolbar with the compact review menu while reviewing", async () => {
  let resolveEnhance: (value: {
    success: boolean
    text: string
  }) => void = () => {}
  const onEnhanceText = vi.fn(
    () =>
      new Promise<{ success: boolean; text: string }>((resolve) => {
        resolveEnhance = resolve
      })
  )

  render(
    <UserPlatformProvider platform="mac">
      <I18nProvider translations={defaultTranslations}>
        <F0RichTextEditor
          title="Title"
          placeholder="Placeholder..."
          onChange={vi.fn()}
          initialEditorState={{ content: "<p>Some text to enhance</p>" }}
          enhanceConfig={{ onEnhanceText, enhancementOptions: [] }}
        />
      </I18nProvider>
    </UserPlatformProvider>
  )

  await userEvent.click(
    await screen.findByRole("button", { name: "Toggle fullscreen mode" })
  )

  const enhanceLabel = defaultTranslations.richTextEditor.ai.enhanceButtonLabel
  await userEvent.click(
    await screen.findByRole("button", { name: enhanceLabel })
  )
  const promptInput = await screen.findByPlaceholderText(
    defaultTranslations.richTextEditor.ai.customPromptPlaceholder
  )
  await userEvent.type(promptInput, "make it shine{Enter}")
  expect(onEnhanceText).toHaveBeenCalled()

  // While loading the toolbar stays (disabled); once the review opens it
  // disappears entirely and the compact accept/discard menu takes its place.
  resolveEnhance({ success: true, text: "<p>Shinier text</p>" })

  expect(
    await screen.findByRole("button", { name: "Accept" })
  ).toBeInTheDocument()
  expect(screen.getByRole("button", { name: "Discard" })).toBeInTheDocument()
  // The toolbar stays mounted briefly during its exit animation.
  await waitFor(() => {
    expect(
      screen.queryByRole("button", { name: enhanceLabel })
    ).not.toBeInTheDocument()
  })

  // Accepting restores the toolbar.
  await userEvent.click(screen.getByRole("button", { name: "Accept" }))
  expect(
    await screen.findByRole("button", { name: enhanceLabel })
  ).toBeInTheDocument()
})

test("hides the footer content and reviews inline for footer-initiated enhances", async () => {
  let resolveEnhance: (value: {
    success: boolean
    text: string
  }) => void = () => {}
  const onEnhanceText = vi.fn(
    () =>
      new Promise<{ success: boolean; text: string }>((resolve) => {
        resolveEnhance = resolve
      })
  )

  render(
    <UserPlatformProvider platform="mac">
      <I18nProvider translations={defaultTranslations}>
        <F0RichTextEditor
          title="Title"
          placeholder="Placeholder..."
          onChange={vi.fn()}
          initialEditorState={{ content: "<p>Some text to enhance</p>" }}
          enhanceConfig={{ onEnhanceText, enhancementOptions: [] }}
        />
      </I18nProvider>
    </UserPlatformProvider>
  )

  const enhanceLabel = defaultTranslations.richTextEditor.ai.enhanceButtonLabel
  await userEvent.click(
    await screen.findByRole("button", { name: enhanceLabel })
  )
  await userEvent.type(
    await screen.findByPlaceholderText(
      defaultTranslations.richTextEditor.ai.customPromptPlaceholder
    ),
    "make it shine{Enter}"
  )

  // While loading the footer content stays visible (only the prompt and the
  // review hide it).
  expect(
    screen.getByRole("button", { name: "Toolbar" }).closest(".invisible")
  ).toBeNull()

  resolveEnhance({ success: true, text: "<p>Shinier text</p>" })

  // The inline review menu is the only review UI (the activator's popover
  // panel is suppressed), and the footer content is hidden underneath it.
  const acceptButtons = await screen.findAllByRole("button", {
    name: "Accept",
  })
  expect(acceptButtons).toHaveLength(1)
  expect(
    screen.getByRole("button", { name: "Toolbar" }).closest(".invisible")
  ).not.toBeNull()

  // Accepting restores the footer content.
  await userEvent.click(acceptButtons[0])
  await waitFor(() => {
    expect(
      screen.queryByRole("button", { name: "Accept" })
    ).not.toBeInTheDocument()
  })
  expect(
    screen.getByRole("button", { name: "Toolbar" }).closest(".invisible")
  ).toBeNull()
})
