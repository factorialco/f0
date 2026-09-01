import { F0Button, F0Icon, IconType } from "@factorialco/f0-react"
import {
  CalendarArrowRight,
  ChartLine,
  Check,
  Ellipsis,
  Lightbulb,
  Link,
  Sparkles,
} from "@factorialco/f0-react/icons/app"
import { useRef, useState } from "react"
import { createPortal } from "react-dom"

import type { WindowId } from "./types"

import { Activity as ActivityIcon } from "./ActivityIcon"
import { Communities as CommunitiesIcon } from "./CommunitiesIcon"
import { windowRegistry } from "./WindowsColumn"

/**
 * The menu, in the design's order ("View drawer"). EVERY item is listed —
 * including the three with no widget behind them yet (per Oskar: show the
 * item, just don't open a widget). Those render as ordinary rows that do
 * nothing when clicked, rather than being hidden or greyed out, so the
 * menu reads as the finished shape while the surfaces catch up.
 *
 * An explicit ordered list, not a filter over `windowIds`: the order is
 * part of the design, and the registry holds things reached elsewhere
 * (clockin from its own button, inbox from "View all", preview from a
 * conversation).
 */
type MenuEntry =
  | { kind: "widget"; id: WindowId; icon: IconType }
  | { kind: "soon"; key: string; label: string; icon: IconType }

const MENU_ENTRIES: MenuEntry[] = [
  { kind: "widget", id: "communities", icon: CommunitiesIcon },
  // "Anniversaries" IS the celebrations widget — birthdays and work
  // anniversaries. It was parked out of the menu while its design was
  // reworked; the updated drawer lists it, so it is back.
  { kind: "widget", id: "celebrations", icon: Sparkles },
  { kind: "widget", id: "events", icon: CalendarArrowRight },
  { kind: "widget", id: "insights", icon: ChartLine },
  { kind: "soon", key: "activity", label: "Activity", icon: ActivityIcon },
  {
    kind: "soon",
    key: "opportunities",
    label: "Opportunities",
    icon: Lightbulb,
  },
  { kind: "soon", key: "links", label: "Links", icon: Link },
]

/**
 * The navbar "⋮" menu (Figma node 1027:8226): one row per available
 * widget; a check marks the ones currently open. Clicking toggles the
 * widget in the stack.
 *
 * Clock in briefly lived in this list (2026-08-30) and moved back out to
 * its own navbar button on 2026-08-31, taking its pending dot with it —
 * so this menu is once again just the widget list.
 */
export function WindowsMenu({
  open,
  onToggle,
}: {
  open: WindowId[]
  onToggle: (id: WindowId) => void
}) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ top: number; right: number } | null>(null)

  const toggle = () => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos((p) =>
      p ? null : { top: rect.bottom + 4, right: window.innerWidth - rect.right }
    )
  }

  // PORTALLED to <body>, like every other menu here. It used to be an
  // `absolute` child of the navbar, and its z-50 meant nothing: the
  // navbar sits inside `main.relative.z-10`, which caps the whole subtree
  // at 10, while the floating-widget layer is portalled to body at z-30.
  // So with Clock in floating, opening this menu drew it UNDERNEATH the
  // card — the button looked dead when it had actually worked (per Oskar).
  // At body level the z-index means what it says.
  const menu = pos && (
    <>
      <div className="fixed inset-0 z-40" onClick={() => setPos(null)} />
      <div
        style={{ top: pos.top, right: pos.right, transformOrigin: "top right" }}
        className="f0c-popover fixed z-50 flex w-56 flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]"
      >
        {MENU_ENTRIES.map((entry) => {
          const isWidget = entry.kind === "widget"
          const isOpen = isWidget && open.includes(entry.id)
          return (
            <button
              key={isWidget ? entry.id : entry.key}
              onClick={
                isWidget
                  ? () => {
                      onToggle(entry.id)
                      setPos(null)
                    }
                  : undefined
              }
              className="flex w-full cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left hover:bg-f1-background-tertiary"
            >
              <F0Icon icon={entry.icon} size="md" color="default" />
              <span className="flex-1 text-base font-medium text-f1-foreground">
                {isWidget ? windowRegistry[entry.id].title : entry.label}
              </span>
              {isOpen && <F0Icon icon={Check} size="sm" color="info" />}
            </button>
          )
        })}
      </div>
    </>
  )

  return (
    // Tagged so a floating widget can anchor its resting position under
    // this button (see FLOAT_ANCHORS).
    <div ref={buttonRef} data-home-widgets-menu className="relative">
      {menu && createPortal(menu, document.body)}
      <F0Button
        variant="ghost"
        size="md"
        icon={Ellipsis}
        hideLabel
        label="Open widgets menu"
        onClick={toggle}
      />
    </div>
  )
}
