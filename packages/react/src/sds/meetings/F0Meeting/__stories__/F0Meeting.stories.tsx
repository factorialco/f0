import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"

import { Desktop, Ellipsis, Record, Settings } from "@/icons/app"

import { F0Meeting } from "../F0Meeting"
import { F0MeetingRoom } from "../F0MeetingRoom"
import { type MockMeetingSeed } from "../mocks/mockSeeds"
import {
  oneToOneSeed,
  screenShareSeed,
  sixPeopleSeed,
  soloSeed,
  thirtyPeopleSeed,
  twelvePeopleSeed,
} from "../mocks/mockSeeds"
import { useMockMeetingRuntime } from "../mocks/useMockMeetingRuntime"
import { F0MeetingProvider } from "../providers/F0MeetingProvider"
import { MeetingSurfaceProvider } from "../providers/MeetingSurfaceProvider"
import { type F0MeetingActionInput, type F0MeetingSurfaceMode } from "../types"

const meta: Meta = {
  title: "F0Meeting",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Headless video room. The host owns the transport (LiveKit in factorial); F0 owns the grid, the controls and the window.",
      },
    },
  },
  tags: ["experimental", "!autodocs"],
}

export default meta

/** Stories share one localStorage key for the surface mode. */
const resetSurfaceState = (): void => {
  localStorage.removeItem("ONE-meeting-mode")
  localStorage.removeItem("ONE-meeting-window")
}

/**
 * Renders the room inside a fixed box instead of the real surface, which
 * portals to `document.body` and would cover the docs page. Everything below
 * the window chrome is identical.
 */
const BoxedRoom = ({
  seed,
  width = "100%",
  height = 560,
}: {
  seed: MockMeetingSeed
  width?: number | string
  height?: number
}) => {
  const { runtime } = useMockMeetingRuntime(seed)
  return (
    <div className="flex items-center justify-center bg-f1-background-secondary p-6">
      <div
        className="overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-special-page"
        style={{ width, height }}
      >
        <F0MeetingProvider runtime={runtime}>
          <MeetingSurfaceProvider defaultMode="inline" roomId={seed.room.id}>
            <F0MeetingRoom />
          </MeetingSurfaceProvider>
        </F0MeetingProvider>
      </div>
    </div>
  )
}

const PageBehind = () => (
  <div className="h-screen space-y-3 bg-f1-background p-10">
    <div className="h-6 w-64 rounded bg-f1-background-secondary" />
    {Array.from({ length: 14 }, (_, index) => (
      <div
        key={index}
        className="h-3 rounded bg-f1-background-secondary"
        style={{ width: `${45 + ((index * 13) % 45)}%` }}
      />
    ))}
  </div>
)

const SurfaceStory = ({
  seed,
  defaultMode,
  actions,
  actionOrder,
}: {
  seed: MockMeetingSeed
  defaultMode: F0MeetingSurfaceMode
  actions?: F0MeetingActionInput[]
  actionOrder?: string[]
}) => {
  const { runtime } = useMockMeetingRuntime(seed)
  return (
    <F0Meeting
      runtime={runtime}
      defaultMode={defaultMode}
      actions={actions}
      actionOrder={actionOrder}
    >
      <PageBehind />
    </F0Meeting>
  )
}

/* ------------------------------------------------------------------ *
 * Grid
 * ------------------------------------------------------------------ */

// Live <video> elements always trip axe's video-caption rule, and a mock has no
// captions to give them.
const videoA11y = { a11y: { test: "todo" as const } }

export const Solo: StoryObj = {
  parameters: videoA11y,
  render: () => <BoxedRoom seed={soloSeed} />,
}

export const OneToOne: StoryObj = {
  parameters: {
    ...videoA11y,
    docs: {
      description: {
        story:
          "Two people auto-focus the remote participant — the room's only implicit spotlight rule besides screen shares.",
      },
    },
  },
  render: () => <BoxedRoom seed={oneToOneSeed} />,
}

export const SixParticipants: StoryObj = {
  parameters: videoA11y,
  render: () => <BoxedRoom seed={sixPeopleSeed} />,
}

export const TwelveParticipants: StoryObj = {
  parameters: {
    ...videoA11y,
    docs: {
      description: {
        story:
          "Above seven tiles the previous Factorial implementation rendered nothing at all: its layouts were written out by hand, one function per count.",
      },
    },
  },
  render: () => <BoxedRoom seed={twelvePeopleSeed} />,
}

export const ThirtyParticipants: StoryObj = {
  parameters: {
    ...videoA11y,
    docs: {
      description: {
        story:
          "The solver overflows into the +N chip only when tiles would fall below a usable size, so the cut-off follows the container rather than a fixed page size.",
      },
    },
  },
  render: () => <BoxedRoom seed={thirtyPeopleSeed} />,
}

export const ScreenShare: StoryObj = {
  parameters: {
    ...videoA11y,
    docs: {
      description: {
        story:
          "The share is 21:9 on purpose. Its tile takes the whole stage and letterboxes the picture inside itself on black, so the dark is exactly the part of the screen that is missing — the room around it stays light.",
      },
    },
  },
  render: () => <BoxedRoom seed={screenShareSeed} />,
}

export const ShareYourScreen: StoryObj = {
  parameters: {
    ...videoA11y,
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          "Press the screen button in the control bar: the mock calls the real `getDisplayMedia`, so you pick an actual window or display. The captured size drives the layout, so a 16:10 laptop screen letterboxes differently from an ultrawide — and the bands are black, as in Meet. Stopping from the browser's own sharing bar ends the tile too.",
      },
    },
  },
  render: () => <BoxedRoom seed={sixPeopleSeed} />,
}

export const TinyContainer: StoryObj = {
  parameters: {
    ...videoA11y,
    docs: {
      description: {
        story:
          "At 320px the room spotlights one person, keeps as many thumbnails as fit underneath, and collapses the control bar. Every one of those decisions comes from the measured container, never from the viewport.",
      },
    },
  },
  render: () => <BoxedRoom seed={sixPeopleSeed} width={320} height={220} />,
}

/* ------------------------------------------------------------------ *
 * Surface
 * ------------------------------------------------------------------ */

export const FloatingWindow: StoryObj = {
  parameters: {
    ...videoA11y,
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          "Drag it by the header and resize it from any edge or corner. Dropping it near a corner snaps flush, and the placement is stored as an anchor so resizing the browser keeps it there. The three buttons in the header move the call between the side panel, this floating window and fullscreen.",
      },
    },
  },
  beforeEach: () => {
    resetSurfaceState()
  },
  render: () => <SurfaceStory seed={sixPeopleSeed} defaultMode="floating" />,
}

export const MinimizedPill: StoryObj = {
  parameters: {
    ...videoA11y,
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          "The same window at pill size: only the pinned actions survive, and the overflow menu is dropped rather than squeezed in.",
      },
    },
  },
  beforeEach: () => {
    resetSurfaceState()
  },
  render: () => <SurfaceStory seed={sixPeopleSeed} defaultMode="minimized" />,
}

export const SidePanel: StoryObj = {
  parameters: {
    ...videoA11y,
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          "The call as a side panel: the content beside it narrows instead of being covered, and the room switches to spotlight because a tall, narrow strip cannot show a readable grid. Drag its inner edge to resize it. Leaving the panel gives back the exact floating size you had before, because the two geometries never touch each other.",
      },
    },
  },
  beforeEach: () => {
    resetSurfaceState()
  },
  render: () => <SurfaceStory seed={sixPeopleSeed} defaultMode="panel" />,
}

export const Fullscreen: StoryObj = {
  parameters: {
    ...videoA11y,
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          "The only modal mode: the rest of the page goes inert. Escape returns to the floating window and never hangs up.",
      },
    },
  },
  beforeEach: () => {
    resetSurfaceState()
  },
  render: () => <SurfaceStory seed={sixPeopleSeed} defaultMode="fullscreen" />,
}

/* ------------------------------------------------------------------ *
 * States
 * ------------------------------------------------------------------ */

export const Reconnecting: StoryObj = {
  parameters: {
    ...videoA11y,
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          "Tiles stay mounted and the last frame freezes. Clearing the grid for a two-second ICE restart reads as the call having dropped.",
      },
    },
  },
  render: function Render() {
    const { runtime, drivers } = useMockMeetingRuntime(sixPeopleSeed)
    return (
      <div className="flex flex-col gap-3 bg-f1-background-secondary p-6">
        <button
          type="button"
          className="w-fit rounded-md bg-f1-background px-3 py-1.5 text-sm font-medium"
          onClick={() => drivers.simulateReconnect(4000)}
        >
          Simulate a 4s reconnect
        </button>
        <div
          className="overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-special-page"
          style={{ height: 480 }}
        >
          <F0MeetingProvider runtime={runtime}>
            <MeetingSurfaceProvider
              defaultMode="inline"
              roomId={sixPeopleSeed.room.id}
            >
              <F0MeetingRoom />
            </MeetingSurfaceProvider>
          </F0MeetingProvider>
        </div>
      </div>
    )
  },
}

export const PermissionDenied: StoryObj = {
  parameters: {
    ...videoA11y,
    docs: {
      description: {
        story:
          "A denied camera is a state, not an exception. The control is disabled with a reason instead of failing silently into a black tile.",
      },
    },
  },
  render: function Render() {
    const { runtime, drivers } = useMockMeetingRuntime(oneToOneSeed)
    return (
      <div className="flex flex-col gap-3 bg-f1-background-secondary p-6">
        <button
          type="button"
          className="w-fit rounded-md bg-f1-background px-3 py-1.5 text-sm font-medium"
          onClick={() => drivers.denyPermission("camera")}
        >
          Deny the camera
        </button>
        <div
          className="overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-special-page"
          style={{ height: 420 }}
        >
          <F0MeetingProvider runtime={runtime}>
            <MeetingSurfaceProvider
              defaultMode="inline"
              roomId={oneToOneSeed.room.id}
            >
              <F0MeetingRoom />
            </MeetingSurfaceProvider>
          </F0MeetingProvider>
        </div>
      </div>
    )
  },
}

/* ------------------------------------------------------------------ *
 * Extensibility
 * ------------------------------------------------------------------ */

export const CustomActions: StoryObj = {
  parameters: {
    ...videoA11y,
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          "The bar is the host's. F0 synthesizes the core controls from the runtime; anything else is merged in by id, so relabelling the mic is a patch rather than a reimplementation.",
      },
    },
  },
  beforeEach: () => {
    resetSurfaceState()
  },
  render: function Render() {
    const [notes, setNotes] = useState(false)
    return (
      <SurfaceStory
        seed={sixPeopleSeed}
        defaultMode="floating"
        actionOrder={["core:microphone", "core:camera", "notes"]}
        actions={[
          // A patch: only the id and what changes.
          { id: "core:microphone", label: "Silence me" },
          {
            id: "notes",
            label: "Notes",
            icon: Settings,
            pressed: notes,
            onClick: () => setNotes((value) => !value),
            group: "collab",
            priority: 55,
          },
          {
            id: "record",
            label: "Record",
            icon: Record,
            group: "system",
            priority: 30,
          },
          {
            id: "layout",
            label: "Change layout",
            icon: Desktop,
            group: "system",
            priority: 20,
          },
          {
            id: "more",
            label: "Something else",
            icon: Ellipsis,
            group: "system",
            priority: 5,
          },
        ]}
      />
    )
  },
}

export const InApplicationFrame: StoryObj = {
  parameters: {
    ...videoA11y,
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          "The huddle flow: start a call from a conversation, minimize it, and keep using the app. The window lives in a portal, so navigating never unmounts the video.",
      },
    },
  },
  beforeEach: () => {
    resetSurfaceState()
  },
  render: function Render() {
    const [live, setLive] = useState(false)
    const { runtime } = useMockMeetingRuntime(sixPeopleSeed)

    return (
      <F0Meeting runtime={live ? runtime : null} defaultMode="floating">
        <div className="flex h-screen bg-f1-background">
          <nav className="w-60 shrink-0 space-y-2 border-r border-solid border-f1-border-secondary p-4">
            <div className="h-4 w-28 rounded bg-f1-background-secondary" />
            {["Design", "Product", "Marta", "Aiko"].map((name) => (
              <div
                key={name}
                className="rounded-md px-2 py-1.5 text-sm text-f1-foreground-secondary"
              >
                {name}
              </div>
            ))}
          </nav>
          <main className="flex-1 p-8">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-lg font-medium">Design</h2>
              <button
                type="button"
                className="rounded-md bg-f1-background-secondary px-3 py-1.5 text-sm font-medium"
                onClick={() => setLive((value) => !value)}
              >
                {live ? "Leave huddle" : "Start huddle"}
              </button>
            </div>
            <PageBehind />
          </main>
        </div>
      </F0Meeting>
    )
  },
}

export const WithRealCamera: StoryObj = {
  parameters: {
    ...videoA11y,
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          "Your real camera drives the local tile, and each remote tile re-renders it with a different crop and hue so the room is full of genuinely human video. Requires a click: the browser will not grant a camera without a gesture.",
      },
    },
  },
  beforeEach: () => {
    resetSurfaceState()
  },
  render: function Render() {
    const { runtime, drivers } = useMockMeetingRuntime(sixPeopleSeed)
    return (
      <div className="flex flex-col gap-3 bg-f1-background-secondary p-6">
        <button
          type="button"
          className="w-fit rounded-md bg-f1-background px-3 py-1.5 text-sm font-medium"
          onClick={() => void drivers.enableLocalCamera()}
        >
          {drivers.hasLocalCamera ? "Camera on" : "Use my camera"}
        </button>
        <div
          className="overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-special-page"
          style={{ height: 520 }}
        >
          <F0MeetingProvider runtime={runtime}>
            <MeetingSurfaceProvider
              defaultMode="inline"
              roomId={sixPeopleSeed.room.id}
            >
              <F0MeetingRoom />
            </MeetingSurfaceProvider>
          </F0MeetingProvider>
        </div>
      </div>
    )
  },
}

/** Deterministic: no camera, no animated canvases, no synthesized audio. */
export const Snapshot: StoryObj = {
  parameters: {
    a11y: { test: "todo" as const },
    chromatic: { pauseAnimationAtEnd: true },
  },
  render: () => (
    <BoxedRoom
      seed={{
        ...sixPeopleSeed,
        room: { ...sixPeopleSeed.room, startedAt: undefined },
        videoSource: "synthetic",
        animateVideo: false,
        audio: false,
        others: sixPeopleSeed.others.map((person) => ({
          ...person,
          camera: false,
        })),
      }}
      height={420}
    />
  ),
}
