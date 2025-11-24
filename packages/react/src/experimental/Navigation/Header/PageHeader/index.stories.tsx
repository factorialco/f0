import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { EllipsisHorizontal, Settings } from "../../../../icons/app"
import { PageHeader } from "./index"

const meta = {
  title: "Navigation/PageHeader",
  component: PageHeader,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-f1-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof PageHeader>

const defaultModule = {
  name: "Time Tracking",
  href: "/time-tracking",
  id: "time-tracking" as const,
}

const defaultActions = [
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "More options",
    icon: EllipsisHorizontal,
    actions: [
      {
        label: "Download",
        href: "/download",
      },
      {
        label: "Export",
        href: "/export",
      },
    ],
  },
]

const defaultNavigation = {
  previous: {
    url: "/previous",
    title: "Previous Employee: John Smith",
  },
  next: {
    url: "/next",
    title: "Next Employee: Sarah Johnson",
  },
  counter: {
    current: 1,
    total: 30,
  },
}

export const Default: Story = {
  args: {
    module: defaultModule,
  },
}

export const WithActions: Story = {
  args: {
    module: defaultModule,
    actions: defaultActions,
  },
}

export const WithStatus: Story = {
  args: {
    module: defaultModule,
    statusTag: {
      text: "Published",
      variant: "positive",
    },
  },
}

export const WithStatusVariants: Story = {
  args: {
    module: defaultModule,
    statusTag: {
      text: "Draft",
      variant: "warning",
      tooltip: "This document is not yet published",
    },
  },
}

export const WithNavigation: Story = {
  args: {
    module: defaultModule,
    navigation: defaultNavigation,
  },
}

export const WithNavigationDisabled: Story = {
  args: {
    module: defaultModule,
    navigation: {
      next: {
        url: "/next",
        title: "Next Employee: Sarah Johnson",
      },
      counter: {
        current: 1,
        total: 30,
      },
    },
  },
}

export const WithBreadcrumbs: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees_collection", label: "Company", href: "/employees" },
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
  },
}

export const WithSelectBreadcrumb: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      {
        type: "select",
        id: "employee",
        label: "Ainhoa Aznar Lago",
        searchbox: true,
        options: Array.from({ length: 10 }, (_, idx) => ({
          value: idx.toString(),
          label: `Offer ${idx}`,
        })),
        value: "1",
        onChange: (value) => {
          console.log("WithSelectBreadcrumb value", value)
        },
      },
    ],
  },
}

export const WithEverything: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    navigation: defaultNavigation,
    statusTag: {
      text: "Draft",
      tooltip: "This employee profile is not yet published",
      variant: "critical",
    },
    actions: defaultActions,
  },
}

export const WithProductUpdate: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    navigation: defaultNavigation,
    statusTag: {
      text: "Draft",
      tooltip: "This employee profile is not yet published",
      variant: "critical",
    },
    actions: defaultActions,
    productUpdates: {
      isVisible: true,
      hasUnread: true,
      label: "Latest from Projects",
      updatesPageUrl: "https://factorialmakers.atlassian.net/browse/FCT-24580",
      emptyScreen: {
        title: "There aren’t updates for Projects yet",
        description:
          "Check out our product updates page to see past launches and what’s coming.",
        buttonText: "Go to Updates",
      },
      errorScreen: {
        title: "Something went wrong",
        description:
          "We couldn’t load the latest updates. Please check your connection and try again.",
        buttonText: "Try again",
      },
      getUpdates: async () => {
        return new Promise((resolve) => {
          setTimeout(
            () =>
              resolve([
                {
                  title: "Project timetable with absence information",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                  mediaUrl:
                    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
                  updated: "4 mar 2025",
                  unread: true,
                },
                {
                  title: "Project timetable with absence information",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                  mediaUrl: "https://placecats.com/neo/1416/797/",
                  updated: "4 mar 2025",
                  unread: true,
                },
                {
                  title: "New Client section",
                  mediaUrl: "https://placecats.com/neo/300/200",
                  updated: "3 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                  unread: true,
                },
                {
                  title: "Spending tab in projects",
                  mediaUrl: "https://placecats.com/neo/300/200",
                  updated: "2 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                },
                {
                  title: "New Client section",
                  mediaUrl: "https://placecats.com/neo/300/200",
                  updated: "3 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                  unread: true,
                },
                {
                  title: "Spending tab in projects",
                  mediaUrl: "https://placecats.com/neo/300/200",
                  updated: "2 mar 2025",
                  href: "https://factorialmakers.atlassian.net/browse/FCT-24580",
                },
              ]),
            1000
          )
        })
      },

      onItemClick: () => {
        alert("onItemClick")
      },
      onHeaderClick: () => {
        alert("onHeaderClick")
      },
      currentModule: defaultModule.name,
      crossSelling: {
        isVisible: true,
        sectionTitle: "Discover other products",
        onClose: () => {
          alert("onClose")
        },
        products: [
          {
            title: "Factorial Next: AI Edition 2025",
            description:
              "Join the event to discover ONE, our most important launch yet. Live on 7 Oct at 16:30 (Spain)",
            onClick: () => {
              alert("onClick")
            },
            onClose: () => {
              alert("onClose")
            },
            dismissable: false,
            trackVisibility: (open) => {
              console.log("trackOpenChange", open)
            },
            type: "one-campaign",
          },
          {
            title: "Benefits",
            description:
              "Improve your team’s salary without impacting your budget through flexible compensation.",
            onClick: () => {
              alert("onClick")
            },
            onClose: () => {
              alert("onClose")
            },
            module: "project_management",
            dismissable: false,
            trackVisibility: (open) => {
              console.log("trackOpenChange", open)
            },
          },
          {
            title: "Projects",
            description: "Improve your.",
            onClick: () => {
              alert("onClick")
            },
            onClose: () => {
              alert("onClose")
            },
            module: "project_management",
            dismissable: false,
            trackVisibility: (open) => {
              console.log("trackOpenChange", open)
            },
          },
        ],
      },
    },
  },
}

export const WithFavorites: Story = {
  args: {
    module: defaultModule,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
    statusTag: {
      text: "Draft",
      tooltip: "This employee profile is not yet published",
      variant: "critical",
    },
    actions: defaultActions,
  },
  render: (props) => {
    const [isMarked, setIsMarked] = useState(false)

    return (
      <PageHeader
        {...props}
        favorites={{
          isMarked,
          label: "Mark as favorite",
          onChange: () => setIsMarked((current) => !current),
        }}
      />
    )
  },
}

export const Embedded: Story = {
  args: {
    module: defaultModule,
    embedded: true,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "employee", label: "Ainhoa Aznar Lago", href: "/employees/123" },
    ],
  },
}

export const EmbeddedWithLoading: Story = {
  args: {
    module: defaultModule,
    embedded: true,
    breadcrumbs: [
      { id: "employees", label: "Employees", href: "/employees" },
      { id: "loading", loading: true },
    ],
  },
}
