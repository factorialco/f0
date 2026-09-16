import { useEffect, useState } from "react"
import { describe, expect, it } from "vitest"
import { fireEvent, render, screen } from "@/testing/test-utils"
import { F0Meeting } from "../F0Meeting"
import { type F0MeetingRuntime } from "../types"

const runtime: F0MeetingRuntime = {
  room: { id: "room", title: "Room" },
  status: "connected",
  localParticipantId: "p0",
  participants: [
    {
      id: "p0",
      name: "Ada",
      isLocal: true,
      tracks: [
        {
          id: "p0:mic",
          kind: "microphone" as const,
          bindingKey: "p0:mic:0",
          muted: false,
          live: true,
        },
      ],
    },
  ],
  localMedia: {
    microphone: { enabled: true },
    camera: { enabled: false },
  },
  leave: () => {},
  setMicrophoneEnabled: () => {},
  setCameraEnabled: () => {},
}

/**
 * The guard rail for the one thing `children` must never do: move.
 *
 * `children` here is the host's whole application. If it changes position in the
 * tree when a call starts, React reconciles the two shapes as different elements
 * and remounts everything below — every component loses its state, and a host
 * that fetches on mount re-issues every request on screen. The bug is invisible
 * until you watch a real app's network tab while answering a call.
 */
describe("F0Meeting child stability", () => {
  it("does not remount children when a call starts or ends", () => {
    let mounts = 0

    const Child = () => {
      useEffect(() => {
        mounts++
      }, [])
      return <span>app</span>
    }

    const Host = () => {
      const [inCall, setInCall] = useState(false)
      return (
        <>
          <button type="button" onClick={() => setInCall((value) => !value)}>
            toggle
          </button>
          <F0Meeting runtime={inCall ? runtime : null}>
            <Child />
          </F0Meeting>
        </>
      )
    }

    render(<Host />)
    expect(mounts).toBe(1)
    expect(screen.getByText("app")).toBeInTheDocument()

    // The call starts.
    fireEvent.click(screen.getByText("toggle"))
    expect(screen.getByText("app")).toBeInTheDocument()
    expect(mounts).toBe(1)

    // And ends.
    fireEvent.click(screen.getByText("toggle"))
    expect(mounts).toBe(1)
  })

  it("renders children with no call, and mounts no surface", () => {
    render(
      <F0Meeting runtime={null}>
        <span>app</span>
      </F0Meeting>
    )

    expect(screen.getByText("app")).toBeInTheDocument()
    expect(screen.queryByTestId("meeting-window")).not.toBeInTheDocument()
  })
})
