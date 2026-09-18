import { cleanup, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

/**
 * `VersionItem` formats each version's timestamp with date-fns `PPPp` and uses
 * the result as the button's `aria-label`, so the story's fixture dates *are*
 * its accessible names. A `Date.now()`-relative fixture therefore renames every
 * version button as the clock moves, which downstream `getByRole("button", {
 * name })` queries — and the aria-surface check — read as a break.
 *
 * Importing the story module under two very different system clocks is what
 * catches that: the fixtures are built once at module scope, so only a fresh
 * import re-evaluates them.
 */
const namesRenderedAt = async (isoNow: string): Promise<string[]> => {
  vi.useFakeTimers()
  vi.setSystemTime(new Date(isoNow))
  vi.resetModules()

  const { composeStories } = await import("@storybook/react-vite")
  const stories = await import("../F0VersionHistory.stories")
  const { Default } = composeStories(stories)

  render(<Default />)
  const names = screen
    .getAllByRole("button")
    .map((button) => button.getAttribute("aria-label") ?? button.textContent)
    .filter((name): name is string => Boolean(name))
    .sort()

  cleanup()
  vi.useRealTimers()
  return names
}

afterEach(() => {
  vi.useRealTimers()
})

describe("F0VersionHistory stories — accessible names", () => {
  it("names every version button the same whatever day it is", async () => {
    const onTuesday = await namesRenderedAt("2026-03-10T09:00:00Z")
    const aYearLater = await namesRenderedAt("2027-07-22T23:30:00Z")

    expect(onTuesday.length).toBeGreaterThan(0)
    expect(aYearLater).toEqual(onTuesday)
  })
})
