import { describe, expect, it, vi } from "vitest"

import { Download } from "@/icons/app"
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

  it("renders a history button when onHistoryClick is set and calls it", async () => {
    const user = userEvent.setup()
    const onHistoryClick = vi.fn()

    render(<ResourceHeader title="Payroll" onHistoryClick={onHistoryClick} />)

    // The action row is duplicated into a mobile and a desktop cluster, so
    // assert on at least one rather than pinning that duplication. The last one
    // is the desktop instance.
    const historyButtons = screen.getAllByRole("button", { name: "History" })
    expect(historyButtons.length).toBeGreaterThan(0)

    await user.click(historyButtons[historyButtons.length - 1])
    expect(onHistoryClick).toHaveBeenCalledTimes(1)
  })

  it("omits the history button when onHistoryClick is not set", () => {
    render(<ResourceHeader title="Payroll" />)

    expect(screen.queryByRole("button", { name: "History" })).toBeNull()
  })

  describe("collapsed", () => {
    const metadata = [
      {
        label: "Location",
        value: { type: "text" as const, content: "Barcelona" },
      },
    ]

    const renderHeader = (collapsed: boolean) =>
      render(
        <ResourceHeader
          title="René Galindo"
          avatar={{ type: "person", firstName: "René", lastName: "Galindo" }}
          metadata={metadata}
          collapsed={collapsed}
        />
      )

    /** Sizes are interpolated inline, so read the style rather than a class. */
    const avatarBox = (container: HTMLElement) =>
      container.querySelector<HTMLElement>('[style*="width"]')

    it("sets the name at the large heading type and the avatar at 56px when open", () => {
      const { container } = renderHeader(false)

      expect(screen.getByText("René Galindo").style.fontSize).toBe("22px")
      expect(avatarBox(container)?.style.width).toBe("56px")
    })

    it("steps the name down to the heading type and the avatar down two sizes", () => {
      const { container } = renderHeader(true)

      // 22px down to 16px, the heading type.
      expect(screen.getByText("René Galindo").style.fontSize).toBe("16px")
      // xl's 56px down to md's 32px, two steps down the avatar scale.
      expect(avatarBox(container)?.style.width).toBe("32px")
    })

    it("takes a number to follow a scroll, and lands between the two", () => {
      const { container } = render(
        <ResourceHeader
          title="René Galindo"
          avatar={{ type: "person", firstName: "René", lastName: "Galindo" }}
          metadata={metadata}
          collapsed={0.5}
        />
      )

      expect(screen.getByText("René Galindo").style.fontSize).toBe("19px")
      expect(avatarBox(container)?.style.width).toBe("44px")
      // Following a gesture, so nothing is eased: every size is a function of
      // the same progress and they have to land on the same frame.
      expect(
        container.querySelector(".resource-header")?.className
      ).not.toContain("transition-")
    })

    /** One row per breakpoint: the header renders a mobile and a desktop one. */
    const metadataRows = (container: HTMLElement) =>
      // Matched by the interpolated row rather than a class: the desktop one is
      // `hidden md:grid`, so tailwind-merge drops its plain `grid`.
      [...container.querySelectorAll<HTMLElement>("div")].filter(
        (row) => row.style.gridTemplateRows
      )

    it("collapses the metadata rows and takes them out of the reading order", () => {
      const { container } = renderHeader(true)

      const rows = metadataRows(container)
      expect(rows).toHaveLength(2)
      rows.forEach((row) => {
        expect(row.style.gridTemplateRows).toBe("0fr")
        expect(row.getAttribute("aria-hidden")).toBe("true")
        expect(row.firstElementChild).toHaveStyle({ opacity: "0" })
      })
      // The values stay in the DOM, so the rows can open back up.
      expect(screen.getAllByText("Barcelona")).toHaveLength(2)
    })

    it("keeps the metadata open and exposed by default", () => {
      const { container } = render(
        <ResourceHeader title="René Galindo" metadata={metadata} />
      )

      const rows = metadataRows(container)
      expect(rows).toHaveLength(2)
      rows.forEach((row) => {
        expect(row.style.gridTemplateRows).toBe("1fr")
        expect(row.getAttribute("aria-hidden")).toBeNull()
      })
    })

    it("fades the metadata out ahead of the collapse finishing", () => {
      const { container } = render(
        <ResourceHeader
          title="René Galindo"
          metadata={metadata}
          collapsed={0.5}
        />
      )

      const [row] = metadataRows(container)
      // Half collapsed, already most of the way faded.
      expect(row.style.gridTemplateRows).toBe("0.5fr")
      expect(row.firstElementChild).toHaveStyle({ opacity: "0.2" })
    })
  })
})
