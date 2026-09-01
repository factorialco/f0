import { describe, expect, test } from "vitest"

import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { listSlot } from "../slotRenderers"
import { SlotWidget } from "./index"

/**
 * WHERE "View more" SITS. A row-based slot bleeds 8px past the card's content
 * box so its rows line up with the widget's title, and a button left in that
 * bleed hangs its whole rectangle 8px further left than everything else on the
 * card — worst on a wide card, where it is a bordered box overhanging the
 * title. It belongs on the frame's footer-button edge instead: that is the same
 * button one slot lower.
 *
 * jsdom computes no layout, so the assertion is on the offset CLASS. The 6px is
 * the bleed cancelled (8px) minus the 2px nudge `SlotWidget`'s footer takes —
 * change either and this is the test that says so.
 */
describe("the list slot's View more button", () => {
  const rows = Array.from({ length: 5 }, (_, i) => ({
    id: String(i),
    title: `Person ${i}`,
    description: `Detail ${i}`,
    avatar: { firstName: `Person${i}`, lastName: "Doe" },
  }))

  const renderCappedList = () =>
    zeroRender(
      <SlotWidget
        header={{ title: "Needs you" }}
        action={{ label: "See all", onClick: () => {} }}
        slots={[
          listSlot(
            { left: "person", descriptionRequired: true, maxVisibleItems: 2 },
            rows
          ),
        ]}
      />
    )

  const wrapperOf = (name: string | RegExp) =>
    screen.getByRole("button", { name }).parentElement

  test("sits on the footer button's left edge, not out in the slot's row bleed", async () => {
    renderCappedList()

    expect(wrapperOf(/View more/)).toHaveClass("ml-1.5")

    // Expanded, the same button carries the same edge.
    await userEvent.click(screen.getByRole("button", { name: /View more/ }))
    expect(wrapperOf("View less")).toHaveClass("ml-1.5")
  })
})
