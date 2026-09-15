import type { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useState } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { createDataSourceDefinition, type RecordType } from "@/hooks/datasource"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0SharingDialog } from "../index"
import type {
  F0SharingDialogAccess,
  F0SharingDialogProps,
  F0SharingDialogRole,
  F0SharingDialogSelection,
} from "../types"

type Person = RecordType & {
  id: string
  firstName: string
  lastName: string
  jobTitle?: string
}

type Role = "owner" | "editor" | "viewer"

const people: Person[] = [
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
  {
    id: "person-4",
    firstName: "Devon",
    lastName: "Wilson",
    jobTitle: "Finance specialist",
  },
  {
    id: "person-5",
    firstName: "Avery",
    lastName: "Montgomery-Worthington",
    jobTitle: "International people operations programme manager",
  },
]

const peopleSource = createDataSourceDefinition<Person>({
  search: { enabled: true },
  dataAdapter: {
    fetchData: async ({ search }) => ({
      records: people.slice(2).filter((person) => {
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
    description: "Can view this policy",
  },
  {
    value: "editor",
    label: "Editor",
    description: "Can view and edit this policy",
  },
]

const defaultAccesses: F0SharingDialogAccess<Person, Role>[] = [
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

type StoryProps = F0SharingDialogProps<Person, Role>

function SharingDialogStory({
  accesses: initialAccesses,
  onAddPeople,
  onRoleChange,
  onRemoveAccess,
  ...props
}: StoryProps) {
  const [accesses, setAccesses] = useState(initialAccesses)

  useEffect(
    function syncAccessesWithStoryArgs() {
      setAccesses(initialAccesses)
    },
    [initialAccesses]
  )

  const handleAddPeople = async (
    selection: F0SharingDialogSelection<Person, Role, string>
  ) => {
    const result = await onAddPeople(selection)
    if (result === false) return false

    setAccesses((currentAccesses) => [
      ...currentAccesses,
      ...selection.people.map((person) => ({
        id: `access-${person.id}`,
        person,
        role: selection.role,
        canChangeRole: true,
        canRemove: true,
      })),
    ])
    return true
  }

  const handleRoleChange: StoryProps["onRoleChange"] = async (access, role) => {
    const result = await onRoleChange(access, role)
    if (result === false) return false

    setAccesses((currentAccesses) =>
      currentAccesses.map((currentAccess) =>
        currentAccess.id === access.id
          ? { ...currentAccess, role }
          : currentAccess
      )
    )
    return true
  }

  const handleRemoveAccess: StoryProps["onRemoveAccess"] = async (access) => {
    const result = await onRemoveAccess(access)
    if (result === false) return false

    setAccesses((currentAccesses) =>
      currentAccesses.filter((currentAccess) => currentAccess.id !== access.id)
    )
    return true
  }

  return (
    <F0SharingDialog<Person, Role>
      {...props}
      accesses={accesses}
      onAddPeople={handleAddPeople}
      onRemoveAccess={handleRemoveAccess}
      onRoleChange={handleRoleChange}
    />
  )
}

const meta = {
  title: "F0SharingDialog",
  component: F0SharingDialog<Person, Role>,
  parameters: {
    layout: "fullscreen",
    a11y: { test: "error" },
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["experimental", "!autodocs"],
  args: {
    isOpen: true,
    title: "Share time off policy",
    description: "Choose people and manage access to this policy.",
    onClose: fn(),
    peopleSource,
    mapPerson,
    accesses: defaultAccesses,
    roles,
    defaultRole: "viewer",
    onAddPeople: fn(),
    onRoleChange: fn(),
    onRemoveAccess: fn(),
  },
  render: (args) => <SharingDialogStory {...args} />,
} satisfies Meta<StoryProps>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvasElement, step }) => {
    const page = within(canvasElement.closest("body")!)

    await step("Focus the dialog when it opens", async () => {
      await waitFor(() => {
        expect(
          page.getByRole("dialog", { name: "Share time off policy" })
        ).toHaveFocus()
      })
    })

    await step("Select a person", async () => {
      const peopleSelect = page.getByRole("combobox", { name: "People" })
      await userEvent.click(peopleSelect)
      await userEvent.click(
        await page.findByRole("option", { name: /Casey Lee/ })
      )
      await userEvent.click(
        page.getByRole("button", { name: "Apply selection" })
      )
      await waitFor(() => {
        expect(
          page.getByRole("combobox", {
            name: "Access level for selected people",
          })
        ).toBeInTheDocument()
      })
    })

    await step("Share and clear the selection", async () => {
      await userEvent.click(await page.findByRole("button", { name: "Share" }))
      await waitFor(() => {
        expect(args.onAddPeople).toHaveBeenCalledWith(
          expect.objectContaining({
            personIds: ["person-3"],
            role: "viewer",
          })
        )
        expect(page.getByText("Casey Lee")).toBeInTheDocument()
        expect(page.getByRole("button", { name: "Share" })).toBeDisabled()
      })
    })
  },
}

export const NarrowViewport: Story = {
  tags: ["no-sidebar"],
  parameters: {
    viewport: {
      options: {
        narrowSharingDialog: {
          name: "Narrow sharing dialog",
          styles: {
            width: "668px",
            height: "720px",
          },
        },
      },
    },
  },
  globals: {
    viewport: {
      value: "narrowSharingDialog",
      isRotated: false,
    },
  },
  play: async ({ canvasElement, step }) => {
    const page = within(canvasElement.closest("body")!)

    await step("Select a person", async () => {
      const peopleSelect = page.getByRole("combobox", { name: "People" })
      await userEvent.click(peopleSelect)
      await userEvent.click(
        await page.findByRole("option", { name: /Casey Lee/ })
      )
      await userEvent.click(
        page.getByRole("button", { name: "Apply selection" })
      )
      await userEvent.keyboard("{Escape}")
      await waitFor(() => {
        expect(
          page.getByRole("combobox", {
            name: "Access level for selected people",
          })
        ).toBeInTheDocument()
      })
    })

    await step(
      "Keep the sharing controls inline without overflow",
      async () => {
        const peopleSelect = page.getByRole("combobox", { name: "People" })
        const shareButton = page.getByRole("button", { name: "Share" })
        const scrollViewport =
          canvasElement.ownerDocument.querySelector<HTMLElement>(
            "[data-scroll-container]"
          )

        if (!scrollViewport) {
          throw new Error("F0SharingDialog scroll viewport was not found")
        }

        expect(
          Math.abs(
            peopleSelect.getBoundingClientRect().top -
              shareButton.getBoundingClientRect().top
          )
        ).toBeLessThanOrEqual(1)
        expect(scrollViewport.scrollWidth).toBeLessThanOrEqual(
          scrollViewport.clientWidth
        )
      }
    )
  },
}

export const MobileViewport: Story = {
  tags: ["no-sidebar"],
  parameters: {
    // F0Select currently nests a checkbox inside each option. Keep axe running
    // in todo mode while that inherited component debt is resolved.
    a11y: { test: "todo" },
    viewport: {
      options: {
        mobileSharingDialog: {
          name: "Mobile sharing dialog",
          styles: {
            width: "320px",
            height: "568px",
          },
        },
      },
    },
  },
  globals: {
    viewport: {
      value: "mobileSharingDialog",
      isRotated: false,
    },
  },
  play: async ({ canvasElement, step }) => {
    const page = within(canvasElement.closest("body")!)

    await step("Open the people selector", async () => {
      await userEvent.click(page.getByRole("combobox", { name: /^People$/ }))
      await waitFor(() => {
        expect(page.getByRole("listbox")).toBeVisible()
        expect(
          page.getByRole("option", {
            name: /Avery Montgomery-Worthington/,
          })
        ).toBeVisible()
        expect(
          page.getByRole("button", { name: "Apply selection" })
        ).toBeVisible()
      })
    })

    await step("Keep the popup within the available width", async () => {
      const popup = page
        .getByRole("listbox")
        .closest<HTMLElement>("[data-radix-popper-content-wrapper]")

      if (!popup) {
        throw new Error("People selector popup was not found")
      }

      expect(popup.getBoundingClientRect().right).toBeLessThanOrEqual(
        canvasElement.ownerDocument.documentElement.clientWidth
      )
    })
  },
}

export const EmptyAccessList: Story = {
  tags: ["no-sidebar"],
  args: {
    accesses: [],
  },
}

export const FullConfiguration: Story = {
  tags: ["no-sidebar"],
  args: {
    accesses: [
      ...defaultAccesses,
      {
        id: "viewer-access",
        person: people[3],
        role: "viewer",
        canChangeRole: true,
        canRemove: false,
      },
    ],
  },
  play: async ({ canvasElement, step }) => {
    const page = within(canvasElement.closest("body")!)

    await step("Show a compact remove action", async () => {
      await userEvent.click(
        page.getByRole("combobox", {
          name: "Access level for Blake Taylor",
        })
      )

      const removeAction = await page.findByRole("button", {
        name: "Remove access",
      })
      expect(removeAction).toHaveTextContent(/^Remove access$/)
      expect(
        page.queryByRole("button", {
          name: "Remove access for Blake Taylor",
        })
      ).not.toBeInTheDocument()

      await userEvent.keyboard("{Escape}")
    })
  },
}

export const UpdatingAccess: Story = {
  tags: ["no-sidebar"],
  args: {
    isUpdatingAccess: true,
  },
}

export const AddingPeople: Story = {
  tags: ["no-sidebar"],
  args: {
    isAddingPeople: true,
  },
}

export const SpecificTitleExample: Story = {
  tags: ["no-sidebar"],
  args: {
    title: "Share time off policy",
  },
}

export const AmbiguousTitleExample: Story = {
  tags: ["no-sidebar"],
  args: {
    title: "Share",
  },
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  args: FullConfiguration.args,
  parameters: withSnapshot(MobileViewport.parameters ?? {}),
  globals: MobileViewport.globals,
  play: MobileViewport.play,
}
