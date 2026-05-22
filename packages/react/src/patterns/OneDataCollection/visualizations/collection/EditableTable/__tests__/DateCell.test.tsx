import "@testing-library/jest-dom/vitest"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "../../../../../../testing/test-utils"

import type { EditableCellProps } from "../components/cells"
import { DateCell } from "../components/cells/DateCell"

type TestRecord = { id: string; startDate?: string }

const f0DatePickerMock = vi.fn()

vi.mock("@/components/F0DatePicker", () => ({
  F0DatePicker: (props: unknown) => {
    f0DatePickerMock(props)
    return <div data-testid="f0-date-picker-mock" />
  },
}))

function makeEditableColumn(
  overrides: Partial<EditableCellProps<TestRecord>["editableColumn"]> = {}
) {
  return {
    label: "Start date",
    render: (item: TestRecord) => item.startDate ?? "",
    ...overrides,
  } as EditableCellProps<TestRecord>["editableColumn"]
}

describe("DateCell", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const defaultProps: EditableCellProps<TestRecord> = {
    editableColumn: makeEditableColumn(),
    value: "",
    onChange: vi.fn(),
    item: { id: "1", startDate: "" },
  }

  it("forwards minDate and maxDate from dateConfig to F0DatePicker", () => {
    const minDate = new Date(2026, 0, 1)
    const maxDate = new Date(2026, 0, 31)

    render(
      <DateCell
        {...defaultProps}
        editableColumn={makeEditableColumn({
          dateConfig: { minDate, maxDate },
        })}
      />
    )

    const pickerProps = f0DatePickerMock.mock.calls.at(-1)?.[0] as {
      minDate?: Date
      maxDate?: Date
    }

    expect(pickerProps.minDate).toBe(minDate)
    expect(pickerProps.maxDate).toBe(maxDate)
  })
})
