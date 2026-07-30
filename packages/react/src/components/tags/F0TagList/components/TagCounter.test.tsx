import { describe, expect, it } from "vitest"

import { userEvent, waitFor, zeroRender as render } from "@/testing/test-utils"

import { TagCounter, TagCounterItem } from "./TagCounter"

const longLabelTags: TagCounterItem[] = [
  { type: "dot", text: "Strategic Workforce Planning", color: "viridian" },
  {
    type: "dot",
    text: "Ruggedized Industrial Handheld Barcode Scanner (Model XR-9000)",
    color: "purple",
  },
]

describe("TagCounter", () => {
  it("renders just the +N counter when there is no overflow list", () => {
    const { container, queryByText } = render(<TagCounter count={3} />)

    expect(queryByText("+3")).not.toBeNull()
    // Without a list there is no interactive hover trigger.
    expect(container.querySelector(".cursor-pointer")).toBeNull()
  })

  it("exposes an interactive trigger when an overflow list is provided", () => {
    const { getByText } = render(<TagCounter count={2} list={longLabelTags} />)

    expect(getByText("+2")).not.toBeNull()
  })

  it("shows the full labels in the popover with content-sized, non-truncating rows", async () => {
    const user = userEvent.setup()
    const { getByText } = render(<TagCounter count={2} list={longLabelTags} />)

    await user.hover(getByText("+2"))

    // The popover opens after Radix' hover open delay; wait for its content.
    const longLabel = await waitFor(
      () => {
        const el = document.body.querySelector(
          '[data-radix-popper-content-wrapper] [data-testid="one-ellipsis"]'
        ) as HTMLElement | null
        if (!el) throw new Error("popover content not mounted yet")
        return el
      },
      { timeout: 2000 }
    )

    // Every overflowed label is rendered in full (no ellipsis truncation in markup).
    for (const tag of longLabelTags) {
      expect(getByText(tag.text as string)).not.toBeNull()
    }

    // The row wrapper sizes to content and no longer uses the old fixed 172px width.
    const row = longLabel.closest("div.w-max") as HTMLElement | null
    expect(row).not.toBeNull()
    expect(row!.className).toContain("w-max")
    expect(row!.className).toContain("max-w-72")
    expect(row!.className).not.toContain("w-[172px]")
  })
})
