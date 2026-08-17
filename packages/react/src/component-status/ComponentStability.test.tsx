import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"

import { ComponentMaturityTag, ComponentStability } from "./ComponentStability"
import { type ComponentEntry } from "./component-status"

// axe-core is dynamically imported by the a11y audit; hoist a mock so opening
// the maturity tooltip exercises the real audit wiring without the heavy lib.
const { axeRun } = vi.hoisted(() => ({ axeRun: vi.fn() }))
vi.mock("axe-core", () => ({ default: { run: axeRun } }))

/** A fake Storybook docs root with one story canvas so the audit has a target
 * and `isInStorybookDocs()` returns true. */
function mountDocsRoot() {
  const root = document.createElement("div")
  root.id = "storybook-docs"
  const canvas = document.createElement("div")
  canvas.className = "docs-story"
  root.appendChild(canvas)
  document.body.appendChild(root)
}

const DATASET: ComponentEntry[] = [
  {
    // Tagged stable but below the bar (no docs) → effectively experimental.
    name: "Card",
    zone: "components",
    apiStatus: "stable",
    tags: ["stable"],
    hasStories: true,
    hasUnitTests: true,
    hasPlayFunction: true,
    hasSnapshot: true,
    hasMdxDocs: false,
    docQuality: "none",
    docSignals: {
      sectionsCount: 0,
      hasProps: false,
      hasWhenToUse: false,
      hasWhenNotToUse: false,
      hasDoDonts: false,
      exampleCount: 0,
    },
    a11yTier: "todo",
    storyFile: "components/F0Card/__stories__/Card.stories.tsx",
  },
  {
    // Tagged stable and meets the full bar → effectively stable.
    name: "Alert",
    zone: "components",
    apiStatus: "stable",
    tags: ["stable"],
    hasStories: true,
    hasUnitTests: true,
    hasPlayFunction: true,
    hasSnapshot: true,
    hasMdxDocs: true,
    docQuality: "gold",
    docSignals: {
      sectionsCount: 3,
      hasProps: true,
      hasWhenToUse: true,
      hasWhenNotToUse: true,
      hasDoDonts: true,
      exampleCount: 4,
    },
    a11yTier: "enforced",
    storyFile: "components/F0Alert/__stories__/F0Alert.stories.tsx",
  },
]

describe("ComponentStability", () => {
  test("downgrades a below-bar 'stable' component to Experimental", () => {
    render(<ComponentStability componentName="Card" components={DATASET} />)

    expect(screen.getByText("Maturity level")).toBeInTheDocument()
    expect(screen.getByText("Experimental")).toBeInTheDocument()
    expect(screen.getByText(/treated as experimental/i)).toBeInTheDocument()
    // Checklist labels + a neutral subtitle for each point.
    expect(screen.getByText("Has unit tests")).toBeInTheDocument()
    expect(screen.getByText("Has a play function")).toBeInTheDocument()
    expect(screen.getByText("Has MDX documentation")).toBeInTheDocument()
    expect(
      screen.getByText(/\.mdx documentation page alongside the stories/i)
    ).toBeInTheDocument()
    // Doc-quality criteria are enumerated, not left abstract.
    expect(screen.getByText(/required sections \(anatomy/i)).toBeInTheDocument()
    expect(
      screen.getByText(/at least three named example stories/i)
    ).toBeInTheDocument()
  })

  test("shows Stable only when tagged stable and meeting the full bar", () => {
    render(<ComponentStability componentName="Alert" components={DATASET} />)
    expect(screen.getByText("Stable")).toBeInTheDocument()
    expect(
      screen.getByText(/meets the full definition of done/i)
    ).toBeInTheDocument()
    // Subtitles are shown per point even when everything is met.
    expect(screen.getByText("Has a play function")).toBeInTheDocument()
  })

  test("resolves forgiving names (F0 prefix / prefixed title)", () => {
    const { container } = render(
      <ComponentStability
        componentName="Components/F0Card"
        components={DATASET}
      />
    )
    expect(container).toHaveTextContent("Maturity level")
    expect(container).toHaveTextContent("Experimental")
  })

  test("renders nothing for an unknown component", () => {
    const { container } = render(
      <ComponentStability componentName="DoesNotExist" components={DATASET} />
    )
    expect(container).toBeEmptyDOMElement()
  })

  test.each([
    { tier: "enforced" as const, posture: "enforced", glyph: "✓" },
    { tier: "todo" as const, posture: "not enforced yet", glyph: "✕" },
    { tier: "skipped" as const, posture: "axe skipped", glyph: "✕" },
  ])(
    "renders the Accessibility row posture for tier=$tier (no axe run)",
    ({ tier, posture, glyph }) => {
      const one = [{ ...DATASET[1], name: "Widget", a11yTier: tier }]
      render(<ComponentStability componentName="Widget" components={one} />)
      const label = screen.getByText("Accessibility").closest("div")!
      expect(label.textContent).toContain(`— ${posture}`)
      // the row's glyph reflects met (✓) vs unmet (✕)
      const row = label.parentElement!.parentElement!
      expect(row.textContent).toContain(glyph)
    }
  )
})

describe("ComponentMaturityTag", () => {
  beforeEach(() => {
    axeRun.mockReset()
    axeRun.mockResolvedValue({ violations: [] })
  })

  afterEach(() => {
    document.getElementById("storybook-docs")?.remove()
  })

  test("renders the maturity badge and nothing for unknown components", () => {
    const { container, rerender } = render(
      <ComponentMaturityTag componentName="Card" components={DATASET} />
    )
    expect(screen.getByText("Experimental")).toBeInTheDocument()

    rerender(
      <ComponentMaturityTag componentName="DoesNotExist" components={DATASET} />
    )
    expect(container).toBeEmptyDOMElement()
  })

  // Regression guard for #4836: collapsing the maturity panel into the title
  // tag dropped the a11y row's live audit. The tooltip has no "check the
  // rendered stories" control, so opening it must run the audit automatically.
  test("runs the a11y audit automatically when the tooltip opens", async () => {
    mountDocsRoot()

    const { container } = render(
      <ComponentMaturityTag componentName="Card" components={DATASET} />
    )

    // Nothing runs until the tooltip is revealed — the row mounts on open.
    expect(axeRun).not.toHaveBeenCalled()

    const trigger = container.querySelector("[data-state]") as HTMLElement
    fireEvent.focus(trigger)

    // Opening the tooltip must kick off the audit with no user action — this is
    // the behaviour #4836 regressed.
    await waitFor(() => expect(axeRun).toHaveBeenCalled())
    // …and its results render inline (findAllBy: Radix briefly double-mounts the
    // content during its open animation).
    expect(
      (await screen.findAllByText(/no violations in the stories/i)).length
    ).toBeGreaterThan(0)
    // The auto-run replaces the panel's manual disclosure entirely.
    expect(
      screen.queryByText(/check the rendered stories/i)
    ).not.toBeInTheDocument()
  })
})
