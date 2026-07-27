import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { VolumeHigh, VolumeMid, VolumeMuted } from "@/icons/app"
import { fireEvent, zeroRender as render, screen } from "@/testing/test-utils"

import { F0VideoPlayer } from "../F0VideoPlayer"
import { volumeIcon } from "../components/VolumeControl"

const VIDEO_SRC = "https://example.com/video.mp4"

function getVideo(): HTMLVideoElement {
  const video = document.querySelector("video")
  if (!video) throw new Error("Video element not found")
  return video
}

function setVideoProp(
  video: HTMLVideoElement,
  key: "currentTime" | "duration" | "volume" | "muted",
  value: number | boolean
) {
  Object.defineProperty(video, key, {
    value,
    writable: true,
    configurable: true,
  })
}

function timeUpdate(
  video: HTMLVideoElement,
  currentTime: number,
  duration = 0
) {
  setVideoProp(video, "currentTime", currentTime)
  if (duration) setVideoProp(video, "duration", duration)
  fireEvent.timeUpdate(video)
}

beforeEach(() => {
  HTMLMediaElement.prototype.play = vi.fn(() => Promise.resolve())
  HTMLMediaElement.prototype.pause = vi.fn()
  HTMLElement.prototype.requestFullscreen = vi.fn(() => Promise.resolve())
  // @ts-expect-error – jsdom lacks exitFullscreen
  document.exitFullscreen = vi.fn(() => Promise.resolve())
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe("F0VideoPlayer", () => {
  describe("rendering", () => {
    it("renders a video element with the given src", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      expect(getVideo()).toHaveAttribute("src", VIDEO_SRC)
    })

    it("does not enable native controls", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      expect(getVideo()).not.toHaveAttribute("controls")
    })

    it("enables autoplay when autoPlay is true", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} autoPlay />)
      expect(getVideo()).toHaveProperty("autoplay", true)
    })

    it("always sets playsInline", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      expect(getVideo()).toHaveProperty("playsInline", true)
    })

    it("exposes a focusable region with a descriptive label", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      const region = screen.getByRole("region", { name: /video player/i })
      expect(region).toHaveAttribute("tabindex", "0")
    })

    it("renders the controls only once the video has loaded", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      // Controls are not in the DOM before load (avoids focusable-but-hidden).
      expect(
        screen.queryByRole("button", { name: "Play" })
      ).not.toBeInTheDocument()

      fireEvent.loadedData(getVideo())
      expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument()
    })
  })

  describe("advanced controls (always disabled)", () => {
    it("always prevents the native context menu", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      const event = new MouseEvent("contextmenu", {
        bubbles: true,
        cancelable: true,
      })
      expect(getVideo().dispatchEvent(event)).toBe(false)
    })

    it("always disables Picture-in-Picture", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      expect(getVideo()).toHaveAttribute("disablepictureinpicture")
    })
  })

  describe("playback", () => {
    it("toggles play when the video is clicked", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      fireEvent.click(getVideo())
      expect(HTMLMediaElement.prototype.play).toHaveBeenCalled()
    })
  })

  describe("playback speed menu", () => {
    it("opens the F0 popover and selects a rate", async () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      fireEvent.loadedData(getVideo())

      const trigger = screen.getByRole("button", { name: /playback speed/i })
      fireEvent.click(trigger)

      const option = await screen.findByRole("menuitemradio", { name: "1.5x" })
      fireEvent.click(option)
      // jsdom doesn't emit `ratechange` on a property set; emit it so the
      // component's playbackRate state (and the trigger label) update.
      fireEvent.rateChange(getVideo())

      expect(
        screen.getByRole("button", { name: /playback speed/i })
      ).toHaveTextContent("1.5x")
    })
  })

  describe("keyboard shortcuts", () => {
    it("toggles play on Space", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      fireEvent.keyDown(screen.getByRole("region"), { key: " " })
      expect(HTMLMediaElement.prototype.play).toHaveBeenCalled()
    })

    it("toggles fullscreen on F", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      fireEvent.keyDown(screen.getByRole("region"), { key: "f" })
      expect(HTMLElement.prototype.requestFullscreen).toHaveBeenCalled()
    })

    it("ignores shortcuts originating from a slider", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      fireEvent.loadedData(getVideo())
      const seekbar = screen.getByRole("slider", { name: /seek/i })
      fireEvent.keyDown(seekbar, { key: " " })
      expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled()
    })
  })

  describe("restrictForwardSeek", () => {
    it("clamps a forward keyboard seek to the furthest-watched point", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} restrictForwardSeek />)
      const video = getVideo()
      setVideoProp(video, "duration", 100)
      // Natural progress (small deltas) grows the watched ceiling to ~1.5s.
      timeUpdate(video, 0.5, 100)
      timeUpdate(video, 1.0, 100)
      timeUpdate(video, 1.5, 100)

      fireEvent.keyDown(screen.getByRole("region"), { key: "ArrowRight" })
      // Would jump to 6.5s without the restriction; clamped to the ceiling.
      expect(video.currentTime).toBeLessThanOrEqual(1.5)
    })

    it("snaps the playhead back when seeking past the ceiling", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} restrictForwardSeek />)
      const video = getVideo()
      timeUpdate(video, 0.5, 100)
      timeUpdate(video, 1.0, 100)

      setVideoProp(video, "currentTime", 80)
      fireEvent.seeking(video)
      expect(video.currentTime).toBeLessThanOrEqual(1.0)
    })

    it("renders a marker once there is watched progress behind the playhead", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} restrictForwardSeek />)
      const video = getVideo()
      fireEvent.loadedData(video)
      setVideoProp(video, "duration", 100)
      fireEvent.loadedMetadata(video)
      timeUpdate(video, 0.3, 100)
      timeUpdate(video, 0.8, 100)
      timeUpdate(video, 1.3, 100)
      timeUpdate(video, 1.8, 100)

      const seekbar = screen.getByRole("slider", { name: /seek/i })
      expect(seekbar.querySelector("[aria-hidden='true']")).toBeInTheDocument()
    })

    it("does not restrict seeking when the prop is off", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      const video = getVideo()
      timeUpdate(video, 1.0, 100)
      setVideoProp(video, "currentTime", 80)
      fireEvent.seeking(video)
      expect(video.currentTime).toBe(80)
    })
  })

  describe("onTrackAction", () => {
    beforeEach(() => vi.useFakeTimers())
    afterEach(() => vi.useRealTimers())

    it("fires on play, on the 5-minute heartbeat, and on pause", () => {
      const onTrackAction = vi.fn()
      render(<F0VideoPlayer src={VIDEO_SRC} onTrackAction={onTrackAction} />)
      const video = getVideo()

      fireEvent.play(video)
      expect(onTrackAction).toHaveBeenCalledTimes(1)

      vi.advanceTimersByTime(10 * 60 * 1000) // two 5-min heartbeats
      expect(onTrackAction).toHaveBeenCalledTimes(3)

      fireEvent.pause(video)
      expect(onTrackAction).toHaveBeenCalledTimes(4)

      // Interval cleared after pause.
      vi.advanceTimersByTime(10 * 60 * 1000)
      expect(onTrackAction).toHaveBeenCalledTimes(4)
    })
  })

  describe("onMilestone", () => {
    it("fires the 25/50/75 milestones once as progress advances", () => {
      const onMilestone = vi.fn()
      render(<F0VideoPlayer src={VIDEO_SRC} onMilestone={onMilestone} />)
      const video = getVideo()

      timeUpdate(video, 0, 100)
      timeUpdate(video, 25, 100)
      timeUpdate(video, 26, 100) // still 26% → no new milestone
      timeUpdate(video, 50, 100)
      timeUpdate(video, 75, 100)

      expect(onMilestone.mock.calls.map((c) => c[0])).toEqual([25, 50, 75])
    })

    it("resets fired milestones when the src changes", () => {
      const onMilestone = vi.fn()
      const { rerender } = render(
        <F0VideoPlayer src={VIDEO_SRC} onMilestone={onMilestone} />
      )
      const video = getVideo()
      timeUpdate(video, 25, 100)
      expect(onMilestone).toHaveBeenCalledTimes(1)

      rerender(
        <F0VideoPlayer
          src="https://example.com/other.mp4"
          onMilestone={onMilestone}
        />
      )
      timeUpdate(video, 25, 100)
      expect(onMilestone).toHaveBeenCalledTimes(2)
    })
  })

  describe("onComplete", () => {
    it("fires once at ~97% for short videos", () => {
      const onComplete = vi.fn()
      render(<F0VideoPlayer src={VIDEO_SRC} onComplete={onComplete} />)
      const video = getVideo()

      timeUpdate(video, 96, 100) // remaining 4s > min(10, 3) → not yet
      expect(onComplete).not.toHaveBeenCalled()

      timeUpdate(video, 97, 100) // remaining 3s = 3% → complete
      timeUpdate(video, 98, 100)
      expect(onComplete).toHaveBeenCalledTimes(1)
      expect(onComplete).toHaveBeenCalledWith(video)
    })

    it("uses the last-10s rule for long videos", () => {
      const onComplete = vi.fn()
      render(<F0VideoPlayer src={VIDEO_SRC} onComplete={onComplete} />)
      const video = getVideo()

      timeUpdate(video, 1185, 1200) // remaining 15s > 10s → not yet
      expect(onComplete).not.toHaveBeenCalled()

      timeUpdate(video, 1190, 1200) // remaining 10s → complete
      expect(onComplete).toHaveBeenCalledTimes(1)
    })
  })

  describe("volume icon by range", () => {
    it("is muted at 0 or when muted", () => {
      expect(volumeIcon(0, false)).toBe(VolumeMuted)
      expect(volumeIcon(0.8, true)).toBe(VolumeMuted)
    })

    it("is mid between 1% and 50%", () => {
      expect(volumeIcon(0.01, false)).toBe(VolumeMid)
      expect(volumeIcon(0.5, false)).toBe(VolumeMid)
    })

    it("is high above 50%", () => {
      expect(volumeIcon(0.51, false)).toBe(VolumeHigh)
      expect(volumeIcon(1, false)).toBe(VolumeHigh)
    })
  })
})
