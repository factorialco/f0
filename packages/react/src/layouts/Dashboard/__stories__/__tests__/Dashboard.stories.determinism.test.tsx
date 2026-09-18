import { composeStories } from "@storybook/react-vite"
import { cleanup, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import * as stories from "../Dashboard.stories"

/**
 * The story decorator adds a widget on mount, and that widget's title renders
 * as a heading. Built from `Math.random()` it renamed the heading on every
 * render, which downstream `getByRole("heading", { name })` queries — and the
 * aria-surface check — read as a break on every run of every PR.
 *
 * Two independent mounts are what catches it: the counter behind the title is
 * per-mount, so a deterministic story gives both mounts the same headings.
 */
const { Default } = composeStories(stories)

const headingsOfAFreshMount = (): string[] => {
  render(<Default />)
  const headings = screen
    .getAllByRole("heading")
    .map((heading) => heading.textContent?.trim() ?? "")
    .filter(Boolean)
    .sort()
  cleanup()
  return headings
}

describe("Dashboard stories — accessible names", () => {
  it("gives the added widget the same heading on every mount", () => {
    const firstMount = headingsOfAFreshMount()
    const secondMount = headingsOfAFreshMount()

    expect(firstMount.length).toBeGreaterThan(0)
    expect(secondMount).toEqual(firstMount)
  })

  it("numbers the added widget rather than naming it after a random float", () => {
    const headings = headingsOfAFreshMount()

    expect(headings.some((heading) => /^Title \d+$/.test(heading))).toBe(true)
    expect(headings.every((heading) => !/0\.\d{6}/.test(heading))).toBe(true)
  })
})
