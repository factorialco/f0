import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

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
        firstName: "Jane",
        lastName: "Doe",
        badge: { type: "module", module: "home" },
      }}
    />
  ),
}

/**
 * The module badge across entity-avatar sizes. Each avatar gets a badge sized
 * to roughly half the avatar: `sm`→12px, `md`→16px, `lg`→20px. `xl` and `2xl`
 * keep their existing 20px / 24px badges.
 */
export const AsBadgeSizes: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 16 }}>
      {(["sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
        <div
          key={size}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <F0Avatar
            size={size}
            avatar={{
              type: "person",
              firstName: "Jane",
              lastName: "Doe",
              badge: { type: "module", module: "home" },
            }}
          />
          <span className="text-sm">{size}</span>
        </div>
      ))}
    </div>
  ),
}
