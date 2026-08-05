import { describe, expect, test } from "vitest"

import { screen, userEvent, zeroRender } from "@/testing/test-utils"

import { LIST_COMPACT_AFTER, listSlot } from "../slotRenderers"
import { SlotWidget } from "./index"

describe("SlotWidget", () => {
  test("draws each slot through the default renderer for its visualization", () => {
    zeroRender(
      <SlotWidget
        header={{ title: "Team" }}
        slots={[
          {
            visualization: "indicators",
            params: { items: [{ label: "On holidays", content: "6" }] },
          },
          listSlot({ clickBehavior: "link" }, [
            { id: "1", title: "Barcelona", href: "/bcn" },
          ]),
        ]}
      />
    )

    expect(screen.getByText("Team")).toBeInTheDocument()
    expect(screen.getByText("On holidays")).toBeInTheDocument()
    expect(screen.getByText("Barcelona")).toBeInTheDocument()
  })

  test("separates consecutive slots with a divider, and never leads with one", () => {
    const { container } = zeroRender(
      <SlotWidget
        slots={[
          {
            visualization: "indicators",
            params: { items: [{ label: "a", content: "1" }] },
          },
          {
            visualization: "indicators",
            params: { items: [{ label: "b", content: "2" }] },
          },
          {
            visualization: "indicators",
            params: { items: [{ label: "c", content: "3" }] },
          },
        ]}
      />
    )

    // Three slots, two seams between them.
    expect(container.querySelectorAll('[role="separator"]')).toHaveLength(2)
  })

  test("a single slot gets no divider", () => {
    const { container } = zeroRender(
      <SlotWidget
        slots={[
          {
            visualization: "indicators",
            params: { items: [{ label: "a", content: "1" }] },
          },
        ]}
      />
    )

    expect(container.querySelectorAll('[role="separator"]')).toHaveLength(0)
  })

  test("renders a bespoke visualization from the slotRenderers prop", () => {
    zeroRender(
      <SlotWidget
        slots={[{ visualization: "clock-in", params: { variant: "tracker" } }]}
        slotRenderers={{
          "clock-in": (params) => (
            <span>{`clock:${(params as { variant: string }).variant}`}</span>
          ),
        }}
      />
    )

    expect(screen.getByText("clock:tracker")).toBeInTheDocument()
  })

  test("a consumer renderer overrides the default for the same visualization", () => {
    zeroRender(
      <SlotWidget
        slots={[
          {
            visualization: "indicators",
            params: { items: [{ label: "default", content: "1" }] },
          },
        ]}
        slotRenderers={{ indicators: () => <span>mine</span> }}
      />
    )

    expect(screen.getByText("mine")).toBeInTheDocument()
    expect(screen.queryByText("default")).not.toBeInTheDocument()
  })

  test("an unknown visualization falls back instead of crashing", () => {
    zeroRender(
      <SlotWidget slots={[{ visualization: "not-registered", params: {} }]} />
    )

    expect(screen.getByText(/No renderer for slot/)).toBeInTheDocument()
  })

  test("tells a slot whether it is the widget's last, so only that one bleeds to the bottom edge", () => {
    const seen: Array<boolean | undefined> = []
    zeroRender(
      <SlotWidget
        slots={[
          { visualization: "probe", params: {} },
          { visualization: "probe", params: {} },
        ]}
        slotRenderers={{
          probe: (_params, ctx) => {
            seen.push(ctx.isLastSlot)
            return null
          },
        }}
      />
    )

    expect(seen).toEqual([false, true])
  })
})

describe("list slot schema", () => {
  const person = (id: string, name: string, description: string) => ({
    id,
    title: name,
    description,
    avatar: { firstName: name, lastName: "Doe" },
  })

  test("sizes are prescriptive: two-line rows draw md glyphs, one-line rows sm", () => {
    const { container, rerender } = zeroRender(
      <SlotWidget
        slots={[
          listSlot({ left: "person", descriptionRequired: true }, [
            person("1", "Ada", "Out until Friday"),
          ]),
        ]}
      />
    )

    // md avatar = size-8.
    expect(container.querySelector(".size-8")).not.toBeNull()

    rerender(
      <SlotWidget
        slots={[
          listSlot({ left: "person" }, [
            {
              id: "1",
              title: "Ada",
              avatar: { firstName: "Ada", lastName: "Lovelace" },
            },
          ]),
        ]}
      />
    )
    // sm avatar = size-6.
    expect(container.querySelector(".size-6")).not.toBeNull()
    expect(container.querySelector(".size-8")).toBeNull()
  })

  test(`past ${LIST_COMPACT_AFTER} rows the second line folds away (into a tooltip) and rows go sm`, () => {
    const many = Array.from({ length: LIST_COMPACT_AFTER + 1 }, (_, i) =>
      person(String(i), `Person ${i}`, `Detail ${i}`)
    )
    const { container } = zeroRender(
      <SlotWidget
        slots={[listSlot({ left: "person", descriptionRequired: true }, many)]}
      />
    )

    expect(screen.queryByText("Detail 0")).not.toBeInTheDocument()
    expect(container.querySelector(".size-6")).not.toBeNull()
    expect(container.querySelector(".size-8")).toBeNull()
  })

  test("compact: true folds the second line into a tooltip at any count", () => {
    const { container } = zeroRender(
      <SlotWidget
        slots={[
          listSlot(
            { left: "person", descriptionRequired: true, compact: true },
            [person("1", "Ada", "Out until Friday")]
          ),
        ]}
      />
    )

    expect(screen.queryByText("Out until Friday")).not.toBeInTheDocument()
    expect(container.querySelector(".size-6")).not.toBeNull()
    expect(container.querySelector(".size-8")).toBeNull()
  })

  test(`at ${LIST_COMPACT_AFTER} rows or fewer the second line stays visible`, () => {
    const some = Array.from({ length: LIST_COMPACT_AFTER }, (_, i) =>
      person(String(i), `Person ${i}`, `Detail ${i}`)
    )
    zeroRender(
      <SlotWidget
        slots={[listSlot({ left: "person", descriptionRequired: true }, some)]}
      />
    )

    expect(screen.getByText("Detail 0")).toBeInTheDocument()
  })

  test("link rows are REAL anchors — same tab inside, a new one for other domains", () => {
    zeroRender(
      <SlotWidget
        slots={[
          listSlot({ clickBehavior: "link" }, [
            { id: "1", title: "Barcelona", href: "/bcn" },
            { id: "2", title: "Help center", href: "https://help.example.com" },
          ]),
        ]}
      />
    )

    // No onClick navigation anywhere: the row IS a link, href and all.
    const inside = screen.getByRole("link", { name: "Barcelona" })
    expect(inside).toHaveAttribute("href", "/bcn")
    expect(inside).not.toHaveAttribute("target")

    expect(screen.getByRole("link", { name: "Help center" })).toHaveAttribute(
      "target",
      "_blank"
    )
  })

  test("maxVisibleItems folds the rest behind View more, then View less", async () => {
    const many = Array.from({ length: 5 }, (_, i) =>
      person(String(i), `Person ${i}`, `Detail ${i}`)
    )
    zeroRender(
      <SlotWidget
        slots={[
          listSlot(
            { left: "person", descriptionRequired: true, maxVisibleItems: 2 },
            many
          ),
        ]}
      />
    )

    expect(screen.getByText("Person 1")).toBeInTheDocument()
    expect(screen.queryByText("Person 2")).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole("button", { name: "View more (3)" }))
    expect(screen.getByText("Person 4")).toBeInTheDocument()

    await userEvent.click(screen.getByRole("button", { name: "View less" }))
    expect(screen.queryByText("Person 4")).not.toBeInTheDocument()
  })

  test("compacting follows the VISIBLE rows: truncated lists stay two-line, expanding past the threshold compacts", async () => {
    const many = Array.from({ length: LIST_COMPACT_AFTER + 1 }, (_, i) =>
      person(String(i), `Person ${i}`, `Detail ${i}`)
    )
    const { container } = zeroRender(
      <SlotWidget
        slots={[
          listSlot(
            {
              left: "person",
              descriptionRequired: true,
              maxVisibleItems: 2,
            },
            many
          ),
        ]}
      />
    )

    // Truncated to 2 visible rows: still two-line, still md.
    expect(screen.getByText("Detail 0")).toBeInTheDocument()
    expect(container.querySelector(".size-8")).not.toBeNull()

    await userEvent.click(
      screen.getByRole("button", {
        name: `View more (${many.length - 2})`,
      })
    )
    // Expanded past the threshold: compact — second line folds, sm glyphs.
    expect(screen.queryByText("Detail 0")).not.toBeInTheDocument()
    expect(container.querySelector(".size-8")).toBeNull()
  })

  test("the schema's right kind draws every row's trailing slot", () => {
    zeroRender(
      <SlotWidget
        slots={[
          listSlot({ right: "counter" }, [
            { id: "1", title: "Barcelona", count: 3 },
          ]),
        ]}
      />
    )

    expect(screen.getByText("3")).toBeInTheDocument()
  })
})

describe("SlotWidget chrome", () => {
  const slots = [
    {
      visualization: "indicators",
      params: { items: [{ label: "a", content: "1" }] },
    },
  ]

  test("passes the header's count through to the frame", () => {
    zeroRender(
      <SlotWidget
        // `info` is accepted too, but it renders inside a Tooltip whose content
        // is lazy, so there is nothing to assert on until hover.
        header={{ title: "Payroll", count: 3, info: "Before deductions." }}
        slots={slots}
      />
    )

    expect(screen.getByText("3")).toBeInTheDocument()
  })

  test("renders a status tag", () => {
    zeroRender(
      <SlotWidget
        header={{ title: "Payroll" }}
        status={{ text: "Approved", variant: "positive" }}
        slots={slots}
      />
    )

    expect(screen.getByText("Approved")).toBeInTheDocument()
  })

  test("renders an alert, and summaries, and an action", () => {
    zeroRender(
      <SlotWidget
        header={{ title: "Documents" }}
        alert="2 documents need signing"
        action={{ label: "Sign now", onClick: () => {} }}
        summaries={[{ label: "Gross", value: "3,200" }]}
        slots={slots}
      />
    )

    expect(screen.getByText("2 documents need signing")).toBeInTheDocument()
    expect(screen.getByText("Gross")).toBeInTheDocument()
    expect(screen.getByText("3,200")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Sign now" })).toBeInTheDocument()
  })
})
