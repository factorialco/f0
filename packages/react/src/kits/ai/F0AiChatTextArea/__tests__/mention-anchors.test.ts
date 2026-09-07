import { describe, expect, it } from "vitest"
import { anchorEnd, diffSpan, eraseSpans, reanchor } from "../mention-anchors"

const ana = (start: number) => ({ id: "ana-g", name: "Ana García", start })
const bruno = (start: number) => ({
  id: "bruno",
  name: "Bruno Martínez",
  start,
})

describe("diffSpan", () => {
  it("reads an insertion as an empty span in the old string", () => {
    expect(diffSpan("Hola mundo", "Hola y mundo")).toEqual({
      start: 5,
      prevEnd: 5,
      nextEnd: 7,
    })
  })

  it("reads a deletion as an empty span in the new string", () => {
    expect(diffSpan("Hola mundo", "Hola undo")).toEqual({
      start: 5,
      prevEnd: 6,
      nextEnd: 5,
    })
  })

  it("picks a span of the right length when the edit is ambiguous", () => {
    // Deleting either of two adjacent spaces gives the same string; whichever
    // one it names, the span has to be exactly one character wide.
    const { start, prevEnd, nextEnd } = diffSpan("a  b", "a b")
    expect(prevEnd - start).toBe(1)
    expect(nextEnd - start).toBe(0)
  })

  it("reads a whole-string replacement as one span", () => {
    expect(diffSpan("Hola", "Adiós")).toEqual({
      start: 0,
      prevEnd: 4,
      nextEnd: 5,
    })
  })
})

describe("reanchor", () => {
  it("slides an anchor when text is inserted immediately before it", () => {
    // The insertion point and the anchor are the same index; the mention is
    // what moves, not the text typed in front of it.
    expect(
      reanchor("Hola @Ana García ", "Hola y@Ana García ", [ana(5)])
    ).toEqual({ kept: [ana(6)], touched: [] })
  })

  it("slides an anchor sitting at index 0", () => {
    expect(reanchor("@Ana García ", "H@Ana García ", [ana(0)])).toEqual({
      kept: [ana(1)],
      touched: [],
    })
  })

  it("pulls an anchor back when text before it is deleted", () => {
    expect(reanchor("Hola @Ana García ", "Hol @Ana García ", [ana(5)])).toEqual(
      {
        kept: [ana(4)],
        touched: [],
      }
    )
  })

  it("treats adjacency as adjacency, not overlap", () => {
    expect(
      reanchor("Hola @Ana García ", "Hola @Ana García,", [ana(5)])
    ).toEqual({ kept: [ana(5)], touched: [] })
  })

  it("reports what is left of a mention an edit landed inside", () => {
    const { kept, touched } = reanchor(
      "Hola @Ana García, gracias",
      "Hola @Ana Garía, gracias",
      [ana(5)]
    )
    expect(kept).toEqual([])
    expect(touched).toEqual([{ start: 5, end: 15 }])
  })

  it("drops a mention the change replaced outright, erasing nothing", () => {
    // Select all, type "x": the mention's own text is already gone, and the
    // span that replaced it is the keystroke.
    expect(reanchor("Hola @Ana García,", "x", [ana(5)])).toEqual({
      kept: [],
      touched: [],
    })
  })

  it("keeps text typed over a selection that straddles two mentions", () => {
    const { kept, touched } = reanchor(
      "@Ana García y @Bruno Martínez ok",
      "@Ana X Martínez ok",
      [ana(0), bruno(14)]
    )
    expect(kept).toEqual([])
    // "@Ana " survives from the first, " Martínez" from the second — the "X"
    // between them is the user's and is not in either span.
    expect(touched).toEqual([
      { start: 0, end: 5 },
      { start: 6, end: 15 },
    ])
  })
})

describe("eraseSpans", () => {
  it("cuts several spans and slides the anchors and the caret", () => {
    expect(
      eraseSpans(
        "0123456789",
        [
          { start: 6, end: 8 },
          { start: 1, end: 3 },
        ],
        [ana(9)],
        7
      )
    ).toEqual({ text: "034589", mentions: [ana(5)], caret: 4 })
  })

  it("merges overlapping spans instead of cutting twice", () => {
    expect(
      eraseSpans(
        "0123456789",
        [
          { start: 1, end: 4 },
          { start: 3, end: 6 },
        ],
        [],
        10
      )
    ).toEqual({ text: "06789", mentions: [], caret: 5 })
  })
})

describe("anchorEnd", () => {
  it("counts the @ as part of the token", () => {
    expect(anchorEnd(ana(5))).toBe(16)
  })
})
