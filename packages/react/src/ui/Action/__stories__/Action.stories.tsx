import { F0Icon } from "@/components/F0Icon"
import { Placeholder } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Action } from "../Action"

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
      options: ["sm", "md", "lg"],
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
  },
}

export const AsLink: Story = {
  args: {
    children: "Link Action",
    href: "https://example.com",
    target: "_blank",
    append: <F0Icon icon={Placeholder} size="sm" />,
  },
}

export const AsLinkWithButtonVariant: Story = {
  args: {
    children: "Link with Button Style",
    href: "https://example.com",
    target: "_blank",
    variant: "default",
  },
}

export const AsButtonWithLinkVariant: Story = {
  args: {
    children: "Button with Link Style",
    variant: "link",
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled Action",
    disabled: true,
  },
}

export const WithPrepend: Story = {
  args: {
    children: "Action with Prepend",
    prepend: <F0Icon icon={Placeholder} />,
  },
}

export const WithAppendOutside: Story = {
  args: {
    children: "Action with Append",
    append: <F0Icon icon={Placeholder} />,
    appendOutside: true,
  },
}

export const LinkDisabled: Story = {
  args: {
    children: "Link Disabled",
    href: "https://example.com",
    target: "_blank",
    disabled: true,
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
      <Action size="sm">Small</Action>
      <Action size="md">Medium</Action>
      <Action size="lg">Large</Action>
    </div>
  ),
}
