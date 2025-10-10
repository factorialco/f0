import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { mockImage } from "@/testing/mocks/images"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { avatarSizes } from "../../internal/BaseAvatar"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarCompany } from "../F0AvatarCompany"

const meta: Meta<typeof F0AvatarCompany> = {
  component: F0AvatarCompany,
  title: "Avatars/AvatarCompany",
  tags: ["autodocs"],
  argTypes: {
    ...getBaseAvatarArgTypes([
      "size",
      "aria-label",
      "aria-labelledby",
      "badge",
    ]),
    name: {
      control: "text",
      description:
        "The company name to display (used for initials if no image provided)",
    },
    src: {
      control: "text",
      description:
        "URL of the company logo/image. If no logo is provided, it will display the company name initials with a fixed background color.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: ["A company avatar component."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  args: {
    name: "Factorial",
    size: "md",
    "aria-label": "Factorial avatar",
  },
}

export default meta

type Story = StoryObj<typeof F0AvatarCompany>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    src: "/avatars/factorial.png",
  },
}

export const WithModuleBadge: Story = {
  args: {
    src: "/avatars/factorial.png",
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
      <h3 className="text-lg font-semibold">All Company Avatars</h3>

      <section>
        <h4 className="text-lg font-semibold">Without Image</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size) => (
            <F0AvatarCompany key={size} size={size} name="Factorial" />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-lg font-semibold">With Image</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size, index) => (
            <F0AvatarCompany
              key={size}
              size={size}
              name="Factorial"
              src={mockImage("company", index)}
            />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-lg font-semibold">With Module Badge</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size, index) => (
            <F0AvatarCompany
              key={size}
              size={size}
              name="Factorial"
              src={mockImage("company", index)}
              badge={{ type: "module", module: "inbox" }}
            />
          ))}
        </div>
      </section>
    </div>
  ),
}
