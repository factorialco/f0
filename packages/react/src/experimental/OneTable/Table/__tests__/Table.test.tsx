import { describe, expect, it } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { OneTable, TableBody, TableCell, TableRow } from "../../index"

const renderTable = (loading: boolean) =>
  zeroRender(
    <OneTable loading={loading}>
      <TableBody>
        <TableRow>
          <TableCell>37</TableCell>
        </TableRow>
      </TableBody>
    </OneTable>
  )

describe("OneTable loading overlay", () => {
  it("renders the overlay as a sibling of the scroll container, not inside it", () => {
    const { container } = renderTable(true)

    const scroller = container.querySelector(".overflow-auto")
    const overlay = container.querySelector(".cursor-progress")

    expect(scroller).not.toBeNull()
    expect(overlay).not.toBeNull()
    // Inside the scroll container an `absolute inset-0` overlay only covers
    // the first scroll page, so the spinner scrolls out of view on scrolled
    // tables. It must live next to the scroll container instead.
    expect(scroller!.contains(overlay!)).toBe(false)
    expect(overlay!.parentElement).toBe(scroller!.parentElement)
  })

  it("does not render the overlay when not loading", () => {
    const { container } = renderTable(false)

    expect(container.querySelector(".cursor-progress")).toBeNull()
  })
})

describe("OneTable.Skeleton", () => {
  it("clips its fixed-size placeholder rows with an overflow-hidden container", () => {
    const { container } = zeroRender(<OneTable.Skeleton columns={3} />)

    const table = container.querySelector("table")

    expect(table).not.toBeNull()
    // The skeleton renders a fixed number of rows regardless of the space it
    // is given, so it must be clipped or it paints past short containers
    // (e.g. a small dashboard widget card).
    expect(table!.closest(".overflow-hidden")).not.toBeNull()
  })
})
