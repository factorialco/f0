import { describe, expect, it } from "vitest"

import { normalizeOrgSpec } from "./grammar"
import type { OrgVisualizationSpec } from "../types"

describe("normalizeOrgSpec", () => {
  it("normalizes a tree org spec into the internal tree grammar", () => {
    const spec: OrgVisualizationSpec = {
      layout: {
        type: "tree",
        idField: "employeeId",
        parentField: "managerEmployeeId",
        orientation: "top-down",
      },
      card: {
        title: "fullName",
        subtitle: "jobTitle",
        avatar: { src: "avatarUrl" },
        fields: [{ field: "salary", label: "Salary", format: "currency" }],
        badges: ["locationName"],
      },
      encodings: { colorBy: "department" },
      interactions: { zoom: true, pan: true, collapse: true },
    }

    const grammar = normalizeOrgSpec(spec)

    expect(grammar.layout.algorithm).toBe("tree")
    expect(grammar.layout.idField).toBe("employeeId")
    expect(grammar.layout.parentIdField).toBe("managerEmployeeId")
    expect(grammar.nodes.fields.map((field) => field.column)).toEqual([
      "fullName",
      "jobTitle",
      "salary",
      "locationName",
    ])
    expect(grammar.nodes.avatar?.column).toBe("avatarUrl")
    expect(grammar.visualEncoding?.colorBy?.field).toBe("department")
    expect(grammar.interactivity.collapsible).toBe(true)
  })

  it("normalizes a clustered matrix org spec into the internal matrix grammar", () => {
    const spec: OrgVisualizationSpec = {
      layout: {
        type: "clusteredMatrix",
        rows: ["role"],
        columns: ["domain"],
        clusterBy: ["team"],
      },
      card: {
        title: "personName",
        metrics: [{ field: "arrGoal", format: "currency" }],
      },
      encodings: { colorBy: "domain" },
    }

    const grammar = normalizeOrgSpec(spec)

    expect(grammar.layout.algorithm).toBe("matrix")
    expect(grammar.layout.rowField).toBe("role")
    expect(grammar.layout.columnField).toBe("domain")
    expect(grammar.layout.clusterBy).toEqual(["team"])
    expect(grammar.nodes.fields.map((field) => field.column)).toEqual([
      "personName",
      "arrGoal",
    ])
  })
})
