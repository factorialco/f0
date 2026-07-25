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
    expect(table!.closest(".overflow-hidden")).not.toBeNull()
  })
})
