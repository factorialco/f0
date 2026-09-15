import { describe, expect, it } from "vitest"
import { screen, zeroRender } from "@/testing/test-utils"
import { OneTable, TableBody, TableCell, TableRow } from "../.."

// A hover utility Tailwind v3 actually compiles: the trailing-`!` v4 form
// generates no CSS, and tailwind-merge still drops the plain utility it reads
// as conflicting, so a sticky row silently ends up with no hover at all.
const COMPILABLE_HOVER = /hover:!?bg-f1-background-hover(?!!)/

// `bg-f1-background-hover` is a 4%-alpha tint. Owning `background-color` is
// right for a plain row — it tints the page behind it — but a sticky row is
// lifted above the rows scrolling underneath, which would then show through it.
const OPAQUE_HOVER_BACKGROUND = "hover:bg-f1-background"
const HOVER_TINT_LAYER =
  "hover:bg-[linear-gradient(hsl(var(--neutral-5)),hsl(var(--neutral-5)))]"

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
    expect(row?.className).toContain(HOVER_TINT_LAYER)
  })

  it("keeps a sticky row opaque while hovered", () => {
    const row = renderRow(true)

    // The alpha tint must not survive as the row's hover `background-color`:
    // that is what let the rows scrolling underneath read through the pinned
    // parent row of a nested table.
    expect(row?.className).toContain(OPAQUE_HOVER_BACKGROUND)
    expect(row?.className).not.toMatch(COMPILABLE_HOVER)
  })
})
