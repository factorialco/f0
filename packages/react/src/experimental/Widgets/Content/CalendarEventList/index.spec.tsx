import { describe, expect, test } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { type CalendarEventProps } from "../CalendarEvent"
import { CalendarEventList } from "./index"

const EVENTS: CalendarEventProps[] = [
  {
    title: "Standup",
    description: "09:30",
    color: "#5596F6",
    isPending: false,
  },
  {
    title: "Design review",
    description: "11:00",
    color: "#5596F6",
    isPending: false,
  },
]

/** The box the events are laid out in — `showAllItems`' own container. */
const listOf = (container: HTMLElement) =>
  container.querySelector<HTMLElement>(".flex.flex-col")

describe("CalendarEventList", () => {
  describe("showAllItems", () => {
    test("spaces its events by the same default the overflow path uses", () => {
      const { container } = zeroRender(
        <CalendarEventList events={EVENTS} showAllItems />
      )

      // 8px, not nothing. This container used to have no gap at all, and its
      // `gap` prop reached only the overflow path — so every consumer of this
      // path silently lost the spacing and had to put it back by hand.
      expect(listOf(container)).toHaveStyle({ gap: "8px" })
    })

    test("takes a gap of its own", () => {
      const { container } = zeroRender(
        <CalendarEventList events={EVENTS} showAllItems gap={16} />
      )

      expect(listOf(container)).toHaveStyle({ gap: "16px" })
    })
  })

  test("draws nothing for no events", () => {
    const { container } = zeroRender(
      <CalendarEventList events={[]} showAllItems />
    )

    expect(container).toBeEmptyDOMElement()
  })
})
