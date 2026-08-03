import { F0Button, F0Icon, IconType } from "@factorialco/f0-react"
import {
  BarGraph,
  Calendar,
  Check,
  Ellipsis,
  Envelope,
  Feed,
  Sparkles,
} from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import type { WindowId } from "./types"
import { windowIds } from "./types"
import { windowRegistry } from "./WindowsColumn"

const menuIcons: Partial<Record<WindowId, IconType>> = {
  celebrations: Sparkles,
  communities: Feed,
  events: Calendar,
  inbox: Envelope,
  insights: BarGraph,
}

// Celebrations is parked while its design is being reworked; preview is
// contextual (opened from a conversation's play action) — both stay in
// the registry, they're just not offered in the menu.
const HIDDEN_FROM_MENU: WindowId[] = ["celebrations", "preview"]

/**
 * The navbar "⋮" menu (Figma node 1027:8226): one row per available
 * window; a check marks the ones currently open. Clicking toggles the
 * window in the stack.
 */
export function WindowsMenu({
  open,
  onToggle,
}: {
  open: WindowId[]
  /** `originRect` = the clicked row, so opening windows FLIP-grow from it. */
  onToggle: (id: WindowId, originRect?: DOMRect) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative">
      <F0Button
        variant="ghost"
        size="md"
        icon={Ellipsis}
        hideLabel
        label="Open windows menu"
        onClick={() => setMenuOpen((o) => !o)}
      />
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMenuOpen(false)}
          />
          <div style={{ transformOrigin: "top right" }}
            className="f0c-popover absolute right-0 top-full z-50 mt-1 flex w-56 flex-col rounded-md border border-solid border-f1-border-secondary bg-f1-background p-1 shadow-[0_4px_20px_0_rgba(13,22,37,0.08)]">
            {windowIds
              .filter((id) => !HIDDEN_FROM_MENU.includes(id))
              .map((id) => {
                const isOpen = open.includes(id)
                return (
                  <button
                    key={id}
                    onClick={(event) => {
                      onToggle(id, event.currentTarget.getBoundingClientRect())
                      setMenuOpen(false)
                    }}
                    className="flex w-full cursor-pointer items-center gap-2 rounded-[10px] p-2 text-left hover:bg-f1-background-tertiary"
                  >
                    {menuIcons[id] && <F0Icon icon={menuIcons[id]} size="md" color="default" />}
                    <span className="flex-1 text-base font-medium text-f1-foreground">
                      {windowRegistry[id].title}
                    </span>
                    {isOpen && <F0Icon icon={Check} size="sm" color="positive" />}
                  </button>
                )
              })}
          </div>
        </>
      )}
    </div>
  )
}
