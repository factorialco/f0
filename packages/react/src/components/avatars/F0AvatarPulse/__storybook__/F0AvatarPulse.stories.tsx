import type { Meta, StoryObj } from "@storybook/react-vite"

import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { mockImage } from "@/testing/mocks/images"

import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarPulse, F0AvatarPulseProps, pulses } from "../F0AvatarPulse"

const meta: Meta<typeof F0AvatarPulse> = {
  component: F0AvatarPulse,
  title: "Avatars/AvatarPulse",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: ["An avatar component that displays a pulse on the avatar."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    pulse: {
      control: "select",
      options: pulses,
      table: {
        type: {
          summary: "Pulse",
        },
      },
    },
    ...getBaseAvatarArgTypes(["aria-label", "aria-labelledby"]),
  },
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    onPulseClick: () => {
      console.log("Pulse clicked")
    },
  },
} satisfies Meta<typeof F0AvatarPulse>

export default meta

type Story = StoryObj<typeof F0AvatarPulse>

export const Default: Story = {}

export const WithSelectedPulse: Story = {
  args: {
    pulse: "neutral",
  },
  render: (props: F0AvatarPulseProps) => (
    <div className="flex h-full w-full items-center justify-center gap-4">
      <F0AvatarPulse {...props} pulse="superNegative" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="negative" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="neutral" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="positive" onPulseClick={() => {}} />
      <F0AvatarPulse {...props} pulse="superPositive" onPulseClick={() => {}} />
    </div>
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <>
      <section className="mb-8">
        <h4 className="mb-4 text-lg font-semibold">No image</h4>
        <div className="flex h-full w-full items-center justify-center gap-4">
          {[...pulses, undefined].map((pulse, index) => (
            <F0AvatarPulse
              key={`${pulse ?? "none"}-${index}`}
              firstName="Dani"
              lastName="Moreno"
              pulse={pulse}
              onPulseClick={() => {}}
            />
          ))}
        </div>
      </section>

      <section>
        <h4 className="mb-4 text-lg font-semibold">With image</h4>
        <div className="flex h-full w-full items-center justify-center gap-4">
          {[...pulses, undefined].map((pulse, index) => (
            <F0AvatarPulse
              key={`${pulse ?? "none"}-${index}`}
              firstName="Dani"
              lastName="Moreno"
              src={mockImage("person", index)}
              pulse={pulse}
              onPulseClick={() => {}}
            />
          ))}
        </div>
      </section>
    </>
  ),
}
