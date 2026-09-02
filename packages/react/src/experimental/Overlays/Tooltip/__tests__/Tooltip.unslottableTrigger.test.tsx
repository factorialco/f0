import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { TooltipInternal } from "../index"

/**
 * The trigger mounts through Radix's `asChild` Slot, which needs a single
 * element child to carry the hover handlers and the anchoring ref. Children
 * that can't (Fragments, strings, arrays) used to lose them silently — no
 * trigger in the DOM, nothing on hover. These tests pin the wrapper that keeps
 * such children working.
 */
describe("TooltipInternal with a trigger the Slot cannot clone onto", () => {
  it("opens on hover when the child is a Fragment", async () => {
    const user = userEvent.setup()
    render(
      <TooltipInternal instant description="Scheduled to move on 2999-01-01">
        <>
          <span>badge</span>
        </>
      </TooltipInternal>
    )

    await user.hover(screen.getByText("badge"))

    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Scheduled to move on 2999-01-01"
    )
  })

  it("opens on hover when the child is plain text", async () => {
    const user = userEvent.setup()
    render(
      <TooltipInternal instant description="Plain text still gets a trigger">
        just text
      </TooltipInternal>
    )

    await user.hover(screen.getByText("just text"))

    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Plain text still gets a trigger"
    )
  })

  it("leaves a single element child unwrapped", async () => {
    const user = userEvent.setup()
    render(
      <TooltipInternal instant description="Direct trigger">
        <button>Trigger</button>
      </TooltipInternal>
    )

    const button = screen.getByRole("button", { name: "Trigger" })
    expect(button.parentElement).not.toHaveClass("inline-flex")

    await user.hover(button)

    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Direct trigger"
    )
  })
})
