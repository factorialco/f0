import { describe, expect, it } from "vitest"
import userEvent from "@testing-library/user-event"

import { screen, zeroRender } from "@/testing/test-utils"

import { F0MeetingRoom } from "../F0MeetingRoom"
import { F0MeetingProvider } from "../providers/F0MeetingProvider"
import { MeetingSurfaceProvider } from "../providers/MeetingSurfaceProvider"
import {
  type F0MeetingRuntime,
  type F0MeetingSidePanel,
  type F0MeetingSurfaceMode,
} from "../types"

const runtime: F0MeetingRuntime = {
  room: { id: "room", title: "Huddle" },
  status: "connected",
  localParticipantId: "me",
  participants: [
    { id: "me", name: "Me", isLocal: true, tracks: [] },
    { id: "a", name: "Ada", isLocal: false, tracks: [] },
  ],
  localMedia: { microphone: { enabled: true }, camera: { enabled: true } },
  leave: () => {},
  setMicrophoneEnabled: () => {},
  setCameraEnabled: () => {},
}

const panel: F0MeetingSidePanel = {
  defaultTabId: "chat",
  tabs: [
    { id: "chat", label: "Chat", content: <p>the conversation</p> },
    { id: "notes", label: "Notes", content: <p>the notes</p> },
  ],
}

// Note the absent default: `renderRoom("fullscreen")` would fall
// back to a default parameter and quietly test the opposite of what it says.
const renderRoom = (
  mode: F0MeetingSurfaceMode,
  sidePanel?: F0MeetingSidePanel
) =>
  zeroRender(
    <F0MeetingProvider runtime={runtime}>
      <MeetingSurfaceProvider defaultMode={mode} roomId={`room-${mode}`}>
        <F0MeetingRoom sidePanel={sidePanel} />
      </MeetingSurfaceProvider>
    </F0MeetingProvider>
  )

const chatButton = () => screen.getByRole("button", { name: /open chat/i })

describe("the in-call side panel", () => {
  it("stays closed until asked", () => {
    renderRoom("fullscreen", panel)
    expect(screen.queryByTestId("meeting-side-panel")).toBeNull()
  })

  it("opens on the default tab and shows its content", async () => {
    renderRoom("fullscreen", panel)
    await userEvent.click(chatButton())
    expect(screen.getByTestId("meeting-side-panel")).toBeInTheDocument()
    expect(screen.getByText("the conversation")).toBeInTheDocument()
  })

  it("mounts only the selected tab", async () => {
    // The chat's transcript is virtualized: measuring its rows inside a hidden
    // subtree yields zero heights it then has to correct on reveal.
    renderRoom("fullscreen", panel)
    await userEvent.click(chatButton())
    expect(screen.queryByText("the notes")).toBeNull()
    await userEvent.click(screen.getByRole("tab", { name: "Notes" }))
    expect(screen.getByText("the notes")).toBeInTheDocument()
    expect(screen.queryByText("the conversation")).toBeNull()
  })

  it("closes from its own button", async () => {
    renderRoom("fullscreen", panel)
    await userEvent.click(chatButton())
    await userEvent.click(screen.getByRole("button", { name: /close panel/i }))
    expect(screen.queryByTestId("meeting-side-panel")).toBeNull()
  })

  it("offers no chat control at all without a panel", () => {
    renderRoom("fullscreen")
    expect(screen.queryByRole("button", { name: /open chat/i })).toBeNull()
  })

  it("is fullscreen-only: a floating window has no room for 420px", () => {
    renderRoom("floating", panel)
    expect(screen.queryByRole("button", { name: /open chat/i })).toBeNull()
  })
})
