import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect } from "storybook/test"

import * as Icons from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { avatarIconSizes, F0AvatarIcon } from "../F0AvatarIcon"

const meta = {
  component: F0AvatarIcon,
  title: "Avatars/AvatarIcon",
  tags: ["stable", "!autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: avatarIconSizes,
      description: "The size of the avatar",
    },
    icon: {
      control: "select",
      options: Object.keys(Icons),
      mapping: Icons,
      description: "The icon to display in the avatar",
    },
    ...getBaseAvatarArgTypes(["aria-label", "aria-labelledby"]),
  },
  args: {
    icon: Icons.Placeholder,
    size: "lg",
  },
  parameters: {
    // Every story below is axe-clean, so axe runs as an error in CI. Note what
    // that does NOT cover: passing `aria-label` or `aria-labelledby` lands the
    // attribute on the role-less root, which axe 4.11 reports as
    // `aria-prohibited-attr` (wcag2a). No story exercises that path — the
    // limitation is documented in F0AvatarIcon.mdx and pinned by the
    // "labelling" tests, not caught by this gate.
    a11y: { test: "error" },
    docs: {
      description: {
        component: ["An avatar component that displays an icon."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
} satisfies Meta<typeof F0AvatarIcon>

export default meta

type Story = StoryObj<typeof F0AvatarIcon>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    // Neither `getByRole` nor `getByText` can reach anything here: the avatar
    // root is a plain <div> with no role (F0AvatarIcon.tsx), and the icon is a
    // bare <svg> with no <title> and no text node. The <svg> is the only handle.
    const icon = canvasElement.querySelector("svg")
    await expect(icon).toBeInTheDocument()
    // The one decision F0AvatarIcon makes about the icon it is handed: it forces
    // `color="default"`, which F0Icon turns into `text-f1-icon`. That class is
    // what actually encodes "default" — `data-has-color` only says "some colour
    // other than currentColor" and would survive a switch to `critical` or a hex
    // value, so it is the secondary signal, not the assertion.
    await expect(icon).toHaveClass("text-f1-icon")
    await expect(icon).toHaveAttribute("data-has-color", "true")
  },
}

/**
 * The three sizes the component accepts, left to right: a 24, 32 and 40px box,
 * with the icon and the corner radius scaling with it. Narrower than the shared
 * avatar scale, which runs `xs`–`2xl`.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex w-fit flex-row items-end gap-2">
      {avatarIconSizes.map((size) => (
        <F0AvatarIcon key={size} size={size} icon={Icons.Placeholder} />
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    // One icon per supported size, and nothing extra: `avatarIconSizes` is the
    // component's own const array, so this stays true if a size is added or
    // dropped. Same `svg` handle as `Default` — the root has no role.
    await expect(canvasElement.querySelectorAll("svg")).toHaveLength(
      avatarIconSizes.length
    )
  },
}

const labelledEntities = [
  ["Acme Inc.", Icons.Building],
  ["Time off", Icons.Calendar],
  ["Payroll", Icons.Money],
] as const

/**
 * The avatar contributes no accessible name, so the entity's name has to sit
 * next to it as visible text. This is the shape every real usage takes.
 */
export const WithVisibleLabel: Story = {
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {labelledEntities.map(([name, icon]) => (
        <div key={name} className="flex flex-row items-center gap-2">
          <F0AvatarIcon size="lg" icon={icon} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-row gap-2">
      {avatarIconSizes.map((size) => (
        <F0AvatarIcon key={size} size={size} icon={Icons.Placeholder} />
      ))}
    </div>
  ),
}
