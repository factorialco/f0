import { describe, expect, test, vi } from "vitest"

import { Clock, Cross } from "@/icons/app"
import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"

import { HomeListItem } from "./index"

describe("HomeListItem", () => {
  test("speaks with its three voices: title, subtitle inline, description below", () => {
    zeroRender(
      <HomeListItem
        title="Ada Lovelace"
        subtitle="Engineering"
        description="Requested 3 days off"
      />
    )

    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    expect(screen.getByText("· Engineering")).toBeInTheDocument()
    expect(screen.getByText("Requested 3 days off")).toBeInTheDocument()
  })

  test("says a subtitle carrying bad news in the critical colour — muted by default", () => {
    const { rerender } = zeroRender(
      <HomeListItem title="Expenses report" subtitle="Due Friday" />
    )

    const subtitle = () => screen.getByText("· Due Friday")

    expect(subtitle()).toHaveClass("text-f1-foreground-secondary")
    expect(subtitle()).not.toHaveClass("text-f1-foreground-critical")

    rerender(
      <HomeListItem
        title="Expenses report"
        subtitle="Due Friday"
        subtitleCritical
      />
    )

    // The dot goes critical with the text rather than staying muted.
    expect(subtitle()).toHaveClass("text-f1-foreground-critical")
    expect(subtitle()).not.toHaveClass("text-f1-foreground-secondary")
    // The title is untouched: it says what the row IS, not what's wrong with it.
    expect(screen.getByText("Expenses report")).toHaveClass(
      "text-f1-foreground"
    )
  })

  test("draws a left slot when given an avatar, none otherwise", () => {
    const { container, rerender } = zeroRender(
      <HomeListItem
        avatar={{ type: "person", firstName: "Ada", lastName: "Lovelace" }}
        title="Time off"
      />
    )

    expect(container.querySelector(".relative.shrink-0")).not.toBeNull()

    rerender(<HomeListItem title="Time off" />)
    expect(container.querySelector(".relative.shrink-0")).toBeNull()
  })

  test("sizes the data avatar via avatarSize, lg by default", () => {
    const { container, rerender } = zeroRender(
      <HomeListItem
        avatar={{ type: "person", firstName: "Ada", lastName: "Lovelace" }}
        title="Time off"
      />
    )

    expect(container.querySelector(".size-10")).not.toBeNull()

    rerender(
      <HomeListItem
        avatar={{ type: "person", firstName: "Ada", lastName: "Lovelace" }}
        avatarSize="sm"
        title="Time off"
      />
    )
    expect(container.querySelector(".size-6")).not.toBeNull()
    expect(container.querySelector(".size-10")).toBeNull()
  })

  test("fills the right slot with whatever the variant hands it", () => {
    zeroRender(<HomeListItem title="row" right={<span>trailing</span>} />)

    expect(screen.getByText("trailing")).toBeInTheDocument()
  })

  test("is a REAL link when it has an href, inert otherwise", () => {
    const { rerender } = zeroRender(<HomeListItem title="row" href="/x" />)

    expect(screen.getByRole("link", { name: "row" })).toHaveAttribute(
      "href",
      "/x"
    )

    rerender(<HomeListItem title="row" />)
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })

  test("draws no trailing chevron, even as a link, unless asked for one", () => {
    // No avatar, no right slot: the chevron would be the row's only glyph.
    const { container, rerender } = zeroRender(
      <HomeListItem title="row" href="/x" />
    )

    expect(container.querySelector("svg")).toBeNull()

    rerender(<HomeListItem title="row" href="/x" showChevron />)
    expect(container.querySelector("svg")).not.toBeNull()
  })

  test("only another HOST opens a new tab — this one never does", () => {
    const { rerender } = zeroRender(<HomeListItem title="row" href="/inside" />)

    expect(screen.getByRole("link")).not.toHaveAttribute("target")

    rerender(<HomeListItem title="row" href="#section" />)
    expect(screen.getByRole("link")).not.toHaveAttribute("target")

    // The app's own host, absolute and with a fragment — including under the
    // OTHER scheme, which used to read as a different site and open a new tab.
    rerender(
      <HomeListItem
        title="row"
        href={`https://${window.location.host}/calendar#core.events`}
      />
    )
    expect(screen.getByRole("link")).not.toHaveAttribute("target")

    rerender(<HomeListItem title="row" href="https://developer.mozilla.org" />)
    expect(screen.getByRole("link")).toHaveAttribute("target", "_blank")
    expect(screen.getByRole("link")).toHaveAttribute("rel", "noreferrer")
  })

  describe("hover actions", () => {
    const actions = [
      { label: "Clock out", icon: Clock, onClick: vi.fn() },
      { label: "Dismiss", icon: Cross, onClick: vi.fn(), critical: true },
    ]

    test("names each one, and calls only the one that was pressed", async () => {
      const clockOut = vi.fn()
      const dismiss = vi.fn()
      zeroRender(
        <HomeListItem
          title="You never clocked out"
          actions={[
            { label: "Clock out", icon: Clock, onClick: clockOut },
            { label: "Dismiss", icon: Cross, onClick: dismiss },
          ]}
        />
      )

      // Icon-only, so the label IS the accessible name.
      await userEvent.click(screen.getByRole("button", { name: "Clock out" }))

      expect(clockOut).toHaveBeenCalledTimes(1)
      expect(dismiss).not.toHaveBeenCalled()
    })

    test("stays in the DOM while hidden, so Tab can reach it", () => {
      zeroRender(<HomeListItem title="row" actions={actions} />)

      // Hidden by opacity rather than by being absent or `aria-hidden`: a
      // keyboard user tabs to it, and reaching it is what reveals the strip.
      const button = screen.getByRole("button", { name: "Dismiss" })
      expect(button).toBeInTheDocument()
      expect(button.closest("[class*='opacity-0']")).not.toBeNull()
      expect(
        button.closest("[class*='group-focus-within:opacity-100']")
      ).not.toBeNull()
    })

    test("lives OUTSIDE the anchor, so pressing one never follows the row", () => {
      zeroRender(<HomeListItem title="row" href="/x" actions={actions} />)

      const link = screen.getByRole("link", { name: "row" })
      const button = screen.getByRole("button", { name: "Dismiss" })

      // A button inside an anchor is invalid HTML and its click would navigate.
      expect(link.contains(button)).toBe(false)
    })

    test("draws the label beside the glyph on request, and text-only without one", async () => {
      zeroRender(
        <HomeListItem
          title="row"
          actions={[
            {
              label: "Clock out",
              icon: Clock,
              showLabel: true,
              onClick: vi.fn(),
            },
            { label: "Sign", onClick: vi.fn() },
            { label: "Dismiss", icon: Cross, onClick: vi.fn() },
          ]}
        />
      )

      const button = (name: string) => screen.getByRole("button", { name })

      // A named one draws its label; an icon-only one still CARRIES it, for
      // screen readers alone — which is why every action is named either way.
      expect(button("Clock out").querySelector(".sr-only")).toBeNull()
      expect(button("Sign").querySelector(".sr-only")).toBeNull()
      expect(button("Dismiss").querySelector(".sr-only")).toHaveTextContent(
        "Dismiss"
      )
    })

    test("an action with items opens a menu, and holds the strip open while it is up", async () => {
      const laterToday = vi.fn()
      const { container } = zeroRender(
        <HomeListItem
          title="Ada Lovelace's 3rd work anniversary"
          actions={[
            {
              label: "Remind me later",
              icon: Clock,
              items: [
                { type: "label", text: "Remind me" },
                { label: "Later Today", onClick: laterToday },
                { label: "Tomorrow", onClick: vi.fn() },
              ],
            },
          ]}
        />
      )

      // `classList`, not the class STRING: `group-hover:opacity-100` contains
      // "opacity-100" as a substring, and the unprefixed class is the pin.
      const pinned = () =>
        container
          .querySelector(".absolute.inset-y-0")
          ?.classList.contains("opacity-100")

      // Closed, the strip is hover-only.
      expect(pinned()).toBe(false)

      await userEvent.click(
        screen.getByRole("button", { name: "Remind me later" })
      )

      expect(screen.getByText("Remind me")).toBeInTheDocument()
      // Pinned: the menu is portalled, so reaching it leaves the row — without
      // this the trigger would unmount from under its own menu.
      expect(pinned()).toBe(true)

      await userEvent.click(screen.getByText("Later Today"))
      // The dropdown defers its item callbacks by 200ms (a Radix animation
      // workaround), so the click alone hasn't fired it yet.
      await waitFor(() => expect(laterToday).toHaveBeenCalledTimes(1))
    })

    test("makes an inert row highlight on hover — something happens there", () => {
      const { container, rerender } = zeroRender(
        <HomeListItem title="row" actions={actions} />
      )

      expect(
        container.querySelector(
          "[class*='group-hover:bg-f1-background-tertiary']"
        )
      ).not.toBeNull()

      // Without actions an inert row has no hover state at all.
      rerender(<HomeListItem title="row" />)
      expect(
        container.querySelector("[class*='bg-f1-background-tertiary']")
      ).toBeNull()
    })
  })
})
