import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"
import { expect, within } from "storybook/test"

import { Delete, Pencil } from "@/icons/app"
import { StandardLayout } from "@/layouts/StandardLayout"

import { Placeholder } from "@/lib/storybook-utils/placeholder"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import * as HeaderStories from "@/experimental/Navigation/Header/PageHeader/index.stories"
import { Tabs } from "@/patterns/Navigation/Tabs"
import * as TabsStories from "@/patterns/Navigation/Tabs/index.stories"
import { ResourceHeader } from "@/patterns/ResourceHeader"
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

/**
 * Scroll this one. A `ResourceHeader` in the header slot condenses as the body
 * scrolls: the metadata closes away, the avatar drops two sizes and the name
 * steps down to the heading type. The tab strip rises with it, because it is in
 * the same block.
 *
 * Nothing is switched on to get this. The page owns both the header slot and the
 * scrolling body, so it is the only thing that can drive the collapse, and it
 * does so for any resource header it finds. There is no prop, and no distance to
 * set: every resource page in the product condenses the same way.
 */
export const WithCollapsingResourceHeader: Story = {
  args: {
    header: (
      <>
        <PageHeader
          module={defaultModule}
          breadcrumbs={[
            { id: "employees", label: "Employees", href: "/employees" },
            { id: "employee", label: "Ainhoa Aznar Lago" },
          ]}
        />
        <ResourceHeader
          avatar={{
            type: "person",
            firstName: "Ainhoa",
            lastName: "Aznar Lago",
          }}
          title="Ainhoa Aznar Lago"
          description="Senior Product Designer"
          metadata={[
            {
              label: "Location",
              value: { type: "text", content: "Barcelona" },
            },
            {
              label: "Started",
              value: { type: "text", content: "12 Mar 2022" },
            },
          ]}
          primaryAction={{
            label: "Edit profile",
            icon: Pencil,
            onClick: () => {},
          }}
          otherActions={[
            {
              label: "Offboard",
              icon: Delete,
              critical: true,
              onClick: () => {},
            },
          ]}
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

/**
 * The same page without a resource header. Scrolling changes nothing, and the
 * page attaches no scroll listener and measures nothing, because there is no
 * header to condense. Breadcrumbs and tabs are not a resource.
 */
export const NothingToCondense: Story = {
  args: {
    header: (
      <>
        <PageHeader module={defaultModule} />
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

export const WithDataTestId: Story = {
  args: {
    ...Default.args,
    dataTestId: "page-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("page-test-id")).toBeInTheDocument()
  },
}
