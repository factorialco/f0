import { F0Icon } from "@/components/F0Icon"
import { Placeholder } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Action } from "../Action"
import { actionSizes } from "../types"

const meta: Meta<typeof Action> = {
  title: "Components/Action",
  component: Action,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "outline",
        "neutral",
        "critical",
        "ghost",
        "promote",
        "outlinePromote",
        "link",
      ],
    },
    size: {
      control: {
        type: "select",
      },
      options: actionSizes,
    },
    pressed: {
      control: {
        type: "boolean",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "Action Button",
    size: "md",
  },
}

export default meta
type Story = StoryObj<typeof Action>

export const Basic: Story = {
  args: {
    children: "Basic Action",
    "aria-label": "Basic Action",
  },
}

export const AsLink: Story = {
  args: {
    children: "Link Action",
    href: "https://example.com",
    target: "_blank",
    append: <F0Icon icon={Placeholder} size="sm" />,
    "aria-label": "Link Action",
  },
}

export const AsLinkWithButtonVariant: Story = {
  args: {
    children: "Link with Button Style",
    href: "https://example.com",
    target: "_blank",
    variant: "default",
    "aria-label": "Link with Button Style",
  },
}

export const AsButtonWithLinkVariant: Story = {
  args: {
    children: "Button with Link Style",
    variant: "link",
    "aria-label": "Button with Link Style",
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled Action",
    disabled: true,
    "aria-label": "Disabled Action",
  },
}

export const WithPrepend: Story = {
  args: {
    children: "Action with Prepend",
    prepend: <F0Icon icon={Placeholder} />,
    "aria-label": "Action with Prepend",
  },
}

export const WithAppendOutside: Story = {
  args: {
    children: "Action with Append",
    append: <F0Icon icon={Placeholder} />,
    appendOutside: true,
    "aria-label": "Action with Append",
  },
}

export const LinkDisabled: Story = {
  args: {
    children: "Link Disabled",
    href: "https://example.com",
    target: "_blank",
    disabled: true,
    "aria-label": "Link Disabled",
  },
}

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      <Action variant="default" {...args}>
        Default
      </Action>
      <Action variant="outline" {...args}>
        Outline
      </Action>
      <Action variant="neutral" {...args}>
        Neutral
      </Action>
      <Action variant="critical" {...args}>
        Critical
      </Action>
      <Action variant="ghost" {...args}>
        Ghost
      </Action>
      <Action variant="promote" {...args}>
        Promote
      </Action>
      <Action variant="outlinePromote" {...args}>
        Outline Promote
      </Action>
      <Action variant="ai" {...args}>
        AI button
      </Action>
      <Action variant="link" {...args}>
        Link
      </Action>
      <Action variant="mention" {...args}>
        Mention
      </Action>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Action size="sm" aria-label="Small">
        Small
      </Action>
      <Action size="md" aria-label="Medium">
        Medium
      </Action>
      <Action size="lg" aria-label="Large">
        Large
      </Action>
    </div>
  ),
}

export const AllCompact: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      {actionSizes.map((size) => (
        <Action size={size} compact key={size} aria-label={size}>
          <F0Icon icon={Placeholder} size={size === "sm" ? "sm" : "md"} />
        </Action>
      ))}
    </div>
  ),
}
