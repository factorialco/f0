import { describe, expect, it, vi } from "vitest"
import { Download } from "@/icons/app"
import {
  act,
  zeroRender as render,
  screen,
  userEvent,
} from "@/testing/test-utils"
import { F0ResourceHeader } from ".."

describe("F0ResourceHeader", () => {
  it("renders secondary dropdown actions and calls the selected actions", async () => {
    const user = userEvent.setup()
    const onExport = vi.fn()

    render(
      <F0ResourceHeader
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
  it("renders a plain string description as text", () => {
    render(<F0ResourceHeader title="Reports" description="Quarterly revenue" />)

    // Twice: the visible copy plus the hidden one that measures unclamped height.
    expect(screen.getAllByText("Quarterly revenue")).toHaveLength(2)
  })

  it("renders a markdown link in the description", () => {
    render(
      <F0ResourceHeader
        title="Reports"
        description="See the [rubric](https://example.com/rubric)"
      />
    )

    // Only the visible copy reaches the a11y tree, not the measure clone.
    expect(screen.getAllByRole("link")).toHaveLength(1)
    expect(screen.getByRole("link", { name: "rubric" })).toHaveAttribute(
      "href",
      "https://example.com/rubric"
    )
  })

  it("leaves an unclamped description alone when focus enters it", async () => {
    render(
      <F0ResourceHeader
        title="Reports"
        description="See the [rubric](https://example.com/rubric)"
      />
    )

    // Focus expands a clamped description; one that always fit hid nothing, so
    // it must not raise a "show less" toggle over nothing.
    await act(async () => {
      screen.getByRole("link", { name: "rubric" }).focus()
    })

    expect(
      screen.queryByRole("button", { name: /show/i })
    ).not.toBeInTheDocument()
  })
})
