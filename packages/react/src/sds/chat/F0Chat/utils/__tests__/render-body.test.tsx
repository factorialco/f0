import { describe, expect, it } from "vitest"
import { screen, zeroRender } from "@/testing/test-utils"
import {
  type MentionToken,
  renderBodyWithLinks,
  renderBodyWithMentions,
} from "../render-body"
import { sanitizeDisplayText } from "../sanitize-text"

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

  // The composer's overlay has to paint a mention identically, and it is the
  // side that cannot carry a weight: a `<textarea>` lays its whole run out at
  // one weight, so a heavier mention there pushes the caret off the glyphs
  // (#5274 measured 1.250px worst delta and 44/48 indices off, versus 0.023px
  // without it). Parity is therefore met here, by this side staying unweighted.
  it("gives the chip no font-weight, so the composer can match it exactly", () => {
    const tokens: MentionToken[] = [
      {
        name: "Ana",
        isSelf: false,
        isEveryone: false,
        user: { id: "1", name: "Ana" },
      },
    ]
    zeroRender(<div>{renderBodyWithMentions("hi @Ana!", tokens)}</div>)
    expect(screen.getByText("@Ana").className).not.toMatch(
      /\bfont-(thin|extralight|light|medium|semibold|bold|extrabold|black)\b/
    )
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

  // Ranges are taken from the raw body before each rendered slice is composed,
  // so a name carrying the decomposed spelling must match without losing its
  // original boundaries.
  // Escapes, not literal characters: the two spellings are the point here and
  // are indistinguishable on screen.
  it("chips a name whose accent is stored decomposed", () => {
    const decomposed = "Garci\u0301a"
    const composed = "Garc\u00EDa"
    const tokens: MentionToken[] = [
      {
        name: decomposed,
        isSelf: false,
        isEveryone: false,
        user: { id: "1", name: decomposed },
      },
    ]
    zeroRender(
      <div>{renderBodyWithMentions(`hi @${decomposed}!`, tokens)}</div>
    )
    expect(screen.getByText(`@${composed}`).className).toContain(
      "text-f1-foreground-secondary"
    )
  })

  it("keeps a profile mention when display sanitization strips a bidi control", () => {
    const tokens: MentionToken[] = [
      {
        name: "Ana",
        isSelf: false,
        isEveryone: false,
        user: { id: "1", name: "Ana", profileHref: "/people/ana" },
      },
    ]

    zeroRender(<div>{renderBodyWithMentions("hi @A\u202Ena!", tokens)}</div>)

    expect(screen.getByRole("link", { name: "@Ana" })).toHaveAttribute(
      "href",
      "/people/ana"
    )
  })

  it("keeps a mention when display sanitization caps combining marks", () => {
    const name = `A${"\u0301".repeat(4)}na`
    const bodyName = `A${"\u0301".repeat(6)}na`
    const tokens: MentionToken[] = [{ name, isSelf: false, isEveryone: false }]

    zeroRender(<div>{renderBodyWithMentions(`hi @${bodyName}!`, tokens)}</div>)

    expect(screen.getByText(sanitizeDisplayText(`@${name}`))).toHaveClass(
      "text-f1-foreground-secondary"
    )
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
