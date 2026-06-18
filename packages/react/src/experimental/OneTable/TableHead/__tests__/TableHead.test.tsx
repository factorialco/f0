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

describe("TableHead rich header info", () => {
  it("uses the column label as the info trigger's accessible name by default", () => {
    renderHeader({ render: () => <p>Body</p> })

    expect(
      screen.getByRole("button", { name: "Active headcount" })
    ).toBeInTheDocument()
  })

  it("uses info.label as the accessible name when provided", () => {
    renderHeader({ label: "About active headcount", render: () => <p>Body</p> })

    expect(
      screen.getByRole("button", { name: "About active headcount" })
    ).toBeInTheDocument()
  })

  it("renders the consumer-supplied content on hover", async () => {
    renderHeader({
      render: () => <p>Distinct active employees in the selected snapshot.</p>,
    })

    await userEvent.hover(
      screen.getByRole("button", { name: "Active headcount" })
    )

    expect(
      await screen.findByText(
        "Distinct active employees in the selected snapshot.",
        {},
        { timeout: 2000 }
      )
    ).toBeInTheDocument()
  })

  it("passes a close handle that dismisses the card, alongside the consumer action", async () => {
    const onAction = vi.fn()
    renderHeader({
      render: ({ close }) => (
        <button
          type="button"
          onClick={() => {
            close()
            onAction()
          }}
        >
          Learn more
        </button>
      ),
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
