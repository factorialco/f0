import { beforeEach, describe, expect, it } from "vitest"

import { useAiChat } from "@/kits/ai/F0AiChat/providers/AiChatStateProvider"
import { useMeetingSurface } from "@/sds/meetings/F0Meeting/providers/MeetingSurfaceProvider"
import { type F0MeetingRuntime } from "@/sds/meetings/F0Meeting/types"
import {
  zeroRender as render,
  screen,
  userEvent,
  waitFor,
} from "@/testing/test-utils"

import { ApplicationFrame } from ".."

const runtime: F0MeetingRuntime = {
  room: { id: "room", title: "Huddle" },
  status: "connected",
  localParticipantId: "me",
  participants: [{ id: "me", name: "Me", isLocal: true, tracks: [] }],
  localMedia: {
    microphone: { enabled: true },
    camera: { enabled: false },
  },
  leave: () => {},
  setMicrophoneEnabled: () => {},
  setCameraEnabled: () => {},
}

/** Drives both surfaces the way the real hosts do. */
const Probe = () => {
  const { setOpen, setPanelContent } = useAiChat()
  const { setMode, mode } = useMeetingSurface()
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          setPanelContent({ id: "conv", content: <div>CONVERSATION</div> })
        }
      >
        open-conv
      </button>
      <button type="button" onClick={() => setOpen(true)}>
        open-chat
      </button>
      <button type="button" onClick={() => setOpen(false)}>
        close-chat
      </button>
      <button type="button" onClick={() => setMode("panel")}>
        to-panel
      </button>
      <button type="button" onClick={() => setMode("floating")}>
        to-floating
      </button>
      <span data-testid="meeting-mode">{mode}</span>
    </div>
  )
}

const renderFrame = () =>
  render(
    <ApplicationFrame
      ai={{
        enabled: true,
        panelContentSide: "left",
        chatMessages: <div>AI CHAT</div>,
      }}
      meeting={{ runtime, defaultMode: "floating" }}
      sidebar={<div>SIDEBAR</div>}
    >
      <Probe />
    </ApplicationFrame>
  )

const mainArea = (): HTMLElement => {
  const main = screen.getByRole("main")
  const area = main.parentElement
  if (!area) throw new Error("main area not found")
  return area
}

const meetingMode = (): string =>
  screen.getByTestId("meeting-mode").textContent ?? ""

describe("ApplicationFrame · meeting side panel", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("reserves no width while the call is floating", () => {
    renderFrame()
    expect(mainArea().style.paddingLeft || "0px").toBe("0px")
    expect(mainArea().style.paddingRight || "0px").toBe("0px")
  })

  it("reserves width on the left for the panel, never on the right", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("to-panel"))

    // The window lives in a portal, so the ONLY way it can push content instead
    // of covering it is for the frame to make room.
    await waitFor(() => {
      expect(parseFloat(mainArea().style.paddingLeft)).toBeGreaterThan(0)
    })
    expect(mainArea().style.paddingRight || "0px").toBe("0px")
  })

  it("gives the width back when the call leaves the panel", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("to-panel"))
    await waitFor(() => {
      expect(parseFloat(mainArea().style.paddingLeft)).toBeGreaterThan(0)
    })

    await userEvent.click(screen.getByText("to-floating"))
    await waitFor(() => {
      expect(parseFloat(mainArea().style.paddingLeft || "0")).toBe(0)
    })
  })

  it("closes a conversation when the call takes the panel", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("open-conv"))
    expect(await screen.findByText("CONVERSATION")).toBeInTheDocument()

    await userEvent.click(screen.getByText("to-panel"))

    // The last explicit action wins: the user asked for the call in the panel.
    await waitFor(() => {
      expect(screen.queryByText("CONVERSATION")).toBeNull()
    })
    expect(meetingMode()).toBe("panel")
  })

  it("sends the call floating when a chat is opened", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("to-panel"))
    expect(meetingMode()).toBe("panel")

    await userEvent.click(screen.getByText("open-conv"))

    // The other direction of the same rule: the user asked for the chat.
    await waitFor(() => {
      expect(meetingMode()).toBe("floating")
    })
    expect(await screen.findByText("CONVERSATION")).toBeInTheDocument()
  })

  it("does not put the call back in the panel when the chat closes", async () => {
    renderFrame()
    await userEvent.click(screen.getByText("to-panel"))
    await userEvent.click(screen.getByText("open-chat"))
    await waitFor(() => {
      expect(meetingMode()).toBe("floating")
    })

    await userEvent.click(screen.getByText("close-chat"))

    // Restoring it unasked would move the call under the user's cursor.
    expect(meetingMode()).toBe("floating")
  })
})
