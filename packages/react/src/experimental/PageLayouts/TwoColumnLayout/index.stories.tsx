import type { Meta, StoryObj } from "@storybook/react"

import { ComponentProps } from "react"
import { PageDecorator } from "../../../lib/storybook-utils/pageDecorator"
import { Dashboard } from "../../Widgets/Layout/Dashboard"
import * as DashboardStories from "../../Widgets/Layout/Dashboard/index.stories"
import { DetailsItemsList } from "../Utils/DetailsItemsList"
import * as DetailsItemsListStories from "../Utils/DetailsItemsList/index.stories"
import { TwoColumnLayout } from "./index"

const meta = {
  title: "Layout/TwoColumnLayout",
  component: TwoColumnLayout,
  tags: ["autodocs"],
  decorators: [PageDecorator],
  args: {
    children: (
      <div className="flex h-64 items-center justify-center bg-f1-foreground-info text-f1-foreground-inverse">
        Main
      </div>
    ),
    sideContent: (
      <div className="flex h-48 items-center justify-center bg-f1-foreground-secondary text-f1-foreground-inverse">
        Side
      </div>
    ),
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
  },
} satisfies Meta<typeof TwoColumnLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Profile: Story = {
  args: {
    children: <Dashboard {...DashboardStories.default.args} />,
    sideContent: (
      <DetailsItemsList
        {...(DetailsItemsListStories.default.args as ComponentProps<
          typeof DetailsItemsList
        >)}
      />
    ),
  },
}

export const MainColumnRight: Story = {
  args: {
    ...Default.args,
    mainColumnPosition: "right",
  },
}
