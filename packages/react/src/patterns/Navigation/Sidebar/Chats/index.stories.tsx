import type { Meta, StoryObj } from "@storybook/react-vite"

import { useCallback, useEffect, useState } from "react"
import { action } from "storybook/actions"

import { F0Button } from "@/components/F0Button"
import { Clock, MicrophoneNegative, New, PalmTree, People } from "@/icons/app"
import { fakePeople } from "@/mocks/people"

import { SidebarChatList, type SidebarChatEmptyState } from "./SidebarChatList"
import {
  SidebarChatProvider,
  useSidebarChatActions,
} from "./SidebarChatProvider"
import { SidebarChat, SidebarChatAction, SidebarChatGroup } from "./types"

export const exampleActions: SidebarChatAction[] = [
  { label: "New chat", icon: New, onClick: action("new chat") },
  { label: "New group", icon: People, onClick: action("new group") },
]

export const exampleEmptyState: SidebarChatEmptyState = {
  title: "No conversations yet",
  description: "Start a chat with a teammate to see it here.",
  actions: [
    {
      label: "Start a conversation",
      icon: New,
      variant: "outline",
      onClick: action("start conversation"),
    },
  ],
}

const person = (firstName: string, lastName: string, src: string) =>
  ({ type: "person", firstName, lastName, src }) as const

export const exampleGroups: SidebarChatGroup[] = [
  {
    id: "dms",
    title: "Direct messages",
    chats: [
      {
        id: "maria-jose",
        label: fakePeople.noor.fullName,
        avatar: person(
          fakePeople.noor.firstName,
          fakePeople.noor.lastName,
          "/avatars/person01.jpg"
        ),
        presence: "online",
        unreadCount: 5,
      },
      {
        id: "alexander",
        label: fakePeople.hana.fullName,
        avatar: person(
          fakePeople.hana.firstName,
          fakePeople.hana.lastName,
          "/avatars/person02.jpg"
        ),
        presence: "online",
        status: { icon: MicrophoneNegative, label: "Muted" },
      },
      {
        id: "jean-baptiste",
        label: fakePeople.caleb.fullName,
        avatar: person(
          fakePeople.caleb.firstName,
          fakePeople.caleb.lastName,
          "/avatars/person03.jpg"
        ),
        status: { icon: PalmTree, label: "On holidays" },
      },
      {
        id: "priyanka",
        label: fakePeople.yuki.fullName,
        avatar: person(
          fakePeople.yuki.firstName,
          fakePeople.yuki.lastName,
          "/avatars/person04.jpg"
        ),
        presence: "online",
        unreadCount: 2,
      },
      {
        id: "mohammed",
        label: fakePeople.sofia.fullName,
        avatar: person(
          fakePeople.sofia.firstName,
          fakePeople.sofia.lastName,
          "/avatars/person05.jpg"
        ),
        status: { icon: Clock, label: "Away" },
      },
      {
        id: "anastasia",
        label: fakePeople.ravi.fullName,
        avatar: person(
          fakePeople.ravi.firstName,
          fakePeople.ravi.lastName,
          "/avatars/person06.jpg"
        ),
        presence: "online",
      },
      {
        id: "thomas",
        label: fakePeople.greta.fullName,
        avatar: person(
          fakePeople.greta.firstName,
          fakePeople.greta.lastName,
          "/avatars/person07.jpg"
        ),
        unreadCount: 12,
      },
      {
        id: "sofia",
        label: fakePeople.iris.fullName,
        avatar: person(
          fakePeople.iris.firstName,
          fakePeople.iris.lastName,
          "/avatars/person08.jpg"
        ),
        presence: "online",
        unreadCount: 1,
        status: { icon: MicrophoneNegative, label: "Muted" },
      },
    ],
  },
  {
    id: "groups",
    title: "Groups",
    chats: [
      {
        id: "engineering",
        label: "Engineering",
        // Groups can use an emoji avatar…
        avatar: { type: "emoji", emoji: "🚀" },
        unreadCount: 132,
        // Unread mentions of you — the `@N` badge sits next to the unread count.
        mentionCount: 3,
      },
      {
        id: "product",
        label: "Product",
        avatar: { type: "emoji", emoji: "🧭" },
      },
      {
        id: "design-systems",
        label: "Design Systems",
        avatar: { type: "emoji", emoji: "🎨" },
        unreadCount: 23,
        mentionCount: 1,
      },
      {
        id: "data-platform",
        label: "Data Platform",
        avatar: { type: "emoji", emoji: "📊" },
      },
      {
        id: "devops-sre",
        label: "DevOps & SRE",
        // No emoji → company avatar built from the group name (its initials).
        avatar: { type: "company", name: "DevOps & SRE" },
        unreadCount: 2,
      },
    ],
  },
]

const meta = {
  title: "Navigation/Sidebar/ChatList",
  component: SidebarChatList,
  args: { emptyState: exampleEmptyState },
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="w-fit bg-f1-background-tertiary py-2">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs", "experimental"],
  // These are exported data fixtures reused by other stories, not stories
  // themselves — keep Storybook from rendering them as standalone stories
  // (they'd mount without a SidebarChatProvider and throw).
  excludeStories: ["exampleActions", "exampleGroups", "exampleEmptyState"],
} satisfies Meta<typeof SidebarChatList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SidebarChatProvider
      initialGroups={exampleGroups}
      initialActiveChatId="priyanka"
    >
      <SidebarChatList
        actions={exampleActions}
        emptyState={exampleEmptyState}
      />
    </SidebarChatProvider>
  ),
}

/** Blank state shown when the user hasn't started any conversation yet. */
export const Empty: Story = {
  render: () => (
    <SidebarChatProvider initialGroups={[]}>
      <SidebarChatList
        actions={exampleActions}
        emptyState={exampleEmptyState}
      />
    </SidebarChatProvider>
  ),
}

/**
 * Whole-list skeleton shown while loading and nothing is known yet. The blank
 * state is intentionally NOT shown here (that would read as "no conversations").
 */
export const Loading: Story = {
  render: () => (
    <SidebarChatProvider initialGroups={[]}>
      <SidebarChatList
        actions={exampleActions}
        emptyState={exampleEmptyState}
        loading
      />
    </SidebarChatProvider>
  ),
}

/**
 * Cascade: the conversations and groups are known, but some names/avatars are
 * still resolving — those rows show a skeleton in place while the rest render
 * normally. As each one resolves, flip its `loading` to false.
 */
export const CascadeLoading: Story = {
  render: () => (
    <SidebarChatProvider
      initialGroups={exampleGroups.map((group, groupIndex) => ({
        ...group,
        chats: group.chats.map((chat, chatIndex) => ({
          ...chat,
          loading: (groupIndex + chatIndex) % 3 === 0,
        })),
      }))}
    >
      <SidebarChatList
        actions={exampleActions}
        emptyState={exampleEmptyState}
      />
    </SidebarChatProvider>
  ),
}

/** Demonstrates live updates + reordering driven from outside the list. */
const LiveControls = () => {
  const { setUnread, reorder, setActiveChat } = useSidebarChatActions()
  return (
    <div className="flex flex-col gap-2 px-3 pb-3">
      <F0Button
        size="sm"
        variant="outline"
        label={`New message from ${fakePeople.greta.firstName}`}
        onClick={() => setUnread("thomas", 5)}
      />
      <F0Button
        size="sm"
        variant="outline"
        label={`Bump ${fakePeople.sofia.firstName} to top`}
        onClick={() =>
          reorder("dms", [
            "mohammed",
            "maria-jose",
            "alexander",
            "jean-baptiste",
            "priyanka",
            "anastasia",
            "thomas",
            "sofia",
          ])
        }
      />
      <F0Button
        size="sm"
        variant="outline"
        label="Open Engineering (from anywhere)"
        onClick={() => setActiveChat("engineering")}
      />
    </div>
  )
}

export const LiveUpdates: Story = {
  render: () => (
    <SidebarChatProvider initialGroups={exampleGroups}>
      <LiveControls />
      <SidebarChatList
        actions={exampleActions}
        emptyState={exampleEmptyState}
      />
    </SidebarChatProvider>
  ),
}

// Pool reused by the pinning demo — the DMs, minus their unread/status chrome
// so the focus stays on the move between groups.
const pinnablePool: SidebarChat[] = exampleGroups[0].chats.map((chat) => ({
  id: chat.id,
  label: chat.label,
  avatar: chat.avatar,
}))

/**
 * Drives pin/unpin into the two-group layout (Pinned / Conversations). Pinning
 * is optimistic — the row glides to the other group at once — and a simulated
 * ~1.2s backend keeps the row in `pinPending` (spinner) until it "confirms",
 * mirroring how the host (Factorial, Stream-backed) wires it via
 * `useChatHistory`'s `pendingIds`.
 */
const PinController = () => {
  const { setGroups } = useSidebarChatActions()
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(
    () => new Set(["sofia"])
  )
  const [pendingIds, setPendingIds] = useState<Set<string>>(() => new Set())

  const togglePin = useCallback((id: string) => {
    setPinnedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
    // Simulate the backend round-trip: pending while it "saves".
    setPendingIds((prev) => new Set(prev).add(id))
    setTimeout(
      () =>
        setPendingIds((prev) => {
          const next = new Set(prev)
          next.delete(id)
          return next
        }),
      1200
    )
  }, [])

  useEffect(() => {
    const toChat = (chat: SidebarChat): SidebarChat => ({
      ...chat,
      pinned: pinnedIds.has(chat.id),
      pinPending: pendingIds.has(chat.id),
      onTogglePin: () => togglePin(chat.id),
    })
    setGroups([
      {
        id: "pinned",
        title: "Pinned",
        chats: pinnablePool.filter((c) => pinnedIds.has(c.id)).map(toChat),
      },
      {
        id: "conversations",
        title: "Conversations",
        chats: pinnablePool.filter((c) => !pinnedIds.has(c.id)).map(toChat),
      },
    ])
  }, [pinnedIds, pendingIds, setGroups, togglePin])

  return null
}

/**
 * Hover a row and click the pin to move it between the Pinned and
 * Conversations groups. The row slides across (layout animation) and shows a
 * spinner while the simulated backend confirms.
 */
export const PinnedReordering: Story = {
  render: () => (
    <SidebarChatProvider initialGroups={[]}>
      <PinController />
      <SidebarChatList
        actions={exampleActions}
        emptyState={exampleEmptyState}
      />
    </SidebarChatProvider>
  ),
}
