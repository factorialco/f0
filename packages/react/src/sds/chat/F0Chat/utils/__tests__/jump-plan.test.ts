import { describe, expect, it } from "vitest"
import {
  CHAT_TELEPORT_APPROACH_ROWS,
  CHAT_TELEPORT_THRESHOLD_ROWS,
  planJump,
} from "../virtuoso-chat"

const plan = (from: number | null, to: number, rowCount = 10_000) =>
  planJump({ from, to, rowCount })

describe("planJump · choosing the motion", () => {
  it("scrolls continuously inside the threshold", () => {
    expect(plan(500, 500 + CHAT_TELEPORT_THRESHOLD_ROWS)).toEqual({
      kind: "smooth",
      index: 500 + CHAT_TELEPORT_THRESHOLD_ROWS,
    })
  })

  // The adjacent pair. A threshold tested only from far away passes for every
  // value between the two probes.
  it("teleports one row past the threshold", () => {
    expect(plan(500, 500 + CHAT_TELEPORT_THRESHOLD_ROWS + 1).kind).toBe(
      "teleport"
    )
  })

  it("is symmetric: the same distance upwards also teleports", () => {
    expect(plan(500, 500 - CHAT_TELEPORT_THRESHOLD_ROWS).kind).toBe("smooth")
    expect(plan(500, 500 - CHAT_TELEPORT_THRESHOLD_ROWS - 1).kind).toBe(
      "teleport"
    )
  })

  it("repositions instantly when there is no measured position to leave", () => {
    expect(plan(null, 9_000)).toEqual({ kind: "instant", index: 9_000 })
  })
})

describe("planJump · where the hidden reposition lands", () => {
  it("lands BEFORE the target when travelling towards newer messages", () => {
    const result = plan(100, 9_000)
    expect(result).toEqual({
      kind: "teleport",
      staging: 9_000 - CHAT_TELEPORT_APPROACH_ROWS,
      index: 9_000,
    })
  })

  it("lands AFTER the target when travelling towards older messages", () => {
    const result = plan(9_000, 100)
    expect(result).toEqual({
      kind: "teleport",
      staging: 100 + CHAT_TELEPORT_APPROACH_ROWS,
      index: 100,
    })
  })

  // The approach always runs in the jump's own direction, which is what makes
  // the arrival read as travel. A staging row on the wrong side would animate
  // backwards out of the target.
  it("always leaves the approach running in the direction of travel", () => {
    const down = plan(0, 5_000)
    const up = plan(5_000, 0)
    expect(down.kind === "teleport" && down.staging < down.index).toBe(true)
    expect(up.kind === "teleport" && up.staging > up.index).toBe(true)
  })
})

describe("planJump · distance is rows, not a fraction of the history", () => {
  // The midpoint of a very long conversation is far from a reader at the top
  // and next door to a reader already standing on it. A percentage-of-history
  // rule gets both of these wrong.
  it("teleports to the midpoint of a huge history from the top", () => {
    expect(plan(0, 20_000, 40_000).kind).toBe("teleport")
  })

  it("scrolls to the same midpoint from right beside it", () => {
    expect(plan(19_995, 20_000, 40_000).kind).toBe("smooth")
  })

  it("scrolls across a whole short conversation", () => {
    expect(plan(0, 30, 31).kind).toBe("smooth")
  })
})

describe("planJump · edges", () => {
  it("clamps a target past the end of the list", () => {
    expect(plan(0, 99_999, 500).index).toBe(499)
  })

  it("clamps a negative target", () => {
    expect(plan(400, -5, 500).index).toBe(0)
  })

  it("never stages outside the list", () => {
    const toEnd = plan(0, 499, 500)
    const toStart = plan(499, 0, 500)
    expect(toEnd.kind === "teleport" && toEnd.staging).toBeGreaterThanOrEqual(0)
    expect(toStart.kind === "teleport" && toStart.staging).toBeLessThanOrEqual(
      499
    )
  })

  // The invariant an edge case would otherwise grope at one pair at a time:
  // a staged row is always inside the list and always on the far side of the
  // target from the reader, so the approach can never animate backwards out
  // of the message it is arriving at.
  it("holds the staging invariant across the whole index space", () => {
    const rowCount = 500
    for (let from = 0; from < rowCount; from += 7) {
      for (let to = 0; to < rowCount; to += 11) {
        const result = planJump({ from, to, rowCount })
        if (result.kind !== "teleport") {
          continue
        }
        expect(result.staging).toBeGreaterThanOrEqual(0)
        expect(result.staging).toBeLessThanOrEqual(rowCount - 1)
        expect(result.staging).not.toBe(result.index)
        expect(result.staging > result.index).toBe(result.index < from)
      }
    }
  })

  it("honours a caller-supplied threshold", () => {
    expect(planJump({ from: 0, to: 5, rowCount: 100, threshold: 4 }).kind).toBe(
      "teleport"
    )
    expect(planJump({ from: 0, to: 5, rowCount: 100, threshold: 5 }).kind).toBe(
      "smooth"
    )
  })

  it("honours a caller-supplied approach", () => {
    const result = planJump({
      from: 0,
      to: 900,
      rowCount: 1_000,
      approach: 3,
    })
    expect(result).toEqual({ kind: "teleport", staging: 897, index: 900 })
  })
})
