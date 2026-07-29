import { useEffect } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { useAiPromotionChat } from "@/experimental/AiPromotionChat/providers/AiPromotionChatStateProvider"
import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { ApplicationFrame, useApplicationFrameSidePanel } from ".."

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

const SidePanelProbe = () => {
  const { setPanelContent } = useApplicationFrameSidePanel()
  const { enabled: aiEnabled } = useAiChat()

  return (
    <div>
      <div>AI ENABLED: {String(aiEnabled)}</div>
      <button
        type="button"
        onClick={() =>
          setPanelContent({ id: "conv", content: <div>CONVERSATION</div> })
        }
      >
        open-conv
      </button>
    </div>
  )
}

const PromotionProbe = () => {
  const { setPanelContent } = useApplicationFrameSidePanel()
  const { enabled: promotionEnabled } = useAiPromotionChat()

  return (
    <div>
      <div>PROMOTION ENABLED: {String(promotionEnabled)}</div>
      <button
        type="button"
        onClick={() =>
          setPanelContent({ id: "conv", content: <div>CONVERSATION</div> })
        }
      >
        open-conv
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

  it("hosts content when the side panel is enabled and AI is disabled", async () => {
    const onAiVisibility = vi.fn()

    render(
      <ApplicationFrame
        ai={{
          enabled: false,
          chatMessages: <div>AI CHAT</div>,
          fileAttachments: { onUploadFiles: vi.fn() },
          tracking: { onVisibility: onAiVisibility },
        }}
        sidePanel={{ enabled: true, side: "left", resizable: true }}
        sidebar={<div>SIDEBAR</div>}
      >
        <SidePanelProbe />
      </ApplicationFrame>
    )

    expect(screen.getByText("AI ENABLED: false")).toBeInTheDocument()
    await userEvent.click(screen.getByText("open-conv"))

    const conversation = screen.getByText("CONVERSATION")
    expect(conversation.closest(".left-0")).not.toBeNull()
    const separator = screen.getByRole("separator", {
      name: "Resize side panel",
    })
    expect(separator).toHaveAttribute("aria-valuenow", "360")
    separator.focus()
    await userEvent.keyboard("{ArrowRight}")
    expect(separator).toHaveAttribute("aria-valuenow", "376")
    expect(screen.queryByText("AI CHAT")).not.toBeInTheDocument()
    expect(screen.queryByText("Drop your files here")).not.toBeInTheDocument()
    expect(onAiVisibility).not.toHaveBeenCalled()
  })

  it("keeps the generic side panel available with AI promotion enabled", async () => {
    render(
      <ApplicationFrame
        ai={{ enabled: false }}
        sidePanel={{ enabled: true, side: "left" }}
        aiPromotion={{ enabled: true }}
        sidebar={<div>SIDEBAR</div>}
      >
        <PromotionProbe />
      </ApplicationFrame>
    )

    expect(screen.getByText("PROMOTION ENABLED: true")).toBeInTheDocument()

    await userEvent.click(screen.getByText("open-conv"))
    expect(screen.getByText("CONVERSATION")).toBeInTheDocument()
  })

  it("does not reserve an empty gutter for persisted open state without content", () => {
    localStorage.setItem("ONE-ai-chat-open", "true")

    render(
      <ApplicationFrame
        ai={{ enabled: false }}
        sidePanel={{ enabled: true, side: "left" }}
        sidebar={<div>SIDEBAR</div>}
      >
        <div>PAGE</div>
      </ApplicationFrame>
    )

    expect(screen.queryByRole("separator")).not.toBeInTheDocument()
    const panelPaddingHost = screen.getByRole("main").parentElement
    expect(panelPaddingHost).not.toHaveStyle({ paddingLeft: "360px" })
    expect(panelPaddingHost).not.toHaveStyle({ paddingRight: "360px" })
  })

  it("restores the last conversation on reload without flashing the AI chat", async () => {
    // The previous session had the conversation showing when it unloaded.
    localStorage.setItem("ONE-ai-chat-open", "true")
    localStorage.setItem("ONE-ai-chat-panel-content-id", '"conv"')

    // Restore-aware host: re-mounts the persisted conversation (the way the
    // sidebar does in the stories / CommunicationsPanelBridge in factorial).
    const RestoreHost = () => {
      const { restoringPanelContentId, setPanelContent } = useAiChat()
      useEffect(() => {
        if (restoringPanelContentId === "conv") {
          setPanelContent({ id: "conv", content: <div>CONVERSATION</div> })
        }
      }, [restoringPanelContentId, setPanelContent])
      return null
    }

    render(
      <ApplicationFrame
        ai={{
          enabled: true,
          panelContentSide: "left",
          chatMessages: <div>AI CHAT</div>,
        }}
        sidebar={<div>SIDEBAR</div>}
      >
        <RestoreHost />
      </ApplicationFrame>
    )

    // The conversation is back on the left; the AI chat never flashed in.
    const conversation = await screen.findByText("CONVERSATION")
    expect(conversation.closest(".left-0")).not.toBeNull()
    expect(screen.queryByText("AI CHAT")).not.toBeInTheDocument()
  })
})
