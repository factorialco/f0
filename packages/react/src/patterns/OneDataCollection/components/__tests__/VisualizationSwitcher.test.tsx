import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen } from "@/testing/test-utils"

import { VisualizationSwitcher } from "../VisualizationSwitcher"

// Only the `type` drives the icon/label resolution, so minimal stubs suffice.
const visualizations = [
  { type: "table", options: {} },
  { type: "graph", options: {} },
] as unknown as Parameters<typeof VisualizationSwitcher>[0]["visualizations"]

/** Radix's tooltip trigger merges this class onto whatever it wraps. */
const TOOLTIP_TRIGGER_CLASS = "pointer-events-auto"
/** `sr-only`, but only where the pointer can hover. */
const HOVER_ONLY_HIDDEN_LABEL = "[@media(hover:hover)]:sr-only"

describe("VisualizationSwitcher", () => {
  it("renders an icon-only segment per visualization, label kept accessible", () => {
    render(
      <VisualizationSwitcher
        visualizations={visualizations}
        currentVisualization={0}
        onVisualizationChange={vi.fn()}
      />
    )
    // Hidden where the pointer can hover, visible on touch, named either way.
    expect(screen.getByText("Table")).toHaveClass(HOVER_ONLY_HIDDEN_LABEL)
    expect(screen.getByText("Graph")).toHaveClass(HOVER_ONLY_HIDDEN_LABEL)
    expect(screen.getByRole("radio", { name: "Graph" })).toBeInTheDocument()
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

  it("wires every segment up to a tooltip that can name it", () => {
    // The delay and the tooltip copy are pinned in F0SegmentedControl's own
    // suite; here it only matters that the switcher opts into it.
    render(
      <VisualizationSwitcher
        visualizations={visualizations}
        currentVisualization={0}
        onVisualizationChange={vi.fn()}
      />
    )

    expect(screen.getByRole("radio", { name: "Graph" })).toHaveClass(
      TOOLTIP_TRIGGER_CLASS
    )
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
