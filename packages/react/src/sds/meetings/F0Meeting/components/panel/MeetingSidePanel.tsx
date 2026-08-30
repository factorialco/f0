import { useEffect, useMemo, useRef } from "react"

import { F0Icon } from "@/components/F0Icon"
import { Cross } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"

import { useMeetingSurface } from "../../providers/MeetingSurfaceProvider"
import { type F0MeetingSidePanel } from "../../types"

export type MeetingSidePanelProps = {
  panel: F0MeetingSidePanel
}

/**
 * The in-call panel: chat, transcript and notes beside the grid.
 *
 * F0 owns the bar, the selection and the close button because the control that
 * opens the panel lives in F0's own action bar and needs the tab labels and
 * unread counts. What goes inside each tab is entirely the host's.
 *
 * Only one tab is mounted at a time. That is deliberate for the chat tab in
 * particular: its transcript is virtualized, and measuring rows inside a
 * display:none subtree yields zero heights that the list then has to correct
 * on reveal.
 */
export const MeetingSidePanel = ({ panel }: MeetingSidePanelProps) => {
  const i18n = useI18n()
  const { isSidePanelOpen, setSidePanelOpen, activeTabId, setActiveTabId } =
    useMeetingSurface()
  const closeRef = useRef<HTMLButtonElement>(null)

  const tabs = panel.tabs
  const activeId =
    tabs.find((tab) => tab.id === activeTabId)?.id ??
    panel.defaultTabId ??
    tabs[0]?.id

  const active = useMemo(
    () => tabs.find((tab) => tab.id === activeId),
    [tabs, activeId]
  )

  // Opening a panel that nothing focuses leaves the keyboard where it was, on
  // a control that is now behind an overlay.
  useEffect(() => {
    if (isSidePanelOpen) closeRef.current?.focus()
  }, [isSidePanelOpen])

  if (!isSidePanelOpen || tabs.length === 0) return null

  return (
    <aside
      className="flex w-[420px] shrink-0 flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background"
      aria-label={i18n.meeting.chatPanel}
      data-testid="meeting-side-panel"
    >
      <div className="flex h-14 shrink-0 items-center gap-1 border-b border-solid border-f1-border-secondary px-2">
        <div role="tablist" className="flex min-w-0 flex-1 items-center gap-1">
          {tabs.map((tab) => {
            const selected = tab.id === activeId
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTabId(tab.id)}
                className={cn(
                  "relative flex h-10 items-center gap-1.5 rounded-lg px-3 text-base font-medium transition-colors duration-150 ease-out",
                  selected
                    ? "bg-f1-background-secondary text-f1-foreground"
                    : "text-f1-foreground-secondary hover:bg-f1-background-secondary",
                  focusRing()
                )}
              >
                {tab.label}
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="rounded-full bg-f1-background-accent-bold px-1.5 text-sm font-semibold text-f1-foreground-inverse">
                    {tab.badge}
                  </span>
                )}
                {selected && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-[9px] h-0.5 rounded-full bg-f1-foreground"
                  />
                )}
              </button>
            )
          })}
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={() => setSidePanelOpen(false)}
          aria-label={i18n.meeting.closePanel}
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-solid border-f1-border-secondary text-f1-foreground hover:bg-f1-background-secondary",
            focusRing()
          )}
        >
          <F0Icon icon={Cross} size="sm" />
        </button>
      </div>

      <div
        role="tabpanel"
        className="flex min-h-0 flex-1 flex-col overflow-hidden"
      >
        {active?.content}
      </div>
    </aside>
  )
}
