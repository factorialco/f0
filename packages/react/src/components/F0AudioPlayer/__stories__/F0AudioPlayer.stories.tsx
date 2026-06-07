import type { Meta, StoryObj } from "@storybook/react-vite"

import { Download } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0AudioPlayer, F0AudioPlayerCard } from ".."

// A short public-domain sample so the controls are playable in Storybook.
const SAMPLE_SRC =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

const meta = {
  component: F0AudioPlayer,
  tags: ["experimental", "!autodocs"],
  title: "F0AudioPlayer",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Compact audio player for playing back recordings (e.g. AI call recordings). Play/pause, a draggable seek bar, current/total time, and (in the card) a kebab menu with playback-speed options.",
      },
    },
  },
  args: {
    src: SAMPLE_SRC,
  },
  argTypes: {
    src: { control: "text" },
    disabled: { control: "boolean" },
    autoPlay: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 460 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AudioPlayer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: { disabled: true },
}

export const Card: StoryObj<typeof F0AudioPlayerCard> = {
  render: (args) => <F0AudioPlayerCard {...args} />,
  args: {
    src: SAMPLE_SRC,
    title: "AI Call with Alex Williams",
    subtitle: "May 9, 2025 - 10:00am",
  },
}

// The kebab always carries the playback-speed options; `actions` adds extra
// menu items (here, a download action) below them.
export const CardWithActions: StoryObj<typeof F0AudioPlayerCard> = {
  render: (args) => (
    <F0AudioPlayerCard
      {...args}
      actions={[
        { label: "Download recording", icon: Download, onClick: () => {} },
      ]}
    />
  ),
  args: {
    src: SAMPLE_SRC,
    title: "AI Call with Alex Williams",
    subtitle: "May 9, 2025 - 10:00am",
  },
}

export const WithDataTestId: Story = {
  args: { dataTestId: "audio-player" },
}

export const Snapshot: Story = {
  ...withSnapshot({}),
  render: (args) => (
    <div className="flex flex-col gap-4" style={{ width: 460 }}>
      <F0AudioPlayer {...args} />
      <F0AudioPlayer {...args} disabled />
      <F0AudioPlayerCard
        {...args}
        title="AI Call with Alex Williams"
        subtitle="May 9, 2025 - 10:00am"
      />
    </div>
  ),
}
