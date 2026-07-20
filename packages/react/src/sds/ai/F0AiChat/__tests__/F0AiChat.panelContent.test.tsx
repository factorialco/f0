import { beforeEach, describe, expect, it } from "vitest"

import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { HostedPanelWindow } from "../components/layout/HostedPanelWindow"
import { F0AiChat } from "../F0AiChat"
import {
  AiChatStateProvider,
  useAiChat,
} from "../providers/AiChatStateProvider"

const Controls = () => {
  const { setOpen, setPanelContent, clearPanelContent, setPanelSide } =
    useAiChat()
  return (
    <div>
      <button type="button" onClick={() => setOpen(true)}>
        open
      </button>
      <button type="button" onClick={() => setPanelSide("left")}>
        dock-left
      </button>
      <button
        type="button"
        onClick={() => setPanelContent({ id: "a", content: <div>FAKE A</div> })}
      >
        show-a
      </button>
      <button
        type="button"
        onClick={() => setPanelContent({ id: "b", content: <div>FAKE B</div> })}
      >
        show-b
      </button>
      <button type="button" onClick={() => clearPanelContent()}>
        clear
      </button>
    </div>
  )
}

const renderChat = () =>
  render(
    <AiChatStateProvider enabled chatMessages={<div>CHAT MESSAGES</div>}>
      <Controls />
      <F0AiChat />
    </AiChatStateProvider>
  )

describe("F0AiChat side-panel content", () => {
  beforeEach(() => {
    // `open` is persisted to localStorage — reset between tests.
    localStorage.clear()
  })

  it("renders the chat slots when there is no panel content", async () => {
    renderChat()
    await userEvent.click(screen.getByText("open"))
    expect(screen.getByText("CHAT MESSAGES")).toBeInTheDocument()
  })

  it("renders custom panel content instead of the chat", async () => {
    renderChat()
    await userEvent.click(screen.getByText("show-a"))
    expect(screen.getByText("FAKE A")).toBeInTheDocument()
    expect(screen.queryByText("CHAT MESSAGES")).not.toBeInTheDocument()
  })

  it("swaps the content (unmounts the previous one) on a new selection", async () => {
    renderChat()
    await userEvent.click(screen.getByText("show-a"))
    expect(screen.getByText("FAKE A")).toBeInTheDocument()

    await userEvent.click(screen.getByText("show-b"))
    expect(screen.getByText("FAKE B")).toBeInTheDocument()
    expect(screen.queryByText("FAKE A")).not.toBeInTheDocument()
  })

  it("falls back to the chat after clearing the panel content", async () => {
    renderChat()
    await userEvent.click(screen.getByText("show-a"))
    await userEvent.click(screen.getByText("clear"))
    expect(screen.queryByText("FAKE A")).not.toBeInTheDocument()
    expect(screen.getByText("CHAT MESSAGES")).toBeInTheDocument()
  })

  it("docks the panel right by default and left when the host flips the side", async () => {
    const { container } = renderChat()
    await userEvent.click(screen.getByText("open"))

    // Default: right-docked (pushed right with ml-auto).
    expect(container.querySelector(".ml-auto")).not.toBeNull()
    expect(container.querySelector(".mr-auto")).toBeNull()

    await userEvent.click(screen.getByText("dock-left"))

    // Left-docked: pushed left with mr-auto.
    expect(container.querySelector(".mr-auto")).not.toBeNull()
    expect(container.querySelector(".ml-auto")).toBeNull()
  })
})

describe("F0AiChat split panel (panelContentSide opposite the chat)", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  const renderSplit = () =>
    render(
      <AiChatStateProvider
        enabled
        chatMessages={<div>CHAT MESSAGES</div>}
        panelContentSide="left"
      >
        <Controls />
        <F0AiChat />
        <HostedPanelWindow />
      </AiChatStateProvider>
    )

  it("hosted content renders in its own window, never inside the chat", async () => {
    render(
      <AiChatStateProvider
        enabled
        chatMessages={<div>CHAT MESSAGES</div>}
        panelContentSide="left"
      >
        <Controls />
        <F0AiChat />
      </AiChatStateProvider>
    )
    // Without a HostedPanelWindow mounted, the content shows nowhere — the
    // chat window skips it in split mode.
    await userEvent.click(screen.getByText("show-a"))
    expect(screen.queryByText("FAKE A")).not.toBeInTheDocument()
  })

  it("swaps between the chat and hosted content, one visible at a time", async () => {
    renderSplit()
    await userEvent.click(screen.getByText("open"))
    expect(screen.getByText("CHAT MESSAGES")).toBeInTheDocument()

    // Conversation up → chat window hides (it holds briefly for the swap).
    await userEvent.click(screen.getByText("show-a"))
    expect(screen.getByText("FAKE A")).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.queryByText("CHAT MESSAGES")).not.toBeInTheDocument()
    )

    // Back to the chat (the One switch path: clear + stay open).
    await userEvent.click(screen.getByText("clear"))
    expect(screen.getByText("CHAT MESSAGES")).toBeInTheDocument()
    await waitFor(() =>
      expect(screen.queryByText("FAKE A")).not.toBeInTheDocument()
    )
  })

  it("docks the hosted window on panelContentSide (left)", async () => {
    const { container } = renderSplit()
    await userEvent.click(screen.getByText("show-a"))
    // The hosted window is left-docked (mr-auto pushes it left).
    await waitFor(() =>
      expect(container.querySelector(".mr-auto")).not.toBeNull()
    )
  })
})
