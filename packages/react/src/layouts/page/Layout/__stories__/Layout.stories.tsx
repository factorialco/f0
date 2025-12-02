import type { Meta, StoryObj } from "@storybook/react-vite"

import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"
import * as DetailsItemsListStories from "@/experimental/Lists/DetailsItemsList/index.stories"
import { Dashboard } from "@/experimental/Widgets/Layout/Dashboard"
import * as DashboardStories from "@/experimental/Widgets/Layout/Dashboard/index.stories"

import { PageDecorator } from "@/lib/storybook-utils/pageDecorator"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"
import { Layout } from "../index"

const FocusableElement = () => {
  return (
    <div className="p-4">
      <label htmlFor="focusable-element">Focusable Element</label>
      <div>
        <input
          type="text"
          className="border-0 bg-[#fff] px-2"
          id="focusable-element"
        />
      </div>
    </div>
  )
}
const meta = {
  title: "Page/Layout",
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
      <div className="flex flex-col items-center justify-center bg-[#777] p-3 text-f1-foreground-inverse">
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
  parameters: {
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
  },
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

export const WithFluidGridGroupLayout: Story = {
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

export const WithFixedGridGroupLayout: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <Layout.BlockContent
          title="Fixed Grid Group Layout example"
          description="This is an example of a Grid Group Layout."
          variant="default"
        >
          The content above is a `GridGroupLayout`{" "}
        </Layout.BlockContent>
        <Layout.GroupGrid
          sortable={true}
          onSort={(items: React.ReactNode[]) => console.log(items)}
          blocks={Array.from({ length: 22 }).map((_, index) => {
            return {
              id: `block-${index}`,
              size: getMockAllowedSizes(index)[0],
              availableSizes: getMockAllowedSizes(index),
              render: (
                <Layout.Block
                  actions={[
                    {
                      items: [
                        {
                          label: "Action 1",
                          onClick: () => console.log("Action 1"),
                        },
                      ],
                    },
                  ]}
                  className={cn(
                    "rounded-md",
                    `bg-f1-background`,
                    "border-[1px] border-solid border-f1-border"
                  )}
                >
                  Block {index + 4}
                </Layout.Block>
              ),
            }
          })}
        />
      </>
    ),
  },
}
