import { describe, expect, it, vi } from "vitest"

import { Download } from "@/icons/app"
import { HeaderCollapseProvider } from "@/lib/providers/headerCollapse"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { ResourceHeader } from "../index"

describe("ResourceHeader", () => {
  it("renders secondary dropdown actions and calls the selected actions", async () => {
    const user = userEvent.setup()
    const onExport = vi.fn()

    render(
      <ResourceHeader
        title="Reports"
        secondaryActions={[
          {
            items: [
              { value: "excel", label: "Export Excel", icon: Download },
              { value: "csv", label: "Export CSV", icon: Download },
            ],
            value: "excel",
            onClick: onExport,
          },
        ]}
      />
    )

    const mainButtons = screen.getAllByRole("button", {
      name: "Export Excel",
    })
    const menuButtons = screen.getAllByTestId("button-menu")

    expect(mainButtons).toHaveLength(2)
    expect(menuButtons).toHaveLength(2)

    await user.click(mainButtons[0])

    expect(onExport).toHaveBeenCalledWith(
      "excel",
      expect.objectContaining({ value: "excel", label: "Export Excel" })
    )

    await user.click(mainButtons[1])

    expect(onExport).toHaveBeenCalledWith(
      "excel",
      expect.objectContaining({ value: "excel", label: "Export Excel" })
    )

    onExport.mockClear()

    await user.click(menuButtons[0])

    const firstCsvOption = await screen.findByRole("menuitem", {
      name: "Export CSV",
    })
    await user.click(firstCsvOption)

    await vi.waitFor(() =>
      expect(onExport).toHaveBeenCalledWith(
        "csv",
        expect.objectContaining({ value: "csv", label: "Export CSV" })
      )
    )

    onExport.mockClear()

    await user.click(menuButtons[1])

    const secondCsvOption = await screen.findByRole("menuitem", {
      name: "Export CSV",
    })
    await user.click(secondCsvOption)

    await vi.waitFor(() =>
      expect(onExport).toHaveBeenCalledWith(
        "csv",
        expect.objectContaining({ value: "csv", label: "Export CSV" })
      )
    )
  })

  describe("collapse", () => {
    const titleOf = (name: string) => screen.getByText(name)

    it("renders open by default", () => {
      render(<ResourceHeader title="Payroll" />)

      expect(titleOf("Payroll").style.fontSize).toBe("22px")
    })

    it("renders condensed when told to", () => {
      render(<ResourceHeader title="Payroll" collapsed />)

      expect(titleOf("Payroll").style.fontSize).toBe("16px")
    })

    it("follows a container driving the collapse, with no prop passed", () => {
      // The path every resource page in the product takes: `Page` provides the
      // progress and the header picks it up straight through this wrapper.
      render(
        <HeaderCollapseProvider progress={1}>
          <ResourceHeader title="Payroll" />
        </HeaderCollapseProvider>
      )

      expect(titleOf("Payroll").style.fontSize).toBe("16px")
    })
  })
})
