import { Download, Upsell } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { BaseBanner } from "./index"

const meta = {
  title: "Experimental/Banners/BaseBanner",
  component: BaseBanner,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BaseBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Boost your productivity",
    subtitle: "Discover new features that will help you work more efficiently",
    mediaUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    primaryAction: {
      label: "Get Started",
      onClick: () => alert("Primary action clicked"),
    },
    secondaryAction: {
      label: "Learn More",
      onClick: () => alert("Secondary action clicked"),
    },
    onClose: () => alert("Banner closed"),
  },
}

export const WithVideo: Story = {
  args: {
    title: "New video tutorial available",
    subtitle: "Learn how to use our latest features in this comprehensive guide",
    mediaUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    primaryAction: {
      label: "Watch Now",
      onClick: () => alert("Watch video"),
    },
    onClose: () => alert("Banner closed"),
  },
}

export const NoActions: Story = {
  args: {
    title: "Welcome to our platform",
    subtitle: "We're excited to have you on board. Explore and enjoy your experience!",
    mediaUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    onClose: () => alert("Banner closed"),
  },
}

export const WithCustomActions: Story = {
  args: {
    title: "Special offer available",
    subtitle: "Don't miss out on our limited-time promotion",
    mediaUrl:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    primaryAction: {
      label: "Claim Offer",
      onClick: () => alert("Offer claimed"),
      variant: "default",
    },
    secondaryAction: {
      label: "Not Now",
      onClick: () => alert("Dismissed"),
      variant: "ghost",
    },
    onClose: () => alert("Banner closed"),
  },
}

export const Loading: Story = {
  args: {
    title: "Loading content...",
    subtitle: "Please wait while we load your personalized content",
    mediaUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    isLoading: true,
  },
}

export const WithIcons: Story = {
  args: {
    title: "Premium features available",
    subtitle: "Upgrade your experience with our premium features and tools",
    mediaUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    primaryAction: {
      label: "Upgrade Now",
      onClick: () => alert("Upgrade clicked"),
      variant: "outline",
      icon: Upsell,
    },
    secondaryAction: {
      label: "Download Guide",
      onClick: () => alert("Download clicked"),
      variant: "outline",
      icon: Download,
    },
    onClose: () => alert("Banner closed"),
  },
}

export const FullWidthText: Story = {
  args: {
    title: "⭐ Our top-selling add-on: Projects",
    subtitle:
      "Thousands of teams already trust Projects, our best-selling module, to plan, control costs, and keep everything on track. Add it to your plan before October 31st and get 1 year of One — your new AI assistant — for free.",
    mediaUrl:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    variant: "full-width",
    primaryAction: {
      label: "Add Projects",
      onClick: () => alert("Add Projects clicked"),
    },
    secondaryAction: {
      label: "Learn More",
      onClick: () => alert("Learn More clicked"),
    },
    onClose: () => alert("Banner closed"),
  },
}
