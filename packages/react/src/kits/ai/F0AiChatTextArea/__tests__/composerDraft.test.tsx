import { act, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import {
  AiChatStateProvider,
  useAiChat,
} from "../../F0AiChat/providers/AiChatStateProvider"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

let aiChat: ReturnType<typeof useAiChat>
const CaptureAiChat = () => {
  aiChat = useAiChat()
  return null
}

const DRAFT = "Create a report of absences by month for 2026"

const renderTextArea = () =>
  render(
    <AiChatStateProvider enabled>
      <CaptureAiChat />
      <F0AiChatTextArea onSubmit={vi.fn()} />
    </AiChatStateProvider>
  )

const getTextarea = () => {
  const textarea = document.querySelector<HTMLTextAreaElement>(
    "textarea[name='one-ai-input']"
  )
  if (!textarea) throw new Error("chat textarea not found")
  return textarea
}

describe("F0AiChatTextArea composer draft prefill", () => {
  it("claims the draft: replaces the input, moves the caret to the end, focuses, and clears the draft", async () => {
    renderTextArea()

    act(() => {
      aiChat.setComposerDraft(DRAFT)
    })

    const textarea = getTextarea()
    await waitFor(() => expect(textarea).toHaveValue(DRAFT))
    await waitFor(() => expect(textarea).toHaveFocus())
    expect(textarea.selectionStart).toBe(DRAFT.length)
    expect(textarea.selectionEnd).toBe(DRAFT.length)
    // One-shot: the provider draft is consumed so it never re-applies.
    await waitFor(() => expect(aiChat.composerDraft).toBeNull())
  })

  it("replaces previously typed content instead of appending", async () => {
    renderTextArea()
    const textarea = getTextarea()

    act(() => {
      aiChat.setComposerDraft("first draft")
    })
    await waitFor(() => expect(textarea).toHaveValue("first draft"))

    act(() => {
      aiChat.setComposerDraft(DRAFT)
    })
    await waitFor(() => expect(textarea).toHaveValue(DRAFT))
    await waitFor(() => expect(aiChat.composerDraft).toBeNull())
  })
})
