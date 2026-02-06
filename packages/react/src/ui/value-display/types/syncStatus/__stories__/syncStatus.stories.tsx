import { Meta, StoryObj } from "@storybook/react-vite"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Sync Status",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a sync status icon with a tooltip. Used for displaying synchronization state of items.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Synced: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Sync Status",
      render: () => ({
        type: "syncStatus",
        value: {
          status: "synced",
        },
      }),
    },
  },
}

export const Syncing: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Sync Status",
      render: () => ({
        type: "syncStatus",
        value: {
          status: "syncing",
        },
      }),
    },
  },
}

export const Pending: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Sync Status",
      render: () => ({
        type: "syncStatus",
        value: {
          status: "pending",
        },
      }),
    },
  },
}

export const PartiallySynced: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Sync Status",
      render: () => ({
        type: "syncStatus",
        value: {
          status: "partiallySynced",
        },
      }),
    },
  },
}

export const Outdated: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Sync Status",
      render: () => ({
        type: "syncStatus",
        value: {
          status: "outdated",
        },
      }),
    },
  },
}

export const Failed: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Sync Status",
      render: () => ({
        type: "syncStatus",
        value: {
          status: "failed",
        },
      }),
    },
  },
}

export const CustomTooltip: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Sync Status",
      render: () => ({
        type: "syncStatus",
        value: {
          status: "synced",
          tooltip: "Last synced 2 minutes ago",
        },
      }),
    },
  },
}
