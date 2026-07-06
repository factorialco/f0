import "@testing-library/jest-dom/vitest"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import InfoCircleLine from "@/icons/app/InfoCircleLine"

import { zeroRender as render } from "../../../../../../testing/test-utils"
import { EditableCellProps } from "../components/cells"
import { NonEditableCell } from "../components/cells/status/NonEditableCell"

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

describe("NonEditableCell", () => {
  const defaultProps: EditableCellProps<TestRecord> = {
    editableColumn: makeEditableColumn(),
    value: "John Doe",
    onChange: vi.fn(),
    item: { id: "1", name: "John Doe" },
  }

  it("renders the cell value", () => {
    render(<NonEditableCell {...defaultProps} />)

    expect(screen.getByText("John Doe")).toBeInTheDocument()
  })

  it("applies default cursor", () => {
    const { container } = render(<NonEditableCell {...defaultProps} />)
    expect(container.firstChild).toHaveClass("cursor-default")
  })

  it("renders the hint icon after the cell content", () => {
    render(
      <NonEditableCell
        {...defaultProps}
        hint={{ icon: InfoCircleLine, message: "Backfilling Jane's position" }}
      />
    )

    const button = screen.getByRole("button", {
      name: "Backfilling Jane's position",
    })
    const content = screen.getByText("John Doe")
    expect(
      content.compareDocumentPosition(button) & Node.DOCUMENT_POSITION_FOLLOWING
    ).toBeTruthy()
  })

  it("renders a hint icon when hint is provided", () => {
    render(
      <NonEditableCell
        {...defaultProps}
        hint={{ icon: InfoCircleLine, message: "Backfilling Jane's position" }}
      />
    )

    expect(
      screen.getByRole("button", { name: "Backfilling Jane's position" })
    ).toBeInTheDocument()
  })

  it("does not render a hint icon when hint is omitted", () => {
    render(<NonEditableCell {...defaultProps} />)

    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("shows the hint tooltip on hover", async () => {
    const user = userEvent.setup()

    render(
      <NonEditableCell
        {...defaultProps}
        hint={{ icon: InfoCircleLine, message: "Backfilling Jane's position" }}
      />
    )

    const trigger = screen.getByRole("button", {
      name: "Backfilling Jane's position",
    })
    await user.hover(trigger)

    const tooltip = await screen.findByRole("tooltip", {}, { timeout: 1000 })
    expect(tooltip).toHaveTextContent("Backfilling Jane's position")
  })
})
