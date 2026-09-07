import { describe, expect, test } from "vitest"

import { Clock } from "@/icons/app"
import { screen, zeroRender } from "@/testing/test-utils"

import { listSlot, SLOT_SKELETON_ITEM_TESTID } from "../slotRenderers"
import { SlotWidget, SlotWidgetContent } from "./index"

/**
 * `SlotWidgetContent` is the widget's content WITHOUT its card — what a dialog
 * showing the same list uses. No card is not the same as a narrow card: the
 * dialog has a wide row's room, and taking the narrow card's compromise there
 * made the very same list visibly smaller than the one in the widget beside it.
 */
describe("a frameless list is not a narrow card", () => {
  const rows = [
    {
      id: "1",
      title: "One",
      description: "first",
      href: "/1",
      avatar: { icon: Clock },
    },
    {
      id: "2",
      title: "Two",
      description: "second",
      href: "/2",
      avatar: { icon: Clock },
    },
  ]

  const schema = { left: "icon", descriptionRequired: true } as const

  const glyphOf = (container: HTMLElement) =>
    container.querySelector("[class*='size-']")

  test("draws the wide row's glyph with no card around it", () => {
    const { container } = zeroRender(
      <SlotWidgetContent slots={[listSlot(schema, rows)]} />
    )

    // Two-line rows draw `lg` (size-10) at a wide row's size, `md` (size-8) at
    // a narrow card's. Outside a card it must be the former.
    expect(glyphOf(container)?.className).toContain("size-10")
  })

  test("sizes its placeholder the same way, so the list does not resize on load", () => {
    const { container } = zeroRender(
      <SlotWidgetContent loading slots={[listSlot(schema, [])]} />
    )

    expect(
      screen.getAllByTestId(SLOT_SKELETON_ITEM_TESTID).length
    ).toBeGreaterThan(0)
    expect(glyphOf(container)?.className).toContain("size-10")
  })

  test("still takes the narrow card's size INSIDE a widget", () => {
    // The other half of the distinction: a real card that has not been measured
    // as wide is narrow, and its rows stay narrow. Only "no card" is wide.
    const { container } = zeroRender(
      <SlotWidget header={{ title: "Team" }} slots={[listSlot(schema, rows)]} />
    )

    expect(glyphOf(container)?.className).toContain("size-8")
  })
})
