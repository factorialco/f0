import type { Meta, StoryObj } from "@storybook/react-vite"

import { action } from "storybook/actions"

import { F0Button } from "@/components/F0Button"
import { Clock, MicrophoneNegative, New, PalmTree, People } from "@/icons/app"

import { SidebarChatList } from "./SidebarChatList"
import {
  SidebarChatProvider,
  useSidebarChatActions,
} from "./SidebarChatProvider"
import { SidebarChatAction, SidebarChatGroup } from "./types"

export const exampleActions: SidebarChatAction[] = [
  { label: "New chat", icon: New, onClick: action("new chat") },
  { label: "New group", icon: People, onClick: action("new group") },
]

const person = (firstName: string, lastName: string, src: string) =>
  ({ type: "person", firstName, lastName, src }) as const

export const exampleGroups: SidebarChatGroup[] = [
  {
    id: "dms",
    title: "Direct messages",
    chats: [
      {
        id: "maria-jose",
        label: "María José Fernández-Velasco",
        avatar: person(
          "María José",
          "Fernández-Velasco",
          "/avatars/person01.jpg"
        ),
        presence: "online",
        unreadCount: 5,
      },
      {
        id: "alexander",
        label: "Alexander Whitmore-Brown",
        avatar: person("Alexander", "Whitmore-Brown", "/avatars/person02.jpg"),
        presence: "online",
        status: { icon: MicrophoneNegative, label: "Muted" },
      },
      {
        id: "jean-baptiste",
        label: "Jean-Baptiste Lefèvre",
        avatar: person("Jean-Baptiste", "Lefèvre", "/avatars/person03.jpg"),
        status: { icon: PalmTree, label: "On holidays" },
      },
      {
        id: "priyanka",
        label: "Priyanka Ramaswamy Iyer",
        avatar: person("Priyanka", "Ramaswamy Iyer", "/avatars/person04.jpg"),
        presence: "online",
        unreadCount: 2,
      },
      {
        id: "mohammed",
        label: "Mohammed Al-Rashid",
        avatar: person("Mohammed", "Al-Rashid", "/avatars/person05.jpg"),
        status: { icon: Clock, label: "Away" },
      },
      {
        id: "anastasia",
        label: "Anastasia Volkonskaya",
        avatar: person("Anastasia", "Volkonskaya", "/avatars/person06.jpg"),
        presence: "online",
      },
      {
        id: "thomas",
        label: "Thomas O'Sullivan",
        avatar: person("Thomas", "O'Sullivan", "/avatars/person07.jpg"),
        unreadCount: 12,
      },
      {
        id: "sofia",
        label: "Sofía Gutiérrez del Río",
        avatar: person("Sofía", "Gutiérrez del Río", "/avatars/person08.jpg"),
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
  excludeStories: ["exampleActions", "exampleGroups"],
} satisfies Meta<typeof SidebarChatList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SidebarChatProvider
      initialGroups={exampleGroups}
      initialActiveChatId="priyanka"
    >
      <SidebarChatList actions={exampleActions} />
    </SidebarChatProvider>
  ),
}

/** Blank state shown when the user hasn't started any conversation yet. */
export const Empty: Story = {
  render: () => (
    <SidebarChatProvider initialGroups={[]}>
      <SidebarChatList actions={exampleActions} />
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
      <SidebarChatList actions={exampleActions} loading />
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
      <SidebarChatList actions={exampleActions} />
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
        label="New message from Thomas"
        onClick={() => setUnread("thomas", 5)}
      />
      <F0Button
        size="sm"
        variant="outline"
        label="Bump Mohammed to top"
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
      <SidebarChatList actions={exampleActions} />
    </SidebarChatProvider>
  ),
}
