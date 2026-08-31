import { Meta, StoryObj } from "@storybook/react-vite"

import { expect, userEvent, waitFor, within } from "storybook/test"

import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Status",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a status tag with different variants to indicate the current state or condition of items.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const StatusType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Status",
      render: (item) => ({
        type: "status",
        value: {
          status: "critical",
          label: item.status,
        },
      }),
    },
  },
}

export const WithTooltip: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    item: mockItem,
    property: {
      label: "Status",
      render: () => ({
        type: "status",
        value: {
          status: "warning",
          label: "Needs follow-up",
          tooltip:
            "The call ended before all screening information was collected.",
        },
      }),
    },
  },
}

/**
 * The tooltip also takes structured copy — a title, a body and a bulleted list —
 * for cells that must explain several things at once. A plain string still means
 * "title only", so existing cells are untouched.
 */
export const WithStructuredTooltip: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    item: mockItem,
    property: {
      label: "Alerts",
      render: () => ({
        type: "status",
        value: {
          status: "critical",
          label: "3",
          tooltip: {
            title: "3 alerts",
            description: "This row needs a look before it can be submitted.",
            items: [
              {
                title: "Not eligible",
                description: "Hired after the cycle cut-off.",
              },
              {
                title: "Over the cap",
                description: "Raise exceeds the 10% guideline.",
              },
              "Missing effective date",
            ],
          },
        },
      }),
    },
  },
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.closest("body")!)

    await userEvent.hover(within(canvasElement).getByText("3"))

    const tooltip = await waitFor(() => body.getByRole("tooltip"))
    await expect(tooltip).toHaveTextContent("3 alerts")
    await expect(tooltip).toHaveTextContent(
      "Not eligible Hired after the cycle cut-off."
    )
    await expect(within(tooltip).getAllByRole("listitem")).toHaveLength(3)
  },
}
