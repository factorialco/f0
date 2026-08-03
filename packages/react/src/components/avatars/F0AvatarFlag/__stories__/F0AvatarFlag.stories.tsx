import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { Tooltip } from "@/experimental/Overlays/Tooltip/index.tsx"
import { flagsMap } from "@/flags"
import { Warning } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { avatarSizes } from "../../internal/BaseAvatar"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarFlag } from "../F0AvatarFlag.tsx"

const meta = {
  component: F0AvatarFlag,
  title: "Avatars/AvatarFlag",
  tags: ["stable", "!autodocs"],
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
    a11y: { test: "error" },
    docs: {
      description: {
        component: ["A flag avatar component."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  args: {
    size: "lg",
    "aria-label": "Spain",
  },
} satisfies Meta<typeof F0AvatarFlag>

export default meta

type Story = StoryObj<typeof F0AvatarFlag>

export const Default: Story = {
  args: {
    flag: "es",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Reachable only because meta.args passes an aria-label: BaseAvatar renders
    // `aria-hidden={!hasAria}`, so an unlabelled flag avatar exposes no role at
    // all and this query would find nothing (that is the case in `Snapshot`).
    await expect(canvas.getByRole("img", { name: "Spain" })).toBeInTheDocument()
    // The fallback initials come from the localized country name, not the raw
    // code: "es" resolves through `i18n.countries` to "Spain", hence "SP".
    // Drop that lookup and this reads "ES" while the role query stays green.
    await expect(canvas.getByText("SP")).toBeInTheDocument()
  },
}

/**
 * The two lookups the `flag` prop drives, side by side: `es` resolves both the
 * graphic and the localized name, `ES` resolves only the graphic (the country
 * name lookup is case-sensitive), and `zz` resolves neither.
 */
export const CodeLookup: Story = {
  // The render is fixed, so the knobs would be a lie.
  parameters: { controls: { disable: true } },
  // Expect `Flag component for code "zz" not found` in the console on this
  // story: `getFlag` (flags/flagsMap.tsx) warns on every unresolved code. That
  // is the degraded path the story exists to show, not a bug to chase.
  render: () => (
    <div className="flex flex-row gap-4">
      {(
        [
          ["es", "flag + localized name"],
          ["ES", "flag, raw-code label"],
          ["zz", "no flag, raw-code label"],
        ] as const
      ).map(([code, caption]) => (
        <div key={code} className="flex flex-col items-center gap-1">
          <F0AvatarFlag size="lg" flag={code} />
          <span className="text-sm">
            <code>{code}</code> — {caption}
          </span>
        </div>
      ))}
    </div>
  ),
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

/**
 * The other arm of `badge`: any `Badge` type plus an icon, instead of a module
 * avatar. `tooltip` is optional on both arms.
 */
export const WithIconBadge: Story = {
  args: {
    flag: "es",
    badge: {
      type: "warning",
      icon: Warning,
      tooltip: "Payroll not configured for this country",
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
