import type { Meta, StoryObj } from "@storybook/react-vite"
import { ReactNode } from "react"

import { F0VideoPlayer } from "../F0VideoPlayer"

// H.264 / 16:9, hosted on Blender's CDN — broadly supported and reliable.
const SAMPLE_SRC =
  "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"

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

export const Default: Story = {}

export const Playground: Story = {
  args: {
    autoPlay: false,
    autoFocus: false,
    restrictForwardSeek: false,
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
}
