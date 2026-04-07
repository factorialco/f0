import "@testing-library/jest-dom/vitest"
import { fireEvent, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "../../../../../../testing/test-utils"
import { EditableCellProps } from "../components/cells"
import { SelectCell } from "../components/cells/SelectCell"

type TestRecord = { id: string; role: string }

const staticOptions = [
  { value: "dev", label: "Developer" },
  { value: "des", label: "Designer" },
]

function makeSelectColumn(
  overrides: Partial<EditableCellProps<TestRecord>["editableColumn"]> = {}
) {
  return {
    id: "role",
    label: "Role",
    render: (item: TestRecord) => item.role,
    editType: () => "select" as const,
    selectConfig: { options: staticOptions },
    ...overrides,
  } as EditableCellProps<TestRecord>["editableColumn"]
}

const testItem: TestRecord = { id: "1", role: "dev" }

describe("SelectCell", () => {
  globalThis.ResizeObserver = class MockResizeObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  } as typeof ResizeObserver

  beforeEach(() => {
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
      value: 800,
    })
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      value: 800,
    })
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
      () => ({
        width: 120,
        height: 120,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0,
        toJSON: () => {},
      })
    )
  })

  const openSelect = async (user: ReturnType<typeof userEvent.setup>) => {
    await user.click(screen.getByRole("combobox"))
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument())
    fireEvent.animationStart(screen.getByRole("listbox"))
  }

  const defaultProps: EditableCellProps<TestRecord> = {
    editableColumn: makeSelectColumn(),
    value: "dev",
    onChange: vi.fn(),
    item: testItem,
  }

  it("renders F0Select with static options", async () => {
    const user = userEvent.setup()
    render(<SelectCell {...defaultProps} />)

    expect(screen.getByRole("combobox")).toBeInTheDocument()

    await openSelect(user)

    const listbox = screen.getByRole("listbox")
    expect(within(listbox).getByText("Developer")).toBeInTheDocument()
    expect(within(listbox).getByText("Designer")).toBeInTheDocument()
  })

  it("renders F0Select with source config", () => {
    const sourceConfig = {
      source: {
        dataAdapter: {
          fetchData: vi.fn().mockResolvedValue({ records: [], totalCount: 0 }),
          paginationType: "no-pagination" as const,
        },
        filters: {},
        currentFilters: {},
      },
      mapOptions: (record: { id: string; name: string }) => ({
        value: String(record.id),
        label: record.name,
      }),
    }

    render(
      <SelectCell
        {...defaultProps}
        editableColumn={makeSelectColumn({ selectConfig: sourceConfig })}
      />
    )

    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })

  it("calls onChange exactly once when selecting a new value", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<SelectCell {...defaultProps} value="" onChange={onChange} />)

    await openSelect(user)
    await user.click(screen.getByText("Developer"))

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith("dev")
  })

  it("does not call onChange when selecting the same value", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<SelectCell {...defaultProps} value="dev" onChange={onChange} />)

    await openSelect(user)
    const listbox = screen.getByRole("listbox")
    await user.click(within(listbox).getByText("Developer"))

    expect(onChange).not.toHaveBeenCalled()
  })

  it("renders non-editable fallback when selectConfig is missing", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})

    render(
      <SelectCell
        {...defaultProps}
        editableColumn={makeSelectColumn({ selectConfig: undefined })}
      />
    )

    expect(screen.queryByRole("combobox")).not.toBeInTheDocument()
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('has editType "select" but no selectConfig')
    )

    warnSpy.mockRestore()
  })
})
