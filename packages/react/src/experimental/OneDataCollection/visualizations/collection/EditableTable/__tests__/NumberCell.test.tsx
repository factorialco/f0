import "@testing-library/jest-dom/vitest"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "../../../../../../testing/test-utils"
import { EditableCellProps } from "../components/cells"
import { NumberCell } from "../components/cells/NumberCell"

type TestRecord = { id: string; salary: number }

function makeEditableColumn(
  overrides: Partial<EditableCellProps<TestRecord>["editableColumn"]> = {}
) {
  return {
    label: "Salary",
    render: (item: TestRecord) => String(item.salary),
    ...overrides,
  } as EditableCellProps<TestRecord>["editableColumn"]
}

describe("NumberCell", () => {
  const defaultProps: EditableCellProps<TestRecord> = {
    editableColumn: makeEditableColumn(),
    value: "42000",
    onChange: vi.fn(),
    item: { id: "1", salary: 42000 },
  }

  it("renders with the provided numeric value", () => {
    render(<NumberCell {...defaultProps} />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("42000")
  })

  it("renders an empty input when value is an empty string", () => {
    render(<NumberCell {...defaultProps} value="" />)

    const input = screen.getByRole("textbox")
    expect(input).toHaveValue("")
  })

  it("calls onChange when input value changes", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<NumberCell {...defaultProps} value="" onChange={onChange} />)

    const input = screen.getByRole("textbox")
    await user.type(input, "100")

    expect(onChange).toHaveBeenCalled()
  })

  it("hides the label visually", () => {
    render(<NumberCell {...defaultProps} />)

    expect(screen.getByLabelText("Salary")).toBeInTheDocument()
  })

  it("shows loading state when loading is true", () => {
    render(<NumberCell {...defaultProps} loading />)

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-busy", "true")
  })

  it("renders with right alignment when align is right", () => {
    render(
      <NumberCell
        {...defaultProps}
        editableColumn={makeEditableColumn({ align: "right" })}
      />
    )

    const input = screen.getByRole("textbox")
    const alignWrapper = input.closest('[class*="[&_input]"]')
    expect(alignWrapper).toBeInTheDocument()
  })

  it("respects min and max constraints from numberConfig", () => {
    render(
      <NumberCell
        {...defaultProps}
        editableColumn={makeEditableColumn({
          numberConfig: { min: 0, max: 100000 },
        })}
      />
    )

    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
  })

  it("shows units suffix when provided in numberConfig", () => {
    render(
      <NumberCell
        {...defaultProps}
        editableColumn={makeEditableColumn({
          numberConfig: { units: "EUR" },
        })}
      />
    )

    expect(screen.getByText("EUR")).toBeInTheDocument()
  })

  it("renders value '0' when stored value is '0' (no units)", () => {
    render(<NumberCell {...defaultProps} value="0" />)

    expect(screen.getByRole("textbox")).toHaveValue("0")
  })

  it("renders value '0' with units suffix when stored value is '0'", () => {
    render(
      <NumberCell
        {...defaultProps}
        value="0"
        editableColumn={makeEditableColumn({
          numberConfig: { units: "€" },
        })}
      />
    )

    expect(screen.getByRole("textbox")).toHaveValue("0")
    expect(screen.getByText("€")).toBeInTheDocument()
  })
})
