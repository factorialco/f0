import { fireEvent, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { GroupHeader } from "../GroupHeader"

describe("GroupHeader", () => {
  it("renders with basic props", () => {
    render(<GroupHeader label="Test Group" itemCount={5} />)

    expect(screen.getByText("Test Group")).toBeInTheDocument()
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("renders with async label and itemCount", async () => {
    const labelPromise = Promise.resolve("Async Group")
    const countPromise = Promise.resolve(10)

    render(<GroupHeader label={labelPromise} itemCount={countPromise} />)

    const skeletons = screen.getAllByTestId("skeleton")
    expect(skeletons).toHaveLength(2)

    await vi.waitFor(() => {
      expect(screen.queryAllByTestId("skeleton")).toHaveLength(0)
    })
    expect(screen.getByText("Async Group")).toBeInTheDocument()
    expect(screen.getByText("10")).toBeInTheDocument()
  })

  it("handles open/close state", () => {
    const onOpenChange = vi.fn()
    render(
      <GroupHeader
        label="Test Group"
        itemCount={5}
        open={false}
        onOpenChange={onOpenChange}
        showOpenChange
      />
    )

    const header = screen.getByText("Test Group").closest("div")
    fireEvent.click(header!)

    expect(onOpenChange).toHaveBeenCalledWith(true)
  })

  it("handles selection state", () => {
    const onSelectChange = vi.fn()
    render(
      <GroupHeader
        label="Test Group"
        itemCount={5}
        selectable
        select={false}
        onSelectChange={onSelectChange}
      />
    )

    const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)

    expect(onSelectChange).toHaveBeenCalledWith(true)
  })

  it("applies custom className", () => {
    render(
      <GroupHeader label="Test Group" itemCount={5} className="custom-class" />
    )

    const header = screen.getByText("Test Group").closest("div")
    expect(header).toHaveClass("custom-class")
  })

  it("doesn't show counter when itemCount is undefined", async () => {
    const countPromise = Promise.resolve(undefined)
    render(<GroupHeader label="Test Group" itemCount={countPromise} />)

    await vi.waitFor(() => {
      expect(screen.queryByRole("status")).not.toBeInTheDocument()
    })
  })

  it("renders chevron after label by default (trailing)", () => {
    render(
      <GroupHeader
        label="Test Group"
        itemCount={5}
        showOpenChange
        open={false}
      />
    )

    const label = screen.getByText("Test Group")
    const chevron = screen.getByTestId("group-header-chevron")
    expect(
      label.compareDocumentPosition(chevron) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("renders chevron before label when chevronPosition is leading", () => {
    render(
      <GroupHeader
        label="Test Group"
        itemCount={5}
        showOpenChange
        open={false}
        chevronPosition="leading"
      />
    )

    const label = screen.getByText("Test Group")
    const chevron = screen.getByTestId("group-header-chevron")
    expect(
      label.compareDocumentPosition(chevron) & Node.DOCUMENT_POSITION_PRECEDING
    ).toBeTruthy()
  })

  it("supports keyboard activation with Enter and Space", () => {
    const onOpenChange = vi.fn()

    render(
      <GroupHeader
        label="Test Group"
        itemCount={5}
        open={false}
        onOpenChange={onOpenChange}
        showOpenChange
      />
    )

    const header = screen
      .getByText("Test Group")
      .closest("[role='button']") as HTMLElement

    fireEvent.keyDown(header, { key: "Enter" })
    expect(onOpenChange).toHaveBeenCalledWith(true)

    onOpenChange.mockClear()
    fireEvent.keyDown(header, { key: " " })
    expect(onOpenChange).toHaveBeenCalledTimes(1)
  })
})
