import type { Meta, StoryObj } from "@storybook/react-vite"

import { Ai } from "@/icons/app"
import * as Icons from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0TagRaw } from "../"

const meta: Meta = {
  component: F0TagRaw,
  title: "Tags/TagRaw",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "This is a component that is used to display a simplest tag. with an icon and a label. or just a label or icon",
      },
    },
  },
  argTypes: {
    size: {
      control: "inline-radio",
      description: "The size of the tag",
      options: ["md", "sm"],
      table: {
        defaultValue: { summary: "md" },
        type: { summary: '"md" | "sm"' },
      },
    },
    onlyIcon: {
      control: "boolean",
      description: "Whether to only display the icon and not the label",
    },
    icon: {
      control: "select",
      description: "The icon to display in the tag",
      options: Object.keys(Icons),
      mapping: Icons,
      table: {
        type: {
          summary: "IconType",
        },
      },
    },
  },
  args: {
    text: "Label",
    icon: Ai,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultRawTag: Story = {}

export const NoIconTag: Story = {
  args: {
    icon: undefined,
  },
}

export const IconTag: Story = {
  args: {
    hideLabel: true,
    text: "Icon",
  },
}

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The tag is available in two sizes: `md` (default, 14px) and `sm` (12px).",
      },
    },
  },
  render: () => (
    <div className="flex flex-col items-start gap-3">
      <F0TagRaw text="Medium" icon={Ai} size="md" />
      <F0TagRaw text="Small" icon={Ai} size="sm" />
    </div>
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-[200px] flex-col gap-2 overflow-hidden border-[1px] border-dotted border-[#333] p-3">
      <h3 className="text-lg font-semibold">All Raw Tags</h3>
      <F0TagRaw text="Label" icon={Ai} />
      <F0TagRaw text="Label" />
      <F0TagRaw text="Label" icon={Ai} />
      <F0TagRaw text="Label" onlyIcon icon={Ai} />
      <F0TagRaw text="Label" icon={Ai} size="sm" />
      <F0TagRaw text="Label" size="sm" />
    </div>
  ),
}
