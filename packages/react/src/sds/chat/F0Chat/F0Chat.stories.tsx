import type { Meta, StoryObj } from "@storybook/react-vite"

import { Profiler, type ReactNode, useEffect, useRef, useState } from "react"
import { expect, userEvent, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0Chat } from "./F0Chat"
import { MOCK_VIDEO_CAPTIONS, MOCK_VIDEO_DESCRIPTIONS } from "./mocks/constants"
import { useMockChatRuntime } from "./mocks/createMockChatRuntime"
import { useChatStorm } from "./mocks/useChatStorm"
import { useDemoHeaderActions } from "./mocks/useDemoHeaderActions"
import { F0ChatProvider } from "./providers/F0ChatProvider"
import { type F0ChatRuntime, type F0ChatUser } from "./types"

const me: F0ChatUser = { id: "me", name: "Me" }
const ana: F0ChatUser = {
  id: "ana",
  name: "Ana Torres",
  subtitle: "Product Designer",
}

/** Gives F0Chat a bounded height so its internal `h-full` flex layout resolves. */
const Frame = ({ children }: { children: ReactNode }): ReactNode => (
  <div style={{ height: 680, display: "flex", width: "100%" }}>{children}</div>
)

const dmChannel = {
  id: "dm-ana",
  type: "dm" as const,
  title: "Ana Torres",
  avatar: { type: "person" as const, firstName: "Ana", lastName: "Torres" },
  presence: "online" as const,
  user: ana,
}

// Group members for the mentions demo. `profileHref` makes the @mention hover
// card a full profile card (avatar + role + "View profile").
const anaG: F0ChatUser = {
  id: "ana-g",
  name: "Ana García",
  subtitle: "Product Designer",
  avatar: { type: "person", firstName: "Ana", lastName: "García" },
  profileHref: "/people/ana-g",
}
const bruno: F0ChatUser = {
  id: "bruno",
  name: "Bruno Martínez",
  subtitle: "Engineering Manager",
  avatar: {
    type: "person",
    firstName: "Bruno",
    lastName: "Martínez",
    src: "/avatars/person02.jpg",
  },
  avatarColor: "orange",
  profileHref: "/people/bruno",
}
const carmen: F0ChatUser = {
  id: "carmen",
  name: "Carmen Rodríguez",
  subtitle: "Data Analyst",
  avatar: { type: "person", firstName: "Carmen", lastName: "Rodríguez" },
  profileHref: "/people/carmen",
}

const groupChannel = {
  id: "grp-product",
  type: "group" as const,
  title: "Product Team",
  avatar: { type: "company" as const, name: "Product Team" },
  memberCount: 4,
}

/**
 * Group conversation with `@`-mentions: type `@` to open the popover (with
 * `@here` pinned on top), pick a member or everyone, and send — the sent chip
 * uses the same accessible neutral styling. The two seeded incoming messages
 * demo a mention of you and an `@here`.
 */
const GroupConversation = (): ReactNode => {
  const runtime = useMockChatRuntime({
    channel: groupChannel,
    me,
    others: [anaG, bruno, carmen],
    initialCount: 12,
    olderPages: 2,
    ambientEveryMs: 0,
    extraMessages: [
      {
        id: "mention-self",
        author: bruno,
        body: "Heads up @Me, the report is ready 🙌",
        createdAt: new Date().toISOString(),
        isMine: false,
        mentions: [{ id: "me", name: "Me" }],
      },
      {
        id: "mention-everyone",
        author: anaG,
        body: "@here standup moved to 11:00 🕚",
        createdAt: new Date().toISOString(),
        isMine: false,
        mentionedEveryone: true,
      },
      {
        // Mention of someone else — hover the @chip to open their profile card.
        id: "mention-other",
        author: anaG,
        body: "@Bruno Martínez can you take the deploy?",
        createdAt: new Date().toISOString(),
        isMine: false,
        mentions: [
          {
            id: bruno.id,
            name: bruno.name,
            avatar: bruno.avatar,
            subtitle: bruno.subtitle,
            profileHref: "/people/bruno",
          },
        ],
      },
    ],
  })
  // Pin/mute live in `headerActions` now (nothing is built into the header but
  // search) — this is the standard "member" wiring every host would ship.
  const { headerActions } = useDemoHeaderActions(runtime)
  return (
    <Frame>
      <F0ChatProvider runtime={runtime}>
        <F0Chat headerActions={headerActions} />
      </F0ChatProvider>
    </Frame>
  )
}

/**
 * Motion stress test: the button fires a burst of incoming messages (staggered
 * 450ms, with their typing pauses interleaving) from several people. The
 * transcript must read as ONE continuous glide — no restart stutter, no blank
 * band below the last row, and the dots must be replaced in place by each
 * arriving message.
 */
const BurstConversation = (): ReactNode => {
  const runtime = useMockChatRuntime({
    channel: groupChannel,
    me,
    others: [anaG, bruno, carmen],
    initialCount: 30,
    olderPages: 2,
    ambientEveryMs: 0,
  })
  const others = [anaG, bruno, carmen]
  const burst = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => runtime.receiveFrom(others[i % others.length]), i * 450)
    }
  }
  return (
    <Frame>
      <div className="relative flex h-full flex-col">
        <F0ChatProvider runtime={runtime}>
          <F0Chat />
        </F0ChatProvider>
        <button
          type="button"
          onClick={burst}
          className="absolute left-4 top-16 z-50 cursor-pointer rounded-md border border-solid border-f1-border bg-f1-background px-3 py-1 text-sm font-medium text-f1-foreground shadow-md"
        >
          Burst ×5
        </button>
      </div>
    </Frame>
  )
}

/**
 * Resilient-send demo: toggle the simulated network off, send a few messages
 * (instant bubble → delayed clock → red "not sent" indicator with a
 * Retry/Delete menu), then bring the network back — everything pending
 * re-sends on its own.
 */
const FlakyNetworkConversation = (): ReactNode => {
  const [offline, setOffline] = useState(false)
  const runtime = useMockChatRuntime({
    channel: dmChannel,
    me,
    others: [ana],
    initialCount: 20,
    olderPages: 2,
    ambientEveryMs: 0,
    failSends: false,
  })
  const toggle = () => {
    runtime.setFailSends(!offline)
    setOffline(!offline)
  }
  return (
    <Frame>
      <div className="relative flex h-full flex-col">
        <F0ChatProvider runtime={runtime}>
          <F0Chat />
        </F0ChatProvider>
        <button
          type="button"
          onClick={toggle}
          className={
            offline
              ? "absolute left-4 top-16 z-50 cursor-pointer rounded-md border border-solid border-f1-border bg-f1-background-critical px-3 py-1 text-sm font-medium text-f1-foreground-critical shadow-md"
              : "absolute left-4 top-16 z-50 cursor-pointer rounded-md border border-solid border-f1-border bg-f1-background px-3 py-1 text-sm font-medium text-f1-foreground shadow-md"
          }
        >
          {offline ? "Offline — back online" : "Go offline"}
        </button>
      </div>
    </Frame>
  )
}

/**
 * QA HUD for the Storm story: FPS, storm events/s, React commit stats and a
 * scroll trace (distance-from-bottom per frame, drawn as a sparkline). The
 * send/receive bounce reads as spikes in the trace — a healthy transcript
 * shows one continuous curve per arrival.
 */
const StormHud = ({
  eventsPerSecond,
  commitsRef,
}: {
  eventsPerSecond: number
  commitsRef: React.MutableRefObject<{ count: number; totalMs: number }>
}): ReactNode => {
  const [fps, setFps] = useState(0)
  const [commitLine, setCommitLine] = useState("—")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let raf = 0
    let frames = 0
    let last = performance.now()
    const samples: number[] = []

    const tick = () => {
      frames++
      const now = performance.now()
      if (now - last >= 1000) {
        setFps(Math.round((frames * 1000) / (now - last)))
        frames = 0
        last = now
        const c = commitsRef.current
        setCommitLine(
          c.count === 0
            ? "0 commits"
            : `${c.count} commits · ${(c.totalMs / c.count).toFixed(1)}ms avg`
        )
        commitsRef.current = { count: 0, totalMs: 0 }
      }

      // Scroll trace: distance from the true bottom, sampled per frame.
      const viewport = document.querySelector("[data-chat-viewport]")
      if (viewport) {
        const distance =
          viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight
        samples.push(distance)
        if (samples.length > 120) samples.shift()
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d")
        if (canvas && ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.strokeStyle = "#3555ff"
          ctx.lineWidth = 1.5
          ctx.beginPath()
          const max = Math.max(60, ...samples)
          samples.forEach((s, i) => {
            const x = (i / 119) * canvas.width
            const y = canvas.height - (s / max) * (canvas.height - 4) - 2
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          })
          ctx.stroke()
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [commitsRef])

  return (
    <div className="font-mono absolute right-4 top-16 z-50 flex w-56 flex-col gap-1 rounded-md border border-solid border-f1-border bg-f1-background p-2 text-xs text-f1-foreground shadow-md">
      <div>
        {fps} fps · {eventsPerSecond} ev/s
      </div>
      <div>{commitLine}</div>
      <canvas ref={canvasRef} width={208} height={36} />
      <div className="text-f1-foreground-secondary">
        dist-from-bottom / frame
      </div>
    </div>
  )
}

/**
 * Intensity stress: a jittered storm of typing→message swaps, same-commit
 * batches, incoming reactions, read sweeps, images (with/without reserved
 * dimensions) and own sends. The transcript must hold one continuous motion —
 * no bounce on arrivals, staggered batch entries, stable FPS, and commit
 * counts that stay proportional to what actually changed.
 */
const StormConversation = ({
  ratePerSec,
}: {
  ratePerSec: number
}): ReactNode => {
  const runtime = useMockChatRuntime({
    channel: groupChannel,
    me,
    others: [anaG, bruno, carmen],
    initialCount: 40,
    olderPages: 2,
    ambientEveryMs: 0,
  })
  const storm = useChatStorm(runtime, [anaG, bruno, carmen], { ratePerSec })
  const commitsRef = useRef({ count: 0, totalMs: 0 })

  return (
    <Frame>
      <div className="relative flex h-full flex-col">
        <Profiler
          id="f0chat-storm"
          onRender={(_id, _phase, actualDuration) => {
            commitsRef.current.count++
            commitsRef.current.totalMs += actualDuration
          }}
        >
          <F0ChatProvider runtime={runtime}>
            <F0Chat />
          </F0ChatProvider>
        </Profiler>
        <button
          type="button"
          onClick={storm.toggle}
          className={
            storm.running
              ? "absolute left-4 top-16 z-50 cursor-pointer rounded-md border border-solid border-f1-border bg-f1-background-critical px-3 py-1 text-sm font-medium text-f1-foreground-critical shadow-md"
              : "absolute left-4 top-16 z-50 cursor-pointer rounded-md border border-solid border-f1-border bg-f1-background px-3 py-1 text-sm font-medium text-f1-foreground shadow-md"
          }
        >
          {storm.running ? "Stop storm" : `Storm ${ratePerSec}/s`}
        </button>
        <StormHud
          eventsPerSecond={storm.eventsPerSecond}
          commitsRef={commitsRef}
        />
      </div>
    </Frame>
  )
}

const Conversation = ({
  initialCount,
}: {
  initialCount: number
}): ReactNode => {
  const runtime = useMockChatRuntime({
    channel: dmChannel,
    me,
    others: [ana],
    initialCount,
    olderPages: 4,
    ambientEveryMs: 0,
  })
  const { headerActions } = useDemoHeaderActions(runtime)
  return (
    <Frame>
      <F0ChatProvider runtime={runtime}>
        <F0Chat headerActions={headerActions} />
      </F0ChatProvider>
    </Frame>
  )
}

/** Voice-note regression at the width used by a minimized chat panel. */
const CompactVoiceConversation = (): ReactNode => {
  const runtime = useMockChatRuntime({
    channel: dmChannel,
    me,
    others: [ana],
    initialCount: 0,
    olderPages: 0,
    ambientEveryMs: 0,
    extraMessages: [
      {
        id: "compact-voice",
        author: ana,
        body: "",
        createdAt: new Date().toISOString(),
        isMine: false,
        attachments: [
          {
            kind: "voice",
            url: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
            durationSeconds: 62,
            mimeType: "audio/mpeg",
            name: "voice-note.mp3",
          },
        ],
      },
    ],
  })

  return (
    <div
      style={{ display: "flex", height: 520, width: 360 }}
      data-testid="compact-chat-frame"
    >
      <F0ChatProvider runtime={runtime}>
        <F0Chat />
      </F0ChatProvider>
    </div>
  )
}

// Extra people for the membership demos (system-row members don't need to be
// existing authors — GetStream resolves them from the channel state the same way).
const diego: F0ChatUser = {
  id: "diego",
  name: "Diego Fernández",
  subtitle: "Backend Engineer",
  avatar: { type: "person", firstName: "Diego", lastName: "Fernández" },
  profileHref: "/people/diego",
}
const elena: F0ChatUser = {
  id: "elena",
  name: "Elena Ruiz",
  subtitle: "QA Engineer",
  avatar: { type: "person", firstName: "Elena", lastName: "Ruiz" },
  profileHref: "/people/elena",
}
const fatima: F0ChatUser = {
  id: "fatima",
  name: "Fátima El Amrani",
  subtitle: "Product Manager",
  avatar: { type: "person", firstName: "Fátima", lastName: "El Amrani" },
  profileHref: "/people/fatima",
}
const gabriel: F0ChatUser = {
  id: "gabriel",
  name: "Gabriel Costa",
  subtitle: "Designer",
  avatar: { type: "person", firstName: "Gabriel", lastName: "Costa" },
  profileHref: "/people/gabriel",
}
const hugo: F0ChatUser = {
  id: "hugo",
  name: "Hugo Navarro",
  subtitle: "Data Engineer",
  avatar: { type: "person", firstName: "Hugo", lastName: "Navarro" },
  profileHref: "/people/hugo",
}
const irene: F0ChatUser = {
  id: "irene",
  name: "Irene Vidal",
  subtitle: "People Partner",
  avatar: { type: "person", firstName: "Irene", lastName: "Vidal" },
  profileHref: "/people/irene",
}

const membershipButton =
  "z-50 cursor-pointer rounded-md border border-solid border-f1-border bg-f1-background px-3 py-1 text-sm font-medium text-f1-foreground shadow-md"

/**
 * Membership system rows, WhatsApp/Slack-style: people added to the group,
 * leaving or being removed render as centered rows with an F0TagList of person
 * tags that compacts itself (max 5, then a "+N" counter whose hover lists the
 * collapsed people) and break the author runs around them. The buttons drive
 * live events through the runtime — "Add 8" demos the "+N" counter, and the
 * seeded history includes a multi-person leave and the plain-text fallback.
 * As the admin here, the host offers the Edit group header action, whose
 * callback opens an F0Dialog owned by the story (not F0Chat).
 */
const MembershipConversation = (): ReactNode => {
  const hourAgo = (h: number) => new Date(Date.now() - h * 3600_000)
  const runtime = useMockChatRuntime({
    channel: { ...groupChannel, id: "grp-membership" },
    me,
    others: [anaG, bruno, carmen],
    initialCount: 10,
    olderPages: 1,
    ambientEveryMs: 0,
    extraMessages: [
      {
        // Directly after a same-author run → demos the run breaking.
        type: "system",
        id: "sys-added-1",
        createdAt: hourAgo(3).toISOString(),
        system: { event: "member.added", members: [anaG, carmen] },
      },
      {
        id: "post-system",
        author: anaG,
        body: "Thanks for adding us! 👋",
        createdAt: hourAgo(2.9).toISOString(),
        isMine: false,
      },
      {
        // A big batch in the history — F0TagList compacts it to 5 tags + "+N".
        type: "system",
        id: "sys-added-batch",
        createdAt: hourAgo(2).toISOString(),
        system: {
          event: "member.added",
          members: [diego, elena, fatima, gabriel, hugo, irene, bruno],
        },
      },
      {
        // Two people leaving at once — a coalesced multi-person "left" row.
        type: "system",
        id: "sys-left-1",
        createdAt: hourAgo(1).toISOString(),
        system: { event: "member.left", members: [bruno, hugo] },
      },
      {
        // Body-only fallback — what an unknown GetStream system message renders.
        type: "system",
        id: "sys-fallback",
        createdAt: hourAgo(0.5).toISOString(),
        body: "This conversation is now end-to-end encrypted",
      },
    ],
  })
  const { headerActions, editDialog } = useDemoHeaderActions(runtime, "admin", {
    members: [anaG, bruno, carmen],
  })
  return (
    <Frame>
      <div className="relative flex h-full flex-col">
        <F0ChatProvider runtime={runtime}>
          <F0Chat headerActions={headerActions} />
        </F0ChatProvider>
        {editDialog}
        <div className="absolute left-4 top-16 z-50 flex flex-col items-start gap-2">
          <button
            type="button"
            className={membershipButton}
            onClick={() => runtime.addMembers([diego, elena])}
          >
            Add 2 members
          </button>
          <button
            type="button"
            className={membershipButton}
            onClick={() =>
              runtime.addMembers([
                diego,
                elena,
                fatima,
                gabriel,
                hugo,
                irene,
                anaG,
                bruno,
              ])
            }
          >
            Add 8 members (+N)
          </button>
          <button
            type="button"
            className={membershipButton}
            onClick={() => runtime.memberLeaves(carmen)}
          >
            Member leaves
          </button>
          <button
            type="button"
            className={membershipButton}
            onClick={() => runtime.addMembers([carmen])}
          >
            Member re-joins
          </button>
          <button
            type="button"
            className={membershipButton}
            onClick={() => runtime.removeMember(diego)}
          >
            Remove member
          </button>
        </div>
      </div>
    </Frame>
  )
}

/**
 * Previewable documents (PDF, Excel/CSV, Word, text/markdown) render as a
 * document card: a content snapshot (lazy — each parser only loads when a card
 * scrolls into view) under a header with the type badge and name. Clicking the
 * snapshot opens the fullscreen viewer, where download remains available.
 * Non-previewable files (PowerPoint, binary .doc…) keep the downloadable chip.
 */
const DocumentConversation = (): ReactNode => {
  const runtime = useMockChatRuntime({
    channel: dmChannel,
    me,
    others: [ana],
    initialCount: 4,
    olderPages: 0,
    ambientEveryMs: 0,
    extraMessages: [
      {
        id: "doc-1",
        author: ana,
        body: "Here's the quarterly report 📄",
        createdAt: new Date().toISOString(),
        isMine: false,
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
        id: "doc-2",
        author: me,
        body: "Thanks! Sending the raw data too",
        createdAt: new Date().toISOString(),
        isMine: true,
        status: "read",
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
        id: "doc-3",
        author: ana,
        body: "And the offer draft + release notes",
        createdAt: new Date().toISOString(),
        isMine: false,
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
          {
            kind: "file",
            url: "/f0-document-sample.txt",
            name: "worker.log",
            mimeType: "text/plain",
          },
        ],
      },
      {
        id: "doc-4",
        author: me,
        body: "The deck stays as a chip (no client-side preview for ppt)",
        createdAt: new Date().toISOString(),
        isMine: true,
        status: "read",
        attachments: [
          {
            kind: "file",
            url: "#",
            name: "kickoff-deck.pptx",
            mimeType: "application/vnd.ms-powerpoint",
          },
        ],
      },
    ],
  })
  return (
    <Frame>
      <F0ChatProvider runtime={runtime}>
        <F0Chat />
      </F0ChatProvider>
    </Frame>
  )
}

/**
 * Videos play directly in the conversation through F0VideoPlayer. Several
 * videos in one message stack vertically instead of shrinking into a grid, so
 * every player uses the available width up to the chat media limit. The
 * built-in player controls provide inline playback and fullscreen.
 */
const VideoConversation = (): ReactNode => {
  const runtime = useMockChatRuntime({
    channel: dmChannel,
    me,
    others: [ana],
    initialCount: 4,
    olderPages: 0,
    ambientEveryMs: 0,
    extraMessages: [
      {
        id: "video-1",
        author: ana,
        body: "Two cuts from today’s walkthrough",
        createdAt: new Date().toISOString(),
        isMine: false,
        attachments: [
          {
            kind: "file",
            url: "/Big_Buck_Bunny_alt.webm",
            name: "walkthrough.webm",
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
            name: "deep-dive.webm",
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
            name: "source-deck.pptx",
            mimeType: "application/vnd.ms-powerpoint",
          },
        ],
      },
    ],
  })

  return (
    <Frame>
      <F0ChatProvider runtime={runtime}>
        <F0Chat />
      </F0ChatProvider>
    </Frame>
  )
}

const meta = {
  title: "F0Chat",
  component: F0Chat,
  tags: ["!autodocs", "experimental"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof F0Chat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Conversation initialCount={40} />,
}

export const Snapshot: Story = {
  render: () => (
    <div className="flex flex-col gap-8 bg-f1-background p-4">
      <section
        className="flex w-[760px] flex-col gap-2"
        data-testid="snapshot-default-chat"
      >
        <h2 className="text-lg font-medium">Emoji autocomplete</h2>
        <Conversation initialCount={12} />
      </section>
      <section
        className="flex w-fit flex-col gap-2"
        data-testid="snapshot-compact-voice"
      >
        <h2 className="text-lg font-medium">Compact voice attachment</h2>
        <CompactVoiceConversation />
      </section>
      <section
        className="flex w-[760px] flex-col gap-2"
        data-testid="snapshot-documents"
      >
        <h2 className="text-lg font-medium">Document attachments</h2>
        <DocumentConversation />
      </section>
      <section
        className="flex w-[760px] flex-col gap-2"
        data-testid="snapshot-videos"
      >
        <h2 className="text-lg font-medium">Video attachments</h2>
        <VideoConversation />
      </section>
    </div>
  ),
  parameters: withSnapshot({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const defaultChat = within(canvas.getByTestId("snapshot-default-chat"))
    const composer = defaultChat.getByRole("combobox", {
      name: /write something here/i,
    })
    await userEvent.clear(composer)
    await userEvent.type(composer, ":smil")
    await expect(
      defaultChat.getByRole("listbox", { name: "Add emoji" })
    ).toBeVisible()

    const compactVoice = within(canvas.getByTestId("snapshot-compact-voice"))
    await expect(
      await compactVoice.findByTestId("chat-voice-attachment")
    ).toBeVisible()

    const documents = within(canvas.getByTestId("snapshot-documents"))
    await expect(
      await documents.findAllByTestId("chat-document-attachment")
    ).not.toHaveLength(0)

    const videos = within(canvas.getByTestId("snapshot-videos"))
    await expect(
      await videos.findAllByTestId("chat-video-attachment")
    ).not.toHaveLength(0)
  },
}

/** Composer micro-interaction QA. Try, in order: hover a message → Reply (the
 * chip unfolds, and collapses on remove) · attach a couple of files (chips pop
 * in, the skeleton crossfades to the preview; removing one slides the
 * neighbours into the gap) · type the first character (send button activation
 * pop) · start a recording (the action row crossfades to the waveform) · send
 * (the attachment row folds away). */
export const ComposerMotion: Story = {
  name: "Composer micro-interactions",
  render: () => <Conversation initialCount={8} />,
}

/** Minimized-chat regression (360px panel): the waveform compresses before
 * reaching the fixed time/speed slot instead of overflowing across it. */
export const CompactVoiceAttachment: Story = {
  name: "Compact voice attachment",
  render: () => <CompactVoiceConversation />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const frame = canvas.getByTestId("compact-chat-frame")
    const card = await canvas.findByTestId("chat-voice-attachment")
    const waveform = await canvas.findByTestId("chat-voice-waveform")
    const time = await canvas.findByTestId("chat-voice-time")

    const frameRect = frame.getBoundingClientRect()
    const cardRect = card.getBoundingClientRect()
    const waveformRect = waveform.getBoundingClientRect()
    const timeRect = time.getBoundingClientRect()

    await expect(cardRect.right).toBeLessThanOrEqual(frameRect.right)
    await expect(waveformRect.width).toBeGreaterThan(0)
    await expect(waveformRect.right).toBeLessThanOrEqual(timeRect.left)
  },
}

/** Slack-style inline emoji lookup: type `:` followed by a shortcode or name,
 * then use arrows + Enter/Tab to replace the query with the selected emoji. */
export const EmojiAutocomplete: Story = {
  name: "Composer emoji autocomplete",
  render: () => <Conversation initialCount={8} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const composer = canvas.getByRole("combobox", {
      name: /write something here/i,
    })

    await step("Search and select with the keyboard", async () => {
      await userEvent.type(composer, ":smil")
      const listbox = canvas.getByRole("listbox", { name: "Add emoji" })
      const selectedOption = within(listbox).getByRole("option", {
        name: /:smile:.*Grinning Face with Smiling Eyes/,
      })

      await expect(listbox).toBeVisible()
      await expect(composer).toHaveAttribute("aria-expanded", "true")
      await expect(composer).toHaveAttribute("aria-controls", listbox.id)
      await expect(composer).toHaveAttribute(
        "aria-activedescendant",
        selectedOption.id
      )
      await expect(selectedOption).toHaveAttribute("aria-selected", "true")

      await userEvent.keyboard("{Enter}")
      await expect(composer).toHaveValue("😄 ")
      await expect(
        canvas.queryByRole("listbox", { name: "Add emoji" })
      ).not.toBeInTheDocument()
      await expect(composer).toHaveAttribute("aria-expanded", "false")
      await expect(composer).toHaveFocus()
    })

    await step("Convert a complete alias", async () => {
      await userEvent.clear(composer)
      await userEvent.type(composer, ":thumbsup:")
      await expect(composer).toHaveValue("👍")
    })

    await step("Leave the visual example open", async () => {
      await userEvent.type(composer, " :joy")
      await expect(
        canvas.getByRole("listbox", { name: "Add emoji" })
      ).toBeVisible()
    })
  },
}

/** Group chat with functional `@`-mentions (`@here` for everyone + members). */
export const Group: Story = {
  name: "Group with mentions",
  render: () => <GroupConversation />,
}

/** Membership events as centered system rows (added / left / removed) with
 * person avatar-tags, "+N" overflow, the plain-text fallback, and the
 * admin-only Edit group header action opening a host-owned F0Dialog. */
export const GroupMembershipEvents: Story = {
  name: "Group membership events",
  render: () => <MembershipConversation />,
}

/** Document attachments: Slack-style snapshot cards for PDF, Excel/CSV, Word
 * and text/markdown — click to open the fullscreen viewer for each kind.
 * Non-previewable files (ppt) keep the downloadable chip. */
export const WithDocumentAttachments: Story = {
  name: "Document attachments",
  render: () => <DocumentConversation />,
}

/** Inline video attachments: each F0VideoPlayer stays wide, multiple videos
 * stack vertically, and the player itself provides playback, download and
 * fullscreen. */
export const WithVideoAttachments: Story = {
  name: "Video attachments",
  render: () => <VideoConversation />,
}

/** Resilient sending under a bad connection: instant bubble, delayed sending
 * clock, failed state with Retry/Delete, auto-resend on reconnect. */
export const FlakyNetwork: Story = {
  name: "Flaky network (resilient send)",
  render: () => <FlakyNetworkConversation />,
}

/** Rapid-fire incoming activity on demand — for verifying the transcript's
 * slide coalescing and the typing→message in-place swap. */
export const Burst: Story = {
  name: "Burst (motion stress)",
  render: () => <BurstConversation />,
}

/** Sustained intense-conversation QA: jittered multi-author storm (typing
 * swaps, same-commit batches, reactions, read sweeps, images, own sends) with
 * a HUD — FPS, events/s, React commit stats and a per-frame scroll trace where
 * any arrival bounce shows as a spike. */
export const Storm: Story = {
  name: "Storm (intensity stress)",
  render: () => <StormConversation ratePerSec={3} />,
}

/** Same storm at an unreasonable rate — the ceiling check. */
export const StormFast: Story = {
  name: "Storm ×5/s (ceiling)",
  render: () => <StormConversation ratePerSec={5} />,
}

/**
 * Stress test: the transcript is virtualized, so even a very large history stays
 * smooth (only the visible window is in the DOM). Scroll, jump-to-bottom and
 * load-older should all feel instant.
 */
export const HugeConversation: Story = {
  name: "200k messages (virtualized)",
  render: () => <Conversation initialCount={200_000} />,
}

/** First open: a bubble skeleton instead of a spinner. On re-entry the adapter
 * reports "ready" immediately (cached), so this only shows once. */
export const FirstLoadSkeleton: Story = {
  render: () => {
    const runtime: F0ChatRuntime = {
      currentUserId: "me",
      channel: dmChannel,
      status: "connecting",
      messages: [],
      typingUsers: [],
      hasMoreOlder: false,
      loadingOlder: false,
      unreadCount: 0,
      firstUnreadId: null,
      sendMessage: () => {},
      retryMessage: () => {},
      loadOlder: () => {},
      toggleReaction: () => {},
      deleteMessage: () => {},
      onInputActivity: () => {},
    }
    return (
      <Frame>
        <F0ChatProvider runtime={runtime}>
          <F0Chat />
        </F0ChatProvider>
      </Frame>
    )
  },
}
