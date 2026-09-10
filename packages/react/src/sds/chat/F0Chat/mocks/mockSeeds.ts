import { type AvatarVariant } from "@/components/avatars/F0Avatar"
import { BellOff, People } from "@/icons/app"
import { mockImage } from "@/testing/mocks/images"
import {
  isPost,
  isUserMessage,
  type F0ChatAttachment,
  type F0ChatChannelStatus,
  type F0ChatChannelType,
  type F0ChatItem,
  type F0ChatLinkPreview,
  type F0ChatMessageStatus,
  type F0ChatMention,
  type F0ChatPost,
  type F0ChatPostCommunity,
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

/**
 * Stand-in for the ~40px derivative a real host supplies as `blurUrl` (Stream
 * takes `?w=40&resize=clip` off the image URL). The mock images are static
 * files with no resizing service behind them, so this approximates one: a few
 * colour blocks that read correctly once blurred.
 */
const BLUR_PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="6">' +
      '<rect width="8" height="6" fill="#8fb8d8"/>' +
      '<rect x="3" width="5" height="4" fill="#c7d9e8"/>' +
      '<rect y="4" width="8" height="2" fill="#e8d9c0"/>' +
      "</svg>"
  )

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

type PersonSeed = {
  id: string
  firstName: string
  lastName: string
  subtitle: string
  online?: boolean
  vacation?: boolean
  // `image` (index into the mock photo set) gives a photo avatar; omit it to use
  // the initials + colour avatar — the mock mixes both on purpose.
  image?: number
  avatarColor?: F0ChatSenderColor
}

const person = ({
  id,
  firstName,
  lastName,
  subtitle,
  ...opts
}: PersonSeed): MockPerson => ({
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
export const ME = person({
  id: "me",
  firstName: "Jordan",
  lastName: "Avery",
  subtitle: "Product Manager",
  online: true,
  image: 4,
})
// Online people reply when you message them; offline people never do.
const ELEANOR = person({
  id: "u_eleanor",
  firstName: "Eleanor",
  lastName: "Whitfield",
  subtitle: "Senior Product Designer",
  online: true,
  image: 0,
})
const MARCUS = person({
  id: "u_marcus",
  firstName: "Marcus",
  lastName: "Bennett",
  subtitle: "Engineering Manager",
  online: true,
  image: 1,
})
const PRIYA = person({
  id: "u_priya",
  firstName: "Priya",
  lastName: "Raman",
  subtitle: "Account Executive",
  online: true,
  vacation: true,
  image: 2,
})
// No photo — initials + colour avatar.
const THEO = person({
  id: "u_theo",
  firstName: "Theo",
  lastName: "Lindqvist",
  subtitle: "On vacation until Monday",
  vacation: true,
})
const NADIA = person({
  id: "u_nadia",
  firstName: "Nadia",
  lastName: "Costa",
  subtitle: "Recruiter",
})
const OWEN = person({
  id: "u_owen",
  firstName: "Owen",
  lastName: "Carter",
  subtitle: "Finance Analyst",
  online: true,
  image: 3,
})
const HARPER = person({
  id: "u_harper",
  firstName: "Harper",
  lastName: "Quinn",
  subtitle: "Customer Success",
  online: true,
  image: 7,
})
// No photo — initials + colour avatar.
const GRACE = person({
  id: "u_grace",
  firstName: "Grace",
  lastName: "Liang",
  subtitle: "Data Analyst",
  online: true,
})
const SAM = person({
  id: "u_sam",
  firstName: "Sam",
  lastName: "Okafor",
  subtitle: "Frontend Engineer",
  online: true,
  image: 5,
})
const NOAH = person({
  id: "u_noah",
  firstName: "Noah",
  lastName: "Bergström",
  subtitle: "QA Engineer",
})
const ISLA = person({
  id: "u_isla",
  firstName: "Isla",
  lastName: "Romano",
  subtitle: "Content Strategist",
  online: true,
  image: 6,
})
// No photo — initials + colour avatar.
const VIKTOR = person({
  id: "u_viktor",
  firstName: "Viktor",
  lastName: "Hale",
  subtitle: "Staff Engineer",
})

/** The brand mark, the same one the ApplicationFrame sidebar shows. */
const FACTORIAL_AVATAR: AvatarVariant = {
  type: "company",
  name: "Factorial",
  src: "/avatars/factorial.png",
}

/**
 * The product itself, as the author of the announcement channel. Not a person:
 * a company avatar and an explicit `avatarColor` so the incoming bubble takes
 * the brand's own tint instead of a name hash.
 */
const FACTORIAL: MockPerson = {
  id: "factorial",
  name: "Factorial",
  avatar: FACTORIAL_AVATAR,
  avatarColor: "red",
  online: false,
}

/** Extra members for the large read-receipt demo. Together with the named
 * participants, they make every Quarterly Reporting message expose 45 readers
 * so the message-info list has a realistic overflow state. */
const RECEIPT_DEMO_READERS = Array.from({ length: 42 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0")
  return person({
    id: `u_receipt_demo_${number}`,
    firstName: "Demo",
    lastName: `Reader ${number}`,
    subtitle: "Quarterly Reporting member",
  })
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

/**
 * A post in a community's feed. Deliberately NOT a `MessageLine`: a post has a
 * title, a body and counters, and never has a reply, a delivery status or a
 * read receipt.
 */
type PostLine = {
  /**
   * Who signed it. `"company"` ⇒ nobody: the organisation published it, which
   * F0 draws with no author line at all. Policy and legal notices are posted
   * that way in practice — they are not one person's opinion.
   */
  from: MockPerson | "company"
  min: number
  title: string
  body: string
  mediaUrl?: string
  event?: { title: string; date: string; place?: string; mediaUrl?: string }
  reactions?: F0ChatReaction[]
  commentCount?: number
  viewCount?: number
  /** Demo: starts pinned to the top of its community. Marked on the LINE
   * because ids are minted at build time — a seed cannot name one. */
  pinned?: boolean
  /** Files hanging off the post — only ever shown in the detail view. */
  attachments?: { filename: string; url: string }[]
  /**
   * Demo: the post asks to be acknowledged, and whether I already have.
   * "Read and confirm" is the whole reason a comms tool is used for policy.
   */
  acknowledge?: "pending" | "done"
  /**
   * Demo: comments and reactions are OFF for this post. Both go together —
   * half a discussion block is worse than none — and a legal notice is the
   * case that wants it.
   */
  commentsOff?: boolean
}

type Line = MessageLine | SystemLine | PostLine

const isSystemLine = (line: Line): line is SystemLine => "system" in line
const isPostLine = (line: Line): line is PostLine => "title" in line

export type Seed = {
  id: string
  type: F0ChatChannelType
  title: string
  avatar: AvatarVariant
  /** Announcement channels: the sentence shown in place of the composer. */
  readOnlyNotice?: string
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
  /**
   * Demo (communities): the current user MAY publish here. Turns `canSend` back
   * on over the `community` type's defaults, which are "read and react".
   * Without it the community is read-only and shows its `readOnlyNotice` where
   * the composer would be.
   */
  canPost?: boolean
  /**
   * Demo (communities): an AGGREGATED feed — the ids of the communities whose
   * posts it gathers. Its own `lines` are ignored.
   *
   * Derived rather than written out, so the feed cannot drift from the
   * communities it claims to aggregate: add a post to People Ops and it shows
   * up here, which is the only behaviour worth demoing. Every post it yields
   * carries `community`, which is what makes the card say "Ana in Barcelona"
   * instead of leaving the reader to guess.
   */
  aggregates?: string[]
  /**
   * Demo (communities): posts written but not yet visible. `at: null` is a
   * draft. They are NOT in `lines` — nobody can read them yet.
   */
  scheduledPosts?: {
    id: string
    title: string
    description?: string
    event?: { title: string; date: string; place?: string }
    /** Its cover — already uploaded when it was written, so the shelf can
     * show a thumbnail of a post nobody has seen yet. */
    coverUrl?: string
    /** ISO ⇒ scheduled for then; `null` ⇒ a DRAFT, which has no date at all
     * and lands on the shelf's third chip rather than among the scheduled. */
    at: string | null
    /** ISO — when it was last written to. Only drafts show it; defaults to an
     * hour ago. */
    savedAt?: string
  }[]
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

/**
 * "Minutes ago" for a given wall-clock time yesterday, so a seed can land on a
 * specific separator ("Yesterday 22:14") instead of drifting with the hour the
 * demo happens to be opened at.
 *
 * Only the announcement seed needs this. Real announcements anchor to the
 * viewer's own join date, which the mock has no equivalent of.
 */
const yesterdayAt = (hour: number, minute: number): number => {
  const now = new Date()
  const then = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1,
    hour,
    minute
  )
  return Math.round((now.getTime() - then.getTime()) / 60_000)
}

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

/** Short People Ops posts. The point of this fixture is the COUNT, not the
 * richness — no covers, no events, so a dozen unread rows stay scannable. */
const PEOPLE_OPS_POSTS: [string, string][] = [
  ["Health insurance renewal is open", "Same provider, one extra dental tier."],
  [
    "New parental leave policy",
    "Sixteen weeks, non-transferable, for every parent.",
  ],
  ["Referral bonus doubles this quarter", "For engineering and design roles."],
  ["Payroll moves to the 25th", "One-off: December is paid on the 20th."],
  ["Desk booking opens two weeks ahead", "Instead of one. Same tool."],
  ["Company offsite dates are locked", "12–14 March, details next month."],
  ["Learning budget resets in January", "This year's doesn't roll over."],
]

const manyCommunityPosts = (people: MockPerson[], count: number): Line[] =>
  Array.from({ length: count }, (_, i) => {
    const [title, body] = PEOPLE_OPS_POSTS[i % PEOPLE_OPS_POSTS.length]
    return {
      from: people[i % people.length],
      title,
      body: `<p>${body}</p>`,
      // Newest last (smallest `min`), ~6h apart so the feed spans a few days.
      min: Math.max(1 * MIN, (count - i) * 6 * HOUR),
      viewCount: 20 + i * 7,
      commentCount: i % 4,
    }
  })

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
    body: "A single image with a blur-up source",
    attachments: [
      {
        kind: "image",
        url: mockImage("card", 0),
        thumbnailUrl: mockImage("card", 0),
        blurUrl: BLUR_PLACEHOLDER,
        name: "dashboard-overview.webp",
        mimeType: "image/webp",
        width: 1200,
        height: 800,
      },
    ],
  })
  add({
    from: ELEANOR,
    body: "",
    attachments: [
      {
        kind: "image",
        url: mockImage("card", 5),
        name: "tower-portrait.webp",
        // 1:10 — the ratio clamp is what keeps this from eating the transcript.
        width: 200,
        height: 2000,
      },
    ],
  })
  add({
    from: MARCUS,
    body: "Two photos land as tall halves, not squares",
    attachments: [
      {
        kind: "image",
        url: mockImage("card", 6),
        name: "pair-a.webp",
        width: 1400,
        height: 900,
      },
      {
        kind: "image",
        url: mockImage("card", 7),
        name: "pair-b.webp",
        width: 900,
        height: 1400,
      },
    ],
  })
  add({
    from: PRIYA,
    body: "Three go hero-on-top",
    attachments: [
      {
        kind: "image",
        url: mockImage("card", 8),
        name: "trio-hero.webp",
        width: 1600,
        height: 900,
      },
      {
        kind: "image",
        url: mockImage("card", 9),
        name: "trio-b.webp",
        width: 1000,
        height: 1000,
      },
      {
        kind: "image",
        url: mockImage("card", 10),
        name: "trio-c.webp",
        width: 900,
        height: 1200,
      },
    ],
  })
  add({
    from: THEO,
    body: "",
    attachments: Array.from({ length: 7 }, (_, index) => ({
      kind: "image" as const,
      url: mockImage("card", 11 + index),
      name: `album-${index + 1}.webp`,
      width: index % 2 === 0 ? 1400 : 900,
      height: index % 2 === 0 ? 900 : 1400,
    })),
  })
  add({
    from: NADIA,
    body: "An image with no intrinsic dimensions falls back to a square",
    attachments: [
      {
        kind: "image",
        url: mockImage("card", 18),
        name: "dimensionless.webp",
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
  // ANNOUNCEMENT — the product's own noticeboard, and the welcome screen every
  // employee lands on. Nothing here is sent: every message is seeded, which is
  // why the timestamp is anchored (see `yesterdayAt`) and the per-message clock
  // doesn't render. Read-only comes from the channel TYPE, not `readOnly`.
  // The copy is factorial's noticeboard verbatim (admin variant, the one with
  // the permissions card) — keep both in sync.
  {
    id: "dm-factorial",
    type: "announcement",
    title: "Factorial",
    avatar: FACTORIAL_AVATAR,
    readOnlyNotice: "Only Factorial can send messages",
    participants: [FACTORIAL],
    // Badge in the sidebar, but no unread divider inside — see MockChatApp.
    unread: 3,
    myRole: "guest",
    lines: [
      {
        from: FACTORIAL,
        min: yesterdayAt(22, 14),
        body: `👋 Hi ${ME.name.split(" ")[0]}! Welcome to your company's chat.`,
      },
      {
        from: FACTORIAL,
        min: yesterdayAt(22, 14) - 1,
        body: "No new app, no new password — everyone you work with is already here. Files, voice notes and more, from your computer or your phone 💬",
      },
      {
        from: FACTORIAL,
        min: yesterdayAt(22, 14) - 2,
        body: "",
        attachments: [
          {
            kind: "card",
            avatar: { type: "icon", icon: People },
            title: "Set up the chat for your company",
            description: "Choose who sees each channel and who can post 🔐",
            action: {
              label: "Manage permissions",
              onClick: () => {},
            },
          },
        ],
      },
    ],
  },
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
  // ─────────────────────────────────────────────────────────────────────────
  // COMMUNITIES — channels whose contents are POSTS, not messages. Reading and
  // reacting by default; publishing only where `canPost` grants it.
  //
  // They live at the END of SEEDS, and the sidebar puts their group last too:
  // a community is not a conversation of yours, it is a place you go to read.
  //
  // NONE OF THEM CARRIES AN EMOJI, and that is production parity rather than a
  // gap in the fixtures: `PostsGroup` has a title, a description and an
  // identifier, and no field for one. So every community draws the ＃ fallback,
  // and these seeds are what proves the fallback holds up as a whole COLUMN of
  // ＃ rather than as the one odd row out. The synthetic feed below is the
  // exception, and the reason is in its own comment.
  // ─────────────────────────────────────────────────────────────────────────
  // EVERYTHING, IN ONE PLACE — the aggregated feed, and the first row of the
  // group. It reads from the four communities below rather than carrying posts
  // of its own, so it cannot fall out of step with them.
  //
  // Two things only this channel demos: every card names the community it came
  // from (`community` on the post — the reason the field exists at all), and
  // the pinned shelf spans communities, which is how you find something you
  // half-remember without knowing where it was posted.
  //
  // THE ONE WITH AN EMOJI, and the only one entitled to it: it is not a
  // `PostsGroup` at all — no row in any table, nothing for a customer to name —
  // so nothing constrains it to the ＃ its neighbours must draw. Which is also
  // what makes it findable: one 📣 at the head of a column of ＃.
  {
    id: "feed",
    type: "community",
    title: "All posts",
    avatar: { type: "emoji", emoji: "📣" },
    aggregates: [
      "com-company-news",
      "com-barcelona-office",
      "com-kudos",
      "com-people-ops",
    ],
    // Publishing from here is real: the composer offers the communities you may
    // post in, rather than assuming the one you are reading.
    canPost: true,
    // No unread: there is no per-post read state to derive one from, so a badge
    // here would be a number nobody could explain. Said out loud because a feed
    // is exactly where a reader expects one.
    participants: [MARCUS, ELEANOR, GRACE, NADIA, HARPER],
    myRole: "member",
    lines: [],
  },
  // The common case: a company-wide feed most people can only read. Three
  // unread posts, so the divider, the badge and the jump pill all have
  // something to say.
  {
    id: "com-company-news",
    type: "community",
    title: "Company news",
    avatar: groupAvatar("Company news"),
    readOnlyNotice: "Only the Communications team can post here",
    participants: [MARCUS, ELEANOR, GRACE, ISLA, OWEN],
    myRole: "guest",
    unread: 3,
    lines: [
      {
        from: MARCUS,
        min: 9 * DAY,
        title: "Q3 results are in — and we beat the plan",
        body: [
          "<p>Revenue closed <strong>12% above target</strong> and churn is at its lowest since we started measuring it. The short version: the enterprise motion is working, and it is working sooner than the plan assumed.</p>",
          "<h3>The three numbers that matter</h3>",
          "<ul><li><strong>€4.1M ARR</strong>, up from €3.6M at the end of Q2</li><li><strong>1.8% monthly churn</strong>, down from 2.9% a year ago</li><li><strong>61 net new enterprise seats</strong>, more than the two previous quarters together</li></ul>",
          "<p>The full deck is attached, and Owen is running an open Q&A on Thursday for anything the numbers don't answer.</p>",
        ].join(""),
        mediaUrl: mockImage("card", 1),
        attachments: [
          {
            filename: "q3-results-full-deck.pdf",
            url: "/f0-pdf-viewer-sample.pdf",
          },
          {
            filename: "q3-metrics-by-region.xlsx",
            url: "/f0-document-sample.xlsx",
          },
        ],
        reactions: [
          {
            emoji: "🎉",
            count: 24,
            reactedByMe: true,
            users: [ELEANOR, MARCUS, GRACE],
          },
          { emoji: "👏", count: 11, reactedByMe: false },
          { emoji: "📈", count: 6, reactedByMe: false },
        ],
        commentCount: 8,
        viewCount: 214,
        // One of the two pins in a channel I cannot post in: the shelf is how
        // you FIND things here, and nothing more.
        pinned: true,
      },
      {
        from: "company",
        min: 7 * DAY,
        title: "Updated information security policy — please read and confirm",
        body: [
          "<p>The policy has been rewritten around how people actually work: laptops off the office network, phones with company mail, and third-party AI tools.</p>",
          "<h3>What changes for you</h3>",
          "<ul><li>Disk encryption is now required on every device with company data</li><li>Password managers are provided — shared credentials in documents are not allowed</li><li>Customer data may not be pasted into AI tools that are not on the approved list</li></ul>",
          "<p>Confirming below records that you have read it. The deadline is the end of the month, and IT can help with any of the above.</p>",
        ].join(""),
        attachments: [
          {
            filename: "information-security-policy-v4.pdf",
            url: "/f0-pdf-viewer-sample.pdf",
          },
          {
            filename: "approved-tools-list.csv",
            url: "/f0-document-sample.csv",
          },
        ],
        // Still pending for me: the detail view ASKS instead of confirming.
        acknowledge: "pending",
        commentCount: 5,
        viewCount: 198,
        pinned: true,
      },
      {
        from: ISLA,
        min: 5 * DAY,
        title: "Our new brand, in about five minutes",
        body: [
          "<p>Same company, clearer voice. The logo is the least of it — what changes day to day is how we write.</p>",
          "<h3>Say the thing</h3>",
          "<p>Shorter sentences. The subject before the caveat. Nobody has ever asked us to sound more corporate.</p>",
          "<h3>Where to get the assets</h3>",
          '<p>Slides, docs and email signatures are in the brand kit, and the guidelines live in the <a href="https://factorialhr.com" rel="noreferrer">handbook</a>. Isla is around all week for anything that needs a second pair of eyes.</p>',
        ].join(""),
        mediaUrl: mockImage("card", 2),
        reactions: [
          { emoji: "🔥", count: 19, reactedByMe: false },
          { emoji: "❤️", count: 8, reactedByMe: true, users: [ISLA, ELEANOR] },
        ],
        commentCount: 17,
        viewCount: 176,
      },
      {
        from: ELEANOR,
        min: 3 * DAY,
        title: "The new expenses flow ships on Monday",
        body: [
          "<p>Receipts are scanned on upload and matched to the card transaction automatically. Nothing to do on your side — the old form stays available for two more weeks.</p>",
          "<ul><li>Photograph the receipt, the amount and the merchant fill themselves in</li><li>Anything over €200 still needs your manager, as before</li><li>Reimbursements keep going out with payroll</li></ul>",
        ].join(""),
        commentCount: 3,
        viewCount: 96,
      },
      {
        from: OWEN,
        min: 2 * DAY,
        title: "Q4 kick-off: everyone, one room, one hour",
        body: "<p>Results, what we learned, and what the next quarter looks like. Remote joins on the usual link and the recording goes up the same afternoon.</p>",
        event: {
          title: "Q4 kick-off all-hands",
          date: new Date(Date.now() + 6 * DAY * 60_000).toISOString(),
          place: "Auditorium, ground floor · and streamed",
        },
        reactions: [{ emoji: "🙌", count: 14, reactedByMe: false }],
        commentCount: 4,
        viewCount: 132,
      },
      {
        from: "company",
        min: 30 * HOUR,
        title: "Legal notice: updated terms for the employee share plan",
        body: [
          "<p>The vesting schedule and the exercise window are unchanged. The amendment covers what happens to unvested options in an acquisition, and it applies to every grant from January.</p>",
          "<p>Questions go to People Ops rather than here — this notice is not the place to discuss anyone's individual grant.</p>",
        ].join(""),
        attachments: [
          {
            filename: "share-plan-amendment.docx",
            url: "/f0-document-sample.docx",
          },
        ],
        // Comments AND reactions off: the one case where a feed post is a
        // notice board and not a conversation.
        commentsOff: true,
        viewCount: 87,
      },
      // ── the three below start unread ──
      {
        from: "company",
        min: 20 * HOUR,
        title: "Office closure: 15 August",
        body: "<p>Both offices are closed for the local holiday. Remote work is unaffected, and the on-call rota stays as published.</p>",
        commentCount: 0,
        viewCount: 41,
      },
      {
        from: MARCUS,
        min: 5 * HOUR,
        title: "Welcome to the eleven people joining this month 👋",
        body: [
          "<p>Engineering, Sales and People Ops all grew. Say hello in your team channel — and if you're one of them, this feed is where company-wide news lands.</p>",
          "<p>Their first week is the same for everyone: laptop and accounts on day one, a buddy on day two, and no meetings anyone can't skip.</p>",
        ].join(""),
        mediaUrl: mockImage("card", 3),
        reactions: [
          { emoji: "👋", count: 31, reactedByMe: false },
          { emoji: "🎊", count: 9, reactedByMe: false },
        ],
        commentCount: 12,
        viewCount: 158,
      },
      {
        from: ELEANOR,
        min: 40 * MIN,
        title: "Reminder: performance reviews close on Friday",
        body: "<p>Self-reviews take about twenty minutes. Your manager's review opens as soon as yours is submitted, and nothing you write is visible to them before that.</p>",
        commentCount: 1,
        viewCount: 22,
      },
    ],
  },
  // The community you can publish in: the post composer instead of the
  // read-only notice. Also the event fixture — a post whose event card takes
  // the cover's place.
  {
    id: "com-barcelona-office",
    type: "community",
    title: "Barcelona office",
    avatar: groupAvatar("Barcelona office"),
    participants: [ELEANOR, PRIYA, THEO, NADIA],
    canPost: true,
    unread: 1,
    // Four waiting to go out, from within the hour to next week, one of them an
    // event. None are in `lines`: nobody can read them yet.
    //
    // All DATED. `at: null` (a draft) is a state the store supports, but the
    // shelf has only one date to print, so a draft would show today's time —
    // and a demo that lies about when something goes out is worse than a
    // branch left uncovered.
    scheduledPosts: [
      {
        id: "sched-padel",
        title: "Padel tournament — sign-ups open",
        description:
          "<p>Pairs or solo, we'll match you. Bring shoes that aren't running shoes.</p>",
        coverUrl: mockImage("card", 3),
        at: new Date(Date.now() + 1 * DAY * 60_000).toISOString(),
      },
      {
        id: "sched-allhands",
        title: "Q2 all-hands",
        description: "<p>The usual room, the usual slides, better coffee.</p>",
        event: {
          title: "Q2 all-hands",
          date: new Date(Date.now() + 12 * DAY * 60_000).toISOString(),
          place: "Auditorium, ground floor",
        },
        at: new Date(Date.now() + 4 * DAY * 60_000).toISOString(),
      },
      {
        id: "sched-fire-drill",
        title: "Fire drill on Thursday at 11:00",
        description:
          "<p>Ten minutes, both floors. Take the stairs by the kitchen and wait at the meeting point across the square. If you are on a call, say you are leaving and go.</p>",
        at: new Date(Date.now() + 45 * MIN * 60_000).toISOString(),
      },
      {
        id: "sched-terrace",
        title: "The terrace is closed on Friday for cleaning",
        description:
          "<p>All day. The eighth floor is open as usual if you were counting on the view for lunch.</p>",
        coverUrl: mockImage("card", 1),
        at: new Date(Date.now() + 8 * DAY * 60_000).toISOString(),
      },
      // ── and two you never finished (`at: null`) ──
      {
        id: "draft-parking",
        title: "Bike parking — the new plan",
        description:
          "<p>Waiting on the drawing from the building manager. Once it arrives this needs the level, the number of spaces and whether the old key still works.</p>",
        at: null,
        savedAt: new Date(Date.now() - 2 * DAY * 60_000).toISOString(),
      },
      {
        // No title at all: the case a drafts list has to survive, and the one
        // that has nothing to be found by.
        id: "draft-untitled",
        title: "",
        description:
          "<p>Something about the coffee supplier changing next month. Ask Nadia for the name.</p>",
        at: null,
        savedAt: new Date(Date.now() - 20 * MIN * 60_000).toISOString(),
      },
    ],
    lines: [
      {
        from: NADIA,
        min: 12 * DAY,
        title: "Everything you need for your first week in Barcelona",
        body: [
          "<p>Badge, desk, coffee, and who to ask when something is missing. Bookmark this one — it is pinned for a reason.</p>",
          "<ul><li><strong>Badge</strong>: reception, ground floor, bring an ID</li><li><strong>Desks</strong>: booked in the app, two weeks ahead</li><li><strong>Deliveries</strong>: reception signs for them and messages you</li></ul>",
        ].join(""),
        attachments: [
          {
            filename: "office-floor-plan.pdf",
            url: "/f0-pdf-viewer-sample.pdf",
          },
        ],
        commentCount: 3,
        viewCount: 214,
      },
      {
        from: ME,
        min: 3 * DAY,
        title: "The coffee machine is fixed",
        body: "<p>It was the grinder. Please stop hitting it.</p>",
        reactions: [{ emoji: "☕", count: 9, reactedByMe: true }],
        commentCount: 4,
        viewCount: 63,
        // Starts pinned, so the shelf is on screen the moment the story loads.
        pinned: true,
      },
      {
        from: THEO,
        min: 2 * DAY,
        title: "Bike parking moves to level -2 next week",
        body: "<p>The ramp on level -1 is being resurfaced. Same spaces, same key, one floor further down — and the lift takes bikes.</p>",
        mediaUrl: mockImage("card", 0),
        reactions: [{ emoji: "🚲", count: 12, reactedByMe: false }],
        commentCount: 7,
        viewCount: 88,
      },
      {
        from: ME,
        min: 26 * HOUR,
        title: "Desk moves: engineering to the north wing on Friday",
        body: "<p>Boxes arrive Thursday afternoon. Label yours with your name, not your team — half of you are changing teams next quarter anyway.</p>",
        attachments: [
          {
            filename: "desk-map-after-the-move.pdf",
            url: "/f0-pdf-viewer-sample.pdf",
          },
        ],
        commentCount: 9,
        viewCount: 74,
      },
      {
        from: PRIYA,
        min: 90 * MIN,
        title: "Rooftop summer party — 12 July",
        body: "<p>Food, music and a terrible karaoke machine. Bring whoever you like.</p>",
        event: {
          title: "Rooftop summer party",
          date: new Date(Date.now() + 9 * DAY * 60_000).toISOString(),
          place: "Rooftop, 8th floor",
        },
        reactions: [{ emoji: "🎉", count: 18, reactedByMe: false }],
        commentCount: 6,
        viewCount: 121,
      },
    ],
  },
  // Fully read: no badge, no divider. The reaction-heavy fixture.
  {
    id: "com-kudos",
    type: "community",
    title: "Kudos",
    avatar: groupAvatar("Kudos"),
    participants: [ELEANOR, MARCUS, PRIYA, THEO, GRACE, SAM],
    canPost: true,
    lines: [
      {
        from: THEO,
        min: 2 * DAY,
        title: "Kudos to Grace for the migration weekend",
        body: "<p>Two days of her own time so nobody else had to lose theirs. The cutover was invisible to customers.</p>",
        reactions: [
          {
            emoji: "🙌",
            count: 42,
            reactedByMe: true,
            users: [ELEANOR, MARCUS, PRIYA],
          },
          { emoji: "❤️", count: 17, reactedByMe: false },
          { emoji: "🚀", count: 5, reactedByMe: false },
        ],
        commentCount: 14,
        viewCount: 302,
      },
      {
        from: GRACE,
        min: 26 * HOUR,
        title: "…and kudos back to Theo, who reviewed all of it",
        body: "<p>At midnight. Twice.</p>",
        reactions: [{ emoji: "😂", count: 23, reactedByMe: true }],
        commentCount: 2,
        viewCount: 88,
      },
      {
        from: ME,
        min: 4 * HOUR,
        title: "Support handled 300 tickets in a week without blinking",
        body: "<p>Harper reorganised the queue on Monday and the median first reply went from four hours to forty minutes. Nobody worked a weekend for it.</p>",
        mediaUrl: mockImage("card", 2),
        reactions: [
          {
            emoji: "🙌",
            count: 37,
            reactedByMe: false,
            users: [ELEANOR, MARCUS, PRIYA, THEO, GRACE, SAM],
          },
          { emoji: "💪", count: 12, reactedByMe: true },
        ],
        commentCount: 5,
        viewCount: 141,
      },
    ],
  },
  // Volume: a two-figure badge, a big collapsed-group total, and enough rows
  // for the sidebar's offscreen-unread buttons to have something to point at.
  {
    id: "com-people-ops",
    type: "community",
    title: "People Ops",
    avatar: groupAvatar("People Ops"),
    readOnlyNotice: "Only People Ops can post here",
    participants: [NADIA, HARPER, ELEANOR],
    myRole: "guest",
    unread: 12,
    lines: [
      // Three handwritten ones at the top — the policy work a People Ops feed
      // is actually for — and then the volume that makes the badge two-figure.
      {
        from: HARPER,
        min: 40 * DAY,
        title: "How to book time off (and what happens next)",
        body: [
          "<p>Request it in the app, your manager sees it the same day, and the calendar updates itself. That is the whole process.</p>",
          "<ul><li>Anything under three days: approved by your manager alone</li><li>Three days or more: your manager, plus cover agreed with your team</li><li>Public holidays follow the office you are contracted to, not the one you are sitting in</li></ul>",
        ].join(""),
        attachments: [
          { filename: "time-off-policy.pdf", url: "/f0-pdf-viewer-sample.pdf" },
        ],
        commentCount: 6,
        viewCount: 428,
        // Pinned in a channel I cannot post in: I can find it and open it, and
        // that is all — no ⋯ offering to unpin someone else's evergreen post.
        pinned: true,
      },
      {
        from: "company",
        min: 32 * DAY,
        title: "Code of conduct — annual confirmation",
        body: [
          "<p>Nothing has changed this year. The annual confirmation exists so that everyone has read it recently rather than once, on their first day, years ago.</p>",
          "<p>If something in it does not match what you see happening, that is exactly what the People Ops channel is for.</p>",
        ].join(""),
        attachments: [
          { filename: "code-of-conduct.pdf", url: "/f0-pdf-viewer-sample.pdf" },
        ],
        // Already confirmed: the bar CONFIRMS instead of asking, which is the
        // other half of the acknowledgement fixture.
        acknowledge: "done",
        commentCount: 2,
        viewCount: 391,
      },
      {
        from: NADIA,
        min: 25 * DAY,
        title: "Benefits fair — every provider in one room",
        body: "<p>Health, pension, gym and the meal card, all with someone who can answer the awkward questions. Drop in whenever, no sign-up.</p>",
        event: {
          title: "Benefits fair",
          date: new Date(Date.now() + 15 * DAY * 60_000).toISOString(),
          place: "Cafeteria, first floor",
        },
        reactions: [{ emoji: "🌱", count: 21, reactedByMe: false }],
        commentCount: 4,
        viewCount: 267,
      },
      ...manyCommunityPosts([NADIA, HARPER], 14),
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
  if (seed?.type !== "group") {
    return undefined
  }

  const uniqueParticipants = new Map(
    [...seed.participants, ME].map((participant) => [
      participant.id,
      participant,
    ])
  )
  uniqueParticipants.delete(authorId)
  return [...uniqueParticipants.values()]
}

/**
 * One {@link PostLine} → one {@link F0ChatPost}.
 *
 * `community` is passed only by the aggregated feed: in a single community's
 * channel the header already names it, so the card leaves it off.
 */
const postFrom = (
  line: PostLine,
  community?: F0ChatPostCommunity
): F0ChatPost => {
  const sentMs = Date.now() - line.min * 60_000
  const author = line.from === "company" ? undefined : line.from
  return {
    type: "post",
    id: nextId(),
    createdAt: new Date(sentMs).toISOString(),
    author,
    isMine: author?.id === ME.id,
    title: line.title,
    description: line.body,
    mediaUrl: line.mediaUrl,
    event: line.event,
    reactions: line.commentsOff ? undefined : line.reactions,
    commentCount: line.commentsOff ? 0 : (line.commentCount ?? 0),
    viewCount: line.viewCount,
    allowCommentsAndReactions: line.commentsOff ? false : undefined,
    attachments: line.attachments?.map((file, index) => ({
      id: `${line.title}-f${index}`,
      filename: file.filename,
      url: file.url,
    })),
    requiredAction: line.acknowledge
      ? {
          type: "acknowledge",
          completedAt:
            line.acknowledge === "done"
              ? new Date(sentMs + 3 * 3_600_000).toISOString()
              : undefined,
        }
      : undefined,
    pinnedAt: line.pinned ? new Date(sentMs + 60_000).toISOString() : undefined,
    community,
  }
}

/**
 * An aggregated feed's transcript: every post of every community it gathers,
 * oldest first, each tagged with where it came from.
 *
 * Only posts — a community's `lines` are all posts anyway, and a system row
 * from one community would make no sense in a feed of several.
 */
const buildAggregatedPosts = (communityIds: string[]): F0ChatItem[] =>
  communityIds
    .flatMap((id) => {
      const source = SEED_BY_ID.get(id)
      if (!source) {
        return []
      }
      const community = { id: source.id, name: source.title }
      return source.lines
        .filter(isPostLine)
        .map((line) => postFrom(line, community))
    })
    .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1))

export const buildSeedMessages = (seed: Seed): F0ChatItem[] => {
  if (seed.aggregates) {
    return buildAggregatedPosts(seed.aggregates)
  }
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
    if (isPostLine(line)) {
      return postFrom(line)
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
    if (isSystemLine(line) || isPostLine(line) || line.replyToIndex == null) {
      return
    }
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

/** Anything a reader CONSUMES: someone else's message, or a post. System rows
 * never count as unread — nobody is waiting for you to read "Ana joined". */
const isUnreadable = (item: F0ChatItem): boolean =>
  (isUserMessage(item) || isPost(item)) && !item.isMine

export const unreadCountOf = (state: ConvState): number => {
  const idx = state.lastReadId
    ? state.messages.findIndex((m) => m.id === state.lastReadId)
    : -1
  return state.messages.slice(idx + 1).filter(isUnreadable).length
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
