import { useState } from "react"

import { describe, expect, it, vi } from "vitest"

import {
  screen,
  userEvent,
  within,
  zeroRender as render,
} from "@/testing/test-utils"

import { DataCollectionSettingsProvider } from "../../../../../Settings/SettingsProvider"
import { SettingsRenderer } from "../SettingsRenderer"

const columns = [
  { id: "name", label: "Name", render: () => "Ada Lovelace" },
  { id: "email", label: "Email", render: () => "ada@example.com" },
]

describe("Table SettingsRenderer column locking", () => {
  it("enforces a read-only lockedColumnId without exposing lock controls", () => {
    render(
      <DataCollectionSettingsProvider>
        <SettingsRenderer
          columns={columns}
          frozenColumns={0}
          allowColumnReordering
          allowColumnHiding
          lockedColumnId="email"
          onRemoveColumn={vi.fn()}
        />
      </DataCollectionSettingsProvider>
    )

    const nameRow = screen.getByText("Name").closest("li") as HTMLElement
    const emailRow = screen.getByText("Email").closest("li") as HTMLElement
    expect(within(nameRow).getByRole("switch")).not.toBeDisabled()
    expect(within(emailRow).getByRole("switch")).toBeDisabled()
    expect(
      within(emailRow).queryByRole("button", { name: /column: Email/ })
    ).not.toBeInTheDocument()
    expect(
      within(emailRow).queryByRole("button", { name: "Remove column" })
    ).not.toBeInTheDocument()
  })

  it("transfers the controlled lock and updates the available row actions", async () => {
    const onLockedColumnChange = vi.fn()

    const Harness = () => {
      const [lockedColumnId, setLockedColumnId] = useState<string | null>(
        "name"
      )

      return (
        <DataCollectionSettingsProvider>
          <SettingsRenderer
            columns={columns}
            frozenColumns={0}
            allowColumnReordering
            allowColumnHiding
            lockedColumnId={lockedColumnId}
            onLockedColumnChange={(columnId) => {
              onLockedColumnChange(columnId)
              setLockedColumnId(columnId)
            }}
            onRemoveColumn={vi.fn()}
          />
        </DataCollectionSettingsProvider>
      )
    }

    render(<Harness />)

    const nameRow = screen.getByText("Name").closest("li") as HTMLElement
    const emailRow = screen.getByText("Email").closest("li") as HTMLElement

    expect(within(nameRow).getByRole("switch")).toBeDisabled()
    expect(within(emailRow).getByRole("switch")).not.toBeDisabled()

    await userEvent.click(
      within(nameRow).getByRole("button", { name: "Unlock column: Name" })
    )
    expect(
      screen.getByRole("button", { name: "Lock column: Name" })
    ).toHaveFocus()
    const unlockedEmailRow = screen
      .getByText("Email")
      .closest("li") as HTMLElement
    await userEvent.click(
      within(unlockedEmailRow).getByRole("button", {
        name: "Lock column: Email",
      })
    )
    expect(
      screen.getByRole("button", { name: "Unlock column: Email" })
    ).toHaveFocus()

    expect(onLockedColumnChange).toHaveBeenNthCalledWith(1, null)
    expect(onLockedColumnChange).toHaveBeenNthCalledWith(2, "email")
    const updatedNameRow = screen.getByText("Name").closest("li") as HTMLElement
    const updatedEmailRow = screen
      .getByText("Email")
      .closest("li") as HTMLElement
    expect(within(updatedNameRow).getByRole("switch")).not.toBeDisabled()
    expect(within(updatedEmailRow).getByRole("switch")).toBeDisabled()
    expect(
      within(updatedEmailRow).queryByRole("button", { name: "Remove column" })
    ).not.toBeInTheDocument()
  })
})
