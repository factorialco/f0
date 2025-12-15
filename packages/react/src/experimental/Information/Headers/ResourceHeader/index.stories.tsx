import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentProps } from "react"
import { fn } from "storybook/test"
import * as Icon from "../../../../icons/app"
import { Archive, Comment, Download, ExternalLink, Pencil } from "../../../../icons/app"
import { PrimaryDropdownAction } from "../../utils"
import { ResourceHeader } from "./index"

const meta: Meta<typeof ResourceHeader> = {
  title: "Resource header",
  component: ResourceHeader,
  tags: ["stable"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    title: {
      description: "Main heading identifying the resource",
    },
    description: {
      description: "Supporting text providing additional context",
    },
    status: {
      description: "Visual indicator of the resource's current state",
    },
    metadata: {
      description: "Horizontal list of key-value pairs showing relevant information",
    },
    primaryAction: {
      description: "Main button representing the most important action available for the resource",
    },
    secondaryActions: {
      description:
        "Complementary set of lower-priority actions offering additional but less frequent functionalities",
    },
    otherActions: {
      description: "Expandable menu containing additional operations and advanced options",
    },
  },
}

export default meta

type Story = StoryObj<typeof ResourceHeader>

export const Default: Story = {
  args: {
    title: "Senior Product Designer",
    description: "Seeking an experienced product designer to lead design initiatives",
    status: {
      label: "Status",
      text: "Draft",
      variant: "neutral",
      actions: [
        {
          label: "Edit",
          icon: Icon.Pencil,
          onClick: fn(),
        },
      ],
    },

    primaryAction: {
      label: "Publish",
      icon: Icon.ArrowUp,
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Edit",
        icon: Icon.Pencil,
        onClick: fn(),
      },
      {
        label: "Export",
        icon: Icon.Download,
        hideLabel: true,
        onClick: fn(),
      },
    ],

    otherActions: [
      {
        label: "Archive",
        icon: Icon.Archive,
        onClick: fn(),
      },
      {
        label: "Copy URL",
        icon: Icon.LayersFront,
        onClick: fn(),
      },
      { type: "separator" },
      {
        label: "Unlist",
        icon: Icon.Delete,
        critical: true,
        onClick: fn(),
      },
    ],

    metadata: [
      {
        label: "Location",
        value: { type: "text", content: "Barcelona, Spain" },
      },
      {
        label: "Team",
        value: {
          type: "avatar",
          variant: {
            type: "team",
            name: "Product design",
          },
          text: "Product design",
        },
      },
    ],
  },
}

export const Simple: Story = {
  args: {
    ...Default.args,
    status: undefined,
  },
}

export const Metadata: Story = {
  args: {
    ...Default.args,
    primaryAction: undefined,
    secondaryActions: [
      {
        label: "Edit",
        icon: Icon.Pencil,
        onClick: fn(),
      },
      {
        label: "Export",
        icon: Icon.Download,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        label: "Created",
        info: {
          title: "Date of creation",
          description: "When the job was created",
        },
        value: { type: "date", formattedDate: "2024-01-01", icon: "critical" },
        actions: [
          {
            type: "copy",
          },
        ],
      },
      {
        label: "Manager",
        value: {
          type: "avatar",
          variant: {
            type: "person",
            firstName: "Josep Jaume",
            lastName: "Rey",
            src: "/avatars/person02.jpg",
          },
          text: "Josep Jaume Rey",
        },
        actions: [
          {
            label: "Edit",
            icon: Pencil,
            onClick: fn(),
          },
          {
            label: "Comment",
            icon: Comment,
            onClick: fn(),
          },
        ],
      },
      {
        label: "Contract",
        value: {
          type: "status",
          label: "Pending",
          variant: "warning",
        },
      },
    ],
  },
}

export const WithOtherActions: Story = {
  args: {
    ...Default.args,
    secondaryActions: [
      {
        label: "Promote",
        onClick: fn(),
        disabled: true,
        tooltip: "Recharge your account",
      },
    ],
    otherActions: [
      {
        label: "Share",
        icon: ExternalLink,
        onClick: fn(),
      },
      {
        label: "Download",
        icon: Download,
        onClick: fn(),
      },
      { type: "separator" },
      {
        label: "Archive",
        icon: Archive,
        critical: true,
        onClick: fn(),
      },
    ],
  },
}

export const WithDropdownAction: Story = {
  args: {
    ...Default.args,
    primaryAction: {
      items: [
        { label: "Publish now", value: "publish", icon: Icon.ArrowUp },
        { label: "Schedule publish", value: "schedule", icon: Icon.Calendar },
        { label: "Save as draft", value: "draft", icon: Icon.Save },
      ],
      onClick: (value) => {
        console.log("Selected action:", value)
      },
      tooltip: "Choose a publish action",
    } as PrimaryDropdownAction<string>,
    metadata: [
      {
        label: "Status",
        value: { type: "status", label: "Pending review", variant: "warning" },
      },
      {
        label: "Due date",
        value: { type: "date", formattedDate: "2024-03-20", icon: "warning" },
      },
      {
        label: "Reviewer",
        value: {
          type: "avatar",
          variant: {
            type: "person",
            firstName: "Ana",
            lastName: "Martínez",
            src: "/avatars/person03.jpg",
          },
          text: "Ana Martínez",
        },
      },
    ],
  },
}

export const CompanyHeader: Story = {
  args: {
    title: "Factorial",
    description: "HR Software to Empower Your Team",
    avatar: {
      type: "company",
      name: "Factorial",
      src: "/avatars/factorial.png",
    },
    secondaryActions: [
      {
        label: "Edit client",
        icon: Icon.Pencil,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        label: "Legal name",
        value: { type: "text", content: "Everyday Software S.L." },
        actions: [
          {
            type: "copy",
          },
        ],
      },
      {
        label: "Tax identification number",
        value: { type: "text", content: "B-675254394" },
      },
    ],
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
}

export const PersonHeader: Story = {
  args: {
    title: "René Galindo",
    description: "Product Design Lead",
    avatar: {
      type: "person",
      firstName: "René",
      lastName: "Galindo",
      src: "/avatars/person04.jpg",
    },
    metadata: [
      {
        label: "Manager",
        value: {
          type: "avatar",
          variant: {
            type: "person",
            firstName: "Ilya",
            lastName: "Zayats",
            src: "/avatars/person05.jpg",
          },
          text: "ilya Zayats",
        },
      },
      {
        label: "Team",
        value: {
          type: "avatar",
          variant: {
            type: "team",
            name: "Product design",
            src: "/avatars/team02.jpg",
          },
          text: "Product design",
        },
      },
      {
        label: "Phone",
        value: { type: "text", content: "+34 675 254 394" },
        actions: [
          {
            label: "Chat in WhatsApp",
            icon: Icon.WhatsappChat,
            onClick: fn(),
          },
          {
            type: "copy",
          },
        ],
      },
    ],
  },
}

export const EmojiHeader: Story = {
  args: {
    title: "Summer Party 2024",
    description: "Annual company summer celebration event",
    avatar: {
      type: "emoji",
      emoji: "🎉",
    },
    primaryAction: {
      label: "RSVP",
      icon: Icon.Check,
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Share",
        icon: Icon.ExternalLink,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        label: "Date",
        value: { type: "text", content: "July 15, 2024" },
      },
      {
        label: "Location",
        value: { type: "text", content: "Barcelona Beach Club" },
      },
      {
        label: "Organizer",
        value: {
          type: "avatar",
          variant: {
            type: "person",
            firstName: "Ana",
            lastName: "García",
          },
          text: "Ana García",
        },
      },
    ],
  },
}

export const TeamHeader: Story = {
  args: {
    title: "Product designers",
    description: "Rectangle drawers and post-it stickers",
    avatar: {
      type: "team",
      name: "Product designers",
    },
    primaryAction: {
      label: "Add members",
      icon: Icon.Add,
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Edit",
        icon: Icon.Pencil,
        onClick: fn(),
      },
    ],
    otherActions: [
      {
        label: "Export",
        icon: Icon.Download,
        onClick: fn(),
      },
      {
        label: "Share",
        icon: Icon.ExternalLink,
        onClick: fn(),
      },
      { type: "separator" },
      {
        label: "Delete",
        icon: Icon.Delete,
        critical: true,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        label: "Team leader",
        value: {
          type: "avatar",
          variant: {
            type: "person",
            firstName: "Josep Jaume",
            lastName: "Rey",
            src: "/avatars/person01.jpg",
          },
          text: "Josep Jaume Rey",
        },
        actions: [
          {
            label: "Edit",
            icon: Icon.Pencil,
            onClick: fn(),
          },
          {
            label: "Comment",
            icon: Icon.Comment,
            onClick: fn(),
          },
        ],
      },
      {
        label: "Members",
        value: { type: "text", content: "22" },
      },
    ],
  },
}

export const WithLongDescription: Story = {
  args: {
    ...Default.args,
    description:
      "This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated. This is a long description that will be truncated.",
  },
}

export const NoDescription: Story = {
  args: {
    title: "Product designers",
    avatar: {
      type: "team",
      name: "Product designers",
    },
    primaryAction: {
      label: "Add members",
      icon: Icon.Add,
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Edit",
        icon: Icon.Pencil,
        onClick: fn(),
      },
    ],
    metadata: [
      {
        label: "Team leader",
        value: {
          type: "avatar",
          variant: {
            type: "person",
            firstName: "Josep Jaume",
            lastName: "Rey",
            src: "/avatars/person08.jpg",
          },
          text: "Josep Jaume Rey",
        },
        actions: [
          {
            label: "Edit",
            icon: Icon.Pencil,
            onClick: fn(),
          },
          {
            label: "Comment",
            icon: Icon.Comment,
            onClick: fn(),
          },
        ],
      },
      {
        label: "Members",
        value: { type: "text", content: "22" },
      },
    ],
  },
}

export const DeactivatedEmployee: Story = {
  args: {
    ...PersonHeader.args,
    title: "John Doe",
    description: "Software Engineer",
    avatar: {
      type: "person",
      firstName: "John",
      lastName: "Doe",
      deactivated: true,
    },
  },
}

type ResourceHeaderProps = ComponentProps<typeof ResourceHeader>

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => {
    return (
      <div>
        <ResourceHeader {...(NoDescription.args as ResourceHeaderProps)} />
        <ResourceHeader {...(Default.args as ResourceHeaderProps)} />
        <ResourceHeader {...(WithLongDescription.args as ResourceHeaderProps)} />
        <ResourceHeader {...(WithDropdownAction.args as ResourceHeaderProps)} />
        <ResourceHeader {...(PersonHeader.args as ResourceHeaderProps)} />
        <ResourceHeader {...(DeactivatedEmployee.args as ResourceHeaderProps)} />
      </div>
    )
  },
}
