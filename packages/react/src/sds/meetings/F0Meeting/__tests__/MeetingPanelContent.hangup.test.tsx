import { useState } from "react"
import { describe, expect, it } from "vitest"
import { fireEvent, render, screen } from "@/testing/test-utils"
import { F0Meeting } from "../F0Meeting"
import { MeetingPanelContent } from "../MeetingPanelContent"
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
      tracks: [],
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
 * Hanging up out of `panel` mode.
 *
 * The panel's content is mounted by the HOST — `present()` stores the element in
 * the side panel's own state — so it does not live under the meeting surface and
 * is not removed with it. It is taken out in an effect cleanup, which is a whole
 * commit after the render where the runtime became null.
 *
 * So there is exactly one render where this is on screen with no call behind it,
 * and it has to survive it. It used not to: `useF0Meeting` threw, and hanging up
 * took the page down with it.
 */
describe("MeetingPanelContent when the call ends", () => {
  it("survives the render between the call ending and the panel being cleared", () => {
    const Host = () => {
      const [inCall, setInCall] = useState(true)
      return (
        <>
          <button type="button" onClick={() => setInCall(false)}>
            hang up
          </button>
          <F0Meeting runtime={inCall ? runtime : null}>
            {/* Where the panel renders it from: beside the meeting, never under
                the surface. */}
            <div data-testid="panel-slot">
              <MeetingPanelContent />
            </div>
          </F0Meeting>
        </>
      )
    }

    render(<Host />)
    const slot = () => screen.getByTestId("panel-slot")
    expect(slot().querySelector('[data-mode="panel"]')).not.toBeNull()

    expect(() => fireEvent.click(screen.getByText("hang up"))).not.toThrow()

    // And it renders nothing rather than an empty shell of a call that is over.
    expect(slot().querySelector('[data-mode="panel"]')).toBeNull()
  })
})
