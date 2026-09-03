import { describe, expect, it, vi } from "vitest"

import { createDataSourceDefinition, type RecordType } from "@/hooks/datasource"
import {
  screen,
  userEvent,
  waitFor,
  zeroRender as render,
} from "@/testing/test-utils"

import { F0SharingDialog } from "../index"
import type {
  F0SharingDialogAccess,
  F0SharingDialogProps,
  F0SharingDialogRole,
} from "../types"

type Person = RecordType & {
  id: string
  firstName: string
  lastName: string
  jobTitle?: string
}

type Role = "owner" | "editor" | "viewer"

const people = vi.hoisted<Person[]>(() => [
  {
    id: "person-1",
    firstName: "Alex",
    lastName: "Morgan",
    jobTitle: "Product designer",
  },
  {
    id: "person-2",
    firstName: "Blake",
    lastName: "Taylor",
    jobTitle: "Engineering manager",
  },
  {
    id: "person-3",
    firstName: "Casey",
    lastName: "Lee",
    jobTitle: "People partner",
  },
])

interface MockSelectOption {
  type?: "item" | "separator"
  value?: string
  label?: string
  description?: string
}

interface MockSelectProps {
  actions?: Array<{
    disabled?: boolean
    label: string
    onClick: () => void
  }>
  disabled?: boolean
  label: string
  mapOptions?: (person: Person) => MockSelectOption
  multiple?: boolean
  onChange?:
    | ((value: string) => void)
    | ((value: string[], selectedPeople: Person[]) => void)
  options?: MockSelectOption[]
  placeholder?: string
  source?: unknown
  value?: string | string[]
  variant?: "field" | "inline"
}

vi.mock("@/components/F0Select", () => ({
  F0Select: ({
    actions,
    disabled,
    label,
    mapOptions,
    multiple,
    onChange,
    options = [],
    placeholder,
    source,
    value,
  }: MockSelectProps) => {
    if (multiple) {
      const selectedValues = Array.isArray(value) ? value : []
      const selectedPerson = people[2]

      return (
        <button
          aria-label={label}
          data-has-source={source ? "true" : "false"}
          disabled={disabled}
          onClick={() => {
            const handleChange = onChange as
              | ((value: string[], selectedPeople: Person[]) => void)
              | undefined
            handleChange?.([selectedPerson.id], [selectedPerson])
            mapOptions?.(selectedPerson)
          }}
          role="combobox"
        >
          {selectedValues.length > 0
            ? `${selectedValues.length} selected`
            : placeholder}
        </button>
      )
    }

    return (
      <>
        <select
          aria-label={label}
          disabled={disabled}
          onChange={(event) => {
            const handleChange = onChange as
              | ((value: string) => void)
              | undefined
            handleChange?.(event.target.value)
          }}
          value={typeof value === "string" ? value : ""}
        >
          {options.map((option) =>
            option.type === "separator" ? null : (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          )}
        </select>
        {actions?.map((action) => (
          <button
            disabled={action.disabled}
            key={action.label}
            onClick={action.onClick}
          >
            {action.label}
          </button>
        ))}
      </>
    )
  },
}))

const peopleSource = createDataSourceDefinition<Person>({
  search: { enabled: true, sync: true },
  dataAdapter: {
    fetchData: async ({ search }) => ({
      records: people.filter((person) => {
        const fullName = `${person.firstName} ${person.lastName}`
        return !search || fullName.toLowerCase().includes(search.toLowerCase())
      }),
    }),
  },
})

const mapPerson = (person: Person) => ({
  value: person.id,
  label: `${person.firstName} ${person.lastName}`,
  description: person.jobTitle,
  avatar: {
    type: "person" as const,
    firstName: person.firstName,
    lastName: person.lastName,
  },
  item: person,
})

const roles: F0SharingDialogRole<Role>[] = [
  { value: "owner", label: "Owner", assignable: false },
  {
    value: "viewer",
    label: "Viewer",
    description: "Can view this resource",
  },
  {
    value: "editor",
    label: "Editor",
    description: "Can view and edit this resource",
  },
]

const accesses: F0SharingDialogAccess<Person, Role>[] = [
  {
    id: "owner-access",
    person: people[0],
    role: "owner",
    canChangeRole: false,
    canRemove: false,
  },
  {
    id: "editor-access",
    person: people[1],
    role: "editor",
    canChangeRole: true,
    canRemove: true,
  },
]

const defaultProps: F0SharingDialogProps<Person, Role> = {
  isOpen: true,
  title: "Share policy",
  description: "Choose people and manage access to this policy.",
  onClose: vi.fn(),
  peopleSource,
  mapPerson,
  accesses,
  roles,
  defaultRole: "viewer",
  onAddPeople: vi.fn(),
  onRoleChange: vi.fn(),
  onRemoveAccess: vi.fn(),
}

const renderDialog = (
  props: Partial<F0SharingDialogProps<Person, Role>> = {}
) => {
  return render(<F0SharingDialog<Person, Role> {...defaultProps} {...props} />)
}

const choosePerson = async (name: string) => {
  expect(name).toBe("Casey Lee")
  await userEvent.click(screen.getByRole("combobox", { name: "People" }))

  await waitFor(() => {
    expect(screen.getByRole("button", { name: "Share" })).toBeEnabled()
  })
}

describe("F0SharingDialog", () => {
  it("renders locked and editable access rows", () => {
    renderDialog()

    const dialog = screen.getByRole("dialog", { name: "Share policy" })
    expect(dialog).toBeVisible()
    expect(
      screen.getByText("Choose people and manage access to this policy.")
    ).toBeVisible()
    expect(screen.getByRole("combobox", { name: "People" })).toHaveAttribute(
      "data-has-source",
      "true"
    )
    expect(screen.getByText("Who has access")).toBeVisible()
    expect(screen.getByText("Owner")).toBeVisible()
    expect(
      screen.queryByRole("combobox", {
        name: "Access level for Alex Morgan",
      })
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole("combobox", {
        name: "Access level for Blake Taylor",
      })
    ).toBeVisible()
  })

  it("adds selected people with the chosen role and clears the selection", async () => {
    const onAddPeople = vi.fn().mockResolvedValue(true)
    renderDialog({ onAddPeople })

    await choosePerson("Casey Lee")

    const roleSelect = screen.getByRole("combobox", {
      name: "Access level for selected people",
    })
    await userEvent.selectOptions(roleSelect, "editor")
    await userEvent.click(screen.getByRole("button", { name: "Share" }))

    await waitFor(() => {
      expect(onAddPeople).toHaveBeenCalledWith({
        personIds: ["person-3"],
        people: [people[2]],
        role: "editor",
      })
    })
    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Share" })).toBeDisabled()
      expect(
        screen.queryByRole("combobox", {
          name: "Access level for selected people",
        })
      ).not.toBeInTheDocument()
    })

    await choosePerson("Casey Lee")
    expect(
      screen.getByRole("combobox", {
        name: "Access level for selected people",
      })
    ).toHaveValue("viewer")
  })

  it("keeps the selection when adding people returns false", async () => {
    const onAddPeople = vi.fn().mockResolvedValue(false)
    renderDialog({ onAddPeople })

    await choosePerson("Casey Lee")
    await userEvent.click(screen.getByRole("button", { name: "Share" }))

    await waitFor(() => {
      expect(onAddPeople).toHaveBeenCalledOnce()
      expect(screen.getByRole("button", { name: "Share" })).toBeEnabled()
      expect(
        screen.getByRole("combobox", {
          name: "Access level for selected people",
        })
      ).toBeVisible()
    })
  })

  it("keeps the selected people and role when adding people rejects", async () => {
    const onAddPeople = vi.fn().mockRejectedValue(new Error("Network error"))
    renderDialog({ onAddPeople })

    await choosePerson("Casey Lee")
    const roleSelect = screen.getByRole("combobox", {
      name: "Access level for selected people",
    })
    await userEvent.selectOptions(roleSelect, "editor")
    await userEvent.click(screen.getByRole("button", { name: "Share" }))

    await waitFor(() => {
      expect(onAddPeople).toHaveBeenCalledOnce()
      expect(screen.getByRole("button", { name: "Share" })).toBeEnabled()
      expect(roleSelect).toHaveValue("editor")
    })
  })

  it("resets pending selection after closing and reopening", async () => {
    const onClose = vi.fn()
    const view = renderDialog({ onClose })

    await choosePerson("Casey Lee")
    await userEvent.selectOptions(
      screen.getByRole("combobox", {
        name: "Access level for selected people",
      }),
      "editor"
    )
    await userEvent.click(screen.getByRole("button", { name: "Close" }))
    expect(onClose).toHaveBeenCalledOnce()

    view.rerender(
      <F0SharingDialog<Person, Role>
        {...defaultProps}
        isOpen={false}
        onClose={onClose}
      />
    )
    view.rerender(
      <F0SharingDialog<Person, Role>
        {...defaultProps}
        isOpen
        onClose={onClose}
      />
    )

    expect(screen.getByRole("button", { name: "Share" })).toBeDisabled()
    expect(
      screen.queryByRole("combobox", {
        name: "Access level for selected people",
      })
    ).not.toBeInTheDocument()

    await choosePerson("Casey Lee")
    expect(
      screen.getByRole("combobox", {
        name: "Access level for selected people",
      })
    ).toHaveValue("viewer")
  })

  it("changes an existing access role", async () => {
    const onRoleChange = vi.fn()
    renderDialog({ onRoleChange })

    await userEvent.selectOptions(
      screen.getByRole("combobox", {
        name: "Access level for Blake Taylor",
      }),
      "viewer"
    )

    expect(onRoleChange).toHaveBeenCalledWith(accesses[1], "viewer")
  })

  it("does not notify a role change when the role stays the same", async () => {
    const onRoleChange = vi.fn()
    renderDialog({ onRoleChange })

    await userEvent.selectOptions(
      screen.getByRole("combobox", {
        name: "Access level for Blake Taylor",
      }),
      "editor"
    )

    expect(onRoleChange).not.toHaveBeenCalled()
  })

  it("removes a revocable access", async () => {
    const onRemoveAccess = vi.fn()
    renderDialog({ onRemoveAccess })

    await userEvent.click(screen.getByRole("button", { name: "Remove access" }))

    expect(onRemoveAccess).toHaveBeenCalledWith(accesses[1])
    await waitFor(() => {
      expect(screen.getByRole("combobox", { name: "People" })).toHaveFocus()
    })
  })

  it("removes an access whose role cannot be changed", async () => {
    const onRemoveAccess = vi.fn()
    const lockedRemovableAccess = {
      ...accesses[0],
      canRemove: true,
    }
    renderDialog({
      accesses: [lockedRemovableAccess],
      onRemoveAccess,
    })

    await userEvent.click(
      screen.getByRole("button", { name: "Remove access for Alex Morgan" })
    )

    expect(onRemoveAccess).toHaveBeenCalledWith(lockedRemovableAccess)
  })

  it("disables removal when an access cannot be revoked", async () => {
    const onRemoveAccess = vi.fn()
    renderDialog({
      accesses: [{ ...accesses[1], canRemove: false }],
      onRemoveAccess,
    })

    const removeButton = screen.getByRole("button", {
      name: "Remove access",
    })
    expect(removeButton).toBeDisabled()
    await userEvent.click(removeButton)
    expect(onRemoveAccess).not.toHaveBeenCalled()
  })

  it("disables the full sharing workflow while people are being added", () => {
    renderDialog({ isAddingPeople: true })

    expect(screen.getByRole("combobox", { name: "People" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Share" })).toBeDisabled()
    expect(screen.getByRole("button", { name: "Share" })).toHaveAttribute(
      "aria-busy",
      "true"
    )
    expect(
      screen.getByRole("combobox", {
        name: "Access level for Blake Taylor",
      })
    ).toBeDisabled()
    expect(screen.getByRole("button", { name: "Remove access" })).toBeDisabled()
  })

  it("disables access mutations while an update is in progress", async () => {
    renderDialog({ isUpdatingAccess: true })

    expect(
      screen.getByRole("region", { name: "Who has access" })
    ).toHaveAttribute("aria-busy", "true")
    expect(screen.getByRole("status")).toHaveTextContent("Updating access")
    expect(screen.getByRole("button", { name: "Share" })).toBeDisabled()
    expect(screen.getByRole("combobox", { name: "People" })).toBeDisabled()
    expect(
      screen.getByRole("combobox", {
        name: "Access level for Blake Taylor",
      })
    ).toBeDisabled()
    expect(screen.getByRole("button", { name: "Remove access" })).toBeDisabled()
  })

  it("shows an empty access state and exposes dataTestId", () => {
    renderDialog({ accesses: [], dataTestId: "sharing-dialog" })

    expect(screen.getByText("No one has access yet")).toBeVisible()
    expect(screen.getByTestId("sharing-dialog")).toBeInTheDocument()
  })

  it("renders people without optional avatar or description metadata", () => {
    renderDialog({
      mapPerson: (person) => ({
        value: person.id,
        label: `${person.firstName} ${person.lastName}`,
        item: person,
      }),
    })

    expect(screen.getByText("Alex Morgan")).toBeVisible()
    expect(screen.getByText("Blake Taylor")).toBeVisible()
    expect(screen.queryByText("Product designer")).not.toBeInTheDocument()
    expect(screen.queryByText("Engineering manager")).not.toBeInTheDocument()
  })

  it("excludes non-assignable roles from role selectors", async () => {
    renderDialog()

    const existingAccessSelect = screen.getByRole("combobox", {
      name: "Access level for Blake Taylor",
    })
    expect(
      existingAccessSelect.querySelector('option[value="owner"]')
    ).not.toBeInTheDocument()

    await choosePerson("Casey Lee")
    const newPeopleSelect = screen.getByRole("combobox", {
      name: "Access level for selected people",
    })
    expect(
      newPeopleSelect.querySelector('option[value="owner"]')
    ).not.toBeInTheDocument()
  })

  it("rejects a default role that cannot be assigned", () => {
    expect(() => renderDialog({ defaultRole: "owner" })).toThrow(
      "F0SharingDialog: defaultRole must reference an assignable role"
    )
  })

  it("rejects a default role that is missing from the role list", () => {
    expect(() =>
      renderDialog({
        roles: roles.filter((role) => role.value !== "viewer"),
      })
    ).toThrow("F0SharingDialog: defaultRole must reference an assignable role")
  })

  it("rejects an access whose role is missing from the role list", () => {
    expect(() =>
      renderDialog({
        roles: roles.filter((role) => role.value !== "editor"),
      })
    ).toThrow(
      "F0SharingDialog: access editor-access references a role that is not present in roles"
    )
  })
})
