import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, userEvent, within } from "storybook/test"
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
    hidden: false,
    order: 1,
  },
  {
    id: "email",
    label: "Email",
    sortable: true,
    canHide: true,
    hidden: false,
    order: 2,
  },
  {
    id: "role",
    label: "Role",
    sortable: true,
    canHide: true,
    hidden: false,
    order: 3,
  },
  {
    id: "department",
    label: "Department",
    sortable: true,
    canHide: true,
    hidden: true,
    order: 4,
  },
  {
    id: "salary",
    label: "Salary",
    sortable: false,
    canHide: true,
    hidden: false,
    order: 5,
  },
]

export const Default: Story = {
  args: {
    items: defaultItems,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Check that all visible items are rendered", async () => {
      // Verify that the component renders the correct number of items
      const listItems = canvas.getAllByRole("listitem")
      await expect(listItems).toHaveLength(defaultItems.length)

      // Verify that each item has a label
      await expect(canvas.getByText("Name")).toBeInTheDocument()
      await expect(canvas.getByText("Email")).toBeInTheDocument()
      await expect(canvas.getByText("Role")).toBeInTheDocument()
      await expect(canvas.getByText("Department")).toBeInTheDocument()
      await expect(canvas.getByText("Salary")).toBeInTheDocument()
    })

    await step("Check that sort icons are displayed", async () => {
      // All items should have sort icons (drag handles)
      const sortIcons = canvas.getAllByRole("img")
      await expect(sortIcons.length).toBeGreaterThan(0)
    })

    await step("Check switch states and interactions", async () => {
      const switches = canvas.getAllByRole("switch")

      // The Department item should be checked (hidden: true)
      const departmentSwitch = switches.find(
        (switchEl: HTMLElement) =>
          switchEl.getAttribute("title") === "Department"
      )
      await expect(departmentSwitch).toBeChecked()

      // The Name item should have a disabled switch (canHide: false)
      const nameSwitch = switches.find(
        (switchEl: HTMLElement) => switchEl.getAttribute("title") === "Name"
      )
      await expect(nameSwitch).toBeDisabled()

      // Test switch interaction on an enabled switch
      const emailSwitch = switches.find(
        (switchEl: HTMLElement) => switchEl.getAttribute("title") === "Email"
      )
      if (emailSwitch) {
        await userEvent.click(emailSwitch)
        // Note: Since the component doesn't actually update state in this mock,
        // we can't test state changes, but we can verify the click interaction works
      }
    })
  },
}

export const WithAllItemsVisible: Story = {
  args: {
    items: [
      {
        id: "name",
        label: "Name",
        sortable: true,
        canHide: true,
        hidden: false,
        order: 1,
      },
      {
        id: "email",
        label: "Email",
        sortable: true,
        canHide: true,
        hidden: false,
        order: 2,
      },
      {
        id: "role",
        label: "Role",
        sortable: true,
        canHide: true,
        hidden: false,
        order: 3,
      },
    ],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Verify all switches are unchecked and enabled", async () => {
      const switches = canvas.getAllByRole("switch")

      for (const switchEl of switches) {
        await expect(switchEl).not.toBeChecked()
        await expect(switchEl).not.toBeDisabled()
      }
    })
  },
}

export const WithAllItemsHidden: Story = {
  args: {
    items: [
      {
        id: "optional1",
        label: "Optional Column 1",
        sortable: true,
        canHide: true,
        hidden: true,
        order: 1,
      },
      {
        id: "optional2",
        label: "Optional Column 2",
        sortable: true,
        canHide: true,
        hidden: true,
        order: 2,
      },
      {
        id: "optional3",
        label: "Optional Column 3",
        sortable: false,
        canHide: true,
        hidden: true,
        order: 3,
      },
    ],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Verify all switches are checked", async () => {
      const switches = canvas.getAllByRole("switch")

      for (const switchEl of switches) {
        await expect(switchEl).toBeChecked()
        await expect(switchEl).not.toBeDisabled()
      }
    })
  },
}

export const WithMixedStates: Story = {
  args: {
    items: [
      {
        id: "required",
        label: "Required Column",
        sortable: true,
        canHide: false,
        hidden: false,
        order: 1,
      },
      {
        id: "visible",
        label: "Visible Optional",
        sortable: true,
        canHide: true,
        hidden: false,
        order: 2,
      },
      {
        id: "hidden",
        label: "Hidden Optional",
        sortable: true,
        canHide: true,
        hidden: true,
        order: 3,
      },
      {
        id: "no-sort",
        label: "No Sort Available",
        sortable: false,
        canHide: true,
        hidden: false,
        order: 4,
      },
    ],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Verify mixed switch states", async () => {
      const switches = canvas.getAllByRole("switch")

      // Required column should be disabled
      const requiredSwitch = switches.find(
        (switchEl: HTMLElement) =>
          switchEl.getAttribute("title") === "Required Column"
      )
      await expect(requiredSwitch).toBeDisabled()
      await expect(requiredSwitch).not.toBeChecked()

      // Visible optional should be unchecked and enabled
      const visibleSwitch = switches.find(
        (switchEl: HTMLElement) =>
          switchEl.getAttribute("title") === "Visible Optional"
      )
      await expect(visibleSwitch).not.toBeChecked()
      await expect(visibleSwitch).not.toBeDisabled()

      // Hidden optional should be checked and enabled
      const hiddenSwitch = switches.find(
        (switchEl: HTMLElement) =>
          switchEl.getAttribute("title") === "Hidden Optional"
      )
      await expect(hiddenSwitch).toBeChecked()
      await expect(hiddenSwitch).not.toBeDisabled()
    })
  },
}

export const EmptyList: Story = {
  args: {
    items: [],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Verify empty list renders without errors", async () => {
      // Should render an empty ordered list
      const list = canvas.getByRole("list")
      await expect(list).toBeInTheDocument()

      // Should not have any list items
      const listItems = canvas.queryAllByRole("listitem")
      await expect(listItems).toHaveLength(0)
    })
  },
}

export const SingleItem: Story = {
  args: {
    items: [
      {
        id: "only",
        label: "Only Column",
        sortable: true,
        canHide: false,
        hidden: false,
        order: 1,
      },
    ],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Verify single item renders correctly", async () => {
      const listItems = canvas.getAllByRole("listitem")
      await expect(listItems).toHaveLength(1)

      await expect(canvas.getByText("Only Column")).toBeInTheDocument()

      const switchEl = canvas.getByRole("switch")
      await expect(switchEl).toBeDisabled()
    })
  },
}

export const LongLabels: Story = {
  args: {
    items: [
      {
        id: "long1",
        label:
          "This is a very long column name that might wrap to multiple lines",
        sortable: true,
        canHide: true,
        hidden: false,
        order: 1,
      },
      {
        id: "long2",
        label:
          "Another extremely long column header that tests text overflow behavior",
        sortable: false,
        canHide: true,
        hidden: true,
        order: 2,
      },
      {
        id: "short",
        label: "Short",
        sortable: true,
        canHide: false,
        hidden: false,
        order: 3,
      },
    ],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Verify long labels are handled correctly", async () => {
      const listItems = canvas.getAllByRole("listitem")
      await expect(listItems).toHaveLength(3)

      // Verify all labels are present
      await expect(
        canvas.getByText(
          "This is a very long column name that might wrap to multiple lines"
        )
      ).toBeInTheDocument()
      await expect(
        canvas.getByText(
          "Another extremely long column header that tests text overflow behavior"
        )
      ).toBeInTheDocument()
      await expect(canvas.getByText("Short")).toBeInTheDocument()
    })
  },
}
