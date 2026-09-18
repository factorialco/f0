import { describe, expect, it } from "vitest"
import { CHAT_TELEPORT_THRESHOLD_ROWS, planJump } from "../virtuoso-chat"

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
    expect(plan(500, 500 + CHAT_TELEPORT_THRESHOLD_ROWS + 1)).toEqual({
      kind: "teleport",
      index: 500 + CHAT_TELEPORT_THRESHOLD_ROWS + 1,
    })
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

  it("measures the distance against the clamped target", () => {
    // 99_999 clamps to 499, which is inside the threshold from 480.
    expect(plan(480, 99_999, 500).kind).toBe("smooth")
  })

  it("honours a caller-supplied threshold", () => {
    expect(planJump({ from: 0, to: 5, rowCount: 100, threshold: 4 }).kind).toBe(
      "teleport"
    )
    expect(planJump({ from: 0, to: 5, rowCount: 100, threshold: 5 }).kind).toBe(
      "smooth"
    )
  })
})
