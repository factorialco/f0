import { describe, expect, it } from "vitest"

import {
  classifyWindowChange,
  entryLocation,
  followDecision,
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

  it("shifts a grow by the rows above the surviving head, not the net delta", () => {
    // 3 rows landed on top and 5 at the bottom: only the 3 may move the base.
    expect(nextFirstItemIndex(1000, "grow", 10, 18, 3)).toBe(997)
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
