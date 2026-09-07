import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen, waitFor } from "@/testing/test-utils"

import { ExportDropdown } from "../components/ExportDropdown/ExportDropdown"

describe("ExportDropdown", () => {
  it("renders the dropdown trigger button", () => {
    render(
      <ExportDropdown
        onExportExcel={vi.fn().mockResolvedValue(undefined)}
        isExporting={false}
      />
    )

    expect(
      screen.getByRole("button", { name: "Toggle dropdown menu" })
    ).toBeInTheDocument()
  })

  it("shows export label with format interpolation when opened", async () => {
    const user = userEvent.setup()
    render(
      <ExportDropdown
        onExportExcel={vi.fn().mockResolvedValue(undefined)}
        isExporting={false}
      />
    )

    await user.click(
      screen.getByRole("button", { name: "Toggle dropdown menu" })
    )

    expect(
      await screen.findByText("Export dashboard as Excel")
    ).toBeInTheDocument()
  })

  it("shows exporting state when opened", async () => {
    const user = userEvent.setup()
    render(
      <ExportDropdown
        onExportExcel={vi.fn().mockResolvedValue(undefined)}
        isExporting
      />
    )

    await user.click(
      screen.getByRole("button", { name: "Toggle dropdown menu" })
    )

    // While loading, the dropdown item swaps the label to "Exporting…" and is
    // disabled until isExporting flips back to false.
    const exportingItem = await screen.findByText("Exporting…")
    expect(exportingItem).toBeInTheDocument()
    expect(screen.getByRole("menuitem")).toHaveAttribute(
      "aria-disabled",
      "true"
    )
  })

  it("starts the dashboard export from the menu", async () => {
    const user = userEvent.setup()
    const onExportExcel = vi.fn().mockResolvedValue(undefined)
    render(<ExportDropdown onExportExcel={onExportExcel} isExporting={false} />)

    await user.click(
      screen.getByRole("button", { name: "Toggle dropdown menu" })
    )
    await user.click(await screen.findByText("Export dashboard as Excel"))

    await waitFor(() => expect(onExportExcel).toHaveBeenCalledTimes(1))
  })

  it("contains a rejected export without surfacing an unhandled rejection", async () => {
    const user = userEvent.setup()
    const onExportExcel = vi.fn().mockRejectedValue(new Error("Export failed"))
    render(<ExportDropdown onExportExcel={onExportExcel} isExporting={false} />)

    await user.click(
      screen.getByRole("button", { name: "Toggle dropdown menu" })
    )
    await user.click(await screen.findByText("Export dashboard as Excel"))

    await waitFor(() => expect(onExportExcel).toHaveBeenCalledTimes(1))
  })
})
