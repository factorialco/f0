import { describe, expect, it } from "vitest"

import { edgeTypes, edgeVariants } from "../types"

describe("F0GraphEdge", () => {
  it("exports correct edge types", () => {
    expect(edgeTypes).toEqual(["smoothstep", "straight", "bezier"])
  })

  it("exports correct edge variants", () => {
    expect(edgeVariants).toEqual(["default", "highlighted", "dimmed"])
  })
})
