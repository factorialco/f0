import { act, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it, vi } from "vitest"

import { userEvent, zeroRender } from "@/testing/test-utils"

import { Footer } from "../Footer"

describe("Footer", () => {
  it("shows a loading state on the dropdown trigger while an async primary action is pending", async () => {
    let resolveAction: () => void = () => {}
    const pending = new Promise<void>((resolve) => {
      resolveAction = resolve
    })
    const onClickAsync = vi.fn(() => pending)

    zeroRender(
      <Footer
        onClose={() => {}}
        primaryAction={[
          { value: "async", label: "Async Action", onClick: onClickAsync },
          { value: "other", label: "Other Action", onClick: () => {} },
        ]}
      />
    )

    // Two primary actions render as a split-button dropdown; the main button
    // triggers the first (async) action.
    const trigger = screen.getByTestId("button-main")
    expect(trigger).toHaveAttribute("aria-busy", "false")

    await userEvent.click(trigger)
    expect(onClickAsync).toHaveBeenCalledTimes(1)

    // While the promise is pending, the trigger should report a busy/loading state.
    await waitFor(() =>
      expect(screen.getByTestId("button-main")).toHaveAttribute(
        "aria-busy",
        "true"
      )
    )

    // Once it resolves, the loading state clears.
    await act(async () => {
      resolveAction()
      await pending
    })
    await waitFor(() =>
      expect(screen.getByTestId("button-main")).toHaveAttribute(
        "aria-busy",
        "false"
      )
    )
  })

  it("does not re-trigger the action while one is already pending", async () => {
    let resolveAction: () => void = () => {}
    const pending = new Promise<void>((resolve) => {
      resolveAction = resolve
    })
    const onClickAsync = vi.fn(() => pending)

    zeroRender(
      <Footer
        onClose={() => {}}
        primaryAction={[
          { value: "async", label: "Async Action", onClick: onClickAsync },
          { value: "other", label: "Other Action", onClick: () => {} },
        ]}
      />
    )

    const trigger = screen.getByTestId("button-main")
    await userEvent.click(trigger)
    await userEvent.click(trigger)

    expect(onClickAsync).toHaveBeenCalledTimes(1)

    await act(async () => {
      resolveAction()
      await pending
    })
  })
})
