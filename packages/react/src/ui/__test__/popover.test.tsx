import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import "@testing-library/jest-dom/vitest"
import { zeroRender as render } from "@/testing/test-utils"

import { Popover, PopoverContent, PopoverTrigger } from "../popover"

describe("ui/popover", () => {
  // Popover content is portaled into the dialog container when opened inside a
  // non-modal dialog-alike, whose wrapper is `pointer-events-none` (so the
  // backdrop stays click-through). The content must opt back in or it is
  // unclickable when a popover is used within a dialog/drawer.
  it("keeps the open popover content clickable under pointer-events-none ancestors", async () => {
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent data-testid="popover-content">content</PopoverContent>
      </Popover>
    )

    await userEvent.click(screen.getByText("Open"))

    const content = await screen.findByTestId("popover-content")
    expect(content.className).toContain("pointer-events-auto")
  })
})
