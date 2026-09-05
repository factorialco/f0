import { describe, expect, it } from "vitest"

import { applyTranscriptSegment } from "../mocks/mockTranscript"
import { type F0MeetingTranscriptSegment } from "../types"

const segment = (
  id: string,
  text: string,
  isFinal = false
): F0MeetingTranscriptSegment => ({
  id,
  participantId: "p1",
  text,
  at: "2026-08-30T10:00:00.000Z",
  isFinal,
})

describe("applyTranscriptSegment", () => {
  it("appends a segment it has not seen", () => {
    const next = applyTranscriptSegment([], segment("a", "Hola"))
    expect(next).toHaveLength(1)
    expect(next[0]?.text).toBe("Hola")
  })

  it("REPLACES a revision instead of appending it", () => {
    // The whole reason the id is shared between interim and final: appending
    // each revision turns a transcript into the same sentence three times,
    // one word longer each pass.
    const first = applyTranscriptSegment([], segment("a", "Hola"))
    const second = applyTranscriptSegment(first, segment("a", "Hola qué"))
    const third = applyTranscriptSegment(
      second,
      segment("a", "Hola qué tal", true)
    )
    expect(third).toHaveLength(1)
    expect(third[0]?.text).toBe("Hola qué tal")
    expect(third[0]?.isFinal).toBe(true)
  })

  it("keeps a revision in its original position", () => {
    const list = [segment("a", "uno", true), segment("b", "dos")]
    const next = applyTranscriptSegment(list, segment("a", "uno final", true))
    expect(next.map((item) => item.id)).toEqual(["a", "b"])
  })

  it("does not mutate the list it was given", () => {
    const list = [segment("a", "uno")]
    applyTranscriptSegment(list, segment("a", "uno dos"))
    expect(list[0]?.text).toBe("uno")
  })
})
