import type { Meta, StoryObj } from "@storybook/react-vite"

import { type ReactNode } from "react"

import { F0Chat } from "./F0Chat"
import { useMockChatRuntime } from "./mocks/createMockChatRuntime"
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
  avatar: { type: "person", firstName: "Bruno", lastName: "Martínez" },
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
 * is highlighted. The two seeded incoming messages demo a mention of you and an
 * `@here`, both rendered with the self-mention emphasis.
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
  return (
    <Frame>
      <F0ChatProvider runtime={runtime}>
        <F0Chat />
      </F0ChatProvider>
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
  return (
    <Frame>
      <F0ChatProvider runtime={runtime}>
        <F0Chat />
      </F0ChatProvider>
    </Frame>
  )
}

const meta = {
  title: "SDS/Chat/F0Chat",
  component: F0Chat,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof F0Chat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Conversation initialCount={40} />,
}

/** Group chat with functional `@`-mentions (`@here` for everyone + members). */
export const Group: Story = {
  name: "Group with mentions",
  render: () => <GroupConversation />,
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
