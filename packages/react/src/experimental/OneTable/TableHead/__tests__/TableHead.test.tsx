import { describe, expect, it, vi } from "vitest"

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
