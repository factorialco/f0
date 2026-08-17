import { describe, expect, it } from "vitest"

import { screen, zeroRender } from "@/testing/test-utils"

import { ParticipantTile } from "../components/grid/ParticipantTile"
import { buildTiles } from "../layout/tiles"
import { F0MeetingProvider } from "../providers/F0MeetingProvider"
import { MeetingSurfaceProvider } from "../providers/MeetingSurfaceProvider"
import {
  type F0MeetingParticipant,
  type F0MeetingRuntime,
  type F0MeetingTrack,
} from "../types"

const camera = (id: string): F0MeetingTrack => ({
  id: `${id}:cam`,
  kind: "camera",
  bindingKey: `${id}:cam:0`,
  muted: false,
  live: true,
})

const build = (
  overrides: Partial<F0MeetingParticipant> = {}
): F0MeetingParticipant => ({
  id: "a",
  name: "Ada",
  isLocal: false,
  tracks: [camera("a")],
  ...overrides,
})

const share = (id: string): F0MeetingTrack => ({
  id: `${id}:share`,
  kind: "screenShare",
  bindingKey: `${id}:share:0`,
  muted: false,
  live: true,
  width: 2560,
  height: 1440,
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
        <ParticipantTile tile={tile} />
      </MeetingSurfaceProvider>
    </F0MeetingProvider>
  )

  const element = screen.getByTestId("meeting-participant-tile")
  const chip = screen.getByText(/Ada/).parentElement
  if (!chip) throw new Error("no name chip")
  return { element, chip, video: element.querySelector("video") }
}

describe("ParticipantTile video fit", () => {
  it("fills the tile by default, cropping the sides", () => {
    // Tiles take their cell's shape, so filling is what removes the dead space.
    expect(renderTile(build()).video?.className).toContain("object-cover")
  })

  it("letterboxes anyone who opted out of cropping", () => {
    // Sign language is why this exists: cropping the sides takes the hands.
    expect(renderTile(build({ preventCrop: true })).video?.className).toContain(
      "object-contain"
    )
  })

  it("letterboxes a shared screen rather than cropping it", () => {
    // Cropping a presentation hides content.
    const { video } = renderTile(build({ tracks: [share("a")] }))
    expect(video?.className).toContain("object-contain")
  })

  it("puts a shared screen on black, so the bands read as the screen", () => {
    // What Meet does: whatever the shared screen does not cover is black, not
    // a light gap in the UI.
    const { element } = renderTile(build({ tracks: [share("a")] }))
    expect(element.className).toContain("bg-f1-background-inverse")
  })

  it("keeps a filled camera tile on the light surface", () => {
    const { element } = renderTile(build())
    expect(element.className).toContain("bg-f1-background-secondary")
  })
})

describe("ParticipantTile name contrast", () => {
  it("goes light on a dark chip over video, which can be any imagery", () => {
    const { chip } = renderTile(build())
    expect(chip.className).toContain("text-f1-foreground-inverse")
    expect(chip.className).toContain("bg-f1-background-inverse/80")
  })

  it("goes dark on the light tile when the camera is off", () => {
    // White-on-a-dark-smudge over a pale avatar placeholder is the contrast
    // failure this exists to prevent.
    const { chip } = renderTile(build({ tracks: [] }))
    expect(chip.className).toContain("text-f1-foreground")
    expect(chip.className).not.toContain("text-f1-foreground-inverse")
    expect(chip.className).not.toContain("bg-f1-background-inverse")
  })
})
