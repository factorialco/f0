import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { OneTable, TableBody, TableCell, TableRow } from "../../index"

// A hover utility Tailwind v3 actually compiles: the trailing-`!` v4 form
// generates no CSS, and tailwind-merge still drops the plain utility it reads
// as conflicting, so a sticky row silently ends up with no hover at all.
const COMPILABLE_HOVER = /hover:!?bg-f1-background-hover(?!!)/

const renderRow = (sticky: boolean) => {
  zeroRender(
    <OneTable>
      <TableBody>
        <TableRow sticky={sticky}>
          <TableCell>Engineering</TableCell>
        </TableRow>
      </TableBody>
    </OneTable>
  )

  return screen.getByText("Engineering").closest("tr")
}

describe("TableRow hover background", () => {
  it("greys a plain row on hover", () => {
    expect(renderRow(false)?.className).toMatch(COMPILABLE_HOVER)
  })

  it("greys a sticky row on hover, over its opaque background", () => {
    const row = renderRow(true)

    expect(row?.className).toContain("bg-f1-background")
    expect(row?.className).toMatch(COMPILABLE_HOVER)
  })
})
