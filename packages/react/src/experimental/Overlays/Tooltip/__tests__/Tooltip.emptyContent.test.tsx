import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { TooltipInternal } from "../index"

/**
 * `instant` shortens Radix's open timer to 100ms, which a real-timer wait can
 * outlast — fake timers deadlock `user.hover`.
 */
const OPEN_DELAY_MARGIN_MS = 400

const settleOpenDelay = () =>
  new Promise((resolve) => setTimeout(resolve, OPEN_DELAY_MARGIN_MS))

describe("TooltipInternal with nothing to say", () => {
  it("does not open on hover when the description is empty", async () => {
    const user = userEvent.setup()
    render(
      <TooltipInternal instant description="">
        <button>Trigger</button>
      </TooltipInternal>
    )

    await user.hover(screen.getByRole("button", { name: "Trigger" }))
    await settleOpenDelay()

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })

  it("does not report an open when there is nothing to open", async () => {
    const user = userEvent.setup()
    const onOpen = vi.fn()
    render(
      <TooltipInternal instant description="" onOpen={onOpen}>
        <button>Trigger</button>
      </TooltipInternal>
    )

    await user.hover(screen.getByRole("button", { name: "Trigger" }))
    await settleOpenDelay()

    expect(onOpen).not.toHaveBeenCalled()
  })

  it("still opens once there is a description", async () => {
    const user = userEvent.setup()
    render(
      <TooltipInternal instant description="Tokens — Design system">
        <button>Trigger</button>
      </TooltipInternal>
    )

    await user.hover(screen.getByRole("button", { name: "Trigger" }))

    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Tokens — Design system"
    )
  })
})
