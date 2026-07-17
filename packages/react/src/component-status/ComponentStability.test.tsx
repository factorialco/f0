import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { ComponentStability } from "./ComponentStability"
import { type ComponentEntry } from "./component-status"

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
})
