import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { OrgChartNode } from "./OrgChartNode"

describe("OrgChartNode", () => {
  it("uses color encoding as a visible Factorial-style accent instead of flooding the whole card", () => {
    const { container, getByText } = render(
      <OrgChartNode
        data={{ id: "6", fullName: "Hellen the HR", team: "People" }}
        fields={[
          { column: "fullName", style: "title" },
          { column: "team", style: "tag", position: "bottom" },
        ]}
        overlays={undefined}
        backgroundColor="#ef4444"
        nodeWidth={220}
        nodeHeight={100}
        scale={1}
      />
    )

    const card = getByText("Hellen the HR").closest("div[style]")

    const accent = container.querySelector('[data-visualization-accent="true"]')

    expect(card).toHaveStyle({
      backgroundColor: "rgb(255, 255, 255)",
    })
    expect(accent).toHaveStyle({
      backgroundColor: "rgb(239, 68, 68)",
    })
  })

  it("summarizes dense matrix cells instead of rendering every person inline", () => {
    const { getByText, queryByText } = render(
      <OrgChartNode
        data={{
          __items: [
            { fullName: "Ana García" },
            { fullName: "Bruno Silva" },
            { fullName: "Carla Ruiz" },
            { fullName: "Dina Costa" },
            { fullName: "Eli Novak" },
          ],
        }}
        fields={[{ column: "fullName", style: "title" }]}
        overlays={undefined}
        nodeWidth={220}
        nodeHeight={100}
        scale={1}
      />
    )

    expect(getByText("5 people")).toBeInTheDocument()
    expect(getByText("Ana García")).toBeInTheDocument()
    expect(getByText("Bruno Silva")).toBeInTheDocument()
    expect(getByText("+3 more")).toBeInTheDocument()
    expect(queryByText("Carla Ruiz")).not.toBeInTheDocument()
    expect(queryByText("Dina Costa")).not.toBeInTheDocument()
  })

  it("uses product language for empty matrix cells", () => {
    const { getByText } = render(
      <OrgChartNode
        data={{ __items: [] }}
        fields={[{ column: "fullName", style: "title" }]}
        overlays={undefined}
        nodeWidth={220}
        nodeHeight={100}
        scale={1}
      />
    )

    expect(getByText("No current people")).toBeInTheDocument()
  })

  it("falls back to a known display name when the configured title field is missing", () => {
    const { getByText } = render(
      <OrgChartNode
        data={{ id: "6", fullName: "Hellen the HR" }}
        fields={[{ column: "employee_fullName", style: "title" }]}
        overlays={undefined}
        nodeWidth={220}
        nodeHeight={100}
        scale={1}
      />
    )

    expect(getByText("Hellen the HR")).toBeInTheDocument()
  })

  it("falls back to common generated org column aliases", () => {
    const { getByText } = render(
      <OrgChartNode
        data={{ person_id: "6", person_name: "Hellen the HR" }}
        fields={[{ column: "employee_fullName", style: "title" }]}
        overlays={undefined}
        nodeWidth={220}
        nodeHeight={100}
        scale={1}
      />
    )

    expect(getByText("Hellen the HR")).toBeInTheDocument()
  })
})
