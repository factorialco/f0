import "@testing-library/jest-dom/vitest"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import InfoCircleLine from "@/icons/app/InfoCircleLine"

import { zeroRender as render } from "../../../../../../testing/test-utils"
import { EditableCellProps } from "../components/cells"
import { DisabledCell } from "../components/cells/status/DisabledCell"

type TestRecord = { id: string; name: string }

function makeEditableColumn(
  overrides: Partial<EditableCellProps<TestRecord>["editableColumn"]> = {}
) {
  return {
    label: "Name",
    render: (item: TestRecord) => item.name,
    ...overrides,
  } as EditableCellProps<TestRecord>["editableColumn"]
}

describe("DisabledCell", () => {
  const defaultProps: EditableCellProps<TestRecord> = {
    editableColumn: makeEditableColumn(),
    value: "John Doe",
    onChange: vi.fn(),
    item: { id: "1", name: "John Doe" },
  }

  it("renders the cell value", () => {
    render(<DisabledCell {...defaultProps} />)

    expect(screen.getByText("John Doe")).toBeInTheDocument()
  })

  it("applies not-allowed cursor", () => {
    const { container } = render(<DisabledCell {...defaultProps} />)
    expect(container.firstChild).toHaveClass("cursor-not-allowed")
  })

  it("renders a hint icon when hint is provided", () => {
    render(
      <DisabledCell
        {...defaultProps}
        hint={{ icon: InfoCircleLine, message: "Locked by policy" }}
      />
    )

    expect(
      screen.getByRole("button", { name: "Locked by policy" })
    ).toBeInTheDocument()
  })

  it("renders the hint icon after the cell content", () => {
    render(
      <DisabledCell
        {...defaultProps}
        hint={{ icon: InfoCircleLine, message: "Locked by policy" }}
      />
    )

    const button = screen.getByRole("button", { name: "Locked by policy" })
    const content = screen.getByText("John Doe")
    expect(
      content.compareDocumentPosition(button) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("does not render a hint icon when hint is omitted", () => {
    render(<DisabledCell {...defaultProps} />)

    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("shows the hint tooltip on hover", async () => {
    const user = userEvent.setup()

    render(
      <DisabledCell
        {...defaultProps}
        hint={{ icon: InfoCircleLine, message: "Locked by policy" }}
      />
    )

    const trigger = screen.getByRole("button", { name: "Locked by policy" })
    await user.hover(trigger)

    const tooltip = await screen.findByRole("tooltip", {}, { timeout: 1000 })
    expect(tooltip).toHaveTextContent("Locked by policy")
  })
})
