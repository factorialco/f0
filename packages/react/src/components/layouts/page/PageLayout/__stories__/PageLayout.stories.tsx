import type { Meta, StoryObj } from "@storybook/react-vite"

import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"
import * as DetailsItemsListStories from "@/experimental/Lists/DetailsItemsList/index.stories"
import { Dashboard } from "@/experimental/Widgets/Layout/Dashboard"
import * as DashboardStories from "@/experimental/Widgets/Layout/Dashboard/index.stories"
import { PageDecorator } from "@/lib/storybook-utils/pageDecorator"
import { ComponentProps } from "react"
import { PageLayoutContentBlock } from "../components/PageLayoutContentBlock"
import { PageLayout } from "../index"

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
  title: "Layout/Page/Page Layout",
  component: PageLayout,
  tags: ["autodocs"],
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
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
    docs: {
      description: {
        component: [
          "A page layout component that is used to display a main content, header and an aside content. This component manages the responsiveness of the content.",
          "This component doesnt provide any padding or margin for the content, only the content layout",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
      story: {
        height: "650px",
      },
    },
  },
} satisfies Meta<typeof PageLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ProfileExample: Story = {
  args: {
    variant: "main-aside",
    children: (
      <PageLayout.Block>
        <Dashboard {...DashboardStories.default.args} />
      </PageLayout.Block>
    ),
    header: (
      <PageLayout.Block variant="full">
        <div className="flex flex-col items-center justify-center bg-f1-foreground-secondary p-3 text-f1-foreground-inverse">
          Header
        </div>
      </PageLayout.Block>
    ),
    aside: (
      <PageLayout.Block>
        <DetailsItemsList
          {...(DetailsItemsListStories.default.args as ComponentProps<
            typeof DetailsItemsList
          >)}
        />
      </PageLayout.Block>
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
        <PageLayoutContentBlock
          title="Welcome Dashboard"
          description="Here's an overview of your current activities and metrics"
          variant="default"
        >
          <Dashboard {...DashboardStories.default.args} />
        </PageLayoutContentBlock>

        <PageLayoutContentBlock
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
        </PageLayoutContentBlock>

        <PageLayoutContentBlock title="System Status" titleLevel="h4">
          <div className="text-sm text-f1-foreground-secondary">
            All systems operational ✅
          </div>
        </PageLayoutContentBlock>
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
