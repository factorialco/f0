import { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { UpsellingPopover } from "."

const meta: Meta<typeof UpsellingPopover> = {
  title: "UpsellingKit/UpsellingPopover",
  component: UpsellingPopover,
  argTypes: {
    actions: {
      control: "object",
      description: "Custom actions component to display",
    },
    label: {
      control: "text",
      description: "Label of the button that opens the popover",
    },
    icon: {
      control: "object",
      description: "Custom icon to display",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the icon",
    },
    side: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
      description: "Side of the popover",
    },
    width: {
      control: "text",
      description: "Width of the popover",
    },
    trackVisibility: {
      control: "object",
      description: "Function to track visibility",
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alignment of the popover",
    },
    variant: {
      control: "select",
      options: ["promote", "default"],
      description: "Variant of the popover",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the popover",
    },
    mediaUrl: {
      control: "text",
      description: "URL of the media to display",
    },
    title: {
      control: "text",
      description: "Title of the popover",
    },
    description: {
      control: "text",
      description: "Description of the popover",
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    mediaUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    title: "More benefits to René & your team",
    description:
      "Enjoy greater savings through flexible benefits like meals, transport, and health insurance.",
    onClick: () => {
      console.log("clicked")
    },
    actions: [
      {
        label: "Learn more",
        onClick: () => {
          console.log("clicked")
        },
        type: "regular",
        variant: "promote",
      },
    ],
  },
  tags: ["autodocs", "no-sidebar"],
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <UpsellingPopover
        {...args}
        label="Add reaction"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        variant="promote"
        size="md"
        showIcon={true}
        mediaUrl={args.mediaUrl}
        title={args.title}
        description={args.description}
        width={args.width}
        trackVisibility={args.trackVisibility}
      />
    )
  },
}
export const WithUpsellingButton: Story = {
  args: {
    mediaUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    title: "More benefits to René & your team",
    description:
      "Enjoy greater savings through flexible benefits like meals, transport, and health insurance.",
    onClick: () => {
      console.log("clicked")
    },
    actions: [
      {
        type: "upsell",
        variant: "promote",
        label: "Request Information",
        showConfirmation: true,
        errorMessage: {
          title: "Request failed",
          description:
            "We couldn't process your request. Please try again later.",
        },
        onClick: async () => {
          console.log("onRequest")
          await new Promise((resolve) => setTimeout(resolve, 1000))
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
    ],
  },
  tags: ["autodocs", "no-sidebar"],
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <UpsellingPopover
        {...args}
        label="Add reaction"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        variant="promote"
        size="md"
        side="right"
        align="center"
        showIcon={true}
        mediaUrl={args.mediaUrl}
        title={args.title}
        description={args.description}
        width={args.width}
        trackVisibility={args.trackVisibility}
        actions={args.actions}
      />
    )
  },
}
