import { afterEach, describe, expect, test, vi } from "vitest"

import { Clock, Cross } from "@/icons/app"
import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"

import {
  DEFAULT_EXPECTED_ITEMS_COUNT,
  LIST_COMPACT_AFTER,
  listSlot,
  SLOT_SKELETON_ITEM_TESTID,
} from "../slotRenderers"
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

  test("descriptionOptional lets some rows carry a second line and others not — and the list stays two-line", () => {
    const { container } = zeroRender(
      <SlotWidget
        slots={[
          listSlot({ left: "person", descriptionOptional: true }, [
            {
              id: "1",
              title: "Ada",
              description: "Due Today",
              avatar: { firstName: "Ada", lastName: "Lovelace" },
            },
            {
              id: "2",
              title: "Alan",
              avatar: { firstName: "Alan", lastName: "Turing" },
            },
          ]),
        ]}
      />
    )

    expect(screen.getByText("Due Today")).toBeInTheDocument()
    // The glyphs stay md for BOTH rows, so the column of them lines up even
    // though only one row is two lines tall.
    expect(container.querySelectorAll(".size-8")).toHaveLength(2)
    expect(container.querySelector(".size-6")).toBeNull()
  })

  test("a mixed list does NOT auto-compact — folding its few second lines away would hide the only thing telling those rows apart", () => {
    const many = Array.from({ length: LIST_COMPACT_AFTER + 1 }, (_, i) => ({
      id: String(i),
      title: `Person ${i}`,
      // Only the first row has one, which is the point of `descriptionOptional`.
      ...(i === 0 ? { description: "Due Today" } : {}),
      avatar: { firstName: `Person ${i}`, lastName: "Doe" },
    }))
    const { container } = zeroRender(
      <SlotWidget
        slots={[listSlot({ left: "person", descriptionOptional: true }, many)]}
      />
    )

    expect(screen.getByText("Due Today")).toBeInTheDocument()
    expect(container.querySelector(".size-8")).not.toBeNull()

    // `compact: true` still forces it.
    const { container: forced } = zeroRender(
      <SlotWidget
        slots={[
          listSlot(
            { left: "person", descriptionOptional: true, compact: true },
            many
          ),
        ]}
      />
    )
    expect(forced.querySelector(".size-8")).toBeNull()
  })

  test("a row's actions are its own: named buttons that act on that row alone", async () => {
    const dismissFirst = vi.fn()
    zeroRender(
      <SlotWidget
        slots={[
          listSlot({ clickBehavior: "link" }, [
            {
              id: "1",
              title: "You never clocked out",
              href: "/attendance",
              actions: [
                { label: "Dismiss this", icon: Cross, onClick: dismissFirst },
              ],
            },
            // The next row offers none — actions are per row, not per schema.
            { id: "2", title: "Sign your contract", href: "/documents/1" },
          ]),
        ]}
      />
    )

    expect(screen.getAllByRole("button", { name: /Dismiss/ })).toHaveLength(1)

    await userEvent.click(screen.getByRole("button", { name: "Dismiss this" }))
    expect(dismissFirst).toHaveBeenCalledTimes(1)
  })

  describe("glyphs follow the card they landed in", () => {
    const withCardWidth = (width: number) => {
      vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(
        function (this: HTMLElement) {
          return this.getAttribute("role") === "article" ? width : 0
        }
      )
    }

    afterEach(() => vi.restoreAllMocks())

    const twoLineList = (
      <SlotWidget
        slots={[
          listSlot(
            { left: "person", right: "person", descriptionRequired: true },
            [
              {
                id: "1",
                title: "Ada",
                description: "Out until Friday",
                avatar: { firstName: "Ada", lastName: "Lovelace" },
                rightAvatar: { firstName: "Alan", lastName: "Turing" },
              },
            ]
          ),
        ]}
      />
    )

    test("in the rail the leading glyph is md and the trailing face sm", () => {
      withCardWidth(396)
      const { container } = zeroRender(twoLineList)

      expect(container.querySelector(".size-8")).not.toBeNull()
      expect(container.querySelector(".size-10")).toBeNull()
    })

    test("past 480px both step up — the leading glyph to lg, the face to md", () => {
      withCardWidth(600)
      const { container } = zeroRender(twoLineList)

      // The leading glyph is now lg (40px) and the trailing face md (32px),
      // so the row keeps its two anchors a step apart.
      expect(container.querySelector(".size-10")).not.toBeNull()
      expect(container.querySelector(".size-8")).not.toBeNull()
      expect(container.querySelector(".size-6")).toBeNull()
    })

    test("the placeholder draws the size the real glyph will be, so the card doesn't resize when data lands", () => {
      withCardWidth(600)
      const { container } = zeroRender(
        <SlotWidget
          loading
          slots={[
            listSlot({ left: "person", descriptionRequired: true }, [], {
              expectedItemsCount: 2,
            }),
          ]}
        />
      )

      expect(container.querySelectorAll(".size-10")).toHaveLength(2)
    })
  })

  describe("items coming and going", () => {
    const rows = (names: string[]) =>
      names.map((name) => ({
        id: name,
        title: name,
        avatar: { firstName: name, lastName: "Doe" },
      }))

    const listOf = (names: string[]) => (
      <SlotWidget slots={[listSlot({ left: "person" }, rows(names))]} />
    )

    test("a row that goes away leaves — it is not stranded by its own exit animation", async () => {
      const { rerender } = zeroRender(listOf(["Ada", "Alan", "Grace"]))

      expect(screen.getByText("Alan")).toBeInTheDocument()

      rerender(listOf(["Ada", "Grace"]))

      // It animates out rather than vanishing, so it is still there for a beat.
      // What matters is that it is GONE afterwards: an `AnimatePresence` whose
      // exit never completes keeps a removed row in the DOM forever.
      await waitFor(() =>
        expect(screen.queryByText("Alan")).not.toBeInTheDocument()
      )
      expect(screen.getByText("Ada")).toBeInTheDocument()
      expect(screen.getByText("Grace")).toBeInTheDocument()
    })

    test("a row that arrives is drawn", async () => {
      const { rerender } = zeroRender(listOf(["Ada"]))

      rerender(listOf(["Ada", "Grace"]))

      await waitFor(() => expect(screen.getByText("Grace")).toBeInTheDocument())
    })
  })

  test("an icon row's color tints its glyph; without one it draws the plain avatar", () => {
    const { container, rerender } = zeroRender(
      <SlotWidget
        slots={[
          listSlot({ left: "icon" }, [
            { id: "1", title: "Clocked out", avatar: { icon: Clock } },
          ]),
        ]}
      />
    )

    // The neutral F0AvatarIcon: a bordered white tile.
    expect(
      container.querySelector(".border-f1-border-secondary")
    ).not.toBeNull()
    expect(container.querySelector("[class*='colors.purple']")).toBeNull()

    rerender(
      <SlotWidget
        slots={[
          listSlot({ left: "icon" }, [
            {
              id: "1",
              title: "Clocked out",
              avatar: { icon: Clock, color: "purple" },
            },
          ]),
        ]}
      />
    )

    expect(container.querySelector("[class*='colors.purple']")).not.toBeNull()
  })
})

describe("SlotWidget loading", () => {
  const placeholders = () => screen.queryAllByTestId(SLOT_SKELETON_ITEM_TESTID)

  test("draws each slot's skeleton instead of its content, keeping the frame and the seams", () => {
    const { container } = zeroRender(
      <SlotWidget
        header={{ title: "Team" }}
        loading
        slots={[
          { visualization: "indicators", params: { items: [] } },
          listSlot({ left: "person" }, []),
        ]}
      />
    )

    // The chrome is real while the slots are placeholders.
    expect(screen.getByText("Team")).toBeInTheDocument()
    expect(container.querySelectorAll('[role="separator"]')).toHaveLength(1)
    expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0)
  })

  test("draws as many placeholder items as the slot expects", () => {
    zeroRender(
      <SlotWidget
        loading
        slots={[listSlot({ left: "person" }, [], { expectedItemsCount: 5 })]}
      />
    )

    expect(placeholders()).toHaveLength(5)
  })

  test(`a slot that doesn't say expects ${DEFAULT_EXPECTED_ITEMS_COUNT}`, () => {
    zeroRender(<SlotWidget loading slots={[listSlot({}, [])]} />)

    expect(placeholders()).toHaveLength(DEFAULT_EXPECTED_ITEMS_COUNT)
  })

  test("a list never places more rows than maxVisibleItems will show", () => {
    zeroRender(
      <SlotWidget
        loading
        slots={[
          listSlot({ left: "person", maxVisibleItems: 2 }, [], {
            expectedItemsCount: 7,
          }),
        ]}
      />
    )

    expect(placeholders()).toHaveLength(2)
  })

  test("the list placeholder follows the schema: a left glyph only where one is declared, md for two-line rows", () => {
    const { container, rerender } = zeroRender(
      <SlotWidget
        loading
        slots={[
          listSlot({ left: "person", descriptionRequired: true }, [], {
            expectedItemsCount: 1,
          }),
        ]}
      />
    )

    // Two-line rows draw the md glyph, exactly as the loaded rows do.
    expect(container.querySelector(".size-8")).not.toBeNull()

    rerender(
      <SlotWidget
        loading
        slots={[listSlot({}, [], { expectedItemsCount: 1 })]}
      />
    )
    // No left declared, no glyph.
    expect(container.querySelector(".size-8")).toBeNull()
    expect(container.querySelector(".size-6")).toBeNull()
  })

  test("a bespoke renderer's own skeleton wins, and one without falls back to the generic placeholder", () => {
    zeroRender(
      <SlotWidget
        loading
        slots={[
          { visualization: "clock-in", params: {} },
          { visualization: "carousel", params: {}, expectedItemsCount: 2 },
        ]}
        slotRenderers={{
          "clock-in": {
            render: () => <span>clock</span>,
            skeleton: () => <span>clock placeholder</span>,
          },
          // A bare function: no skeleton of its own.
          carousel: () => <span>carousel</span>,
        }}
      />
    )

    expect(screen.getByText("clock placeholder")).toBeInTheDocument()
    expect(screen.queryByText("clock")).not.toBeInTheDocument()
    expect(placeholders()).toHaveLength(2)
  })

  test("an unregistered visualization gets a placeholder, not the dashed notice", () => {
    zeroRender(
      <SlotWidget
        loading
        slots={[{ visualization: "not-registered", params: {} }]}
      />
    )

    expect(screen.queryByText(/No renderer for slot/)).not.toBeInTheDocument()
    expect(placeholders()).toHaveLength(DEFAULT_EXPECTED_ITEMS_COUNT)
  })

  test("no placeholders once the widget is not loading", () => {
    zeroRender(
      <SlotWidget slots={[listSlot({}, [{ id: "1", title: "Barcelona" }])]} />
    )

    expect(placeholders()).toHaveLength(0)
    expect(screen.getByText("Barcelona")).toBeInTheDocument()
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

  /**
   * The way out of a widget is a NAMED BUTTON under its content, not an icon in
   * the header's top-right — that corner is the overflow menu's now.
   */
  describe("the header's link", () => {
    test("makes the TITLE the way out", async () => {
      const onClick = vi.fn()
      zeroRender(
        <SlotWidget
          header={{
            title: "Events",
            link: { title: "Go to Calendar", onClick },
          }}
          slots={slots}
        />
      )

      const link = screen.getByRole("button", { name: "Go to Calendar" })
      // The visible text is the widget's name; the accessible name is where it
      // goes. Nothing is added to the footer for it.
      expect(link).toHaveTextContent("Events")

      await userEvent.click(link)
      expect(onClick).toHaveBeenCalled()
    })

    test("is a real anchor when it carries a url", () => {
      zeroRender(
        <SlotWidget
          header={{
            title: "Resources",
            link: { title: "Go to factorial.co", url: "https://factorial.co" },
          }}
          slots={slots}
        />
      )

      expect(
        screen.getByRole("link", { name: "Go to factorial.co" })
      ).toHaveAttribute("href", "https://factorial.co")
    })

    test("opens another HOST in a new tab, and this one in place", () => {
      const { rerender } = zeroRender(
        <SlotWidget
          header={{
            title: "Resources",
            link: { title: "Go out", url: "https://factorial.co" },
          }}
          slots={slots}
        />
      )

      expect(screen.getByRole("link", { name: "Go out" })).toHaveAttribute(
        "target",
        "_blank"
      )

      // A fragment on this app — the case that used to open a new tab.
      rerender(
        <SlotWidget
          header={{
            title: "Events",
            link: { title: "Go to Calendar", url: "/calendar#core.events" },
          }}
          slots={slots}
        />
      )

      expect(
        screen.getByRole("link", { name: "Go to Calendar" })
      ).not.toHaveAttribute("target")
    })

    test("leaves the FOOTER to the widget's own call to action", () => {
      zeroRender(
        <SlotWidget
          header={{
            title: "Documents",
            link: { title: "Go to Documents", onClick: () => {} },
          }}
          action={{ label: "Sign now", onClick: () => {} }}
          slots={slots}
        />
      )

      // Two separate things: the CTA in the footer, the way out as the title.
      expect(
        screen.getByRole("button", { name: "Sign now" })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: "Go to Documents" })
      ).toHaveTextContent("Documents")
    })
  })

  /**
   * `header.info` is the widget's OTHER SIDE: the card turns over to it, keeping
   * its title, and one small button turns it back.
   */
  describe("the info side", () => {
    const withInfo = {
      title: "Hours",
      info: "Hours logged this week against a 38h weekly target.",
    }

    test("is out of reach until the card is turned", () => {
      zeroRender(<SlotWidget header={withInfo} slots={slots} />)

      // The face EXISTS — it is the card's other side, and it is what gives the
      // turn something to turn to — but it is hidden from the a11y tree and from
      // the pointer while it faces away. (`backface-visibility` is what hides it
      // visually, and jsdom computes no 3D, so this is the assertion that means
      // anything here.)
      expect(
        screen.queryByRole("button", { name: "Got it" })
      ).not.toBeInTheDocument()
      expect(
        screen.getByText(withInfo.info).closest("[aria-hidden]")
      ).toHaveAttribute("aria-hidden", "true")
    })

    test("keeps the title, centers the info and offers a way back", async () => {
      const onFlipBack = vi.fn()
      zeroRender(
        <SlotWidget
          header={withInfo}
          slots={slots}
          flipped
          onFlipBack={onFlipBack}
        />
      )

      // The title is on BOTH faces — twice in the tree, once per side.
      expect(screen.getAllByText("Hours")).toHaveLength(2)
      expect(screen.getByText(withInfo.info)).toBeInTheDocument()

      await userEvent.click(screen.getByRole("button", { name: "Got it" }))
      expect(onFlipBack).toHaveBeenCalled()
    })

    test("a widget with no info has no other side to turn to", () => {
      const { container } = zeroRender(
        <SlotWidget header={{ title: "Events" }} slots={slots} />
      )

      expect(container.querySelector("[data-turning]")).toBeNull()
      expect(
        screen.queryByRole("button", { name: "Got it" })
      ).not.toBeInTheDocument()
    })
  })

  test("puts its actions in the header's overflow menu", async () => {
    const onClick = vi.fn()
    zeroRender(
      <SlotWidget
        header={{ title: "Events" }}
        actions={[{ label: "Remove widget", onClick }]}
        slots={slots}
      />
    )

    await userEvent.click(screen.getByRole("button", { name: "Actions" }))
    await userEvent.click(
      screen.getByRole("menuitem", { name: "Remove widget" })
    )

    // The dropdown defers its items' onClick past its own close animation.
    await waitFor(() => expect(onClick).toHaveBeenCalled())
  })
})
