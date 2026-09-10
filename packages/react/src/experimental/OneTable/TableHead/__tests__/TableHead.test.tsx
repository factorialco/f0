import { describe, expect, it, vi } from "vitest"
import { screen, userEvent, waitFor, zeroRender } from "@/testing/test-utils"
import {
  OneTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../.."
import type { TableHeaderInfo } from "../.."

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

  it("does not sort when the info trigger is clicked", async () => {
    const onSortClick = vi.fn()
    renderSortableHeader(onSortClick, {
      title: "Active employees",
      description: "Body",
    })

    await userEvent.click(
      screen.getByRole("button", { name: "Active headcount" })
    )

    expect(onSortClick).not.toHaveBeenCalled()
  })

  it("leaves a header without a sort callback inert", async () => {
    renderHeader("Short helper text")

    expect(
      screen.getByRole("columnheader").classList.contains("cursor-pointer")
    ).toBe(false)
  })
})

describe("TableHead rich header info", () => {
  it("uses the column label as the info trigger's accessible name by default", () => {
    renderHeader({ title: "Active employees", description: "Body" })

    expect(
      screen.getByRole("button", { name: "Active headcount" })
    ).toBeInTheDocument()
  })

  it("uses info.label as the accessible name when provided", () => {
    renderHeader({
      label: "About active headcount",
      title: "Active employees",
      description: "Body",
    })

    expect(
      screen.getByRole("button", { name: "About active headcount" })
    ).toBeInTheDocument()
  })

  it("renders the structured title and description on hover", async () => {
    renderHeader({
      title: "Active employees",
      description: "Distinct active employees in the selected snapshot.",
    })

    await userEvent.hover(
      screen.getByRole("button", { name: "Active headcount" })
    )

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

  it("dismisses the card when the link action is clicked", async () => {
    const onAction = vi.fn()
    renderHeader({
      title: "Active employees",
      description: "Distinct active employees in the selected snapshot.",
      link: { label: "Learn more", onClick: onAction },
    })

    await userEvent.hover(
      screen.getByRole("button", { name: "Active headcount" })
    )
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

  it("renders a plain text tooltip when info is a string (backward compatible)", () => {
    renderHeader("Short helper text", "Country")

    // The header label still renders and the rich hover-card trigger (a button
    // whose accessible name is the info text) is not used for the string path.
    expect(screen.getByText("Country")).toBeInTheDocument()
    expect(
      screen.queryByRole("button", { name: "Short helper text" })
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

describe("TableHead column width", () => {
  const renderWidths = (props: {
    width?: number
    minWidth?: number
    maxWidth?: number
  }) =>
    zeroRender(
      <OneTable>
        <TableHeader>
          <TableRow>
            <TableHead {...props}>Índice vs empresa</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell {...props}>3,20</TableCell>
          </TableRow>
        </TableBody>
      </OneTable>
    )

  it("pins the cell when given a width, so the label has to absorb the deficit", () => {
    renderWidths({ width: 80 })

    const header = screen.getByRole("columnheader")
    expect(header.style.width).toBe("80px")
    expect(header.style.maxWidth).toBe("80px")
    expect(header.style.minWidth).toBe("80px")
  })

  it("caps without pinning when given only a maxWidth", () => {
    renderWidths({ maxWidth: 500 })

    const header = screen.getByRole("columnheader")
    // No width and no minWidth: the column still sizes itself to the wider of
    // its content and its own header label, it just stops growing at the cap.
    expect(header.style.width).toBe("")
    expect(header.style.minWidth).toBe("")
    expect(header.style.maxWidth).toBe("500px")
  })

  it("lets maxWidth override the ceiling that width would have set", () => {
    renderWidths({ width: 80, maxWidth: 500 })

    const header = screen.getByRole("columnheader")
    expect(header.style.width).toBe("80px")
    expect(header.style.minWidth).toBe("80px")
    expect(header.style.maxWidth).toBe("500px")
  })

  it("caps the body cell too, so the cap holds for the whole column", () => {
    renderWidths({ maxWidth: 500 })

    const cell = screen.getByRole("cell")
    expect(cell.style.maxWidth).toBe("500px")
    expect(cell.style.width).toBe("")
  })
})
