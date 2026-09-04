import { afterEach, describe, expect, it, vi } from "vitest"

import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"

import {
  OneTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../index"
import type { TableHeaderInfo } from "../../index"

const renderHeader = (
  info: string | TableHeaderInfo,
  label = "Active headcount"
) =>
  zeroRender(
    <OneTable>
      <TableHeader>
        <TableRow>
          <TableHead info={info}>{label}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>37</TableCell>
        </TableRow>
      </TableBody>
    </OneTable>
  )

// JSDOM ships no `PointerEvent`, and `motion` synthesises one when a
// `whileTap` element is activated from the keyboard — so the Enter/Space test
// below would fail the run with an unhandled `ReferenceError` however well its
// assertions pass. Scoped to this file on purpose: defining the constructor
// globally would flip `typeof window.PointerEvent` feature detection for every
// library in every other suite.
if (!("PointerEvent" in window)) {
  class PointerEventPolyfill extends window.MouseEvent {
    readonly pointerId: number
    readonly pointerType: string

    constructor(type: string, params: PointerEventInit = {}) {
      super(type, params)
      this.pointerId = params.pointerId ?? 0
      this.pointerType = params.pointerType ?? ""
    }
  }

  window.PointerEvent =
    PointerEventPolyfill as unknown as typeof window.PointerEvent
}

const structuredInfo: TableHeaderInfo = {
  title: "Active employees",
  description: "Distinct active employees in the selected snapshot.",
}

describe("TableHead sorting", () => {
  const renderSortableHeader = (
    onSortClick: () => void,
    info?: string | TableHeaderInfo
  ) =>
    zeroRender(
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead onSortClick={onSortClick} info={info}>
              Active headcount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>37</TableCell>
          </TableRow>
        </TableBody>
      </OneTable>
    )

  it("sorts when the cell is clicked away from the sort control", async () => {
    const onSortClick = vi.fn()
    renderSortableHeader(onSortClick)

    // The whole cell is the hit area, so the click does not have to land on
    // the icon — which is only drawn on hover anyway.
    await userEvent.click(screen.getByRole("columnheader"))

    expect(onSortClick).toHaveBeenCalledTimes(1)
  })

  it("sorts exactly once when the sort control itself is clicked", async () => {
    const onSortClick = vi.fn()
    renderSortableHeader(onSortClick)

    // The control holds no handler of its own; the click bubbles to the cell.
    // Were it wired up on both, this would toggle the sorting twice.
    await userEvent.click(screen.getByRole("button", { name: "Sort" }))

    expect(onSortClick).toHaveBeenCalledTimes(1)
  })

  it("still sorts when the cell also carries header info", async () => {
    const onSortClick = vi.fn()
    renderSortableHeader(onSortClick, structuredInfo)

    // The help copy is hover-revealed; there is no separate trigger left in
    // the cell that a click could land on instead of sorting.
    await userEvent.click(screen.getByRole("columnheader"))

    expect(onSortClick).toHaveBeenCalledTimes(1)
  })

  it("sorts from the keyboard, on Enter and on Space", async () => {
    const onSortClick = vi.fn()
    renderSortableHeader(onSortClick)

    const control = screen.getByRole("button", { name: "Sort" })
    control.focus()

    // The control deliberately carries no handler of its own — a native
    // button's activation is what reaches the cell. Swap it for a div, or stop
    // the click from bubbling, and keyboard sorting dies silently while every
    // pointer test above still passes.
    await userEvent.keyboard("{Enter}")
    expect(onSortClick).toHaveBeenCalledTimes(1)

    await userEvent.keyboard(" ")
    expect(onSortClick).toHaveBeenCalledTimes(2)
  })

  it("leaves a header without a sort callback inert", async () => {
    renderHeader("Short helper text")

    expect(
      screen.getByRole("columnheader").classList.contains("cursor-pointer")
    ).toBe(false)
  })
})

describe("TableHead header info", () => {
  it("draws no info trigger beside the label", () => {
    renderHeader(structuredInfo)

    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("describes the cell with the structured copy, so it is not sighted-only", () => {
    renderHeader(structuredInfo)

    const description = screen
      .getByRole("columnheader")
      .getAttribute("aria-describedby")

    expect(description).toBeTruthy()
    expect(document.getElementById(description as string)?.textContent).toBe(
      `${structuredInfo.title}. ${structuredInfo.description}`
    )
  })

  it("reveals the structured title and description when the cell is hovered", async () => {
    renderHeader(structuredInfo)

    await userEvent.hover(screen.getByRole("columnheader"))

    expect(
      await screen.findByText("Active employees", {}, { timeout: 2000 })
    ).toBeInTheDocument()
    expect(
      await screen.findByText(
        "Distinct active employees in the selected snapshot.",
        {},
        { timeout: 2000 }
      )
    ).toBeInTheDocument()
  })

  it("reveals the card when the cell receives keyboard focus", async () => {
    renderHeader(structuredInfo)

    await userEvent.tab()

    expect(screen.getByRole("columnheader")).toHaveFocus()
    expect(
      await screen.findByText("Active employees", {}, { timeout: 2000 })
    ).toBeInTheDocument()
  })

  it("dismisses the card when the link action is clicked", async () => {
    const onAction = vi.fn()
    renderHeader({
      ...structuredInfo,
      link: { label: "Learn more", onClick: onAction },
    })

    await userEvent.hover(screen.getByRole("columnheader"))
    const learnMore = await screen.findByRole(
      "button",
      { name: "Learn more" },
      { timeout: 2000 }
    )
    await userEvent.click(learnMore)

    expect(onAction).toHaveBeenCalledTimes(1)
    await waitFor(() =>
      expect(screen.queryByText("Learn more")).not.toBeInTheDocument()
    )
  })

  it("shows a plain text tooltip on hover when info is a string", async () => {
    renderHeader("Short helper text", "Country")

    expect(screen.getByText("Country")).toBeInTheDocument()
    expect(screen.queryByText("Short helper text")).not.toBeInTheDocument()

    await userEvent.hover(screen.getByRole("columnheader"))

    // Radix renders the copy twice — once visible, once for AT — so the
    // assertion is on presence, not on a single node.
    expect(
      (await screen.findAllByText("Short helper text", {}, { timeout: 2000 }))
        .length
    ).toBeGreaterThan(0)
  })
})

describe("TableHead label tooltip", () => {
  // OneEllipsis only offers its tooltip once the text is actually clipped, and
  // jsdom does no layout — so the clipped state has to be stubbed.
  const clipTheLabel = () => {
    vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockReturnValue(500)
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(200)
  }

  const longLabel = "Average annual base salary per employee"

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("gives a clipped label its own tooltip when the cell has no help copy", () => {
    clipTheLabel()
    zeroRender(
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead width={120}>{longLabel}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
          </TableRow>
        </TableBody>
      </OneTable>
    )

    // Radix marks its own trigger with `data-state`, and OneEllipsis only
    // wraps the label in one once the text is clipped — so the attribute is
    // the label owning a tooltip, without waiting on Radix's open delay.
    expect(screen.getByText(longLabel)).toHaveAttribute("data-state", "closed")
  })

  it("suppresses the label tooltip when the cell reveals help copy instead", async () => {
    clipTheLabel()
    zeroRender(
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead width={120} info={structuredInfo}>
              {longLabel}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
          </TableRow>
        </TableBody>
      </OneTable>
    )

    // The cell took the tooltip's place, so the label is a plain node again.
    expect(screen.getByText(longLabel)).not.toHaveAttribute("data-state")

    await userEvent.hover(screen.getByRole("columnheader"))

    // The help copy opens on the same gesture the label tooltip would have
    // used, and the label stays a single node — no competing tooltip.
    expect(
      await screen.findByText(structuredInfo.description, {}, { timeout: 2000 })
    ).toBeInTheDocument()
    expect(screen.getAllByText(longLabel)).toHaveLength(1)
  })
})

describe("TableHead empty help copy", () => {
  it("treats an empty info string as no help copy at all", async () => {
    const { container } = zeroRender(
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead info="">Country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Spain</TableCell>
          </TableRow>
        </TableBody>
      </OneTable>
    )

    await userEvent.hover(screen.getByRole("columnheader"))

    // A nullable catalog description mapped straight into `info` used to open
    // an empty bubble over the header and take a tab stop with it.
    expect(
      container.ownerDocument.querySelectorAll(
        "[data-radix-popper-content-wrapper]"
      )
    ).toHaveLength(0)
    expect(screen.getByRole("columnheader")).not.toHaveAttribute("tabindex")
  })
})

describe("TableHead sort control placement", () => {
  const renderTwoAlignments = () =>
    zeroRender(
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead onSortClick={vi.fn()}>Name</TableHead>
            <TableHead align="right" onSortClick={vi.fn()}>
              Salary
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Ada</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
        </TableBody>
      </OneTable>
    )

  // jsdom loads no stylesheet and does no layout, so neither the overlay's
  // position nor its opacity is observable here. These assertions pin the
  // utilities that encode the behaviour — a proxy, and a deliberate one: the
  // real geometry is exercised by the CompactHeaders story.
  it("keeps the control on the right edge whatever the column's alignment", () => {
    renderTwoAlignments()

    for (const control of screen.getAllByRole("button", { name: "Sort" })) {
      expect(control).toHaveClass("absolute", "right-0")
      expect(control.className).not.toContain("left-0")
    }
  })

  it("reveals the control from its own cell, not from the row", () => {
    renderTwoAlignments()

    const [name, salary] = screen.getAllByRole("columnheader")
    expect(name).toHaveClass("group/head")
    expect(salary).toHaveClass("group/head")

    for (const control of screen.getAllByRole("button", { name: "Sort" })) {
      expect(control).toHaveClass("opacity-0", "group-hover/head:opacity-100")
      // The regression this guards: `TableRow` carries a bare `group`, so an
      // unscoped `group-hover:` matched the whole header row and uncovered
      // every column's control at once.
      expect(control.className).not.toContain("group-hover:opacity-100")
    }
  })
})

describe("TableHead keyboard reach", () => {
  it("leaves the tab stop to the sort control when the cell has both", async () => {
    zeroRender(
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead onSortClick={vi.fn()} info={structuredInfo}>
              Active headcount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>37</TableCell>
          </TableRow>
        </TableBody>
      </OneTable>
    )

    await userEvent.tab()

    expect(screen.getByRole("button", { name: "Sort" })).toHaveFocus()
    expect(screen.getByRole("columnheader")).not.toHaveAttribute("tabindex")
  })

  it("gives a hidden cell no trigger and no tab stop, even with help copy", async () => {
    const { container } = zeroRender(
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead hidden info={structuredInfo}>
              Active headcount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>37</TableCell>
          </TableRow>
        </TableBody>
      </OneTable>
    )

    const cell = container.querySelector("th")
    expect(cell).not.toHaveAttribute("tabindex")

    await userEvent.hover(cell as HTMLElement)

    expect(
      screen.queryByText(structuredInfo.description)
    ).not.toBeInTheDocument()
  })
})

describe("TableHead and TableCell highlighted", () => {
  it("emphasizes only the highlighted header and cell, and marks the header for scroll targeting", () => {
    zeroRender(
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead highlighted>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John</TableCell>
            <TableCell highlighted>john@example.com</TableCell>
          </TableRow>
        </TableBody>
      </OneTable>
    )

    // The header paints the tint as a gradient image, the cell as a bg color;
    // both carry the same token, so the assertion targets that.
    const highlightClass = "hsl(var(--neutral-2))"
    const [plainHead, highlightedHead] = screen.getAllByRole("columnheader")
    expect(highlightedHead.className).toContain(highlightClass)
    expect(highlightedHead).toHaveAttribute("data-highlighted", "true")
    expect(plainHead.className).not.toContain(highlightClass)
    expect(plainHead).not.toHaveAttribute("data-highlighted")

    const [plainCell, highlightedCell] = screen.getAllByRole("cell")
    expect(highlightedCell.className).toContain(highlightClass)
    expect(plainCell.className).not.toContain(highlightClass)
  })
})
