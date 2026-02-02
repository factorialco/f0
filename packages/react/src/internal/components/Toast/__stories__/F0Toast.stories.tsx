import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { fn } from "storybook/test"

import { F0Button } from "@/components/F0Button"

import { F0Toast } from "../F0Toast"

const meta: Meta<typeof F0Toast> = {
  component: F0Toast,
  title: "Components/Toast",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "⚠️ This is an internal component that is not exported from the package public API. Use it via `useToast` hook.",
      },
    },
  },
  argTypes: {
    title: {
      description: "Main heading for the toast",
    },
    description: {
      description:
        "Secondary text to provide additional information for the toast",
    },
    variant: {
      control: "select",
      options: ["error", "warning", "success", "default"],
      description: "Variant for the toast composition",
    },
    duration: {
      control: "number",
      description:
        "Duration in milliseconds before auto-dismissing. If not provided, toast stays open until manually closed.",
    },
    onClose: {
      description: "Callback function called when the toast is closed",
    },
    actions: {
      description:
        "Actions to display in the toast. Can be a single button, single link, or tuple [button, link]",
    },
  },
  decorators: [
    (Story, context) => {
      const [isOpen, setIsOpen] = useState(false)

      const originalOnClose = context.args.onClose

      // We hijack the onClose handler to sync the decorator state
      context.args.onClose = () => {
        setIsOpen(false)
        originalOnClose?.()
      }

      return (
        <div className="flex flex-col items-start gap-4 p-4">
          <div className="h-10">
            {!isOpen && (
              <F0Button label="Open Toast" onClick={() => setIsOpen(true)} />
            )}
          </div>
          {isOpen && <Story />}
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof F0Toast>

export const Default: Story = {
  args: {
    title: "Toast notification",
    description: "This is a default toast notification",
    variant: "default",
    onClose: fn(),
  },
  render: (args) => (
    <div className="w-[400px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const Success: Story = {
  args: {
    title: "Success!",
    description: "Your changes have been saved successfully.",
    variant: "success",
    onClose: fn(),
  },
  render: (args) => (
    <div className="w-[400px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const Error: Story = {
  args: {
    title: "Error occurred",
    description: "Something went wrong. Please try again.",
    variant: "error",
    onClose: fn(),
  },
  render: (args) => (
    <div className="w-[400px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const Warning: Story = {
  args: {
    title: "Warning",
    description: "Please review your changes before proceeding.",
    variant: "warning",
    onClose: fn(),
  },
  render: (args) => (
    <div className="w-[400px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const WithButtonAction: Story = {
  args: {
    title: "Action required",
    description: "You have pending changes that need your attention.",
    variant: "warning",
    onClose: fn(),
    actions: {
      type: "button",
      label: "Review",
      onClick: fn(),
    },
  },
  render: (args) => (
    <div className="w-[400px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const WithLinkAction: Story = {
  args: {
    title: "New feature available",
    description: "Check out our latest updates and improvements.",
    variant: "success",
    onClose: fn(),
    actions: {
      type: "link",
      label: "Learn more",
      href: "https://factorialhr.com/",
    },
  },
  render: (args) => (
    <div className="w-[400px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const WithButtonAndLink: Story = {
  args: {
    title: "Update available",
    description: "A new version is available with important improvements.",
    variant: "default",
    onClose: fn(),
    actions: [
      {
        type: "button",
        label: "Update now",
        onClick: fn(),
      },
      {
        type: "link",
        label: "View changelog",
        href: "https://factorialhr.com/",
      },
    ],
  },
  render: (args) => (
    <div className="w-[400px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const TitleOnly: Story = {
  args: {
    title: "Quick notification",
    variant: "success",
    onClose: fn(),
  },
  render: (args) => (
    <div className="w-[400px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const DescriptionOnly: Story = {
  args: {
    description: "This toast only has a description without a title.",
    variant: "default",
    onClose: fn(),
  },
  render: (args) => (
    <div className="w-[400px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const WithoutCloseButton: Story = {
  args: {
    title: "Auto-dismissing toast",
    description: "This toast will automatically close after 3 seconds.",
    variant: "success",
    duration: 3000,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true)

    if (!isOpen) {
      return (
        <div className="w-[400px] text-center text-f1-foreground-secondary">
          Toast has been dismissed
        </div>
      )
    }

    return (
      <div className="w-[400px]">
        <F0Toast {...args} onClose={() => setIsOpen(false)} />
      </div>
    )
  },
}

export const AutoDismiss: Story = {
  args: {
    title: "Auto-dismissing toast",
    description: "This toast will automatically close after 5 seconds.",
    variant: "success",
    duration: 5000,
    onClose: fn(),
  },
  render: (args) => (
    <div className="w-[400px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const Narrow: Story = {
  args: {
    title: "Short message",
    description: "Compact toast notification.",
    variant: "default",
    onClose: fn(),
  },
  render: (args) => (
    <div className="w-[280px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const Wide: Story = {
  args: {
    title: "Long notification title that spans multiple lines",
    description:
      "This is a longer description that demonstrates how the toast handles extended text content and wraps appropriately within the available space.",
    variant: "warning",
    onClose: fn(),
    actions: {
      type: "button",
      label: "Take action",
      onClick: fn(),
    },
  },
  render: (args) => (
    <div className="w-[600px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const WithKeepOpenAction: Story = {
  args: {
    title: "Action keeps toast open",
    description: "Clicking the action button will not close this toast.",
    variant: "default",
    onClose: fn(),
    actions: {
      type: "button",
      label: "Click me (Keep Open)",
      onClick: fn(),
      keepOpen: true,
    },
  },
  render: (args) => (
    <div className="w-[400px]">
      <F0Toast {...args} />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-[400px] flex-col gap-4">
      <F0Toast
        title="Default toast"
        description="This is a default variant toast"
        variant="default"
        onClose={fn()}
        duration={5000}
        actions={[
          {
            label: "Click me",
            onClick: fn(),
          },
          {
            type: "link",
            label: "Learn more",
            href: "https://factorialhr.com/",
          },
        ]}
      />
      <F0Toast
        title="Success toast"
        description="Operation completed successfully"
        variant="success"
        onClose={fn()}
        duration={5000}
      />
      <F0Toast
        title="Warning toast"
        description="Please review before proceeding"
        variant="warning"
        onClose={fn()}
        duration={5000}
      />
      <F0Toast
        title="Error toast"
        description="An error occurred"
        variant="error"
        onClose={fn()}
        duration={5000}
      />
    </div>
  ),
}
