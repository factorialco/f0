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
 * The BOTTOM is the same story on the other axis: the last slot keeps its
 * bottom bleed so ROWS reach the card's bottom edge, and a button left in it
 * sits 8px from the border while measuring 14px from the left. It takes the
 * left edge's treatment too — unless a footer follows, where the bleed is
 * already what the footer's own `mt-2` buys back.
 *
 * jsdom computes no layout, so the assertions are on the offset CLASSES. The
 * 6px is the bleed cancelled (8px) minus the 2px nudge `SlotWidget`'s footer
 * takes — change either and this is the test that says so.
 */
describe("the list slot's View more button", () => {
  const rows = Array.from({ length: 5 }, (_, i) => ({
    id: String(i),
    title: `Person ${i}`,
    description: `Detail ${i}`,
    avatar: { firstName: `Person${i}`, lastName: "Doe" },
  }))

  const cappedList = () =>
    listSlot(
      { left: "person", descriptionRequired: true, maxVisibleItems: 2 },
      rows
    )

  const renderCappedList = () =>
    zeroRender(
      <SlotWidget
        header={{ title: "Needs you" }}
        action={{ label: "See all", onClick: () => {} }}
        slots={[cappedList()]}
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

  test("takes the same edge below it when it is the last thing on the card", async () => {
    zeroRender(
      <SlotWidget header={{ title: "Needs you" }} slots={[cappedList()]} />
    )

    expect(wrapperOf(/View more/)).toHaveClass("mb-1.5")

    await userEvent.click(screen.getByRole("button", { name: /View more/ }))
    expect(wrapperOf("View less")).toHaveClass("mb-1.5")
  })

  test("keeps the bleed when a footer follows it — that is the footer's own gap", () => {
    renderCappedList()

    expect(wrapperOf(/View more/)).not.toHaveClass("mb-1.5")
  })

  test("keeps the bleed when another slot follows it", () => {
    zeroRender(
      <SlotWidget
        header={{ title: "Needs you" }}
        slots={[cappedList(), listSlot({ left: "person" }, rows.slice(0, 2))]}
      />
    )

    expect(wrapperOf(/View more/)).not.toHaveClass("mb-1.5")
  })
})
