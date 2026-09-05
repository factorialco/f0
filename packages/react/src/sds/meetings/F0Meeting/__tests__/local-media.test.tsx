import { act } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { renderHook } from "@/testing/test-utils"

import { soloSeed } from "../mocks/mockSeeds"
import { useMockMeetingRuntime } from "../mocks/useMockMeetingRuntime"

const track = (kind: string) => ({
  kind,
  stop: vi.fn(),
  getSettings: () => ({ deviceId: `${kind}-device` }),
  enabled: true,
})

let videoTracks: ReturnType<typeof track>[] = []
let audioTracks: ReturnType<typeof track>[] = []
let lastConstraints: MediaStreamConstraints | undefined

const stream = () =>
  ({
    getTracks: () => [...videoTracks, ...audioTracks],
    getVideoTracks: () => videoTracks,
    getAudioTracks: () => audioTracks,
  }) as unknown as MediaStream

beforeEach(() => {
  videoTracks = [track("video")]
  audioTracks = []
  lastConstraints = undefined
  vi.stubGlobal("navigator", {
    ...navigator,
    mediaDevices: {
      getUserMedia: vi.fn(async (constraints: MediaStreamConstraints) => {
        lastConstraints = constraints
        if (constraints.audio && !constraints.video) {
          audioTracks = [track("audio")]
          return stream()
        }
        return stream()
      }),
      enumerateDevices: vi.fn(async () => []),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    },
  })
})

afterEach(() => vi.unstubAllGlobals())

/** Renders and lets the mount-time device enumeration settle. */
const setup = async () => {
  const rendered = renderHook(() =>
    useMockMeetingRuntime({ ...soloSeed, audio: false })
  )
  await act(async () => {})
  return rendered
}

describe("local media", () => {
  it("opens the camera without asking for the microphone", async () => {
    // Asking for audio here was free to write and cost a feedback loop: the mic
    // picked up the synthesized voices through the speakers, the monitor
    // metered them, and you ended up in the speaking set.
    const { result } = await setup()
    await act(async () => {
      await result.current.drivers.enableLocalCamera()
    })

    expect(lastConstraints).toBeDefined()
    expect(lastConstraints?.audio).toBeUndefined()
    expect(lastConstraints?.video).toBeTruthy()
  })

  it("asks for echo cancellation when it does open the microphone", async () => {
    const { result } = await setup()
    await act(async () => {
      result.current.runtime.setMicrophoneEnabled(true)
    })

    const audio = lastConstraints?.audio
    expect(audio).toMatchObject({ echoCancellation: true })
  })

  it("stops every local track when you hang up", async () => {
    // Hanging up does not unmount the hook — the frame keeps the runtime alive
    // and only flips `status` — so nothing else was giving the camera back and
    // the laptop's light stayed on.
    const { result } = await setup()
    await act(async () => {
      await result.current.drivers.enableLocalCamera()
    })
    const opened = [...videoTracks]
    expect(opened.length).toBeGreaterThan(0)

    act(() => result.current.runtime.leave())

    opened.forEach((entry) => expect(entry.stop).toHaveBeenCalled())
    expect(result.current.runtime.status).toBe("disconnected")
  })

  it("reports the device it actually opened, not the one it asked for", async () => {
    const { result } = await setup()
    await act(async () => {
      await result.current.drivers.enableLocalCamera()
    })
    // Opening the default camera passes no id, so without reading the settings
    // back the picker had nothing to tick.
    expect(result.current.runtime.localMedia.camera.selectedDeviceId).toBe(
      "video-device"
    )
  })

  it("offers devices before any permission has been granted", async () => {
    // They used to be enumerated only inside a successful `openCamera`, so both
    // chevrons stayed hidden until you turned the camera on — and the
    // microphone picker was unreachable for anyone who never did.
    const { result } = await setup()
    expect(
      result.current.runtime.localMedia.microphone.devices?.length
    ).toBeGreaterThan(0)
    expect(
      result.current.runtime.localMedia.camera.devices?.length
    ).toBeGreaterThan(0)
  })

  it("wires a real handler to the microphone picker", async () => {
    // It used to be a `() => Promise.resolve()` stub that existed only to make
    // the chevron render.
    const { result } = await setup()
    expect(
      result.current.runtime.localMedia.microphone.selectDevice
    ).toBeTypeOf("function")
  })
})
