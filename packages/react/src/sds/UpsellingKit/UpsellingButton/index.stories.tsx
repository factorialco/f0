import type { Meta, StoryObj } from "@storybook/react-vite"

import { UpsellingButton } from "./index"

const meta = {
  title: "UpsellingKit/UpsellingButton",
  component: UpsellingButton,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Web-components?node-id=41-1256&t=99GWQFvFLZtKW49N-4",
    },
  },
  tags: ["autodocs"],
  args: {
    label: "Request Information",
    size: "md",
    showConfirmation: true,
    onRequest: async () => {
      console.log("onRequest")
      await new Promise((resolve) => setTimeout(resolve, 1000))
    },
    errorMessage: {
      title: "Request failed",
      description: "We couldn't process your request. Please try again later.",
    },
    successMessage: {
      title: "Request submitted!",
      description:
        "One of our experts will contact you as soon as possible with all the details.",
      buttonLabel: "Discover more products",
      buttonOnClick: () => {
        console.log("buttonOnClick")
      },
    },
    loadingState: {
      label: "Processing...",
    },
    nextSteps: {
      title: "Next steps",
      items: [
        {
          text: "Request information",
          isCompleted: true,
        },
        {
          text: "Product expert contacting you.",
        },
        {
          text: "Demo to answer all your questions",
        },
      ],
    },
    closeLabel: "Close",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the button",
    },
    label: {
      control: "text",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the Upsell icon (default: true)",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    loading: {
      control: "boolean",
      description: "Whether the button is loading",
    },
    hideLabel: {
      control: "boolean",
      description: "Hide label and show only icon",
    },
  },
} satisfies Meta<typeof UpsellingButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Request Information",
  },
}

export const WithoutIcon: Story = {
  args: {
    label: "Request Information",
    showIcon: false,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    label: "Processing...",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Request Information",
  },
}

export const OutlinePromote: Story = {
  args: {
    variant: "outlinePromote",
    label: "Request Information",
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <UpsellingButton {...args} size="sm" label="Request Information" />
      <UpsellingButton {...args} size="md" label="Request Information" />
      <UpsellingButton {...args} size="lg" label="Request Information" />
    </div>
  ),
}
