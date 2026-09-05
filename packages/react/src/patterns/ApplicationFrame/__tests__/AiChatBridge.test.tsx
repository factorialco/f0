import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it } from "vitest"

import {
  AiChatStateProvider,
  useAiChat,
} from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import { DEFAULT_CHAT_WIDTH } from "@/kits/ai/F0AiChat/utils/constants"
import { render } from "@/testing/test-utils"

import {
  AiChatBridgeProvider,
  AiChatBridgePublisher,
  useAiChatBridge,
} from "../AiChatBridge"

/**
 * Sits ABOVE the AI provider, exactly where the meeting header sits: that is the
 * whole reason the bridge exists, so the harness has to reproduce it.
 */
const Consumer = () => {
  const { openAsSidePanel, chatWidth, chatSide } = useAiChatBridge()
  return (
    <>
      <button onClick={openAsSidePanel}>open</button>
      <span data-testid="width">{chatWidth}</span>
      <span data-testid="side">{chatSide}</span>
    </>
  )
}

/** Reads and drives the chat's real state, from inside its provider. */
const ChatProbe = () => {
  const { visualizationMode, open, setVisualizationMode, openCanvas } =
    useAiChat()
  return (
    <>
      <span data-testid="chat">{`${visualizationMode}/${open}`}</span>
      <button onClick={() => setVisualizationMode("fullscreen")}>expand</button>
      <button
        onClick={() =>
          openCanvas({ type: "form", title: "Absence", formName: "absence" })
        }
      >
        canvas
      </button>
    </>
  )
}

const setup = ({ resizable = true }: { resizable?: boolean } = {}) =>
  render(
    <AiChatBridgeProvider>
      <Consumer />
      <AiChatStateProvider enabled resizable={resizable}>
        <AiChatBridgePublisher />
        <ChatProbe />
      </AiChatStateProvider>
    </AiChatBridgeProvider>
  )

describe("AiChatBridge", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("opens a closed chat as a side panel", async () => {
    setup()
    await userEvent.click(screen.getByRole("button", { name: "open" }))

    expect(screen.getByTestId("chat")).toHaveTextContent("sidepanel/true")
  })

  it("brings an expanded chat back down to the side panel", async () => {
    // THE case this exists for, and the one `setOpen(true)` cannot handle: an
    // expanded chat spans the frame, and it is already open, so asking it to
    // open does nothing at all.
    setup()
    await userEvent.click(screen.getByRole("button", { name: "expand" }))
    expect(screen.getByTestId("chat")).toHaveTextContent("fullscreen/true")

    await userEvent.click(screen.getByRole("button", { name: "open" }))
    expect(screen.getByTestId("chat")).toHaveTextContent("sidepanel/true")
  })

  it("brings it back down after a reload that restored it expanded", async () => {
    // Closing the panel resets the mode, so "expanded" only survives a reload
    // together with `open` — which is exactly how the two are persisted.
    // (The keys are private to `AiChatStateProvider`; seeding them is the only
    // way to reproduce a restored session.)
    localStorage.setItem("ONE-ai-chat-open", JSON.stringify(true))
    localStorage.setItem(
      "ONE-ai-chat-visualization-mode",
      JSON.stringify("fullscreen")
    )
    setup()
    expect(screen.getByTestId("chat")).toHaveTextContent("fullscreen/true")

    await userEvent.click(screen.getByRole("button", { name: "open" }))
    expect(screen.getByTestId("chat")).toHaveTextContent("sidepanel/true")
  })

  it("drops a canvas, which spans the frame just as much", async () => {
    setup()
    await userEvent.click(screen.getByRole("button", { name: "canvas" }))
    expect(screen.getByTestId("chat")).toHaveTextContent("canvas/true")

    await userEvent.click(screen.getByRole("button", { name: "open" }))
    expect(screen.getByTestId("chat")).toHaveTextContent("sidepanel/true")
  })

  it("leaves an already-docked chat alone, and open", async () => {
    localStorage.setItem("ONE-ai-chat-open", JSON.stringify(true))
    setup()
    await userEvent.click(screen.getByRole("button", { name: "open" }))

    expect(screen.getByTestId("chat")).toHaveTextContent("sidepanel/true")
  })

  it("publishes the width the frame actually reserves, not the persisted one", async () => {
    // The frame ignores the stored width when the chat is not resizable, and the
    // two share a localStorage key — so the stored value can be a width some
    // other host chose. Publishing it would leave a gap of the wrong size.
    localStorage.setItem("ONE-ai-chat-width", JSON.stringify(520))

    const { unmount } = setup({ resizable: true })
    expect(screen.getByTestId("width")).toHaveTextContent("520")
    unmount()

    setup({ resizable: false })
    expect(screen.getByTestId("width")).toHaveTextContent(
      String(DEFAULT_CHAT_WIDTH)
    )
  })

  it("publishes the chat's own edge", async () => {
    setup()
    expect(screen.getByTestId("side")).toHaveTextContent("right")
  })
})
