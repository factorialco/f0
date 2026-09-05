import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { ParticipantTile } from "../components/grid/ParticipantTile"
import { resolveAutoFocus } from "../layout/auto-focus"
import { buildTiles } from "../layout/tiles"
import { F0MeetingProvider } from "../providers/F0MeetingProvider"
import { MeetingSurfaceProvider } from "../providers/MeetingSurfaceProvider"
import { type F0MeetingParticipant, type F0MeetingRuntime } from "../types"

const person = (
  overrides: Partial<F0MeetingParticipant> = {}
): F0MeetingParticipant => ({
  id: "a",
  name: "Ada Lovelace",
  isLocal: false,
  tracks: [
    {
      id: "a:cam",
      kind: "camera",
      bindingKey: "a:cam:0",
      muted: false,
      live: true,
    },
  ],
  ...overrides,
})

const renderTile = (participant: F0MeetingParticipant) => {
  const runtime: F0MeetingRuntime = {
    room: { id: "room", title: "Huddle" },
    status: "connected",
    localParticipantId: "me",
    participants: [participant],
    localMedia: { microphone: { enabled: true }, camera: { enabled: true } },
    leave: () => {},
    setMicrophoneEnabled: () => {},
    setCameraEnabled: () => {},
  }
  const tile = buildTiles([participant])[0]
  if (!tile) throw new Error("no tile")

  zeroRender(
    <F0MeetingProvider runtime={runtime}>
      <MeetingSurfaceProvider defaultMode="inline" roomId="room">
        <ParticipantTile tile={tile} canFocus />
      </MeetingSurfaceProvider>
    </F0MeetingProvider>
  )
  return screen.getByTestId("meeting-participant-tile")
}

describe("someone the call is still waiting for", () => {
  it("says so instead of showing their name", () => {
    renderTile(person({ presence: "invited", tracks: [] }))
    expect(screen.getByText(/waiting/i)).toBeInTheDocument()
    expect(screen.queryByText("Ada Lovelace")).toBeNull()
  })

  it("shows the name once they are in", () => {
    renderTile(person({ presence: "joined" }))
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
    expect(screen.queryByText(/waiting/i)).toBeNull()
  })

  it("treats an absent presence as joined, so existing hosts are unaffected", () => {
    renderTile(person())
    expect(screen.getByText("Ada Lovelace")).toBeInTheDocument()
  })

  it("shows no video even if the host left a track on them", () => {
    // Belt and braces: a track on someone who has not arrived is a host bug,
    // and rendering it would put a live picture under a "waiting" label.
    const tile = renderTile(person({ presence: "invited" }))
    expect(tile.querySelector("video")).toBeNull()
  })

  it("offers no pin: there is nothing to spotlight yet", () => {
    renderTile(person({ presence: "invited", tracks: [] }))
    expect(screen.queryByRole("button", { name: /pin/i })).toBeNull()
  })

  it("is never auto-focused in a one-to-one", () => {
    const tiles = buildTiles([
      { ...person({ id: "me", isLocal: true }), id: "me", isLocal: true },
      person({ presence: "invited", tracks: [] }),
    ])
    const result = resolveAutoFocus({
      tiles,
      intent: { type: "auto" },
      seenShareKeys: new Set(),
    })
    // Blowing up an empty "waiting" plate to fill the room is the worst
    // possible use of the spotlight.
    expect(result.focusKey).toBeNull()
  })
})
