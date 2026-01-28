import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0TagPerson } from "../"

const meta: Meta = {
  component: F0TagPerson,
  title: "Tags/TagPerson",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "A tag component that displays a person with a name and an optional image.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    name: {
      control: "text",
      description: "The name of the person",
    },
  },
  args: {
    name: "Saul Dominguez",
    src: "/avatars/person05.jpg",
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultPersonTag: Story = {}

export const DeactivatedPersonTag: Story = {
  args: {
    deactivated: true,
    name: "Saul Dominguez",
    src: "/avatars/person05.jpg",
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-[200px] flex-col gap-2 overflow-hidden border-[1px] border-dotted border-[#333]">
      <h3 className="text-lg font-semibold">All Person Tags</h3>
      <F0TagPerson name="Saul Dominguez" src="/avatars/person05.jpg" />
      <F0TagPerson name="Saul Dominguez" />
      <F0TagPerson name="Saul Dominguez with a very long name that should be truncated but should have an ellipsis and a tooltip" />
    </div>
  ),
}
