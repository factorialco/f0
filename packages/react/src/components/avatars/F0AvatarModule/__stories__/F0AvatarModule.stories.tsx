import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { fakePeople } from "@/mocks/people"

import { F0Avatar } from "../../F0Avatar"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarModule } from "../index"
import { ModuleId, modules } from "../modules"

const meta = {
  component: F0AvatarModule,
  title: "Avatars/AvatarModule",
  tags: ["stable", "!autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg"],
    },
    ...getBaseAvatarArgTypes(["aria-label", "aria-labelledby"]),
    module: {
      control: "select",
      options: Object.keys(modules).sort((a, b) => a.localeCompare(b)),
    },
  },
} satisfies Meta<typeof F0AvatarModule>

export default meta

type Story = StoryObj<typeof F0AvatarModule>

export const Default: Story = {
  args: {
    module: "home",
    size: "md",
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div
      className="grid gap-3"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        display: "grid",
        textAlign: "center",
      }}
    >
      {Object.keys(modules).map((module) => (
        <div
          key={module}
          title={module}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <F0AvatarModule module={module as ModuleId} size="md" />
          <span className="text-sm">{module}</span>
        </div>
      ))}
    </div>
  ),
}

/**
 * The most common use: the module rendered automatically as a badge in the
 * corner of an entity avatar, marking which product module the item belongs to.
 */
export const AsBadge: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <F0Avatar
      size="xl"
      avatar={{
        type: "person",
        firstName: fakePeople.noor.firstName,
        lastName: fakePeople.noor.lastName,
        badge: { type: "module", module: "home" },
      }}
    />
  ),
}
