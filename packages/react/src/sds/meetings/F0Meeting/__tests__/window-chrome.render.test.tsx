import { beforeEach, describe, expect, it } from "vitest"
import { screen, zeroRender } from "@/testing/test-utils"
import { F0Meeting } from "../F0Meeting"
import { CONTROLS_HEIGHT, HEADER_HEIGHT } from "../layout/density"
import { type F0MeetingRuntime, type F0MeetingStatus } from "../types"
import { PLACEMENT_STORAGE_KEY } from "../window/window-constants"

const runtime: F0MeetingRuntime = {
  room: {
    id: "room",
    title: "Design huddle",
    avatar: { type: "team", name: "Design" },
  },
  status: "connected" as F0MeetingStatus,
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

/** Opens the window at a given size by seeding the placement it restores. */
const renderAt = (width: number, height: number) => {
  localStorage.setItem(
    PLACEMENT_STORAGE_KEY,
    JSON.stringify({ corner: "br", dx: 24, dy: 24, width, height })
  )
  return zeroRender(
    <F0Meeting runtime={runtime} defaultMode="floating">
      <p>app</p>
    </F0Meeting>
  )
}

const titleBar = (): HTMLElement => {
  const bar = screen.getByTestId("meeting-window").firstElementChild
  if (!(bar instanceof HTMLElement)) {
    throw new Error("title bar not found")
  }
  return bar
}

const controlBar = (): HTMLElement => screen.getByTestId("meeting-control-bar")

/**
 * The window's chrome follows the window, not the viewport.
 *
 * jsdom lays nothing out, so these read the heights the components WRITE —
 * which is the point: they are inline styles from one table rather than a
 * `h-20` in one file and a `calc(100% - 3.75rem)` in another that has to be
 * kept in step with it by hand.
 */
describe("the window's chrome at different sizes", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("draws full-size chrome in a roomy window", () => {
    renderAt(800, 600)

    expect(titleBar().style.height).toBe(`${HEADER_HEIGHT.regular}px`)
    expect(controlBar().style.height).toBe(`${CONTROLS_HEIGHT.regular}px`)
  })

  it("gives the video back its half in a window near the minimum", () => {
    renderAt(280, 254)

    expect(titleBar().style.height).toBe(`${HEADER_HEIGHT.tight}px`)
    expect(controlBar().style.height).toBe(`${CONTROLS_HEIGHT.tight}px`)
  })

  it("shrinks for a short WIDE window too, not only a narrow one", () => {
    // The trap a width-only rule falls into: plenty of room across, none at
    // all down, and the chrome eating what little height there is.
    renderAt(900, 280)

    expect(titleBar().style.height).toBe(`${HEADER_HEIGHT.tight}px`)
    expect(controlBar().style.height).toBe(`${CONTROLS_HEIGHT.tight}px`)
  })

  it("shows the room's avatar when there is room for it", () => {
    renderAt(800, 600)
    expect(screen.getByTestId("meeting-room-avatar")).toBeInTheDocument()
  })

  it("drops the avatar rather than crowd the title", () => {
    renderAt(280, 254)

    expect(screen.queryByTestId("meeting-room-avatar")).toBeNull()
    // Whatever else goes, the name stays: it is what the bar is for.
    expect(screen.getByTestId("meeting-window")).toHaveTextContent(
      "Design huddle"
    )
  })
})
