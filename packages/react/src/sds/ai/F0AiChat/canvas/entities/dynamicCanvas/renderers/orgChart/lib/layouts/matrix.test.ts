import { describe, expect, it } from "vitest"

import { matrixLayout } from "./matrix"

describe("matrixLayout", () => {
  it("groups rows by row and column fields", () => {
    const result = matrixLayout(
      [
        { personName: "Ana", role: "PM", domain: "Talent" },
        { personName: "Berto", role: "Design", domain: "Talent" },
        { personName: "Carla", role: "PM", domain: "Finance" },
      ],
      {
        rowField: "role",
        columnField: "domain",
        nodeWidth: 120,
        nodeHeight: 60,
        cellGap: 8,
      }
    )

    const cells = result.elements.filter((element) => element.type === "node")

    expect(cells).toHaveLength(4)
    expect(cells.map((cell) => cell.data.__count)).toEqual([1, 1, 1, 0])
  })

  it("prefixes matrix row groups with cluster fields", () => {
    const result = matrixLayout(
      [
        {
          personName: "Ana",
          team: "Recruiting",
          role: "PM",
          domain: "Talent",
        },
        {
          personName: "Berto",
          team: "Performance",
          role: "PM",
          domain: "Talent",
        },
      ],
      {
        rowField: "role",
        columnField: "domain",
        clusterBy: ["team"],
        nodeWidth: 120,
        nodeHeight: 60,
        cellGap: 8,
      }
    )

    const rowLabels = result.elements
      .filter((element) => element.id.startsWith("row-header"))
      .map((element) => element.data.name)

    expect(rowLabels).toEqual(["Recruiting › PM", "Performance › PM"])
  })
})
