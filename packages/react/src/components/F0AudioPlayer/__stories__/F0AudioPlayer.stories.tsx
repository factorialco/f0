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

// Sample copy lifted from the design, long enough to demonstrate the
// height-restricted scrollable transcript.
const SAMPLE_SUMMARY =
  "The AI call confirmed that Alex is available for night shifts and weekends, " +
  "lives in Barajas with a commute under 40 minutes, is comfortable with " +
  "physically demanding work, owns a motorcycle, and has salary expectations " +
  "within range. He also confirmed a strong background in warehouse and " +
  "logistics operations, but said he would only be able to start in 2 weeks. " +
  "The main concern from the call is that he showed limited evidence of " +
  "previous experience using digital tools for picking, which remains a key " +
  "mandatory requirement for this role."

const SAMPLE_TRANSCRIPT = Array.from({ length: 8 }, (_, i) =>
  i % 2 === 0
    ? "Interviewer: Can you tell me about your availability for night shifts and weekends?"
    : "Alex: Yes, I'm fully available for night shifts and weekends, and my commute is under 40 minutes."
).join("\n\n")

const DETAILS = [
  { value: "summary", label: "Summary", content: <p>{SAMPLE_SUMMARY}</p> },
  {
    value: "transcript",
    label: "Transcript",
    content: <p className="whitespace-pre-line">{SAMPLE_TRANSCRIPT}</p>,
  },
]

// Collapsed by default — the "View detail" button toggles the tabbed panel.
export const CardWithDetails: StoryObj<typeof F0AudioPlayerCard> = {
  render: (args) => <F0AudioPlayerCard {...args} />,
  args: {
    src: SAMPLE_SRC,
    title: "AI Call with Alex Williams",
    subtitle: "May 9, 2025 - 10:00am",
    details: DETAILS,
  },
}

// Same card, starting expanded so the Summary/Transcript tabs are visible.
export const CardWithDetailsExpanded: StoryObj<typeof F0AudioPlayerCard> = {
  render: (args) => <F0AudioPlayerCard {...args} />,
  args: {
    src: SAMPLE_SRC,
    title: "AI Call with Alex Williams",
    subtitle: "May 9, 2025 - 10:00am",
    details: DETAILS,
    defaultExpanded: true,
  },
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
      <F0AudioPlayerCard
        {...args}
        title="AI Call with Alex Williams"
        subtitle="May 9, 2025 - 10:00am"
        details={DETAILS}
        defaultExpanded
      />
    </div>
  ),
}
