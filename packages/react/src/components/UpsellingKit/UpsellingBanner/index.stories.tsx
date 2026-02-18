import type { Meta, StoryObj } from "@storybook/react-vite"

import { UpsellingBanner } from "."

const meta: Meta<typeof UpsellingBanner> = {
  title: "UpsellingKit/UpsellingBanner",
  component: UpsellingBanner,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs", "no-sidebar"],
  argTypes: {
    isLoading: {
      control: "boolean",
      description: "Show skeleton loading state",
    },
    primaryAction: {
      control: "object",
      description: "Banner primary action",
    },
    secondaryAction: {
      control: "object",
      description: "Banner secondary actionr",
    },
  },
}

export default meta
type Story = StoryObj<typeof UpsellingBanner>

export const Default: Story = {
  args: {
    title: "Complete your financial picture",
    subtitle:
      "Without expenses, you're missing half the story. Add them to gain clarity and make better decisions.",
    mediaUrl: "https://placehold.co/400x225", // 16:9 ratio
    primaryAction: {
      variant: "default",
      label: "Discover",
      onClick: () => alert("Request information"),
    },
    secondaryAction: {
      variant: "default",
      label: "Learn more",
      onClick: () => alert("Read more"),
    },
    onClose: () => alert("Closed"),
    isLoading: false,
  },
}

export const Promote: Story = {
  args: {
    title: "Try our new feature!",
    subtitle: "Experience the new dashboard with enhanced analytics.",
    mediaUrl: "https://placehold.co/400x225",
    primaryAction: {
      variant: "promote",
      label: "Request information",
      onClick: () => alert("Try now"),
      errorMessage: {
        title: "Error",
        description: "Something went wrong",
      },
      successMessage: {
        title: "Success",
        description: "Operation completed successfully",
        buttonLabel: "Discover more modules",
        buttonOnClick: () => alert("Close"),
      },
      loadingState: {
        label: "Loading...",
      },
      nextSteps: {
        title: "Next steps",
        items: [
          {
            text: "Step 1",
          },
        ],
      },
      closeLabel: "Close",
      showIcon: true,
      showConfirmation: true,
    },
    secondaryAction: {
      variant: "default",
      label: "Discover more modules",
      onClick: () => alert("Discover more modules"),
    },
    onClose: () => alert("Closed"),
    isLoading: false,
  },
}

export const OnlyPrimary: Story = {
  args: {
    title: "Upgrade your plan",
    subtitle: "Access more features and better support.",
    mediaUrl: "https://placehold.co/400x225",
    primaryAction: {
      variant: "promote",
      label: "Start now",
      onClick: () => alert("Upgrade"),
      errorMessage: {
        title: "Error",
        description: "Something went wrong",
      },
      successMessage: {
        title: "Success",
        description: "Operation completed successfully",
        buttonLabel: "Discover more modules",
        buttonOnClick: () => alert("Close"),
      },
      loadingState: {
        label: "Loading...",
      },
      nextSteps: {
        title: "Next steps",
        items: [
          {
            text: "Step 1",
          },
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

export const Skeleton: Story = {
  args: {
    title: "Loading banner...",
    subtitle: "This content is being loaded",
    mediaUrl: "https://placehold.co/400x225",
    primaryAction: {
      variant: "default",
      label: "Primary Action",
      onClick: () => {},
    },
    secondaryAction: {
      variant: "default",
      label: "Secondary",
      onClick: () => {},
    },
    onClose: () => {},
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows the skeleton loading state when data is being fetched or props are loading.",
      },
    },
  },
}
