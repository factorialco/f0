import type { Meta, StoryObj } from "@storybook/react-vite"

import { FC, useState } from "react"

import { F0Button } from "@/components/F0Button"
import {
  OnePersonListItem,
  OnePersonListItemProps,
} from "@/experimental/Lists/OnePersonListItem"
import { Default as OnePersonListItemDefault } from "@/experimental/Lists/OnePersonListItem/index.stories"
import { Placeholder } from "@/icons/app"
import CheckDoubleIcon from "@/icons/app/CheckDouble"
import CrossIcon from "@/icons/app/Cross"
import SaveIcon from "@/icons/app/Save"
import ShareIcon from "@/icons/app/Share"

import { getDialogAlikeArgTypes } from "../../common/__stories__/argsTypes.ts"
import { OTHER_ACTIONS, TABS } from "../../common/__stories__/mocks.ts"
import { F0Dialog } from "../index"
import { DialogNotificationInternal } from "../internal/DialogNotification"
import { dialogSizes } from "../types"

const meta: Meta<typeof F0Dialog> = {
  title: "Dialog",
  component: F0Dialog,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
      description: {
        component: [
          "<p>F0Dialog is a component that provides a dialog interface for the application. It is used to display a dialog to the user.</p>",
          "<div class='mt-2 bg-f1-background-secondary p-3 rounded-md'>Check the <a href='/docs/hooks/dialogs'>useDialog</a> before using this component.</div>",
        ].join(""),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ...getDialogAlikeArgTypes({
      componentName: "dialog",
    }),
    disableContentPadding: {
      description: "Disable the default padding from the dialog content area",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    type: {
      description:
        "The type of the dialog. It changes the primary action variant.",
      control: "select",
      options: ["default", "critical"],
      table: { defaultValue: { summary: "default" } },
    },
    size: {
      description: "The size of the dialog.",
      control: "select",
      options: dialogSizes,
      table: {
        type: { summary: dialogSizes.join(" | ") },
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
        <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
          <F0Button label="Open dialog" onClick={handleOpen} />
          <Story args={{ ...rest, isOpen: open, onClose: handleClose }} />
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof F0Dialog>

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
      closeOnClick: true,
    },
    children: <ExampleList itemsCount={20} />,
  },
}

export const Notification: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Team Status",
    children: <ExampleList itemsCount={20} />,
  },
  render: (args) => (
    <DialogNotificationInternal
      {...args}
      type="positive"
      title="Team Status"
      description="This is a description of the team status. Very long text that should wrap properly and not overflow the container boundaries."
      primaryAction={{
        label: "submit",
        icon: Placeholder,
        onClick: () => {},
        closeOnClick: true,
      }}
      secondaryAction={{
        label: "Cancel",
        icon: CrossIcon,
        onClick: () => {},
        closeOnClick: true,
      }}
    />
  ),
}

export const WithPromisePrimaryAction: Story = {
  args: {
    ...Default.args,
    primaryAction: {
      label: "submit",
      icon: Placeholder,
      onClick: () =>
        new Promise((resolve) => setTimeout(() => resolve(), 1000)),
      closeOnClick: true,
    },
  },
}

export const Modal: Story = {
  args: {
    ...Default.args,
    modal: true,
  },
}

export const WithSmSize: Story = {
  args: {
    isOpen: true,
    size: "sm",
    onClose: () => {},
    title: "Team Status",
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExampleList />,
  },
}

export const WithMdSize: Story = {
  args: {
    ...WithSmSize.args,
    size: "md",
  },
}

export const WithLgSize: Story = {
  args: {
    ...WithMdSize.args,
    size: "lg",
  },
}

export const WithXlSize: Story = {
  args: {
    ...WithLgSize.args,
    size: "xl",
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

export const WithFullscreenSize: Story = {
  args: {
    ...Default.args,
    size: "fullscreen",
  },
}

export const WithFullscreenSizeAndActions: Story = {
  args: {
    ...WithFullscreenSize.args,
    tabs: TABS,
    primaryAction: {
      label: "Approve",
      icon: CheckDoubleIcon,
      onClick: () => {},
    },
    secondaryAction: {
      label: "Reject",
      icon: CrossIcon,
      onClick: () => {},
    },
    children: <ExamplePersonList numberOfItems={3} />,
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
        closeOnClick: true,
      },
      {
        value: "save-draft",
        label: "Save as draft",
        onClick: () => console.log("Save as draft clicked"),
        closeOnClick: true,
      },
      {
        value: "save-publish",
        label: "Save and publish",
        icon: ShareIcon,
        onClick: () => console.log("Save and publish clicked"),
        closeOnClick: true,
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

export const WithModule: Story = {
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

export const WithModuleAndFullscreenSize: Story = {
  args: {
    ...WithModule.args,
    size: "fullscreen",
  },
}
