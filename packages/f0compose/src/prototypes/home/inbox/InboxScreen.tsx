import { useSearchParams } from "react-router-dom"

import type { InboxPreset } from "./inboxTasks"

import { useOpenChats } from "../comms/chatStore"
import { useNeedsYou } from "../needsYouStore"
import { useProfile } from "../profileStore"
import { InboxRow } from "./InboxRow"
import { openInboxTasks } from "./inboxTasks"

/**
 * The Inbox canvas — the same rows as the panel, full width, because
 * every first-level rail item now owns the content area (Angel,
 * 2026-09-14). It reads its preset from the URL, which is what the
 * panel's chips write, so the two lists can never disagree.
 */
export function InboxScreen() {
  const profile = useProfile()
  const needsYou = useNeedsYou()
  const open = useOpenChats()
  const [searchParams] = useSearchParams()
  const raw = searchParams.get("preset")
  const preset: InboxPreset =
    raw === "request" || raw === "notification" ? raw : "all"
  const rows = openInboxTasks(profile, needsYou.cleared, preset)
  return (
    <div className="home-canvas-scroll flex h-full w-full min-w-0 flex-col overflow-y-auto">
      {rows.map((item) => (
        <InboxRow
          key={item.id}
          item={item}
          active={open.includes(`ticket:${item.id}`)}
        />
      ))}
    </div>
  )
}
