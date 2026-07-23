import type { Meta, StoryObj } from "@storybook/react-vite"

import type { F0MapMarkerVariantProps } from "../../../F0MapMarker"
import { F0MapCluster } from "../F0MapCluster"

// A spread of member marker configs (10, so the ring layouts fill out).
const MEMBERS: F0MapMarkerVariantProps[] = [
  { variant: "workplace" },
  { variant: "employee", firstName: "Ada", lastName: "Lovelace" },
  { variant: "company", name: "Acme Corp" },
  { variant: "employee", firstName: "Grace", lastName: "Hopper" },
  { variant: "default" },
  { variant: "workplace" },
  { variant: "employee", firstName: "Alan", lastName: "Turing" },
  { variant: "company", name: "Globex" },
  { variant: "employee", firstName: "Katherine", lastName: "Johnson" },
  { variant: "default" },
]

const meta = {
  title: "Map/internal/F0MapCluster",
  component: F0MapCluster,
  tags: ["experimental", "!autodocs"],
  args: { onClick: () => {} },
  // Pale swatch approximating the f0 basemap so the cluster reads in context.
  decorators: [
    (Story) => (
      <div
        className="flex min-h-40 flex-wrap items-center justify-center gap-16 rounded-xl p-10"
        style={{ backgroundColor: "#f3ebdd" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0MapCluster>

export default meta
type Story = StoryObj<typeof meta>

/** Two: a close pair of heads. */
export const Two: Story = {
  args: { count: 2, members: MEMBERS.slice(0, 2) },
}

/** Three: three heads, no counter yet. */
export const Three: Story = {
  args: { count: 3, members: MEMBERS.slice(0, 3) },
}

/** Four: all four heads in the 2x2 grid - no counter (a "+1" would be
 * pointless when the face itself fits). */
export const Four: Story = {
  args: { count: 4, members: MEMBERS.slice(0, 4) },
}

/** Five: the first count that overflows - three heads plus a "+2" counter in
 * the bottom-right slot. */
export const WithCounter: Story = {
  args: { count: 5, members: MEMBERS.slice(0, 5) },
}

/** Bigger cluster: three heads plus the running "+N" counter. */
export const Many: Story = {
  args: { count: 12, members: MEMBERS },
}

/** Large clusters cap the counter at "+99". */
export const WithOverflow: Story = {
  args: { count: 128, members: MEMBERS },
}
