import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import {
  type MentionToken,
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
