import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { ComponentStability } from "./ComponentStability"
import { type ComponentEntry } from "./component-status"

const DATASET: ComponentEntry[] = [
  {
    name: "Card",
    zone: "components",
    apiStatus: "stable",
    tags: ["stable"],
    hasStories: true,
    hasUnitTests: true,
    hasMdxDocs: false,
    docQuality: "none",
    storyFile: "components/F0Card/__stories__/Card.stories.tsx",
  },
  {
    name: "Alert",
    zone: "components",
    apiStatus: "stable",
    tags: ["stable"],
    hasStories: true,
    hasUnitTests: true,
    hasMdxDocs: true,
    docQuality: "gold",
    storyFile: "components/F0Alert/__stories__/F0Alert.stories.tsx",
  },
]

describe("ComponentStability", () => {
  test("renders badge, summary, and checklist from the status data", () => {
    render(<ComponentStability componentName="Card" components={DATASET} />)

    expect(screen.getByText("Maturity level")).toBeInTheDocument()
    expect(screen.getByText("Stable")).toBeInTheDocument()
    expect(
      screen.getByText(/tagged stable, but the checklist/i)
    ).toBeInTheDocument()
    // Checklist labels + a remediation hint for an unmet item.
    expect(screen.getByText("Has unit tests")).toBeInTheDocument()
    expect(screen.getByText("Has MDX documentation")).toBeInTheDocument()
    expect(screen.getByText(/add an \.mdx docs page/i)).toBeInTheDocument()
    // Doc-quality criteria are enumerated, not left abstract.
    expect(
      screen.getByText(/at least two of these sections/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/a props table/i)).toBeInTheDocument()
  })

  test("resolves forgiving names (F0 prefix / prefixed title)", () => {
    const { container } = render(
      <ComponentStability
        componentName="Components/F0Card"
        components={DATASET}
      />
    )
    expect(container).toHaveTextContent("Maturity level")
    expect(container).toHaveTextContent("Stable")
  })

  test("renders nothing for an unknown component", () => {
    const { container } = render(
      <ComponentStability componentName="DoesNotExist" components={DATASET} />
    )
    expect(container).toBeEmptyDOMElement()
  })
})
