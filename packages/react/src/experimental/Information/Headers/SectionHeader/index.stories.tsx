import { StandardLayout } from "@/layouts/StandardLayout"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentProps } from "react"
import { fn } from "storybook/test"
import * as Icon from "../../../../icons/app"
import { SectionHeader } from "./index"

const meta: Meta<typeof SectionHeader> = {
  component: SectionHeader,
  title: "Section header",
  tags: ["experimental"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    separator: {
      control: {
        type: "select",
        options: ["top", "bottom"],
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof SectionHeader>

export const Default: Story = {
  args: {
    title: "What is a template?",
    description:
      "Create document templates to automate the generation of documents with employee information. You can upload PDFs with fillable capabilities containing variables, DOCx files with variables, or any other types of documents that you need to send to employees.",
    action: {
      label: "Add template",
      icon: Icon.Add,
      onClick: fn(),
    },
    link: {
      label: "Help Center link",
      href: "https://help.factorialhr.com/",
    },
    separator: "bottom",
  },
}

export const NoAction: Story = {
  args: {
    title: "Course catalog",
    description: "Select any course you would like to request.",
    link: {
      label: "Help Center link",
      href: "https://help.factorialhr.com/",
    },
  },
}

export const PrimaryAction: Story = {
  args: {
    ...Default.args,
    action: {
      label: "Add template",
      icon: Icon.Add,
      variant: "default",
    },
  },
}

export const InLayout: Story = {
  args: {
    ...Default.args,
  },
  decorators: [
    (Story) => (
      <StandardLayout>
        <Story />
      </StandardLayout>
    ),
  ],
}

type SectionHeaderProps = ComponentProps<typeof SectionHeader>
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => {
    return (
      <div>
        <SectionHeader title="Title" description="Description" />
        <SectionHeader {...(Default.args as SectionHeaderProps)} />
        <SectionHeader {...(NoAction.args as SectionHeaderProps)} />
      </div>
    )
  },
}
