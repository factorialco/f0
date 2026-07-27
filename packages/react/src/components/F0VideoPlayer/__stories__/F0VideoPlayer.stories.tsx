import type { Meta, StoryObj } from "@storybook/react-vite"
import { ReactNode, useEffect, useRef } from "react"

import { F0VideoPlayer } from "../F0VideoPlayer"
import { bigBuckBunnyCaptions } from "./bigBuckBunnyCaptions"

// Big Buck Bunny, served locally from `public/` (Storybook's staticDirs) so the
// stories don't depend on an external host.
const SAMPLE_SRC = "/Big_Buck_Bunny_alt.webm"
// Poster frame shown before playback, also served locally.
const SAMPLE_POSTER = "/video-poster.webp"

/** The player fills its container, so stories give it a sized frame. */
function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="aspect-video w-[640px] overflow-hidden rounded-md bg-[#000]">
      {children}
    </div>
  )
}

const meta = {
  title: "Components/F0VideoPlayer",
  component: F0VideoPlayer,
  tags: ["experimental", "!autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Video player built on a native `<video>` element: play/pause, seekbar, " +
          "volume, playback speed, fullscreen, keyboard shortcuts and a11y. Analytics " +
          "(`onTrackAction`), watch-% milestones (`onMilestone`), completion " +
          "(`onComplete`) and forward-seek restriction (`restrictForwardSeek`) are " +
          "built in via props.",
      },
    },
  },
  args: {
    src: SAMPLE_SRC,
    poster: SAMPLE_POSTER,
  },
  argTypes: {
    autoPlay: { control: "boolean" },
    autoFocus: { control: "boolean" },
    restrictForwardSeek: { control: "boolean" },
    silent: { control: "boolean" },
    persistControls: { control: "boolean" },
    onTrackAction: { action: "trackAction" },
    onMilestone: { action: "milestone" },
    onComplete: { action: "complete" },
  },
  render: (args) => (
    <Frame>
      <F0VideoPlayer {...args} />
    </Frame>
  ),
} satisfies Meta<typeof F0VideoPlayer>

export default meta
type Story = StoryObj<typeof meta>

// No captions supplied and the sample file has none embedded, so the
// `f0-video-captions` a11y rule flags this (WCAG 1.2.2). Marked `test: "todo"`
// to record the gap without failing CI — see WithCaptions for the accessible
// pattern.
export const Default: Story = {
  parameters: { a11y: { test: "todo" } },
}

export const Playground: Story = {
  args: {
    autoPlay: false,
    autoFocus: false,
    restrictForwardSeek: false,
  },
  // No captions — flagged by the video-captions a11y rule.
  parameters: { a11y: { test: "todo" } },
}

/**
 * Captions passed via `content.captions`. Here they are a raw WebVTT string
 * (converted from Big Buck Bunny's community SRT), so no CORS setup is needed;
 * a WebVTT URL works too. The captions toggle in the bottom bar (a filled glyph
 * when on, a line glyph when off) shows/hides them.
 */
export const WithCaptions: Story = {
  args: {
    content: { captions: bigBuckBunnyCaptions },
  },
}

// Attaches an in-band caption track to the <video> after mount — the shape a
// browser exposes for captions muxed into the file (no <track> element, no
// `content` prop). Muxed captions aren't a reliably supported public sample, so
// we simulate that track here to exercise the same derive-from-file path.
function EmbeddedCaptionsDemo(
  args: React.ComponentProps<typeof F0VideoPlayer>
) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const video = ref.current?.querySelector("video")
    if (!video || typeof video.addTextTrack !== "function") return
    const track = video.addTextTrack("captions", "English", "en")
    const cues: Array<[number, number, string]> = [
      [2.5, 6.4, "[SERENE MUSIC]"],
      [11.8, 14, "[BROOK BABBLES] [FLY BUZZES]"],
      [16.1, 17.7, "[BIRD TWEETS]"],
      [19.8, 22, "[WINGS FLAP]"],
    ]
    for (const [start, end, text] of cues) {
      track.addCue(new VTTCue(start, end, text))
    }
  }, [])
  return (
    <div ref={ref}>
      <Frame>
        <F0VideoPlayer {...args} />
      </Frame>
    </div>
  )
}

/**
 * Captions embedded in the video file — no `content.captions` passed. The player
 * finds the file's own caption track and offers the same captions toggle.
 *
 * Browsers don't reliably expose muxed caption tracks (and HLS needs a JS
 * player), so this story simulates an in-band track in the browser to
 * demonstrate the derive-from-file behaviour.
 */
export const WithEmbeddedCaptions: Story = {
  render: (args) => <EmbeddedCaptionsDemo {...args} />,
}

// A short WebVTT description script (visual events narrated in the gaps).
const SAMPLE_DESCRIPTIONS = [
  "WEBVTT",
  "",
  "1",
  "00:00:07.000 --> 00:00:10.000",
  "A butterfly flutters over a sunlit meadow.",
  "",
  "2",
  "00:00:15.000 --> 00:00:19.000",
  "A large white rabbit emerges from its burrow and stretches.",
  "",
  "3",
  "00:00:24.000 --> 00:00:27.000",
  "The rabbit smiles and sniffs the morning air.",
  "",
].join("\n")

/**
 * Audio description alongside captions. `content.descriptions` is a WebVTT
 * `kind="descriptions"` script delivered at runtime: the audio-description toggle pauses the
 * video on each cue and speaks it (extended audio description) via the browser's
 * speech synthesis, then resumes. Captions ("CC") stay independent — both can be
 * on at once.
 */
export const WithAudioDescriptions: Story = {
  args: {
    content: {
      captions: bigBuckBunnyCaptions,
      descriptions: SAMPLE_DESCRIPTIONS,
    },
  },
}

/**
 * A pre-produced described audio track. `content.describedSrc` points at a
 * rendition with the description mixed into the audio; the audio-description toggle swaps to
 * it, preserving position and play state, and captions keep working across the
 * swap.
 *
 * There's no described rendition of Big Buck Bunny available, so this story uses
 * the same file as a labeled stand-in — toggling AD demonstrates the source swap,
 * not an audibly different track.
 *
 * `descriptions` is provided too: with captions on, the description text also
 * appears on screen (top, italic) so deaf/hard-of-hearing viewers can read it.
 */
export const WithDescribedAudioTrack: Story = {
  args: {
    content: {
      captions: bigBuckBunnyCaptions,
      describedSrc: SAMPLE_SRC,
      descriptions: SAMPLE_DESCRIPTIONS,
    },
  },
}

/**
 * The trainings/LMS configuration: analytics tracking, watch-% milestones,
 * completion and forward-seek restriction — all enabled with plain props, no
 * external wiring. Callbacks are logged to the Actions panel (that is how the
 * parent receives the tracking / milestone / completion information).
 */
export const LMSConfiguration: Story = {
  args: {
    autoPlay: false,
    restrictForwardSeek: true,
  },
  // No captions — flagged by the video-captions a11y rule.
  parameters: { a11y: { test: "todo" } },
}

/**
 * A silent (video-only) clip. `silent` marks it as having no audio, so captions
 * don't apply (WCAG 1.2.2) — `data-video-captions` reads `"no-audio"` and the
 * captions a11y rule doesn't flag it, without any caption source. (The sample
 * has audio; `silent` is set here only to illustrate the exemption.)
 */
export const SilentVideoOnly: Story = {
  args: {
    silent: true,
  },
}
