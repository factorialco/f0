import { type F0MeetingBinding } from "../types"
import { hashId } from "./rng"

/* ------------------------------------------------------------------ *
 * One shared frame loop
 * ------------------------------------------------------------------ */

type Painter = (now: number) => void

const painters = new Set<Painter>()
let rafId = 0
let lastTick = 0

/** ~12fps is plenty for a mock and leaves the main thread alone. */
const FRAME_BUDGET_MS = 80

const tick = (now: number): void => {
  rafId = requestAnimationFrame(tick)
  if (now - lastTick < FRAME_BUDGET_MS) return
  lastTick = now
  for (const painter of painters) painter(now)
}

/**
 * Every mock canvas paints from ONE loop. Thirty participants each running
 * their own `requestAnimationFrame` is enough to make Storybook stutter.
 */
const registerPainter = (painter: Painter): (() => void) => {
  painters.add(painter)
  if (rafId === 0 && typeof requestAnimationFrame === "function") {
    rafId = requestAnimationFrame(tick)
  }
  return () => {
    painters.delete(painter)
    if (painters.size === 0 && rafId !== 0) {
      cancelAnimationFrame(rafId)
      rafId = 0
    }
  }
}

/* ------------------------------------------------------------------ *
 * Bindings
 * ------------------------------------------------------------------ */

/**
 * Turns a plain `MediaStream` into a binding. Real hosts go through their
 * transport's own `attach` instead — see `F0MeetingBinding` — but mocks (and
 * the local camera, which really is just a stream) need this shape.
 */
export const createStreamBinding =
  (stream: MediaStream): F0MeetingBinding =>
  (element) => {
    element.srcObject = stream
    return () => {
      if (element.srcObject === stream) element.srcObject = null
    }
  }

type CaptureCanvas = HTMLCanvasElement & {
  captureStream?: (frameRate?: number) => MediaStream
}

const canCapture = (canvas: CaptureCanvas): boolean =>
  typeof canvas.captureStream === "function"

const initials = (name: string): string =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")

const paintSynthetic = (
  canvas: HTMLCanvasElement,
  name: string,
  hue: number,
  now: number
): void => {
  const context = canvas.getContext("2d")
  if (!context) return
  const { width, height } = canvas

  context.fillStyle = `hsl(${hue}, 32%, 22%)`
  context.fillRect(0, 0, width, height)

  context.fillStyle = `hsla(${hue}, 45%, 70%, 0.9)`
  context.font = `600 ${Math.round(height / 4)}px system-ui, sans-serif`
  context.textAlign = "center"
  context.textBaseline = "middle"
  context.fillText(initials(name), width / 2, height / 2)

  // A sweeping second hand: if the stream freezes it is immediately obvious.
  const angle = ((now / 1000) % 60) * (Math.PI / 30) - Math.PI / 2
  const radius = Math.min(width, height) / 2 - 12
  context.strokeStyle = `hsla(${hue}, 60%, 78%, 0.55)`
  context.lineWidth = 3
  context.beginPath()
  context.moveTo(width / 2, height / 2)
  context.lineTo(
    width / 2 + Math.cos(angle) * radius,
    height / 2 + Math.sin(angle) * radius
  )
  context.stroke()
}

export type SyntheticVideoOptions = {
  /** `static` paints one frame and never animates — required for snapshots. */
  animated?: boolean
}

/**
 * Deterministic fallback source. Returns `undefined` when the browser cannot
 * capture a canvas (jsdom, older Safari) so the tile falls back to the avatar
 * instead of showing a dead `<video>`.
 */
export const createSyntheticVideoBinding = (
  participant: { id: string; name: string },
  { animated = true }: SyntheticVideoOptions = {}
): F0MeetingBinding | undefined => {
  if (typeof document === "undefined") return undefined
  const canvas = document.createElement("canvas") as CaptureCanvas
  canvas.width = 640
  canvas.height = 360
  if (!canCapture(canvas)) return undefined

  const hue = Math.round(hashId(participant.id) * 360)
  paintSynthetic(canvas, participant.name, hue, 0)

  const stream = canvas.captureStream?.(animated ? 12 : 0)
  if (!stream) return undefined

  const bind = createStreamBinding(stream)

  return (element) => {
    const unbind = bind(element)
    const stop = animated
      ? registerPainter((now) =>
          paintSynthetic(canvas, participant.name, hue, now)
        )
      : () => {}
    return () => {
      stop()
      unbind()
    }
  }
}

/**
 * A slow-scrolling fake screen share in 21:9, so the room's spotlight is
 * exercised with a track whose aspect ratio is nothing like 16:9 — the case
 * that shows up as ugly letterboxing when a grid assumes widescreen video.
 */
export const createScreenShareBinding = ():
  | { binding: F0MeetingBinding; width: number; height: number }
  | undefined => {
  if (typeof document === "undefined") return undefined
  const canvas = document.createElement("canvas") as CaptureCanvas
  canvas.width = 1680
  canvas.height = 720
  if (!canCapture(canvas)) return undefined

  const stream = canvas.captureStream?.(12)
  if (!stream) return undefined
  const bind = createStreamBinding(stream)

  const paint = (now: number): void => {
    const context = canvas.getContext("2d")
    if (!context) return
    context.fillStyle = "#0f172a"
    context.fillRect(0, 0, canvas.width, canvas.height)
    const offset = (now / 40) % 34
    context.font = "500 20px ui-monospace, monospace"
    for (let line = 0; line < 34; line++) {
      const y = line * 34 - offset + 40
      context.fillStyle = line % 7 === 0 ? "#7dd3fc" : "#94a3b8"
      const indent = 24 + (line % 4) * 28
      context.fillText("─".repeat(6 + ((line * 7) % 40)), indent, y)
    }
  }

  return {
    width: canvas.width,
    height: canvas.height,
    binding: (element) => {
      const unbind = bind(element)
      const stop = registerPainter(paint)
      return () => {
        stop()
        unbind()
      }
    },
  }
}

/* ------------------------------------------------------------------ *
 * Clip: a looping file, so remote tiles show real moving footage
 * ------------------------------------------------------------------ */

/**
 * Plays a looping clip straight into the element F0 owns.
 *
 * Unlike the other sources this needs no `captureStream`: "attach this track to
 * this element" is satisfied by pointing the `<video>` at a file. Each
 * participant starts at a different offset so a room full of the same clip
 * still reads as several different people.
 */
export const createClipVideoBinding = (
  url: string,
  offsetSeconds: number
): F0MeetingBinding => {
  return (element) => {
    if (!(element instanceof HTMLVideoElement)) return () => {}

    element.src = url
    element.loop = true
    element.muted = true
    element.playsInline = true

    // currentTime only sticks once the metadata is in.
    const seek = (): void => {
      const duration = element.duration
      if (Number.isFinite(duration) && duration > 0) {
        element.currentTime = offsetSeconds % duration
      }
      void element.play().catch(() => {})
    }
    element.addEventListener("loadedmetadata", seek)
    if (element.readyState >= 1) seek()

    return () => {
      element.removeEventListener("loadedmetadata", seek)
      element.pause()
      element.removeAttribute("src")
      element.load()
    }
  }
}

/* ------------------------------------------------------------------ *
 * Echo: the local camera, made to look like other people
 * ------------------------------------------------------------------ */

export type EchoSource = {
  /** Feed a participant's canvas from the shared camera. */
  createBinding: (participantId: string) => F0MeetingBinding | undefined
  dispose: () => void
}

/**
 * Reuses the real camera for the remote participants: each one gets its own
 * canvas with a different crop, zoom and hue rotation, painted a few frames
 * behind the others.
 *
 * It is the cheapest way to get genuinely human video — real faces, real
 * motion, real lighting — for a dozen tiles without shipping any assets, which
 * is what makes the mock worth developing against.
 */
export const createEchoSource = (stream: MediaStream): EchoSource | null => {
  if (typeof document === "undefined") return null

  const video = document.createElement("video")
  video.srcObject = stream
  video.muted = true
  video.playsInline = true
  void video.play().catch(() => {})

  const disposers: (() => void)[] = [
    () => {
      video.srcObject = null
    },
  ]

  return {
    createBinding: (participantId) => {
      const canvas = document.createElement("canvas") as CaptureCanvas
      canvas.width = 480
      canvas.height = 270
      if (!canCapture(canvas)) return undefined
      const out = canvas.captureStream?.(12)
      if (!out) return undefined

      const seed = hashId(participantId)
      const hue = Math.round(seed * 300)
      const zoom = 1.1 + seed * 0.5
      const panX = (seed - 0.5) * 0.3
      const panY = (((seed * 7) % 1) - 0.5) * 0.2
      const bind = createStreamBinding(out)

      const paint = (): void => {
        const context = canvas.getContext("2d")
        if (!context || video.readyState < 2) return
        const sourceWidth = video.videoWidth / zoom
        const sourceHeight = video.videoHeight / zoom
        context.filter = `hue-rotate(${hue}deg) saturate(1.15)`
        context.drawImage(
          video,
          (video.videoWidth - sourceWidth) / 2 + panX * sourceWidth,
          (video.videoHeight - sourceHeight) / 2 + panY * sourceHeight,
          sourceWidth,
          sourceHeight,
          0,
          0,
          canvas.width,
          canvas.height
        )
        context.filter = "none"
      }

      return (element) => {
        const unbind = bind(element)
        const stop = registerPainter(paint)
        return () => {
          stop()
          unbind()
        }
      }
    },
    dispose: () => {
      for (const dispose of disposers) dispose()
    },
  }
}
