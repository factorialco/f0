import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, FC, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ResourceHeader } from "@/experimental/Information/Headers/ResourceHeader"
import { Default as ResourceHeaderDefault } from "@/experimental/Information/Headers/ResourceHeader/index.stories"
import {
  OnePersonListItem,
  OnePersonListItemProps,
} from "@/experimental/Lists/OnePersonListItem"
import { Default as OnePersonListItemDefault } from "@/experimental/Lists/OnePersonListItem/index.stories"
import { ApplicationFrame } from "@/experimental/Navigation/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/experimental/Navigation/ApplicationFrame/index.stories"
import { Placeholder } from "@/icons/app"
import SaveIcon from "@/icons/app/Save"
import ShareIcon from "@/icons/app/Share"

import { getDialogAlikeArgTypes } from "../../common/__stories__/argsTypes"
import { OTHER_ACTIONS, TABS } from "../../common/__stories__/mocks"
import { F0Drawer } from "../index"
import { drawerSizes } from "../types"

const meta: Meta<typeof F0Drawer> = {
  title: "Drawer",
  component: F0Drawer,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
      description: {
        component: [
          "<p>F0Drawer is a component that provides a drawer interface for the application. It is used to display a drawer to the user.</p>",
        ].join(""),
      },
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    ...getDialogAlikeArgTypes({
      componentName: "drawer",
      exclude: ["size"],
    }),
    size: {
      description: "The size of the drawer.",
      control: "select",
      options: drawerSizes,
      table: {
        type: { summary: drawerSizes.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
  },
  decorators: [
    (Story, { args: { isOpen, ...rest } }) => {
      const [open, setOpen] = useState(isOpen)

      const handleClose = () => {
        setOpen(false)
      }
      const handleOpen = () => {
        setOpen(true)
      }

      return (
        <ApplicationFrame
          {...(ApplicationFrameStoryMeta.args as ComponentProps<
            typeof ApplicationFrame
          >)}
        >
          <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
            <F0Button label="Open dialog" onClick={handleOpen} />
            <Story args={{ ...rest, isOpen: open, onClose: handleClose }} />
          </div>
        </ApplicationFrame>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof F0Drawer>

const ExampleList = ({ itemsCount = 20 }: { itemsCount?: number }) => (
  <div className="flex flex-col gap-4">
    {Array.from({ length: itemsCount }, (_, i) => (
      <div
        key={i}
        className="rounded-sm border border-solid border-f1-border-secondary p-4"
      >
        List Item {i + 1}
      </div>
    ))}
  </div>
)

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Team Status",
    otherActions: OTHER_ACTIONS,
    primaryAction: {
      label: "submit",
      icon: Placeholder,
      onClick: () => {},
    },
    children: <ExampleList itemsCount={20} />,
  },
}

export const LeftPosition: Story = {
  args: {
    ...Default.args,
    position: "left",
  },
}

export const WithPromisePrimaryAction: Story = {
  args: {
    ...Default.args,
    primaryAction: {
      label: "submit",
      icon: Placeholder,
      onClick: () =>
        new Promise((resolve) => setTimeout(() => resolve(true), 5000)),
    },
  },
}

export const Modal: Story = {
  args: {
    ...Default.args,
    modal: true,
  },
}
export const WithDescription: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Team Status",
    description:
      "This is a description of the team status. Very long text that should wrap properly and not overflow the container boundaries.",
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExampleList />,
  },
}

const ExamplePersonList: FC<{ numberOfItems?: number }> = ({
  numberOfItems = 20,
}) => (
  <div className="flex flex-col gap-0.5">
    {Array.from({ length: numberOfItems }, (_, i) => (
      <OnePersonListItem
        key={i}
        {...(OnePersonListItemDefault.args as OnePersonListItemProps)}
      />
    ))}
  </div>
)

export const WithPersonListItems: Story = {
  args: {
    ...Default.args,
    tabs: TABS,
    children: <ExamplePersonList />,
  },
}

export const WithMultiplePrimaryActions: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Document Editor",
    description: "Edit your document and choose how to save it.",
    primaryAction: [
      {
        value: "save",
        label: "Save",
        icon: SaveIcon,
        onClick: () => console.log("Save clicked"),
      },
      {
        value: "save-draft",
        label: "Save as draft",
        onClick: () => console.log("Save as draft clicked"),
      },
      {
        value: "save-publish",
        label: "Save and publish",
        icon: ShareIcon,
        onClick: () => console.log("Save and publish clicked"),
      },
    ],
    secondaryAction: {
      label: "Cancel",
      onClick: () => {},
    },
    children: <ExampleList itemsCount={3} />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `primaryAction` receives an array of actions, it renders a `F0ButtonDropdown` allowing the user to select between multiple primary actions.",
      },
    },
  },
}

export const WithModuleAndTabs: Story = {
  args: {
    ...Default.args,
    title: "Team Status",
    module: {
      id: "benefits",
      label: "Benefits",
      href: "/benefits",
    },
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExamplePersonList />,
  },
}

export const WithResourceHeader: Story = {
  args: {
    ...Default.args,
    position: "right",
    title: "Resource Header",
    module: {
      id: "timeoff",
      label: "Time Off",
      href: "/timeoff",
    },
    children: (
      <ResourceHeader
        {...(ResourceHeaderDefault.args as ComponentProps<
          typeof ResourceHeader
        >)}
        primaryAction={undefined}
        secondaryActions={undefined}
        otherActions={undefined}
      />
    ),
  },
}
