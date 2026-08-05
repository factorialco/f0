import { describe, expect, test } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

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
          {
            visualization: "simple-line-list",
            params: {
              showAllItems: true,
              items: [{ id: "1", title: "Barcelona", href: "/bcn" }],
            },
          },
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
