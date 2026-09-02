import { type AvatarVariant } from "@/components/avatars/F0Avatar"

import { type F0MeetingRoomInfo, type F0MeetingStatus } from "../types"

export type MockPerson = {
  id: string
  firstName: string
  lastName: string
  /** Overrides the initials avatar — used when a host already has one. */
  avatar?: AvatarVariant
  /** Starts with the camera on. */
  camera?: boolean
  muted?: boolean
  /**
   * `invited` seeds someone the call is waiting for. They hold a tile that says
   * so and publish nothing until `drivers.admit` lets them in — which is what a
   * `participant_joined` webhook does in production.
   */
  presence?: "invited" | "joined"
}

export const mockVideoSources = ["echo", "clip", "synthetic"] as const

export type MockVideoSource = (typeof mockVideoSources)[number]

export type MockMeetingSeed = {
  room: F0MeetingRoomInfo
  me: MockPerson
  others: MockPerson[]
  /**
   * How the remote tiles get their picture. `echo` reuses the real camera —
   * the most convincing option — and falls back to `synthetic` when no camera
   * has been granted.
   */
  videoSource?: MockVideoSource
  /**
   * Animate the synthetic canvases. Snapshot stories must turn this off:
   * captured frames are not deterministic, so an animated source guarantees a
   * flaky visual diff.
   */
  animateVideo?: boolean
  /** Synthesized voices and the turn-taking director. */
  audio?: boolean
  clipUrls?: string[]
  /**
   * A clip per person, keyed by participant id. Beats `clipUrls` because who
   * gets which face stops being `hashId` roulette — the same person always has
   * the same face, which is the whole point of a face.
   *
   * Falls back to `clipUrls` for anyone missing.
   */
  clips?: Record<string, { src: string; poster?: string }>
  /**
   * A written conversation driving the voices, the speaking ring and the
   * transcript together.
   *
   * Present ⇒ the random turn-taking director does not run. The two are
   * alternatives, not layers: both setting the floor would fight over it.
   */
  script?: {
    lines: readonly {
      at: number
      participantId: string
      durationMs: number
      say?: string
      chat?: string
    }[]
    /** Restart from the top once the last line ends. */
    loop?: boolean
  }
  seed?: number
  startStatus?: F0MeetingStatus
  screenShareBy?: string
  /** Ambient joins and leaves, to exercise the grid re-solving. */
  churnEveryMs?: number
  /** Live transcription. `false` removes the Transcript tab entirely. */
  transcript?: boolean
  /** Starting content of the shared notes. */
  notes?: string
}

const person = (
  id: string,
  firstName: string,
  lastName: string,
  overrides: Partial<MockPerson> = {}
): MockPerson => ({ id, firstName, lastName, camera: true, ...overrides })

const ME = person("me", "Raúl", "Sigüenza")

const ROSTER: MockPerson[] = [
  person("p1", "Marta", "Ibáñez"),
  person("p2", "Tomás", "Ferreira", { camera: false }),
  person("p3", "Aiko", "Tanaka"),
  person("p4", "Nadia", "Cherif", { muted: true }),
  person("p5", "Lars", "Petersen"),
  person("p6", "Priya", "Raman", { camera: false }),
  person("p7", "Diego", "Ferrán"),
  person("p8", "Emma", "Hollande", { muted: true }),
  person("p9", "Kofi", "Mensah"),
  person("p10", "Sara", "Lindqvist"),
  person("p11", "Bruno", "Castellani", { camera: false }),
  person("p12", "Yuki", "Watanabe"),
  person("p13", "Amara", "Okonkwo"),
  person("p14", "Ines", "Moreau"),
  person("p15", "Pau", "Ribalta"),
  person("p16", "Zoë", "Van Dijk", { muted: true }),
  person("p17", "Hugo", "Almeida"),
  person("p18", "Lena", "Kraus"),
  person("p19", "Omar", "Haddad", { camera: false }),
  person("p20", "Clara", "Ventura"),
  person("p21", "Nils", "Bergström"),
  person("p22", "Rania", "Aziz"),
  person("p23", "Marc", "Puigdemont"),
  person("p24", "Sofia", "Rossi"),
  person("p25", "Tobias", "Lang"),
  person("p26", "Ana", "Beltrán"),
  person("p27", "Ken", "Nakamura"),
  person("p28", "Iris", "Nováková"),
  person("p29", "Samir", "Bhatt"),
]

const room = (title: string): F0MeetingRoomInfo => ({
  id: `mock-${title.toLowerCase().replace(/\s+/g, "-")}`,
  title,
  startedAt: new Date(Date.now() - 4 * 60 * 1000 - 12 * 1000).toISOString(),
})

const seed = (
  title: string,
  count: number,
  overrides: Partial<MockMeetingSeed> = {}
): MockMeetingSeed => ({
  room: room(title),
  me: ME,
  others: ROSTER.slice(0, count),
  videoSource: "echo",
  audio: true,
  seed: 7,
  ...overrides,
})

/** Someone a host already knows about — a chat member, a calendar attendee. */
export type MockAttendee = {
  id: string
  name: string
  avatar?: AvatarVariant
}

const fromAttendee = (
  attendee: MockAttendee,
  index: number,
  camera: boolean
): MockPerson => {
  const [firstName = attendee.name, ...rest] = attendee.name.split(" ")
  return {
    id: attendee.id,
    firstName,
    lastName: rest.join(" "),
    avatar: attendee.avatar,
    camera,
    muted: index % 4 === 3,
  }
}

/**
 * How many people can be on camera at once.
 *
 * Not a stylistic cap. A 45-person channel huddle would otherwise mount ~30
 * simultaneous `<video>` elements against hotlinked files, and "perf with ~25
 * live videos" is already an open question in SPEC.md. It is also simply what a
 * big call looks like: almost everyone is a name and an avatar.
 */
export const CAMERAS_ON_LIMIT = 8

/**
 * Builds a room from people a host already has — the members of a conversation,
 * say. This is what a huddle actually is: the same group, in a call.
 */
export const seedFromAttendees = ({
  roomId,
  title,
  me,
  attendees,
  presence,
  ...rest
}: {
  roomId: string
  title: string
  me: MockAttendee
  attendees: MockAttendee[]
  /** Seeds the attendees as people the call is still waiting for. */
  presence?: "invited" | "joined"
} & Partial<
  Omit<MockMeetingSeed, "room" | "me" | "others">
>): MockMeetingSeed => {
  const others = attendees.filter((attendee) => attendee.id !== me.id)

  // Who gets a camera. With per-person clips, "has a clip" is the honest
  // answer — a tile whose source would be a stranger's face is worse than an
  // avatar. Without them, fall back to the old every-third-person mix.
  const clips = rest.clips
  const eligible = clips
    ? others.filter((attendee) => attendee.id in clips)
    : others.filter((_, index) => index % 3 !== 1)
  const camerasOn = new Set(
    eligible.slice(0, CAMERAS_ON_LIMIT).map((attendee) => attendee.id)
  )

  return {
    room: {
      id: roomId,
      title,
      startedAt: new Date().toISOString(),
    },
    me: { ...fromAttendee(me, 0, false), camera: false, muted: false },
    others: others.map((attendee, index) => ({
      ...fromAttendee(attendee, index, camerasOn.has(attendee.id)),
      ...(presence ? { presence } : {}),
    })),
    videoSource: "echo",
    audio: true,
    seed: 7,
    ...rest,
  }
}

export const soloSeed = seed("Huddle · Design", 0)
export const oneToOneSeed = seed("Huddle · Marta", 1)
export const sixPeopleSeed = seed("Huddle · Design", 5)
export const twelvePeopleSeed = seed("Weekly sync", 11)
export const thirtyPeopleSeed = seed("All hands", 29)
export const screenShareSeed = seed("Huddle · Design", 5, {
  screenShareBy: "p1",
})
