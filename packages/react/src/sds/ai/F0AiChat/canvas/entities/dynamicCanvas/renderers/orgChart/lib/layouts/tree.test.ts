import { describe, expect, it } from "vitest"

import { treeLayout } from "./tree"

describe("treeLayout", () => {
  it("stores edge endpoints with complete positioned dimensions", () => {
    const result = treeLayout(
      [
        { id: "ceo", managerId: null, fullName: "CEO" },
        { id: "cto", managerId: "ceo", fullName: "CTO" },
      ],
      {
        nodeWidth: 180,
        nodeHeight: 72,
        siblingGap: 24,
        levelGap: 48,
        idField: "id",
        parentIdField: "managerId",
      }
    )

    const firstElement = result.elements[0]
    const edges = firstElement?.data.__edges as
      | Array<{
          parent: { width?: number; height?: number }
          child: { width?: number; height?: number }
        }>
      | undefined

    expect(edges).toHaveLength(1)
    expect(edges?.[0]?.parent).toMatchObject({ width: 180, height: 72 })
    expect(edges?.[0]?.child).toMatchObject({ width: 180, height: 72 })
  })

  it("connects numeric ids and numeric manager ids", () => {
    const result = treeLayout(
      [
        { employee_id: 6, manager_id: null, fullName: "CEO" },
        { employee_id: 7, manager_id: 6, fullName: "CTO" },
      ],
      {
        nodeWidth: 180,
        nodeHeight: 72,
        siblingGap: 24,
        levelGap: 48,
        idField: "employee_id",
        parentIdField: "manager_id",
      }
    )

    expect(result.elements.map((element) => element.id)).toEqual(["6", "7"])
  })
})
