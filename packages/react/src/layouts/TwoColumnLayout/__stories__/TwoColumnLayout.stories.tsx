import type { Meta, StoryObj } from "@storybook/react-vite"

import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"
import * as DetailsItemsListStories from "@/experimental/Lists/DetailsItemsList/index.stories"
import { Dashboard } from "@/experimental/Widgets/Layout/Dashboard"
import * as DashboardStories from "@/experimental/Widgets/Layout/Dashboard/index.stories"
import { PageDecorator } from "@/lib/storybook-utils/pageDecorator"
import { ComponentProps } from "react"
import { TwoColumnLayout } from "../index"

const FocusableElement = () => {
  return (
    <div className="p-4">
      <label htmlFor="focusable-element">Focusable Element</label>
      <div>
        <input type="text" className="border-0 bg-[#fff] px-2" id="focusable-element" />
      </div>
    </div>
  )
}
const meta = {
  title: "TwoColumnLayout",
  component: TwoColumnLayout,
  tags: ["autodocs", "internal"],
  decorators: [PageDecorator],
  args: {
    children: (
      <div className="flex h-64 flex-col items-center justify-center bg-f1-foreground-info text-f1-foreground-inverse">
        Main
        <FocusableElement />
        <p>Should the the first focusable element even if main is on right side</p>
      </div>
    ),
    sideContent: (
      <div className="flex h-48 flex-col items-center justify-center bg-f1-foreground-secondary text-f1-foreground-inverse">
        Side
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
          "A two column layout component that is used to display a main content and a side content.",
          "The order of the content and the aside can be modified",
        ]
          .map((item) => <p key={item}>{item}</p>)
          .join(""),
      },
    },
  },
} satisfies Meta<typeof TwoColumnLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Profile: Story = {
  args: {
    mainColumnPosition: "left",
    children: <Dashboard {...DashboardStories.default.args} />,
    sideContent: (
      <DetailsItemsList
        {...(DetailsItemsListStories.default.args as ComponentProps<typeof DetailsItemsList>)}
      />
    ),
  },
}

export const ProfileWithSticky: Story = {
  args: {
    ...Profile.args,
    sticky: true,
  },
}

export const MainColumnRight: Story = {
  args: {
    ...Default.args,
    mainColumnPosition: "right",
  },
}
