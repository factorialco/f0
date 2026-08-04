import { userEvent } from "@testing-library/user-event"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  zeroRender as render,
  screen,
  waitFor,
} from "@/testing/test-utils"

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

  describe("the `+N` counter as a keyboard-reachable disclosure", () => {
    const overflowing = (
      <F0AvatarList
        type="person"
        avatars={[
          { firstName: "Ada", lastName: "Lovelace" },
          { firstName: "Alan", lastName: "Turing" },
          { firstName: "Grace", lastName: "Hopper" },
          { firstName: "Marie", lastName: "Curie" },
        ]}
        max={3}
        noTooltip
      />
    )

    it("exposes the counter as a button naming the count", () => {
      render(overflowing)

      // The name is the count itself: it is the visible label at this size, and
      // at `xs` — where the counter is an ellipsis icon — the same string is
      // supplied as `sr-only` text, so the button is never unnamed. Using the
      // count rather than a phrase avoids adding a key to the shared
      // translations dictionary, which would break consumers maintaining full
      // translation objects.
      const trigger = screen.getByRole("button", { name: "+1" })
      expect(trigger).toHaveTextContent("+1")
      expect(trigger).toHaveAttribute("aria-expanded", "false")
    })

    it("still names the counter at `xs`, where it renders an icon and no text", () => {
      render(
        <F0AvatarList
          type="person"
          size="xs"
          avatars={[
            { firstName: "Ada", lastName: "Lovelace" },
            { firstName: "Alan", lastName: "Turing" },
            { firstName: "Grace", lastName: "Hopper" },
            { firstName: "Marie", lastName: "Curie" },
          ]}
          max={3}
          noTooltip
        />
      )

      // `xs` swaps the "+N" text for an ellipsis icon, so without the `sr-only`
      // span the disclosure button would have no accessible name at all
      // (axe `button-name`, WCAG 4.1.2). The name is the count rather than a
      // translated phrase, which is what keeps this component out of the shared
      // translations dictionary — adding a key there breaks consumers that
      // maintain full translation objects.
      const trigger = screen.getByRole("button", { name: "+1" })
      expect(trigger.querySelector("svg")).toBeInTheDocument()
      expect(trigger).toHaveTextContent("+1")
    })

    it("is reachable by Tab and opens on Enter, with no pointer involved", async () => {
      const user = userEvent.setup()
      render(overflowing)

      // The regression this pins: the trigger used to be a role-less <div>, so
      // Tab never reached it and the collapsed names were mouse-only. No hover
      // anywhere in this test — keyboard only, start to finish.
      await user.tab()
      const trigger = screen.getByRole("button", { name: "+1" })
      expect(trigger).toHaveFocus()

      await user.keyboard("{Enter}")

      expect(await screen.findByText("Marie Curie")).toBeInTheDocument()
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    it("toggles on click, which is also the path that works on touch", async () => {
      const user = userEvent.setup()
      render(overflowing)

      const trigger = screen.getByRole("button", { name: "+1" })
      await user.click(trigger)

      expect(await screen.findByText("Marie Curie")).toBeInTheDocument()
      expect(trigger).toHaveAttribute("aria-expanded", "true")
    })

    it("never moves focus when the card is opened and closed by hover", async () => {
      const user = userEvent.setup()
      render(overflowing)

      const trigger = screen.getByRole("button", { name: "+1" })
      const before = document.activeElement

      await user.hover(trigger)
      expect(await screen.findByText("Marie Curie")).toBeInTheDocument()
      // Hover must not pull focus out of whatever the user was doing.
      expect(document.activeElement).toBe(before)

      await user.unhover(trigger)
      // ...and Radix must not hand it back either. Without
      // `onCloseAutoFocus` being suppressed, closing returns focus to the
      // trigger, which leaves the counter sitting there with a focus ring as
      // though it had been tabbed to — reported as looking "selected" on
      // nothing more than a mouse-over.
      await waitFor(() =>
        expect(screen.queryByText("Marie Curie")).not.toBeInTheDocument()
      )
      expect(trigger).not.toHaveFocus()
      expect(document.activeElement).toBe(before)
    })

    it("moves focus into the popover so its scroll region is operable", async () => {
      const user = userEvent.setup()
      render(overflowing)

      await user.click(screen.getByRole("button", { name: "+1" }))
      expect(await screen.findByText("Marie Curie")).toBeInTheDocument()

      // This is what buys the scrolling. Radix Popover moves focus into the
      // content on open and, unlike HoverCard, does not strip tab stops — so
      // the ScrollArea viewport keeps the `tabIndex={0}` that makes it
      // keyboard-operable (verified against axe in a real browser).
      const viewport = document.querySelector("[data-scroll-container]")
      expect(viewport).toBeInTheDocument()
      expect(viewport).toHaveAttribute("tabindex", "0")
      expect(document.querySelector('[role="dialog"]')).toContainElement(
        viewport as HTMLElement
      )
    })

    it("keeps the counter role-less when there is nothing to disclose", () => {
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

      // `remainingCount` switches the popover's list off, so there is nothing
      // to open. A button here would advertise an interaction that does not
      // exist.
      expect(screen.getByText("+7")).toBeInTheDocument()
      expect(screen.queryByRole("button")).not.toBeInTheDocument()
    })
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
