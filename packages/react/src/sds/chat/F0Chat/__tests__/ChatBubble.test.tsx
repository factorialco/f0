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

describe("ChatBubble chained corners", () => {
  it("keeps all corners rounded for a lone message (others, left)", () => {
    const { container } = render(
      <ChatBubble message={makeMessage("hi")} isMine={false} />
    )
    expect(container.querySelector(".rounded-tl-sm")).not.toBeInTheDocument()
    expect(container.querySelector(".rounded-bl-sm")).not.toBeInTheDocument()
  })

  it("tucks only the bottom for the first of a run (others, left)", () => {
    const { container } = render(
      <ChatBubble
        message={makeMessage("hi")}
        isMine={false}
        isFirstOfRun
        isLastOfRun={false}
      />
    )
    expect(container.querySelector(".rounded-bl-sm")).toBeInTheDocument()
    expect(container.querySelector(".rounded-tl-sm")).not.toBeInTheDocument()
  })

  it("tucks both corners for a middle message (others, left)", () => {
    const { container } = render(
      <ChatBubble
        message={makeMessage("hi")}
        isMine={false}
        isFirstOfRun={false}
        isLastOfRun={false}
      />
    )
    expect(container.querySelector(".rounded-tl-sm")).toBeInTheDocument()
    expect(container.querySelector(".rounded-bl-sm")).toBeInTheDocument()
  })

  it("tucks only the top for the last of a run (others, left)", () => {
    const { container } = render(
      <ChatBubble
        message={makeMessage("hi")}
        isMine={false}
        isFirstOfRun={false}
        isLastOfRun
      />
    )
    expect(container.querySelector(".rounded-tl-sm")).toBeInTheDocument()
    expect(container.querySelector(".rounded-bl-sm")).not.toBeInTheDocument()
  })

  it("mirrors the chaining to the right for my own messages", () => {
    // First of a run: bottom-right tucked, top-right still rounded.
    const first = render(
      <ChatBubble message={makeMessage("hi")} isMine isLastOfRun={false} />
    )
    expect(first.container.querySelector(".rounded-br-sm")).toBeInTheDocument()
    expect(
      first.container.querySelector(".rounded-tr-sm")
    ).not.toBeInTheDocument()

    // Last of a run: top-right tucked, bottom-right rounded again.
    const last = render(
      <ChatBubble message={makeMessage("hi")} isMine isFirstOfRun={false} />
    )
    expect(last.container.querySelector(".rounded-tr-sm")).toBeInTheDocument()
    expect(
      last.container.querySelector(".rounded-br-sm")
    ).not.toBeInTheDocument()
  })
})

describe("ChatBubble body links", () => {
  it("renders a URL in the body as a clickable new-tab link", () => {
    render(
      <ChatBubble
        message={makeMessage("docs here https://example.com/guide ok?")}
        isMine={false}
      />
    )
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "https://example.com/guide")
    expect(link).toHaveAttribute("target", "_blank")
    // The surrounding text is preserved around the link.
    expect(screen.getByText(/docs here/)).toBeInTheDocument()
    expect(screen.getByText(/ok\?/)).toBeInTheDocument()
  })

  it("renders one link per URL", () => {
    render(
      <ChatBubble
        message={makeMessage("https://a.example.com and https://b.example.com")}
        isMine={false}
      />
    )
    const links = screen.getAllByRole("link")
    expect(links.map((l) => l.getAttribute("href"))).toEqual([
      "https://a.example.com",
      "https://b.example.com",
    ])
  })

  it("renders no link for a body without URLs", () => {
    render(<ChatBubble message={makeMessage("no links here")} isMine={false} />)
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
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
