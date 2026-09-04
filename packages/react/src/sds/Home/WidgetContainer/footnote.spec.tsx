import { describe, expect, test } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { Footnote } from "./Footnote"

/**
 * A footnote is a STRING, so this is where the contract of that string lives:
 * what f0 turns into a link, what it prints as written, and what it refuses.
 * Where the sentence sits in a column is `WidgetContainer`'s own test.
 */
describe("Footnote", () => {
  test("draws a plain sentence as one paragraph", () => {
    zeroRender(<Footnote text="You are viewing Factorial's new home." />)

    expect(
      screen.getByText("You are viewing Factorial's new home.")
    ).toBeInTheDocument()
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })

  test("turns an inline markdown link into a link, keeping the words around it", () => {
    const { container } = zeroRender(
      <Footnote text="You are viewing the new home, you can [go back](/home?legacy=1) any time." />
    )

    const link = screen.getByRole("link", { name: "go back" })
    expect(link).toHaveAttribute("href", "/home?legacy=1")
    // One sentence, in the order it was written — the link is INSIDE it rather
    // than a second line under it.
    expect(container.textContent).toBe(
      "You are viewing the new home, you can go back any time."
    )
  })

  test("takes more than one link in the same sentence", () => {
    zeroRender(
      <Footnote text="Read the [notes](/notes) or [go back](/home)." />
    )

    expect(screen.getByRole("link", { name: "notes" })).toHaveAttribute(
      "href",
      "/notes"
    )
    expect(screen.getByRole("link", { name: "go back" })).toHaveAttribute(
      "href",
      "/home"
    )
  })

  test("prints anything that is not that pattern as the text it is", () => {
    const { container } = zeroRender(
      <Footnote text="**Not bold**, [not a link, and ![no image](/i.png)" />
    )

    // The bracket left open stays open — it does not reach forward and eat the
    // words up to the next link-shaped thing. And the one link-shaped thing in
    // there is an IMAGE, which a footnote does not draw: its label is all that
    // is left of it, as text.
    expect(container.textContent).toBe(
      "**Not bold**, [not a link, and no image"
    )
    expect(screen.queryByRole("img")).not.toBeInTheDocument()
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })

  test("keeps the label and drops the href of a link that points at code", () => {
    zeroRender(
      <Footnote text="You can [go back](javascript:alert(1)) any time." />
    )

    expect(screen.getByText(/go back/)).toBeInTheDocument()
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })
})
