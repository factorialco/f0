import type { Meta, StoryObj } from "@storybook/react-vite"

import { UpsellingBanner } from "."

const meta: Meta<typeof UpsellingBanner> = {
  title: "UpsellingKit/UpsellingBanner",
  component: UpsellingBanner,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    title: "Complete your financial picture",
    subtitle:
      "Without expenses, you're missing half the story. Add them to gain clarity and make better decisions.",
    mediaUrl: "https://placehold.co/400x225",
    primaryAction: {
      label: "Request information",
      onClick: () => alert("Request information"),
      errorMessage: {
        title: "Error",
        description: "Something went wrong. Please try again later.",
      },
      successMessage: {
        title: "Request submitted!",
        description: "One of our experts will contact you as soon as possible.",
        buttonLabel: "Discover more modules",
        buttonOnClick: () => alert("Discover more"),
      },
      loadingState: {
        label: "Processing...",
      },
      nextSteps: {
        title: "Next steps",
        items: [
          { text: "Request information", isCompleted: true },
          { text: "Product expert contacting you." },
          { text: "Demo to answer all your questions" },
        ],
      },
      closeLabel: "Close",
      showIcon: true,
      showConfirmation: true,
    },
    onClose: () => alert("Closed"),
    isLoading: false,
  },
}

export default meta
type Story = StoryObj<typeof UpsellingBanner>

export const Default: Story = {}

export const WithSecondaryAction: Story = {
  args: {
    secondaryAction: {
      label: "Learn more",
      onClick: () => alert("Learn more"),
    },
  },
}

export const Skeleton: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the skeleton loading state when data is being fetched.",
      },
    },
  },
}
