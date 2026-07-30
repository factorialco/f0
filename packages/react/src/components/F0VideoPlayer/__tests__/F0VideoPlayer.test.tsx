import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { VolumeHigh, VolumeMid, VolumeMuted } from "@/icons/app"
import {
  fireEvent,
  screen,
  userEvent,
  zeroRender as render,
} from "@/testing/test-utils"

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

    it("sets the poster when provided", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} poster="poster.webp" />)
      expect(getVideo()).toHaveAttribute("poster", "poster.webp")
    })

    it("shows a center play overlay while paused and hides it during playback", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      expect(
        document.querySelector("[data-video-play-overlay]")
      ).toBeInTheDocument()

      fireEvent.play(getVideo())
      expect(
        document.querySelector("[data-video-play-overlay]")
      ).not.toBeInTheDocument()
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

  describe("captions", () => {
    const CAPS_URL = "https://example.com/captions.vtt"

    function region(): HTMLElement {
      return screen.getByRole("region", { name: "Video player" })
    }

    it("flags a video with no captions for the a11y check", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      expect(region()).toHaveAttribute("data-video-captions", "missing")
    })

    it("marks the video available and renders a track when captions are passed", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} content={{ captions: CAPS_URL }} />)
      // Optimistic while the track is still loading.
      expect(region()).toHaveAttribute("data-video-captions", "available")
      const track = getVideo().querySelector("track")
      expect(track).toHaveAttribute("src", CAPS_URL)
      expect(track).toHaveAttribute("kind", "captions")
    })

    it("downgrades to missing when the caption track fails to load", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} content={{ captions: CAPS_URL }} />)
      const track = getVideo().querySelector('track[kind="captions"]')!
      // A 404 / CORS failure must not read as available.
      fireEvent.error(track)
      expect(region()).toHaveAttribute("data-video-captions", "missing")
    })

    it("downgrades to missing when the caption track loads with no cues", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} content={{ captions: CAPS_URL }} />)
      const track = getVideo().querySelector('track[kind="captions"]')!
      // Loaded, but the file was empty (zero cues) → not usable captions.
      Object.defineProperty(track, "readyState", {
        value: 2,
        configurable: true,
      })
      fireEvent.load(track)
      expect(region()).toHaveAttribute("data-video-captions", "missing")
    })

    it("sets crossOrigin for a remote caption URL but not for raw VTT", () => {
      const createObjectURL = vi
        .spyOn(URL, "createObjectURL")
        .mockReturnValue("blob:caps")
      const { rerender } = render(
        <F0VideoPlayer src={VIDEO_SRC} content={{ captions: CAPS_URL }} />
      )
      expect(getVideo()).toHaveAttribute("crossorigin", "anonymous")

      rerender(
        <F0VideoPlayer
          src={VIDEO_SRC}
          content={{ captions: "WEBVTT\n\n00:00.000 --> 00:01.000\nHi" }}
        />
      )
      expect(getVideo()).not.toHaveAttribute("crossorigin")
      expect(createObjectURL).toHaveBeenCalled()
    })

    it("shows a CC toggle that flips its pressed state", async () => {
      const user = userEvent.setup()
      render(<F0VideoPlayer src={VIDEO_SRC} content={{ captions: CAPS_URL }} />)
      fireEvent.loadedData(getVideo())

      const cc = screen.getByRole("button", { name: "Captions" })
      expect(cc).toHaveAttribute("aria-pressed", "false")

      await user.click(cc)
      expect(screen.getByRole("button", { name: "Captions" })).toHaveAttribute(
        "aria-pressed",
        "true"
      )
    })

    it("does not render a CC toggle when no captions are available", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      fireEvent.loadedData(getVideo())
      expect(
        screen.queryByRole("button", { name: "Captions" })
      ).not.toBeInTheDocument()
    })

    it("moves localized captions into the settings gear (no bar CC toggle)", async () => {
      const user = userEvent.setup()
      render(
        <F0VideoPlayer
          src={VIDEO_SRC}
          defaultLanguage="en"
          content={{
            captions: [
              { locale: "en", value: "https://example.com/en.vtt" },
              { locale: "es", value: "https://example.com/es.vtt" },
            ],
          }}
        />
      )
      fireEvent.loadedData(getVideo())
      // Several languages → no inline CC toggle; language choice lives in the gear.
      expect(
        screen.queryByRole("button", { name: "Captions" })
      ).not.toBeInTheDocument()
      await user.click(screen.getByRole("button", { name: "Settings" }))
      // The gear's first level is a "Subtitles" submenu; opening it lists the
      // languages plus an "Off" row.
      const subtitles = screen.getByRole("menuitem", { name: /subtitles/i })
      await user.click(subtitles)
      expect(
        screen.getByRole("menuitemradio", { name: /english/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("menuitemradio", { name: /spanish|español/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("menuitemradio", { name: /^off$/i })
      ).toBeInTheDocument()
      // Default language ("en") is the rendered track.
      expect(
        getVideo().querySelector('track[kind="captions"]')
      ).toHaveAttribute("src", "https://example.com/en.vtt")
    })

    it("offers audio-track languages in the settings gear for a localized src", async () => {
      const user = userEvent.setup()
      render(
        <F0VideoPlayer
          defaultLanguage="en"
          src={[
            { locale: "en", value: "https://example.com/en.mp4" },
            { locale: "es", value: "https://example.com/es.mp4" },
          ]}
        />
      )
      fireEvent.loadedData(getVideo())
      await user.click(screen.getByRole("button", { name: "Settings" }))
      // Audio-track languages live under an "Audio" submenu in the gear.
      await user.click(screen.getByRole("menuitem", { name: /audio/i }))
      expect(
        screen.getByRole("menuitemradio", { name: /english/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("menuitemradio", { name: /spanish|español/i })
      ).toBeInTheDocument()
      // Default audio language is the rendered source.
      expect(getVideo()).toHaveAttribute("src", "https://example.com/en.mp4")
    })

    it("keeps single-language captions as a bar toggle with no settings gear", () => {
      render(
        <F0VideoPlayer
          src={VIDEO_SRC}
          content={{ captions: "https://example.com/only.vtt" }}
        />
      )
      fireEvent.loadedData(getVideo())
      // One language → the CC toggle stays in the bar; no gear appears.
      expect(
        screen.getByRole("button", { name: "Captions" })
      ).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: "Settings" })
      ).not.toBeInTheDocument()
    })

    it("marks a silent video as no-audio so captions aren't required", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} silent />)
      expect(region()).toHaveAttribute("data-video-captions", "no-audio")
    })

    it("force-mutes a silent video and shows a disabled muted volume cue", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} silent />)
      // Sound is dropped even if the file carries an audio track.
      expect(getVideo().muted).toBe(true)

      fireEvent.loadedData(getVideo())
      expect(screen.getByRole("button", { name: "No audio" })).toBeDisabled()
      // No volume slider to adjust on a silent video.
      expect(
        screen.queryByRole("slider", { name: /volume/i })
      ).not.toBeInTheDocument()
    })

    it("unmutes a silent video's described source so the description is heard", async () => {
      const user = userEvent.setup()
      render(
        <F0VideoPlayer
          src={VIDEO_SRC}
          silent
          content={{ describedSrc: "https://example.com/described.mp4" }}
        />
      )
      // Silent + AD off: muted (nothing to hear).
      expect(getVideo().muted).toBe(true)

      fireEvent.loadedData(getVideo())
      await user.click(
        screen.getByRole("button", { name: "Audio description" })
      )
      // AD on via a described source → its audio must play, so unmute.
      expect(getVideo().muted).toBe(false)
    })
  })

  describe("audio description", () => {
    const DESC_URL = "https://example.com/descriptions.vtt"
    const DESCRIBED_SRC = "https://example.com/video.described.mp4"

    it("offers an AD toggle and renders a descriptions track for a VTT script", async () => {
      const user = userEvent.setup()
      render(
        <F0VideoPlayer src={VIDEO_SRC} content={{ descriptions: DESC_URL }} />
      )
      fireEvent.loadedData(getVideo())

      const track = getVideo().querySelector('track[kind="descriptions"]')
      expect(track).toHaveAttribute("src", DESC_URL)

      const ad = screen.getByRole("button", { name: "Audio description" })
      expect(ad).toHaveAttribute("aria-pressed", "false")
      await user.click(ad)
      expect(
        screen.getByRole("button", { name: "Audio description" })
      ).toHaveAttribute("aria-pressed", "true")
    })

    it("swaps to the described source when AD is enabled", async () => {
      const user = userEvent.setup()
      render(
        <F0VideoPlayer
          src={VIDEO_SRC}
          content={{ describedSrc: DESCRIBED_SRC }}
        />
      )
      fireEvent.loadedData(getVideo())
      expect(getVideo()).toHaveAttribute("src", VIDEO_SRC)
      // A described source is a media rendition, not a text track.
      expect(
        getVideo().querySelector('track[kind="descriptions"]')
      ).not.toBeInTheDocument()

      await user.click(
        screen.getByRole("button", { name: "Audio description" })
      )
      expect(getVideo()).toHaveAttribute("src", DESCRIBED_SRC)

      // Controls re-render after the swapped source loads.
      fireEvent.loadedData(getVideo())
      expect(
        screen.getByRole("button", { name: "Audio description" })
      ).toHaveAttribute("aria-pressed", "true")
    })

    it("does not render an AD toggle when no description is available", () => {
      render(<F0VideoPlayer src={VIDEO_SRC} />)
      fireEvent.loadedData(getVideo())
      expect(
        screen.queryByRole("button", { name: "Audio description" })
      ).not.toBeInTheDocument()
    })
  })
})
