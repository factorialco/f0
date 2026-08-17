import { type AvatarVariant } from "@/components/avatars/F0Avatar"
import { type IconType } from "@/components/F0Icon"

/* ------------------------------------------------------------------ *
 * Tracks & bindings
 * ------------------------------------------------------------------ */

/**
 * Binds a media track to a DOM element that F0 owns. F0 calls `attach` in a
 * layout effect and the returned cleanup on unmount / track change.
 *
 * factorial → LiveKit: `(el) => { track.attach(el); return () => track.detach(el) }`.
 * Going through the transport's own attach (instead of assigning `srcObject`)
 * is what keeps adaptive stream and dynacast working: LiveKit observes the
 * attached element's size and visibility to pick the simulcast layer and to
 * pause off-screen tracks.
 */
export type F0MeetingBinding = (element: HTMLMediaElement) => () => void

export const f0MeetingTrackKinds = [
  "camera",
  "microphone",
  "screenShare",
  "screenShareAudio",
] as const

export type F0MeetingTrackKind = (typeof f0MeetingTrackKinds)[number]

export type F0MeetingTrack = {
  /** Stable publication id. factorial → LiveKit `TrackPublication.trackSid`. */
  id: string
  kind: F0MeetingTrackKind
  /**
   * Identity key for the binding. F0 re-runs attach ONLY when this changes —
   * never on `binding`'s identity, which hosts rebuild on every transport
   * event. Republishing the same source (camera restart, device switch) MUST
   * change it. factorial → `${trackSid}:${track.mediaStreamID}`.
   */
  bindingKey: string
  binding?: F0MeetingBinding
  /** Muted at the source. factorial → LiveKit `TrackPublication.isMuted`. */
  muted: boolean
  /** Subscribed and flowing. factorial → `isSubscribed && !isMuted`. */
  live: boolean
  /**
   * Intrinsic dimensions, when known — lets the tile letterbox before the
   * first frame lands. Screen shares are rarely 16:9, so forcing them into it
   * is visible. factorial → LiveKit `TrackPublication.dimensions`.
   */
  width?: number
  height?: number
}

/* ------------------------------------------------------------------ *
 * Participants
 * ------------------------------------------------------------------ */

/**
 * A person in the room. `id` is the transport identity — the SAME string the
 * transport uses, so F0 never cross-references two id spaces internally. The
 * domain lookup (identity → employee name/avatar) belongs to the adapter.
 *
 * factorial → LiveKit `Participant.identity` (the employee id).
 */
export type F0MeetingParticipant = {
  id: string
  /** Display name, already resolved by the host. LiveKit `Participant.name`. */
  name: string
  avatar?: AvatarVariant
  isLocal: boolean
  /**
   * Moderator flag — drives moderation affordances. Not a transport concept:
   * the host derives it from token grants or `participant.metadata`.
   */
  isHost?: boolean
  /**
   * A bot rather than a person (AI notetaker, transcription bot). Renders with
   * a distinct treatment and never counts toward "N people in the call".
   */
  isAgent?: boolean
  /** Joined but has not published anything yet. */
  isConnecting?: boolean
  tracks: F0MeetingTrack[]
  /**
   * ISO timestamp the hand was raised, so "who raised first" has an order.
   * factorial → LiveKit participant attributes or a data-channel message.
   */
  raisedHandAt?: string
  /** Free-form host label shown in the tile chip. F0 never parses it. */
  subtitle?: string
  /**
   * Never crop this person's video: it is letterboxed inside its tile instead
   * of filling it.
   *
   * Tiles take the shape of their cell and crop the sides to fill it, which is
   * safe for a centred face and NOT safe for someone signing — it takes their
   * hands with it. Meet exposes the same escape hatch as "Show my full video to
   * others". The person owns the preference; F0 only honours it.
   */
  preventCrop?: boolean
}

/* ------------------------------------------------------------------ *
 * Connection & local media
 * ------------------------------------------------------------------ */

export const f0MeetingStatuses = [
  "idle",
  "connecting",
  "connected",
  "reconnecting",
  "disconnected",
  "error",
] as const

/**
 * Room lifecycle. `reconnecting` shows a non-blocking banner and FREEZES the
 * last video frame instead of clearing tiles — clearing on a two-second ICE
 * restart is the worst thing a call UI can do.
 *
 * factorial → LiveKit `Room.state` plus the `Disconnected` event's reason.
 */
export type F0MeetingStatus = (typeof f0MeetingStatuses)[number]

export const f0MeetingDisconnectReasons = [
  "user-left",
  "removed",
  "room-closed",
  "duplicate-identity",
  "server-shutdown",
  "connection-lost",
  "unknown",
] as const

/** Why the room ended — drives the copy of the end state. */
export type F0MeetingDisconnectReason =
  (typeof f0MeetingDisconnectReasons)[number]

export const f0MeetingPermissions = [
  "granted",
  "prompt",
  "denied",
  "unavailable",
  "in-use",
] as const

/**
 * Media permission as the browser reports it. Modelling it explicitly is what
 * lets the UI explain a black tile instead of just showing one.
 *
 * factorial → the DOMException name from `getUserMedia`: `NotAllowedError` →
 * "denied", `NotFoundError` → "unavailable", `NotReadableError` → "in-use".
 */
export type F0MeetingPermission = (typeof f0MeetingPermissions)[number]

export type F0MeetingDevice = {
  /** MediaDeviceInfo.deviceId. */
  id: string
  label: string
  /** Marks the OS default entry so the UI can render "System default". */
  isDefault?: boolean
}

/** State of one local media source. */
export type F0MeetingLocalSource = {
  enabled: boolean
  /** A toggle is in flight. Renders the pending state and blocks double-clicks. */
  pending?: boolean
  permission?: F0MeetingPermission
  /** Devices for the inline picker. Omit to hide the chevron entirely. */
  devices?: F0MeetingDevice[]
  selectedDeviceId?: string
  selectDevice?: (deviceId: string) => void | Promise<void>
}

/**
 * The local participant's media, split from the roster because it changes on a
 * different cadence and drives the control bar directly.
 */
export type F0MeetingLocalMedia = {
  microphone: F0MeetingLocalSource
  camera: F0MeetingLocalSource
  /** Omit when the host cannot share (mobile web, restricted tenants). */
  screenShare?: F0MeetingLocalSource
  /**
   * Browsers block autoplay of remote audio until a user gesture. When true,
   * F0 renders an affordance wired to `unlockAudio`.
   * factorial → LiveKit `room.canPlaybackAudio === false`, resolved by
   * `room.startAudio()`.
   */
  audioBlocked?: boolean
  unlockAudio?: () => void | Promise<void>
}

/* ------------------------------------------------------------------ *
 * High-frequency signals
 * ------------------------------------------------------------------ */

export const f0MeetingConnectionQualities = [
  "excellent",
  "good",
  "poor",
  "lost",
] as const

export type F0MeetingConnectionQuality =
  (typeof f0MeetingConnectionQualities)[number]

/**
 * Per-participant volatile state. Read through `useSyncExternalStore`, never
 * through context: with a dozen participants LiveKit emits these at 10–20 Hz,
 * which would re-render the whole tree a hundred times a second.
 */
export type F0MeetingSignal = {
  /** 0..1, smoothed by the host. LiveKit `Participant.audioLevel`. */
  audioLevel: number
  isSpeaking: boolean
  quality: F0MeetingConnectionQuality
}

/**
 * Minimal external-store protocol. F0 exports `createMeetingSignalStore` so
 * hosts never implement subscribe/getSnapshot themselves — the adapter just
 * calls the setters from its transport listeners.
 */
export type F0MeetingSignalStore = {
  subscribe: (participantId: string, listener: () => void) => () => void
  /**
   * MUST return the same object identity while nothing changed, or
   * `useSyncExternalStore` loops forever.
   */
  getSnapshot: (participantId: string) => F0MeetingSignal
  subscribeSpeakers: (listener: () => void) => () => void
  /** Identity changes only when the SET changes, so the grid doesn't churn. */
  getSpeakers: () => readonly string[]
}

/* ------------------------------------------------------------------ *
 * Room, capabilities and the runtime
 * ------------------------------------------------------------------ */

export type F0MeetingRoomInfo = {
  id: string
  /** Shown in the header and in the minimized pill. */
  title: string
  avatar?: AvatarVariant
  /**
   * ISO timestamp the call started — drives the elapsed timer. LiveKit exposes
   * no room start time, so the adapter uses its own backend value and falls
   * back to local join time.
   */
  startedAt?: string
  /** Where this meeting came from, so the header can link back to it. */
  origin?: { label: string; onNavigate: () => void }
}

/**
 * Per-room permissions, defaulting to allowed so hosts only express what their
 * token or role restricts.
 *
 * Capabilities are PERMISSIONS; the optional actions on the runtime are FEATURE
 * SUPPORT. Omitting `startRecording` means "this deployment has no recording";
 * `canRecord: false` means "recording exists but not for you".
 */
export type F0MeetingCapabilities = {
  canPublishAudio?: boolean
  canPublishVideo?: boolean
  canShareScreen?: boolean
  canRecord?: boolean
  canMuteOthers?: boolean
  canRemoveParticipants?: boolean
  /** Per-participant moderation gate (e.g. you cannot remove another host). */
  canModerate?: (participant: F0MeetingParticipant) => boolean
}

export type F0MeetingRecording = {
  active: boolean
  startedBy?: F0MeetingParticipant
  startedAt?: string
  /** Legal copy is host-provided and already localized. */
  consentNotice?: string
}

export type F0MeetingReaction = {
  id: string
  participantId: string
  emoji: string
  at: string
}

/**
 * The data and actions a host provides to drive the meeting UI. F0 is headless:
 * it never touches the transport. A mock runtime powers Storybook; factorial
 * implements this against LiveKit.
 *
 * As in {@link F0ChatRuntime}, optional callbacks are CAPABILITY DETECTION:
 * omitting `setScreenShareEnabled` removes the screen-share button entirely.
 */
export type F0MeetingRuntime = {
  room: F0MeetingRoomInfo
  status: F0MeetingStatus
  /** Only meaningful with `status: "disconnected"`. */
  disconnectReason?: F0MeetingDisconnectReason
  /** Human-readable failure, already localized. `status: "error"` only. */
  errorMessage?: string

  localParticipantId: string
  /**
   * Everyone in the room INCLUDING the local participant, in a stable order the
   * host controls (join order). F0 owns speaker promotion and pagination on top
   * of this — a host that reorders on every speaker change makes the grid churn.
   */
  participants: F0MeetingParticipant[]
  localMedia: F0MeetingLocalMedia
  /**
   * Volatile per-participant signals. Omit and F0 degrades gracefully to muted
   * flags with no waveform and no quality bars, which is what tests and simple
   * hosts want.
   */
  signals?: F0MeetingSignalStore

  /* --- core actions, always present --- */
  /**
   * Leave the room. F0 never calls this implicitly — not on unmount, not on
   * Escape, not on navigation. Hanging up must be an explicit user act.
   */
  leave: () => void | Promise<void>
  setMicrophoneEnabled: (enabled: boolean) => void | Promise<void>
  setCameraEnabled: (enabled: boolean) => void | Promise<void>

  /* --- optional: presence gates the UI --- */
  setScreenShareEnabled?: (enabled: boolean) => void | Promise<void>
  startRecording?: () => void | Promise<void>
  stopRecording?: () => void | Promise<void>
  recording?: F0MeetingRecording
  setHandRaised?: (raised: boolean) => void | Promise<void>
  sendReaction?: (emoji: string) => void | Promise<void>
  /** Transient reactions to animate; the host prunes them after a few seconds. */
  reactions?: F0MeetingReaction[]
  muteParticipant?: (participantId: string) => void | Promise<void>
  removeParticipant?: (participantId: string) => void | Promise<void>
  /** Retry after a failed connect — wires the Rejoin action. */
  reconnect?: () => void | Promise<void>

  capabilities?: F0MeetingCapabilities
}

/* ------------------------------------------------------------------ *
 * Surface
 * ------------------------------------------------------------------ */

export const f0MeetingSurfaceModes = [
  "fullscreen",
  /** The side panel: pinned to the left of the content, which narrows for it. */
  "panel",
  "floating",
  "minimized",
  "inline",
] as const

export type F0MeetingSurfaceMode = (typeof f0MeetingSurfaceModes)[number]

export const f0WindowCorners = ["tl", "tr", "bl", "br"] as const

export type F0WindowCorner = (typeof f0WindowCorners)[number]

/**
 * Anchored placement. Storing absolute coordinates is the classic mistake:
 * shrinking the browser leaves the window off-screen. Anchoring to a corner
 * keeps it where the user expects across viewport changes.
 *
 * `panelWidth` sits alongside rather than inside the anchored rect: the two
 * modes never touch each other's geometry, so switching to the side panel and
 * back returns the exact floating size the user had chosen.
 */
export type F0WindowPlacement = {
  corner: F0WindowCorner
  /** Distance from the anchored corner, in px, always positive. */
  dx: number
  dy: number
  width: number
  height: number
  /** Width of the side panel, resizable like the chat's. */
  panelWidth?: number
}

export type F0Rect = {
  x: number
  y: number
  width: number
  height: number
}

/* ------------------------------------------------------------------ *
 * Actions
 * ------------------------------------------------------------------ */

export const f0MeetingCoreActionIds = [
  "core:microphone",
  "core:microphoneSettings",
  "core:camera",
  "core:cameraSettings",
  "core:screenShare",
  "core:raiseHand",
  "core:leave",
] as const

export type F0MeetingCoreActionId = (typeof f0MeetingCoreActionIds)[number]

export type F0MeetingAction = {
  /**
   * Reusing a core id (see {@link f0MeetingCoreActionIds}) PATCHES the
   * synthesized action instead of adding a new one, so a host can restyle the
   * mic button without reimplementing it.
   */
  id: string
  /** Already localized. For toggles the host rebuilds it per render. */
  label: string
  icon: IconType
  /** Shown while `pressed` — mic → MicrophoneNegative. */
  activeIcon?: IconType
  /** Toggle semantics: renders `aria-pressed` and the active treatment. */
  pressed?: boolean
  onClick?: () => void
  disabled?: boolean
  /** Why it is disabled. Without this, a disabled button is a dead end. */
  disabledReason?: string
  /** An operation is in flight: spinner, no double-fire. */
  pending?: boolean
  variant?: "default" | "critical"
  /** Collapse priority; higher survives longer. */
  priority?: number
  /** Never collapses into the overflow menu. */
  pinned?: boolean
  /** Actions sharing a group render adjacent, separated by a hairline. */
  group?: string
  badge?: number | "dot"
  /** Restrict to some surface modes. Omit for all. */
  modes?: F0MeetingSurfaceMode[]
  /**
   * Shortcut hint for the tooltip. F0 renders it but does NOT bind it — global
   * key binding belongs to the host, which owns the rest of the app.
   */
  shortcut?: string
  /** Removes a synthesized core action entirely. */
  hidden?: boolean
}

/**
 * A partial override of a synthesized core action. Patching only needs the id,
 * so relabelling the mic button does not mean restating its icon, priority and
 * pinning — which would be both noise and a chance to get them wrong.
 */
export type F0MeetingActionPatch = Partial<Omit<F0MeetingAction, "id">> & {
  id: F0MeetingCoreActionId
}

export type F0MeetingActionInput = F0MeetingAction | F0MeetingActionPatch

export type F0MeetingActionsProp =
  | F0MeetingActionInput[]
  | ((runtime: F0MeetingRuntime) => F0MeetingActionInput[])

/* ------------------------------------------------------------------ *
 * Provider props
 * ------------------------------------------------------------------ */

export type F0MeetingProviderProps = {
  /** `null` when there is no active meeting: nothing mounts. */
  runtime: F0MeetingRuntime | null
  /** Host actions, merged by id with the synthesized core ones. */
  actions?: F0MeetingActionsProp
  /** Explicit left-to-right order by action id. Unlisted ids keep their slot. */
  actionOrder?: string[]
  /** Surface mode when a meeting first appears. */
  defaultMode?: F0MeetingSurfaceMode
  /** Host content rendered beside the grid (in-meeting chat, participants). */
  sidePanel?: React.ReactNode
  /** Host content rendered in the window header, before the mode controls. */
  headerContent?: React.ReactNode
  /** Host content rendered above the whole room (banners, upsells). */
  overlay?: React.ReactNode
  children?: React.ReactNode
}
