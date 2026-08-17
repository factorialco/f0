import type { ReactNode } from "react"
import { beforeEach, describe, expect, it } from "vitest"

import { screen, userEvent, zeroRender as render } from "@/testing/test-utils"

import { F0AiChat } from "../F0AiChat"
import {
  AiChatStateProvider,
  useAiChat,
} from "../providers/AiChatStateProvider"

const OpenChat = () => {
  const { setOpen } = useAiChat()

  return (
    <button type="button" onClick={() => setOpen(true)}>
      Open chat
    </button>
  )
}

const renderChat = ({
  providerOverlay,
  overlay,
}: {
  providerOverlay?: ReactNode
  overlay?: ReactNode
} = {}) =>
  render(
    <AiChatStateProvider
      enabled
      chatHeader={<button type="button">Header action</button>}
      chatMessages={<div>Messages</div>}
      chatInput={<button type="button">Send</button>}
      chatOverlay={providerOverlay}
    >
      <OpenChat />
      <F0AiChat overlay={overlay} />
    </AiChatStateProvider>
  )

describe("F0AiChat overlay", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("renders provider overlay content above an inert chat", async () => {
    renderChat({ providerOverlay: <div>Provider overlay</div> })

    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))

    expect(screen.getByText("Provider overlay")).toBeInTheDocument()
    expect(
      screen.getByText("Messages").parentElement?.closest("[inert]")
    ).not.toBeNull()
    expect(
      screen.getByRole("button", { name: "Header action" })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument()
  })

  it("prefers a directly supplied overlay over the provider slot", async () => {
    renderChat({
      providerOverlay: <div>Provider overlay</div>,
      overlay: <div>Direct overlay</div>,
    })

    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))

    expect(screen.getByText("Direct overlay")).toBeInTheDocument()
    expect(screen.queryByText("Provider overlay")).not.toBeInTheDocument()
  })

  it("keeps the chat interactive when no overlay is supplied", async () => {
    renderChat()

    await userEvent.click(screen.getByRole("button", { name: "Open chat" }))

    expect(
      screen.getByText("Messages").parentElement?.closest("[inert]")
    ).toBeNull()
  })
})
