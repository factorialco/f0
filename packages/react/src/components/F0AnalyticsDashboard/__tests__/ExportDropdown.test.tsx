import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { zeroRender as render, screen } from "@/testing/test-utils"

import { ExportDropdown } from "../components/ExportDropdown/ExportDropdown"

describe("ExportDropdown", () => {
  it("renders the dropdown trigger button", () => {
    render(<ExportDropdown onExportExcel={vi.fn()} isExporting={false} />)

    expect(
      screen.getByRole("button", { name: "Toggle dropdown menu" })
    ).toBeInTheDocument()
  })

  it("shows export label with format interpolation when opened", async () => {
    const user = userEvent.setup()
    render(<ExportDropdown onExportExcel={vi.fn()} isExporting={false} />)

    await user.click(
      screen.getByRole("button", { name: "Toggle dropdown menu" })
    )

    expect(
      await screen.findByText("Export dashboard as Excel")
    ).toBeInTheDocument()
  })

  it("shows exporting state when opened", async () => {
    const user = userEvent.setup()
    render(<ExportDropdown onExportExcel={vi.fn()} isExporting={true} />)

    await user.click(
      screen.getByRole("button", { name: "Toggle dropdown menu" })
    )

    expect(await screen.findByText("Exporting...")).toBeInTheDocument()
  })
})
