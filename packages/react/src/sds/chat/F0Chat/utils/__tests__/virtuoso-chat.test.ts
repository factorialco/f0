import { describe, expect, it } from "vitest"

import { type F0ChatMessage } from "../../types"
import { flattenChatRows } from "../grouping"
import {
  advanceChatWindow,
  type ChatWindowState,
  chatHeightEstimates,
  chatRowHeightEstimate,
  classifyWindowChange,
  entryLocation,
  followDecision,
  initialChatWindow,
  nextFirstItemIndex,
  PREFETCH_OLDER_VIEWPORTS,
  PREPEND_OFFSET,
  shouldPrefetchOlder,
  shouldRepinOnGrowth,
  UNREAD_DIVIDER_TOP_GAP,
  windowEnds,
} from "../virtuoso-chat"

const ends = (ids: string[]) => windowEnds(ids.map((id) => ({ id })))

describe("classifyWindowChange", () => {
  it("detects the initial load", () => {
    expect(classifyWindowChange(ends([]), ends(["a"]))).toBe("initial")
  })

  it("treats identical ends as no change (status updates, reactions)", () => {
    expect(classifyWindowChange(ends(["a", "b"]), ends(["a", "b"]))).toBe(
      "none"
    )
  })

  it("classifies an older page landing as prepend", () => {
    expect(
      classifyWindowChange(ends(["c", "d"]), ends(["a", "b", "c", "d"]))
    ).toBe("prepend")
  })

  it("classifies a head removal as prepend (head-local change)", () => {
    expect(classifyWindowChange(ends(["a", "b", "c"]), ends(["b", "c"]))).toBe(
      "prepend"
    )
  })

  it("classifies a new message as append", () => {
    expect(classifyWindowChange(ends(["a", "b"]), ends(["a", "b", "c"]))).toBe(
      "append"
    )
  })

  it("classifies deleting the last message as append (tail-local change)", () => {
    expect(classifyWindowChange(ends(["a", "b", "c"]), ends(["a", "b"]))).toBe(
      "append"
    )
  })

  it("classifies a window swap (far jump) as replace", () => {
    expect(classifyWindowChange(ends(["a", "b"]), ends(["x", "y"]))).toBe(
      "replace"
    )
  })

  // The cached-then-watch() path every conversation takes when its panel is
  // reopened: both ends move, but the messages in between survive. Calling that
  // a swap remounts the list mid-entry, which reads as a scroll jump.
  it("classifies a window that widened at BOTH ends as grow, not replace", () => {
    expect(
      classifyWindowChange(
        ends(["c", "d"]),
        ends(["a", "b", "c", "d", "e"]),
        true
      )
    ).toBe("grow")
  })

  it("still calls a both-ends change with no survivors a replace", () => {
    expect(
      classifyWindowChange(ends(["c", "d"]), ends(["x", "y"]), false)
    ).toBe("replace")
  })
})

describe("nextFirstItemIndex", () => {
  it("starts at (and resets to) PREPEND_OFFSET", () => {
    expect(nextFirstItemIndex(123, "initial", 0, 10)).toBe(PREPEND_OFFSET)
    expect(nextFirstItemIndex(123, "replace", 10, 10)).toBe(PREPEND_OFFSET)
  })

  it("decreases by the net ROW delta on prepend", () => {
    // 20 messages landed but the old head's day separator merged away:
    // 12 rows → 31 rows is a net +19.
    expect(nextFirstItemIndex(PREPEND_OFFSET, "prepend", 12, 31)).toBe(
      PREPEND_OFFSET - 19
    )
  })

  it("increases on a head removal so surviving rows keep their index", () => {
    expect(nextFirstItemIndex(1000, "prepend", 10, 9)).toBe(1001)
  })

  it("keeps the index on append and none", () => {
    expect(nextFirstItemIndex(1000, "append", 10, 11)).toBe(1000)
    expect(nextFirstItemIndex(1000, "none", 10, 10)).toBe(1000)
  })

  it("shifts a grow by how far the surviving head moved, not the net delta", () => {
    // 3 rows landed on top and 5 at the bottom: only the 3 may move the base.
    expect(nextFirstItemIndex(1000, "grow", 10, 18, 3)).toBe(997)
  })
})

// The row build every window diff runs against: `flattenChatRows` always emits
// a day separator before the first message, so no message ever sits at row 0.
// That is exactly what made passing the surviving head's raw index (instead of
// how far it moved) over-shift `firstItemIndex` — Virtuoso then unshifts one
// row too many, reserves space for it and slides the transcript.
const DAY_ONE = "2026-01-05T10:00:00.000Z"
const DAY_TWO = "2026-01-06T10:00:00.000Z"

const message = (id: string, createdAt = DAY_TWO): F0ChatMessage => ({
  id,
  author: { id: "ana", name: "Ana" },
  body: `body ${id}`,
  createdAt,
  isMine: false,
})

const build = (messages: F0ChatMessage[]) => {
  const { rows, indexById } = flattenChatRows(messages)
  return { indexById, messages, rowCount: rows.length, rows }
}

const globalIndexOf = (
  state: ChatWindowState,
  { indexById }: { indexById: Map<string, number> },
  id: string
): number => state.firstItemIndex + indexById.get(id)!

const advance = (
  state: ChatWindowState,
  next: ReturnType<typeof build>,
  hasMoreNewer = false
) => advanceChatWindow(state, { ...next, hasMoreNewer })

describe("advanceChatWindow", () => {
  it("keeps surviving rows at their global index when an older page lands", () => {
    const before = build([message("c"), message("d")])
    const state = initialChatWindow({ ...before, hasMoreNewer: false })
    const anchor = globalIndexOf(state, before, "c")

    const after = build([
      message("a"),
      message("b"),
      message("c"),
      message("d"),
    ])
    const { change, state: next } = advance(state, after)

    expect(change).toBe("prepend")
    expect(globalIndexOf(next, after, "c")).toBe(anchor)
    expect(globalIndexOf(next, after, "d")).toBe(anchor + 1)
    expect(next.epoch).toBe(state.epoch)
  })

  it("absorbs a day separator that merges away with the prepended page", () => {
    // The old head opened day two with its own separator; the page that lands
    // starts that same day, so the old separator is gone from the new build.
    const before = build([message("c"), message("d")])
    const state = initialChatWindow({ ...before, hasMoreNewer: false })
    const anchor = globalIndexOf(state, before, "c")

    const after = build([
      message("a", DAY_ONE),
      message("b"),
      message("c"),
      message("d"),
    ])
    const { state: next } = advance(state, after)

    expect(globalIndexOf(next, after, "c")).toBe(anchor)
  })

  it("keeps surviving rows put when the window widens at BOTH ends", () => {
    // The cached-then-watch() path every conversation takes when it is opened.
    const before = build([message("c"), message("d")])
    const state = initialChatWindow({ ...before, hasMoreNewer: false })
    const anchorC = globalIndexOf(state, before, "c")
    const anchorD = globalIndexOf(state, before, "d")

    const after = build([
      message("a"),
      message("b"),
      message("c"),
      message("d"),
      message("e"),
    ])
    const { change, state: next } = advance(state, after)

    expect(change).toBe("grow")
    // Two messages landed above `c`, so the base moves by two — NOT by `c`'s
    // new row index (3, which counts the day separator that was always there).
    expect(next.firstItemIndex).toBe(state.firstItemIndex - 2)
    expect(globalIndexOf(next, after, "c")).toBe(anchorC)
    expect(globalIndexOf(next, after, "d")).toBe(anchorD)
    // A grow must never remount: that IS the entry jump.
    expect(next.epoch).toBe(state.epoch)
  })

  it("leaves the base alone when only the tail moves", () => {
    const before = build([message("c"), message("d")])
    const state = initialChatWindow({ ...before, hasMoreNewer: false })

    const after = build([message("c"), message("d"), message("e")])
    const { change, state: next } = advance(state, after)

    expect(change).toBe("append")
    expect(next.firstItemIndex).toBe(state.firstItemIndex)
    expect(globalIndexOf(next, after, "c")).toBe(
      globalIndexOf(state, before, "c")
    )
  })

  it("re-enters through the initial location when the window is swapped", () => {
    const before = build([message("c"), message("d")])
    const state = initialChatWindow({ ...before, hasMoreNewer: false })

    const after = build([message("x"), message("y")])
    const { change, state: next } = advance(state, after)

    expect(change).toBe("replace")
    expect(next.firstItemIndex).toBe(PREPEND_OFFSET)
    expect(next.epoch).toBe(state.epoch + 1)
  })

  it("returns the same state object when nothing moved", () => {
    const before = build([message("c"), message("d")])
    const state = initialChatWindow({ ...before, hasMoreNewer: false })
    const { change, state: next } = advance(state, before)

    expect(change).toBe("none")
    expect(next).toBe(state)
  })

  it("reports an own message landing on the live tail", () => {
    const before = build([message("c")])
    const state = initialChatWindow({ ...before, hasMoreNewer: false })
    const mine = { ...message("d"), isMine: true }

    expect(advance(state, build([message("c"), mine])).ownGlide).toBe(true)
    // Not on an older window (the tail isn't loaded) and not for other people.
    expect(advance(state, build([message("c"), mine]), true).ownGlide).toBe(
      false
    )
    expect(advance(state, build([message("c"), message("d")])).ownGlide).toBe(
      false
    )
  })

  it("chains shifts across commits without drifting", () => {
    let current = build([message("d")])
    let state = initialChatWindow({ ...current, hasMoreNewer: false })
    const anchor = globalIndexOf(state, current, "d")

    for (const ids of [
      ["c", "d"],
      ["b", "c", "d"],
      ["a", "b", "c", "d"],
    ]) {
      current = build(ids.map((id) => message(id)))
      state = advance(state, current).state
      expect(globalIndexOf(state, current, "d")).toBe(anchor)
    }
  })
})

describe("chatRowHeightEstimate", () => {
  const rowsOf = (messages: F0ChatMessage[]) => flattenChatRows(messages).rows

  it("estimates each row family in the right order of magnitude", () => {
    const [separator, first] = rowsOf([message("a"), message("b")])
    expect(chatRowHeightEstimate(separator!)).toBeGreaterThan(20)
    expect(chatRowHeightEstimate(separator!)).toBeLessThan(70)
    // A run's first message carries its spacing and sender name.
    expect(chatRowHeightEstimate(first!)).toBeGreaterThan(
      chatRowHeightEstimate(separator!)
    )
  })

  it("grows with the body, so long messages aren't estimated as short ones", () => {
    const short = rowsOf([message("a")])[1]!
    const long = rowsOf([{ ...message("a"), body: "x".repeat(600) }])[1]!
    expect(chatRowHeightEstimate(long)).toBeGreaterThan(
      chatRowHeightEstimate(short) * 3
    )
  })

  it("reserves media, which is what one flat number can never do", () => {
    const text = rowsOf([message("a")])[1]!
    const album = rowsOf([
      {
        ...message("a"),
        body: "",
        attachments: [
          { kind: "image", url: "1.jpg", name: "1" },
          { kind: "image", url: "2.jpg", name: "2" },
        ],
      },
    ])[1]!
    expect(chatRowHeightEstimate(album)).toBeGreaterThan(
      chatRowHeightEstimate(text) * 3
    )
  })

  it("returns one estimate per row, in order", () => {
    const rows = rowsOf([message("a"), message("b")])
    expect(chatHeightEstimates(rows)).toEqual(rows.map(chatRowHeightEstimate))
    expect(chatHeightEstimates(rows).every((value) => value > 0)).toBe(true)
  })
})

describe("entryLocation", () => {
  it("lands at the latest message by default", () => {
    expect(
      entryLocation({
        pendingIndex: null,
        dividerIndex: -1,
        hasMoreNewer: false,
      })
    ).toEqual({ index: "LAST", align: "end" })
  })

  it("pins the unread divider near the top with the sticky-pill gap", () => {
    expect(
      entryLocation({
        pendingIndex: null,
        dividerIndex: 4,
        hasMoreNewer: false,
      })
    ).toEqual({ index: 4, align: "start", offset: -UNREAD_DIVIDER_TOP_GAP })
  })

  it("holds the top of an older window (no target, tail not loaded)", () => {
    expect(
      entryLocation({ pendingIndex: null, dividerIndex: 4, hasMoreNewer: true })
    ).toEqual({ index: 0, align: "start" })
  })

  it("centers a pending far-jump target over everything else", () => {
    expect(
      entryLocation({ pendingIndex: 7, dividerIndex: 4, hasMoreNewer: false })
    ).toEqual({ index: 7, align: "center" })
  })
})

describe("shouldRepinOnGrowth", () => {
  const base = {
    prevHeight: 1000,
    height: 1032,
    prevCount: 10,
    count: 10,
    atBottom: true,
  }

  it("re-pins when bottom content grows in place (reaction, edit rewrap)", () => {
    expect(shouldRepinOnGrowth(base)).toBe(true)
  })

  it("stays put while scrolled up", () => {
    expect(shouldRepinOnGrowth({ ...base, atBottom: false })).toBe(false)
  })

  it("leaves count changes to followOutput (no double-commanding)", () => {
    expect(shouldRepinOnGrowth({ ...base, count: 11 })).toBe(false)
  })

  it("ignores shrink — the browser clamps it", () => {
    expect(shouldRepinOnGrowth({ ...base, height: 960 })).toBe(false)
    expect(shouldRepinOnGrowth({ ...base, height: 1000 })).toBe(false)
  })
})

describe("shouldPrefetchOlder", () => {
  it("prefetches within the viewport threshold of the top", () => {
    const clientHeight = 500
    const threshold = clientHeight * PREFETCH_OLDER_VIEWPORTS
    expect(shouldPrefetchOlder({ scrollTop: 0, clientHeight })).toBe(true)
    expect(shouldPrefetchOlder({ scrollTop: threshold, clientHeight })).toBe(
      true
    )
    expect(
      shouldPrefetchOlder({ scrollTop: threshold + 1, clientHeight })
    ).toBe(false)
  })

  it("honors a custom viewport multiplier", () => {
    expect(shouldPrefetchOlder({ scrollTop: 600, clientHeight: 500 }, 1)).toBe(
      false
    )
    expect(shouldPrefetchOlder({ scrollTop: 400, clientHeight: 500 }, 1)).toBe(
      true
    )
  })
})

describe("followDecision", () => {
  it("follows smoothly at the bottom", () => {
    expect(followDecision(true, false)).toBe("smooth")
  })

  it("follows instantly under reduced motion", () => {
    expect(followDecision(true, true)).toBe("auto")
  })

  it("never follows while scrolled up", () => {
    expect(followDecision(false, false)).toBe(false)
    expect(followDecision(false, true)).toBe(false)
  })
})
