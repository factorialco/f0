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
  { id: "role", label: "Role", render: () => "Engineer" },
]

describe("Table SettingsRenderer column locking", () => {
  it("enforces read-only lockedColumnIds without exposing lock controls", () => {
    render(
      <DataCollectionSettingsProvider>
        <SettingsRenderer
          columns={columns}
          frozenColumns={0}
          allowColumnReordering
          allowColumnHiding
          lockedColumnIds={["name", "email"]}
          onRemoveColumn={vi.fn()}
        />
      </DataCollectionSettingsProvider>
    )

    const nameRow = screen.getByText("Name").closest("li") as HTMLElement
    const emailRow = screen.getByText("Email").closest("li") as HTMLElement
    const roleRow = screen.getByText("Role").closest("li") as HTMLElement
    expect(within(nameRow).getByRole("switch")).toBeDisabled()
    expect(within(emailRow).getByRole("switch")).toBeDisabled()
    expect(within(roleRow).getByRole("switch")).not.toBeDisabled()
    expect(
      within(nameRow).queryByRole("button", { name: /column: Name/ })
    ).not.toBeInTheDocument()
    expect(
      within(emailRow).queryByRole("button", { name: /column: Email/ })
    ).not.toBeInTheDocument()
    expect(
      within(emailRow).queryByRole("button", { name: "Remove column" })
    ).not.toBeInTheDocument()
    expect(nameRow.querySelector("svg")).toBeInTheDocument()
    expect(emailRow.querySelector("svg")).toBeInTheDocument()
  })

  it("preserves the legacy UI when column locking is not enabled", () => {
    render(
      <DataCollectionSettingsProvider>
        <SettingsRenderer
          columns={columns}
          frozenColumns={0}
          allowColumnReordering={false}
          allowColumnHiding
        />
      </DataCollectionSettingsProvider>
    )

    const nameRow = screen.getByText("Name").closest("li") as HTMLElement
    expect(within(nameRow).getByRole("switch")).toBeDisabled()
    expect(nameRow.querySelector("svg")).not.toBeInTheDocument()
    expect(
      within(nameRow).queryByRole("button", { name: /column: Name/ })
    ).not.toBeInTheDocument()
  })

  it("independently locks and unlocks columns", async () => {
    const onLockedColumnIdsChange = vi.fn()

    const Harness = () => {
      const [lockedColumnIds, setLockedColumnIds] = useState<string[]>(["name"])

      return (
        <DataCollectionSettingsProvider>
          <SettingsRenderer
            columns={columns}
            frozenColumns={0}
            allowColumnReordering
            allowColumnHiding
            lockedColumnIds={lockedColumnIds}
            onLockedColumnIdsChange={(columnIds) => {
              onLockedColumnIdsChange(columnIds)
              setLockedColumnIds(columnIds)
            }}
            onRemoveColumn={vi.fn()}
          />
        </DataCollectionSettingsProvider>
      )
    }

    render(<Harness />)

    const nameRow = screen.getByText("Name").closest("li") as HTMLElement
    const emailRow = screen.getByText("Email").closest("li") as HTMLElement
    const roleRow = screen.getByText("Role").closest("li") as HTMLElement

    expect(within(nameRow).getByRole("switch")).toBeDisabled()
    expect(within(emailRow).getByRole("switch")).not.toBeDisabled()
    expect(within(roleRow).getByRole("switch")).not.toBeDisabled()

    const roleLock = within(roleRow).getByRole("button", {
      name: "Lock column: Role",
    })
    roleLock.focus()
    await userEvent.keyboard("{Enter}")
    expect(
      screen.getByRole("button", { name: "Unlock column: Role" })
    ).toHaveFocus()
    expect(
      screen.getByRole("button", { name: "Unlock column: Name" })
    ).toBeInTheDocument()

    expect(
      screen
        .getAllByRole("listitem")
        .map((row) => row.textContent?.match(/Name|Email|Role/)?.[0])
    ).toEqual(["Name", "Role", "Email"])

    const lockedRoleRow = screen.getByText("Role").closest("li") as HTMLElement
    await userEvent.click(
      within(lockedRoleRow).getByRole("button", { name: "Unlock column: Role" })
    )
    expect(
      screen.getByRole("button", { name: "Lock column: Role" })
    ).not.toHaveFocus()

    expect(onLockedColumnIdsChange).toHaveBeenNthCalledWith(1, ["name", "role"])
    expect(onLockedColumnIdsChange).toHaveBeenNthCalledWith(2, ["name"])

    await userEvent.click(
      screen.getByRole("button", { name: "Lock column: Role" })
    )
    expect(
      screen.getByRole("button", { name: "Unlock column: Role" })
    ).not.toHaveFocus()

    const pointerLockedRole = screen.getByRole("button", {
      name: "Unlock column: Role",
    })
    pointerLockedRole.focus()
    await userEvent.keyboard("{Enter}")
    expect(
      screen.getByRole("button", { name: "Lock column: Role" })
    ).toHaveFocus()

    expect(onLockedColumnIdsChange).toHaveBeenNthCalledWith(3, ["name", "role"])
    expect(onLockedColumnIdsChange).toHaveBeenNthCalledWith(4, ["name"])
    expect(
      screen
        .getAllByRole("listitem")
        .map((row) => row.textContent?.match(/Name|Email|Role/)?.[0])
    ).toEqual(["Name", "Email", "Role"])
    const updatedNameRow = screen.getByText("Name").closest("li") as HTMLElement
    const updatedRoleRow = screen.getByText("Role").closest("li") as HTMLElement
    expect(within(updatedNameRow).getByRole("switch")).toBeDisabled()
    expect(within(updatedRoleRow).getByRole("switch")).not.toBeDisabled()
    expect(
      within(updatedNameRow).queryByRole("button", { name: "Remove column" })
    ).not.toBeInTheDocument()
  })
})
