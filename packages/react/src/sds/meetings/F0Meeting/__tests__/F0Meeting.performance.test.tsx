import { act } from "react"
import { describe, expect, it } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { SpeakingIndicator } from "../components/grid/SpeakingIndicator"
import { ParticipantTile } from "../components/grid/ParticipantTile"
import { buildTiles } from "../layout/tiles"
import { F0MeetingProvider } from "../providers/F0MeetingProvider"
import { createMeetingSignalStore } from "../providers/MeetingSignalStore"
import { type F0MeetingParticipant, type F0MeetingRuntime } from "../types"

const store = createMeetingSignalStore()

const participants: F0MeetingParticipant[] = Array.from(
  { length: 20 },
  (_, index) => ({
    id: `p${index}`,
    name: `Person ${index}`,
    isLocal: index === 0,
    tracks: [
      {
        id: `p${index}:mic`,
        kind: "microphone" as const,
        bindingKey: `p${index}:mic:0`,
        muted: false,
        live: true,
      },
    ],
  })
)

const runtime: F0MeetingRuntime = {
  room: { id: "room", title: "Room" },
  status: "connected",
  localParticipantId: "p0",
  participants,
  signals: store,
  localMedia: {
    microphone: { enabled: true },
    camera: { enabled: false },
  },
  leave: () => {},
  setMicrophoneEnabled: () => {},
  setCameraEnabled: () => {},
}

/**
 * The guard rail for the context partitioning. If someone moves the volatile
 * signals into a context, or makes the tile read them, this test fails — and it
 * has to, because that regression is invisible until a real call with a dozen
 * people brings the tab to its knees.
 */
describe("meeting render isolation", () => {
  it("does not re-render tiles when audio levels change", () => {
    let tileRenders = 0
    let indicatorRenders = 0

    const CountingIndicator = ({
      participantId,
    }: {
      participantId: string
    }) => {
      indicatorRenders++
      return <SpeakingIndicator participantId={participantId} />
    }

    const tiles = buildTiles(participants)

    const Room = () => (
      <F0MeetingProvider runtime={runtime}>
        {tiles.map((tile) => {
          tileRenders++
          return (
            <div key={tile.key}>
              <ParticipantTile tile={tile} />
              <CountingIndicator participantId={tile.participant.id} />
            </div>
          )
        })}
      </F0MeetingProvider>
    )

    zeroRender(<Room />)

    const tilesAfterMount = tileRenders
    const indicatorsAfterMount = indicatorRenders

    act(() => {
      for (let step = 0; step < 200; step++) {
        store.setAudioLevel(`p${step % 20}`, (step % 20) / 20)
      }
    })

    // The tiles never re-render: only the leaves that subscribed do.
    expect(tileRenders).toBe(tilesAfterMount)
    expect(indicatorRenders).toBe(indicatorsAfterMount)
  })
})
