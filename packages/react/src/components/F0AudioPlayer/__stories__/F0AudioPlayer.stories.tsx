import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentProps, useEffect, useRef } from "react"

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

// This card has no transcription (none passed and none in the sample file), so
// the `f0-audio-transcription` a11y rule flags it (WCAG 1.2.1). It's marked
// `test: "todo"` to record that gap without failing CI — see CardWithContent
// for the accessible pattern.
export const Card: StoryObj<typeof F0AudioPlayerCard> = {
  render: (args) => <F0AudioPlayerCard {...args} />,
  args: {
    src: SAMPLE_SRC,
    title: "AI Call with Alex Williams",
    subtitle: "May 9, 2025 - 10:00am",
  },
  parameters: { a11y: { test: "todo" } },
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
  // No transcription — flagged by the audio-transcription a11y rule.
  parameters: { a11y: { test: "todo" } },
}

export const WithDataTestId: Story = {
  args: { dataTestId: "audio-player" },
}

export const LazySource: StoryObj<typeof F0AudioPlayerCard> = {
  render: (args) => (
    <F0AudioPlayerCard
      {...args}
      duration={200}
      src={() =>
        new Promise((resolve) => setTimeout(() => resolve(SAMPLE_SRC), 400))
      }
    />
  ),
  args: {
    title: "AI Call with Alex Williams",
    subtitle: "May 9, 2025 - 10:00am",
  },
  // No transcription — flagged by the audio-transcription a11y rule.
  parameters: { a11y: { test: "todo" } },
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

// The structured `content` prop: the card builds the Summary / Transcription
// tabs (with translated labels) for you. A transcription keeps the recording
// accessible (WCAG 1.2.1).
const CONTENT = {
  summary: SAMPLE_SUMMARY,
  transcription: SAMPLE_TRANSCRIPT,
}

// Collapsed by default — the "View detail" button toggles the tabbed panel.
export const CardWithContent: StoryObj<typeof F0AudioPlayerCard> = {
  render: (args) => <F0AudioPlayerCard {...args} />,
  args: {
    src: SAMPLE_SRC,
    title: "AI Call with Alex Williams",
    subtitle: "May 9, 2025 - 10:00am",
    content: CONTENT,
  },
}

// Same card, starting expanded so the Summary / Transcription tabs are visible.
export const CardWithContentExpanded: StoryObj<typeof F0AudioPlayerCard> = {
  render: (args) => <F0AudioPlayerCard {...args} />,
  args: {
    src: SAMPLE_SRC,
    title: "AI Call with Alex Williams",
    subtitle: "May 9, 2025 - 10:00am",
    content: CONTENT,
    defaultExpanded: true,
  },
}

// Transcription only — no summary. `content.summary` is omitted, so the card
// shows a single Transcription tab (no Summary tab).
export const CardWithTranscriptionOnly: StoryObj<typeof F0AudioPlayerCard> = {
  render: (args) => <F0AudioPlayerCard {...args} />,
  args: {
    src: SAMPLE_SRC,
    title: "AI Call with Alex Williams",
    subtitle: "May 9, 2025 - 10:00am",
    content: { transcription: SAMPLE_TRANSCRIPT },
    defaultExpanded: true,
  },
}

// Attaches an in-band text track to the <audio> after mount — the shape a
// browser exposes for a transcript shipped inside the file (no `content` prop).
// Audio files with browser-exposed transcripts aren't a reliable public sample,
// so we simulate that track here to exercise the same derive-from-file path.
function EmbeddedTranscriptionDemo(
  args: ComponentProps<typeof F0AudioPlayerCard>
) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const audio = ref.current?.querySelector("audio")
    if (!audio || typeof audio.addTextTrack !== "function") return
    const track = audio.addTextTrack("captions", "English", "en")
    const lines = [
      "Interviewer: Can you tell me about your availability for night shifts and weekends?",
      "Alex: Yes, I'm fully available for night shifts and weekends.",
      "Interviewer: And how long is your commute?",
      "Alex: Under 40 minutes from Barajas.",
    ]
    lines.forEach((text, i) => track.addCue(new VTTCue(i * 4, i * 4 + 4, text)))
  }, [])
  return (
    <div ref={ref}>
      <F0AudioPlayerCard {...args} />
    </div>
  )
}

/**
 * Transcription embedded in the audio file — no `content.transcription` passed.
 * The card derives it from the file's own text track and shows the Transcription
 * tab automatically.
 *
 * Audio files with browser-exposed transcripts aren't a reliable public sample,
 * so this story simulates an in-band track to demonstrate the derive-from-file
 * behaviour.
 */
export const CardWithEmbeddedTranscription: StoryObj<typeof F0AudioPlayerCard> =
  {
    render: (args) => <EmbeddedTranscriptionDemo {...args} />,
    args: {
      src: SAMPLE_SRC,
      title: "AI Call with Alex Williams",
      subtitle: "May 9, 2025 - 10:00am",
      defaultExpanded: true,
    },
  }

// Backward compatibility: the deprecated `details` tab array is still honoured.
// Prefer `content` for new code — see CardWithContent above.
const LEGACY_DETAILS = [
  { value: "summary", label: "Summary", content: <p>{SAMPLE_SUMMARY}</p> },
  {
    value: "transcript",
    label: "Transcript",
    content: <p className="whitespace-pre-line">{SAMPLE_TRANSCRIPT}</p>,
  },
]

export const CardWithLegacyDetails: StoryObj<typeof F0AudioPlayerCard> = {
  render: (args) => <F0AudioPlayerCard {...args} />,
  args: {
    src: SAMPLE_SRC,
    title: "AI Call with Alex Williams",
    subtitle: "May 9, 2025 - 10:00am",
    details: LEGACY_DETAILS,
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
        content={{ transcription: SAMPLE_TRANSCRIPT }}
      />
      <F0AudioPlayerCard
        {...args}
        title="AI Call with Alex Williams"
        subtitle="May 9, 2025 - 10:00am"
        content={CONTENT}
        defaultExpanded
      />
    </div>
  ),
}
