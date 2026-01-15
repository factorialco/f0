import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useCallback, useState } from "react"
import { fn } from "storybook/test"
import { famousEmployees } from "../entity-select-name.factory"
import { teamsWithEmployees } from "../groups-avatar-name.factory"
import { EntitySelectListItem } from "./index"

const meta: Meta = {
  component: EntitySelectListItem,
  title: "EntitySelect/ListItem",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    entity: famousEmployees[0],
    partialSelected: false,
    groupView: false,
    selected: false,
    onSelect: fn(),
    onRemove: fn(),
    onExpand: fn(),
    expanded: false,
    search: "",
    singleSelector: false,
  } satisfies ComponentProps<typeof EntitySelectListItem>,
} satisfies Meta<typeof EntitySelectListItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultDeactivated: Story = {
  args: {
    entity: { ...famousEmployees[0], deactivated: true },
  },
}

export const GroupViewSelected: Story = {
  args: {
    entity: teamsWithEmployees[0],
    partialSelected: false,
    groupView: true,
    selected: true,
    onSelect: fn(),
    onRemove: fn(),
    onExpand: fn(),
    expanded: false,
  },
}

export const GroupViewPartial: Story = {
  args: {
    entity: teamsWithEmployees[0],
    partialSelected: true,
    groupView: true,
    selected: false,
    onSelect: fn(),
    onRemove: fn(),
    onExpand: fn(),
    expanded: false,
  },
}

export const GroupViewExpanded: Story = {
  args: {
    ...GroupViewSelected.args,
    expanded: true,
  },
}

export const DefaultInForm = {
  args: {
    entity: teamsWithEmployees[0],
    partialSelected: false,
    groupView: false,
    selected: false,
    onSelect: fn(),
    onRemove: fn(),
    onExpand: fn(),
    expanded: false,
  },
  render: (props: ComponentProps<typeof EntitySelectListItem>) => {
    const [selected, setSelected] = useState(false)

    const onSelect = useCallback(() => {
      setSelected(!selected)
    }, [selected])

    return (
      <form>
        <EntitySelectListItem
          {...props}
          onSelect={onSelect}
          onRemove={onSelect}
          selected={selected}
        />
      </form>
    )
  },
}
