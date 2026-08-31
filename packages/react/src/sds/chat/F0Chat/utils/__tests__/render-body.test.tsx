import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import {
  type MentionToken,
  renderBodyWithLinks,
  renderBodyWithMentions,
} from "../render-body"

describe("renderBodyWithMentions", () => {
  it("returns the plain body when there are no mentions", () => {
    zeroRender(<div>{renderBodyWithMentions("hello there", [])}</div>)
    expect(screen.getByText("hello there")).toBeInTheDocument()
  })

  it("renders an other-person mention with accessible neutral emphasis", () => {
    const tokens: MentionToken[] = [
      {
        name: "Ana",
        isSelf: false,
        isEveryone: false,
        user: { id: "1", name: "Ana" },
      },
    ]
    zeroRender(<div>{renderBodyWithMentions("hi @Ana!", tokens)}</div>)
    const chip = screen.getByText("@Ana")
    expect(chip).toBeInTheDocument()
    expect(chip.className).toContain("text-f1-foreground-secondary")
  })

  it("renders a self / everyone mention with accessible neutral emphasis", () => {
    const tokens: MentionToken[] = [
      { name: "here", isSelf: false, isEveryone: true },
    ]
    zeroRender(<div>{renderBodyWithMentions("ping @here", tokens)}</div>)
    const chip = screen.getByText("@here")
    expect(chip.className).toContain("text-f1-foreground-secondary")
  })

  it("prefers the longest matching name when mentions overlap", () => {
    const tokens: MentionToken[] = [
      {
        name: "Ana",
        isSelf: false,
        isEveryone: false,
        user: { id: "1", name: "Ana" },
      },
      {
        name: "Ana María",
        isSelf: false,
        isEveryone: false,
        user: { id: "2", name: "Ana María" },
      },
    ]
    zeroRender(<div>{renderBodyWithMentions("hey @Ana María", tokens)}</div>)
    expect(screen.getByText("@Ana María")).toBeInTheDocument()
  })
})

describe("renderBodyWithLinks (preview titles)", () => {
  const URL = "https://marca.example.com/futbol/gol-mikel-merino-video.html"
  const TITLE = "Gol de Mikel Merino (0-1) en el Portugal 0-1 España"

  it("renders the link as its preview title instead of the raw URL", () => {
    zeroRender(
      <div>
        {renderBodyWithLinks(`Vaya golazo ${URL}`, [
          { url: URL, title: TITLE },
        ])}
      </div>
    )
    const link = screen.getByRole("link", { name: /Gol de Mikel Merino/ })
    expect(link).toHaveAttribute("href", URL)
    // The real destination stays discoverable on hover.
    expect(link).toHaveAttribute("title", URL)
    expect(screen.queryByText(URL)).not.toBeInTheDocument()
  })

  it("falls back to the raw URL when there is no preview title", () => {
    zeroRender(<div>{renderBodyWithLinks(`Mira ${URL}`, [])}</div>)
    const link = screen.getByRole("link", { name: /marca/ })
    expect(link).toHaveAttribute("href", URL)
    expect(link).not.toHaveAttribute("title")
  })

  it("titles each URL independently in a multi-link body", () => {
    const other = "https://status.example.com/incidents"
    zeroRender(
      <div>
        {renderBodyWithLinks(`Comparando ${URL} y ${other}`, [
          { url: URL, title: TITLE },
          // No title scraped for the second link — it stays a raw URL.
          { url: other },
        ])}
      </div>
    )
    expect(
      screen.getByRole("link", { name: /Gol de Mikel Merino/ })
    ).toHaveAttribute("href", URL)
    expect(screen.getByRole("link", { name: /status/ })).toHaveAttribute(
      "href",
      other
    )
  })

  it("keeps preview titles working around mention chips", () => {
    const tokens: MentionToken[] = [
      {
        name: "Ana",
        isSelf: false,
        isEveryone: false,
        user: { id: "1", name: "Ana" },
      },
    ]
    zeroRender(
      <div>
        {renderBodyWithMentions(`@Ana mira ${URL}`, tokens, [
          { url: URL, title: TITLE },
        ])}
      </div>
    )
    expect(screen.getByText("@Ana")).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /Gol de Mikel Merino/ })
    ).toHaveAttribute("href", URL)
  })
})

describe("emoji in bodies", () => {
  it("leaves the glyph in place for the OS to draw", () => {
    const { container } = zeroRender(
      <div>{renderBodyWithLinks("hi 😀 there")}</div>
    )
    expect(screen.getByText("hi 😀 there")).toBeInTheDocument()
    expect(container.querySelector("img")).toBeNull()
  })

  it("keeps ZWJ sequences, skin tones and the colour variation selector", () => {
    // U+FE0F is a combining mark, so the sanitizer's zalgo cap runs over it —
    // and it is the only thing making ☺️ render in colour rather than as a
    // monochrome dingbat.
    const body = "👨‍👩‍👧‍👦 👋🏽 ☺️ 🇪🇸"
    zeroRender(<div>{renderBodyWithLinks(body)}</div>)
    expect(screen.getByText(body)).toBeInTheDocument()
  })
})
