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

  // The panel uses the same surface recipe as F0Toast and F0ActionBar, and
  // wraps its content in `dark`. Those two facts depend on each other: the
  // wrapper is only safe because the surface is dark in BOTH themes, and it is
  // what lets the controls below stay on stock variants. Pinned together.
  it("uses the shared floating-dark-panel surface and re-themes its content", () => {
    renderCoachmark()
    const dialog = screen.getByRole("dialog")

    expect(dialog).toHaveClass(
      "bg-f1-background-inverse",
      "dark:bg-f1-background-tertiary",
      "text-f1-foreground-inverse"
    )
    expect(dialog.querySelector(".dark")).toBeInTheDocument()
  })

  it("keeps both controls on stock variants, with no colour overrides", () => {
    renderCoachmark()
    const cta = screen.getByRole("button", { name: "Learn more" })
    const dismiss = screen.getByRole("button", { name: "Close" })

    // This component may only contribute layout classes to the controls. These
    // are the shapes the removed workaround used; any of them reappearing means
    // the `dark` wrapper stopped doing its job. (`bg-transparent` is NOT listed:
    // the stock ghost variant sets it itself.)
    const contributed = [
      ...cta.className.split(/\s+/),
      ...dismiss.className.split(/\s+/),
    ].filter((c) => /f1-background\/|f1-icon-inverse|data-has-color/.test(c))
    expect(contributed).toEqual([])
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
