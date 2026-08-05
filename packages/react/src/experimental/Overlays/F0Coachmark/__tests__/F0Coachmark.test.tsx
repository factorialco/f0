import { userEvent } from "@testing-library/user-event"
import { useState } from "react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { F0Coachmark } from "../F0Coachmark"
import type { F0CoachmarkProps } from "../types"

type PanelProps = Omit<F0CoachmarkProps, "target">

/**
 * The panel takes a resolved DOM element, so the harness renders the anchor and
 * hands its element over — the same thing `CoachmarkProvider` does with the
 * element `useTargetElement` resolved.
 */
const Harness = (props: PanelProps) => {
  const [target, setTarget] = useState<HTMLElement | null>(null)

  return (
    <>
      <button ref={setTarget}>Filters</button>
      {target && <F0Coachmark {...props} target={target} />}
    </>
  )
}

const renderPanel = (props: Partial<PanelProps> = {}) =>
  render(
    <Harness
      title="Filters got smarter"
      description="Stack filters on jobs and candidates."
      onAction={vi.fn()}
      onClose={vi.fn()}
      {...props}
    />
  )

describe("F0Coachmark panel", () => {
  it("renders the title, description and action", async () => {
    renderPanel({ actionLabel: "Learn more" })

    expect(await screen.findByRole("dialog")).toBeInTheDocument()
    expect(screen.getByText("Filters got smarter")).toBeInTheDocument()
    expect(
      screen.getByText("Stack filters on jobs and candidates.")
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Learn more" })
    ).toBeInTheDocument()
  })

  it("names the dialog with the title and describes it with the description", async () => {
    renderPanel()

    const dialog = await screen.findByRole("dialog")
    expect(dialog).toHaveAccessibleName("Filters got smarter")
    expect(dialog).toHaveAccessibleDescription(
      "Stack filters on jobs and candidates."
    )
  })

  it("omits aria-describedby when there is no description", async () => {
    renderPanel({ description: undefined })

    expect(await screen.findByRole("dialog")).not.toHaveAttribute(
      "aria-describedby"
    )
  })

  // The label says what the button does: end the coachmark, or move on.
  it("defaults the action label to Got it, and to Next before the last step", async () => {
    const { unmount } = renderPanel()
    expect(
      await screen.findByRole("button", { name: "Got it" })
    ).toBeInTheDocument()
    unmount()

    renderPanel({ step: { current: 1, total: 3 } })
    expect(
      await screen.findByRole("button", { name: "Next" })
    ).toBeInTheDocument()

    // The last step ends the coachmark even though a step indicator is showing.
    expect(screen.getByRole("dialog")).toHaveTextContent("1/3")
  })

  it("shows the step indicator when it is given one", async () => {
    renderPanel({ step: { current: 2, total: 3 } })

    expect(await screen.findByText("2/3")).toBeInTheDocument()
  })

  it("calls onClose from the close button and onAction from the action", async () => {
    const onClose = vi.fn()
    const onAction = vi.fn()
    renderPanel({ onClose, onAction, actionLabel: "Learn more" })
    await screen.findByRole("dialog")

    await userEvent.click(screen.getByRole("button", { name: "Close" }))
    expect(onClose).toHaveBeenCalledTimes(1)

    await userEvent.click(screen.getByRole("button", { name: "Learn more" }))
    expect(onAction).toHaveBeenCalledTimes(1)
  })

  it("calls onClose when Escape is pressed", async () => {
    const onClose = vi.fn()
    renderPanel({ onClose })
    await screen.findByRole("dialog")

    await userEvent.keyboard("{Escape}")

    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1))
  })

  it("moves focus to the panel instead of the dismiss button when it opens", async () => {
    renderPanel()

    const dialog = await screen.findByRole("dialog")
    await waitFor(() => expect(dialog).toHaveFocus())
  })

  // The panel uses the same surface recipe as F0Toast and F0ActionBar, and
  // wraps its content in `dark`. Those two facts depend on each other: the
  // wrapper is only safe because the surface is dark in BOTH themes, and it is
  // what lets the controls below stay on stock variants. Pinned together.
  it("uses the shared floating-dark-panel surface and re-themes its content", async () => {
    renderPanel()
    const dialog = await screen.findByRole("dialog")

    expect(dialog).toHaveClass(
      "bg-f1-background-inverse",
      "dark:bg-f1-background-tertiary",
      "text-f1-foreground-inverse"
    )
    expect(dialog.querySelector(".dark")).toBeInTheDocument()
  })

  it("keeps both controls on stock variants, with no colour overrides", async () => {
    renderPanel({ actionLabel: "Learn more" })
    await screen.findByRole("dialog")
    const cta = screen.getByRole("button", { name: "Learn more" })
    const dismiss = screen.getByRole("button", { name: "Close" })

    // Both controls are `outline`. This component may only contribute layout
    // classes to them. These are the shapes the removed workaround used; any of
    // them reappearing means the `dark` wrapper stopped doing its job.
    const contributed = [
      ...cta.className.split(/\s+/),
      ...dismiss.className.split(/\s+/),
    ].filter((c) => /f1-background\/|f1-icon-inverse|data-has-color/.test(c))
    expect(contributed).toEqual([])
  })

  it("renders the arrow by default and hides it when arrow is false", async () => {
    const { unmount } = renderPanel()
    expect(
      (await screen.findByRole("dialog")).querySelector(
        "svg[viewBox='0 0 12 6']"
      )
    ).toBeInTheDocument()
    unmount()

    renderPanel({ arrow: false })
    expect(
      (await screen.findByRole("dialog")).querySelector(
        "svg[viewBox='0 0 12 6']"
      )
    ).not.toBeInTheDocument()
  })
})
