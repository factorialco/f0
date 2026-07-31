import { act, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import {
  AiChatStateProvider,
  useAiChat,
} from "../../F0AiChat/providers/AiChatStateProvider"
import { ComposerDraftScope } from "../../F0AiChat/providers/ComposerDraftScope"
import { F0AiChatTextArea } from "../F0AiChatTextArea"

let aiChat: ReturnType<typeof useAiChat>
const CaptureAiChat = () => {
  aiChat = useAiChat()
  return null
}

const DRAFT = "Create a report of absences by month for 2026"

// The chat window (F0AiChat) wraps its input slot in ComposerDraftScope;
// only that composer may claim drafts.
const renderTextArea = ({ inScope = true }: { inScope?: boolean } = {}) =>
  render(
    <AiChatStateProvider enabled>
      <CaptureAiChat />
      {inScope ? (
        <ComposerDraftScope>
          <F0AiChatTextArea onSubmit={vi.fn()} />
        </ComposerDraftScope>
      ) : (
        <F0AiChatTextArea onSubmit={vi.fn()} />
      )}
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

  it("never claims the draft outside the chat window's composer scope", async () => {
    renderTextArea({ inScope: false })
    const textarea = getTextarea()

    act(() => {
      aiChat.setComposerDraft(DRAFT)
    })

    // A standalone embedded composer must keep its input and never consume
    // the staged draft.
    expect(textarea).toHaveValue("")
    expect(aiChat.composerDraft).toBe(DRAFT)
  })

  it("re-staging the same text still focuses, keeps the caret at the end, and consumes the draft", async () => {
    renderTextArea()
    const textarea = getTextarea()

    act(() => {
      aiChat.setComposerDraft(DRAFT)
    })
    await waitFor(() => expect(textarea).toHaveValue(DRAFT))
    textarea.blur()

    act(() => {
      aiChat.setComposerDraft(DRAFT)
    })

    await waitFor(() => expect(textarea).toHaveFocus())
    expect(textarea.selectionStart).toBe(DRAFT.length)
    await waitFor(() => expect(aiChat.composerDraft).toBeNull())
  })
})
