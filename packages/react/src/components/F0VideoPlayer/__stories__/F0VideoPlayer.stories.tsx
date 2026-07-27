import type { Meta, StoryObj } from "@storybook/react-vite"
import { ReactNode } from "react"

import { F0VideoPlayer } from "../F0VideoPlayer"
import { bigBuckBunnyCaptions } from "./bigBuckBunnyCaptions"

// Big Buck Bunny (H.264 / 16:9), hosted on the Internet Archive.
const SAMPLE_SRC =
  "https://dn801203.us.archive.org/0/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4"

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
  },
  argTypes: {
    autoPlay: { control: "boolean" },
    autoFocus: { control: "boolean" },
    restrictForwardSeek: { control: "boolean" },
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
 * a WebVTT URL works too. The "CC" control in the bottom bar shows/hides them.
 */
export const WithCaptions: Story = {
  args: {
    content: { captions: bigBuckBunnyCaptions },
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
