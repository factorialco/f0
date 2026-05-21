import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Avatar List",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a list of avatars (person, team, or company). Supports limiting the maximum number of visible avatars and per-avatar tooltip descriptions via `tooltipDescription`.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const avatarListWithDescriptions = mockItem.avatarList.map((avatar, index) => ({
  ...avatar,
  tooltipDescription:
    index === 0 ? "john.doe@factorial.co" : "josep.rey@factorial.co",
}))

export const AvatarListType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Avatar List",
      render: (item) => ({
        type: "avatarList",
        value: {
          avatarList: item.avatarList,
          max: 2,
        },
      }),
    },
  },
}

/**
 * Each avatar can carry an optional `tooltipDescription` (e.g. email, role)
 * that appears as the secondary line of the per-avatar tooltip and also as a
 * secondary line under each name inside the `+N` overflow popover.
 */
export const WithTooltipDescriptions: Story = {
  args: {
    item: { ...mockItem, avatarList: avatarListWithDescriptions },
    property: {
      label: "Avatar List",
      render: (item) => ({
        type: "avatarList",
        value: {
          avatarList: item.avatarList.map((avatar, index) => ({
            ...avatar,
            tooltipDescription:
              index === 0 ? "john.doe@factorial.co" : "josep.rey@factorial.co",
          })),
          max: 1,
        },
      }),
    },
  },
}

/**
 * `tooltipScroll="none"` disables the popover's vertical scroll cap, letting
 * the overflow popover grow with its content.
 */
export const OverflowPopoverNoScroll: Story = {
  args: {
    item: { ...mockItem, avatarList: avatarListWithDescriptions },
    property: {
      label: "Avatar List",
      render: (item) => ({
        type: "avatarList",
        value: {
          avatarList: item.avatarList.map((avatar, index) => ({
            ...avatar,
            tooltipDescription:
              index === 0 ? "john.doe@factorial.co" : "josep.rey@factorial.co",
          })),
          max: 1,
          tooltipScroll: "none",
        },
      }),
    },
  },
}

/**
 * Several entries with descriptions, all rendered in the popover. Descriptions
 * inherit the popover's inverse foreground with reduced opacity for clear
 * hierarchy.
 */
export const OverflowPopoverManyDescriptions: Story = {
  args: {
    item: { ...mockItem, avatarList: avatarListWithDescriptions },
    property: {
      label: "Avatar List",
      render: (item) => ({
        type: "avatarList",
        value: {
          avatarList: item.avatarList.map((avatar, index) => ({
            ...avatar,
            tooltipDescription:
              index === 0 ? "john.doe@factorial.co" : "josep.rey@factorial.co",
          })),
          max: 1,
        },
      }),
    },
  },
}
