import { describe, expect, it } from "vitest"
import { buildHighlightSegments, escapeXml } from "../highlight-utils"

const ana = (start: number) => ({ id: "ana-g", name: "Ana García", start })

describe("buildHighlightSegments", () => {
  it("paints the span the anchor points at", () => {
    expect(
      buildHighlightSegments("Hola @Ana García, ¿vienes?", [ana(5)])
    ).toEqual([
      { type: "text", text: "Hola " },
      { type: "mention", text: "@Ana García" },
      { type: "text", text: ", ¿vienes?" },
    ])
  })

  it("gives two people who share a name one span each", () => {
    expect(
      buildHighlightSegments("@Ana García y @Ana García", [ana(0), ana(14)])
    ).toEqual([
      { type: "mention", text: "@Ana García" },
      { type: "text", text: " y " },
      { type: "mention", text: "@Ana García" },
    ])
  })

  it("paints nothing where an anchor no longer sits on its own name", () => {
    // The anchors are reconciled in an effect, so a keystroke that moves one
    // lands a render early. Painting the old span would highlight glyphs the
    // sent payload will not tag.
    expect(buildHighlightSegments("Hola y@Ana García", [ana(5)])).toEqual([
      { type: "text", text: "Hola y@Ana García" },
    ])
  })

  it("puts the ghost completion at the cursor", () => {
    expect(
      buildHighlightSegments("Hola @Ana", [], {
        cursorPosition: 9,
        inlineCompletion: " García",
      })
    ).toEqual([
      { type: "text", text: "Hola @Ana" },
      { type: "ghost", text: " García" },
    ])
  })
})

describe("escapeXml", () => {
  it("neutralizes the characters that would break out of an attribute", () => {
    expect(escapeXml('a&b<c>d"e')).toBe("a&amp;b&lt;c&gt;d&quot;e")
  })
})
