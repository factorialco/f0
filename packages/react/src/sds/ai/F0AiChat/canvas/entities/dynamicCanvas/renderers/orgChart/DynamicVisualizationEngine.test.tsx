import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { DynamicVisualizationEngine } from "./DynamicVisualizationEngine"
import type { OrgVisualizationSpec } from "./types"

const treeSpec: OrgVisualizationSpec = {
  layout: {
    type: "tree",
    idField: "id",
    parentField: "managerId",
    nodeWidth: 220,
    nodeHeight: 100,
    siblingGap: 40,
    levelGap: 80,
  },
  card: {
    title: "fullName",
    subtitle: "team",
  },
  interactions: {
    pan: true,
    zoom: true,
  },
}

function buildWideTree(size: number): Record<string, unknown>[] {
  return [
    { id: "root", managerId: null, fullName: "Root", team: "Company" },
    ...Array.from({ length: size }, (_, index) => ({
      id: `child-${index}`,
      managerId: "root",
      fullName: `Child ${index}`,
      team: "Team",
    })),
  ]
}

describe("DynamicVisualizationEngine", () => {
  it("opens large org trees at a readable camera size instead of fitting every node into one tiny line", () => {
    const { container } = render(
      <DynamicVisualizationEngine data={buildWideTree(100)} spec={treeSpec} />
    )

    const svg = container.querySelector("svg")
    expect(svg).not.toBeNull()

    const [, , width, height] = svg!
      .getAttribute("viewBox")!
      .split(" ")
      .map(Number)

    expect(width).toBeLessThanOrEqual(1200)
    expect(height).toBeLessThanOrEqual(700)
  })
})
