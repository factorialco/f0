import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { VisualizationSwitcher } from "../VisualizationSwitcher"

// Only the `type` drives the icon/label resolution, so minimal stubs suffice.
const visualizations = [
  { type: "table", options: {} },
  { type: "graph", options: {} },
] as unknown as Parameters<typeof VisualizationSwitcher>[0]["visualizations"]

describe("VisualizationSwitcher", () => {
  it("renders a segment per visualization with its label", () => {
    render(
      <VisualizationSwitcher
        visualizations={visualizations}
        currentVisualization={0}
        onVisualizationChange={vi.fn()}
      />
    )
    expect(screen.getByText("Table")).toBeInTheDocument()
    expect(screen.getByText("Graph")).toBeInTheDocument()
  })

  it("marks the current visualization as selected", () => {
    render(
      <VisualizationSwitcher
        visualizations={visualizations}
        currentVisualization={1}
        onVisualizationChange={vi.fn()}
      />
    )
    expect(screen.getByText("Graph").closest("[data-state]")).toHaveAttribute(
      "data-state",
      "on"
    )
    expect(screen.getByText("Table").closest("[data-state]")).toHaveAttribute(
      "data-state",
      "off"
    )
  })

  it("calls onVisualizationChange with the clicked index", async () => {
    const onVisualizationChange = vi.fn()
    render(
      <VisualizationSwitcher
        visualizations={visualizations}
        currentVisualization={1}
        onVisualizationChange={onVisualizationChange}
      />
    )
    await userEvent.click(screen.getByText("Table"))
    expect(onVisualizationChange).toHaveBeenCalledWith(0)
  })

  it("renders icon-only segments (labels still accessible) when hideLabels is set", () => {
    render(
      <VisualizationSwitcher
        visualizations={visualizations}
        currentVisualization={0}
        onVisualizationChange={vi.fn()}
        hideLabels
      />
    )
    expect(screen.getByText("Table")).toHaveClass("sr-only")
    expect(screen.getByText("Graph")).toHaveClass("sr-only")
  })

  it("renders nothing when there is a single visualization", () => {
    const { container } = render(
      <VisualizationSwitcher
        visualizations={[visualizations[0]]}
        currentVisualization={0}
        onVisualizationChange={vi.fn()}
      />
    )
    expect(container).toBeEmptyDOMElement()
  })
})
