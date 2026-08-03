import { userEvent } from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { act, zeroRender as render, screen } from "@/testing/test-utils"

import { F0AvatarList } from "../F0AvatarList"

describe("F0AvatarList", () => {
  it("renders all avatars when count is at or below max", () => {
    render(
      <F0AvatarList
        type="person"
        avatars={[
          { firstName: "Ada", lastName: "Lovelace" },
          { firstName: "Alan", lastName: "Turing" },
          { firstName: "Grace", lastName: "Hopper" },
        ]}
        max={3}
        noTooltip
      />
    )

    expect(screen.getByText("AL")).toBeInTheDocument()
    expect(screen.getByText("AT")).toBeInTheDocument()
    expect(screen.getByText("GH")).toBeInTheDocument()
    expect(screen.queryByText(/^\+\d+$/)).not.toBeInTheDocument()
  })

  it("renders a `+N` overflow counter when count exceeds max", () => {
    render(
      <F0AvatarList
        type="person"
        avatars={[
          { firstName: "Ada", lastName: "Lovelace" },
          { firstName: "Alan", lastName: "Turing" },
          { firstName: "Grace", lastName: "Hopper" },
          { firstName: "Marie", lastName: "Curie" },
          { firstName: "Lionel", lastName: "Messi" },
        ]}
        max={3}
        noTooltip
      />
    )

    expect(screen.getByText("+2")).toBeInTheDocument()
  })

  it("renders the remainingCount value when explicitly provided", () => {
    render(
      <F0AvatarList
        type="person"
        avatars={[
          { firstName: "Ada", lastName: "Lovelace" },
          { firstName: "Alan", lastName: "Turing" },
        ]}
        max={2}
        remainingCount={7}
        noTooltip
      />
    )

    expect(screen.getByText("+7")).toBeInTheDocument()
  })

  it("renders tooltipDescription inside the overflow popover", async () => {
    const user = userEvent.setup()
    render(
      <F0AvatarList
        type="person"
        avatars={[
          { firstName: "Ada", lastName: "Lovelace" },
          { firstName: "Alan", lastName: "Turing" },
          { firstName: "Grace", lastName: "Hopper" },
          {
            firstName: "Marie",
            lastName: "Curie",
            tooltipDescription: "marie.curie@example.com",
          },
          {
            firstName: "Lionel",
            lastName: "Messi",
            tooltipDescription: "lionel.messi@example.com",
          },
        ]}
        max={3}
        noTooltip
      />
    )

    await user.hover(screen.getByText("+2"))

    expect(
      await screen.findByText("marie.curie@example.com")
    ).toBeInTheDocument()
    expect(screen.getByText("lionel.messi@example.com")).toBeInTheDocument()
  })

  it("shows the tooltip description on hover by default", async () => {
    const user = userEvent.setup()
    render(
      <F0AvatarList
        type="person"
        avatars={[
          {
            firstName: "Ada",
            lastName: "Lovelace",
            tooltipDescription: "ada.lovelace@example.com",
          },
        ]}
        max={1}
      />
    )

    // Tooltip content only mounts while the tooltip is open, and the default
    // open delay is 700ms, so this has to hover and wait it out.
    await user.hover(screen.getByText("AL"))

    const tooltip = await screen.findByRole("tooltip", {}, { timeout: 3000 })
    expect(tooltip).toHaveTextContent("Ada Lovelace")
    expect(tooltip).toHaveTextContent("ada.lovelace@example.com")
  })
})

/**
 * Asserting that a hover discloses *nothing* needs the hover delay to have
 * elapsed, otherwise the absence proves only that the test was faster than
 * radix. Real timers would mean burning >700ms of wall clock per assertion, so
 * these two tests drive the clock instead.
 */
describe("F0AvatarList hover-discloses-nothing cases", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  // Well past radix's 700ms default open delay.
  const settleHoverDelay = async () => {
    await act(async () => {
      vi.advanceTimersByTime(2000)
    })
  }

  it("does not render the overflow popover when remainingCount is non-zero", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(
      <F0AvatarList
        type="person"
        avatars={[
          { firstName: "Ada", lastName: "Lovelace" },
          { firstName: "Alan", lastName: "Turing" },
          { firstName: "Grace", lastName: "Hopper" },
        ]}
        max={2}
        remainingCount={7}
        noTooltip
      />
    )

    // A non-zero `remainingCount` makes the counter a plain label: the hidden
    // avatars are not passed to MaxCounter (F0AvatarList.tsx:139-143), so
    // hovering discloses nothing — the opposite of the tooltipDescription test,
    // where the same hover lists them. Asserted with `queryBy` rather than
    // `expect(findBy…).rejects`, because `findBy` also rejects when it finds
    // *several* matches, which would make a duplicate-rendering regression look
    // like a pass.
    await user.hover(screen.getByText(/^\+\d+$/))
    await settleHoverDelay()

    expect(screen.queryByText("Grace Hopper")).not.toBeInTheDocument()
  })

  it("does not render tooltip content when noTooltip is true", async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(
      <F0AvatarList
        type="person"
        avatars={[
          {
            firstName: "Ada",
            lastName: "Lovelace",
            tooltipDescription: "ada.lovelace@example.com",
          },
        ]}
        max={1}
        noTooltip
      />
    )

    // With noTooltip there is no Tooltip wrapper at all, so hovering past the
    // open delay still mounts no content. Hovering is what makes this assertion
    // mean anything: without it the text is absent either way.
    await user.hover(screen.getByText("AL"))
    await settleHoverDelay()

    expect(screen.queryByRole("tooltip")).toBeNull()
    expect(
      screen.queryByText("ada.lovelace@example.com")
    ).not.toBeInTheDocument()
  })
})
