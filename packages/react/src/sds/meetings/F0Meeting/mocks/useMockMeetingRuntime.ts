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

/** A line the script types into the call's own chat while it runs. */
export type MockScriptChatMessage = {
  id: string
  participantId: string
  text: string
  at: string
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

/**
 * Stand-in hardware for when the browser will not name any.
 *
 * `enumerateDevices()` returns empty labels until a capture permission has been
 * granted, so a faithful pass-through leaves the device menus blank or missing
 * — which demonstrates nothing. These are only ever used when the real list
 * comes back empty.
 */
const FALLBACK_MICROPHONES: F0MeetingDevice[] = [
  { id: "default", label: "Built-in Microphone", isDefault: true },
  { id: "mock-mic-external", label: "External USB Microphone" },
]

const FALLBACK_CAMERAS: F0MeetingDevice[] = [
  { id: "default", label: "Built-in Camera", isDefault: true },
  { id: "mock-cam-external", label: "External Webcam" },
]

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
): {
  runtime: F0MeetingRuntime
  drivers: MockMeetingDrivers
  /** Lines the script typed into the call's chat. Empty without a script. */
  scriptChat: MockScriptChatMessage[]
} => {
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
  const [selectedMicrophoneId, setSelectedMicrophoneId] = useState<string>()
  const [audioBlocked, setAudioBlocked] = useState(false)
  const [transcript, setTranscript] = useState<F0MeetingTranscriptSegment[]>([])
  const [notes, setNotes] = useState(seed.notes ?? "")
  /** Chat lines the script types during the call, for the room's own chat tab. */
  const [scriptChat, setScriptChat] = useState<MockScriptChatMessage[]>([])
  const [, forceRender] = useState(0)

  const signalsRef = useRef(createMeetingSignalStore())
  const audioRef = useRef<MockAudioEngine | null>(null)
  const echoRef = useRef<EchoSource | null>(null)
  const localStreamRef = useRef<MediaStream | null>(null)
  /**
   * The microphone, acquired separately from the camera.
   *
   * They used to share one `getUserMedia({ video, audio })` call, which meant
   * turning the camera on silently opened the mic — and that is what fed the
   * speaking-detection loop. Two sources, two lifetimes.
   */
  const localMicStreamRef = useRef<MediaStream | null>(null)
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
  // The roster as it stands right now, for timers that must not re-subscribe
  // every time somebody walks in.
  const membersRef = useRef<MemberState[]>([])
  membersRef.current = members

  useEffect(() => {
    if (seed.audio === false) return
    const engine = createMockAudioEngine(signalsRef.current, seed.seed ?? 7)
    audioRef.current = engine
    setAudioBlocked(engine.blocked())
    // Start the turn-taking director with the engine that owns it. Running it
    // from an effect of its own only worked when audio existed at mount: a room
    // that starts silent (the app shell before a huddle) created its engine
    // later and nobody ever spoke in it.
    // A scripted room already knows who talks when; letting the director run
    // too would mean two things fighting over the floor.
    if (!seed.script) engine.runDirector(() => memberIdsRef.current)

    // Keep asking. Sampled once at mount, the "Click to enable sound" prompt
    // could never appear BEFORE the browser unblocked the context on your first
    // gesture — so six synthesized voices arrived unannounced and the prompt
    // showed up too late to warn anybody.
    const poll = setInterval(() => setAudioBlocked(engine.blocked()), 500)
    return () => {
      clearInterval(poll)
      engine.dispose()
      audioRef.current = null
    }
  }, [seed.audio, seed.seed, seed.script])

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

  /* ---------------- the script ---------------- */

  /**
   * What the current speaker is saying, so the transcript prints the words that
   * are being spoken instead of a phrase drawn from a bag. Written just before
   * the floor changes hands and read by the transcript driver below.
   */
  const scriptTextRef = useRef(new Map<string, string>())

  useEffect(() => {
    const script = seed.script
    if (!script || script.lines.length === 0) return

    setScriptChat([])
    scriptTextRef.current = new Map()

    // Through the engine when there is one so the synthesized voices follow the
    // script, straight to the signals when there isn't — a room with
    // `audio: false` (and jsdom) still needs the rings and the transcript.
    const publish = (ids: string[]): void => {
      const engine = audioRef.current
      if (engine) engine.setSpeaking(ids)
      else signalsRef.current.setSpeaking(ids)
    }

    const runsUntil = script.lines.reduce(
      (longest, line) => Math.max(longest, line.at + line.durationMs),
      0
    )
    // The clock starts when there is somebody to talk to, not when the room
    // opens. A group huddle opens empty and fills over several seconds; without
    // this the conversation would play to nobody and be half over by the time
    // the first person walked in.
    let started: number | null = null
    const firedChat = new Set<number>()

    const inTheRoom = (participantId: string): boolean =>
      participantId === seed.me.id ||
      membersRef.current.some(
        (member) => member.id === participantId && member.presence !== "invited"
      )

    const tick = (): void => {
      const others = membersRef.current.filter(
        (member) => member.presence !== "invited"
      )
      if (started === null) {
        if (others.length === 0) return
        started = Date.now()
      }

      let elapsed = Date.now() - started
      if (script.loop && runsUntil > 0 && elapsed > runsUntil + 2000) {
        return
      }
      elapsed = Math.min(elapsed, Number.MAX_SAFE_INTEGER)

      const speaking: string[] = []
      for (const line of script.lines) {
        if (!line.say) continue
        // Someone who has not arrived cannot be speaking. Their line is skipped
        // outright rather than queued: a transcript that attributes sentences to
        // an empty tile is worse than a shorter conversation.
        if (!inTheRoom(line.participantId)) continue
        if (elapsed >= line.at && elapsed < line.at + line.durationMs) {
          speaking.push(line.participantId)
          scriptTextRef.current.set(line.participantId, line.say)
        }
      }
      publish(speaking)

      script.lines.forEach((line, index) => {
        if (!line.chat || firedChat.has(index) || elapsed < line.at) return
        firedChat.add(index)
        setScriptChat((current) => [
          ...current,
          {
            id: `script-chat-${index}`,
            participantId: line.participantId,
            text: line.chat as string,
            at: new Date().toISOString(),
          },
        ])
      })
    }

    const timer = setInterval(tick, 120)
    tick()

    return () => {
      clearInterval(timer)
      publish([])
    }
  }, [seed.script])

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
        if (!speaking.includes(id)) {
          driver.start(id, scriptTextRef.current.get(id))
        }
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
  //
  // Muting stops the metering outright rather than relying on `track.enabled`:
  // a UI-muted mic must not be able to put you in the speaking set at all.
  useEffect(() => {
    const engine = audioRef.current
    const stream = localMicStreamRef.current
    if (!engine || !stream || localMuted) return
    engine.monitor(seed.me.id, stream)
    return () => engine.unmonitor(seed.me.id)
  }, [localGeneration, localMuted, seed.me.id, seed.audio])

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

        const synthetic = () =>
          createSyntheticVideoBinding(
            { id: member.id, name: fullName(member) },
            { animated: seed.animateVideo !== false }
          )

        if (source === "clip") {
          const offset = hashId(member.id)
          // A clip of their own beats a shared pool: the same person keeps the
          // same face, which is what makes it read as a person at all.
          const own = seed.clips?.[member.id]
          if (own) {
            return createClipVideoBinding(own.src, offset * 60, {
              ...(own.poster ? { poster: own.poster } : {}),
              // Hotlinked, so a dead network has to land on the initials tile
              // rather than on a black rectangle.
              ...(synthetic() ? { fallback: synthetic() } : {}),
            })
          }

          const clips = seed.clipUrls ?? []
          if (clips.length > 0) {
            return createClipVideoBinding(
              clips[Math.floor(offset * clips.length) % clips.length] as string,
              // Spread the starting points so the same file reads as different
              // people rather than a wall of identical frames.
              offset * 60,
              { ...(synthetic() ? { fallback: synthetic() } : {}) }
            )
          }
        }

        return synthetic()
      })
    },
    [bindingFor, seed.videoSource, seed.animateVideo, seed.clipUrls, seed.clips]
  )

  /* ---------------- local camera ---------------- */

  const readDevices = useCallback(async () => {
    if (!navigator.mediaDevices?.enumerateDevices) {
      setDevices({ camera: FALLBACK_CAMERAS, microphone: FALLBACK_MICROPHONES })
      return
    }
    try {
      const list = await navigator.mediaDevices.enumerateDevices()
      const toDevice = (
        device: MediaDeviceInfo,
        index: number,
        kind: string
      ): F0MeetingDevice => ({
        id: device.deviceId || `${kind}-${index}`,
        // Before permission is granted the browser reports empty labels, so a
        // raw pass-through renders blank menu rows. A numbered name is at least
        // pickable and honest about what it is.
        label: device.label || `${kind} ${index + 1}`,
        isDefault: device.deviceId === "default",
      })
      const camera = list
        .filter((device) => device.kind === "videoinput")
        .map((device, index) => toDevice(device, index, "Camera"))
      const microphone = list
        .filter((device) => device.kind === "audioinput")
        .map((device, index) => toDevice(device, index, "Microphone"))

      // A demo with an invisible chevron demonstrates nothing. Where the
      // browser gives us nothing to show — no permission yet, a locked-down
      // CI — stand in plausible hardware so the picker is still reachable.
      setDevices({
        camera: camera.length ? camera : FALLBACK_CAMERAS,
        microphone: microphone.length ? microphone : FALLBACK_MICROPHONES,
      })
    } catch {
      setDevices({ camera: FALLBACK_CAMERAS, microphone: FALLBACK_MICROPHONES })
    }
  }, [])

  // Enumerate up front, not only after the camera is granted: otherwise both
  // chevrons stay hidden until you turn the camera on, and the microphone
  // picker is unreachable for anyone who never does. `devicechange` covers
  // plugging a headset in mid-call.
  useEffect(() => {
    void readDevices()
    const media = navigator.mediaDevices
    if (!media?.addEventListener) return
    const onChange = () => void readDevices()
    media.addEventListener("devicechange", onChange)
    return () => media.removeEventListener("devicechange", onChange)
  }, [readDevices])

  const openCamera = useCallback(
    async (deviceId?: string) => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setCameraPermission("unavailable")
        return
      }
      try {
        // Video ONLY. Asking for audio here was free to write and cost a
        // feedback loop: on laptop speakers the mic picks up the synthesized
        // voices, the monitor meters them, and you get added to the speaking
        // set — your own tile lights up and the transcript starts attributing
        // sentences to you. Nothing ever needed this stream's audio: the local
        // microphone is never published, has no binding, and the tile is always
        // muted.
        const stream = await navigator.mediaDevices.getUserMedia({
          video: deviceId ? { deviceId: { exact: deviceId } } : true,
        })
        localStreamRef.current?.getTracks().forEach((track) => track.stop())
        localStreamRef.current = stream

        // The echo preview is decoration on top of a camera we already have.
        // Letting it throw into the outer catch reported a *permission* failure
        // for a camera that had in fact opened.
        echoRef.current?.dispose()
        try {
          echoRef.current = createEchoSource(stream)
        } catch {
          echoRef.current = null
        }

        // Every echo binding is derived from the old stream, so they all have
        // to be rebuilt — bumping the generation is what tells F0 to re-attach.
        bindingsRef.current.clear()
        setCameraPermission("granted")
        // The real device id, not the one we asked for: opening the default
        // camera passes `undefined`, and without this the picker never ticks
        // anything. The screen-share path already reads its settings this way.
        setSelectedCameraId(
          deviceId ?? stream.getVideoTracks()[0]?.getSettings().deviceId
        )
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
        setCameraPermission(permissionFromError(error))
        setLocalCamera(false)
      }
    },
    [readDevices]
  )

  /**
   * Gives the hardware back.
   *
   * Shared by the unmount cleanup and by `leave`, which is the case that was
   * missing: hanging up does NOT unmount this hook — the frame keeps the runtime
   * mounted and only flips `status` — so the camera light stayed on until you
   * navigated away.
   */
  const releaseLocalMedia = useCallback(() => {
    localStreamRef.current?.getTracks().forEach((track) => track.stop())
    localStreamRef.current = null
    localMicStreamRef.current?.getTracks().forEach((track) => track.stop())
    localMicStreamRef.current = null
    displayStreamRef.current?.getTracks().forEach((track) => track.stop())
    displayStreamRef.current = null
    echoRef.current?.dispose()
    echoRef.current = null
    bindingsRef.current.clear()
  }, [])

  /**
   * Opens the real microphone, on its own.
   *
   * Switching device replaces only this stream — the camera is untouched — and
   * bumps the generation so the metering effect re-subscribes to the new one.
   */
  const openMicrophone = useCallback(
    async (deviceId?: string) => {
      if (!navigator.mediaDevices?.getUserMedia) {
        setMicrophonePermission("unavailable")
        return
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: deviceId
            ? {
                deviceId: { exact: deviceId },
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true,
              }
            : {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true,
              },
        })
        localMicStreamRef.current?.getTracks().forEach((track) => track.stop())
        localMicStreamRef.current = stream
        setMicrophonePermission("granted")
        setSelectedMicrophoneId(
          deviceId ?? stream.getAudioTracks()[0]?.getSettings().deviceId
        )
        setLocalGeneration((generation) => generation + 1)
        void readDevices()
      } catch (error) {
        setMicrophonePermission(permissionFromError(error))
      }
    },
    [readDevices]
  )

  useEffect(() => () => releaseLocalMedia(), [releaseLocalMedia])

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
          selectedDeviceId: selectedMicrophoneId,
          // Was a `() => Promise.resolve()` stub that existed only to satisfy
          // the `Boolean(selectDevice)` gate that decides whether the chevron
          // renders — picking a microphone did nothing at all.
          selectDevice: devices.microphone.length
            ? (deviceId: string) => openMicrophone(deviceId)
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
        // Hardware first. Hanging up does not unmount this hook, so without
        // this the camera light stays on after the call is over.
        releaseLocalMedia()
        setLocalCamera(false)
        setLocalShare(null)
        setStatus("disconnected")
        onLeaveRef.current?.()
      },
      setMicrophoneEnabled: (enabled) => {
        // Unmuting with no stream yet is the gesture that asks for the mic —
        // the same shape as the camera, and the only moment a permission
        // prompt is expected.
        if (enabled && !localMicStreamRef.current) {
          setLocalMuted(false)
          void openMicrophone(selectedMicrophoneId)
          return
        }
        localMicStreamRef.current
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
      // No `setHandRaised`: capability-by-presence is how the contract removes
      // a control, so omitting it takes the raise-hand button out of the bar
      // without the design system losing the capability for hosts that want it.
      // `drivers.raiseHand` stays — it costs nothing and still exercises the
      // `raisedHandAt` path.
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

  return { runtime, drivers, scriptChat }
}
