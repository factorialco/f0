import { describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { F0MeetingProvider } from "../providers/F0MeetingProvider"
import { useTrackBinding } from "../providers/useTrackBinding"
import { type F0MeetingRuntime, type F0MeetingTrack } from "../types"

const Video = ({ track }: { track: F0MeetingTrack }) => {
  const ref = useTrackBinding<HTMLVideoElement>(track)
  return <video ref={ref} data-testid="video" />
}

const buildRuntime = (track: F0MeetingTrack): F0MeetingRuntime => ({
  room: { id: "room", title: "Room" },
  status: "connected",
  localParticipantId: "me",
  participants: [{ id: "me", name: "Me", isLocal: true, tracks: [track] }],
  localMedia: {
    microphone: { enabled: true },
    camera: { enabled: true },
  },
  leave: () => {},
  setMicrophoneEnabled: () => {},
  setCameraEnabled: () => {},
})

describe("useTrackBinding", () => {
  it("attaches once and detaches on unmount", () => {
    const detach = vi.fn()
    const binding = vi.fn(() => detach)
    const track: F0MeetingTrack = {
      id: "t",
      kind: "camera",
      bindingKey: "t:0",
      binding,
      muted: false,
      live: true,
    }

    const { unmount } = zeroRender(
      <F0MeetingProvider runtime={buildRuntime(track)}>
        <Video track={track} />
      </F0MeetingProvider>
    )

    expect(binding).toHaveBeenCalledTimes(1)
    unmount()
    expect(detach).toHaveBeenCalledTimes(1)
  })

  it("does not re-attach when the host rebuilds the runtime", () => {
    const binding = vi.fn(() => vi.fn())
    const track: F0MeetingTrack = {
      id: "t",
      kind: "camera",
      bindingKey: "t:0",
      binding,
      muted: false,
      live: true,
    }

    const { rerender } = zeroRender(
      <F0MeetingProvider runtime={buildRuntime(track)}>
        <Video track={track} />
      </F0MeetingProvider>
    )

    // A host rebuilds the runtime — and every binding closure with it — on each
    // transport event. Re-attaching here would black-flash the video ~20 times
    // a second.
    for (let event = 0; event < 5; event++) {
      const churned: F0MeetingTrack = {
        ...track,
        binding: vi.fn(() => vi.fn()),
      }
      rerender(
        <F0MeetingProvider runtime={buildRuntime(churned)}>
          <Video track={churned} />
        </F0MeetingProvider>
      )
    }

    expect(binding).toHaveBeenCalledTimes(1)
  })

  it("re-attaches when the source is genuinely republished", () => {
    const first = vi.fn(() => vi.fn())
    const track: F0MeetingTrack = {
      id: "t",
      kind: "camera",
      bindingKey: "t:0",
      binding: first,
      muted: false,
      live: true,
    }

    const { rerender } = zeroRender(
      <F0MeetingProvider runtime={buildRuntime(track)}>
        <Video track={track} />
      </F0MeetingProvider>
    )

    const second = vi.fn(() => vi.fn())
    const republished: F0MeetingTrack = {
      ...track,
      bindingKey: "t:1",
      binding: second,
    }

    rerender(
      <F0MeetingProvider runtime={buildRuntime(republished)}>
        <Video track={republished} />
      </F0MeetingProvider>
    )

    expect(second).toHaveBeenCalledTimes(1)
  })
})
