import type { Meta, StoryObj } from "@storybook/react"
import { Placeholder } from "../../../lib/storybook-utils/placeholder"
import { Page } from "./index"

import { PageHeader } from "../Header/PageHeader"
import * as HeaderStories from "../Header/PageHeader/index.stories"
import { Tabs } from "../Tabs"
import * as TabsStories from "../Tabs/index.stories"

import { StandardLayout } from "@/components/layouts/StandardLayout"
import { ComponentProps } from "react"
import { Briefcase } from "../../../icons/app"
import { ApplicationFrame } from "../ApplicationFrame"

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
  icon: Briefcase,
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

export const WithAiAgent: Story = {
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
    aiAgent: {
      enabled: true,
      runtimeUrl: "/api/copilotkit",
    },
  },
}
