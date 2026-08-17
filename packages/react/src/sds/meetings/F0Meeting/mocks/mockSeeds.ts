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
  seed?: number
  startStatus?: F0MeetingStatus
  screenShareBy?: string
  /** Ambient joins and leaves, to exercise the grid re-solving. */
  churnEveryMs?: number
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

const fromAttendee = (attendee: MockAttendee, index: number): MockPerson => {
  const [firstName = attendee.name, ...rest] = attendee.name.split(" ")
  return {
    id: attendee.id,
    firstName,
    lastName: rest.join(" "),
    avatar: attendee.avatar,
    // A real room is a mix: not everyone joins with the camera on.
    camera: index % 3 !== 1,
    muted: index % 4 === 3,
  }
}

/**
 * Builds a room from people a host already has — the members of a conversation,
 * say. This is what a huddle actually is: the same group, in a call.
 */
export const seedFromAttendees = ({
  roomId,
  title,
  me,
  attendees,
  ...rest
}: {
  roomId: string
  title: string
  me: MockAttendee
  attendees: MockAttendee[]
} & Partial<
  Omit<MockMeetingSeed, "room" | "me" | "others">
>): MockMeetingSeed => ({
  room: {
    id: roomId,
    title,
    startedAt: new Date().toISOString(),
  },
  me: { ...fromAttendee(me, 0), camera: false, muted: false },
  others: attendees
    .filter((attendee) => attendee.id !== me.id)
    .map(fromAttendee),
  videoSource: "echo",
  audio: true,
  seed: 7,
  ...rest,
})

export const soloSeed = seed("Huddle · Design", 0)
export const oneToOneSeed = seed("Huddle · Marta", 1)
export const sixPeopleSeed = seed("Huddle · Design", 5)
export const twelvePeopleSeed = seed("Weekly sync", 11)
export const thirtyPeopleSeed = seed("All hands", 29)
export const screenShareSeed = seed("Huddle · Design", 5, {
  screenShareBy: "p1",
})
