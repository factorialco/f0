import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"

import { StandardLayout } from "@/layouts/StandardLayout"

import { Placeholder } from "../../../lib/storybook-utils/placeholder"
import { ApplicationFrame } from "../ApplicationFrame"
import { PageHeader } from "../Header/PageHeader"
import * as HeaderStories from "../Header/PageHeader/index.stories"
import { Tabs } from "../Tabs"
import * as TabsStories from "../Tabs/index.stories"
import { Page } from "./index"

type TabsProps = ComponentProps<typeof Tabs>

const meta: Meta<typeof Page> = {
  title: "Navigation/Page",
  component: Page,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ApplicationFrame sidebar={null}>
        <Story />
      </ApplicationFrame>
    ),
  ],
}

export default meta
type Story = StoryObj<ComponentProps<typeof Page>>

const defaultModule = {
  name: "Time Tracking",
  href: "/time-tracking",
  id: "time-tracking" as const,
}

// Common real-world combinations
export const Default: Story = {
  args: {
    header: (
      <>
        <PageHeader
          module={defaultModule}
          actions={HeaderStories.WithActions.args?.actions}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}

export const WithBreadcrumbs: Story = {
  args: {
    header: (
      <>
        <PageHeader
          module={defaultModule}
          breadcrumbs={[
            { id: "employees", label: "Employees", href: "/employees" },
            {
              id: "employee",
              label: "Ainhoa Aznar Lago",
              href: "/employees/123",
            },
          ]}
          actions={HeaderStories.WithActions.args?.actions}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}

export const WithBreadcrumbsAndStatus: Story = {
  args: {
    header: (
      <>
        <PageHeader
          module={defaultModule}
          breadcrumbs={[
            { id: "employees", label: "Employees", href: "/employees" },
            {
              id: "employee",
              label: "Ainhoa Aznar Lago",
              href: "/employees/123",
            },
          ]}
          statusTag={{
            text: "Draft",
            variant: "warning",
            tooltip: "This employee profile is not yet published",
          }}
          actions={HeaderStories.WithActions.args?.actions}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}

export const WithNavigation: Story = {
  args: {
    header: (
      <>
        <PageHeader
          module={defaultModule}
          navigation={{
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
          }}
          actions={HeaderStories.WithActions.args?.actions}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}

export const WithNavigationAndStatus: Story = {
  args: {
    header: (
      <>
        <PageHeader
          module={defaultModule}
          navigation={{
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
          }}
          statusTag={{
            text: "Processing",
            variant: "info",
            tooltip: "Importing employee data",
          }}
          actions={HeaderStories.WithActions.args?.actions}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}

export const Embedded: Story = {
  args: {
    embedded: true,
    header: (
      <>
        <PageHeader
          module={defaultModule}
          embedded
          breadcrumbs={[
            { id: "employees", label: "Employees", href: "/employees" },
            {
              id: "employee",
              label: "Ainhoa Aznar Lago",
              href: "/employees/123",
            },
          ]}
          statusTag={{
            text: "Published",
            variant: "positive",
          }}
        />
        <Tabs {...(TabsStories.Primary.args as TabsProps)} />
      </>
    ),
    children: (
      <StandardLayout>
        {Array(25)
          .fill(0)
          .map((_, index) => (
            <Placeholder key={index} className="min-h-24" />
          ))}
      </StandardLayout>
    ),
  },
}
