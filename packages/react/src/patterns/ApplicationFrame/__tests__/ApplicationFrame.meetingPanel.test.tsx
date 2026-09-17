import { beforeEach, describe, expect, it, vi } from "vitest"
import { useAiChatToggle } from "@/kits/ai/F0AiChat/providers/useAiChatToggle"
import { useMeetingSurface } from "@/sds/meetings/F0Meeting/providers/MeetingSurfaceProvider"
import { useTrackBinding } from "@/sds/meetings/F0Meeting/providers/useTrackBinding"
import {
  type F0MeetingRuntime,
  type F0MeetingTrack,
} from "@/sds/meetings/F0Meeting/types"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"
import { ApplicationFrame } from ".."
import { useSidePanel } from "../SidePanel/SidePanelProvider"

const buildRuntime = (tracks: F0MeetingTrack[] = []): F0MeetingRuntime => ({
  room: { id: "room", title: "Huddle" },
  status: "connected",
  localParticipantId: "me",
  participants: [{ id: "me", name: "Me", isLocal: true, tracks }],
  localMedia: {
    microphone: { enabled: true },
    camera: { enabled: false },
  },
  leave: () => {},
  setMicrophoneEnabled: () => {},
  setCameraEnabled: () => {},
})

/** Drives both surfaces the way the real hosts do. */
const Probe = () => {
  const { present, open, setOpen: setPanelOpen } = useSidePanel()
  // The chat's OWN toggle, not the panel's raw `setOpen`: opening the assistant
  // is "clear whatever is in there, then open", and that is the path the call
  // has to survive.
  const { setOpen: setChatOpen } = useAiChatToggle()
  const { setMode, mode } = useMeetingSurface()
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          present({ id: "conv", content: <div>CONVERSATION</div> })
        }
      >
        open-conv
      </button>
      <button type="button" onClick={() => setChatOpen(true)}>
        open-chat
      </button>
      <button type="button" onClick={() => setChatOpen(false)}>
        close-chat
      </button>
      <button type="button" onClick={() => setPanelOpen(false)}>
        close-panel
      </button>
      <button type="button" onClick={() => setMode("panel")}>
        to-panel
      </button>
      <button type="button" onClick={() => setMode("floating")}>
        to-floating
      </button>
      <span data-testid="meeting-mode">{mode}</span>
      <span data-testid="panel-open">{String(open)}</span>
    </div>
  )
}

const renderFrame = (
  meeting: { runtime: F0MeetingRuntime; overlay?: React.ReactNode } = {
    runtime: buildRuntime(),
  }
) =>
  render(
    <ApplicationFrame
      ai={{
        enabled: true,
        panelContentSide: "left",
        chatMessages: <div>AI CHAT</div>,
      }}
      meeting={{ ...meeting, defaultMode: "floating" }}
      sidebar={<div>SIDEBAR</div>}
    >
      <Probe />
    </ApplicationFrame>
  )

const meetingMode = (): string =>
  screen.getByTestId("meeting-mode").textContent ?? ""

const dockToPanel = async (): Promise<void> => {
  await userEvent.click(screen.getByText("to-panel"))
  await screen.findByTestId("meeting-window")
}

/**
 * Docking a call is not a window moved over the panel — it IS the panel's
 * content, so every assertion here is about parentage rather than geometry.
 */
describe("ApplicationFrame · the call in the side panel", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("floats in a body-level portal until it is docked", () => {
    renderFrame()
    const window = screen.getByTestId("meeting-window")

    expect(window).toHaveAttribute("data-mode", "floating")
    expect(window.closest("[data-f0-meeting-layer]")?.parentElement).toBe(
      document.body
    )
    expect(window.closest("[data-side-panel-container]")).toBeNull()
  })

  it("becomes the panel's content, on the side hosted content docks to", async () => {
    renderFrame()
    await dockToPanel()

    const window = screen.getByTestId("meeting-window")
    expect(window).toHaveAttribute("data-mode", "panel")
    // Inside the panel, and not merely on top of it: `closest` walks the real
    // DOM tree, which a portal is not part of.
    expect(
      window.closest("[data-side-panel-container][data-side-panel-side='left']")
    ).toBeInTheDocument()
    expect(window.closest("[data-f0-meeting-layer]")).toBeNull()
  })

  it("leaves nothing of itself behind when it undocks", async () => {
    renderFrame()
    await dockToPanel()

    await userEvent.click(screen.getByText("to-floating"))

    const window = await screen.findByTestId("meeting-window")
    expect(window).toHaveAttribute("data-mode", "floating")
    expect(window.closest("[data-side-panel-container]")).toBeNull()
  })

  it("evicts whatever was in the panel", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("open-conv"))
    expect(await screen.findByText("CONVERSATION")).toBeInTheDocument()

    await dockToPanel()

    // The last explicit action wins: the user asked for the call in the panel.
    await waitFor(() => {
      expect(screen.queryByText("CONVERSATION")).toBeNull()
    })
    expect(meetingMode()).toBe("panel")
  })

  it("pops out when a conversation takes the panel", async () => {
    renderFrame()
    await dockToPanel()

    await userEvent.click(screen.getByText("open-conv"))

    await waitFor(() => {
      expect(meetingMode()).toBe("floating")
    })
    expect(await screen.findByText("CONVERSATION")).toBeInTheDocument()
  })

  it("pops out when the AI chat takes the panel", async () => {
    renderFrame()
    await dockToPanel()

    await userEvent.click(screen.getByText("open-chat"))

    await waitFor(() => {
      expect(meetingMode()).toBe("floating")
    })
    expect(await screen.findByText("AI CHAT")).toBeInTheDocument()
  })

  it("pops out when the panel is closed under it", async () => {
    renderFrame()
    await dockToPanel()

    await userEvent.click(screen.getByText("close-panel"))

    await waitFor(() => {
      expect(meetingMode()).toBe("floating")
    })
  })

  it("does not put the call back in the panel when the chat closes", async () => {
    renderFrame()
    await dockToPanel()
    await userEvent.click(screen.getByText("open-chat"))
    await waitFor(() => {
      expect(meetingMode()).toBe("floating")
    })

    await userEvent.click(screen.getByText("close-chat"))

    // Restoring it unasked would move the call under the user's cursor.
    expect(meetingMode()).toBe("floating")
  })

  /**
   * Docking opened the panel, so undocking has to close it again. Otherwise a
   * call that borrowed the space leaves an empty column over the page, and the
   * user has to close a panel they never opened.
   */
  it("hands the panel back the way it found it", async () => {
    renderFrame()
    const panelOpen = (): string =>
      screen.getByTestId("panel-open").textContent ?? ""
    expect(panelOpen()).toBe("false")

    await dockToPanel()
    expect(panelOpen()).toBe("true")

    await userEvent.click(screen.getByText("to-floating"))
    await waitFor(() => {
      expect(panelOpen()).toBe("false")
    })
  })

  /**
   * The cost of being real content, stated rather than hidden.
   *
   * Between window modes the room never leaves its portal and the video is
   * never rebound. Docking genuinely moves it into the panel's tree, so the
   * media element is rebuilt and the track re-attached — ONCE each way. The
   * runtime is untouched: `F0MeetingProvider` sits above the panel and never
   * unmounts, so this is a re-attach, not a reconnect.
   */
  it("rebinds the video once per dock, and never reconnects", async () => {
    const binding = vi.fn(() => vi.fn())
    const track: F0MeetingTrack = {
      id: "me:cam",
      kind: "camera",
      bindingKey: "me:cam:0",
      binding,
      muted: false,
      live: true,
    }
    const TrackProbe = () => {
      const ref = useTrackBinding<HTMLVideoElement>(track)
      return <video ref={ref} data-testid="track-probe" />
    }

    renderFrame({ runtime: buildRuntime([track]), overlay: <TrackProbe /> })
    expect(binding).toHaveBeenCalledTimes(1)

    await dockToPanel()
    expect(binding).toHaveBeenCalledTimes(2)

    await userEvent.click(screen.getByText("to-floating"))
    await screen.findByTestId("meeting-window")
    expect(binding).toHaveBeenCalledTimes(3)
  })
})
