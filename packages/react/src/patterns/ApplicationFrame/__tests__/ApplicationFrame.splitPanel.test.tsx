import { beforeEach, describe, expect, it } from "vitest"

import { useAiChat } from "@/sds/ai/F0AiChat/providers/AiChatStateProvider"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { ApplicationFrame } from ".."

// Drives the panel the way the real hosts do: the sidebar mounts a
// conversation via setPanelContent; the page header's One switch clears it
// and opens the AI chat (useAiChatToggle semantics).
const Probe = () => {
  const { setOpen, setPanelContent, clearPanelContent } = useAiChat()
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          setPanelContent({ id: "conv", content: <div>CONVERSATION</div> })
        }
      >
        open-conv
      </button>
      <button
        type="button"
        onClick={() => {
          clearPanelContent()
          setOpen(true)
        }}
      >
        one-switch-on
      </button>
    </div>
  )
}

const renderFrame = () =>
  render(
    <ApplicationFrame
      ai={{
        enabled: true,
        panelContentSide: "left",
        chatMessages: <div>AI CHAT</div>,
      }}
      sidebar={<div>SIDEBAR</div>}
    >
      <Probe />
    </ApplicationFrame>
  )

describe("ApplicationFrame split panel (conversations left, AI chat right)", () => {
  beforeEach(() => {
    // `open` (and friends) persist to localStorage — reset between tests.
    localStorage.clear()
  })

  it("mounts hosted content in a left-docked container", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("open-conv"))

    const conversation = screen.getByText("CONVERSATION")
    expect(conversation.closest(".left-0")).not.toBeNull()
    expect(conversation.closest(".right-0")).toBeNull()
    // The AI chat window stays hidden while the conversation is up.
    expect(screen.queryByText("AI CHAT")).not.toBeInTheDocument()
  })

  it("the One switch swaps the conversation for the right-docked AI chat", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("open-conv"))
    await userEvent.click(screen.getByText("one-switch-on"))

    const chat = screen.getByText("AI CHAT")
    expect(chat.closest(".right-0")).not.toBeNull()
    expect(chat.closest(".left-0")).toBeNull()
    // The conversation window unmounts once the swap completes.
    await waitFor(() =>
      expect(screen.queryByText("CONVERSATION")).not.toBeInTheDocument()
    )
  })

  it("keeps a single window when no panelContentSide is set (regression)", async () => {
    render(
      <ApplicationFrame
        ai={{ enabled: true, chatMessages: <div>AI CHAT</div> }}
        sidebar={<div>SIDEBAR</div>}
      >
        <Probe />
      </ApplicationFrame>
    )
    await userEvent.click(screen.getByText("open-conv"))

    // Single-panel mode: the content renders inside the chat's own window,
    // docked right (the default side).
    const conversation = screen.getByText("CONVERSATION")
    expect(conversation.closest(".right-0")).not.toBeNull()
  })
})
