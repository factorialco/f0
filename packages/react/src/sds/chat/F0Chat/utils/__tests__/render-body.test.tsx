import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import {
  type MentionToken,
  renderBodyWithLinks,
  renderBodyWithMentions,
  renderTextWithEmojis,
} from "../render-body"

describe("renderBodyWithMentions", () => {
  it("returns the plain body when there are no mentions", () => {
    zeroRender(<div>{renderBodyWithMentions("hello there", [])}</div>)
    expect(screen.getByText("hello there")).toBeInTheDocument()
  })

  it("renders an other-person mention as an info chip", () => {
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
    expect(chip.className).toContain("bg-f1-background-info")
  })

  it("renders a self / everyone mention as a warning chip", () => {
    const tokens: MentionToken[] = [
      { name: "here", isSelf: false, isEveryone: true },
    ]
    zeroRender(<div>{renderBodyWithMentions("ping @here", tokens)}</div>)
    const chip = screen.getByText("@here")
    expect(chip.className).toContain("bg-f1-background-warning")
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

describe("renderTextWithEmojis (composer overlay)", () => {
  it("returns the text unchanged when there is no emoji", () => {
    zeroRender(<div>{renderTextWithEmojis("just text")}</div>)
    expect(screen.getByText("just text")).toBeInTheDocument()
  })

  it("paints an emoji as a twemoji image over a hidden native glyph", () => {
    const { container } = zeroRender(<div>{renderTextWithEmojis("hi 😀")}</div>)
    // The twemoji image is rendered…
    const img = container.querySelector("img")
    expect(img).not.toBeNull()
    expect(img?.getAttribute("src")).toContain("twemoji")
    // …over a hidden native glyph that reserves the textarea's layout width.
    expect(container.querySelector("span.invisible")?.textContent).toBe("😀")
  })
})
