import { screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/vitest"
import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { TooltipInternal } from "../index"

describe("TooltipInternal with a bulleted list", () => {
  it("renders one bullet per item, with the object form's title as its lead", async () => {
    const user = userEvent.setup()
    render(
      <TooltipInternal
        instant
        label="3 alerts"
        description="Needs a look before submitting."
        items={[
          { title: "Not eligible", description: "Hired after the cut-off." },
          { title: "Over the cap" },
          "Missing effective date",
        ]}
      >
        <button>Trigger</button>
      </TooltipInternal>
    )

    await user.hover(screen.getByRole("button", { name: "Trigger" }))

    const tooltip = await screen.findByRole("tooltip")
    expect(tooltip).toHaveTextContent("3 alerts")
    expect(tooltip).toHaveTextContent("Needs a look before submitting.")

    // Radix mirrors the content into a visually-hidden copy, so the bullets
    // are counted inside one tooltip node rather than across the document.
    const items = within(tooltip).getAllByRole("listitem")
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent("Not eligible Hired after the cut-off.")
    expect(items[1]).toHaveTextContent("Over the cap")
    expect(items[2]).toHaveTextContent("Missing effective date")
  })

  it("opens on items alone, with no label or description", async () => {
    const user = userEvent.setup()
    render(
      <TooltipInternal instant items={["Budget exceeded"]}>
        <button>Trigger</button>
      </TooltipInternal>
    )

    await user.hover(screen.getByRole("button", { name: "Trigger" }))

    expect(await screen.findByRole("tooltip")).toHaveTextContent(
      "Budget exceeded"
    )
  })
})
