import { userEvent } from "@testing-library/user-event"
import {
  type ComponentProps,
  createElement,
  forwardRef,
  type ReactNode,
} from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { screen, zeroRender as render, within } from "@/testing/test-utils"

// jsdom has no layout, so Virtuoso would render zero rows and every assertion
// here would pass against an empty grid. The official mock context gives it a
// viewport to measure against.
//
// 320px is the panel's real one — what the grid gets once the search box and
// the jump bar have taken theirs — and it is deliberately not a viewport tall
// enough to mount all ~1,870 emoji at once. Mounting the whole set cost seconds
// per render under CI's coverage instrumentation, this file re-renders the grid
// on the first keystroke of every search, and that is what pushed these tests
// past the 5s default timeout. Ten rows instead of ~210 is the same coverage
// for a twentieth of the work.
//
// The catch: jsdom cannot scroll, so a cell below the fold is genuinely absent
// from the DOM. Nothing here may assert an *absence* without holding a mounted
// neighbour up against it, and nothing may reach for a cell far down the list —
// see "clamps at the ends", which narrows the list with a search instead.
vi.mock("react-virtuoso", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-virtuoso")>()
  const Mocked = forwardRef<
    unknown,
    ComponentProps<typeof actual.GroupedVirtuoso>
  >(function MockedGroupedVirtuoso(props, ref): ReactNode {
    return createElement(
      actual.VirtuosoMockContext.Provider,
      { value: { viewportHeight: 320, itemHeight: 32 } },
      createElement(actual.GroupedVirtuoso, { ...props, ref })
    )
  })
  return {
    ...actual,
    GroupedVirtuoso: Mocked as typeof actual.GroupedVirtuoso,
  }
})

const { EmojiPicker } = await import("../index")

const searchBox = () => screen.getByRole("combobox")
const grid = () => screen.getByRole("listbox", { name: "Emoji" })
const activeOption = () =>
  document.getElementById(searchBox().getAttribute("aria-activedescendant")!)

/** Pinned so the suite doesn't depend on the runner's font coverage. */
const renderPicker = (props: Partial<{ onSelect: (e: string) => void }> = {}) =>
  render(
    <EmojiPicker onSelect={props.onSelect ?? (() => {})} emojiVersion={15} />
  )

beforeEach(() => {
  localStorage.clear()
})

describe("EmojiPicker", () => {
  it("opens on the frequently-used row with the search box focused", () => {
    renderPicker()

    expect(searchBox()).toHaveFocus()
    expect(screen.getByText("Frequently used")).toBeInTheDocument()
    expect(screen.getByText("Smileys & people")).toBeInTheDocument()
  })

  it("filters to matching emoji as you type", async () => {
    const user = userEvent.setup()
    renderPicker()

    await user.type(searchBox(), "tada")

    const options = within(grid()).getAllByRole("option")
    expect(options[0]).toHaveAccessibleName("Party Popper")
    // The category headers are gone: a search is one flat block of results.
    expect(screen.queryByText("Smileys & people")).not.toBeInTheDocument()
  })

  it("ranks an exact shortcode above a keyword substring", async () => {
    const user = userEvent.setup()
    renderPicker()

    await user.type(searchBox(), "fire")

    expect(within(grid()).getAllByRole("option")[0]).toHaveAccessibleName(
      "Fire"
    )
  })

  it("collapses the search block's header instead of leaving a gap", async () => {
    const user = userEvent.setup()
    const { container } = renderPicker()

    await user.type(searchBox(), "tada")

    // The group still exists — Virtuoso needs one — so the header has to
    // measure zero rather than merely look empty. It used to be an unstyled
    // div, and with measurement switched off it was booked as a full row.
    const header = container.querySelector('[data-index="0"] > div')
    expect(header).toHaveClass("h-0")
  })

  it("keeps the search box reachable and wired as a combobox", () => {
    renderPicker()

    // F0SearchInput defaults to `role="searchbox"` and `tabIndex={-1}`, which
    // is right for a field beside a list you can already reach. This one IS the
    // way in: focus stays here while the arrows move a selection it doesn't
    // contain, so it needs the combobox contract and it needs to be tabbable —
    // otherwise focus leaves for the Clear button and can never come back.
    const box = searchBox()
    expect(box).toHaveAttribute("tabindex", "0")
    expect(box).toHaveAttribute("aria-autocomplete", "list")
    expect(box).toHaveAttribute("aria-controls", grid().id)
    expect(box).toHaveAttribute("aria-activedescendant")
  })

  it("points aria-activedescendant at the cell the arrows moved to", async () => {
    const user = userEvent.setup()
    renderPicker()

    const before = searchBox().getAttribute("aria-activedescendant")
    await user.keyboard("{ArrowRight}")
    const after = searchBox().getAttribute("aria-activedescendant")

    expect(after).not.toBe(before)
    expect(document.getElementById(after!)).toHaveAttribute(
      "aria-selected",
      "true"
    )
  })

  it("draws its cells and its jump bar as the same F0-sized button", () => {
    renderPicker()

    const cell = within(grid()).getAllByRole("option")[0]
    const tab = screen.getAllByRole("tab")[0]

    // 32px is what an F0 button gives an icon-only `md`, and nine of them fill
    // the panel's 288px content box exactly — which is what puts the jump bar's
    // buttons directly under the emoji columns.
    for (const button of [cell, tab]) {
      expect(button).toHaveStyle({ width: "32px", height: "32px" })
      // Copied from `actionVariants.ghost` rather than imported: `Action`
      // hardcodes `role="button"`, and these are an option and a tab.
      expect(button).toHaveClass(
        "rounded",
        "hover:bg-f1-background-secondary-hover"
      )
    }
  })

  it("draws grid emoji through the same renderer as the rest of the chat", () => {
    renderPicker()

    // `EmojiImage` in native mode, not a bare glyph in a span — so the picker
    // can't drift from the reaction pills or the quick-reaction row.
    const cell = within(grid()).getAllByRole("option")[0]
    expect(cell.firstElementChild).toHaveClass("font-emoji")
  })

  it("leaves its own surface to the popover around it", () => {
    const { container } = renderPicker()
    const panel = container.firstElementChild

    // The call sites used to switch the popover's shadow off because the panel
    // drew its own, which is how the picker ended up with no shadow at all.
    // The popover owns border, surface and shadow now; the panel owns neither.
    expect(panel).not.toHaveClass("shadow-md")
    expect(panel).not.toHaveClass("border")
    // A defined height, clamped to whatever Radix says is available — not a
    // max-height, which Virtuoso can't size a flex child against.
    expect(panel?.className).toContain(
      "h-[clamp(180px,var(--radix-popover-content-available-height,400px),400px)]"
    )
  })

  it("scrolls inside F0's ScrollArea rather than a native scrollbar", () => {
    renderPicker()

    // The scrolling element IS the Radix viewport — which is also where
    // Virtuoso's role, id and style have to land, not on the ScrollArea root:
    // its absolute inner viewport sizes against that element's containing block.
    // (Radix marks only the viewport; the root carries no data attribute.)
    expect(grid()).toHaveAttribute("data-radix-scroll-area-viewport")
    expect(grid().parentElement).toHaveClass("overflow-hidden")
  })

  it("keeps the scrollbar thumb sized as the list changes", async () => {
    const user = userEvent.setup()
    renderPicker()
    // Radix measures the thumb from a ResizeObserver on its content wrapper,
    // and Virtuoso's inner viewport is absolute, so the wrapper never grows on
    // its own. Publishing the total height onto it is what keeps the thumb
    // honest — and doing it here, rather than through an extra in-flow element,
    // is what keeps it clear of the sticky group header.
    const wrapper = () => grid().firstElementChild as HTMLElement

    const browsing = wrapper().style.minHeight
    expect(browsing).toMatch(/^\d+px$/)
    expect(parseFloat(browsing)).toBeGreaterThan(0)

    await user.type(searchBox(), "tada")

    // Eight results instead of ~1,800 emoji: it has to shrink with them.
    expect(parseFloat(wrapper().style.minHeight)).toBeLessThan(
      parseFloat(browsing)
    )
  })

  it("puts nothing in flow ahead of the sticky section header", () => {
    const { container } = renderPicker()

    const sticky = container.querySelector<HTMLElement>(
      '[data-testid="virtuoso-top-item-list"]'
    )
    expect(sticky).toHaveTextContent("Frequently used")

    // `position: sticky` sticks from wherever the element would sit in flow, so
    // ANY earlier in-flow sibling offsets it. A full-height measure strip used
    // to be exactly that, and pushed "Frequently used" ~8,000px down — present
    // in the DOM, nowhere near the screen. jsdom has no layout to catch that,
    // so the guard is structural: the sticky header owns the first slot.
    const wrapper = grid().firstElementChild
    expect(wrapper?.firstElementChild).toContainElement(sticky)
  })

  it("gives the frequently-used block its own entry in the jump bar", async () => {
    const user = userEvent.setup()
    renderPicker()

    // Every browse section gets a tab, frequently-used included, so exactly one
    // is lit whenever you're browsing rather than searching. (Which one follows
    // the scroll position, and jsdom has no scrolling to follow — that part is
    // Storybook's to verify.)
    const tabs = screen.getAllByRole("tab")
    expect(tabs).toHaveLength(9)
    const recents = screen.getByRole("tab", { name: "Frequently used" })
    expect(tabs[0]).toBe(recents)
    expect(recents).toHaveAttribute("aria-selected", "true")

    await user.type(searchBox(), "tada")
    await user.click(recents)
    expect(searchBox()).toHaveValue("")
  })

  it("pads both ends of the scroller", () => {
    const { container } = renderPicker()

    // Deliberate 8px top and bottom, as measured content rather than padding on
    // the scroll container — which would offset scrollToIndex and the sticky
    // headers.
    expect(container.querySelectorAll("div.h-2")).toHaveLength(2)
  })

  it("says so when nothing matches", async () => {
    const user = userEvent.setup()
    renderPicker()

    await user.type(searchBox(), "zzzzzzz")

    expect(screen.getByText("No emoji found")).toBeInTheDocument()
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument()
  })

  it("moves the active cell with the arrow keys while focus stays in the box", async () => {
    const user = userEvent.setup()
    renderPicker()

    const first = activeOption()
    await user.keyboard("{ArrowRight}")
    expect(activeOption()).not.toBe(first)
    // Focus never leaves the search box — that is what makes type-then-Enter
    // work without a trip to the grid.
    expect(searchBox()).toHaveFocus()

    // Down then up returns to where it started: the column is preserved.
    const afterRight = activeOption()
    await user.keyboard("{ArrowDown}{ArrowUp}")
    expect(activeOption()).toBe(afterRight)
  })

  it("clamps at the ends instead of wrapping", async () => {
    const user = userEvent.setup()
    renderPicker()

    // Against a search rather than the whole set: clamping doesn't care how
    // long the list is, and `{End}` on 1,870 emoji would land on a cell far
    // outside the viewport — which in jsdom means not in the DOM at all, so
    // both sides of the comparison would be null and it would pass on nothing.
    // Four rows, the last of them partial, exercise every edge.
    await user.type(searchBox(), "clock")

    const first = activeOption()
    expect(first).not.toBeNull()
    await user.keyboard("{ArrowLeft}{ArrowUp}")
    expect(activeOption()).toBe(first)

    await user.keyboard("{End}")
    const last = activeOption()
    expect(last).not.toBeNull()
    expect(last).not.toBe(first)
    await user.keyboard("{ArrowRight}{ArrowDown}")
    expect(activeOption()).toBe(last)
  })

  it("selects the active emoji with Enter", async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    renderPicker({ onSelect })

    await user.type(searchBox(), "tada")
    await user.keyboard("{Enter}")

    expect(onSelect).toHaveBeenCalledWith("🎉")
  })

  it("selects on click", async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()
    renderPicker({ onSelect })

    await user.type(searchBox(), "fire")
    await user.click(within(grid()).getAllByRole("option")[0])

    expect(onSelect).toHaveBeenCalledWith("🔥")
  })

  it("clears the search on Escape before letting it close anything", async () => {
    const onKeyDown = vi.fn()
    const user = userEvent.setup()
    render(
      <div onKeyDown={onKeyDown}>
        <EmojiPicker onSelect={() => {}} emojiVersion={15} />
      </div>
    )
    const escapesSeenAbove = () =>
      onKeyDown.mock.calls.filter(([event]) => event.key === "Escape").length

    await user.type(screen.getByRole("combobox"), "tada")
    await user.keyboard("{Escape}")

    expect(screen.getByRole("combobox")).toHaveValue("")
    // The popover above must not also close on that same keystroke.
    expect(escapesSeenAbove()).toBe(0)

    // A second Escape has nothing to clear, so it goes up as usual.
    await user.keyboard("{Escape}")
    expect(escapesSeenAbove()).toBe(1)
  })

  it("remembers what you pick and offers it first next time", async () => {
    const user = userEvent.setup()
    const { unmount } = render(
      <EmojiPicker onSelect={() => {}} emojiVersion={15} />
    )

    await user.type(screen.getByRole("combobox"), "fire")
    await user.click(
      within(screen.getByRole("listbox", { name: "Emoji" })).getAllByRole(
        "option"
      )[0]
    )
    unmount()

    // The frequent block leads the browse view, so the first cell in the grid
    // is the first cell of that row.
    renderPicker()
    expect(within(grid()).getAllByRole("option")[0]).toHaveAccessibleName(
      "Fire"
    )
  })

  it("hides emoji the platform cannot draw", () => {
    // Emoji 13 predates the melting face (14) and the shaking face (15).
    render(<EmojiPicker onSelect={() => {}} emojiVersion={13} />)

    // Melting Face sits eleventh in Smileys, two rows into a viewport that
    // mounts ten — and Winking Face, the entry right after it, is here to prove
    // the window reaches that far. So the absence below is the filter, not
    // virtualization.
    expect(screen.getByLabelText("Grinning Face")).toBeInTheDocument()
    expect(screen.getByLabelText("Winking Face")).toBeInTheDocument()
    expect(screen.queryByLabelText("Melting Face")).not.toBeInTheDocument()
  })

  it("offers a jump-to bar for every category", () => {
    renderPicker()

    expect(
      screen.getByRole("tab", { name: "Smileys & people" })
    ).toBeInTheDocument()
    expect(screen.getByRole("tab", { name: "Flags" })).toBeInTheDocument()
  })

  it("leaves a search when you jump to a category", async () => {
    const user = userEvent.setup()
    renderPicker()

    await user.type(searchBox(), "tada")
    const whileSearching = searchBox().getAttribute("aria-activedescendant")
    await user.click(screen.getByRole("tab", { name: "Food & drink" }))

    // Browsing again, with the selection moved into the section you asked for.
    expect(searchBox()).toHaveValue("")
    expect(screen.getByText("Frequently used")).toBeInTheDocument()
    expect(searchBox().getAttribute("aria-activedescendant")).not.toBe(
      whileSearching
    )
    // Where the scroller lands is Storybook's to verify: jsdom has no
    // scrolling, so asserting a mounted "Food & drink" header here would only
    // prove the section exists — which it does whether the jump worked or not.
  })
})
