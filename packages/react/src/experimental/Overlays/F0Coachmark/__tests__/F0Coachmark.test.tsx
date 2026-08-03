import { userEvent } from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0Coachmark } from "../index"

const action = { label: "Learn more", onClick: vi.fn() }

const renderCoachmark = (
  props: Partial<React.ComponentProps<typeof F0Coachmark>> = {}
) =>
  render(
    <F0Coachmark
      open
      onDismiss={vi.fn()}
      title="Filters got smarter"
      description="Stack filters on jobs and candidates."
      action={action}
      {...props}
    >
      <button>Filters</button>
    </F0Coachmark>
  )

describe("F0Coachmark", () => {
  it("renders nothing while closed", () => {
    renderCoachmark({ open: false })

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    expect(screen.queryByText("Filters got smarter")).not.toBeInTheDocument()
  })

  it("renders the title, description and CTA when open", () => {
    renderCoachmark()

    expect(screen.getByRole("dialog")).toBeInTheDocument()
    expect(screen.getByText("Filters got smarter")).toBeInTheDocument()
    expect(
      screen.getByText("Stack filters on jobs and candidates.")
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Learn more" })
    ).toBeInTheDocument()
  })

  it("names the dialog with the title and describes it with the description", () => {
    renderCoachmark()

    const dialog = screen.getByRole("dialog")
    expect(dialog).toHaveAccessibleName("Filters got smarter")
    expect(dialog).toHaveAccessibleDescription(
      "Stack filters on jobs and candidates."
    )
  })

  it("omits aria-describedby when there is no description", () => {
    renderCoachmark({ description: undefined })

    expect(screen.getByRole("dialog")).not.toHaveAttribute("aria-describedby")
  })

  it("calls onDismiss when the close button is clicked", async () => {
    const onDismiss = vi.fn()
    renderCoachmark({ onDismiss })

    await userEvent.click(screen.getByRole("button", { name: "Close" }))

    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it("calls onDismiss when Escape is pressed", async () => {
    const onDismiss = vi.fn()
    renderCoachmark({ onDismiss })

    await userEvent.keyboard("{Escape}")

    await waitFor(() => expect(onDismiss).toHaveBeenCalledTimes(1))
  })

  it("does not dismiss when clicking outside", async () => {
    const onDismiss = vi.fn()
    render(
      <div>
        <button>Outside</button>
        <F0Coachmark
          open
          onDismiss={onDismiss}
          title="Filters got smarter"
          action={action}
        >
          <button>Filters</button>
        </F0Coachmark>
      </div>
    )

    await userEvent.click(screen.getByRole("button", { name: "Outside" }))

    expect(onDismiss).not.toHaveBeenCalled()
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })

  it("calls the action handler when the CTA is clicked", async () => {
    const onClick = vi.fn()
    renderCoachmark({ action: { label: "Learn more", onClick } })

    await userEvent.click(screen.getByRole("button", { name: "Learn more" }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("moves focus to the panel instead of the dismiss button when it opens", async () => {
    renderCoachmark()

    await waitFor(() => expect(screen.getByRole("dialog")).toHaveFocus())
  })

  it("restores focus to the previously focused element after dismissal", async () => {
    const { rerender } = render(
      <F0Coachmark
        open={false}
        onDismiss={vi.fn()}
        title="Filters got smarter"
        action={action}
      >
        <button>Filters</button>
      </F0Coachmark>
    )

    const anchor = screen.getByRole("button", { name: "Filters" })
    anchor.focus()
    expect(anchor).toHaveFocus()

    rerender(
      <F0Coachmark
        open
        onDismiss={vi.fn()}
        title="Filters got smarter"
        action={action}
      >
        <button>Filters</button>
      </F0Coachmark>
    )

    await waitFor(() => expect(screen.getByRole("dialog")).toHaveFocus())

    rerender(
      <F0Coachmark
        open={false}
        onDismiss={vi.fn()}
        title="Filters got smarter"
        action={action}
      >
        <button>Filters</button>
      </F0Coachmark>
    )

    await waitFor(() => expect(anchor).toHaveFocus())
  })

  // The panel has to invert against the page in *both* themes. Two ways of
  // building it are wrong and look fine in light mode, so they are pinned here:
  // a hardcoded `dark` class makes the panel match the page background in dark
  // mode, and the `inverse` pair collapses to white-on-white because
  // f1-foreground-inverse is white in both themes while f1-background-inverse
  // flips. f1-foreground/f1-background both sit on --neutral-* and flip together.
  it("builds the surface from tokens that flip with the theme", () => {
    renderCoachmark()
    const dialog = screen.getByRole("dialog")

    expect(dialog).toHaveClass("bg-f1-foreground", "text-f1-background")
    expect(dialog.className.split(/\s+/)).not.toContain("dark")
    expect(dialog.className).not.toContain("f1-foreground-inverse")
    expect(dialog.className).not.toContain("f1-background-inverse")
  })

  it("renders the arrow by default and hides it when arrow is false", () => {
    const { unmount } = renderCoachmark()
    expect(
      screen.getByRole("dialog").querySelector("svg[viewBox='0 0 12 6']")
    ).toBeInTheDocument()
    unmount()

    renderCoachmark({ arrow: false })
    expect(
      screen.getByRole("dialog").querySelector("svg[viewBox='0 0 12 6']")
    ).not.toBeInTheDocument()
  })
})
