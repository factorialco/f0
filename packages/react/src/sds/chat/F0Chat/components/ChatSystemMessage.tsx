import { Fragment, type ReactNode } from "react"

import { useI18n, type TranslationKey } from "@/lib/providers/i18n"

import {
  type F0ChatSystemEvent,
  type F0ChatSystemMessage as F0ChatSystemMessageType,
} from "../types"
import { ChatUserHoverCard } from "./ChatUserHoverCard"

/** How many names appear before collapsing the rest into "and N more". */
const MAX_MEMBER_NAMES = 3

const TEMPLATE_KEYS: Record<
  F0ChatSystemEvent,
  { one: TranslationKey; other: TranslationKey }
> = {
  "member.added": {
    one: "chat.system.memberAdded.one",
    other: "chat.system.memberAdded.other",
  },
  "member.removed": {
    one: "chat.system.memberRemoved.one",
    other: "chat.system.memberRemoved.other",
  },
  "member.left": {
    one: "chat.system.memberLeft.one",
    other: "chat.system.memberLeft.other",
  },
}

/** Replace `{{key}}` tokens in an i18n template with React nodes — the
 * string-only `t(key, args)` can't interpolate elements. */
const interpolate = (
  template: string,
  values: Record<string, ReactNode>
): ReactNode[] =>
  template
    .split(/\{\{(\w+)\}\}/)
    .map((part, index) => (
      <Fragment key={index}>{index % 2 === 1 ? values[part] : part}</Fragment>
    ))

/** Interleave nodes with a separator ("a, b, c"). */
const joinNodes = (nodes: ReactNode[], separator: string): ReactNode[] =>
  nodes.flatMap((node, index) =>
    index === 0
      ? [node]
      : [separator, <Fragment key={`n-${index}`}>{node}</Fragment>]
  )

/**
 * System row for membership events, minimal text line — "@Pedro, @Juan and
 * 5 more were added to the group" — the visual sibling of
 * {@link DateTimeSeparator}. Each `@name` reads in the secondary colour and
 * opens the person's profile hover card (with its "View profile" link), the
 * same affordance as sender avatars. Names beyond {@link MAX_MEMBER_NAMES}
 * (plus the host's `remainingCount`) collapse into the localized "and N more".
 * Without a structured payload the row falls back to the plain `body` text
 * (e.g. an unknown GetStream system message), and renders nothing when both
 * are absent.
 */
export const ChatSystemMessage = ({
  message,
}: {
  message: F0ChatSystemMessageType
}): ReactNode => {
  const i18n = useI18n()
  const payload = message.system

  const line = (content: ReactNode) => (
    <div className="flex justify-center px-4 py-6">
      <span className="text-center text-sm text-f1-foreground-tertiary">
        {content}
      </span>
    </div>
  )

  if (!payload) {
    return message.body ? line(message.body) : null
  }

  const { event, members, remainingCount } = payload
  const visible = members.slice(0, MAX_MEMBER_NAMES)
  const collapsed = members.length - visible.length + (remainingCount ?? 0)

  // "@name" in the secondary colour; hovering opens the profile card (with
  // its "View profile" link), mirroring the sender-avatar affordance.
  const chips = visible.map((user) => (
    <ChatUserHoverCard key={user.id} user={user}>
      <span className="cursor-default font-medium">@{user.name}</span>
    </ChatUserHoverCard>
  ))

  // "@Pedro, @Juan and @Raúl" / "@Pedro, @Juan, @Raúl and 5 more" — the
  // conjunction fragments are i18n keys so every language words them its way.
  const membersNode: ReactNode =
    collapsed > 0
      ? interpolate(i18n.t("chat.system.membersWithMore"), {
          names: joinNodes(chips, ", "),
          count: String(collapsed),
        })
      : chips.length > 1
        ? interpolate(i18n.t("chat.system.membersWithLast"), {
            names: joinNodes(chips.slice(0, -1), ", "),
            last: chips[chips.length - 1],
          })
        : chips[0]

  const count = members.length + (remainingCount ?? 0)
  const keys = TEMPLATE_KEYS[event]
  return line(
    interpolate(i18n.t(count === 1 ? keys.one : keys.other), {
      members: membersNode,
    })
  )
}
