import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { type AvatarVariant } from "@/components/avatars/F0Avatar"

import { createMeetingSignalStore } from "../providers/MeetingSignalStore"
import {
  type F0MeetingBinding,
  type F0MeetingConnectionQuality,
  type F0MeetingDevice,
  type F0MeetingParticipant,
  type F0MeetingPermission,
  type F0MeetingRuntime,
  type F0MeetingStatus,
  type F0MeetingTrack,
  type F0MeetingTranscriptSegment,
} from "../types"
import {
  applyTranscriptSegment,
  createTranscriptDriver,
} from "./mockTranscript"
import {
  createClipVideoBinding,
  createEchoSource,
  createScreenShareBinding,
  createStreamBinding,
  createSyntheticVideoBinding,
  type EchoSource,
} from "./canvasVideo"
import { hashId } from "./rng"
import { createMockAudioEngine, type MockAudioEngine } from "./mockAudio"
import { type MockMeetingSeed, type MockPerson } from "./mockSeeds"

type MemberState = MockPerson & {
  /** Bumped whenever the source is genuinely republished. */
  generation: number
  handRaisedAt?: string
}

/** The real display capture behind the local screen-share tile. */
type LocalShare = {
  binding: F0MeetingBinding
  /** Real capture dimensions, so the room letterboxes at the true ratio. */
  width: number
  height: number
  generation: number
}

export type MockMeetingDrivers = {
  /** Asks for the real camera. Must be called from a user gesture. */
  enableLocalCamera: () => Promise<void>
  join: (person: MockPerson) => void
  leave: (id: string) => void
  toggleCamera: (id: string) => void
  toggleMute: (id: string) => void
  startScreenShare: (id: string) => void
  stopScreenShare: () => void
  /** Opens the browser's real display picker for the local participant. */
  shareMyScreen: () => Promise<void>
  /** Lets an `invited` person in — the mock's `participant_joined`. */
  admit: (id: string) => void
  simulateReconnect: (ms?: number) => void
  simulateError: (message: string) => void
  denyPermission: (kind: "camera" | "microphone") => void
  setQuality: (id: string, quality: F0MeetingConnectionQuality) => void
  raiseHand: (id: string) => void
  react: (id: string, emoji: string) => void
  hasLocalCamera: boolean
}

const permissionFromError = (error: unknown): F0MeetingPermission => {
  const name = error instanceof DOMException ? error.name : ""
  if (name === "NotAllowedError" || name === "SecurityError") return "denied"
  if (name === "NotFoundError" || name === "OverconstrainedError") {
    return "unavailable"
  }
  if (name === "NotReadableError" || name === "AbortError") return "in-use"
  return "denied"
}

const avatarFor = (person: MockPerson): AvatarVariant =>
  person.avatar ?? {
    type: "person",
    firstName: person.firstName,
    lastName: person.lastName,
  }

const fullName = (person: MockPerson): string =>
  `${person.firstName} ${person.lastName}`

/**
 * A mock that behaves like a real call: your own camera for the local tile,
 * echoed camera (or synthetic canvases) for everyone else, synthesized voices
 * measured through an analyser, and a turn-taking director driving who speaks.
 *
 * Everything runs through the same contract a LiveKit adapter would implement,
 * so what is developed against this is what production will exercise.
 */
export const useMockMeetingRuntime = (
  seed: MockMeetingSeed,
  options: {
    /**
     * Called when the user hangs up. Hanging up is the HOST's decision to end
     * the call — F0 only reports it — so a host that wants the surface gone
     * clears its runtime from here.
     */
    onLeave?: () => void
  } = {}
): { runtime: F0MeetingRuntime; drivers: MockMeetingDrivers } => {
  const onLeaveRef = useRef(options.onLeave)
  onLeaveRef.current = options.onLeave
  const [status, setStatus] = useState<F0MeetingStatus>(
    seed.startStatus ?? "connected"
  )
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const [members, setMembers] = useState<MemberState[]>(() =>
    seed.others.map((person) => ({ ...person, generation: 0 }))
  )
  const [localCamera, setLocalCamera] = useState(false)
  const [localMuted, setLocalMuted] = useState(false)
  const [localGeneration, setLocalGeneration] = useState(0)
  const [screenShareBy, setScreenShareBy] = useState(seed.screenShareBy)
  const [localShare, setLocalShare] = useState<LocalShare | null>(null)
  const [cameraPermission, setCameraPermission] =
    useState<F0MeetingPermission>("prompt")
  const [microphonePermission, setMicrophonePermission] =
    useState<F0MeetingPermission>("prompt")
  const [devices, setDevices] = useState<{
    camera: F0MeetingDevice[]
    microphone: F0MeetingDevice[]
  }>({ camera: [], microphone: [] })
  const [selectedCameraId, setSelectedCameraId] = useState<string>()
  const [audioBlocked, setAudioBlocked] = useState(false)
  const [transcript, setTranscript] = useState<F0MeetingTranscriptSegment[]>([])
  const [notes, setNotes] = useState(seed.notes ?? "")
  const [, forceRender] = useState(0)

  const signalsRef = useRef(createMeetingSignalStore())
  const audioRef = useRef<MockAudioEngine | null>(null)
  const echoRef = useRef<EchoSource | null>(null)
  const localStreamRef = useRef<MediaStream | null>(null)
  const displayStreamRef = useRef<MediaStream | null>(null)
  const shareGenerationRef = useRef(0)
  const bindingsRef = useRef(new Map<string, F0MeetingBinding>())
  const screenShareRef = useRef<ReturnType<typeof createScreenShareBinding>>()

  // A different room is a different call: without this, hanging up once would
  // leave every later huddle stuck on the "ended" screen.
  const roomIdRef = useRef(seed.room.id)
  useEffect(() => {
    if (roomIdRef.current === seed.room.id) return
    roomIdRef.current = seed.room.id
    setStatus(seed.startStatus ?? "connected")
    setErrorMessage(undefined)
    setMembers(seed.others.map((person) => ({ ...person, generation: 0 })))
  }, [seed.room.id, seed.startStatus, seed.others])

  /* ---------------- audio ---------------- */

  const memberIdsRef = useRef<string[]>([])
  memberIdsRef.current = members.map((member) => member.id)

  useEffect(() => {
    if (seed.audio === false) return
    const engine = createMockAudioEngine(signalsRef.current, seed.seed ?? 7)
    audioRef.current = engine
    setAudioBlocked(engine.blocked())
    // Start the turn-taking director with the engine that owns it. Running it
    // from an effect of its own only worked when audio existed at mount: a room
    // that starts silent (the app shell before a huddle) created its engine
    // later and nobody ever spoke in it.
    engine.runDirector(() => memberIdsRef.current)
    return () => {
      engine.dispose()
      audioRef.current = null
    }
  }, [seed.audio, seed.seed])

  useEffect(() => {
    const engine = audioRef.current
    if (!engine) return
    members.forEach((member, index) => {
      // Someone who has not joined yet has no voice to synthesize.
      if (member.presence === "invited") return
      engine.add(member.id, index)
      engine.setMuted(member.id, Boolean(member.muted))
    })
  }, [members])

  /* ---------------- transcription ---------------- */

  // Driven off the speaker signal rather than off the director, which is how a
  // real adapter sees it too: the server transcribes whoever holds the floor
  // and the client only learns about segments.
  useEffect(() => {
    if (seed.transcript === false) return
    const signals = signalsRef.current
    const driver = createTranscriptDriver(
      (segment) =>
        setTranscript((current) => applyTranscriptSegment(current, segment)),
      seed.seed ?? 11
    )
    let speaking: readonly string[] = []

    const unsubscribe = signals.subscribeSpeakers(() => {
      const next = signals.getSpeakers()
      for (const id of next) {
        if (!speaking.includes(id)) driver.start(id)
      }
      for (const id of speaking) {
        if (!next.includes(id)) driver.stop(id)
      }
      speaking = next
    })

    return () => {
      unsubscribe()
      driver.dispose()
    }
  }, [seed.transcript, seed.seed])

  // Meter the real microphone into the same signals, so your own tile reacts to
  // your voice instead of sitting flat while everyone else animates. Keyed on
  // the generation, which is what changes when the stream is republished.
  useEffect(() => {
    const engine = audioRef.current
    const stream = localStreamRef.current
    if (!engine || !stream) return
    engine.monitor(seed.me.id, stream)
    return () => engine.unmonitor(seed.me.id)
  }, [localGeneration, seed.me.id, seed.audio])

  /* ---------------- bindings ---------------- */

  const bindingFor = useCallback(
    (key: string, create: () => F0MeetingBinding | undefined) => {
      const cached = bindingsRef.current.get(key)
      if (cached) return cached
      const created = create()
      if (created) bindingsRef.current.set(key, created)
      return created
    },
    []
  )

  const remoteVideoBinding = useCallback(
    (member: MemberState): F0MeetingBinding | undefined => {
      const key = `${member.id}:camera:${member.generation}`
      return bindingFor(key, () => {
        const source = seed.videoSource ?? "echo"

        // Echo needs a granted camera; without one it is not an option yet.
        if (source === "echo" && echoRef.current) {
          return echoRef.current.createBinding(member.id)
        }

        const clips = seed.clipUrls ?? []
        if (source === "clip" && clips.length > 0) {
          const offset = hashId(member.id)
          return createClipVideoBinding(
            clips[Math.floor(offset * clips.length) % clips.length] as string,
            // Spread the starting points so the same file reads as different
            // people rather than a wall of identical frames.
            offset * 60
          )
        }

        return createSyntheticVideoBinding(
          { id: member.id, name: fullName(member) },
          { animated: seed.animateVideo !== false }
        )
      })
    },
    [bindingFor, seed.videoSource, seed.animateVideo, seed.clipUrls]
  )

  /* ---------------- local camera ---------------- */

  const readDevices = useCallback(async () => {
    if (!navigator.mediaDevices?.enumerateDevices) return
    try {
      const list = await navigator.mediaDevices.enumerateDevices()
      const toDevice = (device: MediaDeviceInfo): F0MeetingDevice => ({
        id: device.deviceId,
        label: device.label || device.deviceId.slice(0, 8),
        isDefault: device.deviceId === "default",
      })
      setDevices({
        camera: list
          .filter((device) => device.kind === "videoinput")
          .map(toDevice),
        microphone: list
          .filter((device) => device.kind === "audioinput")
          .map(toDevice),
      })
    } catch {
      // Enumeration is best-effort: without it the pickers simply don't show.
    }
  }, [])

  const openCamera = useCallback(
    async (deviceId?: string) => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraPermission("unavailable")
        return
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: deviceId ? { deviceId: { exact: deviceId } } : true,
          audio: true,
        })
        localStreamRef.current?.getTracks().forEach((track) => track.stop())
        localStreamRef.current = stream
        echoRef.current?.dispose()
        echoRef.current = createEchoSource(stream)
        // Every echo binding is derived from the old stream, so they all have
        // to be rebuilt — bumping the generation is what tells F0 to re-attach.
        bindingsRef.current.clear()
        setCameraPermission("granted")
        setMicrophonePermission("granted")
        setSelectedCameraId(deviceId)
        setLocalCamera(true)
        setLocalGeneration((generation) => generation + 1)
        setMembers((current) =>
          current.map((member) => ({
            ...member,
            generation: member.generation + 1,
          }))
        )
        void readDevices()
      } catch (error) {
        const permission = permissionFromError(error)
        setCameraPermission(permission)
        setMicrophonePermission(permission)
        setLocalCamera(false)
      }
    },
    [readDevices]
  )

  useEffect(
    () => () => {
      localStreamRef.current?.getTracks().forEach((track) => track.stop())
      displayStreamRef.current?.getTracks().forEach((track) => track.stop())
      echoRef.current?.dispose()
    },
    []
  )

  /* ---------------- local screen share ---------------- */

  const stopLocalScreenShare = useCallback(() => {
    displayStreamRef.current?.getTracks().forEach((track) => track.stop())
    displayStreamRef.current = null
    setLocalShare(null)
  }, [])

  /**
   * Real display capture, so sharing in the mock is the same gesture — and the
   * same aspect ratio problem — as sharing in production. Must be called from a
   * user gesture, which the control bar button already is.
   */
  const startLocalScreenShare = useCallback(async () => {
    const generation = shareGenerationRef.current++

    if (!navigator.mediaDevices?.getDisplayMedia) {
      // No display capture here (older browser, or a test environment). The
      // synthetic 21:9 canvas still exercises the layout.
      const synthetic = createScreenShareBinding()
      if (synthetic) setLocalShare({ ...synthetic, generation })
      return
    }

    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      })
      const track = stream.getVideoTracks()[0]
      if (!track) return

      displayStreamRef.current = stream
      // The browser's own "Stop sharing" bar ends the track without going
      // through our button, so the room has to hear about it from the track.
      track.addEventListener("ended", stopLocalScreenShare)

      const settings = track.getSettings()
      setLocalShare({
        binding: createStreamBinding(stream),
        width: settings.width ?? 1920,
        height: settings.height ?? 1080,
        generation,
      })
    } catch {
      // Dismissing the picker is a normal outcome, not a failure to report.
    }
  }, [stopLocalScreenShare])

  /* ---------------- runtime ---------------- */

  const localTracks = useMemo<F0MeetingTrack[]>(() => {
    const tracks: F0MeetingTrack[] = [
      {
        id: "local:microphone",
        kind: "microphone",
        bindingKey: `local:microphone:${localGeneration}`,
        muted: localMuted,
        live: !localMuted,
      },
    ]

    const stream = localStreamRef.current
    if (stream && localCamera) {
      const key = `local:camera:${localGeneration}`
      const binding = bindingFor(key, () => createStreamBinding(stream))
      tracks.push({
        id: "local:camera",
        kind: "camera",
        bindingKey: key,
        binding,
        muted: false,
        live: true,
      })
    }

    if (localShare) {
      tracks.push({
        id: "local:screenShare",
        kind: "screenShare",
        bindingKey: `local:screenShare:${localShare.generation}`,
        binding: localShare.binding,
        muted: false,
        live: true,
        width: localShare.width,
        height: localShare.height,
      })
    }

    return tracks
  }, [localCamera, localMuted, localGeneration, localShare, bindingFor])

  const participants = useMemo<F0MeetingParticipant[]>(() => {
    const local: F0MeetingParticipant = {
      id: seed.me.id,
      name: fullName(seed.me),
      avatar: avatarFor(seed.me),
      isLocal: true,
      tracks: localTracks,
    }

    const remotes = members.map<F0MeetingParticipant>((member, index) => {
      const tracks: F0MeetingTrack[] = []

      const micKey = `${member.id}:microphone:${member.generation}`
      const micStream = audioRef.current?.streamFor(member.id)
      tracks.push({
        id: `${member.id}:microphone`,
        kind: "microphone",
        bindingKey: micKey,
        binding: micStream
          ? bindingFor(micKey, () => createStreamBinding(micStream))
          : undefined,
        muted: Boolean(member.muted),
        live: !member.muted,
      })

      if (member.camera) {
        tracks.push({
          id: `${member.id}:camera`,
          kind: "camera",
          bindingKey: `${member.id}:camera:${member.generation}`,
          binding: remoteVideoBinding(member),
          muted: false,
          live: true,
        })
      }

      if (screenShareBy === member.id) {
        if (!screenShareRef.current) {
          screenShareRef.current = createScreenShareBinding()
        }
        const share = screenShareRef.current
        if (share) {
          tracks.push({
            id: `${member.id}:screenShare`,
            kind: "screenShare",
            bindingKey: `${member.id}:screenShare`,
            binding: share.binding,
            muted: false,
            live: true,
            width: share.width,
            height: share.height,
          })
        }
      }

      return {
        id: member.id,
        name: fullName(member),
        avatar: avatarFor(member),
        isLocal: false,
        isHost: index === 0,
        raisedHandAt: member.handRaisedAt,
        presence: member.presence,
        // Someone who has not arrived publishes nothing. Handing them tracks
        // would give the tile a live mic to meter and a camera to bind.
        tracks: member.presence === "invited" ? [] : tracks,
      }
    })

    return [local, ...remotes]
  }, [
    seed.me,
    members,
    localTracks,
    screenShareBy,
    bindingFor,
    remoteVideoBinding,
  ])

  const runtime = useMemo<F0MeetingRuntime>(
    () => ({
      room: seed.room,
      status,
      errorMessage,
      localParticipantId: seed.me.id,
      participants,
      signals: signalsRef.current,
      localMedia: {
        microphone: {
          enabled: !localMuted,
          permission: microphonePermission,
          devices: devices.microphone.length ? devices.microphone : undefined,
          selectDevice: devices.microphone.length
            ? () => Promise.resolve()
            : undefined,
        },
        camera: {
          enabled: localCamera,
          permission: cameraPermission,
          devices: devices.camera.length ? devices.camera : undefined,
          selectedDeviceId: selectedCameraId,
          selectDevice: devices.camera.length
            ? (deviceId: string) => openCamera(deviceId)
            : undefined,
        },
        screenShare: { enabled: Boolean(localShare) },
        audioBlocked,
        unlockAudio: async () => {
          await audioRef.current?.unlock()
          setAudioBlocked(false)
        },
      },
      leave: () => {
        setStatus("disconnected")
        onLeaveRef.current?.()
      },
      setMicrophoneEnabled: (enabled) => {
        localStreamRef.current
          ?.getAudioTracks()
          .forEach((track) => (track.enabled = enabled))
        setLocalMuted(!enabled)
      },
      setCameraEnabled: (enabled) => {
        if (enabled && !localStreamRef.current) {
          void openCamera(selectedCameraId)
          return
        }
        localStreamRef.current
          ?.getVideoTracks()
          .forEach((track) => (track.enabled = enabled))
        setLocalCamera(enabled)
      },
      setScreenShareEnabled: (enabled) => {
        if (enabled) return startLocalScreenShare()
        stopLocalScreenShare()
      },
      setHandRaised: () => setMembers((current) => current),
      sendReaction: () => {},
      reconnect: () => setStatus("connected"),
      transcript: seed.transcript === false ? undefined : transcript,
      notes,
      setNotes,
      capabilities: {},
    }),
    [
      seed.room,
      seed.me.id,
      seed.transcript,
      status,
      errorMessage,
      participants,
      transcript,
      notes,
      localMuted,
      localCamera,
      cameraPermission,
      microphonePermission,
      devices,
      selectedCameraId,
      localShare,
      audioBlocked,
      openCamera,
      startLocalScreenShare,
      stopLocalScreenShare,
    ]
  )

  /* ---------------- drivers ---------------- */

  const drivers = useMemo<MockMeetingDrivers>(
    () => ({
      enableLocalCamera: () => openCamera(),
      join: (person) =>
        setMembers((current) => [...current, { ...person, generation: 0 }]),
      leave: (id) => {
        audioRef.current?.remove(id)
        setMembers((current) => current.filter((member) => member.id !== id))
      },
      admit: (id) => {
        setMembers((current) =>
          current.map((member) =>
            member.id === id
              ? // Bumping the generation is what makes F0 attach the tracks
                // they only now have, exactly as a republish would.
                {
                  ...member,
                  presence: "joined" as const,
                  generation: member.generation + 1,
                }
              : member
          )
        )
      },
      toggleCamera: (id) =>
        setMembers((current) =>
          current.map((member) =>
            member.id === id
              ? {
                  ...member,
                  camera: !member.camera,
                  generation: member.generation + 1,
                }
              : member
          )
        ),
      toggleMute: (id) =>
        setMembers((current) =>
          current.map((member) => {
            if (member.id !== id) return member
            const muted = !member.muted
            audioRef.current?.setMuted(id, muted)
            return { ...member, muted }
          })
        ),
      startScreenShare: (id) => setScreenShareBy(id),
      stopScreenShare: () => {
        setScreenShareBy(undefined)
        stopLocalScreenShare()
      },
      shareMyScreen: startLocalScreenShare,
      simulateReconnect: (ms = 3000) => {
        setStatus("reconnecting")
        setTimeout(() => setStatus("connected"), ms)
      },
      simulateError: (message) => {
        setErrorMessage(message)
        setStatus("error")
      },
      denyPermission: (kind) => {
        if (kind === "camera") setCameraPermission("denied")
        else setMicrophonePermission("denied")
      },
      setQuality: (id, quality) => {
        signalsRef.current.setQuality(id, quality)
        forceRender((value) => value + 1)
      },
      raiseHand: (id) =>
        setMembers((current) =>
          current.map((member) =>
            member.id === id
              ? {
                  ...member,
                  handRaisedAt: member.handRaisedAt
                    ? undefined
                    : new Date().toISOString(),
                }
              : member
          )
        ),
      react: () => {},
      hasLocalCamera: localCamera,
    }),
    [openCamera, localCamera, startLocalScreenShare, stopLocalScreenShare]
  )

  /* ---------------- ambient churn ---------------- */

  useEffect(() => {
    if (!seed.churnEveryMs) return
    const interval = setInterval(() => {
      setMembers((current) => {
        if (current.length === 0) return current
        const index = Math.floor(current.length / 2)
        return current.map((member, position) =>
          position === index
            ? {
                ...member,
                camera: !member.camera,
                generation: member.generation + 1,
              }
            : member
        )
      })
    }, seed.churnEveryMs)
    return () => clearInterval(interval)
  }, [seed.churnEveryMs])

  return { runtime, drivers }
}
