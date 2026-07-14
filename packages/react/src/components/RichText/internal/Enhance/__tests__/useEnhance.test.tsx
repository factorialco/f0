import { Editor } from "@tiptap/core"
import StarterKit from "@tiptap/starter-kit"
import { act, renderHook, waitFor } from "@testing-library/react"
import { ReactNode } from "react"
import { describe, expect, it, vi } from "vitest"

import { EnhanceHighlight } from "@/components/RichText/internal/Extensions/EnhanceHighlight"
import { I18nProvider, defaultTranslations } from "@/lib/providers/i18n"

import { useEnhance } from "../useEnhance"

const wrapper = ({ children }: { children: ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

const createEditor = () =>
  new Editor({
    extensions: [StarterKit, EnhanceHighlight],
    content: "<p>First paragraph to enhance</p><p>Second paragraph too</p>",
  })

describe("useEnhance", () => {
  it("highlights the whole content while enhancing without a selection", async () => {
    const editor = createEditor()
    // No selection: cursor collapsed at doc start → full-document enhance.

    let resolveEnhance: (value: {
      success: boolean
      text: string
    }) => void = () => {}
    const onEnhanceText = () =>
      new Promise<{ success: boolean; text: string }>((resolve) => {
        resolveEnhance = resolve
      })

    const { result } = renderHook(
      () => useEnhance(editor, { onEnhanceText, enhancementOptions: [] }),
      { wrapper }
    )

    let enhancePromise: Promise<void> = Promise.resolve()
    act(() => {
      enhancePromise = result.current.handleEnhanceWithAI("improve-writing")
    })

    // While loading, every text node in the editor carries the shimmer class.
    await waitFor(() => {
      const highlighted = editor.view.dom.querySelectorAll(".enhance-highlight")
      expect(highlighted.length).toBeGreaterThan(0)
      const highlightedText = Array.from(highlighted)
        .map((node) => node.textContent)
        .join("")
      expect(highlightedText).toContain("First paragraph to enhance")
      expect(highlightedText).toContain("Second paragraph too")
    })

    // Once the enhancement resolves, the loading highlight is dropped.
    await act(async () => {
      resolveEnhance({ success: true, text: "<p>Enhanced</p>" })
      await enhancePromise
    })
    expect(editor.view.dom.querySelectorAll(".enhance-highlight").length).toBe(
      0
    )
  })

  it("notifies the config hooks on accept, reject and retry", async () => {
    const editor = createEditor()
    const onAcceptChanges = vi.fn()
    const onRejectChanges = vi.fn()
    const onRetryChanges = vi.fn()
    const onEnhanceText = vi.fn(async () => ({
      success: true,
      text: "Enhanced",
    }))

    const { result } = renderHook(
      () =>
        useEnhance(editor, {
          onEnhanceText,
          enhancementOptions: [],
          onAcceptChanges,
          onRejectChanges,
          onRetryChanges,
        }),
      { wrapper }
    )

    await act(async () => {
      await result.current.handleEnhanceWithAI("improve-writing")
    })

    act(() => result.current.acceptChanges())
    expect(onAcceptChanges).toHaveBeenCalledTimes(1)

    act(() => result.current.rejectChanges())
    expect(onRejectChanges).toHaveBeenCalledTimes(1)

    await act(async () => {
      result.current.retryChanges()
    })
    expect(onRetryChanges).toHaveBeenCalledTimes(1)
  })

  it("highlights only the selected range while enhancing a selection", async () => {
    const editor = createEditor()
    // Select the first word ("First").
    editor.commands.setTextSelection({ from: 1, to: 6 })

    let resolveEnhance: (value: {
      success: boolean
      text: string
    }) => void = () => {}
    const onEnhanceText = () =>
      new Promise<{ success: boolean; text: string }>((resolve) => {
        resolveEnhance = resolve
      })

    const { result } = renderHook(
      () => useEnhance(editor, { onEnhanceText, enhancementOptions: [] }),
      { wrapper }
    )

    let enhancePromise: Promise<void> = Promise.resolve()
    act(() => {
      enhancePromise = result.current.handleEnhanceWithAI("improve-writing")
    })

    await waitFor(() => {
      const highlightedText = Array.from(
        editor.view.dom.querySelectorAll(".enhance-highlight")
      )
        .map((node) => node.textContent)
        .join("")
      expect(highlightedText).toBe("First")
    })

    await act(async () => {
      resolveEnhance({ success: true, text: "Better" })
      await enhancePromise
    })
  })
})
