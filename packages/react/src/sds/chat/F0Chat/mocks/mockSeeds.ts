import { type AvatarVariant } from "@/components/avatars/F0Avatar"
import { BellOff } from "@/icons/app"
import { mockImage } from "@/testing/mocks/images"

import {
  isUserMessage,
  type F0ChatAttachment,
  type F0ChatChannelStatus,
  type F0ChatItem,
  type F0ChatLinkPreview,
  type F0ChatMessageStatus,
  type F0ChatMention,
  type F0ChatReaction,
  type F0ChatSenderColor,
  type F0ChatSystemEvent,
  type F0ChatUser,
} from "../types"
import { MOCK_VIDEO_CAPTIONS, MOCK_VIDEO_DESCRIPTIONS } from "./constants"

// ---------------------------------------------------------------------------
// People
// ---------------------------------------------------------------------------

/** A mock participant. `online` gates replies (offline people never respond);
 * `vacation` shows the "on vacation" affordance independently of presence. */
export type MockPerson = F0ChatUser & {
  avatar: AvatarVariant
  online: boolean
  vacation?: boolean
}

const PHOTO_AVATAR_COLORS = [
  "viridian",
  "orange",
  "malibu",
  "barbie",
  "purple",
  "army",
  "flubber",
  "camel",
] as const satisfies readonly F0ChatSenderColor[]

const person = (
  id: string,
  firstName: string,
  lastName: string,
  subtitle: string,
  // `image` (index into the mock photo set) gives a photo avatar; omit it to use
  // the initials + colour avatar — the mock mixes both on purpose.
  opts: {
    online?: boolean
    vacation?: boolean
    image?: number
    avatarColor?: F0ChatSenderColor
  } = {}
): MockPerson =>
  ({
    id,
    name: `${firstName} ${lastName}`,
    subtitle,
    avatar: {
      type: "person",
      firstName,
      lastName,
      ...(opts.image !== undefined
        ? { src: mockImage("person", opts.image) }
        : {}),
    },
    ...(opts.avatarColor
      ? { avatarColor: opts.avatarColor }
      : opts.image !== undefined
        ? {
            avatarColor:
              PHOTO_AVATAR_COLORS[opts.image % PHOTO_AVATAR_COLORS.length],
          }
        : {}),
    profileHref: `/people/${id}`,
    online: opts.online ?? false,
    vacation: opts.vacation,
  })

// A deliberate mix: some people have a photo (`image`), others fall back to the
// initials + colour avatar (and their name is tinted to match — WhatsApp-style).
export const ME = person("me", "Jordan", "Avery", "Product Manager", {
  online: true,
  image: 4,
})
// Online people reply when you message them; offline people never do.
const ELEANOR = person(
  "u_eleanor",
  "Eleanor",
  "Whitfield",
  "Senior Product Designer",
  { online: true, image: 0 }
)
const MARCUS = person("u_marcus", "Marcus", "Bennett", "Engineering Manager", {
  online: true,
  image: 1,
})
const PRIYA = person("u_priya", "Priya", "Raman", "Account Executive", {
  online: true,
  vacation: true,
  image: 2,
})
// No photo — initials + colour avatar.
const THEO = person("u_theo", "Theo", "Lindqvist", "On vacation until Monday", {
  vacation: true,
})
const NADIA = person("u_nadia", "Nadia", "Costa", "Recruiter")
const OWEN = person("u_owen", "Owen", "Carter", "Finance Analyst", {
  online: true,
  image: 3,
})
const HARPER = person("u_harper", "Harper", "Quinn", "Customer Success", {
  online: true,
  image: 7,
})
// No photo — initials + colour avatar.
const GRACE = person("u_grace", "Grace", "Liang", "Data Analyst", {
  online: true,
})
const SAM = person("u_sam", "Sam", "Okafor", "Frontend Engineer", {
  online: true,
  image: 5,
})
const NOAH = person("u_noah", "Noah", "Bergström", "QA Engineer")
const ISLA = person("u_isla", "Isla", "Romano", "Content Strategist", {
  online: true,
  image: 6,
})
// No photo — initials + colour avatar.
const VIKTOR = person("u_viktor", "Viktor", "Hale", "Staff Engineer")

/** Extra members for the large read-receipt demo. Together with the named
 * participants, they make every Quarterly Reporting message expose 45 readers
 * so the message-info list has a realistic overflow state. */
const RECEIPT_DEMO_READERS = Array.from({ length: 42 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0")
  return person(
    `u_receipt_demo_${number}`,
    "Demo",
    `Reader ${number}`,
    "Quarterly Reporting member"
  )
})

// ---------------------------------------------------------------------------
// Seeds — every conversation is deliberately different (empty, short, long,
// DMs and multi-person groups with topical messages).
// ---------------------------------------------------------------------------

type MessageLine = {
  from: F0ChatUser
  body: string
  min: number
  /** Index of an earlier line in the same seed this message replies to. */
  replyToIndex?: number
  /** People mentioned in the body (groups). */
  mentions?: F0ChatMention[]
  /** Whether the line mentions the whole group (`@here`). */
  mentionedEveryone?: boolean
  /** Open Graph cards for the URLs in the body (link preview demo). */
  linkPreviews?: F0ChatLinkPreview[]
  /** Attachments (images, files, shared locations) for the media demos. */
  attachments?: F0ChatAttachment[]
  /** Group members who read this message. */
  readBy?: F0ChatUser[]
  /** Reactions shown under the message. */
  reactions?: F0ChatReaction[]
  /** Delivery state override for outgoing-message fixtures. */
  status?: F0ChatMessageStatus
  /** Host-provided explanation for a failed outgoing message. */
  failureReason?: string
  /** Count-only read receipt for hosts without reader identities. */
  readByCount?: number
  /** Soft-deleted tombstone fixture. */
  deleted?: boolean
  /** Marks the message as edited shortly after it was sent. */
  edited?: boolean
}

/** A membership event in the transcript — becomes a centered system row. */
type SystemLine = {
  system: { event: F0ChatSystemEvent; members: MockPerson[] }
  min: number
}

type Line = MessageLine | SystemLine

const isSystemLine = (line: Line): line is SystemLine => "system" in line

export type Seed = {
  id: string
  type: "dm" | "group"
  title: string
  avatar: AvatarVariant
  presence?: "online" | "offline"
  /** Channel statuses shown consistently in the header and sidebar. */
  statuses?: F0ChatChannelStatus[]
  /** Demo: starts in the "Pinned" sidebar group (favourited). */
  pinned?: boolean
  participants: MockPerson[]
  lines: Line[]
  /** Trailing incoming messages that start unread. */
  unread?: number
  olderPages?: number
  /** Demo: the first participant types non-stop (sidebar "Writing…" + dots bubble). */
  alwaysTyping?: boolean
  /** Demo (groups): a random group of >1 people type before each reply. */
  multiTyping?: boolean
  /** Demo: read-only channel — `capabilities` hide the composer, reactions and
   * uploads (frozen/announcements channel). */
  readOnly?: boolean
  /** Demo: the conversation fails to load (error state + Retry via `reconnect`). */
  failsToLoad?: boolean
  /**
   * Demo: my role in this channel — drives which header actions the mock host
   * offers, mirroring how a real host derives them from its permissions:
   * "admin" → pin/mute + Edit group; "member" (default) → pin/mute;
   * "guest" → nothing beyond the built-in search.
   */
  myRole?: "admin" | "member" | "guest"
}

/** Group avatar data: an explicit emoji when one is given; otherwise a
 * name-derived company avatar that chat surfaces replace with the ＃ fallback. */
const groupAvatar = (name: string, emoji?: string): AvatarVariant =>
  emoji ? { type: "emoji", emoji } : { type: "company", name }

// Time helpers for readable timestamps (minutes ago).
const MIN = 1
const HOUR = 60
const DAY = 24 * HOUR
const MONTH = 30 * DAY

// Pool of short, varied lines for a busy group transcript (the big-unread demo).
const BUSY_LINES = [
  "Morning all — opening checklist done ✅",
  "Tienda Centro is fully staffed today",
  "Heads up: delivery window moved to 11:00",
  "Can someone cover the 2pm break rotation?",
  "Stock count for aisle 4 is off by 3 units",
  "Fixed it — was a mislabelled return",
  "Customer footfall is way up vs last week 📈",
  "POS terminal 2 needed a restart, all good now",
  "Reminder: new returns policy starts Monday",
  "Who has the key for the back storeroom?",
  "I do — leaving it with the duty manager",
  "Promo signage is up in the front window",
  "Two no-shows for the afternoon shift 😕",
  "Pulling someone from Tienda Norte to cover",
  "Thanks team, crisis averted 🙌",
  "End-of-day cash reconciliation matches",
]

/** Builds a long group transcript (oldest→newest), authors rotating through the
 * participants, for the large-unread scroll demo. */
const manyGroupLines = (people: MockPerson[], count: number): Line[] =>
  Array.from({ length: count }, (_, i) => ({
    from: people[i % people.length],
    body: BUSY_LINES[i % BUSY_LINES.length],
    // Newest last (smallest `min`); ~12 min apart so it spans a few hours.
    min: Math.max(1 * MIN, (count - i) * 12 * MIN),
  }))

const EVERYTHING_STRESS_PARTICIPANTS = [
  ELEANOR,
  MARCUS,
  PRIYA,
  THEO,
  NADIA,
  OWEN,
  HARPER,
  GRACE,
  SAM,
  NOAH,
  ISLA,
  VIKTOR,
]

const EVERYTHING_STRESS_HISTORY_COUNT = 320

const EVERYTHING_STRESS_COPY = [
  "Opening the daily thread with the overnight metrics ✅",
  "The rollout is still healthy across every region",
  "Can someone double-check the mobile dashboard before standup?",
  "I compared it with yesterday and the totals line up",
  "The accessibility pass found two labels we should improve",
  "I have added both fixes to the release checklist",
  "Customer feedback is especially positive on the faster search",
  "One edge case remains when a very long name wraps onto three lines",
  "I will add it to the visual regression matrix",
  "The data import finished successfully for all offices 🎉",
  "Reminder: the deploy window closes at 17:00 Barcelona time",
  "Everything is documented in the handoff notes",
]

/**
 * A deliberately excessive transcript for profiling ApplicationFrame with a
 * cold module cache. The oldest block provides hundreds of variable-height
 * rows; the middle block concentrates every rich message shape; the newest
 * block stays text-only so the first transcript paint is measurable before a
 * user scrolls into the heavy previews.
 */
const everythingStressLines = (): Line[] => {
  const history: Line[] = Array.from(
    { length: EVERYTHING_STRESS_HISTORY_COUNT },
    (_, index) => {
      const author =
        index % 13 === 5
          ? EVERYTHING_STRESS_PARTICIPANTS[(index - 1) % 12]
          : EVERYTHING_STRESS_PARTICIPANTS[index % 12]
      const line: MessageLine = {
        from: author,
        body:
          index % 19 === 0
            ? `${EVERYTHING_STRESS_COPY[index % EVERYTHING_STRESS_COPY.length]}\n\nThis deliberately wraps onto several lines so variable-height measurement is exercised at every point in the year-long history.`
            : EVERYTHING_STRESS_COPY[index % EVERYTHING_STRESS_COPY.length],
        min: (EVERYTHING_STRESS_HISTORY_COUNT - index + 10) * DAY,
      }

      if (index > 8 && index % 29 === 0) {
        line.replyToIndex = index - 7
      }
      if (index % 37 === 0) {
        line.reactions = [
          {
            emoji: index % 74 === 0 ? "🎉" : "👍",
            count: 3,
            reactedByMe: index % 74 === 0,
            users: [ELEANOR, MARCUS, GRACE],
          },
        ]
      }
      if (index % 53 === 0) {
        line.body = `@${ME.name} ${line.body}`
        line.mentions = [
          {
            id: ME.id,
            name: ME.name,
            avatar: ME.avatar,
            subtitle: ME.subtitle,
            profileHref: ME.profileHref,
          },
        ]
      }

      return line
    }
  )

  let min = 10 * DAY
  const rich: Line[] = []
  const add = (
    line: Omit<MessageLine, "min"> | Omit<SystemLine, "min">,
    gap = 6 * HOUR
  ) => {
    if ("system" in line) {
      rich.push({ system: line.system, min })
    } else {
      rich.push({ ...line, min })
    }
    min -= gap
  }

  add({
    system: {
      event: "member.added",
      members: [ELEANOR, MARCUS, PRIYA, THEO, NADIA, OWEN],
    },
  })
  add({
    from: ELEANOR,
    body: "A single image with explicit intrinsic dimensions",
    attachments: [
      {
        kind: "image",
        url: mockImage("card", 0),
        thumbnailUrl: mockImage("card", 0),
        name: "dashboard-overview.webp",
        mimeType: "image/webp",
        width: 1200,
        height: 800,
      },
    ],
  })
  add({
    from: MARCUS,
    body: "A four-image gallery with mixed aspect ratios",
    attachments: [
      {
        kind: "image",
        url: mockImage("card", 1),
        name: "office-portrait.webp",
        width: 800,
        height: 1200,
      },
      {
        kind: "image",
        url: mockImage("card", 2),
        name: "office-landscape.webp",
        width: 1600,
        height: 900,
      },
      {
        kind: "image",
        url: mockImage("card", 3),
        name: "analytics-square.webp",
        width: 1000,
        height: 1000,
      },
      {
        kind: "image",
        url: mockImage("card", 4),
        name: "team-landscape.webp",
        width: 1400,
        height: 900,
      },
    ],
  })
  add({
    from: PRIYA,
    body: "Meet beside the main entrance",
    attachments: [
      {
        kind: "location",
        latitude: 41.3894,
        longitude: 2.1607,
        name: "Factorial HQ — Barcelona",
      },
    ],
  })
  add({
    from: THEO,
    body: "",
    attachments: [
      {
        kind: "voice",
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
        durationSeconds: 3,
        mimeType: "audio/mpeg",
        name: "voice-note.mp3",
      },
    ],
  })
  add({
    from: NADIA,
    body: "PDF preview with a stable outer frame",
    attachments: [
      {
        kind: "file",
        url: "/f0-pdf-viewer-sample.pdf",
        name: "extremely-long-report.pdf",
        mimeType: "application/pdf",
        size: 2_048_000,
      },
    ],
  })
  add({
    from: OWEN,
    body: "Spreadsheet previews in both supported formats",
    attachments: [
      {
        kind: "file",
        url: "/f0-document-sample.xlsx",
        name: "annual-model.xlsx",
        mimeType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
      {
        kind: "file",
        url: "/f0-document-sample.csv",
        name: "all-offices.csv",
        mimeType: "text/csv",
      },
    ],
  })
  add({
    from: HARPER,
    body: "Word, Markdown and plain-text document previews",
    attachments: [
      {
        kind: "file",
        url: "/f0-document-sample.docx",
        name: "customer-handoff.docx",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      },
      {
        kind: "file",
        url: "/f0-document-sample.md",
        name: "release-notes.md",
        mimeType: "text/markdown",
      },
      {
        kind: "file",
        url: "/f0-document-sample.txt",
        name: "worker-output.txt",
        mimeType: "text/plain",
      },
    ],
  })
  add({
    from: GRACE,
    body: "Two videos exercise serialized cold-start initialization",
    attachments: [
      {
        kind: "file",
        url: "/Big_Buck_Bunny_alt.webm",
        name: "product-walkthrough.webm",
        mimeType: "video/webm",
        thumbnailUrl: "/video-poster.webp",
        videoContent: {
          captions: MOCK_VIDEO_CAPTIONS,
          descriptions: MOCK_VIDEO_DESCRIPTIONS,
        },
      },
      {
        kind: "file",
        url: "/Big_Buck_Bunny_alt.webm",
        name: "accessibility-review.webm",
        mimeType: "video/webm",
        thumbnailUrl: "/video-poster.webp",
        videoSilent: true,
      },
    ],
  })
  add({
    from: SAM,
    body: "A generic download and an upload still in progress",
    attachments: [
      {
        kind: "file",
        url: "#",
        name: "launch-deck.pptx",
        mimeType:
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        size: 8_388_608,
      },
      {
        kind: "file",
        url: "#",
        name: "archive-upload.zip",
        mimeType: "application/zip",
        size: 24_000_000,
        progress: 63,
      },
    ],
  })
  const attachmentMessageIndex = history.length + rich.length - 1
  add({
    from: NOAH,
    body: "Replying to the attachment bundle above",
    replyToIndex: attachmentMessageIndex,
  })
  add({
    from: ISLA,
    body: "The complete handbook is here: https://handbook.example.com/product",
    linkPreviews: [
      {
        url: "https://handbook.example.com/product",
        title: "Product handbook — end-to-end guide",
        description:
          "Planning, delivery, quality, analytics and release processes in one place.",
        imageUrl: mockImage("card", 5),
      },
    ],
  })
  add({
    from: VIKTOR,
    body: "Two compact unfurls: https://status.example.com and https://metrics.example.com",
    linkPreviews: [
      {
        url: "https://status.example.com",
        title: "Platform status",
        description: "All systems operational.",
      },
      {
        url: "https://metrics.example.com",
        title: "Release metrics",
        description: "Cold start, interaction and rendering measurements.",
      },
    ],
  })
  add({
    from: ME,
    body: "This outgoing message is still sending",
    status: "sending",
  })
  add({
    from: ME,
    body: "This outgoing message reached the server",
    status: "sent",
  })
  add({
    from: ME,
    body: "This outgoing message reached every device",
    status: "delivered",
  })
  add({
    from: ME,
    body: "This outgoing message has been read",
    status: "read",
    readBy: [ELEANOR, MARCUS, GRACE, ...RECEIPT_DEMO_READERS],
  })
  add({
    from: ME,
    body: "This message intentionally demonstrates a failed send",
    status: "failed",
    failureReason: "Simulated network error for the stress fixture",
  })
  add({
    from: MARCUS,
    body: "This text was refined after posting",
    edited: true,
    reactions: [
      {
        emoji: "❤️",
        count: 5,
        reactedByMe: true,
        users: [ME, ELEANOR, PRIYA, GRACE, SAM],
      },
      {
        emoji: "🚀",
        count: 2,
        reactedByMe: false,
        users: [NOAH, VIKTOR],
      },
    ],
  })
  add({
    from: PRIYA,
    body: "This content is replaced by the deleted-message tombstone",
    deleted: true,
  })
  add({
    from: GRACE,
    body: `@${ME.name} please verify this direct mention before release`,
    mentions: [
      {
        id: ME.id,
        name: ME.name,
        avatar: ME.avatar,
        subtitle: ME.subtitle,
        profileHref: ME.profileHref,
      },
    ],
  })
  add({
    from: SAM,
    body: "@here the stress fixture is ready for profiling",
    mentionedEveryone: true,
    readBy: [],
    readByCount: 57,
  })
  add({
    system: { event: "member.removed", members: [THEO, NADIA] },
  })
  add({ system: { event: "member.left", members: [OWEN] } })

  const recent = Array.from(
    { length: 40 },
    (_, index): Line => ({
      from: EVERYTHING_STRESS_PARTICIPANTS[index % 12],
      body:
        index % 9 === 0
          ? `Recent unread checkpoint ${index + 1}\nThis wraps to keep the initial viewport representative without loading a preview.`
          : `Recent unread checkpoint ${index + 1} — lightweight transcript content`,
      min: Math.max(5 * MIN, (40 - index) * 2 * HOUR),
      ...(index === 11
        ? {
            reactions: [
              {
                emoji: "👀",
                count: 4,
                reactedByMe: false,
                users: [ELEANOR, MARCUS, PRIYA, GRACE],
              },
            ],
          }
        : {}),
    })
  )

  return [...history, ...rich, ...recent]
}

export const SEEDS: Seed[] = [
  // DM — always typing (online): sidebar "Writing…" + a dots bubble, non-stop.
  {
    id: "dm-eleanor",
    type: "dm",
    title: ELEANOR.name,
    avatar: ELEANOR.avatar,
    presence: "online",
    participants: [ELEANOR],
    unread: 1,
    alwaysTyping: true,
    lines: [
      { from: ME, body: "Hey Eleanor! Got 10 minutes today?", min: 2 * HOUR },
      {
        from: ELEANOR,
        body: "Sure — right after standup works",
        min: 115 * MIN,
      },
      {
        from: ME,
        body: "Perfect, sending an invite now.",
        min: 110 * MIN,
        replyToIndex: 1,
      },
      {
        from: ELEANOR,
        body: "Just dropped the new mocks in Figma 🙌",
        min: 18 * MIN,
      },
      // A shared location — renders the map preview card (opens Google Maps).
      {
        from: ELEANOR,
        body: "I'm here, come find me!",
        min: 12 * MIN,
        attachments: [
          {
            kind: "location",
            latitude: 41.3894,
            longitude: 2.1607,
            name: "Factorial HQ — Barcelona",
          },
        ],
      },
      // A voice note — renders the audio player with speed control (0.5×–2×).
      {
        from: ELEANOR,
        body: "",
        min: 10 * MIN,
        attachments: [
          {
            kind: "voice",
            url: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
            durationSeconds: 3,
            mimeType: "audio/mpeg",
            name: "voice-note.mp3",
          },
        ],
      },
    ],
  },
  // DM — online, longer history spanning weeks (responds when messaged).
  {
    id: "dm-marcus",
    type: "dm",
    title: MARCUS.name,
    avatar: MARCUS.avatar,
    presence: "online",
    pinned: true,
    participants: [MARCUS],
    olderPages: 2,
    lines: [
      {
        from: MARCUS,
        body: "Welcome to the team! Excited to work together 🎉",
        min: 21 * DAY,
      },
      { from: ME, body: "Thanks Marcus! Happy to be here.", min: 21 * DAY - 5 },
      { from: MARCUS, body: "Did the deploy go out?", min: 3 * DAY },
      {
        from: ME,
        body: "Yep, rolling out to 10% now",
        min: 3 * DAY - 4,
        replyToIndex: 2,
      },
      {
        from: MARCUS,
        body: "Nice, error rate looks flat 👌",
        min: 3 * DAY - 8,
      },
      {
        from: MARCUS,
        body: "Could you review the CI flake when you get a sec?",
        min: 40 * MIN,
      },
      { from: MARCUS, body: "No rush — before EOD is fine", min: 38 * MIN },
      // A message with a link — renders the full Open Graph card (with image).
      {
        from: MARCUS,
        body: "Context is in the handbook: https://handbook.example.com/ci/flaky-tests",
        min: 36 * MIN,
        linkPreviews: [
          {
            url: "https://handbook.example.com/ci/flaky-tests",
            title: "Dealing with flaky tests — Engineering Handbook",
            description:
              "How we detect, quarantine and fix flaky tests across the CI pipeline, including the retry budget policy.",
            imageUrl: mockImage("card", 2),
          },
        ],
      },
      // Two links in one message — compact Slack-style unfurls (titles, no images).
      {
        from: ME,
        body: "Comparing both dashboards: https://grafana.example.com/d/ci and https://status.example.com/incidents",
        min: 30 * MIN,
        linkPreviews: [
          {
            url: "https://grafana.example.com/d/ci",
            title: "CI pipeline health — Grafana",
            description: "Build durations, flake rate and queue times.",
            imageUrl: mockImage("card", 0),
          },
          {
            url: "https://status.example.com/incidents",
            title: "Status page — incident history",
            description: "Past incidents and current component status.",
          },
        ],
      },
    ],
  },
  // DM — vacation + muted + online + unread: showcases all states together.
  {
    id: "dm-priya",
    type: "dm",
    title: PRIYA.name,
    avatar: PRIYA.avatar,
    presence: "online",
    statuses: [{ icon: BellOff, label: "Muted" }],
    participants: [PRIYA],
    unread: 4,
    lines: [
      {
        from: ME,
        body: "Renewal deck is ready whenever you are",
        min: 5 * HOUR,
      },
      { from: PRIYA, body: "Amazing, thank you!", min: 2 * HOUR },
      { from: PRIYA, body: "Client moved the call to Thursday", min: 41 * MIN },
      { from: PRIYA, body: "Can we add the pricing slide?", min: 39 * MIN },
      {
        from: PRIYA,
        body: "And maybe last quarter's case study",
        min: 38 * MIN,
      },
      { from: PRIYA, body: "🙏", min: 37 * MIN },
    ],
  },
  // DM — on vacation (offline): palm-tree status, never replies.
  {
    id: "dm-theo",
    type: "dm",
    title: THEO.name,
    avatar: THEO.avatar,
    presence: "offline",
    participants: [THEO],
    lines: [
      {
        from: THEO,
        body: "Heading off for two weeks — back on Monday the 14th 🌴",
        min: 6 * DAY,
      },
      { from: ME, body: "Enjoy! We'll hold the fort.", min: 6 * DAY - 3 },
      {
        from: ME,
        body: "When you're back, let's pair on the cache layer.",
        min: 2 * DAY,
      },
    ],
  },
  // DM — offline (never replies): some unread messages waiting.
  {
    id: "dm-nadia",
    type: "dm",
    title: NADIA.name,
    avatar: NADIA.avatar,
    presence: "offline",
    participants: [NADIA],
    unread: 2,
    lines: [
      {
        from: NADIA,
        body: "Two strong candidates for the design role",
        min: 9 * HOUR,
      },
      { from: NADIA, body: "Sent the profiles to your inbox", min: 8 * HOUR },
    ],
  },
  // DM — online, short.
  {
    id: "dm-owen",
    type: "dm",
    title: OWEN.name,
    avatar: OWEN.avatar,
    presence: "online",
    participants: [OWEN],
    lines: [
      { from: OWEN, body: "Expense report approved ✅", min: 3 * DAY },
      { from: ME, body: "Thanks Owen!", min: 3 * DAY - 2 },
    ],
  },
  // DM — empty (exercises the empty state).
  {
    id: "dm-harper",
    type: "dm",
    title: HARPER.name,
    avatar: HARPER.avatar,
    presence: "online",
    participants: [HARPER],
    lines: [],
  },
  // GROUP — extensive, months of history, mixed online/offline members, with
  // membership system rows (people added / leaving) woven into the transcript.
  // I'm the admin here → the demo host offers the Edit group header action.
  {
    id: "grp-product",
    type: "group",
    title: "Product Team",
    avatar: groupAvatar("Product Team", "🚀"),
    pinned: true,
    participants: [MARCUS, GRACE, NOAH, SAM],
    unread: 2,
    olderPages: 3,
    multiTyping: true,
    myRole: "admin",
    lines: [
      {
        from: MARCUS,
        body: "Kicking off the Q1 planning thread 🧵",
        min: 3 * MONTH,
      },
      // The founding batch joins right after the kickoff — a multi-person
      // "were added" system row at the top of the group's history.
      {
        system: { event: "member.added", members: [GRACE, NOAH, SAM] },
        min: 3 * MONTH - 5,
      },
      {
        from: GRACE,
        body: "I'll pull the usage numbers from last quarter",
        min: 3 * MONTH - 20,
      },
      {
        from: SAM,
        body: "Adding the perf budget doc here for reference",
        min: 3 * MONTH - 60,
      },
      {
        from: ME,
        body: "Great start everyone. Let's lock scope by Friday.",
        min: 2 * MONTH,
      },
      {
        from: NOAH,
        body: "QA sign-off checklist is updated for the new flow",
        min: 2 * MONTH - 30,
      },
      // Isla passes through the group: added for the dashboard review…
      {
        system: { event: "member.added", members: [ISLA] },
        min: 6 * DAY,
      },
      {
        from: GRACE,
        body: "Dashboard adoption is up 18% month over month 📈",
        min: 5 * DAY,
      },
      {
        from: ME,
        body: "Love that. Can we slice it by plan tier?",
        min: 5 * DAY - 5,
        replyToIndex: 7,
      },
      {
        from: GRACE,
        body: "On it — will share by tomorrow",
        min: 5 * DAY - 10,
      },
      // …and leaves once the review wraps.
      {
        system: { event: "member.left", members: [ISLA] },
        min: 3 * DAY,
      },
      {
        from: MARCUS,
        body: "Reminder: deploy freeze Friday afternoon for the release train",
        min: 2 * DAY,
      },
      {
        from: SAM,
        body: "Merging my PR before the freeze then 🙏",
        min: 2 * DAY - 15,
        replyToIndex: 11,
      },
      // A run of consecutive messages from the same author (Noah) — the bubbles
      // chain (tucked-in corners) and, in a group, only the last one shows the
      // avatar.
      {
        from: NOAH,
        body: "Quick update on the QA pass 👇",
        min: 1 * DAY,
      },
      {
        from: NOAH,
        body: "All the critical flows are green ✅",
        min: 1 * DAY - 1,
      },
      {
        from: NOAH,
        body: "Just a few minor visual nits left — filing them now",
        min: 1 * DAY - 2,
      },
      {
        from: GRACE,
        body: "Analytics dashboard will be ready for Monday's demo",
        min: 90 * MIN,
      },
      { from: MARCUS, body: "Perfect, thanks all 🙌", min: 20 * MIN },
      // A mention of someone else (read) — hovering the @chip opens Grace's
      // profile card, the same affordance as hovering her avatar.
      {
        from: ME,
        body: `Thanks @${GRACE.name}, ping me when the dashboard is live`,
        min: 18 * MIN,
        mentions: [
          {
            id: GRACE.id,
            name: GRACE.name,
            avatar: GRACE.avatar,
            subtitle: GRACE.subtitle,
            profileHref: GRACE.profileHref,
          },
        ],
      },
      // The two trailing (unread) messages mention you and the whole group, so
      // the sidebar shows an `@2` badge and the bubbles get the self-emphasis.
      {
        from: GRACE,
        body: `@${ME.name} can you sign off on the Q1 scope today?`,
        min: 15 * MIN,
        mentions: [
          {
            id: ME.id,
            name: ME.name,
            avatar: ME.avatar,
            subtitle: ME.subtitle,
            profileHref: ME.profileHref,
          },
        ],
      },
      {
        from: MARCUS,
        body: "@here deploy freeze starts in 30 minutes ❄️",
        min: 8 * MIN,
        mentionedEveryone: true,
      },
    ],
  },
  // GROUP — document attachments of every previewable kind (pdf, xlsx, csv,
  // docx, md, txt), two inline videos in one message, and a non-previewable deck
  // that stays a plain chip. The sample files live in `public/`.
  {
    id: "grp-reporting",
    type: "group",
    title: "Quarterly Reporting",
    avatar: groupAvatar("Quarterly Reporting"),
    participants: [GRACE, MARCUS, SAM, ...RECEIPT_DEMO_READERS],
    lines: [
      {
        from: GRACE,
        body: "Quarterly report is final, please give it a last read 📄",
        min: 3 * HOUR,
        attachments: [
          {
            kind: "file",
            url: "/f0-pdf-viewer-sample.pdf",
            name: "quarterly-report.pdf",
            mimeType: "application/pdf",
          },
        ],
      },
      {
        from: ME,
        body: "Looks great. Attaching the raw data behind the charts",
        min: 2 * HOUR,
        attachments: [
          {
            kind: "file",
            url: "/f0-document-sample.xlsx",
            name: "raw-data.xlsx",
            mimeType:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
          {
            kind: "file",
            url: "/f0-document-sample.csv",
            name: "offices.csv",
            mimeType: "text/csv",
          },
        ],
      },
      {
        from: MARCUS,
        body: "Offer draft + release notes for the announcement",
        min: 80 * MIN,
        attachments: [
          {
            kind: "file",
            url: "/f0-document-sample.docx",
            name: "offer-letter.docx",
            mimeType:
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          },
          {
            kind: "file",
            url: "/f0-document-sample.md",
            name: "RELEASE-NOTES.md",
            mimeType: "text/markdown",
          },
        ],
      },
      {
        from: SAM,
        body: "Worker log from the failed import, for whoever debugs it",
        min: 45 * MIN,
        attachments: [
          {
            kind: "file",
            url: "/f0-document-sample.txt",
            name: "worker.log",
            mimeType: "text/plain",
          },
        ],
      },
      {
        from: ME,
        body: "And the kickoff deck — plus two walkthrough videos",
        min: 10 * MIN,
        reactions: [
          {
            emoji: "🎉",
            count: 3,
            reactedByMe: false,
            users: [GRACE, MARCUS, SAM],
          },
        ],
        attachments: [
          {
            kind: "file",
            url: "/Big_Buck_Bunny_alt.webm",
            name: "quarterly-walkthrough.webm",
            mimeType: "video/webm",
            thumbnailUrl: "/video-poster.webp",
            videoContent: {
              captions: MOCK_VIDEO_CAPTIONS,
              descriptions: MOCK_VIDEO_DESCRIPTIONS,
            },
          },
          {
            kind: "file",
            url: "/Big_Buck_Bunny_alt.webm",
            name: "chart-deep-dive.webm",
            mimeType: "video/webm",
            thumbnailUrl: "/video-poster.webp",
            videoContent: {
              captions: MOCK_VIDEO_CAPTIONS,
              descriptions: MOCK_VIDEO_DESCRIPTIONS,
            },
          },
          {
            kind: "file",
            url: "#",
            name: "kickoff-deck.pptx",
            mimeType: "application/vnd.ms-powerpoint",
          },
        ],
      },
    ],
  },
  // GROUP — the intentionally excessive ApplicationFrame profiling fixture.
  // It combines a year-long transcript with every rich message shape and ten
  // additional history pages while keeping the initial unread window light.
  {
    id: "grp-everything-stress",
    type: "group",
    title: "Everything Chat — Stress Test",
    avatar: groupAvatar("Everything Chat — Stress Test", "🧪"),
    statuses: [{ icon: BellOff, label: "Muted" }],
    pinned: true,
    participants: EVERYTHING_STRESS_PARTICIPANTS,
    lines: everythingStressLines(),
    unread: 40,
    olderPages: 10,
    alwaysTyping: true,
    multiTyping: true,
    myRole: "admin",
  },
  // GROUP — extensive, weeks/days of history.
  {
    id: "grp-design",
    type: "group",
    title: "Design Critique",
    avatar: groupAvatar("Design Critique", "🎨"),
    participants: [ELEANOR, ISLA, SAM, VIKTOR],
    olderPages: 2,
    multiTyping: true,
    lines: [
      {
        from: ELEANOR,
        body: "Posting v3 of the onboarding flow for critique",
        min: 12 * DAY,
      },
      {
        from: ISLA,
        body: "The empty states read much better now",
        min: 12 * DAY - 8,
      },
      // Viktor joins the critique before weighing in — his first message comes
      // right after his "was added" system row.
      {
        system: { event: "member.added", members: [VIKTOR] },
        min: 11 * DAY + 60,
      },
      {
        from: VIKTOR,
        body: "One concern: the CTA contrast on dark mode",
        min: 11 * DAY,
      },
      {
        from: ELEANOR,
        body: "Good catch — bumping it to AA",
        min: 11 * DAY - 30,
        replyToIndex: 3,
      },
      {
        from: SAM,
        body: "I can prototype the motion for the success screen",
        min: 4 * DAY,
      },
      {
        from: ME,
        body: "Yes please — keep it under 200ms",
        min: 4 * DAY - 6,
        replyToIndex: 5,
      },
      // An admin removed Noah from the critique — the "was removed" variant.
      {
        system: { event: "member.removed", members: [NOAH] },
        min: 2 * DAY,
      },
      { from: ISLA, body: "Copy is finalized in the doc 📝", min: 26 * HOUR },
      { from: ELEANOR, body: "Shipping the handoff today ✨", min: 45 * MIN },
    ],
  },
  // GROUP — membership events: centered system rows ("X was added / left /
  // was removed"), including a 6-person add that demos the "+N" overflow tag.
  // I'm the admin here → the demo host offers the Edit group header action.
  {
    id: "grp-hiring",
    type: "group",
    title: "New Joiners — Q3",
    avatar: groupAvatar("New Joiners — Q3", "👋"),
    participants: [NADIA, HARPER, GRACE],
    myRole: "admin",
    multiTyping: true,
    lines: [
      {
        from: NADIA,
        body: "Kicking off the Q3 onboarding group — welcome everyone!",
        min: 6 * DAY,
      },
      {
        system: { event: "member.added", members: [HARPER, GRACE] },
        min: 6 * DAY - 10,
      },
      {
        from: HARPER,
        body: "Happy to help with the CS onboarding sessions 🙌",
        min: 6 * DAY - 20,
      },
      {
        system: {
          event: "member.added",
          members: [ELEANOR, MARCUS, PRIYA, THEO, OWEN, SAM],
        },
        min: 3 * DAY,
      },
      {
        from: GRACE,
        body: "Buddy assignments are in the doc, take a look",
        min: 2 * DAY,
      },
      { system: { event: "member.left", members: [THEO] }, min: 26 * HOUR },
      {
        system: { event: "member.removed", members: [PRIYA] },
        min: 4 * HOUR,
      },
      {
        from: NADIA,
        body: "First onboarding session is tomorrow at 10:00",
        min: 30 * MIN,
      },
    ],
  },
  // GROUP — heavy membership churn: big batched adds (beyond the tag list's
  // visual max → "+N" counter), people leaving in pairs, a removal and a
  // re-join, interleaved with regular messages. I'm the admin → Edit group.
  {
    id: "grp-offsite",
    type: "group",
    title: "Summer Offsite 2026",
    avatar: groupAvatar("Summer Offsite 2026", "🏝️"),
    participants: [HARPER, OWEN, ISLA],
    myRole: "admin",
    multiTyping: true,
    unread: 1,
    lines: [
      {
        from: OWEN,
        body: "Planning the summer offsite — adding everyone as travel gets confirmed ✈️",
        min: 10 * DAY,
      },
      {
        system: { event: "member.added", members: [HARPER, ISLA] },
        min: 10 * DAY - 5,
      },
      // A 7-person batch — more than the tag list shows, so it compacts into
      // the "+N" counter (hover it to see who's collapsed).
      {
        system: {
          event: "member.added",
          members: [ELEANOR, MARCUS, PRIYA, THEO, GRACE, SAM, NOAH],
        },
        min: 9 * DAY,
      },
      {
        from: HARPER,
        body: "Hotel block is booked — rooms assigned by Friday 🏨",
        min: 8 * DAY,
      },
      { system: { event: "member.left", members: [THEO] }, min: 7 * DAY },
      {
        system: { event: "member.added", members: [VIKTOR, NADIA] },
        min: 6 * DAY,
      },
      {
        from: ISLA,
        body: "Agenda draft is up — add your workshop proposals 📝",
        min: 5 * DAY,
      },
      // Two people drop out at once — a coalesced multi-person "left" row.
      {
        system: { event: "member.left", members: [PRIYA, GRACE] },
        min: 4 * DAY,
      },
      {
        from: OWEN,
        body: "Final headcount goes to the venue tomorrow",
        min: 3 * DAY,
      },
      { system: { event: "member.removed", members: [NOAH] }, min: 2 * DAY },
      // …and Grace re-joins once her travel is sorted.
      {
        system: { event: "member.added", members: [GRACE] },
        min: 26 * HOUR,
      },
      {
        from: HARPER,
        body: "Buses leave Monday 8:00 sharp 🚌",
        min: 40 * MIN,
      },
    ],
  },
  // GROUP — very few messages, still random multi-typing on reply.
  {
    id: "grp-release",
    type: "group",
    title: "Release War Room",
    avatar: groupAvatar("Release War Room"),
    participants: [MARCUS, GRACE],
    multiTyping: true,
    lines: [
      {
        from: MARCUS,
        body: "Release 4.2 is going out at 3pm 🚀",
        min: 90 * MIN,
      },
      { from: GRACE, body: "Monitoring dashboards are up", min: 80 * MIN },
    ],
  },
  // GROUP — long transcript with a big unread run: opens with the "new messages"
  // divider pinned to the top so you scroll down through ~26 unread.
  {
    id: "grp-ops",
    type: "group",
    title: "Store Ops — Daily",
    avatar: groupAvatar("Store Ops — Daily", "🛒"),
    participants: [MARCUS, GRACE, SAM, NOAH, ISLA],
    unread: 26,
    olderPages: 2,
    multiTyping: true,
    lines: manyGroupLines([MARCUS, GRACE, SAM, NOAH, ISLA], 32),
  },
  // GROUP — empty (exercises the empty state).
  {
    id: "grp-leadership",
    type: "group",
    title: "Leadership",
    // No emoji → company avatar built from the group name.
    avatar: groupAvatar("Leadership"),
    participants: [MARCUS, OWEN],
    lines: [],
  },
  // GROUP — read-only (capabilities demo): no composer, no reacting, no uploads.
  // Existing reactions still render (they're real data).
  {
    id: "grp-announcements",
    type: "group",
    title: "Announcements",
    avatar: groupAvatar("Announcements", "📣"),
    participants: [MARCUS, OWEN, GRACE],
    readOnly: true,
    // No permissions here: the demo host offers NO header actions — the
    // ellipsis menu holds only the built-in search.
    myRole: "guest",
    lines: [
      {
        from: MARCUS,
        body: "Offices close early this Friday for the summer party 🎉",
        min: 2 * DAY,
      },
      {
        from: OWEN,
        body: "Q2 results are out — great quarter everyone, thank you!",
        min: 5 * HOUR,
      },
      {
        from: MARCUS,
        body: "@here the new expense policy kicks in on Monday",
        min: 30 * MIN,
        mentionedEveryone: true,
      },
    ],
  },
  // DM — fails to load (connection-state demo): error state with a Retry
  // button (`reconnect`) that recovers after a short "reconnect".
  {
    id: "dm-viktor",
    type: "dm",
    title: VIKTOR.name,
    avatar: VIKTOR.avatar,
    presence: "offline",
    participants: [VIKTOR],
    failsToLoad: true,
    lines: [
      {
        from: VIKTOR,
        body: "Draft RFC is ready for a first pass",
        min: 26 * HOUR,
      },
      {
        from: ME,
        body: "Nice — I'll read it tomorrow morning.",
        min: 25 * HOUR,
      },
    ],
  },
]

export const SEED_BY_ID = new Map(SEEDS.map((s) => [s.id, s]))

export const REPLIES = [
  "Got it 👍",
  "Makes sense to me",
  "On it!",
  "Thanks for the heads up",
  "Let's do it",
]

// ---------------------------------------------------------------------------
// Conversation state model (pure helpers shared by the store + runtime)
// ---------------------------------------------------------------------------

export type ConvState = {
  messages: F0ChatItem[]
  lastReadId: string | null
  typingIds: string[]
}

let seq = 0
export const nextId = (): string => `m-${seq++}`

/** Reader identities for a group message in the ApplicationFrame mock. */
export const groupReadersFor = (
  seed: Seed | undefined,
  authorId: string
): F0ChatUser[] | undefined => {
  if (seed?.type !== "group") return undefined

  const uniqueParticipants = new Map(
    [...seed.participants, ME].map((participant) => [
      participant.id,
      participant,
    ])
  )
  uniqueParticipants.delete(authorId)
  return [...uniqueParticipants.values()]
}

const buildSeedMessages = (seed: Seed): F0ChatItem[] => {
  const built = seed.lines.map((line): F0ChatItem => {
    const sentMs = Date.now() - line.min * 60_000
    if (isSystemLine(line)) {
      return {
        type: "system",
        id: nextId(),
        createdAt: new Date(sentMs).toISOString(),
        system: line.system,
      }
    }
    const isMine = line.from.id === ME.id
    return {
      id: nextId(),
      author: line.from,
      body: line.body,
      createdAt: new Date(sentMs).toISOString(),
      isMine,
      status: line.status ?? (isMine ? "read" : undefined),
      failureReason: line.failureReason,
      // The other side read my messages shortly after they were sent (DM info).
      readAt:
        isMine && (line.status ?? "read") === "read"
          ? new Date(sentMs + 60_000).toISOString()
          : undefined,
      mentions: line.mentions,
      mentionedEveryone: line.mentionedEveryone,
      linkPreviews: line.linkPreviews,
      attachments: line.attachments,
      readBy: line.readBy ?? groupReadersFor(seed, line.from.id),
      readByCount: line.readByCount,
      reactions: line.reactions,
      deleted: line.deleted,
      editedAt: line.edited
        ? new Date(sentMs + 5 * 60_000).toISOString()
        : undefined,
    }
  })
  // Second pass: resolve reply references now that every message has an id.
  seed.lines.forEach((line, i) => {
    if (isSystemLine(line) || line.replyToIndex == null) return
    const target = built[line.replyToIndex]
    const source = built[i]
    if (target && isUserMessage(target) && isUserMessage(source)) {
      built[i] = {
        ...source,
        replyTo: {
          id: target.id,
          author: target.author,
          body: target.body,
          attachments: target.attachments,
        },
      }
    }
  })
  return built
}

/** Typing ids a conversation rests at — non-empty only for `alwaysTyping` demos. */
export const restingTypingIds = (seed: Seed | undefined): string[] =>
  seed?.alwaysTyping && seed.participants[0] ? [seed.participants[0].id] : []

/** A random 1–3 of the given participants, for the `multiTyping` reply demo. */
export const pickRandomTypers = (participants: MockPerson[]): MockPerson[] => {
  const shuffled = [...participants].sort(() => Math.random() - 0.5)
  const count = 1 + Math.floor(Math.random() * Math.min(3, participants.length))
  return shuffled.slice(0, count)
}

export const initialConvState = (seed: Seed): ConvState => {
  const messages = buildSeedMessages(seed)
  const unread = seed.unread ?? 0
  const lastReadId =
    unread > 0
      ? (messages[messages.length - 1 - unread]?.id ?? null)
      : (messages.at(-1)?.id ?? null)
  return { messages, lastReadId, typingIds: restingTypingIds(seed) }
}

export const unreadCountOf = (state: ConvState): number => {
  const idx = state.lastReadId
    ? state.messages.findIndex((m) => m.id === state.lastReadId)
    : -1
  return state.messages
    .slice(idx + 1)
    .filter((m) => isUserMessage(m) && !m.isMine).length
}

/** Unread messages that mention me (directly or via `@here`) — drives the
 * sidebar `@N` badge. Clears as the conversation is read, like the unread count. */
export const unreadMentionCountOf = (state: ConvState): number => {
  const idx = state.lastReadId
    ? state.messages.findIndex((m) => m.id === state.lastReadId)
    : -1
  return state.messages
    .slice(idx + 1)
    .filter(
      (m) =>
        isUserMessage(m) &&
        !m.isMine &&
        (m.mentionedEveryone ||
          (m.mentions ?? []).some((mention) => mention.id === ME.id))
    ).length
}

export const resolveUser = (seed: Seed, id: string): F0ChatUser =>
  id === ME.id
    ? ME
    : (seed.participants.find((p) => p.id === id) ?? {
        id,
        name: id,
      })
