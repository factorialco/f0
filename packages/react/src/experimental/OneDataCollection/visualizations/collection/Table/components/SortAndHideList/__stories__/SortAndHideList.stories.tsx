import type { Meta, StoryObj } from "@storybook/react-vite"
import { SortAndHideList } from "../SortAndHideList"

const meta = {
  component: SortAndHideList,
  title: "DataCollection/SortAndHideList",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component for managing the sorting order and visibility of table columns. Users can drag items to reorder them and toggle their visibility with switches.",
      },
    },
  },
  tags: ["autodocs", "experimental", "internal"],
  argTypes: {
    items: {
      description: "Array of items that can be sorted and hidden",
      control: false,
    },
  },
} satisfies Meta<typeof SortAndHideList>

export default meta
type Story = StoryObj<typeof meta>

// Mock data for stories
const defaultItems = [
  {
    id: "name",
    label: "Name",
    sortable: true,
    canHide: false,
    visible: true,
    order: 1,
  },
  {
    id: "email",
    label: "Email",
    sortable: true,
    canHide: true,
    visible: true,
    order: 2,
  },
  {
    id: "role",
    label: "Role",
    sortable: true,
    canHide: true,
    visible: true,
    order: 3,
  },
  {
    id: "department",
    label: "Department",
    sortable: true,
    canHide: true,
    visible: false,
    order: 4,
  },
  {
    id: "salary",
    label: "Salary",
    sortable: false,
    canHide: true,
    visible: true,
    order: 5,
  },
]

export const Default: Story = {
  args: {
    items: defaultItems,
    allowSorting: true,
    allowHiding: true,
  },
}

export const WithAllItemsVisible: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: [
      {
        id: "name",
        label: "Name",
        sortable: true,
        canHide: true,
        visible: true,
        order: 1,
      },
      {
        id: "email",
        label: "Email",
        sortable: true,
        canHide: true,
        visible: true,
        order: 2,
      },
      {
        id: "role",
        label: "Role",
        sortable: true,
        canHide: true,
        visible: true,
        order: 3,
      },
    ],
  },
}

export const WithAllItemsHidden: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: [
      {
        id: "optional1",
        label: "Optional Column 1",
        sortable: true,
        canHide: true,
        visible: true,
        order: 1,
      },
      {
        id: "optional2",
        label: "Optional Column 2",
        sortable: true,
        canHide: true,
        visible: true,
        order: 2,
      },
      {
        id: "optional3",
        label: "Optional Column 3",
        sortable: false,
        canHide: true,
        visible: true,
        order: 3,
      },
    ],
  },
}

export const WithMixedStates: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: [
      {
        id: "required",
        label: "Required Column",
        sortable: true,
        canHide: false,
        visible: true,
        order: 1,
      },
      {
        id: "visible",
        label: "Visible Optional",
        sortable: true,
        canHide: true,
        visible: true,
        order: 2,
      },
      {
        id: "hidden",
        label: "Hidden Optional",
        sortable: true,
        canHide: true,
        visible: false,
        order: 3,
      },
      {
        id: "no-sort",
        label: "No Sort Available",
        sortable: false,
        canHide: true,
        visible: true,
        order: 4,
      },
    ],
  },
}

export const EmptyList: Story = {
  args: {
    items: [],
    allowSorting: true,
    allowHiding: true,
  },
}

export const SingleItem: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: [
      {
        id: "only",
        label: "Only Column",
        sortable: true,
        canHide: false,
        visible: true,
        order: 1,
      },
    ],
  },
}

export const LongLabels: Story = {
  args: {
    allowSorting: true,
    allowHiding: true,
    items: [
      {
        id: "long1",
        label:
          "This is a very long column name that might wrap to multiple lines",
        sortable: true,
        canHide: true,
        visible: true,
        order: 1,
      },
      {
        id: "long2",
        label:
          "Another extremely long column header that tests text overflow behavior",
        sortable: false,
        canHide: true,
        visible: false,
        order: 2,
      },
      {
        id: "short",
        label: "Short",
        sortable: true,
        canHide: false,
        visible: true,
        order: 3,
      },
    ],
  },
}
