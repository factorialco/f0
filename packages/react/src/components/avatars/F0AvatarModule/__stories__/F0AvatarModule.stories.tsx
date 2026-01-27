import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarModule } from "../index"
import { ModuleId, modules } from "../modules"

const meta: Meta<typeof F0AvatarModule> = {
  component: F0AvatarModule,
  title: "Avatars/AvatarModule",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    ...getBaseAvatarArgTypes(["aria-label", "aria-labelledby"]),
    module: {
      control: "select",
      options: Object.keys(modules).sort((a, b) => a.localeCompare(b)),
    },
  },
}

export default meta

type Story = StoryObj<typeof F0AvatarModule>

export const Default: Story = {
  args: {
    module: "home",
    size: "lg",
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
          <F0AvatarModule module={module as ModuleId} size="lg" />
          <span className="text-sm">{module}</span>
        </div>
      ))}
    </div>
  ),
}
