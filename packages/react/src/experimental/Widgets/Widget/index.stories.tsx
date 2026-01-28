import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"
import { fn } from "storybook/test"

import Pencil from "@/icons/app/Pencil"
import { Placeholder } from "@/lib/storybook-utils/placeholder"

import { Widget } from "./index"

const meta: Meta = {
  title: "Widgets/Widget",
  component: Widget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    header: {
      title: "A widget",
      subtitle: "2024",
      count: 2,
    },
    children: <Placeholder>Put your content in there</Placeholder>,
  } satisfies ComponentProps<typeof Widget>,
} satisfies Meta<typeof Widget>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLink: Story = {
  args: {
    ...meta.args,
    header: {
      title: "Wellness programs",
      subtitle: "Boosting workplace health",
      link: { url: "/", title: "Go to link", onClick: fn() },
    },
  },
}

export const WithLinkAndCustomIcon: Story = {
  args: {
    ...meta.args,
    header: {
      title: "Wellness programs",
      subtitle: "Boosting workplace health",
      link: { url: "/", title: "Go to link", onClick: fn(), icon: Pencil },
    },
  },
}

export const WithInfo: Story = {
  args: {
    ...meta.args,
    header: {
      title: "Insight title",
      subtitle: "Subtitle",
      info: "This is a tooltip",
    },
  },
}

export const WithAction: Story = {
  args: {
    ...meta.args,
    action: {
      label: "Show more",
      onClick: fn(),
    },
  },
}

export const WithCriticalAlert: Story = {
  args: {
    ...meta.args,
    alert: "12 alerts",
  },
}

export const WithStatus: Story = {
  args: {
    ...meta.args,
    status: {
      text: "Clocked in",
      variant: "positive",
    },
  },
}

export const MultipleContent: Story = {
  args: {
    ...meta.args,
    children: [
      Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-sm bg-f1-background-secondary p-3 text-center text-f1-foreground"
        >
          Content {index + 1}
        </div>
      )),
    ],
  },
}

export const Full: Story = {
  args: {
    ...meta.args,
    header: {
      title: "Wellness programs",
      subtitle: "Boosting workplace health",
      link: { url: "/", title: "Go to link" },
    },
    alert: "12 alerts",
    action: {
      label: "Show more",
      onClick: fn(),
    },
    children: [
      Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="rounded-sm bg-f1-background-secondary p-3 text-center text-f1-foreground"
        >
          Content {index + 1}
        </div>
      )),
    ],
  },
}

export const FullHeight: Story = {
  decorators: [
    (Story) => (
      <div className="h-[350px] w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    ...meta.args,
    fullHeight: true,
  },
}
