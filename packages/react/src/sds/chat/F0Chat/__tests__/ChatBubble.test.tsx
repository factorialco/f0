import { describe, expect, it } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { bubbleCornerClass, ChatBubble } from "../components/ChatBubble"
import { type F0ChatMessage } from "../types"
import { formatClock } from "../utils/natural-time"
import {
  senderBubbleColorClass,
  senderNameColorClass,
} from "../utils/sender-color"

const now = new Date().toISOString()
const nowClock = formatClock(new Date(now))

/** Own bubbles stay on the neutral token — the `-secondary` step, since the
 * `-tertiary` 4% no longer separates from the transcript next to the sender
 * tints. */
const OWN_BUBBLE_SURFACE = "bg-f1-background-secondary"

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

  it("leaves an emoji in the body as text for the OS to draw", () => {
    render(<ChatBubble message={makeMessage("hi 👋 there")} isMine={false} />)
    // The glyph stays in the text content — no <img>, no network request, and
    // the reader gets the emoji their own machine draws.
    expect(screen.getByText("hi 👋 there")).toBeInTheDocument()
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })

  it("keeps multi-codepoint sequences intact", () => {
    // A ZWJ family and a skin-tone modifier both survive as single characters:
    // splitting them is what produces the "man + woman + girl + boy" render.
    render(<ChatBubble message={makeMessage("👨‍👩‍👧‍👦 ship it 👋🏽")} isMine={false} />)
    expect(screen.getByText("👨‍👩‍👧‍👦 ship it 👋🏽")).toBeInTheDocument()
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
  })
})

describe("ChatBubble sender colour", () => {
  it("tints an incoming bubble with its author's palette colour", () => {
    const message = makeMessage("hello")
    render(<ChatBubble message={message} isMine={false} />)

    expect(screen.getByText("hello").closest(".rounded-2xl")).toHaveClass(
      senderBubbleColorClass(message.author)
    )
  })

  it("keeps the neutral background for my own messages", () => {
    const message = { ...makeMessage("hello"), isMine: true }
    render(<ChatBubble message={message} isMine />)

    const bubble = screen.getByText("hello").closest(".rounded-2xl")
    expect(bubble).toHaveClass(OWN_BUBBLE_SURFACE)
    expect(bubble).not.toHaveClass("bg-f1-background-tertiary")
    expect(bubble).not.toHaveClass(senderBubbleColorClass(message.author))
  })

  it("keeps deleted own messages on the same neutral background", () => {
    const message = { ...makeMessage("hello"), isMine: true, deleted: true }
    render(<ChatBubble message={message} isMine />)

    const bubble = screen.getByText("Message deleted")
    expect(bubble).toHaveClass(OWN_BUBBLE_SURFACE)
    expect(bubble).not.toHaveClass("bg-f1-background-tertiary")
  })

  it("keeps failed message content at full opacity", () => {
    const message = {
      ...makeMessage("hello"),
      isMine: true,
      status: "failed" as const,
    }
    render(<ChatBubble message={message} isMine />)

    expect(screen.getByText("hello").closest(".rounded-2xl")).not.toHaveClass(
      "opacity-60"
    )
  })

  it("keeps the matching name and bubble hues in a group message run", () => {
    const message = makeMessage("hello team")
    render(
      <ChatBubble
        message={message}
        isMine={false}
        author={message.author}
        isFirstOfRun
        isLastOfRun={false}
      />
    )

    expect(screen.getByText(message.author.name)).toHaveClass(
      senderNameColorClass(message.author)
    )
    expect(screen.getByText("hello team").closest(".rounded-2xl")).toHaveClass(
      senderBubbleColorClass(message.author),
      "rounded-bl-sm"
    )
  })
})

describe("ChatBubble chained corners", () => {
  it("keeps the outer interaction surface concentric with either tail side", () => {
    expect(
      bubbleCornerClass({
        isMine: false,
        isFirstOfRun: false,
        isLastOfRun: false,
        layer: "outer",
      }).split(" ")
    ).toEqual(
      expect.arrayContaining([
        "rounded-[22px]",
        "rounded-tl-[10px]",
        "rounded-bl-[10px]",
      ])
    )
    expect(
      bubbleCornerClass({
        isMine: true,
        isFirstOfRun: false,
        isLastOfRun: false,
        layer: "outer",
      }).split(" ")
    ).toEqual(
      expect.arrayContaining([
        "rounded-[22px]",
        "rounded-tr-[10px]",
        "rounded-br-[10px]",
      ])
    )
  })

  // A lone message is a run of one, so it ends a stack and carries the point.
  it("pulls in the bottom tail corner of a lone message (others, left)", () => {
    const { container } = render(
      <ChatBubble message={makeMessage("hi")} isMine={false} />
    )
    expect(container.querySelector(".rounded-bl-2xs")).toBeInTheDocument()
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
    // The point belongs to the END of the run, not its start.
    expect(container.querySelector(".rounded-bl-2xs")).not.toBeInTheDocument()
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

  it("tucks the top and pulls in the bottom for the last of a run (others, left)", () => {
    const { container } = render(
      <ChatBubble
        message={makeMessage("hi")}
        isMine={false}
        isFirstOfRun={false}
        isLastOfRun
      />
    )
    expect(container.querySelector(".rounded-tl-sm")).toBeInTheDocument()
    expect(container.querySelector(".rounded-bl-2xs")).toBeInTheDocument()
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

    // Last of a run: top-right tucked, bottom-right squared.
    const last = render(
      <ChatBubble message={makeMessage("hi")} isMine isFirstOfRun={false} />
    )
    expect(last.container.querySelector(".rounded-tr-sm")).toBeInTheDocument()
    expect(last.container.querySelector(".rounded-br-2xs")).toBeInTheDocument()
    expect(
      last.container.querySelector(".rounded-br-sm")
    ).not.toBeInTheDocument()
  })

  // The point exists on exactly one bubble per run, so the outer hover surface
  // has to follow it or the 2px frame would bulge around it. This is the one
  // corner that takes the inner radius rather than inner + 2.
  it("keeps the outer surface on the same radius as the end corner", () => {
    expect(
      bubbleCornerClass({
        isMine: false,
        isFirstOfRun: false,
        isLastOfRun: true,
        layer: "outer",
      }).split(" ")
    ).toEqual(expect.arrayContaining(["rounded-[22px]", "rounded-bl-2xs"]))
    expect(
      bubbleCornerClass({
        isMine: true,
        isFirstOfRun: false,
        isLastOfRun: true,
        layer: "outer",
      }).split(" ")
    ).toEqual(expect.arrayContaining(["rounded-[22px]", "rounded-br-2xs"]))
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

describe("ChatBubble meta cluster", () => {
  it("pins the time to the end of the message, after the text", () => {
    const { container } = render(
      <ChatBubble message={makeMessage("hello")} isMine={false} />
    )
    const meta = screen.getByTestId("chat-message-time")
    expect(meta).toHaveTextContent(nowClock)
    expect(meta).toHaveClass(
      "absolute",
      "bottom-2.5",
      "right-3",
      "text-f1-foreground-tertiary"
    )
    // Never announced: the transcript has exactly one live region.
    expect(meta).toHaveAttribute("aria-hidden", "true")

    // An invisible twin trails the body and reserves the pinned copy's width,
    // so the time either finishes the last line or wraps onto its own.
    const reserve = screen.getByTestId("chat-message-time-reserve")
    expect(reserve).toHaveTextContent(nowClock)
    expect(reserve).toHaveClass("invisible", "inline-block")
    // Same type scale, or the reserved gap is too narrow.
    expect(reserve.className).toContain("text-xs")
    expect(meta.className).toContain("text-xs")

    // Order matters: the reserve must come AFTER the body text.
    const body = container.querySelector(".relative.px-3\\.5")
    expect(body?.textContent?.indexOf("hello")).toBeLessThan(
      body?.textContent?.lastIndexOf(nowClock) ?? -1
    )
  })

  it("pairs 'edited' with the time in a single cluster", () => {
    render(
      <ChatBubble
        message={{ ...makeMessage("updated text"), editedAt: now }}
        isMine
      />
    )
    expect(screen.getByTestId("chat-message-time")).toHaveTextContent(
      `edited · ${nowClock}`
    )
  })

  it("repeats the cluster for assistive tech in reading order", () => {
    const { container } = render(
      <ChatBubble
        message={{ ...makeMessage("updated text"), editedAt: now }}
        isMine
      />
    )
    const srOnly = container.querySelector(".sr-only")
    expect(srOnly).toHaveTextContent(`edited · ${nowClock}`)
  })

  it("trims trailing newlines so the float isn't stranded above blank lines", () => {
    const { container } = render(
      <ChatBubble message={makeMessage("hello\n\n\n")} isMine={false} />
    )
    expect(container.textContent).toContain("hello")
    expect(container.textContent).not.toContain("hello\n")
  })

  it("does not show 'edited' on an unedited message", () => {
    render(<ChatBubble message={makeMessage("hello")} isMine={false} />)
    expect(screen.getByTestId("chat-message-time")).toHaveTextContent(
      new RegExp(`^${nowClock}$`)
    )
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
    expect(screen.getByTestId("chat-message-time")).toHaveTextContent(
      new RegExp(`^${nowClock}$`)
    )
  })
})
