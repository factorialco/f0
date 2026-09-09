import { describe, expect, it } from "vitest"
import { aiGradientTextClasses } from "@/lib/ai-gradient"
import { screen, zeroRender as render } from "@/testing/test-utils"
import { F0AiText } from ".."
import { f0AiTextVariants } from "../types"

describe("F0AiText", () => {
  it("renders the content", () => {
    render(<F0AiText content="Create a job posting with One" />)

    expect(
      screen.getByText("Create a job posting with One")
    ).toBeInTheDocument()
  })

  it("paints the glyphs with the shared One gradient", () => {
    render(<F0AiText content="One" />)

    expect(screen.getByText("One")).toHaveClass(
      ...aiGradientTextClasses.split(" ")
    )
  })

  it("exempts itself from the axe color-contrast rule", () => {
    render(<F0AiText content="One" />)

    expect(screen.getByText("One")).toHaveAttribute(
      "data-a11y-color-contrast-ignore"
    )
  })

  it("defaults to the heading-large size on an h1", () => {
    render(<F0AiText content="One" />)

    const headline = screen.getByRole("heading", { level: 1 })
    expect(headline).toHaveClass("text-2xl", "font-semibold")
  })

  it.each([
    ["heading-large", "H1"],
    ["heading", "H2"],
    ["body", "P"],
  ] as const)("renders %s as a %s", (variant, tag) => {
    render(<F0AiText variant={variant} content="One" />)

    expect(screen.getByText("One").tagName).toBe(tag)
  })

  it("lets the caller override the semantic tag", () => {
    render(<F0AiText as="span" content="One" />)

    expect(screen.getByText("One").tagName).toBe("SPAN")
  })

  it("applies the gradient at every allowed variant", () => {
    render(
      <>
        {f0AiTextVariants.map((variant) => (
          <F0AiText key={variant} variant={variant} content={variant} />
        ))}
      </>
    )

    for (const variant of f0AiTextVariants) {
      expect(screen.getByText(variant)).toHaveClass("text-transparent")
    }
  })

  it("aligns the text when asked", () => {
    render(<F0AiText align="center" content="One" />)

    expect(screen.getByText("One")).toHaveClass("text-center")
  })

  it("exposes a dataTestId hook for e2e selectors", () => {
    render(<F0AiText content="One" dataTestId="ai-headline" />)

    expect(screen.getByTestId("ai-headline")).toBeInTheDocument()
  })
})
