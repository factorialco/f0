import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import type { F0FormEditableTableColumn } from "../types"

import { F0FormEditableTable } from "../F0FormEditableTable"

type Row = { id: string; title: string; archived?: boolean }

const columns: F0FormEditableTableColumn<Row>[] = [
  { id: "title", label: "Title", editType: () => "text" as const },
]

const items: Row[] = [
  { id: "1", title: "One" },
  { id: "2", title: "Two" },
]

describe("F0FormEditableTable", () => {
  it("renders a header and a row per item, plus the add button", () => {
    render(
      <F0FormEditableTable<Row>
        items={items}
        columns={columns}
        onCellChange={async () => {}}
        addRow={{ label: "Add row", onClick: () => {} }}
      />
    )

    expect(
      screen.getByRole("columnheader", { name: "Title" })
    ).toBeInTheDocument()
    expect(screen.getByDisplayValue("One")).toBeInTheDocument()
    expect(screen.getByDisplayValue("Two")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Add row" })).toBeInTheDocument()
  })

  it("disables the add button when addRow.disabled is set", () => {
    render(
      <F0FormEditableTable<Row>
        items={items}
        columns={columns}
        onCellChange={async () => {}}
        addRow={{ label: "Add row", onClick: () => {}, disabled: true }}
      />
    )
    expect(screen.getByRole("button", { name: "Add row" })).toBeDisabled()
  })

  it("calls onRemoveRow with the row", async () => {
    const onRemoveRow = vi.fn()
    render(
      <F0FormEditableTable<Row>
        items={items}
        columns={columns}
        onCellChange={async () => {}}
        onRemoveRow={onRemoveRow}
      />
    )

    const removeButtons = screen.getAllByRole("button", { name: "Remove row" })
    await userEvent.click(removeButtons[0])
    expect(onRemoveRow).toHaveBeenCalledWith(items[0], 0)
  })

  it("renders custom row actions and calls their onClick", async () => {
    const onArchive = vi.fn()
    render(
      <F0FormEditableTable<Row>
        items={items}
        columns={columns}
        onCellChange={async () => {}}
        rowActions={(item) => [
          {
            icon: () => null,
            label: "Archive",
            onClick: () => onArchive(item),
          },
        ]}
      />
    )

    const archiveButtons = screen.getAllByRole("button", { name: "Archive" })
    expect(archiveButtons).toHaveLength(2)
    await userEvent.click(archiveButtons[1])
    expect(onArchive).toHaveBeenCalledWith(items[1])
  })

  it("applies the critical error ring to a cell flagged by getCellError", () => {
    render(
      <F0FormEditableTable<Row>
        items={[items[0]]}
        columns={columns}
        onCellChange={async () => {}}
        getCellError={(_item, columnId) =>
          columnId === "title" ? "Title is required" : undefined
        }
      />
    )
    // getCellError puts a critical inset ring on the cell's <td>.
    const titleCell = screen.getByDisplayValue("One").closest("td")!
    expect(titleCell.className).toMatch(/critical-50/)
  })
})
