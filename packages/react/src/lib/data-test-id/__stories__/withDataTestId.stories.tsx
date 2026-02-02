import type { Meta, StoryObj } from "@storybook/react"
import { expect, within } from "@storybook/test"
import React from "react"

import { F0Button } from "../../../components/F0Button"
import { withDataTestId } from "../index"

const WrappedButton = withDataTestId(F0Button)

const meta = {
  title: "Lib/withDataTestId",
  component: WrappedButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A higher-order component that adds a `data-test-id` attribute to the wrapped component.",
      },
    },
  },
  argTypes: {
    dataTestId: {
      control: "text",
      description: "The data-test-id attribute value",
    },
  },
} satisfies Meta<typeof WrappedButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Button with Test ID",
    dataTestId: "my-test-button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button")
    await expect(button).toHaveAttribute("data-test-id", "my-test-button")
  },
}

export const DynamicUpdate: Story = {
  args: {
    label: "Dynamic ID Button",
    dataTestId: "initial-id",
  },
  render: (args) => {
    const [testId, setTestId] = React.useState(args.dataTestId)

    return (
      <div className="flex flex-col gap-4">
        <WrappedButton {...args} dataTestId={testId} />
        <div className="flex gap-2">
          <button
            className="rounded border px-2 py-1 text-sm"
            onClick={() => setTestId("updated-id")}
          >
            Update ID
          </button>
          <div className="text-sm text-gray-500">Current ID: {testId}</div>
        </div>
      </div>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: "Dynamic ID Button" })

    await step("Check initial ID", async () => {
      await expect(button).toHaveAttribute("data-test-id", "initial-id")
    })

    await step("Update ID", async () => {
      const updateButton = canvas.getByText("Update ID")
      updateButton.click()
      // Wait for re-render if needed, but here it's sync
      await expect(button).toHaveAttribute("data-test-id", "updated-id")
    })
  },
}

// Example with a simple custom component
const SimpleComponent = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="rounded bg-blue-100 p-4 text-blue-800" {...props}>
    {children}
  </div>
)

const WrappedSimpleComponent = withDataTestId(SimpleComponent)

export const CustomComponent: Story = {
  render: () => (
    <WrappedSimpleComponent dataTestId="custom-component-id">
      I am a custom component with a test ID
    </WrappedSimpleComponent>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const element = canvas.getByText("I am a custom component with a test ID")
    await expect(element).toHaveAttribute("data-test-id", "custom-component-id")
  },
}
