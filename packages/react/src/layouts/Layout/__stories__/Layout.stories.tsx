import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useCallback, useMemo, useState } from "react"
import { expect, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"
import * as DetailsItemsListStories from "@/experimental/Lists/DetailsItemsList/index.stories"
import { Dashboard } from "@/experimental/Widgets/Layout/Dashboard"
import * as DashboardStories from "@/experimental/Widgets/Layout/Dashboard/index.stories"
import { PageDecorator } from "@/lib/storybook-utils/pageDecorator"
import { withSkipA11y } from "@/lib/storybook-utils/parameters"

import { Layout } from "../index"

const FocusableElement = () => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="focusable-element">Focusable Element</label>
      <div>
        <input
          type="text"
          className="border-1 border-solid border-f1-border bg-[#fff] px-2"
          id="focusable-element"
        />
      </div>
    </div>
  )
}
const meta = {
  title: "Layout System",
  component: Layout.Page,
  tags: ["autodocs", "experimental"],
  decorators: [PageDecorator],
  args: {
    children: (
      <div className="flex h-[800px] flex-col items-center justify-center bg-f1-foreground-info text-f1-foreground-inverse">
        Main
        <FocusableElement />
        <p>
          Should the the first focusable element even if main is on right side
        </p>
      </div>
    ),
    header: (
      <div className="flex items-center justify-center gap-4 p-3">
        Header
        <FocusableElement />
      </div>
    ),
    aside: (
      <div className="flex h-48 flex-col items-center justify-center bg-f1-foreground-secondary text-f1-foreground-inverse">
        Aside
        <FocusableElement />
      </div>
    ),
  },
  parameters: withSkipA11y({
    layout: "fullscreen",
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
    docs: {
      description: {
        component: [
          "This component provides a page layout and the subcomponents to build a page: Groups and blocks",
          "A groups represents a section of the page and can contain blocks with relationships between them",
          "A block represents a content section of the page and can contain other blocks or content",
          "The page layout is a responsive layout that can be used to display a page with a header, aside and main content",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
      story: {
        height: "650px",
      },
    },
  }),
} satisfies Meta<typeof Layout.Page>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ProfileExample: Story = {
  args: {
    variant: "main-aside",
    children: (
      <Layout.Block>
        <Dashboard {...DashboardStories.default.args} />
      </Layout.Block>
    ),
    header: (
      <Layout.Block variant="full">
        <div className="flex flex-col items-center justify-center bg-f1-foreground-secondary p-3 text-f1-foreground-inverse">
          Header
        </div>
      </Layout.Block>
    ),
    aside: (
      <Layout.Block>
        <DetailsItemsList
          {...(DetailsItemsListStories.default.args as ComponentProps<
            typeof DetailsItemsList
          >)}
        />
      </Layout.Block>
    ),
  },
}

export const AsideMainVariant: Story = {
  args: {
    ...Default.args,
    variant: "aside-main",
  },
}

export const WithContentBlocks: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <Layout.BlockContent
          title="Welcome Dashboard"
          description="Here's an overview of your current activities and metrics"
          variant="default"
        >
          <Dashboard {...DashboardStories.default.args} />
        </Layout.BlockContent>

        <Layout.BlockContent
          title="Quick Actions"
          description="Frequently used actions and shortcuts"
          titleLevel="h3"
          variant="full-width"
        >
          <div className="grid grid-cols-2 gap-4">
            <button className="rounded border bg-f1-background-secondary p-4">
              Action 1
            </button>
            <button className="rounded border bg-f1-background-secondary p-4">
              Action 2
            </button>
          </div>
        </Layout.BlockContent>

        <Layout.BlockContent title="System Status" titleLevel="h4">
          <div className="text-sm text-f1-foreground-secondary">
            All systems operational ✅
          </div>
        </Layout.BlockContent>

        <Layout.Group sortable>
          <Layout.BlockContent title="System Status" titleLevel="h4">
            <div className="text-sm text-f1-foreground-secondary">
              All systems operational ✅
            </div>
          </Layout.BlockContent>
          <Layout.BlockContent title="System Status 2" titleLevel="h4">
            <div className="text-sm text-f1-foreground-secondary">
              All systems operational 2✅
            </div>
          </Layout.BlockContent>
        </Layout.Group>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing multiple PageLayoutContentBlock components with different configurations - titles, descriptions, and content types.",
      },
    },
  },
}

export const WithGroupMasonry: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <Layout.BlockContent
          title="Fluid Grid Group Layout example"
          description="This is an example of a Fluid Grid Group Layout."
          variant="default"
        >
          The content above is a `GridGroupLayout`
        </Layout.BlockContent>
        <Layout.GroupMasonry
          main
          sortable={true}
          onSort={(items: React.ReactNode[]) => console.log(items)}
          blocks={[
            {
              id: "0",
              render: (
                <Layout.BlockContent
                  className="min-w-[500px] bg-[#ff000030]"
                  title="Quick Actions"
                  description="Frequently used actions and shortcuts"
                  titleLevel="h3"
                  variant="full-width"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <button className="rounded border bg-f1-background-secondary p-4">
                      Action 1
                    </button>
                    <button className="rounded border bg-f1-background-secondary p-4">
                      Action 2
                    </button>
                  </div>
                </Layout.BlockContent>
              ),
            },
            {
              id: "1",
              render: (
                <Layout.BlockContent
                  title="System Status"
                  titleLevel="h4"
                  className="w-100 min-w-full bg-[#00ff0030]"
                >
                  <div className="text-sm text-f1-foreground-secondary">
                    Block 2 (full width)
                  </div>
                </Layout.BlockContent>
              ),
            },
            {
              id: "2",
              render: (
                <Layout.BlockContent
                  title="System Status"
                  titleLevel="h4"
                  className="min-w-[100px] bg-[#0000ff30]"
                >
                  <div className="text-sm text-f1-foreground-secondary">
                    Block 3
                  </div>
                </Layout.BlockContent>
              ),
            },
            ...Array.from({ length: 10 }).map((_, index) => ({
              id: `block-${index}`,
              render: (
                <Layout.Block
                  className={`bg-[rgb(${(index * 53) % 255}, ${(index * 113) % 255}, ${(index * 197) % 255}, 0.18)]`}
                >
                  Block {index + 4}
                </Layout.Block>
              ),
            })),
          ]}
        />
      </>
    ),
  },
}

const getMockAllowedSizes = (index: number) => {
  return [
    { w: 1, h: 1 },
    { w: 2, h: 2 },
    { w: 4, h: 2 },
  ].slice(index % 3)
}

export const WithGroupGrid: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    const [editMode, setEditMode] = useState(false)
    const [globalCounter, setGlobalCounter] = useState(0)

    const widgets = useMemo(() => {
      return Array.from({ length: 22 }).map((_, index) => {
        return {
          id: `block-${index}`,
          w: getMockAllowedSizes(index)[0].w,
          h: getMockAllowedSizes(index)[0].h,
          availableSizes: getMockAllowedSizes(index),
          deps: ["globalCounter"],
          content: ({ globalCounter }: { globalCounter?: number }) => (
            <div>
              <h4>Block {index + 1}</h4>
              <p>Global counter: {globalCounter ?? 0}</p>
            </div>
          ),
        }
      })
    }, [])

    const widgetWrapper = useCallback(
      (children: React.ReactNode) => (
        <div className="h-full bg-[#ff000030] p-4">{children}</div>
      ),
      []
    )

    return (
      <Layout.Page {...args}>
        <>
          <Layout.BlockContent
            title="Fixed Grid Group Layout example"
            description="This is an example of a Grid Group Layout."
            variant="default"
          >
            <div className="flex items-center gap-2">
              <F0Checkbox
                title="Edit Mode"
                checked={editMode}
                onCheckedChange={(checked) => setEditMode(checked)}
              />
              <F0Button
                label="Increment Global Counter"
                onClick={() => setGlobalCounter(globalCounter + 1)}
              />
              <p>Global counter: {globalCounter}</p>
            </div>
            <p>The content above is a `GridGroupLayout`</p>
          </Layout.BlockContent>
          <Layout.GroupGrid
            main
            editMode={editMode}
            deps={{ globalCounter }}
            WidgetWrapper={widgetWrapper}
            widgets={widgets}
          />
        </>
      </Layout.Page>
    )
  },
}

export const WithDataTestId: Story = {
  args: {
    ...Default.args,
    dataTestId: "layout-page-test-id",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("layout-page-test-id")).toBeInTheDocument()
  },
}
