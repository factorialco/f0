import { F0Button } from "@/components/F0Button"
import { ActivityItemList } from "@/experimental/Information/Activity/ActivityItemList"
import { Default as ActivityItemListDefault } from "@/experimental/Information/Activity/ActivityItemList/index.stories"
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
import CheckDoubleIcon from "@/icons/app/CheckDouble"
import CrossIcon from "@/icons/app/Cross"
import DeleteIcon from "@/icons/app/Delete"
import PencilIcon from "@/icons/app/Pencil"
import SaveIcon from "@/icons/app/Save"
import ShareIcon from "@/icons/app/Share"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentProps, FC, useState } from "react"
import { F0Dialog } from "../index"
import { dialogPositions, dialogWidths } from "../types"

const meta: Meta<typeof F0Dialog> = {
  title: "Dialog",
  component: F0Dialog,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    position: {
      description: "The position of the dialog",
      control: {
        type: "select",
        options: dialogPositions,
      },
    },
    width: {
      description: "The width of the dialog. ⚠️ Only applies to center position",
      control: {
        type: "select",
        options: dialogWidths,
      },
      table: {
        type: { summary: "sm | md | lg" },
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
type Story = StoryObj<typeof F0Dialog>

const TABS = [
  {
    id: "out-of-office",
    label: "Out of office",
  },
  {
    id: "missing-clock-in",
    label: "Missing clock in",
  },
  {
    id: "clocked-in",
    label: "Clocked in",
  },
  {
    id: "in-a-break",
    label: "In a break",
  },
]

const OTHER_ACTIONS = [
  {
    label: "Edit",
    icon: PencilIcon,
    onClick: () => {},
  },
  {
    label: "Delete",
    icon: DeleteIcon,
    onClick: () => {},
  },
]

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
    children: <ExampleList itemsCount={2} />,
  },
}

export const WithSmWidth: Story = {
  args: {
    isOpen: true,
    width: "sm",
    onClose: () => {},
    title: "Team Status",
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExampleList />,
  },
}

export const WithMdWidth: Story = {
  args: {
    ...WithSmWidth.args,
    width: "md",
  },
}

export const WithLgWidth: Story = {
  args: {
    ...WithMdWidth.args,
    width: "lg",
  },
}

export const WithXlWidth: Story = {
  args: {
    ...WithLgWidth.args,
    width: "xl",
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

export const WithLeftPosition: Story = {
  args: {
    ...Default.args,
    position: "left",
    title: "Activity",
    otherActions: OTHER_ACTIONS,
    children: (
      <ActivityItemList
        {...(ActivityItemListDefault.args as ComponentProps<
          typeof ActivityItemList
        >)}
      />
    ),
  },
}

export const WithRightPosition: Story = {
  args: {
    ...Default.args,
    position: "right",
  },
}

export const WithFullscreenPosition: Story = {
  args: {
    ...Default.args,
    position: "fullscreen",
  },
}

export const WithFullscreenPositionAndActions: Story = {
  args: {
    ...WithFullscreenPosition.args,
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

export const WithModule: Story = {
  args: {
    ...Default.args,
    position: "right",
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

export const WithModuleAndFullscreenPosition: Story = {
  args: {
    ...WithModule.args,
    position: "fullscreen",
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

export const WithResourceHeaderAndFullscreenPosition: Story = {
  args: {
    ...WithResourceHeader.args,
    position: "fullscreen",
  },
}

export const WithFewItems: Story = {
  args: {
    ...Default.args,
    position: "right",
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
