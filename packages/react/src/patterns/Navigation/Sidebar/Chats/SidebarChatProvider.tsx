import { createContext, ReactNode, useContext, useMemo, useState } from "react"

import {
  SidebarChat,
  SidebarChatActions,
  SidebarChatGroup,
  SidebarChatStore,
} from "./types"

type SidebarChatState = {
  groups: SidebarChatGroup[]
  activeChatId?: string
}

const StateContext = createContext<SidebarChatState | null>(null)
const ActionsContext = createContext<SidebarChatActions | null>(null)

const mapGroup = (
  groups: SidebarChatGroup[],
  groupId: string,
  fn: (group: SidebarChatGroup) => SidebarChatGroup
): SidebarChatGroup[] =>
  groups.map((group) => (group.id === groupId ? fn(group) : group))

const mapChats = (
  groups: SidebarChatGroup[],
  fn: (chats: SidebarChat[]) => SidebarChat[]
): SidebarChatGroup[] =>
  groups.map((group) => ({ ...group, chats: fn(group.chats) }))

export type SidebarChatProviderProps = {
  children: ReactNode
  /** Initial chat groups. Live updates are applied through the store actions. */
  initialGroups?: SidebarChatGroup[]
  /** Initially active chat id. Chats are not navigation links (see store). */
  initialActiveChatId?: string
}

export const SidebarChatProvider = ({
  children,
  initialGroups = [],
  initialActiveChatId,
}: SidebarChatProviderProps) => {
  const [groups, setGroups] = useState<SidebarChatGroup[]>(initialGroups)
  const [activeChatId, setActiveChatId] = useState<string | undefined>(
    initialActiveChatId
  )

  // Actions are stable: they only use the functional form of the setters, so
  // their identity never changes and action-only consumers don't re-render
  // when the state changes.
  const actions = useMemo<SidebarChatActions>(
    () => ({
      setGroups,
      setActiveChat: (id) => setActiveChatId(id ?? undefined),
      upsertChat: (groupId, chat) =>
        setGroups((prev) => {
          const exists = prev.some((group) =>
            group.chats.some((c) => c.id === chat.id)
          )
          if (exists) {
            return mapChats(prev, (chats) =>
              chats.map((c) => (c.id === chat.id ? { ...c, ...chat } : c))
            )
          }
          return mapGroup(prev, groupId, (group) => ({
            ...group,
            chats: [...group.chats, chat],
          }))
        }),
      updateChat: (id, patch) =>
        setGroups((prev) =>
          mapChats(prev, (chats) =>
            chats.map((c) => (c.id === id ? { ...c, ...patch } : c))
          )
        ),
      removeChat: (id) =>
        setGroups((prev) =>
          mapChats(prev, (chats) => chats.filter((c) => c.id !== id))
        ),
      setUnread: (id, count) =>
        setGroups((prev) =>
          mapChats(prev, (chats) =>
            chats.map((c) => (c.id === id ? { ...c, unreadCount: count } : c))
          )
        ),
      reorder: (groupId, orderedIds) =>
        setGroups((prev) =>
          mapGroup(prev, groupId, (group) => {
            const byId = new Map(group.chats.map((c) => [c.id, c]))
            const reordered = orderedIds
              .map((id) => byId.get(id))
              .filter((c): c is SidebarChat => Boolean(c))
            // Keep any chat not referenced in orderedIds at the end.
            const rest = group.chats.filter((c) => !orderedIds.includes(c.id))
            return { ...group, chats: [...reordered, ...rest] }
          })
        ),
    }),
    []
  )

  const state = useMemo<SidebarChatState>(
    () => ({ groups, activeChatId }),
    [groups, activeChatId]
  )

  return (
    <ActionsContext.Provider value={actions}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </ActionsContext.Provider>
  )
}

const useChatState = (): SidebarChatState => {
  const state = useContext(StateContext)
  if (state === null) {
    throw new Error("useSidebarChats must be used within a SidebarChatProvider")
  }
  return state
}

const useActions = (): SidebarChatActions => {
  const actions = useContext(ActionsContext)
  if (actions === null) {
    throw new Error(
      "useSidebarChatActions must be used within a SidebarChatProvider"
    )
  }
  return actions
}

/** Read the chat state (groups, active chat) and the imperative store API. */
export const useSidebarChats = (): SidebarChatStore => {
  const state = useChatState()
  const actions = useActions()
  return useMemo(() => ({ ...state, ...actions }), [state, actions])
}

/**
 * Access only the mutation actions, without subscribing to state changes.
 * Use this from code that pushes updates (e.g. websocket handlers) so it
 * doesn't re-render on every chat change.
 */
export const useSidebarChatActions = (): SidebarChatActions => useActions()
