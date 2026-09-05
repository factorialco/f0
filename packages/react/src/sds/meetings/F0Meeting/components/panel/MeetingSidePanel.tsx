import { useEffect, useMemo, useRef } from "react"

import { F0Button } from "@/components/F0Button"
import { Cross } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Tabs, type TabItem } from "@/patterns/Navigation/Tabs"

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

  /**
   * `TabItem` has no badge field, so an unread count cannot ride on the tab.
   * It is not lost: `core:chat` in the control bar sums `tab.badge` and shows
   * it there — which is the only place it matters, since a badge is the signal
   * that something arrived WHILE THE PANEL WAS CLOSED.
   */
  const tabItems = useMemo<TabItem[]>(
    () => tabs.map((tab) => ({ id: tab.id, label: tab.label })),
    [tabs]
  )

  // Opening a panel that nothing focuses leaves the keyboard where it was, on
  // a control that is now behind an overlay.
  useEffect(() => {
    if (isSidePanelOpen) closeRef.current?.focus()
  }, [isSidePanelOpen])

  if (!isSidePanelOpen || tabs.length === 0) return null

  return (
    <aside
      className="flex w-[420px] shrink-0 flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background pt-2"
      aria-label={i18n.meeting.chatPanel}
      data-testid="meeting-side-panel"
    >
      <div className="flex shrink-0 items-center">
        <Tabs
          tabs={tabItems}
          activeTabId={activeId}
          setActiveTabId={setActiveTabId}
        />

        <div className="shrink-0 border-b border-solid border-f1-border-secondary flex-grow border-0 h-[48px] flex items-center justify-end pr-3 pb-2">
          <F0Button
            ref={closeRef}
            variant="outline"
            size="md"
            hideLabel
            icon={Cross}
            label={i18n.meeting.closePanel}
            onClick={() => setSidePanelOpen(false)}
          />
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        {active?.content}
      </div>
    </aside>
  )
}
