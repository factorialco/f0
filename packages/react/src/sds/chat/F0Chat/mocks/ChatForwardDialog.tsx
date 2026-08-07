"use client"

import { useMemo, useState, type ReactNode } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0SearchInput } from "@/components/F0SearchInput"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"

import { type F0ChatMessage } from "../types"
import { SEED_BY_ID, SEEDS } from "./mockSeeds"
import { useMockChatApp } from "./useMockChatApp"
import { OneEllipsis } from "@/lib/OneEllipsis/OneEllipsis"

/**
 * Host-owned "Forward to…" picker (same pattern as the "Edit group" dialog in
 * {@link useDemoHeaderActions}: F0Chat only fires a callback with the message,
 * the host decides what UI that opens). Lets the user multi-select target
 * conversations, then pushes a verbatim forwarded copy into each target via the
 * shared mock store (`useMockChatApp().send`, the same call the composer uses,
 * just aimed at a conversation OTHER than the one currently open).
 */
export const ChatForwardDialog = ({
  message,
  currentChannelId,
  onClose,
}: {
  /** The message being forwarded, or null when the dialog is closed. */
  message: F0ChatMessage | null
  /** Excluded from the target list — you can't forward a message into the
   * conversation it already came from. */
  currentChannelId: string
  onClose: () => void
}): ReactNode => {
  const i18n = useI18n()
  const app = useMockChatApp()
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const targets = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return SEEDS.filter((seed) => seed.id !== currentChannelId).filter(
      (seed) => needle === "" || seed.title.toLowerCase().includes(needle)
    )
  }, [query, currentChannelId])

  const reset = () => {
    setQuery("")
    setSelected(new Set())
    onClose()
  }

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const confirm = () => {
    if (!message) return
    const origin = SEED_BY_ID.get(currentChannelId)
    const forwardedFrom = {
      id: message.id,
      author: message.author,
      body: message.body,
      attachments: message.attachments,
      channelTitle: origin?.title,
    }
    for (const targetId of selected) {
      // The forwarded copy IS the original message verbatim (body, attachments,
      // mentions) — it renders like any normal bubble, just with the thin
      // "Forwarded" marker on top. `forwardedFrom` only flags the provenance.
      app.send(targetId, {
        body: message.body,
        attachments: message.attachments,
        mentions: message.mentions,
        mentionedEveryone: message.mentionedEveryone,
        forwardedFrom,
      })
    }
    reset()
  }

  return (
    <F0Dialog
      isOpen={message != null}
      onClose={reset}
      title={i18n.chat.forwardTo}
      width="sm"
      primaryAction={{
        label:
          selected.size > 0
            ? `${i18n.chat.forwardConfirm} · ${selected.size}`
            : i18n.chat.forwardConfirm,
        onClick: confirm,
        disabled: selected.size === 0,
      }}
      secondaryAction={{ label: i18n.actions.cancel, onClick: reset }}
    >
      <div className="flex flex-col gap-3">
        <F0SearchInput
          placeholder={i18n.chat.forwardSearchPlaceholder}
          value={query}
          onChange={setQuery}
        />
        <div className="flex max-h-56 flex-col gap-0.5 overflow-y-auto">
          {targets.length === 0 ? (
            <p className="px-2 py-6 text-center text-base text-f1-foreground-secondary">
              {i18n.chat.forwardNoResults}
            </p>
          ) : (
            targets.map((seed) => (
              <label
                key={seed.id}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-f1-background-secondary"
              >
                <F0Avatar avatar={seed.avatar} size="sm" />
                <OneEllipsis className="flex-1">{seed.title}</OneEllipsis>
                <F0Checkbox
                  checked={selected.has(seed.id)}
                  onCheckedChange={() => toggle(seed.id)}
                  hideLabel
                  title={seed.title}
                />
              </label>
            ))
          )}
        </div>
      </div>
    </F0Dialog>
  )
}
