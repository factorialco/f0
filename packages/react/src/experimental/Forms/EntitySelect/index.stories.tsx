import type { Meta } from "@storybook/react-vite"

import { ChevronDown, ChevronRight } from "lucide-react"
import { ComponentProps, useState } from "react"
import { expect, fn, userEvent, within } from "storybook/test"

import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { Placeholder, Plus } from "@/icons/app"

import { famousEmployees } from "./entity-select-name.factory"
import {
  teamsWithEmployees,
  workplaceWithEmployees,
} from "./groups-avatar-name.factory"
import { EntitySelect } from "./index"
import {
  EntityId,
  EntitySelectEntity,
  EntitySelectNamedGroup,
  EntitySelectProps,
} from "./types"

const GROUP_DATA = {
  all: famousEmployees,
  teams: teamsWithEmployees,
  workplaces: workplaceWithEmployees,
}

const defaultArgs: EntitySelectProps<string> = {
  entities: [],
  label: "Role",
  hideLabel: true,
  placeholder: "Select employees...",
  selectedItemsCopy: "employees selected",
  searchPlaceholder: "Search...",
  selectAllLabel: "Select all",
  clearLabel: "Clear",
  selectedLabel: "selected",
  notFoundTitle: "No results found",
  onCreate: fn(),
  onCreateLabel: "Create new user",
  notFoundSubtitle: "Try searching with a different term or create a new user.",
  disabled: false,
  groups: [
    { label: "None", value: "all", type: "avatar" },
    { label: "Team", value: "teams", type: "team" },
    { label: "Workplace", value: "workplaces" },
  ] as EntitySelectNamedGroup[],
  selectedGroup: "all",
  onItemExpandedChange: fn(),
  onGroupChange: fn(),
  onSelect: fn(),
  singleSelector: false,
  width: 500,
}

const meta: Meta<typeof EntitySelect> = {
  component: EntitySelect,
  title: "EntitySelect/EntitySelect",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="h-[520px] w-full">
        <Story />
      </div>
    ),
  ],
  args: {
    ...defaultArgs,
  } satisfies EntitySelectProps<string>,
  render: (props) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    return (
      <div className="w-64">
        <EntitySelect
          {...props}
          loading={loading}
          entities={GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []}
          selectedGroup={selectedGroup}
          onGroupChange={(value) => setSelectedGroup(value ?? "all")}
          onOpenChange={(open) =>
            open ? setTimeout(() => setLoading(false), 500) : setLoading(true)
          }
        />
      </div>
    )
  },
}

export default meta

export const Default = {
  args: defaultArgs,
  render: (props: ComponentProps<typeof EntitySelect>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
    const [selected, setSelected] = useState<EntitySelectEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const onItemExpandedChange = (id: EntityId, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <EntitySelect
        {...props}
        singleSelector={false}
        loading={loading}
        entities={
          GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
            ...el,
            expanded: expandedElements.includes(el.id),
            subItems: el.subItems?.map((el2) => ({ ...el2 })),
          })) || []
        }
        selectedGroup={selectedGroup}
        onItemExpandedChange={onItemExpandedChange}
        onGroupChange={(value) => {
          setSelected([])
          setSelectedGroup(value ?? "all")
        }}
        onOpenChange={(open) =>
          open ? setTimeout(() => setLoading(false), 500) : setLoading(true)
        }
        selectedEntities={selected}
        onSelect={(selection) => {
          setSelected(selection)
        }}
      />
    )
  },
  play: async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
    const canvas = within(canvasElement)

    // Test initial render
    const button = canvas.getByRole("button")
    expect(button).toBeInTheDocument()

    // Test opening popover
    await userEvent.click(button)
    await new Promise((resolve) => setTimeout(resolve, 600))

    const popover = document.querySelector(
      "[data-radix-popper-content-wrapper]"
    )
    expect(popover).toBeInTheDocument()

    // Test search functionality
    const input = popover?.querySelector("input")
    expect(input).toBeInTheDocument()
    await userEvent.type(input!, "Albert Einstein")
    await new Promise((resolve) => setTimeout(resolve, 600))

    // Get the popover content and use within to scope our queries
    const popoverContent = within(popover as HTMLElement)

    // Find the main content section (left side) where the list is
    const mainContent = popoverContent
      .getByRole("dialog")
      .querySelector(".absolute.left-0")
    expect(mainContent).toBeInTheDocument()

    // Use within to scope our search to just the main content
    const mainContentQueries = within(mainContent as HTMLElement)

    // Find and click the item in the main list
    const listItem = mainContentQueries.getByRole("checkbox", {
      name: /Albert Einstein/i,
    })
    expect(listItem).toBeInTheDocument()
    await userEvent.click(listItem.closest("label")!)

    // Test that selection is reflected in trigger
    const triggerText = canvas.getByText(/Marie Curie/)
    expect(triggerText).toBeInTheDocument()

    await userEvent.clear(input!)
    await userEvent.type(input!, "Al")
    await new Promise((resolve) => setTimeout(resolve, 600))

    const selectAllButton = popoverContent.getByRole("button", {
      name: /Select all/i,
    })
    expect(selectAllButton).toBeInTheDocument()
    await userEvent.click(selectAllButton)

    await userEvent.clear(input!)
    await userEvent.type(input!, "Ab")
    await new Promise((resolve) => setTimeout(resolve, 600))
    await userEvent.click(selectAllButton)

    const listItem2 = popoverContent.getByRole("checkbox", {
      name: /Abraham Lincoln/i,
    })
    expect(listItem2).toBeInTheDocument()
    await userEvent.click(listItem2.closest("label")!)

    const selectedText = popoverContent.getByText(/5 selected/i)
    expect(selectedText).toBeInTheDocument()
  },
}

export const WithSelectedGroup = {
  args: {
    ...defaultArgs,
    selectedGroup: "teams",
  } as EntitySelectProps<string>,
  render: (props: ComponentProps<typeof EntitySelect>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
    const [selected, setSelected] = useState<EntitySelectEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const onItemExpandedChange = (id: EntityId, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <EntitySelect
        {...props}
        singleSelector={false}
        loading={loading}
        onItemExpandedChange={onItemExpandedChange}
        entities={
          GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
            ...el,
            expanded: expandedElements.includes(el.id),
            subItems: el.subItems?.map((el2) => ({ ...el2 })),
          })) || []
        }
        selectedGroup={selectedGroup}
        onGroupChange={(value) => {
          setSelected([])
          setSelectedGroup(value ?? "all")
        }}
        onOpenChange={(open) =>
          open ? setTimeout(() => setLoading(false), 500) : setLoading(true)
        }
        selectedEntities={selected}
        onSelect={(selection) => {
          setSelected(selection)
        }}
      />
    )
  },
}

export const SingleSelector = {
  args: {
    ...defaultArgs,
    onSelect: fn(),
    singleSelector: true,
  } as EntitySelectProps<string>,
  render: (props: ComponentProps<typeof EntitySelect>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [selected, setSelected] = useState<EntitySelectEntity | undefined>()
    const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const onItemExpandedChange = (id: EntityId, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <EntitySelect
        {...props}
        singleSelector
        loading={loading}
        entities={
          GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
            ...el,
            expanded: expandedElements.includes(el.id),
            subItems: el.subItems?.map((el2) => ({ ...el2 })),
          })) || []
        }
        selectedGroup={selectedGroup}
        onItemExpandedChange={onItemExpandedChange}
        onGroupChange={(value) => {
          setSelected(undefined)
          setSelectedGroup(value ?? "all")
        }}
        onOpenChange={(open) =>
          open ? setTimeout(() => setLoading(false), 500) : setLoading(true)
        }
        selectedEntities={!selected ? [] : [selected]}
        onSelect={(selection) => {
          if (selectedGroup != "all") {
            const found = GROUP_DATA["all"].find(
              (el) => el.id === selection?.subItems?.[0]?.subId
            )
            setSelected(found)
          } else {
            setSelected(selection ?? undefined)
          }
        }}
      />
    )
  },
}

export const AlwaysOpen = {
  args: {
    ...defaultArgs,
    onSelect: fn(),
    singleSelector: false,
    loading: false,
    alwaysOpen: true,
  } as EntitySelectProps<string>,
  render: (props: ComponentProps<typeof EntitySelect>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
    const [selected, setSelected] = useState<EntitySelectEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const onItemExpandedChange = (id: EntityId, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <div className="w-[300px] border-2">
        <EntitySelect
          {...props}
          singleSelector={false}
          width={undefined}
          loading={loading}
          onItemExpandedChange={onItemExpandedChange}
          entities={
            GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
              ...el,
              expanded: expandedElements.includes(el.id),
              subItems: el.subItems?.map((el2) => ({ ...el2 })),
            })) || []
          }
          selectedGroup={selectedGroup}
          onGroupChange={(value) => {
            setSelected([])
            setSelectedGroup(value ?? "all")
          }}
          onOpenChange={(open) =>
            open ? setTimeout(() => setLoading(false), 500) : setLoading(true)
          }
          selectedEntities={selected}
          onSelect={(selection: EntitySelectEntity[]) => {
            setSelected(selection)
          }}
        />
      </div>
    )
  },
}

export const AlwaysOpenInForm = {
  args: {
    ...defaultArgs,
    onSelect: fn(),
    singleSelector: false,
    loading: false,
    alwaysOpen: true,
  } as EntitySelectProps<string>,
  render: (props: ComponentProps<typeof EntitySelect>) => {
    const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
    const [selected, setSelected] = useState<EntitySelectEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const onItemExpandedChange = (id: EntityId, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <form onSubmit={() => fn()}>
        <EntitySelect
          {...props}
          singleSelector={false}
          onItemExpandedChange={onItemExpandedChange}
          entities={
            GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
              ...el,
              expanded: expandedElements.includes(el.id),
              subItems: el.subItems?.map((el2) => ({ ...el2 })),
            })) || []
          }
          selectedGroup={selectedGroup}
          onGroupChange={(value) => {
            setSelected([])
            setSelectedGroup(value ?? "all")
          }}
          selectedEntities={selected}
          onSelect={(selection: EntitySelectEntity[]) => {
            setSelected(selection)
          }}
        />
      </form>
    )
  },
}

export const WithCustomTrigger = {
  args: {
    ...defaultArgs,
    onSelect: fn(),
  } as EntitySelectProps<string>,
  render: (props: ComponentProps<typeof EntitySelect>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )
    const [selected, setSelected] = useState<EntitySelectEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [numSelected, setNumSelected] = useState<number>(2)
    const [open, setOpen] = useState<boolean>(false)

    const onItemExpandedChange = (id: EntityId, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <div className="w-[600px]">
        <EntitySelect
          {...props}
          singleSelector={false}
          loading={loading}
          onItemExpandedChange={onItemExpandedChange}
          entities={
            GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
              ...el,
              expanded: expandedElements.includes(el.id),
              subItems: el.subItems?.map((el2) => ({ ...el2 })),
            })) || []
          }
          selectedGroup={selectedGroup}
          onGroupChange={(value) => {
            setSelected([])
            setNumSelected(0)
            setSelectedGroup(value ?? "all")
          }}
          onOpenChange={(open) => {
            if (open) setTimeout(() => setLoading(false), 500)
            else setLoading(true)
            setOpen(open)
          }}
          selectedEntities={selected}
          onSelect={(selection: EntitySelectEntity[]) => {
            setSelected(selection)
            if (selectedGroup != "all") {
              let total = 0
              selection.forEach((el) => (total += el.subItems?.length ?? 0))
              setNumSelected(total)
            } else {
              setNumSelected(selection.length)
            }
          }}
        >
          <div className="flex justify-start gap-2">
            <F0TagRaw
              icon={open ? ChevronDown : ChevronRight}
              text={"+10"}
              onlyIcon
            />
            <span className="my-auto">{`${numSelected} selected`}</span>
          </div>
        </EntitySelect>
      </div>
    )
  },
}

export const WithSearch = {
  args: {
    ...defaultArgs,
    loading: false,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole("button"))
    await new Promise((resolve) => setTimeout(resolve, 600))

    const popover = document.querySelector(
      "[data-radix-popper-content-wrapper]"
    )
    const popoverContent = within(popover as HTMLElement)
    const input = popoverContent.getByRole("textbox")
    expect(input).toBeInTheDocument()

    // Test empty search
    await userEvent.type(input, "NonExistentPerson")
    await new Promise((resolve) => setTimeout(resolve, 600))

    // Verify no results message (both title and subtitle)
    const noResultsTitle = popoverContent.getByText("No results found")
    expect(noResultsTitle).toBeInTheDocument()
    const noResultsSubtitle = popoverContent.getByText(
      "Try searching with a different term or create a new user."
    )
    expect(noResultsSubtitle).toBeInTheDocument()

    // Test partial match
    await userEvent.clear(input)
    await userEvent.type(input, "Ein")
    await new Promise((resolve) => setTimeout(resolve, 600))

    // Verify results appear and no results message is gone
    const matchedItems = popoverContent.getAllByRole("checkbox")
    expect(matchedItems.length).toBeGreaterThan(0)
    expect(noResultsTitle).not.toBeInTheDocument()
    expect(noResultsSubtitle).not.toBeInTheDocument()
  },
}

export const LoadingState = {
  args: {
    ...defaultArgs,
    loading: true,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
    const canvas = within(canvasElement)

    // Click the trigger button
    const triggerButton = canvas.getByRole("button")
    await userEvent.click(triggerButton)

    // Wait a bit for the popover to appear
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Find the popover and verify it exists
    const popover = document.querySelector(
      "[data-radix-popper-content-wrapper]"
    )
    expect(popover).toBeInTheDocument()

    // Use within to scope our queries to the popover
    const popoverContent = within(popover as HTMLElement)

    // Check for loading state by finding the spinner container
    const loadingSpinner = popoverContent
      .getByRole("dialog")
      .querySelector('div[aria-busy="true"][aria-live="polite"]')
    expect(loadingSpinner).toBeInTheDocument()

    // Wait for loading to complete
    await new Promise((resolve) => setTimeout(resolve, 600))

    // Verify content is loaded
    const mainContent = popoverContent.getByRole("dialog")
    expect(mainContent).toBeInTheDocument()

    // Verify loading spinner is gone
    const spinnerAfterLoad = popoverContent
      .getByRole("dialog")
      .querySelector('div[aria-busy="true"][aria-live="polite"]')
    expect(spinnerAfterLoad).not.toBeInTheDocument()
  },
}

export const HiddenAvatar = {
  args: {
    ...defaultArgs,
    hiddenAvatar: true,
  },
  render: (props: ComponentProps<typeof EntitySelect>) => {
    const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
    const [selected, setSelected] = useState<EntitySelectEntity[]>([
      {
        ...famousEmployees[0],
      },
      { ...famousEmployees[1] },
    ])
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const onItemExpandedChange = (id: EntityId, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <form onSubmit={() => fn()}>
        <EntitySelect
          {...props}
          singleSelector={false}
          onItemExpandedChange={onItemExpandedChange}
          entities={
            GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA].map((el) => ({
              ...el,
              expanded: expandedElements.includes(el.id),
              subItems: el.subItems?.map((el2) => ({ ...el2 })),
            })) || []
          }
          selectedGroup={selectedGroup}
          onGroupChange={(value) => {
            setSelected([])
            setSelectedGroup(value ?? "all")
          }}
          selectedEntities={selected}
          onSelect={(selection: EntitySelectEntity[]) => {
            setSelected(selection)
          }}
        />
      </form>
    )
  },
}

export const WithActions = {
  args: {
    ...defaultArgs,
    actions: [
      { label: "New employee", onClick: fn(), variant: "ghost", icon: Plus },
    ],
  },
  render: (props: ComponentProps<typeof EntitySelect>) => {
    const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
    const [selected, setSelected] = useState<EntitySelectEntity | null>(null)
    const onItemExpandedChange = (id: EntityId, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <form onSubmit={() => fn()}>
        <EntitySelect
          {...props}
          groups={[{ label: "All", value: "all", groupType: "team" }]}
          singleSelector
          onItemExpandedChange={onItemExpandedChange}
          entities={
            GROUP_DATA["all"].map((el) => ({
              ...el,
              expanded: expandedElements.includes(el.id),
              subItems: el.subItems?.map((el2) => ({ ...el2 })),
            })) || []
          }
          selectedGroup={"all"}
          selectedEntities={selected ? [selected] : []}
          onSelect={(selection: EntitySelectEntity | null) => {
            setSelected(selection)
          }}
        />
      </form>
    )
  },
}

export const WithSizeMd = {
  args: {
    ...defaultArgs,
    size: "md",
  },
}

export const WithLabel = {
  args: {
    ...defaultArgs,
    label: "Select an employee",
    hideLabel: false,
  },
}

export const WithLabelIcon = {
  args: {
    ...defaultArgs,
    label: "Select an employee",
    labelIcon: Placeholder,
    hideLabel: false,
  },
}

export const WithDeactivatedEntities = {
  args: {
    ...defaultArgs,
    label: "Select an employee",
    labelIcon: Placeholder,
    hideLabel: false,
  },
  render: (props: ComponentProps<typeof EntitySelect>) => {
    const [loading, setLoading] = useState<boolean>(props.loading ?? true)
    const [selectedGroup, setSelectedGroup] = useState<string>(
      props.selectedGroup ?? "all"
    )

    const entities = GROUP_DATA[selectedGroup as keyof typeof GROUP_DATA] || []
    entities[0].deactivated = true
    const [selected] = useState<EntitySelectEntity[]>([{ ...entities[0] }])

    return (
      <div className="w-64">
        <EntitySelect
          {...props}
          loading={loading}
          entities={entities}
          selectedEntities={selected}
          selectedGroup={selectedGroup}
          onGroupChange={(value) => setSelectedGroup(value ?? "all")}
          onOpenChange={(open) =>
            open ? setTimeout(() => setLoading(false), 500) : setLoading(true)
          }
        />
      </div>
    )
  },
}

export const Error = {
  args: {
    ...defaultArgs,
    error: "This is an error",
    hideLabel: false,
  },
}

export const Hint = {
  args: {
    ...defaultArgs,
    hint: "This is a hint",
    hideLabel: false,
  },
}

export const Disabled = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
}
