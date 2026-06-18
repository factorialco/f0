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

const richInfo = (
  overrides: Partial<TableHeaderInfo> = {}
): TableHeaderInfo => ({
  title: "Active headcount",
  meta: "Per employee · Count distinct",
  description: "Distinct active employees in the selected snapshot.",
  ...overrides,
})

describe("TableHead rich header info", () => {
  it("exposes the info trigger with an accessible label from the title", () => {
    renderHeader(richInfo())

    expect(
      screen.getByRole("button", { name: "Active headcount" })
    ).toBeInTheDocument()
  })

  it("reveals the title, meta line and description on hover", async () => {
    renderHeader(richInfo())

    await userEvent.hover(
      screen.getByRole("button", { name: "Active headcount" })
    )

    expect(
      await screen.findByText(
        "Per employee · Count distinct",
        {},
        { timeout: 2000 }
      )
    ).toBeInTheDocument()
    expect(
      screen.getByText("Distinct active employees in the selected snapshot.")
    ).toBeInTheDocument()
  })

  it("fires the action and dismisses the card when the action is clicked", async () => {
    const onClick = vi.fn()
    renderHeader(richInfo({ action: { label: "Learn more", onClick } }))

    await userEvent.hover(
      screen.getByRole("button", { name: "Active headcount" })
    )
    const learnMore = await screen.findByRole(
      "button",
      { name: "Learn more" },
      { timeout: 2000 }
    )
    await userEvent.click(learnMore)

    expect(onClick).toHaveBeenCalledTimes(1)
    await waitFor(() =>
      expect(screen.queryByText("Learn more")).not.toBeInTheDocument()
    )
  })

  it("omits the action button when no action is provided", async () => {
    renderHeader(richInfo())

    await userEvent.hover(
      screen.getByRole("button", { name: "Active headcount" })
    )
    await screen.findByText(
      "Distinct active employees in the selected snapshot.",
      {},
      { timeout: 2000 }
    )

    expect(
      screen.queryByRole("button", { name: "Learn more" })
    ).not.toBeInTheDocument()
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
