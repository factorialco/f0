import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { ChatBubble } from "../components/ChatBubble"
import { type F0ChatMessage } from "../types"

const now = new Date().toISOString()

const makeMessage = (body: string): F0ChatMessage => ({
  id: "m1",
  author: { id: "other", name: "María José" },
  body,
  createdAt: now,
  isMine: false,
})

describe("ChatBubble emoji rendering", () => {
  it("renders a plain message as text with no emoji image", () => {
    render(<ChatBubble message={makeMessage("hello world")} isMine={false} />)
    expect(screen.getByText("hello world")).toBeInTheDocument()
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })

  it("swaps an emoji in the body for a twemoji SVG, keeping the text", () => {
    render(<ChatBubble message={makeMessage("hi 👋 there")} isMine={false} />)
    const img = screen.getByRole("img")
    expect(img).toHaveAttribute("alt", "👋")
    expect(img.getAttribute("src")).toContain(
      "cdn.jsdelivr.net/gh/twitter/twemoji"
    )
    // The text either side of the emoji survives (the glyph is now an image,
    // so it no longer contributes to text content; whitespace is normalized).
    expect(screen.getByText(/hi/)).toHaveTextContent("hi there")
  })

  it("renders one image per emoji when several are present", () => {
    render(
      <ChatBubble message={makeMessage("🎉 ship it 🚀🔥")} isMine={false} />
    )
    const imgs = screen.getAllByRole("img")
    expect(imgs.map((i) => i.getAttribute("alt"))).toEqual(["🎉", "🚀", "🔥"])
  })
})

describe("ChatBubble edited marker", () => {
  it("shows the muted 'edited' label when the message has been edited", () => {
    render(
      <ChatBubble
        message={{ ...makeMessage("updated text"), editedAt: now }}
        isMine
      />
    )
    expect(screen.getByText("edited")).toBeInTheDocument()
  })

  it("does not show 'edited' on an unedited message", () => {
    render(<ChatBubble message={makeMessage("hello")} isMine={false} />)
    expect(screen.queryByText("edited")).not.toBeInTheDocument()
  })

  it("does not show 'edited' on a deleted tombstone", () => {
    render(
      <ChatBubble
        message={{
          ...makeMessage(""),
          deleted: true,
          editedAt: now,
        }}
        isMine
      />
    )
    expect(screen.queryByText("edited")).not.toBeInTheDocument()
  })
})
