import { describe, expect, it, vi } from "vitest"

import { Download } from "@/icons/app"
import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { ResourceHeader } from "../index"

describe("ResourceHeader", () => {
  it("renders a secondary dropdown action and calls the selected action", async () => {
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

    const [mainButton] = screen.getAllByRole("button", {
      name: "Export Excel",
    })
    await user.click(mainButton)

    expect(onExport).toHaveBeenCalledWith(
      "excel",
      expect.objectContaining({ value: "excel", label: "Export Excel" })
    )

    await user.click(screen.getAllByRole("button", { name: "More" })[0])

    expect(
      await screen.findByRole("menuitem", { name: "Export CSV" })
    ).toBeInTheDocument()
  })
})
