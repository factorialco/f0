import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

import { A11yRow, A11yTooltipRow } from "./A11yRow"

// axe-core is dynamically imported inside the audit; hoist a mock so both rows
// exercise the real audit path without loading the (heavy, DOM-scanning) lib.
const { axeRun } = vi.hoisted(() => ({ axeRun: vi.fn() }))
vi.mock("axe-core", () => ({ default: { run: axeRun } }))

/**
 * The audit only runs against story canvases inside `#storybook-docs`. Mount a
 * fake docs root with one `.docs-story` canvas so `runAudit` has a target and
 * `isInStorybookDocs()` returns true.
 */
function mountDocsRoot() {
  const root = document.createElement("div")
  root.id = "storybook-docs"
  const canvas = document.createElement("div")
  canvas.className = "docs-story"
  root.appendChild(canvas)
  document.body.appendChild(root)
  return root
}

beforeEach(() => {
  axeRun.mockReset()
  axeRun.mockResolvedValue({ violations: [] })
})

afterEach(() => {
  document.getElementById("storybook-docs")?.remove()
})

describe("A11yTooltipRow (maturity tooltip)", () => {
  test("runs the axe audit automatically on mount (tooltip open)", async () => {
    mountDocsRoot()

    render(<A11yTooltipRow detail="axe posture detail" tier="enforced" />)

    // No disclosure to click — mounting the row (i.e. opening the tooltip) is
    // enough to kick off the live check.
    expect(
      screen.queryByText(/check the rendered stories/i)
    ).not.toBeInTheDocument()

    await waitFor(() => expect(axeRun).toHaveBeenCalled())
    expect(
      await screen.findByText(/no violations in the stories/i)
    ).toBeInTheDocument()
  })

  test("lists the failing WCAG criteria the audit reports", async () => {
    mountDocsRoot()
    axeRun.mockResolvedValue({
      violations: [
        {
          id: "color-contrast",
          description: "Elements must meet minimum contrast",
          tags: ["cat.color", "wcag2aa", "wcag143"],
          nodes: [{}, {}],
        },
      ],
    })

    render(<A11yTooltipRow detail="axe posture detail" tier="skipped" />)

    expect(await screen.findByText("color-contrast")).toBeInTheDocument()
    expect(screen.getByText(/WCAG 1\.4\.3 AA \(2\.0\)/)).toBeInTheDocument()
    expect(screen.getByText(/2 elements/)).toBeInTheDocument()
  })

  test("falls back to 'unavailable' when not on the docs page", async () => {
    // No #storybook-docs root mounted.
    render(<A11yTooltipRow detail="axe posture detail" tier="todo" />)

    expect(
      await screen.findByText(/live results are available on the storybook/i)
    ).toBeInTheDocument()
    expect(axeRun).not.toHaveBeenCalled()
  })
})

describe("A11yRow (docs panel)", () => {
  test("defers the audit until the reader expands the disclosure", async () => {
    mountDocsRoot()

    const { container } = render(
      <A11yRow detail="axe posture detail" tier="enforced" />
    )

    // Idle on first render — the docs page stays cheap until asked.
    expect(screen.getByText(/check the rendered stories/i)).toBeInTheDocument()
    expect(axeRun).not.toHaveBeenCalled()

    // Expanding the <details> triggers the run.
    const details = container.querySelector("details")!
    details.open = true
    fireEvent(details, new Event("toggle", { bubbles: false }))

    await waitFor(() => expect(axeRun).toHaveBeenCalled())
    expect(
      await screen.findByText(/no violations in the stories/i)
    ).toBeInTheDocument()
  })
})
