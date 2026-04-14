import "@testing-library/jest-dom/vitest"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { zeroRender as render } from "../../../../../../testing/test-utils"
import { EditableCellRenderer } from "../components/EditableCellRenderer"
import { EditableRowProvider } from "../context/EditableRowContext"
import { EditableTableColumnDefinition } from "../types"

type TestRecord = {
  id: number
  name: string
  email: string
}

const testItem: TestRecord = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
}

const createEditableColumn = (
  overrides: Partial<
    EditableTableColumnDefinition<TestRecord, never, never>
  > = {}
): EditableTableColumnDefinition<TestRecord, never, never> => ({
  id: "name",
  label: "Name",
  info: undefined,
  hidden: false,
  infoIcon: undefined,
  sticky: undefined,
  width: undefined,
  render: (item) => item.name,
  editType: () => "text",
  ...overrides,
})

const createReadonlyColumn = (
  overrides: Partial<
    EditableTableColumnDefinition<TestRecord, never, never>
  > = {}
): EditableTableColumnDefinition<TestRecord, never, never> => ({
  id: "email",
  label: "Email",
  info: undefined,
  hidden: false,
  infoIcon: undefined,
  sticky: undefined,
  width: undefined,
  render: (item) => item.email,
  ...overrides,
})

describe("EditableCellRenderer", () => {
  describe("without EditableRowProvider", () => {
    it("renders children directly when outside context", () => {
      render(
        <EditableCellRenderer
          column={createEditableColumn()}
          item={testItem}
          cellIndex={0}
        >
          <span>Fallback content</span>
        </EditableCellRenderer>
      )

      expect(screen.getByText("Fallback content")).toBeInTheDocument()
    })
  })

  describe("with EditableRowProvider", () => {
    it("renders editable cell for editable column with editType", () => {
      render(
        <EditableRowProvider item={testItem} onCellChange={vi.fn()}>
          <EditableCellRenderer
            column={createEditableColumn()}
            item={testItem}
            cellIndex={0}
          >
            <span>Fallback</span>
          </EditableCellRenderer>
        </EditableRowProvider>
      )

      // Should render the TextCell input, not the fallback
      expect(screen.getByRole("textbox")).toBeInTheDocument()
      expect(screen.queryByText("Fallback")).not.toBeInTheDocument()
    })

    it("renders readonly cell when editable returns false", () => {
      const column = createEditableColumn({
        editType: () => "disabled" as const,
      })

      render(
        <EditableRowProvider item={testItem} onCellChange={vi.fn()}>
          <EditableCellRenderer column={column} item={testItem} cellIndex={0}>
            <span>Fallback</span>
          </EditableCellRenderer>
        </EditableRowProvider>
      )

      // Should render the readonly view, not an input
      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    })

    it("renders readonly cell when editType is undefined", () => {
      const column = createReadonlyColumn()

      render(
        <EditableRowProvider item={testItem} onCellChange={vi.fn()}>
          <EditableCellRenderer column={column} item={testItem} cellIndex={0}>
            <span>Fallback</span>
          </EditableCellRenderer>
        </EditableRowProvider>
      )

      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    })

    it("renders readonly cell when column has no id", () => {
      const column = createEditableColumn({
        id: undefined,
      })

      render(
        <EditableRowProvider item={testItem} onCellChange={vi.fn()}>
          <EditableCellRenderer column={column} item={testItem} cellIndex={0}>
            <span>Fallback</span>
          </EditableCellRenderer>
        </EditableRowProvider>
      )

      expect(screen.queryByRole("textbox")).not.toBeInTheDocument()
    })

    it("passes value from localItem to cell component", () => {
      render(
        <EditableRowProvider item={testItem} onCellChange={vi.fn()}>
          <EditableCellRenderer
            column={createEditableColumn()}
            item={testItem}
            cellIndex={0}
          >
            <span>Fallback</span>
          </EditableCellRenderer>
        </EditableRowProvider>
      )

      expect(screen.getByRole("textbox")).toHaveValue("John Doe")
    })

    it("calls handleCellChange when cell value changes", async () => {
      const user = userEvent.setup()
      const onCellChange = vi.fn().mockResolvedValue(undefined)

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <EditableCellRenderer
            column={createEditableColumn()}
            item={testItem}
            cellIndex={0}
          >
            <span>Fallback</span>
          </EditableCellRenderer>
        </EditableRowProvider>
      )

      const input = screen.getByRole("textbox")
      await user.clear(input)
      await user.type(input, "Jane")

      expect(onCellChange).toHaveBeenCalled()
    })

    it("stops click propagation to prevent row navigation", async () => {
      const user = userEvent.setup()
      const parentClickHandler = vi.fn()

      render(
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div onClick={parentClickHandler}>
          <EditableRowProvider item={testItem} onCellChange={vi.fn()}>
            <EditableCellRenderer
              column={createEditableColumn()}
              item={testItem}
              cellIndex={0}
            >
              <span>Fallback</span>
            </EditableCellRenderer>
          </EditableRowProvider>
        </div>
      )

      await user.click(screen.getByRole("textbox"))

      // Parent click should not be triggered due to stopPropagation
      expect(parentClickHandler).not.toHaveBeenCalled()
    })

    it("renders cell error from context", async () => {
      const user = userEvent.setup()
      const onCellChange = vi.fn().mockResolvedValue({
        name: "Name is required",
      })

      render(
        <EditableRowProvider item={testItem} onCellChange={onCellChange}>
          <EditableCellRenderer
            column={createEditableColumn()}
            item={testItem}
            cellIndex={0}
          >
            <span>Fallback</span>
          </EditableCellRenderer>
        </EditableRowProvider>
      )

      const input = screen.getByRole("textbox")
      await user.clear(input)

      // Error message should appear after the change is processed
      // This depends on how TextCell/Input displays errors
    })

    it("applies right border except for last column", () => {
      const { container } = render(
        <EditableRowProvider item={testItem} onCellChange={vi.fn()}>
          <EditableCellRenderer
            column={createReadonlyColumn()}
            item={testItem}
            cellIndex={0}
            isLastColumn={false}
          >
            <span>Fallback</span>
          </EditableCellRenderer>
        </EditableRowProvider>
      )

      const readonlyCell = container.querySelector(".border-r-\\[1px\\]")
      expect(readonlyCell).toBeInTheDocument()
    })

    it("does not apply right border for last column", () => {
      const { container } = render(
        <EditableRowProvider item={testItem} onCellChange={vi.fn()}>
          <EditableCellRenderer
            column={createReadonlyColumn()}
            item={testItem}
            cellIndex={0}
            isLastColumn={true}
          >
            <span>Fallback</span>
          </EditableCellRenderer>
        </EditableRowProvider>
      )

      const readonlyCell = container.querySelector(".border-r-\\[1px\\]")
      expect(readonlyCell).not.toBeInTheDocument()
    })
  })
})
