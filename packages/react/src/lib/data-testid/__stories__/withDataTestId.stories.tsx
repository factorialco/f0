import type { Meta, StoryObj } from "@storybook/react-vite"
import type { ComponentProps, HTMLAttributes } from "react"

import { useState } from "react"
import { expect, userEvent, within } from "storybook/test"

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
          "A higher-order component that adds a `data-testid` attribute to the wrapped component.",
      },
    },
  },
  argTypes: {
    dataTestId: {
      control: "text" as const,
      description: "The data-testid attribute value",
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
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("my-test-button")).toBeInTheDocument()
  },
}

export const DynamicUpdate: Story = {
  args: {
    label: "Dynamic ID Button",
    dataTestId: "initial-id",
  },
  render: (args: Record<string, unknown>) => {
    const [testId, setTestId] = useState<string | undefined>(
      args.dataTestId as string | undefined
    )

    return (
      <div className="flex flex-col gap-4">
        <WrappedButton
          {...(args as unknown as ComponentProps<typeof WrappedButton>)}
          dataTestId={testId}
        />
        <div className="flex gap-2">
          <button
            className="rounded border px-2 py-1 text-sm"
            onClick={() => {
              console.log("clicked")
              setTestId("updated-id")
            }}
          >
            Update ID
          </button>
          <div className="text-gray-500 text-sm">Current ID: {testId}</div>
        </div>
      </div>
    )
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Check initial ID", async () => {
      await expect(canvas.getByTestId("initial-id")).toBeInTheDocument()
    })

    await step("Update ID", async () => {
      const updateButton = canvas.getByText("Update ID")
      await userEvent.click(updateButton)
      await expect(canvas.getByTestId("updated-id")).toBeInTheDocument()
    })
  },
}

// Example with a simple custom component
const SimpleComponent = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className="bg-blue-100 text-blue-800 rounded p-4" {...props}>
    {children}
  </div>
)

const WrappedSimpleComponent = withDataTestId(SimpleComponent)

export const CustomComponent: Story = {
  args: { label: "" },
  render: () => (
    <WrappedSimpleComponent dataTestId="custom-component-id">
      I am a custom component with a test ID
    </WrappedSimpleComponent>
  ),
  play: async ({
    canvasElement,
  }: {
    canvasElement: HTMLElement
  }): Promise<void> => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("custom-component-id")).toBeInTheDocument()
  },
}
