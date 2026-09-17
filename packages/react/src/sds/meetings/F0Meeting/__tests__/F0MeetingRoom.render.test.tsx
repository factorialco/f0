import { beforeEach, describe, expect, it, vi } from "vitest"
import { screen, userEvent, zeroRender } from "@/testing/test-utils"
import { F0Meeting } from "../F0Meeting"
import { F0MeetingRoom } from "../F0MeetingRoom"
import { F0MeetingProvider } from "../providers/F0MeetingProvider"
import { MeetingSurfaceProvider } from "../providers/MeetingSurfaceProvider"
import { useTrackBinding } from "../providers/useTrackBinding"
import {
  type F0MeetingParticipant,
  type F0MeetingRuntime,
  type F0MeetingStatus,
  type F0MeetingTrack,
} from "../types"

const participant = (
  id: string,
  isLocal = false,
  muted = false
): F0MeetingParticipant => ({
  id,
  name: `Person ${id}`,
  isLocal,
  tracks: [
    {
      id: `${id}:mic`,
      kind: "microphone",
      bindingKey: `${id}:mic:0`,
      muted,
      live: !muted,
    },
  ],
})

const buildRuntime = (
  overrides: Partial<F0MeetingRuntime> = {}
): F0MeetingRuntime => ({
  room: { id: "room", title: "Design huddle" },
  status: "connected" as F0MeetingStatus,
  localParticipantId: "me",
  participants: [participant("me", true), participant("a"), participant("b")],
  localMedia: {
    microphone: { enabled: true },
    camera: { enabled: false },
  },
  leave: () => {},
  setMicrophoneEnabled: () => {},
  setCameraEnabled: () => {},
  ...overrides,
})

const renderRoom = (runtime = buildRuntime()) =>
  zeroRender(
    <F0MeetingProvider runtime={runtime}>
      <MeetingSurfaceProvider defaultMode="inline" roomId={runtime.room.id}>
        <F0MeetingRoom />
      </MeetingSurfaceProvider>
    </F0MeetingProvider>
  )

/**
 * A plain mount of the room. Cheap, but it is the test that catches the whole
 * class of failures the pure-function suites cannot see — a missing context
 * provider around a Radix primitive, for instance, throws only at render.
 */
describe("F0MeetingRoom", () => {
  it("renders the grid and the control bar", () => {
    renderRoom()
    expect(screen.getByTestId("meeting-grid")).toBeInTheDocument()
    expect(screen.getByTestId("meeting-control-bar")).toBeInTheDocument()
  })

  it("synthesizes the core controls from the runtime", () => {
    renderRoom()
    expect(
      screen.getByRole("button", { name: /turn off microphone/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: /turn on camera/i })
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /leave/i })).toBeInTheDocument()
  })

  it("omits screen sharing when the host does not support it", () => {
    renderRoom()
    expect(screen.queryByRole("button", { name: /share screen/i })).toBeNull()
  })

  it("offers screen sharing once the runtime provides it", () => {
    renderRoom(buildRuntime({ setScreenShareEnabled: () => {} }))
    expect(
      screen.getByRole("button", { name: /share screen/i })
    ).toBeInTheDocument()
  })

  it("disables a control the capabilities forbid, rather than hiding it", () => {
    renderRoom(
      buildRuntime({
        setScreenShareEnabled: () => {},
        capabilities: { canShareScreen: false },
      })
    )
    expect(screen.getByRole("button", { name: /share screen/i })).toBeDisabled()
  })

  it("shows the connecting state instead of an empty grid", () => {
    renderRoom(buildRuntime({ status: "connecting" }))
    expect(screen.queryByTestId("meeting-grid")).toBeNull()
  })

  it("keeps the grid mounted while reconnecting so the last frame stays", () => {
    renderRoom(buildRuntime({ status: "reconnecting" }))
    expect(screen.getByTestId("meeting-grid")).toBeInTheDocument()
    expect(screen.getByRole("status")).toHaveTextContent(/reconnecting/i)
  })

  it("offers a rejoin action after the call ends", () => {
    renderRoom(buildRuntime({ status: "disconnected", reconnect: () => {} }))
    expect(screen.getByRole("button", { name: /rejoin/i })).toBeInTheDocument()
  })
})

describe("the control bar", () => {
  it("renders mic and camera as real toggles carrying their state", () => {
    renderRoom()
    const microphone = screen.getByRole("button", {
      name: /turn off microphone/i,
    })
    // A toggle, not a button styled to look active: assistive tech gets the
    // state for free.
    expect(microphone).toHaveAttribute("aria-pressed", "false")
    expect(
      screen.getByRole("button", { name: /turn on camera/i })
    ).toHaveAttribute("aria-pressed", "true")
  })

  it("offers no device settings when the runtime exposes no devices", () => {
    renderRoom()
    expect(
      screen.queryByRole("button", { name: /select microphone/i })
    ).toBeNull()
    expect(screen.queryByRole("button", { name: /select camera/i })).toBeNull()
  })

  it("adds a separate settings control once devices exist", () => {
    renderRoom(
      buildRuntime({
        localMedia: {
          microphone: {
            enabled: true,
            devices: [{ id: "a", label: "Built-in mic" }],
            selectDevice: () => {},
          },
          camera: { enabled: false },
        },
      })
    )
    // Its own control next to the toggle, not a chevron glued to it: a menu
    // hanging off a toggle turns one target into two.
    expect(
      screen.getByRole("button", { name: /select microphone/i })
    ).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: /select camera/i })).toBeNull()
  })
})

describe("hanging up", () => {
  it("reports the leave so the host can end the call", async () => {
    const leave = vi.fn()
    renderRoom(buildRuntime({ leave }))

    await userEvent.click(screen.getByRole("button", { name: /leave/i }))

    // F0 never ends a call on its own — it tells the host, and the host is what
    // drops the runtime. Anything else leaves a dead window floating on screen.
    expect(leave).toHaveBeenCalledTimes(1)
  })
})

describe("remembered surface mode", () => {
  const readMode = () =>
    JSON.parse(localStorage.getItem("ONE-meeting-mode") ?? "null")

  beforeEach(() => {
    localStorage.clear()
  })

  it("starts a different meeting at the host's default, not the last mode used", () => {
    localStorage.setItem(
      "ONE-meeting-mode",
      JSON.stringify({ roomId: "an-older-call", mode: "minimized" })
    )

    zeroRender(
      <F0Meeting runtime={buildRuntime()} defaultMode="fullscreen">
        <p>app</p>
      </F0Meeting>
    )

    expect(screen.getByTestId("meeting-window")).toHaveAttribute(
      "data-mode",
      "fullscreen"
    )
  })

  it("restores the mode of the call it belongs to", () => {
    localStorage.setItem(
      "ONE-meeting-mode",
      JSON.stringify({ roomId: "room", mode: "minimized" })
    )

    zeroRender(
      <F0Meeting runtime={buildRuntime()} defaultMode="fullscreen">
        <p>app</p>
      </F0Meeting>
    )

    expect(screen.getByTestId("meeting-window")).toHaveAttribute(
      "data-mode",
      "minimized"
    )
  })

  it("scopes what it writes to the current room", () => {
    zeroRender(
      <F0Meeting runtime={buildRuntime()} defaultMode="floating">
        <p>app</p>
      </F0Meeting>
    )
    expect(readMode()).toMatchObject({ roomId: "room" })
  })
})

describe("mode switch", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  /** Binds a track outside the grid, which cannot measure itself in jsdom. */
  const TrackProbe = ({ track }: { track: F0MeetingTrack }) => {
    const ref = useTrackBinding<HTMLVideoElement>(track)
    return <video ref={ref} data-testid="probe" />
  }

  const renderSurface = (runtime = buildRuntime(), track?: F0MeetingTrack) =>
    zeroRender(
      <F0Meeting runtime={runtime} defaultMode="floating">
        {track ? <TrackProbe track={track} /> : null}
      </F0Meeting>
    )

  // Destinations, not options: the mode you are in is not offered, so there is
  // never a button that does nothing. Nor is the side panel offered here: the
  // room is rendered on its own, with no application frame and therefore no
  // panel to be the content of — see the ApplicationFrame meeting tests for
  // what docking does.
  const modeButton = (name: RegExp) => screen.getByRole("button", { name })
  const queryMode = (name: RegExp) => screen.queryByRole("button", { name })
  const toFloating = () => modeButton(/floating window/i)
  const toFullscreen = () => modeButton(/fill the screen/i)

  it("moves the call between the modes it has", async () => {
    renderSurface()
    const window = screen.getByTestId("meeting-window")

    await userEvent.click(toFullscreen())
    expect(window).toHaveAttribute("data-mode", "fullscreen")

    await userEvent.click(toFloating())
    expect(window).toHaveAttribute("data-mode", "floating")
  })

  it("does not offer the mode you are already in", async () => {
    renderSurface()
    // Starts floating, so floating is the one missing.
    expect(queryMode(/floating window/i)).toBeNull()
    expect(toFullscreen()).toBeVisible()

    await userEvent.click(toFullscreen())
    expect(queryMode(/fill the screen/i)).toBeNull()
    expect(toFloating()).toBeVisible()
  })

  /**
   * A destination that isn't there is not a destination.
   *
   * Standalone there is no side panel, so `panel` derives to `floating` — the
   * same rule `inline` has always had for a slot nobody registered. Offering
   * the button anyway would be one that lands you somewhere else.
   */
  it("does not offer the side panel when there is no panel", async () => {
    renderSurface()
    expect(queryMode(/side panel/i)).toBeNull()

    await userEvent.click(toFullscreen())
    expect(queryMode(/side panel/i)).toBeNull()
  })

  it("has no button for the pill, which is derived rather than chosen", () => {
    renderSurface()
    expect(screen.queryByRole("button", { name: /^minimize$/i })).toBeNull()
  })

  it("never remounts the video moving between window modes", async () => {
    const binding = vi.fn(() => vi.fn())
    const track: F0MeetingTrack = {
      id: "me:cam",
      kind: "camera",
      bindingKey: "me:cam:0",
      binding,
      muted: false,
      live: true,
    }
    const runtime = buildRuntime({
      participants: [{ id: "me", name: "Me", isLocal: true, tracks: [track] }],
    })

    renderSurface(runtime, track)
    await userEvent.click(toFullscreen())
    await userEvent.click(toFloating())
    await userEvent.click(toFullscreen())

    // Between window modes a change is only a rect: the window never leaves
    // its portal, so the element the track is attached to survives all of
    // them. Docking into the side panel is the one transition that does NOT
    // hold this — there the room genuinely moves into the panel's tree — and
    // it is asserted where it happens, in the ApplicationFrame tests.
    expect(binding).toHaveBeenCalledTimes(1)
  })

  it("falls back to the host default when the stored mode no longer exists", () => {
    // A mode retired between releases (here: the old "docked") must not strand
    // anyone on a mode the surface can no longer render.
    localStorage.setItem(
      "ONE-meeting-mode",
      JSON.stringify({ roomId: "room", mode: "docked" })
    )

    zeroRender(
      <F0Meeting runtime={buildRuntime()} defaultMode="floating">
        <p>app</p>
      </F0Meeting>
    )

    expect(screen.getByTestId("meeting-window")).toHaveAttribute(
      "data-mode",
      "floating"
    )
  })
})

describe("F0Meeting surface", () => {
  it("mounts nothing at all without a runtime", () => {
    zeroRender(
      <F0Meeting runtime={null}>
        <p>app</p>
      </F0Meeting>
    )
    expect(screen.queryByTestId("meeting-window")).toBeNull()
    expect(screen.getByText("app")).toBeInTheDocument()
  })

  it("portals the window out of the app tree", () => {
    zeroRender(
      <F0Meeting runtime={buildRuntime()} defaultMode="floating">
        <p>app</p>
      </F0Meeting>
    )
    const window = screen.getByTestId("meeting-window")
    expect(window).toBeInTheDocument()
    // Escaping the frame's stacking context is the whole reason the surface
    // lives in a portal, so assert it really is a child of <body>.
    expect(window.closest("[data-f0-meeting-layer]")?.parentElement).toBe(
      document.body
    )
  })
})
