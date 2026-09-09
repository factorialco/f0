import { describe, expect, test } from "vitest"
import { screen, zeroRender } from "@/testing/test-utils"
import { Widget } from "."

/**
 * `action` TAKES ONE OR TWO. It was typed as a single button and spread
 * straight onto `F0Button`, so a card that handed it an array — which the
 * component's own story did — spread the ARRAY instead: one button, keyed `0`
 * and `1`, with no label and nothing to press. Two buttons now draw as two.
 *
 * A PAIR IS OUTLINE at every width. Alone in the rail a footer button is filled
 * (`neutral`) so it doesn't read as one more row under a dense stack; two of
 * them are a set of equals, and filling either would nominate it as the card's
 * answer. jsdom computes no layout, so that is asserted on the classes each
 * variant draws with.
 */
describe("the widget's footer actions", () => {
  const both = [
    { label: "Sign now", onClick: () => {} },
    { label: "Go to Documents", onClick: () => {} },
  ]

  test("draws one button for a single action", () => {
    zeroRender(
      <Widget
        header={{ title: "Documents" }}
        action={{ label: "Sign now", onClick: () => {} }}
      >
        Content
      </Widget>
    )

    expect(screen.getAllByRole("button")).toHaveLength(1)
    expect(screen.getByRole("button", { name: "Sign now" })).toBeVisible()
  })

  test("draws both buttons of a pair, each with its own label", () => {
    zeroRender(
      <Widget header={{ title: "Documents" }} action={both}>
        Content
      </Widget>
    )

    expect(screen.getAllByRole("button")).toHaveLength(2)
    expect(screen.getByRole("button", { name: "Sign now" })).toBeVisible()
    expect(
      screen.getByRole("button", { name: "Go to Documents" })
    ).toBeVisible()
  })

  test("separates them, rather than butting them together", () => {
    zeroRender(
      <Widget header={{ title: "Documents" }} action={both}>
        Content
      </Widget>
    )

    expect(
      screen.getByRole("button", { name: "Sign now" }).parentElement
    ).toHaveClass("gap-2")
  })

  test("draws a pair as equals — outline, not one filled", () => {
    zeroRender(
      <Widget header={{ title: "Documents" }} action={both}>
        Content
      </Widget>
    )

    // `outline` rings its border in; `neutral` paints a fill. The narrow card's
    // single button would be the filled one.
    for (const name of ["Sign now", "Go to Documents"]) {
      const button = screen.getByRole("button", { name })
      expect(button).toHaveClass("after:ring-f1-border")
      expect(button).not.toHaveClass("bg-f1-background-secondary")
    }
  })

  test("still lets a caller pick the variant of either one", () => {
    zeroRender(
      <Widget
        header={{ title: "Documents" }}
        action={[
          { label: "Sign now", variant: "critical", onClick: () => {} },
          both[1],
        ]}
      >
        Content
      </Widget>
    )

    expect(screen.getByRole("button", { name: "Sign now" })).toHaveClass(
      "text-f1-foreground-critical"
    )
  })
})
