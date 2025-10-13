import type { Meta, StoryObj } from "@storybook/react-vite"

import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"
import * as DetailsItemsListStories from "@/experimental/Lists/DetailsItemsList/index.stories"
import { Dashboard } from "@/experimental/Widgets/Layout/Dashboard"
import * as DashboardStories from "@/experimental/Widgets/Layout/Dashboard/index.stories"
import { PageDecorator } from "@/lib/storybook-utils/pageDecorator"
import { ComponentProps } from "react"
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
      <div className="flex h-64 flex-col items-center justify-center bg-f1-foreground-info text-f1-foreground-inverse">
        Main
        <FocusableElement />
        <p>
          Should the the first focusable element even if main is on right side
        </p>
      </div>
    ),
    header: (
      <div className="flex flex-col items-center justify-center bg-f1-foreground-secondary p-3 text-f1-foreground-inverse">
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
          "A page layout component that is used to display a main content and a side content.",
          "The order of the content and the aside can be modified",
        ]
          .map((item) => <p key={item}>{item}</p>)
          .join(""),
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
    children: <Dashboard {...DashboardStories.default.args} />,
    header: (
      <div className="flex flex-col items-center justify-center bg-f1-foreground-secondary p-3 text-f1-foreground-inverse">
        Header
      </div>
    ),
    aside: (
      <DetailsItemsList
        {...(DetailsItemsListStories.default.args as ComponentProps<
          typeof DetailsItemsList
        >)}
      />
    ),
  },
}

export const ProfileWithSticky: Story = {
  args: {
    ...ProfileExample.args,
    stickyAside: true,
  },
}

export const AsideMain: Story = {
  args: {
    ...Default.args,
    variant: "aside-main",
  },
}
