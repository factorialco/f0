import { Tooltip } from "@/experimental/Overlays/Tooltip/index.tsx"
import { flagsMap } from "@/flags"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { avatarSizes } from "../../internal/BaseAvatar"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarFlag } from "../F0AvatarFlag.tsx"

const meta: Meta<typeof F0AvatarFlag> = {
  component: F0AvatarFlag,
  title: "Avatars/AvatarFlag",
  tags: ["autodocs"],
  argTypes: {
    ...getBaseAvatarArgTypes([
      "size",
      "aria-label",
      "aria-labelledby",
      "badge",
    ]),
    flag: {
      control: "text",
      description: "The flag name to display",
    },
  },
  parameters: {
    docs: {
      description: {
        component: ["A flag avatar component."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  args: {
    size: "md",
    "aria-label": "Factorial avatar",
  },
}

export default meta

type Story = StoryObj<typeof F0AvatarFlag>

export const Default: Story = {
  args: {
    flag: "es",
  },
}

export const WithFlag: Story = {
  args: {
    flag: "es",
  },
}

export const WithModuleBadge: Story = {
  args: {
    flag: "es",
    badge: {
      type: "module",
      module: "inbox",
    },
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      <h3 className="text-lg font-semibold">All Flag Avatars</h3>
      <section>
        <h4 className="text-lg font-semibold">With Flag</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size) => (
            <F0AvatarFlag key={size} size={size} flag="es" />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-lg font-semibold">With Module Badge</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size) => (
            <F0AvatarFlag
              key={size}
              size={size}
              flag={"es"}
              badge={{ type: "module", module: "inbox" }}
            />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-lg font-semibold">With All Flags</h4>
        <div className="flex flex-row flex-wrap gap-2">
          {Object.keys(flagsMap).map((flag) => (
            <Tooltip key={flag} label={flag} description={flag.toString()}>
              <F0AvatarFlag size="md" flag={flag} />
            </Tooltip>
          ))}
        </div>
      </section>
    </div>
  ),
}
