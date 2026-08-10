import { afterEach, describe, expect, it, vi } from "vitest"

import { ChartVerticalBars, Pencil, Search } from "@/icons/app"
import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"

import { type WelcomeScreenSuggestion } from "../../F0AiChat/types"
import { WelcomeScreenSuggestionsRow } from "../components/WelcomeScreenSuggestionsRow"

/** Drive `useReducedMotion()` — the setup default reports no query matching. */
const setReducedMotion = (matches: boolean) =>
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: matches && query.includes("prefers-reduced-motion"),
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))

const groups: WelcomeScreenSuggestion[] = [
  {
    icon: ChartVerticalBars,
    label: "Analyze",
    items: [
      { title: "April leave and overtime summary" },
      { title: "Current gross salary by employee" },
    ],
  },
  {
    icon: Search,
    label: "Find",
    items: [
      { title: "Who's out of office this week?" },
      { title: "Engineers based in Barcelona" },
    ],
  },
  {
    icon: Pencil,
    label: "Create",
    items: [{ title: "Draft a job description" }],
  },
]

describe("WelcomeScreenSuggestionsRow", () => {
  it("renders one accessible popup trigger per group", () => {
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    for (const name of ["Analyze", "Find", "Create"]) {
      const trigger = screen.getByRole("button", { name })
      expect(trigger).toHaveAttribute("aria-haspopup", "dialog")
      expect(trigger).toHaveAttribute("aria-expanded", "false")
      expect(trigger).not.toHaveAttribute("aria-controls")
    }
  })

  it("opens the popover with the group's items when the trigger is clicked", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    expect(
      screen.queryByRole("button", { name: /april leave and overtime/i })
    ).not.toBeInTheDocument()

    const trigger = screen.getByRole("button", { name: /analyze/i })
    await user.click(trigger)

    expect(
      await screen.findByRole("button", { name: /april leave and overtime/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /current gross salary/i })
    ).toBeInTheDocument()
    const popover = screen.getByRole("dialog", { name: /analyze/i })
    expect(trigger).toHaveAttribute("aria-expanded", "true")
    expect(trigger).toHaveAttribute("aria-controls", popover.id)
  })

  it("calls onItemClick with the item and its parent group, and closes the popover", async () => {
    const user = userEvent.setup()
    const onItemClick = vi.fn()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={onItemClick}
      />
    )

    const trigger = screen.getByRole("button", { name: /analyze/i })
    await user.click(trigger)
    const item = await screen.findByRole("button", {
      name: /april leave and overtime/i,
    })
    await user.click(item)

    expect(onItemClick).toHaveBeenCalledTimes(1)
    expect(onItemClick).toHaveBeenCalledWith(
      { title: "April leave and overtime summary" },
      groups[0]
    )

    expect(
      screen.queryByRole("button", { name: /april leave and overtime/i })
    ).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })

  it("preserves focus when onItemClick moves it outside the popover", async () => {
    const user = userEvent.setup()
    zeroRender(
      <>
        <input aria-label="Focused destination" />
        <WelcomeScreenSuggestionsRow
          suggestions={groups}
          onItemClick={() => {
            screen
              .getByRole("textbox", { name: /focused destination/i })
              .focus()
          }}
        />
      </>
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    await user.click(
      await screen.findByRole("button", {
        name: /april leave and overtime/i,
      })
    )

    expect(
      screen.getByRole("textbox", { name: /focused destination/i })
    ).toHaveFocus()
  })

  it("fires onItemHover while pointing at a row and clears on leave", async () => {
    const user = userEvent.setup()
    const onItemHover = vi.fn()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
        onItemHover={onItemHover}
      />
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    const item = await screen.findByRole("button", {
      name: /april leave and overtime/i,
    })

    await user.hover(item)
    expect(onItemHover).toHaveBeenLastCalledWith({
      title: "April leave and overtime summary",
    })

    await user.unhover(item)
    expect(onItemHover).toHaveBeenLastCalledWith(null)
  })

  it("opens the popover above the trigger by default", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    const item = await screen.findByRole("button", {
      name: /april leave and overtime/i,
    })
    expect(item.closest("[data-side]")).toHaveAttribute("data-side", "top")
  })

  it("opens the popover below the trigger when side is bottom", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
        side="bottom"
      />
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    const item = await screen.findByRole("button", {
      name: /april leave and overtime/i,
    })
    expect(item.closest("[data-side]")).toHaveAttribute("data-side", "bottom")
  })

  it("switches popover content when another group is opened", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    expect(
      await screen.findByRole("button", { name: /april leave and overtime/i })
    ).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /find/i }))
    expect(
      await screen.findByRole("button", { name: /out of office this week/i })
    ).toBeInTheDocument()
  })

  // Regression: buttons used to be individual Radix PopoverTriggers, and only
  // the last-mounted one was registered as THE trigger — its built-in toggle
  // fired after the button's onClick, so switching TO the last group closed
  // the popover instead of showing it.
  it("switches to the last group while another group is open", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    const analyzeTrigger = screen.getByRole("button", { name: /analyze/i })
    await user.click(analyzeTrigger)
    expect(
      await screen.findByRole("button", { name: /april leave and overtime/i })
    ).toBeInTheDocument()

    const createTrigger = screen.getByRole("button", { name: /create/i })
    await user.click(createTrigger)
    expect(
      await screen.findByRole("button", { name: /draft a job description/i })
    ).toBeInTheDocument()
    const popover = screen.getByRole("dialog", { name: /create/i })
    expect(analyzeTrigger).toHaveAttribute("aria-expanded", "false")
    expect(analyzeTrigger).not.toHaveAttribute("aria-controls")
    expect(createTrigger).toHaveAttribute("aria-expanded", "true")
    expect(createTrigger).toHaveAttribute("aria-controls", popover.id)
  })

  it("switches back from the last group to another group", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    await user.click(screen.getByRole("button", { name: /create/i }))
    expect(
      await screen.findByRole("button", { name: /draft a job description/i })
    ).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    expect(
      await screen.findByRole("button", { name: /april leave and overtime/i })
    ).toBeInTheDocument()
  })

  it("closes the popover when the open group's own tag is clicked", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    expect(
      await screen.findByRole("button", { name: /april leave and overtime/i })
    ).toBeInTheDocument()

    await user.click(screen.getByRole("button", { name: /analyze/i }))
    expect(
      screen.queryByRole("button", { name: /april leave and overtime/i })
    ).not.toBeInTheDocument()
  })

  it("restores focus to the active group when Escape closes the popover", async () => {
    const user = userEvent.setup()
    zeroRender(
      <WelcomeScreenSuggestionsRow
        suggestions={groups}
        onItemClick={() => {}}
      />
    )

    const trigger = screen.getByRole("button", { name: /analyze/i })
    await user.click(trigger)
    await screen.findByRole("dialog", { name: /analyze/i })

    await user.keyboard("{Escape}")

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(trigger).toHaveFocus()
  })

  it("keeps focus on an outside target when it dismisses the popover", async () => {
    const user = userEvent.setup()
    zeroRender(
      <>
        <button type="button">Outside action</button>
        <WelcomeScreenSuggestionsRow
          suggestions={groups}
          onItemClick={() => {}}
        />
      </>
    )

    const trigger = screen.getByRole("button", { name: /analyze/i })
    await user.click(trigger)
    await screen.findByRole("dialog", { name: /analyze/i })

    const outsideTarget = screen.getByRole("button", {
      name: /outside action/i,
    })
    await user.click(outsideTarget)

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
    expect(trigger).toHaveAttribute("aria-expanded", "false")
    expect(outsideTarget).toHaveFocus()
  })

  // The item title is truncated with an ellipsis and, on hover/focus, reveals
  // its hidden tail with a one-way marquee. jsdom has no layout engine, so the
  // overflow that gates the marquee (`scrollWidth > clientWidth`) is mocked.
  describe("marquee reveal on truncated items", () => {
    const LONG_TITLE =
      "A very long suggestion title that overflows its container and is truncated"
    const longGroups: WelcomeScreenSuggestion[] = [
      { icon: Search, label: "Find", items: [{ title: LONG_TITLE }] },
    ]

    afterEach(() => {
      // Restore the setup default (motion allowed) for the rest of the suite.
      setReducedMotion(false)
    })

    /**
     * Open the group and return the user, the item button and its inner label
     * span. jsdom has no layout, so the overflow that gates the marquee is
     * mocked: `overflows: true` makes the label wider than its wrapper.
     */
    const openItem = async ({ overflows = true } = {}) => {
      const user = userEvent.setup()
      zeroRender(
        <WelcomeScreenSuggestionsRow
          suggestions={longGroups}
          onItemClick={() => {}}
        />
      )
      await user.click(screen.getByRole("button", { name: /find/i }))
      const item = await screen.findByRole("button", { name: LONG_TITLE })
      // getByText resolves to the innermost element holding the text — the
      // label span whose transform the marquee drives.
      const label = screen.getByText(LONG_TITLE)
      Object.defineProperty(label, "scrollWidth", {
        configurable: true,
        value: overflows ? 400 : 100,
      })
      Object.defineProperty(label, "clientWidth", {
        configurable: true,
        value: 100,
      })
      return { user, item, label }
    }

    it("keeps the full title as the item's accessible name", async () => {
      const user = userEvent.setup()
      zeroRender(
        <WelcomeScreenSuggestionsRow
          suggestions={longGroups}
          onItemClick={() => {}}
        />
      )

      await user.click(screen.getByRole("button", { name: /find/i }))

      // Visual truncation is CSS-only; assistive tech still gets the whole thing.
      expect(
        await screen.findByRole("button", { name: LONG_TITLE })
      ).toBeInTheDocument()
    })

    it("reveals the hidden tail with a transform on hover and snaps back on leave", async () => {
      const { user, item, label } = await openItem()

      expect(label.style.transform).toBe("")

      await user.hover(item)
      // Scrolled left to reveal the tail (distance = overflow + trailing gap),
      // after the hold delay elapses.
      await waitFor(
        () => expect(label.style.transform).toMatch(/^translateX\(-\d/),
        { timeout: 2000 }
      )

      await user.unhover(item)
      // Instant return — no animated slide-back.
      expect(label.style.transform).toBe("translateX(0)")
    })

    it("reveals on keyboard focus and clears on blur", async () => {
      const { item, label } = await openItem()

      item.focus()
      await waitFor(
        () => expect(label.style.transform).toMatch(/^translateX\(-\d/),
        { timeout: 2000 }
      )

      item.blur()
      expect(label.style.transform).toBe("translateX(0)")
    })

    it("does not start the marquee when the title fits", async () => {
      const { user, item, label } = await openItem({ overflows: false })

      await user.hover(item)
      // Wait past the hold delay; a title that fits has no hidden tail to reveal.
      await new Promise((resolve) => setTimeout(resolve, 600))

      expect(label.style.transform).toBe("")
      expect(label.parentElement?.style.maskImage).toBe("")
    })

    it("does not animate when the user prefers reduced motion", async () => {
      setReducedMotion(true)
      const { user, item, label } = await openItem()

      await user.hover(item)
      // Wait past the hold delay; the marquee must never start.
      await new Promise((resolve) => setTimeout(resolve, 600))

      expect(label.style.transform).toBe("")
    })
  })
})
