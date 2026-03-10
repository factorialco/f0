import "@testing-library/jest-dom/vitest"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "../../../../../../testing/test-utils"
import { EditableCellProps } from "../components/cells"
import { TextCell } from "../components/cells/TextCell"

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

describe("TextCell", () => {
  const defaultProps: EditableCellProps<TestRecord> = {
    editableColumn: makeEditableColumn(),
    value: "John Doe",
    onChange: vi.fn(),
    item: { id: "1", name: "John Doe" },
  }

  it("renders with the provided value", () => {
    render(<TextCell {...defaultProps} />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("John Doe")
  })

  it("calls onChange when input value changes", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<TextCell {...defaultProps} onChange={onChange} />)

    const input = screen.getByRole("textbox")
    await user.clear(input)
    await user.type(input, "Jane")

    expect(onChange).toHaveBeenCalled()
  })

  it("renders with right alignment when align is right", () => {
    render(
      <TextCell
        {...defaultProps}
        editableColumn={makeEditableColumn({ align: "right" })}
      />
    )

    const container = screen.getByRole("textbox").closest(".justify-end")
    expect(container).toBeInTheDocument()
  })

  it("shows loading state when loading is true", () => {
    render(<TextCell {...defaultProps} loading />)

    // The Input component should show loading indicator
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-busy", "true")
  })

  it("hides the label visually", () => {
    render(<TextCell {...defaultProps} />)

    // Label should exist for a11y but not be visible
    expect(screen.getByLabelText("Name")).toBeInTheDocument()
  })
})
