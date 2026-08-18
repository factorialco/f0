import { beforeEach, describe, expect, it } from "vitest"
import type { ReactNode } from "react"

import {
  act,
  fireEvent,
  screen,
  userEvent,
  zeroRender as render,
} from "@/testing/test-utils"

import { WIDGET_DRAG_END, WIDGET_DRAG_START } from "@/lib/dnd/widgetDragEvents"

import { F0AiChat } from "../F0AiChat"
import {
  AiChatStateProvider,
  useAiChat,
} from "../providers/AiChatStateProvider"

const Probe = () => {
  const { setOpen, pendingQuote, setIsClarifying, setPanelContent, setMode } =
    useAiChat()

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open chat
      </button>
      <button type="button" onClick={() => setIsClarifying(true)}>
        Start clarifying
      </button>
      <button
        type="button"
        onClick={() =>
          setPanelContent({ id: "hosted", content: <div>Hosted content</div> })
        }
      >
        Show hosted content
      </button>
      <button type="button" onClick={() => setMode("voice")}>
        Start voice mode
      </button>
      <span data-testid="quote">{pendingQuote?.text ?? ""}</span>
    </>
  )
}

/**
 * No `fileAttachments`, so the file-drop path is off throughout — these tests
 * also cover that the widget overlay isn't gated behind an upload handler.
 */
const renderChat = ({ overlay }: { overlay?: ReactNode } = {}) =>
  render(
    <AiChatStateProvider
      enabled
      chatHeader={<button type="button">Header action</button>}
      chatMessages={<div>Messages</div>}
      chatInput={<button type="button">Send</button>}
      VoiceMode={() => <div>Voice content</div>}
    >
      <Probe />
      <F0AiChat overlay={overlay} />
    </AiChatStateProvider>
  )

/** Stands in for the dashboard grid announcing a drag. */
const startWidgetDrag = (title: string) =>
  act(() => {
    window.dispatchEvent(
      new CustomEvent(WIDGET_DRAG_START, { detail: { title } })
    )
  })

const endWidgetDrag = () =>
  act(() => {
    window.dispatchEvent(new CustomEvent(WIDGET_DRAG_END))
  })

const dropZone = () => {
  const zone = document.querySelector("[data-ai-chat-dropzone]")
  if (!(zone instanceof HTMLElement)) {
    throw new Error("Expected the chat to expose a drop zone")
  }
  return zone
}

describe("F0AiChat widget drop", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("invites the drop as soon as the drag starts, before the pointer arrives", async () => {
    renderChat()
    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))

    expect(
      screen.queryByText("Drop here to discuss with One")
    ).not.toBeInTheDocument()

    startWidgetDrag("Headcount by department")

    // No pointer has touched the chat — the announcement alone is enough.
    expect(
      screen.getByText("Drop here to discuss with One")
    ).toBeInTheDocument()
  })

  it("quotes the dragged widget's title when released over the chat", async () => {
    renderChat()
    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))

    startWidgetDrag("Headcount by department")
    fireEvent.pointerUp(dropZone())

    expect(screen.getByTestId("quote")).toHaveTextContent(
      "Headcount by department"
    )
    expect(
      screen.queryByText("Drop here to discuss with One")
    ).not.toBeInTheDocument()
  })

  it("withdraws the invitation when the drag ends away from the chat", async () => {
    renderChat()
    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))

    startWidgetDrag("Headcount by department")
    endWidgetDrag()

    expect(
      screen.queryByText("Drop here to discuss with One")
    ).not.toBeInTheDocument()

    // A later stray release must not retroactively quote the widget.
    fireEvent.pointerUp(dropZone())
    expect(screen.getByTestId("quote")).toHaveTextContent("")
  })

  it("ignores a release over the chat with no drag in flight", async () => {
    renderChat()
    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))

    fireEvent.pointerUp(dropZone())

    expect(screen.getByTestId("quote")).toHaveTextContent("")
  })

  /**
   * Regression guard. A fast drag can deliver the start announcement and the
   * release inside a single React batch, so no re-render separates them. A
   * release handler closing over the *state* would still read the pre-drag
   * `null` and silently drop the quote — which is exactly what the real
   * browser did before the payload moved into a ref. Both events go in one
   * `act` here to reproduce that batching.
   */
  it("still quotes when start and release land in the same React batch", async () => {
    renderChat()
    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))

    act(() => {
      window.dispatchEvent(
        new CustomEvent(WIDGET_DRAG_START, {
          detail: { title: "Headcount by department" },
        })
      )
      fireEvent.pointerUp(dropZone())
    })

    expect(screen.getByTestId("quote")).toHaveTextContent(
      "Headcount by department"
    )
  })

  it("ignores widget drags while a clarifying flow owns the composer", async () => {
    renderChat()
    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))
    await userEvent.click(
      screen.getByRole("button", { name: "Start clarifying" })
    )

    startWidgetDrag("Headcount by department")

    expect(
      screen.queryByText("Drop here to discuss with One")
    ).not.toBeInTheDocument()
    fireEvent.pointerUp(dropZone())
    expect(screen.getByTestId("quote")).toHaveTextContent("")
  })

  it("retracts an active widget drag when clarifying starts", async () => {
    renderChat()
    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))
    startWidgetDrag("Headcount by department")
    expect(
      screen.getByText("Drop here to discuss with One")
    ).toBeInTheDocument()

    await userEvent.click(
      screen.getByRole("button", { name: "Start clarifying" })
    )

    expect(
      screen.queryByText("Drop here to discuss with One")
    ).not.toBeInTheDocument()
    fireEvent.pointerUp(dropZone())
    expect(screen.getByTestId("quote")).toHaveTextContent("")
  })

  it.each([
    [
      "host overlay",
      () => renderChat({ overlay: <div>Blocking overlay</div> }),
    ],
    ["hosted panel", () => renderChat()],
    ["voice mode", () => renderChat()],
  ])("does not expose a widget drop zone over %s", async (surface, setup) => {
    setup()
    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))
    if (surface === "hosted panel") {
      await userEvent.click(
        screen.getByRole("button", { name: "Show hosted content" })
      )
    } else if (surface === "voice mode") {
      await userEvent.click(
        screen.getByRole("button", { name: "Start voice mode" })
      )
    }

    expect(document.querySelector("[data-ai-chat-dropzone]")).toBeNull()
    startWidgetDrag("Headcount by department")
    expect(
      screen.queryByText("Drop here to discuss with One")
    ).not.toBeInTheDocument()
  })

  it("ignores malformed or blank widget drag announcements", async () => {
    renderChat()
    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))

    startWidgetDrag("   ")
    expect(
      screen.queryByText("Drop here to discuss with One")
    ).not.toBeInTheDocument()

    act(() => {
      window.dispatchEvent(new CustomEvent(WIDGET_DRAG_START))
    })
    expect(
      screen.queryByText("Drop here to discuss with One")
    ).not.toBeInTheDocument()
  })
})
